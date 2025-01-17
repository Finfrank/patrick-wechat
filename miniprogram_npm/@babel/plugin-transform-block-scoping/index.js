module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1651912610552, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _helperPluginUtils = require("@babel/helper-plugin-utils");

var _tdz = require("./tdz");

var _core = require("@babel/core");

const DONE = new WeakSet();

var _default = (0, _helperPluginUtils.declare)((api, opts) => {
  api.assertVersion(7);
  const {
    throwIfClosureRequired = false,
    tdz: tdzEnabled = false
  } = opts;

  if (typeof throwIfClosureRequired !== "boolean") {
    throw new Error(`.throwIfClosureRequired must be a boolean, or undefined`);
  }

  if (typeof tdzEnabled !== "boolean") {
    throw new Error(`.tdz must be a boolean, or undefined`);
  }

  return {
    name: "transform-block-scoping",
    visitor: {
      VariableDeclaration(path) {
        const {
          node,
          parent,
          scope
        } = path;
        if (!isBlockScoped(node)) return;
        convertBlockScopedToVar(path, null, parent, scope, true);

        if (node._tdzThis) {
          const nodes = [node];

          for (let i = 0; i < node.declarations.length; i++) {
            const decl = node.declarations[i];

            const assign = _core.types.assignmentExpression("=", _core.types.cloneNode(decl.id), decl.init || scope.buildUndefinedNode());

            assign._ignoreBlockScopingTDZ = true;
            nodes.push(_core.types.expressionStatement(assign));
            decl.init = this.addHelper("temporalUndefined");
          }

          node._blockHoist = 2;

          if (path.isCompletionRecord()) {
            nodes.push(_core.types.expressionStatement(scope.buildUndefinedNode()));
          }

          path.replaceWithMultiple(nodes);
        }
      },

      Loop(path, state) {
        const {
          parent,
          scope
        } = path;
        path.ensureBlock();
        const blockScoping = new BlockScoping(path, path.get("body"), parent, scope, throwIfClosureRequired, tdzEnabled, state);
        const replace = blockScoping.run();
        if (replace) path.replaceWith(replace);
      },

      CatchClause(path, state) {
        const {
          parent,
          scope
        } = path;
        const blockScoping = new BlockScoping(null, path.get("body"), parent, scope, throwIfClosureRequired, tdzEnabled, state);
        blockScoping.run();
      },

      "BlockStatement|SwitchStatement|Program"(path, state) {
        if (!ignoreBlock(path)) {
          const blockScoping = new BlockScoping(null, path, path.parent, path.scope, throwIfClosureRequired, tdzEnabled, state);
          blockScoping.run();
        }
      }

    }
  };
});

exports.default = _default;

function ignoreBlock(path) {
  return _core.types.isLoop(path.parent) || _core.types.isCatchClause(path.parent);
}

const buildRetCheck = (0, _core.template)(`
  if (typeof RETURN === "object") return RETURN.v;
`);

function isBlockScoped(node) {
  if (!_core.types.isVariableDeclaration(node)) return false;
  if (node[_core.types.BLOCK_SCOPED_SYMBOL]) return true;
  if (node.kind !== "let" && node.kind !== "const") return false;
  return true;
}

function isInLoop(path) {
  const loopOrFunctionParent = path.find(path => path.isLoop() || path.isFunction());
  return loopOrFunctionParent == null ? void 0 : loopOrFunctionParent.isLoop();
}

function convertBlockScopedToVar(path, node, parent, scope, moveBindingsToParent = false) {
  if (!node) {
    node = path.node;
  }

  if (isInLoop(path) && !_core.types.isFor(parent)) {
    for (let i = 0; i < node.declarations.length; i++) {
      const declar = node.declarations[i];
      declar.init = declar.init || scope.buildUndefinedNode();
    }
  }

  node[_core.types.BLOCK_SCOPED_SYMBOL] = true;
  node.kind = "var";

  if (moveBindingsToParent) {
    const parentScope = scope.getFunctionParent() || scope.getProgramParent();

    for (const name of Object.keys(path.getBindingIdentifiers())) {
      const binding = scope.getOwnBinding(name);
      if (binding) binding.kind = "var";
      scope.moveBindingTo(name, parentScope);
    }
  }
}

