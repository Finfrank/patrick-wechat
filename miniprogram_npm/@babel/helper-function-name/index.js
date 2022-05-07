module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1651912610405, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _template = require("@babel/template");

var _t = require("@babel/types");

const {
  NOT_LOCAL_BINDING,
  cloneNode,
  identifier,
  isAssignmentExpression,
  isAssignmentPattern,
  isFunction,
  isIdentifier,
  isLiteral,
  isNullLiteral,
  isObjectMethod,
  isObjectProperty,
  isRegExpLiteral,
  isRestElement,
  isTemplateLiteral,
  isVariableDeclarator,
  toBindingIdentifierName
} = _t;

function getFunctionArity(node) {
  const count = node.params.findIndex(param => isAssignmentPattern(param) || isRestElement(param));
  return count === -1 ? node.params.length : count;
}

const buildPropertyMethodAssignmentWrapper = (0, _template.default)(`
  (function (FUNCTION_KEY) {
    function FUNCTION_ID() {
      return FUNCTION_KEY.apply(this, arguments);
    }

    FUNCTION_ID.toString = function () {
      return FUNCTION_KEY.toString();
    }

    return FUNCTION_ID;
  })(FUNCTION)
`);
const buildGeneratorPropertyMethodAssignmentWrapper = (0, _template.default)(`
  (function (FUNCTION_KEY) {
    function* FUNCTION_ID() {
      return yield* FUNCTION_KEY.apply(this, arguments);
    }

    FUNCTION_ID.toString = function () {
      return FUNCTION_KEY.toString();
    };

    return FUNCTION_ID;
  })(FUNCTION)
`);
const visitor = {
  "ReferencedIdentifier|BindingIdentifier"(path, state) {
    if (path.node.name !== state.name) return;
    const localDeclar = path.scope.getBindingIdentifier(state.name);
    if (localDeclar !== state.outerDeclar) return;
    state.selfReference = true;
    path.stop();
  }

};

function getNameFromLiteralId(id) {
  if (isNullLiteral(id)) {
    return "null";
  }

  if (isRegExpLiteral(id)) {
    return `_${id.pattern}_${id.flags}`;
  }

  if (isTemplateLiteral(id)) {
    return id.quasis.map(quasi => quasi.value.raw).join("");
  }

  if (id.value !== undefined) {
    return id.value + "";
  }

  return "";
}

function wrap(state, method, id, scope) {
  if (state.selfReference) {
    if (scope.hasBinding(id.name) && !scope.hasGlobal(id.name)) {
      scope.rename(id.name);
    } else {
      if (!isFunction(method)) return;
      let build = buildPropertyMethodAssignmentWrapper;

      if (method.generator) {
        build = buildGeneratorPropertyMethodAssignmentWrapper;
      }

      const template = build({
        FUNCTION: method,
        FUNCTION_ID: id,
        FUNCTION_KEY: scope.generateUidIdentifier(id.name)
      }).expression;
      const params = template.callee.body.body[0].params;

      for (let i = 0, len = getFunctionArity(method); i < len; i++) {
        params.push(scope.generateUidIdentifier("x"));
      }

      return template;
    }
  }

  method.id = id;
  scope.getProgramParent().references[id.name] = true;
}

function visit(node, name, scope) {
  const state = {
    selfAssignment: false,
    selfReference: false,
    outerDeclar: scope.getBindingIdentifier(name),
    references: [],
    name: name
  };
  const binding = scope.getOwnBinding(name);

  if (binding) {
    if (binding.kind === "param") {
      state.selfReference = true;
    } else {}
  } else if (state.outerDeclar || scope.hasGlobal(name)) {
    scope.traverse(node, visitor, state);
  }

  return state;
}

function _default({
  node,
  parent,
  scope,
  id
}, localBinding = false, supportUnicodeId = false) {
  if (node.id) return;

  if ((isObjectProperty(parent) || isObjectMethod(parent, {
    kind: "method"
  })) && (!parent.computed || isLiteral(parent.key))) {
    id = parent.key;
  } else if (isVariableDeclarator(parent)) {
    id = parent.id;

    if (isIdentifier(id) && !localBinding) {
      const binding = scope.parent.getBinding(id.name);

      if (binding && binding.constant && scope.getBinding(id.name) === binding) {
        node.id = cloneNode(id);
        node.id[NOT_LOCAL_BINDING] = true;
        return;
      }
    }
  } else if (isAssignmentExpression(parent, {
    operator: "="
  })) {
    id = parent.left;
  } else if (!id) {
    return;
  }

  let name;

  if (id && isLiteral(id)) {
    name = getNameFromLiteralId(id);
  } else if (id && isIdentifier(id)) {
    name = id.name;
  }

  if (name === undefined) {
    return;
  }

  if (!supportUnicodeId && isFunction(node) && /[\uD800-\uDFFF]/.test(name)) {
    return;
  }

  name = toBindingIdentifierName(name);
  id = identifier(name);
  id[NOT_LOCAL_BINDING] = true;
  const state = visit(node, name, scope);
  return wrap(state, node, id, scope) || node;
}
}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1651912610405);
})()
//miniprogram-npm-outsideDeps=["@babel/template","@babel/types"]
//# sourceMappingURL=index.js.map