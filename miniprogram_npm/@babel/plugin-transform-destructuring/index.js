module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1651912610558, function(require, module, exports) {


Object.defineProperty(exports, '__esModule', { value: true });

var helperPluginUtils = require('@babel/helper-plugin-utils');
var core = require('@babel/core');

function hasArrayRest(pattern) {
  return pattern.elements.some(elem => core.types.isRestElement(elem));
}

function hasObjectRest(pattern) {
  return pattern.properties.some(prop => core.types.isRestElement(prop));
}

const STOP_TRAVERSAL = {};

const arrayUnpackVisitor = (node, ancestors, state) => {
  if (!ancestors.length) {
    return;
  }

  if (core.types.isIdentifier(node) && core.types.isReferenced(node, ancestors[ancestors.length - 1].node) && state.bindings[node.name]) {
    state.deopt = true;
    throw STOP_TRAVERSAL;
  }
};

class DestructuringTransformer {
  constructor(opts) {
    this.blockHoist = void 0;
    this.operator = void 0;
    this.arrayRefSet = void 0;
    this.nodes = void 0;
    this.scope = void 0;
    this.kind = void 0;
    this.iterableIsArray = void 0;
    this.arrayLikeIsIterable = void 0;
    this.objectRestNoSymbols = void 0;
    this.useBuiltIns = void 0;
    this.addHelper = void 0;
    this.blockHoist = opts.blockHoist;
    this.operator = opts.operator;
    this.arrayRefSet = new Set();
    this.nodes = opts.nodes || [];
    this.scope = opts.scope;
    this.kind = opts.kind;
    this.iterableIsArray = opts.iterableIsArray;
    this.arrayLikeIsIterable = opts.arrayLikeIsIterable;
    this.objectRestNoSymbols = opts.objectRestNoSymbols;
    this.useBuiltIns = opts.useBuiltIns;
    this.addHelper = opts.addHelper;
  }

  getExtendsHelper() {
    return this.useBuiltIns ? core.types.memberExpression(core.types.identifier("Object"), core.types.identifier("assign")) : this.addHelper("extends");
  }

  buildVariableAssignment(id, init) {
    let op = this.operator;
    if (core.types.isMemberExpression(id)) op = "=";
    let node;

    if (op) {
      node = core.types.expressionStatement(core.types.assignmentExpression(op, id, core.types.cloneNode(init) || this.scope.buildUndefinedNode()));
    } else {
      let nodeInit;

      if (this.kind === "const" && init === null) {
        nodeInit = this.scope.buildUndefinedNode();
      } else {
        nodeInit = core.types.cloneNode(init);
      }

      node = core.types.variableDeclaration(this.kind, [core.types.variableDeclarator(id, nodeInit)]);
    }

    node._blockHoist = this.blockHoist;
    return node;
  }

  buildVariableDeclaration(id, init) {
    const declar = core.types.variableDeclaration("var", [core.types.variableDeclarator(core.types.cloneNode(id), core.types.cloneNode(init))]);
    declar._blockHoist = this.blockHoist;
    return declar;
  }

  push(id, _init) {
    const init = core.types.cloneNode(_init);

    if (core.types.isObjectPattern(id)) {
      this.pushObjectPattern(id, init);
    } else if (core.types.isArrayPattern(id)) {
      this.pushArrayPattern(id, init);
    } else if (core.types.isAssignmentPattern(id)) {
      this.pushAssignmentPattern(id, init);
    } else {
      this.nodes.push(this.buildVariableAssignment(id, init));
    }
  }

  toArray(node, count) {
    if (this.iterableIsArray || core.types.isIdentifier(node) && this.arrayRefSet.has(node.name)) {
      return node;
    } else {
      return this.scope.toArray(node, count, this.arrayLikeIsIterable);
    }
  }

  pushAssignmentPattern({
    left,
    right
  }, valueRef) {
    if (valueRef === null) {
      this.push(left, right);
      return;
    }

    const tempId = this.scope.generateUidIdentifierBasedOnNode(valueRef);
    this.nodes.push(this.buildVariableDeclaration(tempId, valueRef));
    const tempConditional = core.types.conditionalExpression(core.types.binaryExpression("===", core.types.cloneNode(tempId), this.scope.buildUndefinedNode()), right, core.types.cloneNode(tempId));

    if (core.types.isPattern(left)) {
      let patternId;
      let node;

      if (this.kind === "const" || this.kind === "let") {
        patternId = this.scope.generateUidIdentifier(tempId.name);
        node = this.buildVariableDeclaration(patternId, tempConditional);
      } else {
        patternId = tempId;
        node = core.types.expressionStatement(core.types.assignmentExpression("=", core.types.cloneNode(tempId), tempConditional));
      }

      this.nodes.push(node);
      this.push(left, patternId);
    } else {
      this.nodes.push(this.buildVariableAssignment(left, tempConditional));
    }
  }

  pushObjectRest(pattern, objRef, spreadProp, spreadPropIndex) {
    const value = buildObjectExcludingKeys(pattern.properties.slice(0, spreadPropIndex), objRef, this.scope, name => this.addHelper(name), this.objectRestNoSymbols, this.useBuiltIns);
    this.nodes.push(this.buildVariableAssignment(spreadProp.argument, value));
  }

  pushObjectProperty(prop, propRef) {
    if (core.types.isLiteral(prop.key)) prop.computed = true;
    const pattern = prop.value;
    const objRef = core.types.memberExpression(core.types.cloneNode(propRef), prop.key, prop.computed);

    if (core.types.isPattern(pattern)) {
      this.push(pattern, objRef);
    } else {
      this.nodes.push(this.buildVariableAssignment(pattern, objRef));
    }
  }

  pushObjectPattern(pattern, objRef) {
    if (!pattern.properties.length || objRef === null) {
      this.nodes.push(core.types.expressionStatement(core.types.callExpression(this.addHelper("objectDestructuringEmpty"), objRef !== null ? [objRef] : [])));
      return;
    }

    if (pattern.properties.length > 1 && !this.scope.isStatic(objRef)) {
      const temp = this.scope.generateUidIdentifierBasedOnNode(objRef);
      this.nodes.push(this.buildVariableDeclaration(temp, objRef));
      objRef = temp;
    }

    if (hasObjectRest(pattern)) {
      let copiedPattern;

      for (let i = 0; i < pattern.properties.length; i++) {
        const prop = pattern.properties[i];

        if (core.types.isRestElement(prop)) {
          break;
        }

        const key = prop.key;

        if (prop.computed && !this.scope.isPure(key)) {
          const name = this.scope.generateUidIdentifierBasedOnNode(key);
          this.nodes.push(this.buildVariableDeclaration(name, key));

          if (!copiedPattern) {
            copiedPattern = pattern = Object.assign({}, pattern, {
              properties: pattern.properties.slice()
            });
          }

          copiedPattern.properties[i] = Object.assign({}, copiedPattern.properties[i], {
            key: name
          });
        }
      }
    }

    for (let i = 0; i < pattern.properties.length; i++) {
      const prop = pattern.properties[i];

      if (core.types.isRestElement(prop)) {
        this.pushObjectRest(pattern, objRef, prop, i);
      } else {
        this.pushObjectProperty(prop, objRef);
      }
    }
  }

  canUnpackArrayPattern(pattern, arr) {
    if (!core.types.isArrayExpression(arr)) return false;
    if (pattern.elements.length > arr.elements.length) return;

    if (pattern.elements.length < arr.elements.length && !hasArrayRest(pattern)) {
      return false;
    }

    for (const elem of pattern.elements) {
      if (!elem) return false;
      if (core.types.isMemberExpression(elem)) return false;
    }

    for (const elem of arr.elements) {
      if (core.types.isSpreadElement(elem)) return false;
      if (core.types.isCallExpression(elem)) return false;
      if (core.types.isMemberExpression(elem)) return false;
    }

    const bindings = core.types.getBindingIdentifiers(pattern);
    const state = {
      deopt: false,
      bindings
    };

    try {
      core.types.traverse(arr, arrayUnpackVisitor, state);
    } catch (e) {
      if (e !== STOP_TRAVERSAL) throw e;
    }

    return !state.deopt;
  }

  pushUnpackedArrayPattern(pattern, arr) {
    for (let i = 0; i < pattern.elements.length; i++) {
      const elem = pattern.elements[i];

      if (core.types.isRestElement(elem)) {
        this.push(elem.argument, core.types.arrayExpression(arr.elements.slice(i)));
      } else {
        this.push(elem, arr.elements[i]);
      }
    }
  }

  pushArrayPattern(pattern, arrayRef) {
    if (arrayRef === null) {
      this.nodes.push(core.types.expressionStatement(core.types.callExpression(this.addHelper("objectDestructuringEmpty"), [])));
      return;
    }

    if (!pattern.elements) return;

    if (this.canUnpackArrayPattern(pattern, arrayRef)) {
      return this.pushUnpackedArrayPattern(pattern, arrayRef);
    }

    const count = !hasArrayRest(pattern) && pattern.elements.length;
    const toArray = this.toArray(arrayRef, count);

    if (core.types.isIdentifier(toArray)) {
      arrayRef = toArray;
    } else {
      arrayRef = this.scope.generateUidIdentifierBasedOnNode(arrayRef);
      this.arrayRefSet.add(arrayRef.name);
      this.nodes.push(this.buildVariableDeclaration(arrayRef, toArray));
    }

    for (let i = 0; i < pattern.elements.length; i++) {
      const elem = pattern.elements[i];
      if (!elem) continue;
      let elemRef;

      if (core.types.isRestElement(elem)) {
        elemRef = this.toArray(arrayRef);
        elemRef = core.types.callExpression(core.types.memberExpression(elemRef, core.types.identifier("slice")), [core.types.numericLiteral(i)]);
        this.push(elem.argument, elemRef);
      } else {
        elemRef = core.types.memberExpression(arrayRef, core.types.numericLiteral(i), true);
        this.push(elem, elemRef);
      }
    }
  }

  init(pattern, ref) {
    if (!core.types.isArrayExpression(ref) && !core.types.isMemberExpression(ref)) {
      const memo = this.scope.maybeGenerateMemoised(ref, true);

      if (memo) {
        this.nodes.push(this.buildVariableDeclaration(memo, core.types.cloneNode(ref)));
        ref = memo;
      }
    }

    this.push(pattern, ref);
    return this.nodes;
  }

}
function buildObjectExcludingKeys(excludedKeys, objRef, scope, addHelper, objectRestNoSymbols, useBuiltIns) {
  const keys = [];
  let allLiteral = true;
  let hasTemplateLiteral = false;

  for (let i = 0; i < excludedKeys.length; i++) {
    const prop = excludedKeys[i];
    const key = prop.key;

    if (core.types.isIdentifier(key) && !prop.computed) {
      keys.push(core.types.stringLiteral(key.name));
    } else if (core.types.isTemplateLiteral(key)) {
      keys.push(core.types.cloneNode(key));
      hasTemplateLiteral = true;
    } else if (core.types.isLiteral(key)) {
      keys.push(core.types.stringLiteral(String(key.value)));
    } else if (core.types.isPrivateName(key)) ; else {
      keys.push(core.types.cloneNode(key));
      allLiteral = false;
    }
  }

  let value;

  if (keys.length === 0) {
    const extendsHelper = useBuiltIns ? core.types.memberExpression(core.types.identifier("Object"), core.types.identifier("assign")) : addHelper("extends");
    value = core.types.callExpression(extendsHelper, [core.types.objectExpression([]), core.types.cloneNode(objRef)]);
  } else {
    let keyExpression = core.types.arrayExpression(keys);

    if (!allLiteral) {
      keyExpression = core.types.callExpression(core.types.memberExpression(keyExpression, core.types.identifier("map")), [addHelper("toPropertyKey")]);
    } else if (!hasTemplateLiteral && !core.types.isProgram(scope.block)) {
      const programScope = scope.getProgramParent();
      const id = programScope.generateUidIdentifier("excluded");
      programScope.push({
        id,
        init: keyExpression,
        kind: "const"
      });
      keyExpression = core.types.cloneNode(id);
    }

    value = core.types.callExpression(addHelper(`objectWithoutProperties${objectRestNoSymbols ? "Loose" : ""}`), [core.types.cloneNode(objRef), keyExpression]);
  }

  return value;
}
function convertVariableDeclaration(path, addHelper, arrayLikeIsIterable, iterableIsArray, objectRestNoSymbols, useBuiltIns) {
  const {
    node,
    scope
  } = path;
  const nodeKind = node.kind;
  const nodeLoc = node.loc;
  const nodes = [];

  for (let i = 0; i < node.declarations.length; i++) {
    const declar = node.declarations[i];
    const patternId = declar.init;
    const pattern = declar.id;
    const destructuring = new DestructuringTransformer({
      blockHoist: node._blockHoist,
      nodes: nodes,
      scope: scope,
      kind: node.kind,
      iterableIsArray,
      arrayLikeIsIterable,
      useBuiltIns,
      objectRestNoSymbols,
      addHelper
    });

    if (core.types.isPattern(pattern)) {
      destructuring.init(pattern, patternId);

      if (+i !== node.declarations.length - 1) {
        core.types.inherits(nodes[nodes.length - 1], declar);
      }
    } else {
      nodes.push(core.types.inherits(destructuring.buildVariableAssignment(pattern, patternId), declar));
    }
  }

  let tail = null;
  const nodesOut = [];

  for (const node of nodes) {
    if (tail !== null && core.types.isVariableDeclaration(node)) {
      tail.declarations.push(...node.declarations);
    } else {
      node.kind = nodeKind;

      if (!node.loc) {
        node.loc = nodeLoc;
      }

      nodesOut.push(node);
      tail = core.types.isVariableDeclaration(node) ? node : null;
    }
  }

  for (const nodeOut of nodesOut) {
    if (!nodeOut.declarations) continue;

    for (const declaration of nodeOut.declarations) {
      const {
        name
      } = declaration.id;

      if (scope.bindings[name]) {
        scope.bindings[name].kind = nodeOut.kind;
      }
    }
  }

  if (nodesOut.length === 1) {
    path.replaceWith(nodesOut[0]);
  } else {
    path.replaceWithMultiple(nodesOut);
  }
}
function convertAssignmentExpression(path, addHelper, arrayLikeIsIterable, iterableIsArray, objectRestNoSymbols, useBuiltIns) {
  const {
    node,
    scope
  } = path;
  const nodes = [];
  const destructuring = new DestructuringTransformer({
    operator: node.operator,
    scope: scope,
    nodes: nodes,
    arrayLikeIsIterable,
    iterableIsArray,
    objectRestNoSymbols,
    useBuiltIns,
    addHelper
  });
  let ref;

  if (path.isCompletionRecord() || !path.parentPath.isExpressionStatement()) {
    ref = scope.generateUidIdentifierBasedOnNode(node.right, "ref");
    nodes.push(core.types.variableDeclaration("var", [core.types.variableDeclarator(ref, node.right)]));

    if (core.types.isArrayExpression(node.right)) {
      destructuring.arrayRefSet.add(ref.name);
    }
  }

  destructuring.init(node.left, ref || node.right);

  if (ref) {
    if (path.parentPath.isArrowFunctionExpression()) {
      path.replaceWith(core.types.blockStatement([]));
      nodes.push(core.types.returnStatement(core.types.cloneNode(ref)));
    } else {
      nodes.push(core.types.expressionStatement(core.types.cloneNode(ref)));
    }
  }

  path.replaceWithMultiple(nodes);
  path.scope.crawl();
}

function variableDeclarationHasPattern(node) {
  for (const declar of node.declarations) {
    if (core.types.isPattern(declar.id)) {
      return true;
    }
  }

  return false;
}

var index = helperPluginUtils.declare((api, options) => {
  var _api$assumption, _options$allowArrayLi, _api$assumption2;

  api.assertVersion(7);
  const {
    useBuiltIns = false
  } = options;
  const iterableIsArray = (_api$assumption = api.assumption("iterableIsArray")) != null ? _api$assumption : options.loose;
  const arrayLikeIsIterable = (_options$allowArrayLi = options.allowArrayLike) != null ? _options$allowArrayLi : api.assumption("arrayLikeIsIterable");
  const objectRestNoSymbols = (_api$assumption2 = api.assumption("objectRestNoSymbols")) != null ? _api$assumption2 : options.loose;
  return {
    name: "transform-destructuring",
    visitor: {
      ExportNamedDeclaration(path) {
        const declaration = path.get("declaration");
        if (!declaration.isVariableDeclaration()) return;
        if (!variableDeclarationHasPattern(declaration.node)) return;
        const specifiers = [];

        for (const name of Object.keys(path.getOuterBindingIdentifiers())) {
          specifiers.push(core.types.exportSpecifier(core.types.identifier(name), core.types.identifier(name)));
        }

        path.replaceWith(declaration.node);
        path.insertAfter(core.types.exportNamedDeclaration(null, specifiers));
      },

      ForXStatement(path) {
        const {
          node,
          scope
        } = path;
        const left = node.left;

        if (core.types.isPattern(left)) {
          const temp = scope.generateUidIdentifier("ref");
          node.left = core.types.variableDeclaration("var", [core.types.variableDeclarator(temp)]);
          path.ensureBlock();
          const statementBody = node.body.body;

          if (statementBody.length === 0 && path.isCompletionRecord()) {
            statementBody.unshift(core.types.expressionStatement(scope.buildUndefinedNode()));
          }

          statementBody.unshift(core.types.expressionStatement(core.types.assignmentExpression("=", left, temp)));
          return;
        }

        if (!core.types.isVariableDeclaration(left)) return;
        const pattern = left.declarations[0].id;
        if (!core.types.isPattern(pattern)) return;
        const key = scope.generateUidIdentifier("ref");
        node.left = core.types.variableDeclaration(left.kind, [core.types.variableDeclarator(key, null)]);
        const nodes = [];
        const destructuring = new DestructuringTransformer({
          kind: left.kind,
          scope: scope,
          nodes: nodes,
          arrayLikeIsIterable,
          iterableIsArray,
          objectRestNoSymbols,
          useBuiltIns,
          addHelper: name => this.addHelper(name)
        });
        destructuring.init(pattern, key);
        path.ensureBlock();
        const block = node.body;
        block.body = nodes.concat(block.body);
      },

      CatchClause({
        node,
        scope
      }) {
        const pattern = node.param;
        if (!core.types.isPattern(pattern)) return;
        const ref = scope.generateUidIdentifier("ref");
        node.param = ref;
        const nodes = [];
        const destructuring = new DestructuringTransformer({
          kind: "let",
          scope: scope,
          nodes: nodes,
          arrayLikeIsIterable,
          iterableIsArray,
          objectRestNoSymbols,
          useBuiltIns,
          addHelper: name => this.addHelper(name)
        });
        destructuring.init(pattern, ref);
        node.body.body = nodes.concat(node.body.body);
      },

      AssignmentExpression(path, state) {
        if (!core.types.isPattern(path.node.left)) return;
        convertAssignmentExpression(path, name => state.addHelper(name), arrayLikeIsIterable, iterableIsArray, objectRestNoSymbols, useBuiltIns);
      },

      VariableDeclaration(path, state) {
        const {
          node,
          parent
        } = path;
        if (core.types.isForXStatement(parent)) return;
        if (!parent || !path.container) return;
        if (!variableDeclarationHasPattern(node)) return;
        convertVariableDeclaration(path, name => state.addHelper(name), arrayLikeIsIterable, iterableIsArray, objectRestNoSymbols, useBuiltIns);
      }

    }
  };
});

exports.default = index;
//# sourceMappingURL=index.js.map

}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1651912610558);
})()
//miniprogram-npm-outsideDeps=["@babel/helper-plugin-utils","@babel/core"]
//# sourceMappingURL=index.js.map