function isVar(node) {
  return _core.types.isVariableDeclaration(node, {
    kind: "var"
  }) && !isBlockScoped(node);
}

const letReferenceBlockVisitor = _core.traverse.visitors.merge([{
  Loop: {
    enter(path, state) {
      state.loopDepth++;
    },

    exit(path, state) {
      state.loopDepth--;
    }

  },

  FunctionParent(path, state) {
    if (state.loopDepth > 0) {
      path.traverse(letReferenceFunctionVisitor, state);
    } else {
      path.traverse(_tdz.visitor, state);
    }

    return path.skip();
  }

}, _tdz.visitor]);

const letReferenceFunctionVisitor = _core.traverse.visitors.merge([{
  ReferencedIdentifier(path, state) {
    const ref = state.letReferences.get(path.node.name);
    if (!ref) return;
    const localBinding = path.scope.getBindingIdentifier(path.node.name);
    if (localBinding && localBinding !== ref) return;
    state.closurify = true;
  }

}, _tdz.visitor]);

const hoistVarDeclarationsVisitor = {
  enter(path, self) {
    if (path.isForStatement()) {
      const {
        node
      } = path;

      if (isVar(node.init)) {
        const nodes = self.pushDeclar(node.init);

        if (nodes.length === 1) {
          node.init = nodes[0];
        } else {
          node.init = _core.types.sequenceExpression(nodes);
        }
      }
    } else if (path.isForInStatement() || path.isForOfStatement()) {
      const {
        node
      } = path;

      if (isVar(node.left)) {
        self.pushDeclar(node.left);
        node.left = node.left.declarations[0].id;
      }
    } else if (isVar(path.node)) {
      path.replaceWithMultiple(self.pushDeclar(path.node).map(expr => _core.types.expressionStatement(expr)));
    } else if (path.isFunction()) {
      return path.skip();
    }
  }

};
const loopLabelVisitor = {
  LabeledStatement({
    node
  }, state) {
    state.innerLabels.push(node.label.name);
  }

};
const continuationVisitor = {
  enter(path, state) {
    if (path.isAssignmentExpression() || path.isUpdateExpression()) {
      for (const name of Object.keys(path.getBindingIdentifiers())) {
        if (state.outsideReferences.get(name) !== path.scope.getBindingIdentifier(name)) {
          continue;
        }

        state.reassignments[name] = true;
      }
    } else if (path.isReturnStatement()) {
      state.returnStatements.push(path);
    }
  }

};

function loopNodeTo(node) {
  if (_core.types.isBreakStatement(node)) {
    return "break";
  } else if (_core.types.isContinueStatement(node)) {
    return "continue";
  }
}

const loopVisitor = {
  Loop(path, state) {
    const oldIgnoreLabeless = state.ignoreLabeless;
    state.ignoreLabeless = true;
    path.traverse(loopVisitor, state);
    state.ignoreLabeless = oldIgnoreLabeless;
    path.skip();
  },

  Function(path) {
    path.skip();
  },

  SwitchCase(path, state) {
    const oldInSwitchCase = state.inSwitchCase;
    state.inSwitchCase = true;
    path.traverse(loopVisitor, state);
    state.inSwitchCase = oldInSwitchCase;
    path.skip();
  },

  "BreakStatement|ContinueStatement|ReturnStatement"(path, state) {
    const {
      node,
      scope
    } = path;
    if (node[this.LOOP_IGNORE]) return;
    let replace;
    let loopText = loopNodeTo(node);

    if (loopText) {
      if (_core.types.isReturnStatement(node)) {
        throw new Error("Internal error: unexpected return statement with `loopText`");
      }

      if (node.label) {
        if (state.innerLabels.indexOf(node.label.name) >= 0) {
          return;
        }

        loopText = `${loopText}|${node.label.name}`;
      } else {
        if (state.ignoreLabeless) return;
        if (_core.types.isBreakStatement(node) && state.inSwitchCase) return;
      }

      state.hasBreakContinue = true;
      state.map[loopText] = node;
      replace = _core.types.stringLiteral(loopText);
    }

    if (_core.types.isReturnStatement(node)) {
      state.hasReturn = true;
      replace = _core.types.objectExpression([_core.types.objectProperty(_core.types.identifier("v"), node.argument || scope.buildUndefinedNode())]);
    }

    if (replace) {
      replace = _core.types.returnStatement(replace);
      replace[this.LOOP_IGNORE] = true;
      path.skip();
      path.replaceWith(_core.types.inherits(replace, node));
    }
  }

};

