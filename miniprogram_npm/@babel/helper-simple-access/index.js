module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1651912610497, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = simplifyAccess;

var _t = require("@babel/types");

const {
  LOGICAL_OPERATORS,
  assignmentExpression,
  binaryExpression,
  cloneNode,
  identifier,
  logicalExpression,
  numericLiteral,
  sequenceExpression,
  unaryExpression
} = _t;

function simplifyAccess(path, bindingNames, includeUpdateExpression = true) {
  path.traverse(simpleAssignmentVisitor, {
    scope: path.scope,
    bindingNames,
    seen: new WeakSet(),
    includeUpdateExpression
  });
}

const simpleAssignmentVisitor = {
  UpdateExpression: {
    exit(path) {
      const {
        scope,
        bindingNames,
        includeUpdateExpression
      } = this;

      if (!includeUpdateExpression) {
        return;
      }

      const arg = path.get("argument");
      if (!arg.isIdentifier()) return;
      const localName = arg.node.name;
      if (!bindingNames.has(localName)) return;

      if (scope.getBinding(localName) !== path.scope.getBinding(localName)) {
        return;
      }

      if (path.parentPath.isExpressionStatement() && !path.isCompletionRecord()) {
        const operator = path.node.operator == "++" ? "+=" : "-=";
        path.replaceWith(assignmentExpression(operator, arg.node, numericLiteral(1)));
      } else if (path.node.prefix) {
        path.replaceWith(assignmentExpression("=", identifier(localName), binaryExpression(path.node.operator[0], unaryExpression("+", arg.node), numericLiteral(1))));
      } else {
        const old = path.scope.generateUidIdentifierBasedOnNode(arg.node, "old");
        const varName = old.name;
        path.scope.push({
          id: old
        });
        const binary = binaryExpression(path.node.operator[0], identifier(varName), numericLiteral(1));
        path.replaceWith(sequenceExpression([assignmentExpression("=", identifier(varName), unaryExpression("+", arg.node)), assignmentExpression("=", cloneNode(arg.node), binary), identifier(varName)]));
      }
    }

  },
  AssignmentExpression: {
    exit(path) {
      const {
        scope,
        seen,
        bindingNames
      } = this;
      if (path.node.operator === "=") return;
      if (seen.has(path.node)) return;
      seen.add(path.node);
      const left = path.get("left");
      if (!left.isIdentifier()) return;
      const localName = left.node.name;
      if (!bindingNames.has(localName)) return;

      if (scope.getBinding(localName) !== path.scope.getBinding(localName)) {
        return;
      }

      const operator = path.node.operator.slice(0, -1);

      if (LOGICAL_OPERATORS.includes(operator)) {
        path.replaceWith(logicalExpression(operator, path.node.left, assignmentExpression("=", cloneNode(path.node.left), path.node.right)));
      } else {
        path.node.right = binaryExpression(operator, cloneNode(path.node.left), path.node.right);
        path.node.operator = "=";
      }
    }

  }
};
}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1651912610497);
})()
//miniprogram-npm-outsideDeps=["@babel/types"]
//# sourceMappingURL=index.js.map