function isStrict(path) {
  return !!path.find(({
    node
  }) => {
    if (_core.types.isProgram(node)) {
      if (node.sourceType === "module") return true;
    } else if (!_core.types.isBlockStatement(node)) return false;

    return node.directives.some(directive => directive.value.value === "use strict");
  });
}

class BlockScoping {
  constructor(loopPath, blockPath, parent, scope, throwIfClosureRequired, tdzEnabled, state) {
    this.parent = void 0;
    this.state = void 0;
    this.scope = void 0;
    this.throwIfClosureRequired = void 0;
    this.tdzEnabled = void 0;
    this.blockPath = void 0;
    this.block = void 0;
    this.outsideLetReferences = void 0;
    this.hasLetReferences = void 0;
    this.letReferences = void 0;
    this.body = void 0;
    this.loopParent = void 0;
    this.loopLabel = void 0;
    this.loopPath = void 0;
    this.loop = void 0;
    this.has = void 0;
    this.parent = parent;
    this.scope = scope;
    this.state = state;
    this.throwIfClosureRequired = throwIfClosureRequired;
    this.tdzEnabled = tdzEnabled;
    this.blockPath = blockPath;
    this.block = blockPath.node;
    this.outsideLetReferences = new Map();
    this.hasLetReferences = false;
    this.letReferences = new Map();
    this.body = [];

    if (loopPath) {
      this.loopParent = loopPath.parent;
      this.loopLabel = _core.types.isLabeledStatement(this.loopParent) && this.loopParent.label;
      this.loopPath = loopPath;
      this.loop = loopPath.node;
    }
  }

  run() {
    const block = this.block;
    if (DONE.has(block)) return;
    DONE.add(block);
    const needsClosure = this.getLetReferences();
    this.checkConstants();

    if (_core.types.isFunction(this.parent) || _core.types.isProgram(this.block)) {
      this.updateScopeInfo();
      return;
    }

    if (!this.hasLetReferences) return;

    if (needsClosure) {
      this.wrapClosure();
    } else {
      this.remap();
    }

    this.updateScopeInfo(needsClosure);

    if (this.loopLabel && !_core.types.isLabeledStatement(this.loopParent)) {
      return _core.types.labeledStatement(this.loopLabel, this.loop);
    }
  }

  checkConstants() {
    const scope = this.scope;
    const state = this.state;

    for (const name of Object.keys(scope.bindings)) {
      const binding = scope.bindings[name];
      if (binding.kind !== "const") continue;

      for (const violation of binding.constantViolations) {
        const readOnlyError = state.addHelper("readOnlyError");

        const throwNode = _core.types.callExpression(readOnlyError, [_core.types.stringLiteral(name)]);

        if (violation.isAssignmentExpression()) {
          const {
            operator
          } = violation.node;

          if (operator === "=") {
            violation.replaceWith(_core.types.sequenceExpression([violation.get("right").node, throwNode]));
          } else if (["&&=", "||=", "??="].includes(operator)) {
            violation.replaceWith(_core.types.logicalExpression(operator.slice(0, -1), violation.get("left").node, _core.types.sequenceExpression([violation.get("right").node, throwNode])));
          } else {
            violation.replaceWith(_core.types.sequenceExpression([_core.types.binaryExpression(operator.slice(0, -1), violation.get("left").node, violation.get("right").node), throwNode]));
          }
        } else if (violation.isUpdateExpression()) {
          violation.replaceWith(_core.types.sequenceExpression([_core.types.unaryExpression("+", violation.get("argument").node), throwNode]));
        } else if (violation.isForXStatement()) {
          violation.ensureBlock();
          violation.get("left").replaceWith(_core.types.variableDeclaration("var", [_core.types.variableDeclarator(violation.scope.generateUidIdentifier(name))]));
          violation.node.body.body.unshift(_core.types.expressionStatement(throwNode));
        }
      }
    }
  }

  updateScopeInfo(wrappedInClosure) {
    const blockScope = this.blockPath.scope;
    const parentScope = blockScope.getFunctionParent() || blockScope.getProgramParent();
    const letRefs = this.letReferences;

    for (const key of letRefs.keys()) {
      const ref = letRefs.get(key);
      const binding = blockScope.getBinding(ref.name);
      if (!binding) continue;

      if (binding.kind === "let" || binding.kind === "const") {
        binding.kind = "var";

        if (wrappedInClosure) {
          if (blockScope.hasOwnBinding(ref.name)) {
            blockScope.removeBinding(ref.name);
          }
        } else {
          blockScope.moveBindingTo(ref.name, parentScope);
        }
      }
    }
  }

  remap() {
    const letRefs = this.letReferences;
    const outsideLetRefs = this.outsideLetReferences;
    const scope = this.scope;
    const blockPathScope = this.blockPath.scope;

    for (const key of letRefs.keys()) {
      const ref = letRefs.get(key);

      if (scope.parentHasBinding(key) || scope.hasGlobal(key)) {
        const binding = scope.getOwnBinding(key);

        if (binding) {
          const parentBinding = scope.parent.getOwnBinding(key);

          if (binding.kind === "hoisted" && !binding.path.node.async && !binding.path.node.generator && (!parentBinding || isVar(parentBinding.path.parent)) && !isStrict(binding.path.parentPath)) {
            continue;
          }

          scope.rename(ref.name);
        }

        if (blockPathScope.hasOwnBinding(key)) {
          blockPathScope.rename(ref.name);
        }
      }
    }

    for (const key of outsideLetRefs.keys()) {
      const ref = letRefs.get(key);

      if (isInLoop(this.blockPath) && blockPathScope.hasOwnBinding(key)) {
        blockPathScope.rename(ref.name);
      }
    }
  }

  wrapClosure() {
    if (this.throwIfClosureRequired) {
      throw this.blockPath.buildCodeFrameError("Compiling let/const in this block would add a closure " + "(throwIfClosureRequired).");
    }

    const block = this.block;
    const outsideRefs = this.outsideLetReferences;

    if (this.loop) {
      for (const name of Array.from(outsideRefs.keys())) {
        const id = outsideRefs.get(name);

        if (this.scope.hasGlobal(id.name) || this.scope.parentHasBinding(id.name)) {
          outsideRefs.delete(id.name);
          this.letReferences.delete(id.name);
          this.scope.rename(id.name);
          this.letReferences.set(id.name, id);
          outsideRefs.set(id.name, id);
        }
      }
    }

    this.has = this.checkLoop();
    this.hoistVarDeclarations();
    const args = Array.from(outsideRefs.values(), node => _core.types.cloneNode(node));
    const params = args.map(id => _core.types.cloneNode(id));
    const isSwitch = this.blockPath.isSwitchStatement();

    const fn = _core.types.functionExpression(null, params, _core.types.blockStatement(isSwitch ? [block] : block.body));

    this.addContinuations(fn);

    let call = _core.types.callExpression(_core.types.nullLiteral(), args);

    let basePath = ".callee";

    const hasYield = _core.traverse.hasType(fn.body, "YieldExpression", _core.types.FUNCTION_TYPES);

    if (hasYield) {
      fn.generator = true;
      call = _core.types.yieldExpression(call, true);
      basePath = ".argument" + basePath;
    }

    const hasAsync = _core.traverse.hasType(fn.body, "AwaitExpression", _core.types.FUNCTION_TYPES);

    if (hasAsync) {
      fn.async = true;
      call = _core.types.awaitExpression(call);
      basePath = ".argument" + basePath;
    }

    let placeholderPath;
    let index;

    if (this.has.hasReturn || this.has.hasBreakContinue) {
      const ret = this.scope.generateUid("ret");
      this.body.push(_core.types.variableDeclaration("var", [_core.types.variableDeclarator(_core.types.identifier(ret), call)]));
      placeholderPath = "declarations.0.init" + basePath;
      index = this.body.length - 1;
      this.buildHas(ret);
    } else {
      this.body.push(_core.types.expressionStatement(call));
      placeholderPath = "expression" + basePath;
      index = this.body.length - 1;
    }

    let callPath;

    if (isSwitch) {
      const {
        parentPath,
        listKey,
        key
      } = this.blockPath;
      this.blockPath.replaceWithMultiple(this.body);
      callPath = parentPath.get(listKey)[key + index];
    } else {
      block.body = this.body;
      callPath = this.blockPath.get("body")[index];
    }

    const placeholder = callPath.get(placeholderPath);
    let fnPath;

    if (this.loop) {
      const loopId = this.scope.generateUid("loop");
      const p = this.loopPath.insertBefore(_core.types.variableDeclaration("var", [_core.types.variableDeclarator(_core.types.identifier(loopId), fn)]));
      placeholder.replaceWith(_core.types.identifier(loopId));
      fnPath = p[0].get("declarations.0.init");
    } else {
      placeholder.replaceWith(fn);
      fnPath = placeholder;
    }

    fnPath.unwrapFunctionEnvironment();
  }

  addContinuations(fn) {
    const state = {
      reassignments: {},
      returnStatements: [],
      outsideReferences: this.outsideLetReferences
    };
    this.scope.traverse(fn, continuationVisitor, state);

    for (let i = 0; i < fn.params.length; i++) {
      const param = fn.params[i];
      if (!state.reassignments[param.name]) continue;
      const paramName = param.name;
      const newParamName = this.scope.generateUid(param.name);
      fn.params[i] = _core.types.identifier(newParamName);
      this.scope.rename(paramName, newParamName, fn);
      state.returnStatements.forEach(returnStatement => {
        returnStatement.insertBefore(_core.types.expressionStatement(_core.types.assignmentExpression("=", _core.types.identifier(paramName), _core.types.identifier(newParamName))));
      });
      fn.body.body.push(_core.types.expressionStatement(_core.types.assignmentExpression("=", _core.types.identifier(paramName), _core.types.identifier(newParamName))));
    }
  }

  getLetReferences() {
    const block = this.block;
    const declarators = [];

    if (this.loop) {
      const init = this.loop.left || this.loop.init;

      if (isBlockScoped(init)) {
        declarators.push(init);

        const names = _core.types.getBindingIdentifiers(init);

        for (const name of Object.keys(names)) {
          this.outsideLetReferences.set(name, names[name]);
        }
      }
    }

    const addDeclarationsFromChild = (path, node) => {
      node = node || path.node;

      if (_core.types.isClassDeclaration(node) || _core.types.isFunctionDeclaration(node) || isBlockScoped(node)) {
        if (isBlockScoped(node)) {
          convertBlockScopedToVar(path, node, block, this.scope);
        }

        if (node.declarations) {
          for (let i = 0; i < node.declarations.length; i++) {
            declarators.push(node.declarations[i]);
          }
        } else {
          declarators.push(node);
        }
      }

      if (_core.types.isLabeledStatement(node)) {
        addDeclarationsFromChild(path.get("body"), node.body);
      }
    };

    if (block.body) {
      const declarPaths = this.blockPath.get("body");

      for (let i = 0; i < block.body.length; i++) {
        addDeclarationsFromChild(declarPaths[i]);
      }
    }

    if (block.cases) {
      const declarPaths = this.blockPath.get("cases");

      for (let i = 0; i < block.cases.length; i++) {
        const consequents = block.cases[i].consequent;

        for (let j = 0; j < consequents.length; j++) {
          const declar = consequents[j];
          addDeclarationsFromChild(declarPaths[i], declar);
        }
      }
    }

    for (let i = 0; i < declarators.length; i++) {
      const declar = declarators[i];

      const keys = _core.types.getBindingIdentifiers(declar, false, true);

      for (const key of Object.keys(keys)) {
        this.letReferences.set(key, keys[key]);
      }

      this.hasLetReferences = true;
    }

    if (!this.hasLetReferences) return;
    const state = {
      letReferences: this.letReferences,
      closurify: false,
      loopDepth: 0,
      tdzEnabled: this.tdzEnabled,
      addHelper: name => this.state.addHelper(name)
    };

    if (isInLoop(this.blockPath)) {
      state.loopDepth++;
    }

    this.blockPath.traverse(letReferenceBlockVisitor, state);
    return state.closurify;
  }

  checkLoop() {
    const state = {
      hasBreakContinue: false,
      ignoreLabeless: false,
      inSwitchCase: false,
      innerLabels: [],
      hasReturn: false,
      isLoop: !!this.loop,
      map: {},
      LOOP_IGNORE: Symbol()
    };
    this.blockPath.traverse(loopLabelVisitor, state);
    this.blockPath.traverse(loopVisitor, state);
    return state;
  }

  hoistVarDeclarations() {
    this.blockPath.traverse(hoistVarDeclarationsVisitor, this);
  }

  pushDeclar(node) {
    const declars = [];

    const names = _core.types.getBindingIdentifiers(node);

    for (const name of Object.keys(names)) {
      declars.push(_core.types.variableDeclarator(names[name]));
    }

    this.body.push(_core.types.variableDeclaration(node.kind, declars));
    const replace = [];

    for (let i = 0; i < node.declarations.length; i++) {
      const declar = node.declarations[i];
      if (!declar.init) continue;

      const expr = _core.types.assignmentExpression("=", _core.types.cloneNode(declar.id), _core.types.cloneNode(declar.init));

      replace.push(_core.types.inherits(expr, declar));
    }

    return replace;
  }

  buildHas(ret) {
    const body = this.body;
    const has = this.has;

    if (has.hasBreakContinue) {
      for (const key of Object.keys(has.map)) {
        body.push(_core.types.ifStatement(_core.types.binaryExpression("===", _core.types.identifier(ret), _core.types.stringLiteral(key)), has.map[key]));
      }
    }

    if (has.hasReturn) {
      body.push(buildRetCheck({
        RETURN: _core.types.identifier(ret)
      }));
    }
  }

}
}, function(modId) {var map = {"./tdz":1651912610553}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610553, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.visitor = void 0;

var _core = require("@babel/core");

function getTDZStatus(refPath, bindingPath) {
  const executionStatus = bindingPath._guessExecutionStatusRelativeTo(refPath);

  if (executionStatus === "before") {
    return "outside";
  } else if (executionStatus === "after") {
    return "inside";
  } else {
    return "maybe";
  }
}

function buildTDZAssert(node, state) {
  return _core.types.callExpression(state.addHelper("temporalRef"), [node, _core.types.stringLiteral(node.name)]);
}

function isReference(node, scope, state) {
  const declared = state.letReferences.get(node.name);
  if (!declared) return false;
  return scope.getBindingIdentifier(node.name) === declared;
}

const visitedMaybeTDZNodes = new WeakSet();
const visitor = {
  ReferencedIdentifier(path, state) {
    if (!state.tdzEnabled) return;
    const {
      node,
      parent,
      scope
    } = path;
    if (path.parentPath.isFor({
      left: node
    })) return;
    if (!isReference(node, scope, state)) return;
    const bindingPath = scope.getBinding(node.name).path;
    if (bindingPath.isFunctionDeclaration()) return;
    const status = getTDZStatus(path, bindingPath);
    if (status === "outside") return;

    if (status === "maybe") {
      if (visitedMaybeTDZNodes.has(node)) {
        return;
      }

      visitedMaybeTDZNodes.add(node);
      const assert = buildTDZAssert(node, state);
      bindingPath.parent._tdzThis = true;

      if (path.parentPath.isUpdateExpression()) {
        if (parent._ignoreBlockScopingTDZ) return;
        path.parentPath.replaceWith(_core.types.sequenceExpression([assert, parent]));
      } else {
        path.replaceWith(assert);
      }
    } else if (status === "inside") {
      path.replaceWith(_core.template.ast`${state.addHelper("tdz")}("${node.name}")`);
    }
  },

  AssignmentExpression: {
    exit(path, state) {
      if (!state.tdzEnabled) return;
      const {
        node
      } = path;
      if (node._ignoreBlockScopingTDZ) return;
      const nodes = [];
      const ids = path.getBindingIdentifiers();

      for (const name of Object.keys(ids)) {
        const id = ids[name];

        if (isReference(id, path.scope, state)) {
          nodes.push(id);
        }
      }

      if (nodes.length) {
        node._ignoreBlockScopingTDZ = true;
        nodes.push(node);
        path.replaceWithMultiple(nodes.map(n => _core.types.expressionStatement(n)));
      }
    }

  }
};
exports.visitor = visitor;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1651912610552);
})()
//miniprogram-npm-outsideDeps=["@babel/helper-plugin-utils","@babel/core"]
//# sourceMappingURL=index.js.map