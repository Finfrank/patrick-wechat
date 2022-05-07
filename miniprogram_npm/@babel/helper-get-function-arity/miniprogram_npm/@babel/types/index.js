module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1651912610406, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  react: true,
  assertNode: true,
  createTypeAnnotationBasedOnTypeof: true,
  createUnionTypeAnnotation: true,
  cloneNode: true,
  clone: true,
  cloneDeep: true,
  cloneWithoutLoc: true,
  addComment: true,
  addComments: true,
  inheritInnerComments: true,
  inheritLeadingComments: true,
  inheritsComments: true,
  inheritTrailingComments: true,
  removeComments: true,
  ensureBlock: true,
  toBindingIdentifierName: true,
  toBlock: true,
  toComputedKey: true,
  toExpression: true,
  toIdentifier: true,
  toKeyAlias: true,
  toSequenceExpression: true,
  toStatement: true,
  valueToNode: true,
  appendToMemberExpression: true,
  inherits: true,
  prependToMemberExpression: true,
  removeProperties: true,
  removePropertiesDeep: true,
  removeTypeDuplicates: true,
  getBindingIdentifiers: true,
  getOuterBindingIdentifiers: true,
  traverse: true,
  traverseFast: true,
  shallowEqual: true,
  is: true,
  isBinding: true,
  isBlockScoped: true,
  isImmutable: true,
  isLet: true,
  isNode: true,
  isNodesEquivalent: true,
  isReferenced: true,
  isScope: true,
  isSpecifierDefault: true,
  isType: true,
  isValidES3Identifier: true,
  isValidIdentifier: true,
  isVar: true,
  matchesPattern: true,
  validate: true,
  buildMatchMemberExpression: true
};
Object.defineProperty(exports, "assertNode", {
  enumerable: true,
  get: function get() {
    return _assertNode.default;
  }
});
Object.defineProperty(exports, "createTypeAnnotationBasedOnTypeof", {
  enumerable: true,
  get: function get() {
    return _createTypeAnnotationBasedOnTypeof.default;
  }
});
Object.defineProperty(exports, "createUnionTypeAnnotation", {
  enumerable: true,
  get: function get() {
    return _createUnionTypeAnnotation.default;
  }
});
Object.defineProperty(exports, "cloneNode", {
  enumerable: true,
  get: function get() {
    return _cloneNode.default;
  }
});
Object.defineProperty(exports, "clone", {
  enumerable: true,
  get: function get() {
    return _clone.default;
  }
});
Object.defineProperty(exports, "cloneDeep", {
  enumerable: true,
  get: function get() {
    return _cloneDeep.default;
  }
});
Object.defineProperty(exports, "cloneWithoutLoc", {
  enumerable: true,
  get: function get() {
    return _cloneWithoutLoc.default;
  }
});
Object.defineProperty(exports, "addComment", {
  enumerable: true,
  get: function get() {
    return _addComment.default;
  }
});
Object.defineProperty(exports, "addComments", {
  enumerable: true,
  get: function get() {
    return _addComments.default;
  }
});
Object.defineProperty(exports, "inheritInnerComments", {
  enumerable: true,
  get: function get() {
    return _inheritInnerComments.default;
  }
});
Object.defineProperty(exports, "inheritLeadingComments", {
  enumerable: true,
  get: function get() {
    return _inheritLeadingComments.default;
  }
});
Object.defineProperty(exports, "inheritsComments", {
  enumerable: true,
  get: function get() {
    return _inheritsComments.default;
  }
});
Object.defineProperty(exports, "inheritTrailingComments", {
  enumerable: true,
  get: function get() {
    return _inheritTrailingComments.default;
  }
});
Object.defineProperty(exports, "removeComments", {
  enumerable: true,
  get: function get() {
    return _removeComments.default;
  }
});
Object.defineProperty(exports, "ensureBlock", {
  enumerable: true,
  get: function get() {
    return _ensureBlock.default;
  }
});
Object.defineProperty(exports, "toBindingIdentifierName", {
  enumerable: true,
  get: function get() {
    return _toBindingIdentifierName.default;
  }
});
Object.defineProperty(exports, "toBlock", {
  enumerable: true,
  get: function get() {
    return _toBlock.default;
  }
});
Object.defineProperty(exports, "toComputedKey", {
  enumerable: true,
  get: function get() {
    return _toComputedKey.default;
  }
});
Object.defineProperty(exports, "toExpression", {
  enumerable: true,
  get: function get() {
    return _toExpression.default;
  }
});
Object.defineProperty(exports, "toIdentifier", {
  enumerable: true,
  get: function get() {
    return _toIdentifier.default;
  }
});
Object.defineProperty(exports, "toKeyAlias", {
  enumerable: true,
  get: function get() {
    return _toKeyAlias.default;
  }
});
Object.defineProperty(exports, "toSequenceExpression", {
  enumerable: true,
  get: function get() {
    return _toSequenceExpression.default;
  }
});
Object.defineProperty(exports, "toStatement", {
  enumerable: true,
  get: function get() {
    return _toStatement.default;
  }
});
Object.defineProperty(exports, "valueToNode", {
  enumerable: true,
  get: function get() {
    return _valueToNode.default;
  }
});
Object.defineProperty(exports, "appendToMemberExpression", {
  enumerable: true,
  get: function get() {
    return _appendToMemberExpression.default;
  }
});
Object.defineProperty(exports, "inherits", {
  enumerable: true,
  get: function get() {
    return _inherits.default;
  }
});
Object.defineProperty(exports, "prependToMemberExpression", {
  enumerable: true,
  get: function get() {
    return _prependToMemberExpression.default;
  }
});
Object.defineProperty(exports, "removeProperties", {
  enumerable: true,
  get: function get() {
    return _removeProperties.default;
  }
});
Object.defineProperty(exports, "removePropertiesDeep", {
  enumerable: true,
  get: function get() {
    return _removePropertiesDeep.default;
  }
});
Object.defineProperty(exports, "removeTypeDuplicates", {
  enumerable: true,
  get: function get() {
    return _removeTypeDuplicates.default;
  }
});
Object.defineProperty(exports, "getBindingIdentifiers", {
  enumerable: true,
  get: function get() {
    return _getBindingIdentifiers.default;
  }
});
Object.defineProperty(exports, "getOuterBindingIdentifiers", {
  enumerable: true,
  get: function get() {
    return _getOuterBindingIdentifiers.default;
  }
});
Object.defineProperty(exports, "traverse", {
  enumerable: true,
  get: function get() {
    return _traverse.default;
  }
});
Object.defineProperty(exports, "traverseFast", {
  enumerable: true,
  get: function get() {
    return _traverseFast.default;
  }
});
Object.defineProperty(exports, "shallowEqual", {
  enumerable: true,
  get: function get() {
    return _shallowEqual.default;
  }
});
Object.defineProperty(exports, "is", {
  enumerable: true,
  get: function get() {
    return _is.default;
  }
});
Object.defineProperty(exports, "isBinding", {
  enumerable: true,
  get: function get() {
    return _isBinding.default;
  }
});
Object.defineProperty(exports, "isBlockScoped", {
  enumerable: true,
  get: function get() {
    return _isBlockScoped.default;
  }
});
Object.defineProperty(exports, "isImmutable", {
  enumerable: true,
  get: function get() {
    return _isImmutable.default;
  }
});
Object.defineProperty(exports, "isLet", {
  enumerable: true,
  get: function get() {
    return _isLet.default;
  }
});
Object.defineProperty(exports, "isNode", {
  enumerable: true,
  get: function get() {
    return _isNode.default;
  }
});
Object.defineProperty(exports, "isNodesEquivalent", {
  enumerable: true,
  get: function get() {
    return _isNodesEquivalent.default;
  }
});
Object.defineProperty(exports, "isReferenced", {
  enumerable: true,
  get: function get() {
    return _isReferenced.default;
  }
});
Object.defineProperty(exports, "isScope", {
  enumerable: true,
  get: function get() {
    return _isScope.default;
  }
});
Object.defineProperty(exports, "isSpecifierDefault", {
  enumerable: true,
  get: function get() {
    return _isSpecifierDefault.default;
  }
});
Object.defineProperty(exports, "isType", {
  enumerable: true,
  get: function get() {
    return _isType.default;
  }
});
Object.defineProperty(exports, "isValidES3Identifier", {
  enumerable: true,
  get: function get() {
    return _isValidES3Identifier.default;
  }
});
Object.defineProperty(exports, "isValidIdentifier", {
  enumerable: true,
  get: function get() {
    return _isValidIdentifier.default;
  }
});
Object.defineProperty(exports, "isVar", {
  enumerable: true,
  get: function get() {
    return _isVar.default;
  }
});
Object.defineProperty(exports, "matchesPattern", {
  enumerable: true,
  get: function get() {
    return _matchesPattern.default;
  }
});
Object.defineProperty(exports, "validate", {
  enumerable: true,
  get: function get() {
    return _validate.default;
  }
});
Object.defineProperty(exports, "buildMatchMemberExpression", {
  enumerable: true,
  get: function get() {
    return _buildMatchMemberExpression.default;
  }
});
exports.react = void 0;

var _isReactComponent = _interopRequireDefault(require("./validators/react/isReactComponent"));

var _isCompatTag = _interopRequireDefault(require("./validators/react/isCompatTag"));

var _buildChildren = _interopRequireDefault(require("./builders/react/buildChildren"));

var _assertNode = _interopRequireDefault(require("./asserts/assertNode"));

var _generated = require("./asserts/generated");

Object.keys(_generated).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _generated[key];
    }
  });
});

var _createTypeAnnotationBasedOnTypeof = _interopRequireDefault(require("./builders/flow/createTypeAnnotationBasedOnTypeof"));

var _createUnionTypeAnnotation = _interopRequireDefault(require("./builders/flow/createUnionTypeAnnotation"));

var _generated2 = require("./builders/generated");

Object.keys(_generated2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _generated2[key];
    }
  });
});

var _cloneNode = _interopRequireDefault(require("./clone/cloneNode"));

var _clone = _interopRequireDefault(require("./clone/clone"));

var _cloneDeep = _interopRequireDefault(require("./clone/cloneDeep"));

var _cloneWithoutLoc = _interopRequireDefault(require("./clone/cloneWithoutLoc"));

var _addComment = _interopRequireDefault(require("./comments/addComment"));

var _addComments = _interopRequireDefault(require("./comments/addComments"));

var _inheritInnerComments = _interopRequireDefault(require("./comments/inheritInnerComments"));

var _inheritLeadingComments = _interopRequireDefault(require("./comments/inheritLeadingComments"));

var _inheritsComments = _interopRequireDefault(require("./comments/inheritsComments"));

var _inheritTrailingComments = _interopRequireDefault(require("./comments/inheritTrailingComments"));

var _removeComments = _interopRequireDefault(require("./comments/removeComments"));

var _generated3 = require("./constants/generated");

Object.keys(_generated3).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _generated3[key];
    }
  });
});

var _constants = require("./constants");

Object.keys(_constants).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _constants[key];
    }
  });
});

var _ensureBlock = _interopRequireDefault(require("./converters/ensureBlock"));

var _toBindingIdentifierName = _interopRequireDefault(require("./converters/toBindingIdentifierName"));

var _toBlock = _interopRequireDefault(require("./converters/toBlock"));

var _toComputedKey = _interopRequireDefault(require("./converters/toComputedKey"));

var _toExpression = _interopRequireDefault(require("./converters/toExpression"));

var _toIdentifier = _interopRequireDefault(require("./converters/toIdentifier"));

var _toKeyAlias = _interopRequireDefault(require("./converters/toKeyAlias"));

var _toSequenceExpression = _interopRequireDefault(require("./converters/toSequenceExpression"));

var _toStatement = _interopRequireDefault(require("./converters/toStatement"));

var _valueToNode = _interopRequireDefault(require("./converters/valueToNode"));

var _definitions = require("./definitions");

Object.keys(_definitions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _definitions[key];
    }
  });
});

var _appendToMemberExpression = _interopRequireDefault(require("./modifications/appendToMemberExpression"));

var _inherits = _interopRequireDefault(require("./modifications/inherits"));

var _prependToMemberExpression = _interopRequireDefault(require("./modifications/prependToMemberExpression"));

var _removeProperties = _interopRequireDefault(require("./modifications/removeProperties"));

var _removePropertiesDeep = _interopRequireDefault(require("./modifications/removePropertiesDeep"));

var _removeTypeDuplicates = _interopRequireDefault(require("./modifications/flow/removeTypeDuplicates"));

var _getBindingIdentifiers = _interopRequireDefault(require("./retrievers/getBindingIdentifiers"));

var _getOuterBindingIdentifiers = _interopRequireDefault(require("./retrievers/getOuterBindingIdentifiers"));

var _traverse = _interopRequireDefault(require("./traverse/traverse"));

var _traverseFast = _interopRequireDefault(require("./traverse/traverseFast"));

var _shallowEqual = _interopRequireDefault(require("./utils/shallowEqual"));

var _is = _interopRequireDefault(require("./validators/is"));

var _isBinding = _interopRequireDefault(require("./validators/isBinding"));

var _isBlockScoped = _interopRequireDefault(require("./validators/isBlockScoped"));

var _isImmutable = _interopRequireDefault(require("./validators/isImmutable"));

var _isLet = _interopRequireDefault(require("./validators/isLet"));

var _isNode = _interopRequireDefault(require("./validators/isNode"));

var _isNodesEquivalent = _interopRequireDefault(require("./validators/isNodesEquivalent"));

var _isReferenced = _interopRequireDefault(require("./validators/isReferenced"));

var _isScope = _interopRequireDefault(require("./validators/isScope"));

var _isSpecifierDefault = _interopRequireDefault(require("./validators/isSpecifierDefault"));

var _isType = _interopRequireDefault(require("./validators/isType"));

var _isValidES3Identifier = _interopRequireDefault(require("./validators/isValidES3Identifier"));

var _isValidIdentifier = _interopRequireDefault(require("./validators/isValidIdentifier"));

var _isVar = _interopRequireDefault(require("./validators/isVar"));

var _matchesPattern = _interopRequireDefault(require("./validators/matchesPattern"));

var _validate = _interopRequireDefault(require("./validators/validate"));

var _buildMatchMemberExpression = _interopRequireDefault(require("./validators/buildMatchMemberExpression"));

var _generated4 = require("./validators/generated");

Object.keys(_generated4).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _generated4[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var react = {
  isReactComponent: _isReactComponent.default,
  isCompatTag: _isCompatTag.default,
  buildChildren: _buildChildren.default
};
exports.react = react;
}, function(modId) {var map = {"./validators/react/isReactComponent":1651912610407,"./validators/react/isCompatTag":1651912610425,"./builders/react/buildChildren":1651912610426,"./asserts/assertNode":1651912610431,"./asserts/generated":1651912610433,"./builders/flow/createTypeAnnotationBasedOnTypeof":1651912610434,"./builders/flow/createUnionTypeAnnotation":1651912610435,"./builders/generated":1651912610428,"./clone/cloneNode":1651912610437,"./clone/clone":1651912610438,"./clone/cloneDeep":1651912610439,"./clone/cloneWithoutLoc":1651912610440,"./comments/addComment":1651912610441,"./comments/addComments":1651912610442,"./comments/inheritInnerComments":1651912610443,"./comments/inheritLeadingComments":1651912610445,"./comments/inheritsComments":1651912610446,"./comments/inheritTrailingComments":1651912610447,"./comments/removeComments":1651912610448,"./constants/generated":1651912610449,"./constants":1651912610417,"./converters/ensureBlock":1651912610450,"./converters/toBindingIdentifierName":1651912610452,"./converters/toBlock":1651912610451,"./converters/toComputedKey":1651912610454,"./converters/toExpression":1651912610455,"./converters/toIdentifier":1651912610453,"./converters/toKeyAlias":1651912610456,"./converters/toSequenceExpression":1651912610460,"./converters/toStatement":1651912610463,"./converters/valueToNode":1651912610464,"./definitions":1651912610414,"./modifications/appendToMemberExpression":1651912610465,"./modifications/inherits":1651912610466,"./modifications/prependToMemberExpression":1651912610467,"./modifications/removeProperties":1651912610459,"./modifications/removePropertiesDeep":1651912610457,"./modifications/flow/removeTypeDuplicates":1651912610436,"./retrievers/getBindingIdentifiers":1651912610462,"./retrievers/getOuterBindingIdentifiers":1651912610468,"./traverse/traverse":1651912610469,"./traverse/traverseFast":1651912610458,"./utils/shallowEqual":1651912610412,"./validators/is":1651912610411,"./validators/isBinding":1651912610470,"./validators/isBlockScoped":1651912610471,"./validators/isImmutable":1651912610473,"./validators/isLet":1651912610472,"./validators/isNode":1651912610432,"./validators/isNodesEquivalent":1651912610474,"./validators/isReferenced":1651912610475,"./validators/isScope":1651912610476,"./validators/isSpecifierDefault":1651912610477,"./validators/isType":1651912610413,"./validators/isValidES3Identifier":1651912610478,"./validators/isValidIdentifier":1651912610416,"./validators/isVar":1651912610479,"./validators/matchesPattern":1651912610409,"./validators/validate":1651912610430,"./validators/buildMatchMemberExpression":1651912610408,"./validators/generated":1651912610410}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610407, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _buildMatchMemberExpression = _interopRequireDefault(require("../buildMatchMemberExpression"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isReactComponent = (0, _buildMatchMemberExpression.default)("React.Component");
var _default = isReactComponent;
exports.default = _default;
}, function(modId) { var map = {"../buildMatchMemberExpression":1651912610408}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610408, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buildMatchMemberExpression;

var _matchesPattern = _interopRequireDefault(require("./matchesPattern"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function buildMatchMemberExpression(match, allowPartial) {
  var parts = match.split(".");
  return function (member) {
    return (0, _matchesPattern.default)(member, parts, allowPartial);
  };
}
}, function(modId) { var map = {"./matchesPattern":1651912610409}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610409, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = matchesPattern;

var _generated = require("./generated");

function matchesPattern(member, match, allowPartial) {
  if (!(0, _generated.isMemberExpression)(member)) return false;
  var parts = Array.isArray(match) ? match : match.split(".");
  var nodes = [];
  var node;

  for (node = member; (0, _generated.isMemberExpression)(node); node = node.object) {
    nodes.push(node.property);
  }

  nodes.push(node);
  if (nodes.length < parts.length) return false;
  if (!allowPartial && nodes.length > parts.length) return false;

  for (var i = 0, j = nodes.length - 1; i < parts.length; i++, j--) {
    var _node = nodes[j];
    var value = void 0;

    if ((0, _generated.isIdentifier)(_node)) {
      value = _node.name;
    } else if ((0, _generated.isStringLiteral)(_node)) {
      value = _node.value;
    } else {
      return false;
    }

    if (parts[i] !== value) return false;
  }

  return true;
}
}, function(modId) { var map = {"./generated":1651912610410}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610410, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isArrayExpression = isArrayExpression;
exports.isAssignmentExpression = isAssignmentExpression;
exports.isBinaryExpression = isBinaryExpression;
exports.isDirective = isDirective;
exports.isDirectiveLiteral = isDirectiveLiteral;
exports.isBlockStatement = isBlockStatement;
exports.isBreakStatement = isBreakStatement;
exports.isCallExpression = isCallExpression;
exports.isCatchClause = isCatchClause;
exports.isConditionalExpression = isConditionalExpression;
exports.isContinueStatement = isContinueStatement;
exports.isDebuggerStatement = isDebuggerStatement;
exports.isDoWhileStatement = isDoWhileStatement;
exports.isEmptyStatement = isEmptyStatement;
exports.isExpressionStatement = isExpressionStatement;
exports.isFile = isFile;
exports.isForInStatement = isForInStatement;
exports.isForStatement = isForStatement;
exports.isFunctionDeclaration = isFunctionDeclaration;
exports.isFunctionExpression = isFunctionExpression;
exports.isIdentifier = isIdentifier;
exports.isIfStatement = isIfStatement;
exports.isLabeledStatement = isLabeledStatement;
exports.isStringLiteral = isStringLiteral;
exports.isNumericLiteral = isNumericLiteral;
exports.isNullLiteral = isNullLiteral;
exports.isBooleanLiteral = isBooleanLiteral;
exports.isRegExpLiteral = isRegExpLiteral;
exports.isLogicalExpression = isLogicalExpression;
exports.isMemberExpression = isMemberExpression;
exports.isNewExpression = isNewExpression;
exports.isProgram = isProgram;
exports.isObjectExpression = isObjectExpression;
exports.isObjectMethod = isObjectMethod;
exports.isObjectProperty = isObjectProperty;
exports.isRestElement = isRestElement;
exports.isReturnStatement = isReturnStatement;
exports.isSequenceExpression = isSequenceExpression;
exports.isSwitchCase = isSwitchCase;
exports.isSwitchStatement = isSwitchStatement;
exports.isThisExpression = isThisExpression;
exports.isThrowStatement = isThrowStatement;
exports.isTryStatement = isTryStatement;
exports.isUnaryExpression = isUnaryExpression;
exports.isUpdateExpression = isUpdateExpression;
exports.isVariableDeclaration = isVariableDeclaration;
exports.isVariableDeclarator = isVariableDeclarator;
exports.isWhileStatement = isWhileStatement;
exports.isWithStatement = isWithStatement;
exports.isAssignmentPattern = isAssignmentPattern;
exports.isArrayPattern = isArrayPattern;
exports.isArrowFunctionExpression = isArrowFunctionExpression;
exports.isClassBody = isClassBody;
exports.isClassDeclaration = isClassDeclaration;
exports.isClassExpression = isClassExpression;
exports.isExportAllDeclaration = isExportAllDeclaration;
exports.isExportDefaultDeclaration = isExportDefaultDeclaration;
exports.isExportNamedDeclaration = isExportNamedDeclaration;
exports.isExportSpecifier = isExportSpecifier;
exports.isForOfStatement = isForOfStatement;
exports.isImportDeclaration = isImportDeclaration;
exports.isImportDefaultSpecifier = isImportDefaultSpecifier;
exports.isImportNamespaceSpecifier = isImportNamespaceSpecifier;
exports.isImportSpecifier = isImportSpecifier;
exports.isMetaProperty = isMetaProperty;
exports.isClassMethod = isClassMethod;
exports.isObjectPattern = isObjectPattern;
exports.isSpreadElement = isSpreadElement;
exports.isSuper = isSuper;
exports.isTaggedTemplateExpression = isTaggedTemplateExpression;
exports.isTemplateElement = isTemplateElement;
exports.isTemplateLiteral = isTemplateLiteral;
exports.isYieldExpression = isYieldExpression;
exports.isAnyTypeAnnotation = isAnyTypeAnnotation;
exports.isArrayTypeAnnotation = isArrayTypeAnnotation;
exports.isBooleanTypeAnnotation = isBooleanTypeAnnotation;
exports.isBooleanLiteralTypeAnnotation = isBooleanLiteralTypeAnnotation;
exports.isNullLiteralTypeAnnotation = isNullLiteralTypeAnnotation;
exports.isClassImplements = isClassImplements;
exports.isDeclareClass = isDeclareClass;
exports.isDeclareFunction = isDeclareFunction;
exports.isDeclareInterface = isDeclareInterface;
exports.isDeclareModule = isDeclareModule;
exports.isDeclareModuleExports = isDeclareModuleExports;
exports.isDeclareTypeAlias = isDeclareTypeAlias;
exports.isDeclareOpaqueType = isDeclareOpaqueType;
exports.isDeclareVariable = isDeclareVariable;
exports.isDeclareExportDeclaration = isDeclareExportDeclaration;
exports.isDeclareExportAllDeclaration = isDeclareExportAllDeclaration;
exports.isDeclaredPredicate = isDeclaredPredicate;
exports.isExistsTypeAnnotation = isExistsTypeAnnotation;
exports.isFunctionTypeAnnotation = isFunctionTypeAnnotation;
exports.isFunctionTypeParam = isFunctionTypeParam;
exports.isGenericTypeAnnotation = isGenericTypeAnnotation;
exports.isInferredPredicate = isInferredPredicate;
exports.isInterfaceExtends = isInterfaceExtends;
exports.isInterfaceDeclaration = isInterfaceDeclaration;
exports.isIntersectionTypeAnnotation = isIntersectionTypeAnnotation;
exports.isMixedTypeAnnotation = isMixedTypeAnnotation;
exports.isEmptyTypeAnnotation = isEmptyTypeAnnotation;
exports.isNullableTypeAnnotation = isNullableTypeAnnotation;
exports.isNumberLiteralTypeAnnotation = isNumberLiteralTypeAnnotation;
exports.isNumberTypeAnnotation = isNumberTypeAnnotation;
exports.isObjectTypeAnnotation = isObjectTypeAnnotation;
exports.isObjectTypeCallProperty = isObjectTypeCallProperty;
exports.isObjectTypeIndexer = isObjectTypeIndexer;
exports.isObjectTypeProperty = isObjectTypeProperty;
exports.isObjectTypeSpreadProperty = isObjectTypeSpreadProperty;
exports.isOpaqueType = isOpaqueType;
exports.isQualifiedTypeIdentifier = isQualifiedTypeIdentifier;
exports.isStringLiteralTypeAnnotation = isStringLiteralTypeAnnotation;
exports.isStringTypeAnnotation = isStringTypeAnnotation;
exports.isThisTypeAnnotation = isThisTypeAnnotation;
exports.isTupleTypeAnnotation = isTupleTypeAnnotation;
exports.isTypeofTypeAnnotation = isTypeofTypeAnnotation;
exports.isTypeAlias = isTypeAlias;
exports.isTypeAnnotation = isTypeAnnotation;
exports.isTypeCastExpression = isTypeCastExpression;
exports.isTypeParameter = isTypeParameter;
exports.isTypeParameterDeclaration = isTypeParameterDeclaration;
exports.isTypeParameterInstantiation = isTypeParameterInstantiation;
exports.isUnionTypeAnnotation = isUnionTypeAnnotation;
exports.isVariance = isVariance;
exports.isVoidTypeAnnotation = isVoidTypeAnnotation;
exports.isJSXAttribute = isJSXAttribute;
exports.isJSXClosingElement = isJSXClosingElement;
exports.isJSXElement = isJSXElement;
exports.isJSXEmptyExpression = isJSXEmptyExpression;
exports.isJSXExpressionContainer = isJSXExpressionContainer;
exports.isJSXSpreadChild = isJSXSpreadChild;
exports.isJSXIdentifier = isJSXIdentifier;
exports.isJSXMemberExpression = isJSXMemberExpression;
exports.isJSXNamespacedName = isJSXNamespacedName;
exports.isJSXOpeningElement = isJSXOpeningElement;
exports.isJSXSpreadAttribute = isJSXSpreadAttribute;
exports.isJSXText = isJSXText;
exports.isJSXFragment = isJSXFragment;
exports.isJSXOpeningFragment = isJSXOpeningFragment;
exports.isJSXClosingFragment = isJSXClosingFragment;
exports.isNoop = isNoop;
exports.isParenthesizedExpression = isParenthesizedExpression;
exports.isAwaitExpression = isAwaitExpression;
exports.isBindExpression = isBindExpression;
exports.isClassProperty = isClassProperty;
exports.isOptionalMemberExpression = isOptionalMemberExpression;
exports.isOptionalCallExpression = isOptionalCallExpression;
exports.isImport = isImport;
exports.isDecorator = isDecorator;
exports.isDoExpression = isDoExpression;
exports.isExportDefaultSpecifier = isExportDefaultSpecifier;
exports.isExportNamespaceSpecifier = isExportNamespaceSpecifier;
exports.isTSParameterProperty = isTSParameterProperty;
exports.isTSDeclareFunction = isTSDeclareFunction;
exports.isTSDeclareMethod = isTSDeclareMethod;
exports.isTSQualifiedName = isTSQualifiedName;
exports.isTSCallSignatureDeclaration = isTSCallSignatureDeclaration;
exports.isTSConstructSignatureDeclaration = isTSConstructSignatureDeclaration;
exports.isTSPropertySignature = isTSPropertySignature;
exports.isTSMethodSignature = isTSMethodSignature;
exports.isTSIndexSignature = isTSIndexSignature;
exports.isTSAnyKeyword = isTSAnyKeyword;
exports.isTSNumberKeyword = isTSNumberKeyword;
exports.isTSObjectKeyword = isTSObjectKeyword;
exports.isTSBooleanKeyword = isTSBooleanKeyword;
exports.isTSStringKeyword = isTSStringKeyword;
exports.isTSSymbolKeyword = isTSSymbolKeyword;
exports.isTSVoidKeyword = isTSVoidKeyword;
exports.isTSUndefinedKeyword = isTSUndefinedKeyword;
exports.isTSNullKeyword = isTSNullKeyword;
exports.isTSNeverKeyword = isTSNeverKeyword;
exports.isTSThisType = isTSThisType;
exports.isTSFunctionType = isTSFunctionType;
exports.isTSConstructorType = isTSConstructorType;
exports.isTSTypeReference = isTSTypeReference;
exports.isTSTypePredicate = isTSTypePredicate;
exports.isTSTypeQuery = isTSTypeQuery;
exports.isTSTypeLiteral = isTSTypeLiteral;
exports.isTSArrayType = isTSArrayType;
exports.isTSTupleType = isTSTupleType;
exports.isTSUnionType = isTSUnionType;
exports.isTSIntersectionType = isTSIntersectionType;
exports.isTSConditionalType = isTSConditionalType;
exports.isTSInferType = isTSInferType;
exports.isTSParenthesizedType = isTSParenthesizedType;
exports.isTSTypeOperator = isTSTypeOperator;
exports.isTSIndexedAccessType = isTSIndexedAccessType;
exports.isTSMappedType = isTSMappedType;
exports.isTSLiteralType = isTSLiteralType;
exports.isTSExpressionWithTypeArguments = isTSExpressionWithTypeArguments;
exports.isTSInterfaceDeclaration = isTSInterfaceDeclaration;
exports.isTSInterfaceBody = isTSInterfaceBody;
exports.isTSTypeAliasDeclaration = isTSTypeAliasDeclaration;
exports.isTSAsExpression = isTSAsExpression;
exports.isTSTypeAssertion = isTSTypeAssertion;
exports.isTSEnumDeclaration = isTSEnumDeclaration;
exports.isTSEnumMember = isTSEnumMember;
exports.isTSModuleDeclaration = isTSModuleDeclaration;
exports.isTSModuleBlock = isTSModuleBlock;
exports.isTSImportEqualsDeclaration = isTSImportEqualsDeclaration;
exports.isTSExternalModuleReference = isTSExternalModuleReference;
exports.isTSNonNullExpression = isTSNonNullExpression;
exports.isTSExportAssignment = isTSExportAssignment;
exports.isTSNamespaceExportDeclaration = isTSNamespaceExportDeclaration;
exports.isTSTypeAnnotation = isTSTypeAnnotation;
exports.isTSTypeParameterInstantiation = isTSTypeParameterInstantiation;
exports.isTSTypeParameterDeclaration = isTSTypeParameterDeclaration;
exports.isTSTypeParameter = isTSTypeParameter;
exports.isExpression = isExpression;
exports.isBinary = isBinary;
exports.isScopable = isScopable;
exports.isBlockParent = isBlockParent;
exports.isBlock = isBlock;
exports.isStatement = isStatement;
exports.isTerminatorless = isTerminatorless;
exports.isCompletionStatement = isCompletionStatement;
exports.isConditional = isConditional;
exports.isLoop = isLoop;
exports.isWhile = isWhile;
exports.isExpressionWrapper = isExpressionWrapper;
exports.isFor = isFor;
exports.isForXStatement = isForXStatement;
exports.isFunction = isFunction;
exports.isFunctionParent = isFunctionParent;
exports.isPureish = isPureish;
exports.isDeclaration = isDeclaration;
exports.isPatternLike = isPatternLike;
exports.isLVal = isLVal;
exports.isTSEntityName = isTSEntityName;
exports.isLiteral = isLiteral;
exports.isImmutable = isImmutable;
exports.isUserWhitespacable = isUserWhitespacable;
exports.isMethod = isMethod;
exports.isObjectMember = isObjectMember;
exports.isProperty = isProperty;
exports.isUnaryLike = isUnaryLike;
exports.isPattern = isPattern;
exports.isClass = isClass;
exports.isModuleDeclaration = isModuleDeclaration;
exports.isExportDeclaration = isExportDeclaration;
exports.isModuleSpecifier = isModuleSpecifier;
exports.isFlow = isFlow;
exports.isFlowType = isFlowType;
exports.isFlowBaseAnnotation = isFlowBaseAnnotation;
exports.isFlowDeclaration = isFlowDeclaration;
exports.isFlowPredicate = isFlowPredicate;
exports.isJSX = isJSX;
exports.isTSTypeElement = isTSTypeElement;
exports.isTSType = isTSType;
exports.isNumberLiteral = isNumberLiteral;
exports.isRegexLiteral = isRegexLiteral;
exports.isRestProperty = isRestProperty;
exports.isSpreadProperty = isSpreadProperty;

var _is = _interopRequireDefault(require("../is"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isArrayExpression(node, opts) {
  return (0, _is.default)("ArrayExpression", node, opts);
}

function isAssignmentExpression(node, opts) {
  return (0, _is.default)("AssignmentExpression", node, opts);
}

function isBinaryExpression(node, opts) {
  return (0, _is.default)("BinaryExpression", node, opts);
}

function isDirective(node, opts) {
  return (0, _is.default)("Directive", node, opts);
}

function isDirectiveLiteral(node, opts) {
  return (0, _is.default)("DirectiveLiteral", node, opts);
}

function isBlockStatement(node, opts) {
  return (0, _is.default)("BlockStatement", node, opts);
}

function isBreakStatement(node, opts) {
  return (0, _is.default)("BreakStatement", node, opts);
}

function isCallExpression(node, opts) {
  return (0, _is.default)("CallExpression", node, opts);
}

function isCatchClause(node, opts) {
  return (0, _is.default)("CatchClause", node, opts);
}

function isConditionalExpression(node, opts) {
  return (0, _is.default)("ConditionalExpression", node, opts);
}

function isContinueStatement(node, opts) {
  return (0, _is.default)("ContinueStatement", node, opts);
}

function isDebuggerStatement(node, opts) {
  return (0, _is.default)("DebuggerStatement", node, opts);
}

function isDoWhileStatement(node, opts) {
  return (0, _is.default)("DoWhileStatement", node, opts);
}

function isEmptyStatement(node, opts) {
  return (0, _is.default)("EmptyStatement", node, opts);
}

function isExpressionStatement(node, opts) {
  return (0, _is.default)("ExpressionStatement", node, opts);
}

function isFile(node, opts) {
  return (0, _is.default)("File", node, opts);
}

function isForInStatement(node, opts) {
  return (0, _is.default)("ForInStatement", node, opts);
}

function isForStatement(node, opts) {
  return (0, _is.default)("ForStatement", node, opts);
}

function isFunctionDeclaration(node, opts) {
  return (0, _is.default)("FunctionDeclaration", node, opts);
}

function isFunctionExpression(node, opts) {
  return (0, _is.default)("FunctionExpression", node, opts);
}

function isIdentifier(node, opts) {
  return (0, _is.default)("Identifier", node, opts);
}

function isIfStatement(node, opts) {
  return (0, _is.default)("IfStatement", node, opts);
}

function isLabeledStatement(node, opts) {
  return (0, _is.default)("LabeledStatement", node, opts);
}

function isStringLiteral(node, opts) {
  return (0, _is.default)("StringLiteral", node, opts);
}

function isNumericLiteral(node, opts) {
  return (0, _is.default)("NumericLiteral", node, opts);
}

function isNullLiteral(node, opts) {
  return (0, _is.default)("NullLiteral", node, opts);
}

function isBooleanLiteral(node, opts) {
  return (0, _is.default)("BooleanLiteral", node, opts);
}

function isRegExpLiteral(node, opts) {
  return (0, _is.default)("RegExpLiteral", node, opts);
}

function isLogicalExpression(node, opts) {
  return (0, _is.default)("LogicalExpression", node, opts);
}

function isMemberExpression(node, opts) {
  return (0, _is.default)("MemberExpression", node, opts);
}

function isNewExpression(node, opts) {
  return (0, _is.default)("NewExpression", node, opts);
}

function isProgram(node, opts) {
  return (0, _is.default)("Program", node, opts);
}

function isObjectExpression(node, opts) {
  return (0, _is.default)("ObjectExpression", node, opts);
}

function isObjectMethod(node, opts) {
  return (0, _is.default)("ObjectMethod", node, opts);
}

function isObjectProperty(node, opts) {
  return (0, _is.default)("ObjectProperty", node, opts);
}

function isRestElement(node, opts) {
  return (0, _is.default)("RestElement", node, opts);
}

function isReturnStatement(node, opts) {
  return (0, _is.default)("ReturnStatement", node, opts);
}

function isSequenceExpression(node, opts) {
  return (0, _is.default)("SequenceExpression", node, opts);
}

function isSwitchCase(node, opts) {
  return (0, _is.default)("SwitchCase", node, opts);
}

function isSwitchStatement(node, opts) {
  return (0, _is.default)("SwitchStatement", node, opts);
}

function isThisExpression(node, opts) {
  return (0, _is.default)("ThisExpression", node, opts);
}

function isThrowStatement(node, opts) {
  return (0, _is.default)("ThrowStatement", node, opts);
}

function isTryStatement(node, opts) {
  return (0, _is.default)("TryStatement", node, opts);
}

function isUnaryExpression(node, opts) {
  return (0, _is.default)("UnaryExpression", node, opts);
}

function isUpdateExpression(node, opts) {
  return (0, _is.default)("UpdateExpression", node, opts);
}

function isVariableDeclaration(node, opts) {
  return (0, _is.default)("VariableDeclaration", node, opts);
}

function isVariableDeclarator(node, opts) {
  return (0, _is.default)("VariableDeclarator", node, opts);
}

function isWhileStatement(node, opts) {
  return (0, _is.default)("WhileStatement", node, opts);
}

function isWithStatement(node, opts) {
  return (0, _is.default)("WithStatement", node, opts);
}

function isAssignmentPattern(node, opts) {
  return (0, _is.default)("AssignmentPattern", node, opts);
}

function isArrayPattern(node, opts) {
  return (0, _is.default)("ArrayPattern", node, opts);
}

function isArrowFunctionExpression(node, opts) {
  return (0, _is.default)("ArrowFunctionExpression", node, opts);
}

function isClassBody(node, opts) {
  return (0, _is.default)("ClassBody", node, opts);
}

function isClassDeclaration(node, opts) {
  return (0, _is.default)("ClassDeclaration", node, opts);
}

function isClassExpression(node, opts) {
  return (0, _is.default)("ClassExpression", node, opts);
}

function isExportAllDeclaration(node, opts) {
  return (0, _is.default)("ExportAllDeclaration", node, opts);
}

function isExportDefaultDeclaration(node, opts) {
  return (0, _is.default)("ExportDefaultDeclaration", node, opts);
}

function isExportNamedDeclaration(node, opts) {
  return (0, _is.default)("ExportNamedDeclaration", node, opts);
}

function isExportSpecifier(node, opts) {
  return (0, _is.default)("ExportSpecifier", node, opts);
}

function isForOfStatement(node, opts) {
  return (0, _is.default)("ForOfStatement", node, opts);
}

function isImportDeclaration(node, opts) {
  return (0, _is.default)("ImportDeclaration", node, opts);
}

function isImportDefaultSpecifier(node, opts) {
  return (0, _is.default)("ImportDefaultSpecifier", node, opts);
}

function isImportNamespaceSpecifier(node, opts) {
  return (0, _is.default)("ImportNamespaceSpecifier", node, opts);
}

function isImportSpecifier(node, opts) {
  return (0, _is.default)("ImportSpecifier", node, opts);
}

function isMetaProperty(node, opts) {
  return (0, _is.default)("MetaProperty", node, opts);
}

function isClassMethod(node, opts) {
  return (0, _is.default)("ClassMethod", node, opts);
}

function isObjectPattern(node, opts) {
  return (0, _is.default)("ObjectPattern", node, opts);
}

function isSpreadElement(node, opts) {
  return (0, _is.default)("SpreadElement", node, opts);
}

function isSuper(node, opts) {
  return (0, _is.default)("Super", node, opts);
}

function isTaggedTemplateExpression(node, opts) {
  return (0, _is.default)("TaggedTemplateExpression", node, opts);
}

function isTemplateElement(node, opts) {
  return (0, _is.default)("TemplateElement", node, opts);
}

function isTemplateLiteral(node, opts) {
  return (0, _is.default)("TemplateLiteral", node, opts);
}

function isYieldExpression(node, opts) {
  return (0, _is.default)("YieldExpression", node, opts);
}

function isAnyTypeAnnotation(node, opts) {
  return (0, _is.default)("AnyTypeAnnotation", node, opts);
}

function isArrayTypeAnnotation(node, opts) {
  return (0, _is.default)("ArrayTypeAnnotation", node, opts);
}

function isBooleanTypeAnnotation(node, opts) {
  return (0, _is.default)("BooleanTypeAnnotation", node, opts);
}

function isBooleanLiteralTypeAnnotation(node, opts) {
  return (0, _is.default)("BooleanLiteralTypeAnnotation", node, opts);
}

function isNullLiteralTypeAnnotation(node, opts) {
  return (0, _is.default)("NullLiteralTypeAnnotation", node, opts);
}

function isClassImplements(node, opts) {
  return (0, _is.default)("ClassImplements", node, opts);
}

function isDeclareClass(node, opts) {
  return (0, _is.default)("DeclareClass", node, opts);
}

function isDeclareFunction(node, opts) {
  return (0, _is.default)("DeclareFunction", node, opts);
}

function isDeclareInterface(node, opts) {
  return (0, _is.default)("DeclareInterface", node, opts);
}

function isDeclareModule(node, opts) {
  return (0, _is.default)("DeclareModule", node, opts);
}

function isDeclareModuleExports(node, opts) {
  return (0, _is.default)("DeclareModuleExports", node, opts);
}

function isDeclareTypeAlias(node, opts) {
  return (0, _is.default)("DeclareTypeAlias", node, opts);
}

function isDeclareOpaqueType(node, opts) {
  return (0, _is.default)("DeclareOpaqueType", node, opts);
}

function isDeclareVariable(node, opts) {
  return (0, _is.default)("DeclareVariable", node, opts);
}

function isDeclareExportDeclaration(node, opts) {
  return (0, _is.default)("DeclareExportDeclaration", node, opts);
}

function isDeclareExportAllDeclaration(node, opts) {
  return (0, _is.default)("DeclareExportAllDeclaration", node, opts);
}

function isDeclaredPredicate(node, opts) {
  return (0, _is.default)("DeclaredPredicate", node, opts);
}

function isExistsTypeAnnotation(node, opts) {
  return (0, _is.default)("ExistsTypeAnnotation", node, opts);
}

function isFunctionTypeAnnotation(node, opts) {
  return (0, _is.default)("FunctionTypeAnnotation", node, opts);
}

function isFunctionTypeParam(node, opts) {
  return (0, _is.default)("FunctionTypeParam", node, opts);
}

function isGenericTypeAnnotation(node, opts) {
  return (0, _is.default)("GenericTypeAnnotation", node, opts);
}

function isInferredPredicate(node, opts) {
  return (0, _is.default)("InferredPredicate", node, opts);
}

function isInterfaceExtends(node, opts) {
  return (0, _is.default)("InterfaceExtends", node, opts);
}

function isInterfaceDeclaration(node, opts) {
  return (0, _is.default)("InterfaceDeclaration", node, opts);
}

function isIntersectionTypeAnnotation(node, opts) {
  return (0, _is.default)("IntersectionTypeAnnotation", node, opts);
}

function isMixedTypeAnnotation(node, opts) {
  return (0, _is.default)("MixedTypeAnnotation", node, opts);
}

function isEmptyTypeAnnotation(node, opts) {
  return (0, _is.default)("EmptyTypeAnnotation", node, opts);
}

function isNullableTypeAnnotation(node, opts) {
  return (0, _is.default)("NullableTypeAnnotation", node, opts);
}

function isNumberLiteralTypeAnnotation(node, opts) {
  return (0, _is.default)("NumberLiteralTypeAnnotation", node, opts);
}

function isNumberTypeAnnotation(node, opts) {
  return (0, _is.default)("NumberTypeAnnotation", node, opts);
}

function isObjectTypeAnnotation(node, opts) {
  return (0, _is.default)("ObjectTypeAnnotation", node, opts);
}

function isObjectTypeCallProperty(node, opts) {
  return (0, _is.default)("ObjectTypeCallProperty", node, opts);
}

function isObjectTypeIndexer(node, opts) {
  return (0, _is.default)("ObjectTypeIndexer", node, opts);
}

function isObjectTypeProperty(node, opts) {
  return (0, _is.default)("ObjectTypeProperty", node, opts);
}

function isObjectTypeSpreadProperty(node, opts) {
  return (0, _is.default)("ObjectTypeSpreadProperty", node, opts);
}

function isOpaqueType(node, opts) {
  return (0, _is.default)("OpaqueType", node, opts);
}

function isQualifiedTypeIdentifier(node, opts) {
  return (0, _is.default)("QualifiedTypeIdentifier", node, opts);
}

function isStringLiteralTypeAnnotation(node, opts) {
  return (0, _is.default)("StringLiteralTypeAnnotation", node, opts);
}

function isStringTypeAnnotation(node, opts) {
  return (0, _is.default)("StringTypeAnnotation", node, opts);
}

function isThisTypeAnnotation(node, opts) {
  return (0, _is.default)("ThisTypeAnnotation", node, opts);
}

function isTupleTypeAnnotation(node, opts) {
  return (0, _is.default)("TupleTypeAnnotation", node, opts);
}

function isTypeofTypeAnnotation(node, opts) {
  return (0, _is.default)("TypeofTypeAnnotation", node, opts);
}

function isTypeAlias(node, opts) {
  return (0, _is.default)("TypeAlias", node, opts);
}

function isTypeAnnotation(node, opts) {
  return (0, _is.default)("TypeAnnotation", node, opts);
}

function isTypeCastExpression(node, opts) {
  return (0, _is.default)("TypeCastExpression", node, opts);
}

function isTypeParameter(node, opts) {
  return (0, _is.default)("TypeParameter", node, opts);
}

function isTypeParameterDeclaration(node, opts) {
  return (0, _is.default)("TypeParameterDeclaration", node, opts);
}

function isTypeParameterInstantiation(node, opts) {
  return (0, _is.default)("TypeParameterInstantiation", node, opts);
}

function isUnionTypeAnnotation(node, opts) {
  return (0, _is.default)("UnionTypeAnnotation", node, opts);
}

function isVariance(node, opts) {
  return (0, _is.default)("Variance", node, opts);
}

function isVoidTypeAnnotation(node, opts) {
  return (0, _is.default)("VoidTypeAnnotation", node, opts);
}

function isJSXAttribute(node, opts) {
  return (0, _is.default)("JSXAttribute", node, opts);
}

function isJSXClosingElement(node, opts) {
  return (0, _is.default)("JSXClosingElement", node, opts);
}

function isJSXElement(node, opts) {
  return (0, _is.default)("JSXElement", node, opts);
}

function isJSXEmptyExpression(node, opts) {
  return (0, _is.default)("JSXEmptyExpression", node, opts);
}

function isJSXExpressionContainer(node, opts) {
  return (0, _is.default)("JSXExpressionContainer", node, opts);
}

function isJSXSpreadChild(node, opts) {
  return (0, _is.default)("JSXSpreadChild", node, opts);
}

function isJSXIdentifier(node, opts) {
  return (0, _is.default)("JSXIdentifier", node, opts);
}

function isJSXMemberExpression(node, opts) {
  return (0, _is.default)("JSXMemberExpression", node, opts);
}

function isJSXNamespacedName(node, opts) {
  return (0, _is.default)("JSXNamespacedName", node, opts);
}

function isJSXOpeningElement(node, opts) {
  return (0, _is.default)("JSXOpeningElement", node, opts);
}

function isJSXSpreadAttribute(node, opts) {
  return (0, _is.default)("JSXSpreadAttribute", node, opts);
}

function isJSXText(node, opts) {
  return (0, _is.default)("JSXText", node, opts);
}

function isJSXFragment(node, opts) {
  return (0, _is.default)("JSXFragment", node, opts);
}

function isJSXOpeningFragment(node, opts) {
  return (0, _is.default)("JSXOpeningFragment", node, opts);
}

function isJSXClosingFragment(node, opts) {
  return (0, _is.default)("JSXClosingFragment", node, opts);
}

function isNoop(node, opts) {
  return (0, _is.default)("Noop", node, opts);
}

function isParenthesizedExpression(node, opts) {
  return (0, _is.default)("ParenthesizedExpression", node, opts);
}

function isAwaitExpression(node, opts) {
  return (0, _is.default)("AwaitExpression", node, opts);
}

function isBindExpression(node, opts) {
  return (0, _is.default)("BindExpression", node, opts);
}

function isClassProperty(node, opts) {
  return (0, _is.default)("ClassProperty", node, opts);
}

function isOptionalMemberExpression(node, opts) {
  return (0, _is.default)("OptionalMemberExpression", node, opts);
}

function isOptionalCallExpression(node, opts) {
  return (0, _is.default)("OptionalCallExpression", node, opts);
}

function isImport(node, opts) {
  return (0, _is.default)("Import", node, opts);
}

function isDecorator(node, opts) {
  return (0, _is.default)("Decorator", node, opts);
}

function isDoExpression(node, opts) {
  return (0, _is.default)("DoExpression", node, opts);
}

function isExportDefaultSpecifier(node, opts) {
  return (0, _is.default)("ExportDefaultSpecifier", node, opts);
}

function isExportNamespaceSpecifier(node, opts) {
  return (0, _is.default)("ExportNamespaceSpecifier", node, opts);
}

function isTSParameterProperty(node, opts) {
  return (0, _is.default)("TSParameterProperty", node, opts);
}

function isTSDeclareFunction(node, opts) {
  return (0, _is.default)("TSDeclareFunction", node, opts);
}

function isTSDeclareMethod(node, opts) {
  return (0, _is.default)("TSDeclareMethod", node, opts);
}

function isTSQualifiedName(node, opts) {
  return (0, _is.default)("TSQualifiedName", node, opts);
}

function isTSCallSignatureDeclaration(node, opts) {
  return (0, _is.default)("TSCallSignatureDeclaration", node, opts);
}

function isTSConstructSignatureDeclaration(node, opts) {
  return (0, _is.default)("TSConstructSignatureDeclaration", node, opts);
}

function isTSPropertySignature(node, opts) {
  return (0, _is.default)("TSPropertySignature", node, opts);
}

function isTSMethodSignature(node, opts) {
  return (0, _is.default)("TSMethodSignature", node, opts);
}

function isTSIndexSignature(node, opts) {
  return (0, _is.default)("TSIndexSignature", node, opts);
}

function isTSAnyKeyword(node, opts) {
  return (0, _is.default)("TSAnyKeyword", node, opts);
}

function isTSNumberKeyword(node, opts) {
  return (0, _is.default)("TSNumberKeyword", node, opts);
}

function isTSObjectKeyword(node, opts) {
  return (0, _is.default)("TSObjectKeyword", node, opts);
}

function isTSBooleanKeyword(node, opts) {
  return (0, _is.default)("TSBooleanKeyword", node, opts);
}

function isTSStringKeyword(node, opts) {
  return (0, _is.default)("TSStringKeyword", node, opts);
}

function isTSSymbolKeyword(node, opts) {
  return (0, _is.default)("TSSymbolKeyword", node, opts);
}

function isTSVoidKeyword(node, opts) {
  return (0, _is.default)("TSVoidKeyword", node, opts);
}

function isTSUndefinedKeyword(node, opts) {
  return (0, _is.default)("TSUndefinedKeyword", node, opts);
}

function isTSNullKeyword(node, opts) {
  return (0, _is.default)("TSNullKeyword", node, opts);
}

function isTSNeverKeyword(node, opts) {
  return (0, _is.default)("TSNeverKeyword", node, opts);
}

function isTSThisType(node, opts) {
  return (0, _is.default)("TSThisType", node, opts);
}

function isTSFunctionType(node, opts) {
  return (0, _is.default)("TSFunctionType", node, opts);
}

function isTSConstructorType(node, opts) {
  return (0, _is.default)("TSConstructorType", node, opts);
}

function isTSTypeReference(node, opts) {
  return (0, _is.default)("TSTypeReference", node, opts);
}

function isTSTypePredicate(node, opts) {
  return (0, _is.default)("TSTypePredicate", node, opts);
}

function isTSTypeQuery(node, opts) {
  return (0, _is.default)("TSTypeQuery", node, opts);
}

function isTSTypeLiteral(node, opts) {
  return (0, _is.default)("TSTypeLiteral", node, opts);
}

function isTSArrayType(node, opts) {
  return (0, _is.default)("TSArrayType", node, opts);
}

function isTSTupleType(node, opts) {
  return (0, _is.default)("TSTupleType", node, opts);
}

function isTSUnionType(node, opts) {
  return (0, _is.default)("TSUnionType", node, opts);
}

function isTSIntersectionType(node, opts) {
  return (0, _is.default)("TSIntersectionType", node, opts);
}

function isTSConditionalType(node, opts) {
  return (0, _is.default)("TSConditionalType", node, opts);
}

function isTSInferType(node, opts) {
  return (0, _is.default)("TSInferType", node, opts);
}

function isTSParenthesizedType(node, opts) {
  return (0, _is.default)("TSParenthesizedType", node, opts);
}

function isTSTypeOperator(node, opts) {
  return (0, _is.default)("TSTypeOperator", node, opts);
}

function isTSIndexedAccessType(node, opts) {
  return (0, _is.default)("TSIndexedAccessType", node, opts);
}

function isTSMappedType(node, opts) {
  return (0, _is.default)("TSMappedType", node, opts);
}

function isTSLiteralType(node, opts) {
  return (0, _is.default)("TSLiteralType", node, opts);
}

function isTSExpressionWithTypeArguments(node, opts) {
  return (0, _is.default)("TSExpressionWithTypeArguments", node, opts);
}

function isTSInterfaceDeclaration(node, opts) {
  return (0, _is.default)("TSInterfaceDeclaration", node, opts);
}

function isTSInterfaceBody(node, opts) {
  return (0, _is.default)("TSInterfaceBody", node, opts);
}

function isTSTypeAliasDeclaration(node, opts) {
  return (0, _is.default)("TSTypeAliasDeclaration", node, opts);
}

function isTSAsExpression(node, opts) {
  return (0, _is.default)("TSAsExpression", node, opts);
}

function isTSTypeAssertion(node, opts) {
  return (0, _is.default)("TSTypeAssertion", node, opts);
}

function isTSEnumDeclaration(node, opts) {
  return (0, _is.default)("TSEnumDeclaration", node, opts);
}

function isTSEnumMember(node, opts) {
  return (0, _is.default)("TSEnumMember", node, opts);
}

function isTSModuleDeclaration(node, opts) {
  return (0, _is.default)("TSModuleDeclaration", node, opts);
}

function isTSModuleBlock(node, opts) {
  return (0, _is.default)("TSModuleBlock", node, opts);
}

function isTSImportEqualsDeclaration(node, opts) {
  return (0, _is.default)("TSImportEqualsDeclaration", node, opts);
}

function isTSExternalModuleReference(node, opts) {
  return (0, _is.default)("TSExternalModuleReference", node, opts);
}

function isTSNonNullExpression(node, opts) {
  return (0, _is.default)("TSNonNullExpression", node, opts);
}

function isTSExportAssignment(node, opts) {
  return (0, _is.default)("TSExportAssignment", node, opts);
}

function isTSNamespaceExportDeclaration(node, opts) {
  return (0, _is.default)("TSNamespaceExportDeclaration", node, opts);
}

function isTSTypeAnnotation(node, opts) {
  return (0, _is.default)("TSTypeAnnotation", node, opts);
}

function isTSTypeParameterInstantiation(node, opts) {
  return (0, _is.default)("TSTypeParameterInstantiation", node, opts);
}

function isTSTypeParameterDeclaration(node, opts) {
  return (0, _is.default)("TSTypeParameterDeclaration", node, opts);
}

function isTSTypeParameter(node, opts) {
  return (0, _is.default)("TSTypeParameter", node, opts);
}

function isExpression(node, opts) {
  return (0, _is.default)("Expression", node, opts);
}

function isBinary(node, opts) {
  return (0, _is.default)("Binary", node, opts);
}

function isScopable(node, opts) {
  return (0, _is.default)("Scopable", node, opts);
}

function isBlockParent(node, opts) {
  return (0, _is.default)("BlockParent", node, opts);
}

function isBlock(node, opts) {
  return (0, _is.default)("Block", node, opts);
}

function isStatement(node, opts) {
  return (0, _is.default)("Statement", node, opts);
}

function isTerminatorless(node, opts) {
  return (0, _is.default)("Terminatorless", node, opts);
}

function isCompletionStatement(node, opts) {
  return (0, _is.default)("CompletionStatement", node, opts);
}

function isConditional(node, opts) {
  return (0, _is.default)("Conditional", node, opts);
}

function isLoop(node, opts) {
  return (0, _is.default)("Loop", node, opts);
}

function isWhile(node, opts) {
  return (0, _is.default)("While", node, opts);
}

function isExpressionWrapper(node, opts) {
  return (0, _is.default)("ExpressionWrapper", node, opts);
}

function isFor(node, opts) {
  return (0, _is.default)("For", node, opts);
}

function isForXStatement(node, opts) {
  return (0, _is.default)("ForXStatement", node, opts);
}

function isFunction(node, opts) {
  return (0, _is.default)("Function", node, opts);
}

function isFunctionParent(node, opts) {
  return (0, _is.default)("FunctionParent", node, opts);
}

function isPureish(node, opts) {
  return (0, _is.default)("Pureish", node, opts);
}

function isDeclaration(node, opts) {
  return (0, _is.default)("Declaration", node, opts);
}

function isPatternLike(node, opts) {
  return (0, _is.default)("PatternLike", node, opts);
}

function isLVal(node, opts) {
  return (0, _is.default)("LVal", node, opts);
}

function isTSEntityName(node, opts) {
  return (0, _is.default)("TSEntityName", node, opts);
}

function isLiteral(node, opts) {
  return (0, _is.default)("Literal", node, opts);
}

function isImmutable(node, opts) {
  return (0, _is.default)("Immutable", node, opts);
}

function isUserWhitespacable(node, opts) {
  return (0, _is.default)("UserWhitespacable", node, opts);
}

function isMethod(node, opts) {
  return (0, _is.default)("Method", node, opts);
}

function isObjectMember(node, opts) {
  return (0, _is.default)("ObjectMember", node, opts);
}

function isProperty(node, opts) {
  return (0, _is.default)("Property", node, opts);
}

function isUnaryLike(node, opts) {
  return (0, _is.default)("UnaryLike", node, opts);
}

function isPattern(node, opts) {
  return (0, _is.default)("Pattern", node, opts);
}

function isClass(node, opts) {
  return (0, _is.default)("Class", node, opts);
}

function isModuleDeclaration(node, opts) {
  return (0, _is.default)("ModuleDeclaration", node, opts);
}

function isExportDeclaration(node, opts) {
  return (0, _is.default)("ExportDeclaration", node, opts);
}

function isModuleSpecifier(node, opts) {
  return (0, _is.default)("ModuleSpecifier", node, opts);
}

function isFlow(node, opts) {
  return (0, _is.default)("Flow", node, opts);
}

function isFlowType(node, opts) {
  return (0, _is.default)("FlowType", node, opts);
}

function isFlowBaseAnnotation(node, opts) {
  return (0, _is.default)("FlowBaseAnnotation", node, opts);
}

function isFlowDeclaration(node, opts) {
  return (0, _is.default)("FlowDeclaration", node, opts);
}

function isFlowPredicate(node, opts) {
  return (0, _is.default)("FlowPredicate", node, opts);
}

function isJSX(node, opts) {
  return (0, _is.default)("JSX", node, opts);
}

function isTSTypeElement(node, opts) {
  return (0, _is.default)("TSTypeElement", node, opts);
}

function isTSType(node, opts) {
  return (0, _is.default)("TSType", node, opts);
}

function isNumberLiteral(node, opts) {
  console.trace("The node type NumberLiteral has been renamed to NumericLiteral");
  return (0, _is.default)("NumberLiteral", node, opts);
}

function isRegexLiteral(node, opts) {
  console.trace("The node type RegexLiteral has been renamed to RegExpLiteral");
  return (0, _is.default)("RegexLiteral", node, opts);
}

function isRestProperty(node, opts) {
  console.trace("The node type RestProperty has been renamed to RestElement");
  return (0, _is.default)("RestProperty", node, opts);
}

function isSpreadProperty(node, opts) {
  console.trace("The node type SpreadProperty has been renamed to SpreadElement");
  return (0, _is.default)("SpreadProperty", node, opts);
}
}, function(modId) { var map = {"../is":1651912610411}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610411, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = is;

var _shallowEqual = _interopRequireDefault(require("../utils/shallowEqual"));

var _isType = _interopRequireDefault(require("./isType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function is(type, node, opts) {
  if (!node) return false;
  var matches = (0, _isType.default)(node.type, type);
  if (!matches) return false;

  if (typeof opts === "undefined") {
    return true;
  } else {
    return (0, _shallowEqual.default)(node, opts);
  }
}
}, function(modId) { var map = {"../utils/shallowEqual":1651912610412,"./isType":1651912610413}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610412, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = shallowEqual;

function shallowEqual(actual, expected) {
  var keys = Object.keys(expected);
  var _arr = keys;

  for (var _i = 0; _i < _arr.length; _i++) {
    var key = _arr[_i];

    if (actual[key] !== expected[key]) {
      return false;
    }
  }

  return true;
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610413, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isType;

var _definitions = require("../definitions");

function isType(nodeType, targetType) {
  if (nodeType === targetType) return true;
  if (_definitions.ALIAS_KEYS[targetType]) return false;
  var aliases = _definitions.FLIPPED_ALIAS_KEYS[targetType];

  if (aliases) {
    if (aliases[0] === nodeType) return true;

    for (var _iterator = aliases, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var alias = _ref;
      if (nodeType === alias) return true;
    }
  }

  return false;
}
}, function(modId) { var map = {"../definitions":1651912610414}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610414, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "VISITOR_KEYS", {
  enumerable: true,
  get: function get() {
    return _utils.VISITOR_KEYS;
  }
});
Object.defineProperty(exports, "ALIAS_KEYS", {
  enumerable: true,
  get: function get() {
    return _utils.ALIAS_KEYS;
  }
});
Object.defineProperty(exports, "FLIPPED_ALIAS_KEYS", {
  enumerable: true,
  get: function get() {
    return _utils.FLIPPED_ALIAS_KEYS;
  }
});
Object.defineProperty(exports, "NODE_FIELDS", {
  enumerable: true,
  get: function get() {
    return _utils.NODE_FIELDS;
  }
});
Object.defineProperty(exports, "BUILDER_KEYS", {
  enumerable: true,
  get: function get() {
    return _utils.BUILDER_KEYS;
  }
});
Object.defineProperty(exports, "DEPRECATED_KEYS", {
  enumerable: true,
  get: function get() {
    return _utils.DEPRECATED_KEYS;
  }
});
exports.TYPES = void 0;

function _toFastProperties() {
  var data = _interopRequireDefault(require("to-fast-properties"));

  _toFastProperties = function _toFastProperties() {
    return data;
  };

  return data;
}

require("./core");

require("./es2015");

require("./flow");

require("./jsx");

require("./misc");

require("./experimental");

require("./typescript");

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _toFastProperties().default)(_utils.VISITOR_KEYS);
(0, _toFastProperties().default)(_utils.ALIAS_KEYS);
(0, _toFastProperties().default)(_utils.FLIPPED_ALIAS_KEYS);
(0, _toFastProperties().default)(_utils.NODE_FIELDS);
(0, _toFastProperties().default)(_utils.BUILDER_KEYS);
(0, _toFastProperties().default)(_utils.DEPRECATED_KEYS);
var TYPES = Object.keys(_utils.VISITOR_KEYS).concat(Object.keys(_utils.FLIPPED_ALIAS_KEYS)).concat(Object.keys(_utils.DEPRECATED_KEYS));
exports.TYPES = TYPES;
}, function(modId) { var map = {"./core":1651912610415,"./es2015":1651912610419,"./flow":1651912610420,"./jsx":1651912610421,"./misc":1651912610422,"./experimental":1651912610423,"./typescript":1651912610424,"./utils":1651912610418}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610415, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.patternLikeCommon = exports.functionDeclarationCommon = exports.functionTypeAnnotationCommon = exports.functionCommon = void 0;

var _isValidIdentifier = _interopRequireDefault(require("../validators/isValidIdentifier"));

var _constants = require("../constants");

var _utils = _interopRequireWildcard(require("./utils"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(0, _utils.default)("ArrayExpression", {
  fields: {
    elements: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeOrValueType)("null", "Expression", "SpreadElement"))),
      default: []
    }
  },
  visitor: ["elements"],
  aliases: ["Expression"]
});
(0, _utils.default)("AssignmentExpression", {
  fields: {
    operator: {
      validate: (0, _utils.assertValueType)("string")
    },
    left: {
      validate: (0, _utils.assertNodeType)("LVal")
    },
    right: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  },
  builder: ["operator", "left", "right"],
  visitor: ["left", "right"],
  aliases: ["Expression"]
});
(0, _utils.default)("BinaryExpression", {
  builder: ["operator", "left", "right"],
  fields: {
    operator: {
      validate: _utils.assertOneOf.apply(void 0, _constants.BINARY_OPERATORS)
    },
    left: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    right: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  },
  visitor: ["left", "right"],
  aliases: ["Binary", "Expression"]
});
(0, _utils.default)("Directive", {
  visitor: ["value"],
  fields: {
    value: {
      validate: (0, _utils.assertNodeType)("DirectiveLiteral")
    }
  }
});
(0, _utils.default)("DirectiveLiteral", {
  builder: ["value"],
  fields: {
    value: {
      validate: (0, _utils.assertValueType)("string")
    }
  }
});
(0, _utils.default)("BlockStatement", {
  builder: ["body", "directives"],
  visitor: ["directives", "body"],
  fields: {
    directives: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Directive"))),
      default: []
    },
    body: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Statement")))
    }
  },
  aliases: ["Scopable", "BlockParent", "Block", "Statement"]
});
(0, _utils.default)("BreakStatement", {
  visitor: ["label"],
  fields: {
    label: {
      validate: (0, _utils.assertNodeType)("Identifier"),
      optional: true
    }
  },
  aliases: ["Statement", "Terminatorless", "CompletionStatement"]
});
(0, _utils.default)("CallExpression", {
  visitor: ["callee", "arguments", "typeParameters"],
  builder: ["callee", "arguments"],
  aliases: ["Expression"],
  fields: {
    callee: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    arguments: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Expression", "SpreadElement", "JSXNamespacedName")))
    },
    optional: {
      validate: (0, _utils.assertOneOf)(true, false),
      optional: true
    },
    typeParameters: {
      validate: (0, _utils.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
      optional: true
    }
  }
});
(0, _utils.default)("CatchClause", {
  visitor: ["param", "body"],
  fields: {
    param: {
      validate: (0, _utils.assertNodeType)("Identifier"),
      optional: true
    },
    body: {
      validate: (0, _utils.assertNodeType)("BlockStatement")
    }
  },
  aliases: ["Scopable", "BlockParent"]
});
(0, _utils.default)("ConditionalExpression", {
  visitor: ["test", "consequent", "alternate"],
  fields: {
    test: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    consequent: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    alternate: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  },
  aliases: ["Expression", "Conditional"]
});
(0, _utils.default)("ContinueStatement", {
  visitor: ["label"],
  fields: {
    label: {
      validate: (0, _utils.assertNodeType)("Identifier"),
      optional: true
    }
  },
  aliases: ["Statement", "Terminatorless", "CompletionStatement"]
});
(0, _utils.default)("DebuggerStatement", {
  aliases: ["Statement"]
});
(0, _utils.default)("DoWhileStatement", {
  visitor: ["test", "body"],
  fields: {
    test: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    body: {
      validate: (0, _utils.assertNodeType)("Statement")
    }
  },
  aliases: ["Statement", "BlockParent", "Loop", "While", "Scopable"]
});
(0, _utils.default)("EmptyStatement", {
  aliases: ["Statement"]
});
(0, _utils.default)("ExpressionStatement", {
  visitor: ["expression"],
  fields: {
    expression: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  },
  aliases: ["Statement", "ExpressionWrapper"]
});
(0, _utils.default)("File", {
  builder: ["program", "comments", "tokens"],
  visitor: ["program"],
  fields: {
    program: {
      validate: (0, _utils.assertNodeType)("Program")
    }
  }
});
(0, _utils.default)("ForInStatement", {
  visitor: ["left", "right", "body"],
  aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop", "ForXStatement"],
  fields: {
    left: {
      validate: (0, _utils.assertNodeType)("VariableDeclaration", "LVal")
    },
    right: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    body: {
      validate: (0, _utils.assertNodeType)("Statement")
    }
  }
});
(0, _utils.default)("ForStatement", {
  visitor: ["init", "test", "update", "body"],
  aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop"],
  fields: {
    init: {
      validate: (0, _utils.assertNodeType)("VariableDeclaration", "Expression"),
      optional: true
    },
    test: {
      validate: (0, _utils.assertNodeType)("Expression"),
      optional: true
    },
    update: {
      validate: (0, _utils.assertNodeType)("Expression"),
      optional: true
    },
    body: {
      validate: (0, _utils.assertNodeType)("Statement")
    }
  }
});
var functionCommon = {
  params: {
    validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("LVal")))
  },
  generator: {
    default: false,
    validate: (0, _utils.assertValueType)("boolean")
  },
  async: {
    validate: (0, _utils.assertValueType)("boolean"),
    default: false
  }
};
exports.functionCommon = functionCommon;
var functionTypeAnnotationCommon = {
  returnType: {
    validate: (0, _utils.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
    optional: true
  },
  typeParameters: {
    validate: (0, _utils.assertNodeType)("TypeParameterDeclaration", "TSTypeParameterDeclaration", "Noop"),
    optional: true
  }
};
exports.functionTypeAnnotationCommon = functionTypeAnnotationCommon;

var functionDeclarationCommon = _objectSpread({}, functionCommon, {
  declare: {
    validate: (0, _utils.assertValueType)("boolean"),
    optional: true
  },
  id: {
    validate: (0, _utils.assertNodeType)("Identifier"),
    optional: true
  }
});

exports.functionDeclarationCommon = functionDeclarationCommon;
(0, _utils.default)("FunctionDeclaration", {
  builder: ["id", "params", "body", "generator", "async"],
  visitor: ["id", "params", "body", "returnType", "typeParameters"],
  fields: _objectSpread({}, functionDeclarationCommon, functionTypeAnnotationCommon, {
    body: {
      validate: (0, _utils.assertNodeType)("BlockStatement")
    }
  }),
  aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Statement", "Pureish", "Declaration"]
});
(0, _utils.default)("FunctionExpression", {
  inherits: "FunctionDeclaration",
  aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Expression", "Pureish"],
  fields: _objectSpread({}, functionCommon, functionTypeAnnotationCommon, {
    id: {
      validate: (0, _utils.assertNodeType)("Identifier"),
      optional: true
    },
    body: {
      validate: (0, _utils.assertNodeType)("BlockStatement")
    }
  })
});
var patternLikeCommon = {
  typeAnnotation: {
    validate: (0, _utils.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
    optional: true
  },
  decorators: {
    validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator")))
  }
};
exports.patternLikeCommon = patternLikeCommon;
(0, _utils.default)("Identifier", {
  builder: ["name"],
  visitor: ["typeAnnotation"],
  aliases: ["Expression", "PatternLike", "LVal", "TSEntityName"],
  fields: _objectSpread({}, patternLikeCommon, {
    name: {
      validate: (0, _utils.chain)(function (node, key, val) {
        if (!(0, _isValidIdentifier.default)(val)) {}
      }, (0, _utils.assertValueType)("string"))
    },
    optional: {
      validate: (0, _utils.assertValueType)("boolean"),
      optional: true
    }
  })
});
(0, _utils.default)("IfStatement", {
  visitor: ["test", "consequent", "alternate"],
  aliases: ["Statement", "Conditional"],
  fields: {
    test: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    consequent: {
      validate: (0, _utils.assertNodeType)("Statement")
    },
    alternate: {
      optional: true,
      validate: (0, _utils.assertNodeType)("Statement")
    }
  }
});
(0, _utils.default)("LabeledStatement", {
  visitor: ["label", "body"],
  aliases: ["Statement"],
  fields: {
    label: {
      validate: (0, _utils.assertNodeType)("Identifier")
    },
    body: {
      validate: (0, _utils.assertNodeType)("Statement")
    }
  }
});
(0, _utils.default)("StringLiteral", {
  builder: ["value"],
  fields: {
    value: {
      validate: (0, _utils.assertValueType)("string")
    }
  },
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});
(0, _utils.default)("NumericLiteral", {
  builder: ["value"],
  deprecatedAlias: "NumberLiteral",
  fields: {
    value: {
      validate: (0, _utils.assertValueType)("number")
    }
  },
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});
(0, _utils.default)("NullLiteral", {
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});
(0, _utils.default)("BooleanLiteral", {
  builder: ["value"],
  fields: {
    value: {
      validate: (0, _utils.assertValueType)("boolean")
    }
  },
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});
(0, _utils.default)("RegExpLiteral", {
  builder: ["pattern", "flags"],
  deprecatedAlias: "RegexLiteral",
  aliases: ["Expression", "Literal"],
  fields: {
    pattern: {
      validate: (0, _utils.assertValueType)("string")
    },
    flags: {
      validate: (0, _utils.assertValueType)("string"),
      default: ""
    }
  }
});
(0, _utils.default)("LogicalExpression", {
  builder: ["operator", "left", "right"],
  visitor: ["left", "right"],
  aliases: ["Binary", "Expression"],
  fields: {
    operator: {
      validate: _utils.assertOneOf.apply(void 0, _constants.LOGICAL_OPERATORS)
    },
    left: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    right: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  }
});
(0, _utils.default)("MemberExpression", {
  builder: ["object", "property", "computed", "optional"],
  visitor: ["object", "property"],
  aliases: ["Expression", "LVal"],
  fields: {
    object: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    property: {
      validate: function () {
        var normal = (0, _utils.assertNodeType)("Identifier");
        var computed = (0, _utils.assertNodeType)("Expression");
        return function (node, key, val) {
          var validator = node.computed ? computed : normal;
          validator(node, key, val);
        };
      }()
    },
    computed: {
      default: false
    },
    optional: {
      validate: (0, _utils.assertOneOf)(true, false),
      optional: true
    }
  }
});
(0, _utils.default)("NewExpression", {
  inherits: "CallExpression"
});
(0, _utils.default)("Program", {
  visitor: ["directives", "body"],
  builder: ["body", "directives", "sourceType"],
  fields: {
    sourceFile: {
      validate: (0, _utils.assertValueType)("string")
    },
    sourceType: {
      validate: (0, _utils.assertOneOf)("script", "module"),
      default: "script"
    },
    directives: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Directive"))),
      default: []
    },
    body: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Statement")))
    }
  },
  aliases: ["Scopable", "BlockParent", "Block"]
});
(0, _utils.default)("ObjectExpression", {
  visitor: ["properties"],
  aliases: ["Expression"],
  fields: {
    properties: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("ObjectMethod", "ObjectProperty", "SpreadElement")))
    }
  }
});
(0, _utils.default)("ObjectMethod", {
  builder: ["kind", "key", "params", "body", "computed"],
  fields: _objectSpread({}, functionCommon, functionTypeAnnotationCommon, {
    kind: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("string"), (0, _utils.assertOneOf)("method", "get", "set")),
      default: "method"
    },
    computed: {
      validate: (0, _utils.assertValueType)("boolean"),
      default: false
    },
    key: {
      validate: function () {
        var normal = (0, _utils.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral");
        var computed = (0, _utils.assertNodeType)("Expression");
        return function (node, key, val) {
          var validator = node.computed ? computed : normal;
          validator(node, key, val);
        };
      }()
    },
    decorators: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator")))
    },
    body: {
      validate: (0, _utils.assertNodeType)("BlockStatement")
    }
  }),
  visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
  aliases: ["UserWhitespacable", "Function", "Scopable", "BlockParent", "FunctionParent", "Method", "ObjectMember"]
});
(0, _utils.default)("ObjectProperty", {
  builder: ["key", "value", "computed", "shorthand", "decorators"],
  fields: {
    computed: {
      validate: (0, _utils.assertValueType)("boolean"),
      default: false
    },
    key: {
      validate: function () {
        var normal = (0, _utils.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral");
        var computed = (0, _utils.assertNodeType)("Expression");
        return function (node, key, val) {
          var validator = node.computed ? computed : normal;
          validator(node, key, val);
        };
      }()
    },
    value: {
      validate: (0, _utils.assertNodeType)("Expression", "PatternLike")
    },
    shorthand: {
      validate: (0, _utils.assertValueType)("boolean"),
      default: false
    },
    decorators: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator"))),
      optional: true
    }
  },
  visitor: ["key", "value", "decorators"],
  aliases: ["UserWhitespacable", "Property", "ObjectMember"]
});
(0, _utils.default)("RestElement", {
  visitor: ["argument", "typeAnnotation"],
  builder: ["argument"],
  aliases: ["LVal", "PatternLike"],
  deprecatedAlias: "RestProperty",
  fields: _objectSpread({}, patternLikeCommon, {
    argument: {
      validate: (0, _utils.assertNodeType)("LVal")
    }
  })
});
(0, _utils.default)("ReturnStatement", {
  visitor: ["argument"],
  aliases: ["Statement", "Terminatorless", "CompletionStatement"],
  fields: {
    argument: {
      validate: (0, _utils.assertNodeType)("Expression"),
      optional: true
    }
  }
});
(0, _utils.default)("SequenceExpression", {
  visitor: ["expressions"],
  fields: {
    expressions: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Expression")))
    }
  },
  aliases: ["Expression"]
});
(0, _utils.default)("SwitchCase", {
  visitor: ["test", "consequent"],
  fields: {
    test: {
      validate: (0, _utils.assertNodeType)("Expression"),
      optional: true
    },
    consequent: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Statement")))
    }
  }
});
(0, _utils.default)("SwitchStatement", {
  visitor: ["discriminant", "cases"],
  aliases: ["Statement", "BlockParent", "Scopable"],
  fields: {
    discriminant: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    cases: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("SwitchCase")))
    }
  }
});
(0, _utils.default)("ThisExpression", {
  aliases: ["Expression"]
});
(0, _utils.default)("ThrowStatement", {
  visitor: ["argument"],
  aliases: ["Statement", "Terminatorless", "CompletionStatement"],
  fields: {
    argument: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  }
});
(0, _utils.default)("TryStatement", {
  visitor: ["block", "handler", "finalizer"],
  aliases: ["Statement"],
  fields: {
    block: {
      validate: (0, _utils.assertNodeType)("BlockStatement")
    },
    handler: {
      optional: true,
      validate: (0, _utils.assertNodeType)("CatchClause")
    },
    finalizer: {
      optional: true,
      validate: (0, _utils.assertNodeType)("BlockStatement")
    }
  }
});
(0, _utils.default)("UnaryExpression", {
  builder: ["operator", "argument", "prefix"],
  fields: {
    prefix: {
      default: true
    },
    argument: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    operator: {
      validate: _utils.assertOneOf.apply(void 0, _constants.UNARY_OPERATORS)
    }
  },
  visitor: ["argument"],
  aliases: ["UnaryLike", "Expression"]
});
(0, _utils.default)("UpdateExpression", {
  builder: ["operator", "argument", "prefix"],
  fields: {
    prefix: {
      default: false
    },
    argument: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    operator: {
      validate: _utils.assertOneOf.apply(void 0, _constants.UPDATE_OPERATORS)
    }
  },
  visitor: ["argument"],
  aliases: ["Expression"]
});
(0, _utils.default)("VariableDeclaration", {
  builder: ["kind", "declarations"],
  visitor: ["declarations"],
  aliases: ["Statement", "Declaration"],
  fields: {
    declare: {
      validate: (0, _utils.assertValueType)("boolean"),
      optional: true
    },
    kind: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("string"), (0, _utils.assertOneOf)("var", "let", "const"))
    },
    declarations: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("VariableDeclarator")))
    }
  }
});
(0, _utils.default)("VariableDeclarator", {
  visitor: ["id", "init"],
  fields: {
    id: {
      validate: (0, _utils.assertNodeType)("LVal")
    },
    definite: {
      optional: true,
      validate: (0, _utils.assertValueType)("boolean")
    },
    init: {
      optional: true,
      validate: (0, _utils.assertNodeType)("Expression")
    }
  }
});
(0, _utils.default)("WhileStatement", {
  visitor: ["test", "body"],
  aliases: ["Statement", "BlockParent", "Loop", "While", "Scopable"],
  fields: {
    test: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    body: {
      validate: (0, _utils.assertNodeType)("BlockStatement", "Statement")
    }
  }
});
(0, _utils.default)("WithStatement", {
  visitor: ["object", "body"],
  aliases: ["Statement"],
  fields: {
    object: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    body: {
      validate: (0, _utils.assertNodeType)("BlockStatement", "Statement")
    }
  }
});
}, function(modId) { var map = {"../validators/isValidIdentifier":1651912610416,"../constants":1651912610417,"./utils":1651912610418}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610416, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isValidIdentifier;

function _esutils() {
  var data = _interopRequireDefault(require("esutils"));

  _esutils = function _esutils() {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isValidIdentifier(name) {
  if (typeof name !== "string" || _esutils().default.keyword.isReservedWordES6(name, true)) {
    return false;
  } else if (name === "await") {
    return false;
  } else {
    return _esutils().default.keyword.isIdentifierNameES6(name);
  }
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610417, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NOT_LOCAL_BINDING = exports.BLOCK_SCOPED_SYMBOL = exports.INHERIT_KEYS = exports.UNARY_OPERATORS = exports.STRING_UNARY_OPERATORS = exports.NUMBER_UNARY_OPERATORS = exports.BOOLEAN_UNARY_OPERATORS = exports.BINARY_OPERATORS = exports.NUMBER_BINARY_OPERATORS = exports.BOOLEAN_BINARY_OPERATORS = exports.COMPARISON_BINARY_OPERATORS = exports.EQUALITY_BINARY_OPERATORS = exports.BOOLEAN_NUMBER_BINARY_OPERATORS = exports.UPDATE_OPERATORS = exports.LOGICAL_OPERATORS = exports.COMMENT_KEYS = exports.FOR_INIT_KEYS = exports.FLATTENABLE_KEYS = exports.STATEMENT_OR_BLOCK_KEYS = void 0;
var STATEMENT_OR_BLOCK_KEYS = ["consequent", "body", "alternate"];
exports.STATEMENT_OR_BLOCK_KEYS = STATEMENT_OR_BLOCK_KEYS;
var FLATTENABLE_KEYS = ["body", "expressions"];
exports.FLATTENABLE_KEYS = FLATTENABLE_KEYS;
var FOR_INIT_KEYS = ["left", "init"];
exports.FOR_INIT_KEYS = FOR_INIT_KEYS;
var COMMENT_KEYS = ["leadingComments", "trailingComments", "innerComments"];
exports.COMMENT_KEYS = COMMENT_KEYS;
var LOGICAL_OPERATORS = ["||", "&&", "??"];
exports.LOGICAL_OPERATORS = LOGICAL_OPERATORS;
var UPDATE_OPERATORS = ["++", "--"];
exports.UPDATE_OPERATORS = UPDATE_OPERATORS;
var BOOLEAN_NUMBER_BINARY_OPERATORS = [">", "<", ">=", "<="];
exports.BOOLEAN_NUMBER_BINARY_OPERATORS = BOOLEAN_NUMBER_BINARY_OPERATORS;
var EQUALITY_BINARY_OPERATORS = ["==", "===", "!=", "!=="];
exports.EQUALITY_BINARY_OPERATORS = EQUALITY_BINARY_OPERATORS;
var COMPARISON_BINARY_OPERATORS = EQUALITY_BINARY_OPERATORS.concat(["in", "instanceof"]);
exports.COMPARISON_BINARY_OPERATORS = COMPARISON_BINARY_OPERATORS;
var BOOLEAN_BINARY_OPERATORS = COMPARISON_BINARY_OPERATORS.concat(BOOLEAN_NUMBER_BINARY_OPERATORS);
exports.BOOLEAN_BINARY_OPERATORS = BOOLEAN_BINARY_OPERATORS;
var NUMBER_BINARY_OPERATORS = ["-", "/", "%", "*", "**", "&", "|", ">>", ">>>", "<<", "^"];
exports.NUMBER_BINARY_OPERATORS = NUMBER_BINARY_OPERATORS;
var BINARY_OPERATORS = ["+"].concat(NUMBER_BINARY_OPERATORS, BOOLEAN_BINARY_OPERATORS);
exports.BINARY_OPERATORS = BINARY_OPERATORS;
var BOOLEAN_UNARY_OPERATORS = ["delete", "!"];
exports.BOOLEAN_UNARY_OPERATORS = BOOLEAN_UNARY_OPERATORS;
var NUMBER_UNARY_OPERATORS = ["+", "-", "~"];
exports.NUMBER_UNARY_OPERATORS = NUMBER_UNARY_OPERATORS;
var STRING_UNARY_OPERATORS = ["typeof"];
exports.STRING_UNARY_OPERATORS = STRING_UNARY_OPERATORS;
var UNARY_OPERATORS = ["void", "throw"].concat(BOOLEAN_UNARY_OPERATORS, NUMBER_UNARY_OPERATORS, STRING_UNARY_OPERATORS);
exports.UNARY_OPERATORS = UNARY_OPERATORS;
var INHERIT_KEYS = {
  optional: ["typeAnnotation", "typeParameters", "returnType"],
  force: ["start", "loc", "end"]
};
exports.INHERIT_KEYS = INHERIT_KEYS;
var BLOCK_SCOPED_SYMBOL = Symbol.for("var used to be block scoped");
exports.BLOCK_SCOPED_SYMBOL = BLOCK_SCOPED_SYMBOL;
var NOT_LOCAL_BINDING = Symbol.for("should not be considered a local binding");
exports.NOT_LOCAL_BINDING = NOT_LOCAL_BINDING;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610418, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = validate;
exports.typeIs = typeIs;
exports.validateType = validateType;
exports.validateOptional = validateOptional;
exports.validateOptionalType = validateOptionalType;
exports.arrayOf = arrayOf;
exports.arrayOfType = arrayOfType;
exports.validateArrayOfType = validateArrayOfType;
exports.assertEach = assertEach;
exports.assertOneOf = assertOneOf;
exports.assertNodeType = assertNodeType;
exports.assertNodeOrValueType = assertNodeOrValueType;
exports.assertValueType = assertValueType;
exports.chain = chain;
exports.default = defineType;
exports.DEPRECATED_KEYS = exports.BUILDER_KEYS = exports.NODE_FIELDS = exports.FLIPPED_ALIAS_KEYS = exports.ALIAS_KEYS = exports.VISITOR_KEYS = void 0;

var _is = _interopRequireDefault(require("../validators/is"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VISITOR_KEYS = {};
exports.VISITOR_KEYS = VISITOR_KEYS;
var ALIAS_KEYS = {};
exports.ALIAS_KEYS = ALIAS_KEYS;
var FLIPPED_ALIAS_KEYS = {};
exports.FLIPPED_ALIAS_KEYS = FLIPPED_ALIAS_KEYS;
var NODE_FIELDS = {};
exports.NODE_FIELDS = NODE_FIELDS;
var BUILDER_KEYS = {};
exports.BUILDER_KEYS = BUILDER_KEYS;
var DEPRECATED_KEYS = {};
exports.DEPRECATED_KEYS = DEPRECATED_KEYS;

function getType(val) {
  if (Array.isArray(val)) {
    return "array";
  } else if (val === null) {
    return "null";
  } else if (val === undefined) {
    return "undefined";
  } else {
    return typeof val;
  }
}

function validate(validate) {
  return {
    validate: validate
  };
}

function typeIs(typeName) {
  return typeof typeName === "string" ? assertNodeType(typeName) : assertNodeType.apply(void 0, typeName);
}

function validateType(typeName) {
  return validate(typeIs(typeName));
}

function validateOptional(validate) {
  return {
    validate: validate,
    optional: true
  };
}

function validateOptionalType(typeName) {
  return {
    validate: typeIs(typeName),
    optional: true
  };
}

function arrayOf(elementType) {
  return chain(assertValueType("array"), assertEach(elementType));
}

function arrayOfType(typeName) {
  return arrayOf(typeIs(typeName));
}

function validateArrayOfType(typeName) {
  return validate(arrayOfType(typeName));
}

function assertEach(callback) {
  function validator(node, key, val) {
    if (!Array.isArray(val)) return;

    for (var i = 0; i < val.length; i++) {
      callback(node, key + "[" + i + "]", val[i]);
    }
  }

  validator.each = callback;
  return validator;
}

function assertOneOf() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  function validate(node, key, val) {
    if (values.indexOf(val) < 0) {
      throw new TypeError("Property " + key + " expected value to be one of " + JSON.stringify(values) + " but got " + JSON.stringify(val));
    }
  }

  validate.oneOf = values;
  return validate;
}

function assertNodeType() {
  for (var _len2 = arguments.length, types = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    types[_key2] = arguments[_key2];
  }

  function validate(node, key, val) {
    var valid = false;

    for (var _i = 0; _i < types.length; _i++) {
      var type = types[_i];

      if ((0, _is.default)(type, val)) {
        valid = true;
        break;
      }
    }

    if (!valid) {
      throw new TypeError("Property " + key + " of " + node.type + " expected node to be of a type " + JSON.stringify(types) + " " + ("but instead got " + JSON.stringify(val && val.type)));
    }
  }

  validate.oneOfNodeTypes = types;
  return validate;
}

function assertNodeOrValueType() {
  for (var _len3 = arguments.length, types = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    types[_key3] = arguments[_key3];
  }

  function validate(node, key, val) {
    var valid = false;

    for (var _i2 = 0; _i2 < types.length; _i2++) {
      var type = types[_i2];

      if (getType(val) === type || (0, _is.default)(type, val)) {
        valid = true;
        break;
      }
    }

    if (!valid) {
      throw new TypeError("Property " + key + " of " + node.type + " expected node to be of a type " + JSON.stringify(types) + " " + ("but instead got " + JSON.stringify(val && val.type)));
    }
  }

  validate.oneOfNodeOrValueTypes = types;
  return validate;
}

function assertValueType(type) {
  function validate(node, key, val) {
    var valid = getType(val) === type;

    if (!valid) {
      throw new TypeError("Property " + key + " expected type of " + type + " but got " + getType(val));
    }
  }

  validate.type = type;
  return validate;
}

function chain() {
  for (var _len4 = arguments.length, fns = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    fns[_key4] = arguments[_key4];
  }

  function validate() {
    for (var _i3 = 0; _i3 < fns.length; _i3++) {
      var fn = fns[_i3];
      fn.apply(void 0, arguments);
    }
  }

  validate.chainOf = fns;
  return validate;
}

function defineType(type, opts) {
  if (opts === void 0) {
    opts = {};
  }

  var inherits = opts.inherits && store[opts.inherits] || {};
  var fields = opts.fields || inherits.fields || {};
  var visitor = opts.visitor || inherits.visitor || [];
  var aliases = opts.aliases || inherits.aliases || [];
  var builder = opts.builder || inherits.builder || opts.visitor || [];

  if (opts.deprecatedAlias) {
    DEPRECATED_KEYS[opts.deprecatedAlias] = type;
  }

  var _arr = visitor.concat(builder);

  for (var _i4 = 0; _i4 < _arr.length; _i4++) {
    var _key5 = _arr[_i4];
    fields[_key5] = fields[_key5] || {};
  }

  for (var key in fields) {
    var field = fields[key];

    if (builder.indexOf(key) === -1) {
      field.optional = true;
    }

    if (field.default === undefined) {
      field.default = null;
    } else if (!field.validate) {
      field.validate = assertValueType(getType(field.default));
    }
  }

  VISITOR_KEYS[type] = opts.visitor = visitor;
  BUILDER_KEYS[type] = opts.builder = builder;
  NODE_FIELDS[type] = opts.fields = fields;
  ALIAS_KEYS[type] = opts.aliases = aliases;
  aliases.forEach(function (alias) {
    FLIPPED_ALIAS_KEYS[alias] = FLIPPED_ALIAS_KEYS[alias] || [];
    FLIPPED_ALIAS_KEYS[alias].push(type);
  });
  store[type] = opts;
}

var store = {};
}, function(modId) { var map = {"../validators/is":1651912610411}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610419, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.classMethodOrDeclareMethodCommon = exports.classMethodOrPropertyCommon = void 0;

var _utils = _interopRequireWildcard(require("./utils"));

var _core = require("./core");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(0, _utils.default)("AssignmentPattern", {
  visitor: ["left", "right"],
  builder: ["left", "right"],
  aliases: ["Pattern", "PatternLike", "LVal"],
  fields: _objectSpread({}, _core.patternLikeCommon, {
    left: {
      validate: (0, _utils.assertNodeType)("Identifier", "ObjectPattern", "ArrayPattern")
    },
    right: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    decorators: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator")))
    }
  })
});
(0, _utils.default)("ArrayPattern", {
  visitor: ["elements", "typeAnnotation"],
  builder: ["elements"],
  aliases: ["Pattern", "PatternLike", "LVal"],
  fields: _objectSpread({}, _core.patternLikeCommon, {
    elements: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("PatternLike")))
    },
    decorators: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator")))
    }
  })
});
(0, _utils.default)("ArrowFunctionExpression", {
  builder: ["params", "body", "async"],
  visitor: ["params", "body", "returnType", "typeParameters"],
  aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Expression", "Pureish"],
  fields: _objectSpread({}, _core.functionCommon, _core.functionTypeAnnotationCommon, {
    expression: {
      validate: (0, _utils.assertValueType)("boolean")
    },
    body: {
      validate: (0, _utils.assertNodeType)("BlockStatement", "Expression")
    }
  })
});
(0, _utils.default)("ClassBody", {
  visitor: ["body"],
  fields: {
    body: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("ClassMethod", "ClassProperty", "TSDeclareMethod", "TSIndexSignature")))
    }
  }
});
var classCommon = {
  typeParameters: {
    validate: (0, _utils.assertNodeType)("TypeParameterDeclaration", "TSTypeParameterDeclaration", "Noop"),
    optional: true
  },
  body: {
    validate: (0, _utils.assertNodeType)("ClassBody")
  },
  superClass: {
    optional: true,
    validate: (0, _utils.assertNodeType)("Expression")
  },
  superTypeParameters: {
    validate: (0, _utils.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
    optional: true
  },
  implements: {
    validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("TSExpressionWithTypeArguments", "ClassImplements"))),
    optional: true
  }
};
(0, _utils.default)("ClassDeclaration", {
  builder: ["id", "superClass", "body", "decorators"],
  visitor: ["id", "body", "superClass", "mixins", "typeParameters", "superTypeParameters", "implements", "decorators"],
  aliases: ["Scopable", "Class", "Statement", "Declaration", "Pureish"],
  fields: _objectSpread({}, classCommon, {
    declare: {
      validate: (0, _utils.assertValueType)("boolean"),
      optional: true
    },
    abstract: {
      validate: (0, _utils.assertValueType)("boolean"),
      optional: true
    },
    id: {
      validate: (0, _utils.assertNodeType)("Identifier"),
      optional: true
    },
    decorators: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator"))),
      optional: true
    }
  })
});
(0, _utils.default)("ClassExpression", {
  inherits: "ClassDeclaration",
  aliases: ["Scopable", "Class", "Expression", "Pureish"],
  fields: _objectSpread({}, classCommon, {
    id: {
      optional: true,
      validate: (0, _utils.assertNodeType)("Identifier")
    },
    body: {
      validate: (0, _utils.assertNodeType)("ClassBody")
    },
    superClass: {
      optional: true,
      validate: (0, _utils.assertNodeType)("Expression")
    },
    decorators: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator"))),
      optional: true
    }
  })
});
(0, _utils.default)("ExportAllDeclaration", {
  visitor: ["source"],
  aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"],
  fields: {
    source: {
      validate: (0, _utils.assertNodeType)("StringLiteral")
    }
  }
});
(0, _utils.default)("ExportDefaultDeclaration", {
  visitor: ["declaration"],
  aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"],
  fields: {
    declaration: {
      validate: (0, _utils.assertNodeType)("FunctionDeclaration", "TSDeclareFunction", "ClassDeclaration", "Expression")
    }
  }
});
(0, _utils.default)("ExportNamedDeclaration", {
  visitor: ["declaration", "specifiers", "source"],
  aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"],
  fields: {
    declaration: {
      validate: (0, _utils.assertNodeType)("Declaration"),
      optional: true
    },
    specifiers: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("ExportSpecifier", "ExportDefaultSpecifier", "ExportNamespaceSpecifier")))
    },
    source: {
      validate: (0, _utils.assertNodeType)("StringLiteral"),
      optional: true
    }
  }
});
(0, _utils.default)("ExportSpecifier", {
  visitor: ["local", "exported"],
  aliases: ["ModuleSpecifier"],
  fields: {
    local: {
      validate: (0, _utils.assertNodeType)("Identifier")
    },
    exported: {
      validate: (0, _utils.assertNodeType)("Identifier")
    }
  }
});
(0, _utils.default)("ForOfStatement", {
  visitor: ["left", "right", "body"],
  aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop", "ForXStatement"],
  fields: {
    left: {
      validate: (0, _utils.assertNodeType)("VariableDeclaration", "LVal")
    },
    right: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    body: {
      validate: (0, _utils.assertNodeType)("Statement")
    },
    await: {
      default: false,
      validate: (0, _utils.assertValueType)("boolean")
    }
  }
});
(0, _utils.default)("ImportDeclaration", {
  visitor: ["specifiers", "source"],
  aliases: ["Statement", "Declaration", "ModuleDeclaration"],
  fields: {
    specifiers: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("ImportSpecifier", "ImportDefaultSpecifier", "ImportNamespaceSpecifier")))
    },
    source: {
      validate: (0, _utils.assertNodeType)("StringLiteral")
    }
  }
});
(0, _utils.default)("ImportDefaultSpecifier", {
  visitor: ["local"],
  aliases: ["ModuleSpecifier"],
  fields: {
    local: {
      validate: (0, _utils.assertNodeType)("Identifier")
    }
  }
});
(0, _utils.default)("ImportNamespaceSpecifier", {
  visitor: ["local"],
  aliases: ["ModuleSpecifier"],
  fields: {
    local: {
      validate: (0, _utils.assertNodeType)("Identifier")
    }
  }
});
(0, _utils.default)("ImportSpecifier", {
  visitor: ["local", "imported"],
  aliases: ["ModuleSpecifier"],
  fields: {
    local: {
      validate: (0, _utils.assertNodeType)("Identifier")
    },
    imported: {
      validate: (0, _utils.assertNodeType)("Identifier")
    },
    importKind: {
      validate: (0, _utils.assertOneOf)(null, "type", "typeof")
    }
  }
});
(0, _utils.default)("MetaProperty", {
  visitor: ["meta", "property"],
  aliases: ["Expression"],
  fields: {
    meta: {
      validate: (0, _utils.assertNodeType)("Identifier")
    },
    property: {
      validate: (0, _utils.assertNodeType)("Identifier")
    }
  }
});
var classMethodOrPropertyCommon = {
  abstract: {
    validate: (0, _utils.assertValueType)("boolean"),
    optional: true
  },
  accessibility: {
    validate: (0, _utils.chain)((0, _utils.assertValueType)("string"), (0, _utils.assertOneOf)("public", "private", "protected")),
    optional: true
  },
  static: {
    validate: (0, _utils.assertValueType)("boolean"),
    optional: true
  },
  computed: {
    default: false,
    validate: (0, _utils.assertValueType)("boolean")
  },
  optional: {
    validate: (0, _utils.assertValueType)("boolean"),
    optional: true
  },
  key: {
    validate: (0, _utils.chain)(function () {
      var normal = (0, _utils.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral");
      var computed = (0, _utils.assertNodeType)("Expression");
      return function (node, key, val) {
        var validator = node.computed ? computed : normal;
        validator(node, key, val);
      };
    }(), (0, _utils.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral", "Expression"))
  }
};
exports.classMethodOrPropertyCommon = classMethodOrPropertyCommon;

var classMethodOrDeclareMethodCommon = _objectSpread({}, _core.functionCommon, classMethodOrPropertyCommon, {
  kind: {
    validate: (0, _utils.chain)((0, _utils.assertValueType)("string"), (0, _utils.assertOneOf)("get", "set", "method", "constructor")),
    default: "method"
  },
  access: {
    validate: (0, _utils.chain)((0, _utils.assertValueType)("string"), (0, _utils.assertOneOf)("public", "private", "protected")),
    optional: true
  },
  decorators: {
    validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator"))),
    optional: true
  }
});

exports.classMethodOrDeclareMethodCommon = classMethodOrDeclareMethodCommon;
(0, _utils.default)("ClassMethod", {
  aliases: ["Function", "Scopable", "BlockParent", "FunctionParent", "Method"],
  builder: ["kind", "key", "params", "body", "computed", "static"],
  visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
  fields: _objectSpread({}, classMethodOrDeclareMethodCommon, _core.functionTypeAnnotationCommon, {
    body: {
      validate: (0, _utils.assertNodeType)("BlockStatement")
    }
  })
});
(0, _utils.default)("ObjectPattern", {
  visitor: ["properties", "typeAnnotation"],
  builder: ["properties"],
  aliases: ["Pattern", "PatternLike", "LVal"],
  fields: _objectSpread({}, _core.patternLikeCommon, {
    properties: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("RestElement", "ObjectProperty")))
    }
  })
});
(0, _utils.default)("SpreadElement", {
  visitor: ["argument"],
  aliases: ["UnaryLike"],
  deprecatedAlias: "SpreadProperty",
  fields: {
    argument: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  }
});
(0, _utils.default)("Super", {
  aliases: ["Expression"]
});
(0, _utils.default)("TaggedTemplateExpression", {
  visitor: ["tag", "quasi"],
  aliases: ["Expression"],
  fields: {
    tag: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    quasi: {
      validate: (0, _utils.assertNodeType)("TemplateLiteral")
    }
  }
});
(0, _utils.default)("TemplateElement", {
  builder: ["value", "tail"],
  fields: {
    value: {},
    tail: {
      validate: (0, _utils.assertValueType)("boolean"),
      default: false
    }
  }
});
(0, _utils.default)("TemplateLiteral", {
  visitor: ["quasis", "expressions"],
  aliases: ["Expression", "Literal"],
  fields: {
    quasis: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("TemplateElement")))
    },
    expressions: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Expression")))
    }
  }
});
(0, _utils.default)("YieldExpression", {
  builder: ["argument", "delegate"],
  visitor: ["argument"],
  aliases: ["Expression", "Terminatorless"],
  fields: {
    delegate: {
      validate: (0, _utils.assertValueType)("boolean"),
      default: false
    },
    argument: {
      optional: true,
      validate: (0, _utils.assertNodeType)("Expression")
    }
  }
});
}, function(modId) { var map = {"./utils":1651912610418,"./core":1651912610415}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610420, function(require, module, exports) {


var _utils = _interopRequireWildcard(require("./utils"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

(0, _utils.default)("AnyTypeAnnotation", {
  aliases: ["Flow", "FlowType", "FlowBaseAnnotation"]
});
(0, _utils.default)("ArrayTypeAnnotation", {
  visitor: ["elementType"],
  aliases: ["Flow", "FlowType"],
  fields: {
    elementType: (0, _utils.validateType)("FlowType")
  }
});
(0, _utils.default)("BooleanTypeAnnotation", {
  aliases: ["Flow", "FlowType", "FlowBaseAnnotation"]
});
(0, _utils.default)("BooleanLiteralTypeAnnotation", {
  aliases: ["Flow", "FlowType"],
  fields: {
    value: (0, _utils.validate)((0, _utils.assertValueType)("boolean"))
  }
});
(0, _utils.default)("NullLiteralTypeAnnotation", {
  aliases: ["Flow", "FlowType", "FlowBaseAnnotation"]
});
(0, _utils.default)("ClassImplements", {
  visitor: ["id", "typeParameters"],
  aliases: ["Flow"],
  fields: {
    id: (0, _utils.validateType)("Identifier"),
    typeParameters: (0, _utils.validateOptionalType)("TypeParameterInstantiation")
  }
});
(0, _utils.default)("DeclareClass", {
  visitor: ["id", "typeParameters", "extends", "body"],
  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, _utils.validateType)("Identifier"),
    typeParameters: (0, _utils.validateOptionalType)("TypeParameterInstantiation"),
    extends: (0, _utils.validateOptional)((0, _utils.arrayOfType)("InterfaceExtends")),
    mixins: (0, _utils.validateOptional)((0, _utils.arrayOfType)("InterfaceExtends")),
    body: (0, _utils.validateType)("ObjectTypeAnnotation")
  }
});
(0, _utils.default)("DeclareFunction", {
  visitor: ["id"],
  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, _utils.validateType)("Identifier"),
    predicate: (0, _utils.validateOptionalType)("DeclaredPredicate")
  }
});
(0, _utils.default)("DeclareInterface", {
  visitor: ["id", "typeParameters", "extends", "body"],
  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, _utils.validateType)("Identifier"),
    typeParameters: (0, _utils.validateOptionalType)("TypeParameterDeclaration"),
    extends: (0, _utils.validateOptionalType)("InterfaceExtends"),
    mixins: (0, _utils.validateOptional)((0, _utils.arrayOfType)("Flow")),
    body: (0, _utils.validateType)("ObjectTypeAnnotation")
  }
});
(0, _utils.default)("DeclareModule", {
  builder: ["id", "body", "kind"],
  visitor: ["id", "body"],
  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, _utils.validateType)(["Identifier", "StringLiteral"]),
    body: (0, _utils.validateType)("BlockStatement"),
    kind: (0, _utils.validateOptional)((0, _utils.assertOneOf)("CommonJS", "ES"))
  }
});
(0, _utils.default)("DeclareModuleExports", {
  visitor: ["typeAnnotation"],
  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
  fields: {
    typeAnnotation: (0, _utils.validateType)("TypeAnnotation")
  }
});
(0, _utils.default)("DeclareTypeAlias", {
  visitor: ["id", "typeParameters", "right"],
  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, _utils.validateType)("Identifier"),
    typeParameters: (0, _utils.validateOptionalType)("TypeParameterDeclaration"),
    right: (0, _utils.validateType)("FlowType")
  }
});
(0, _utils.default)("DeclareOpaqueType", {
  visitor: ["id", "typeParameters", "supertype"],
  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, _utils.validateType)("Identifier"),
    typeParameters: (0, _utils.validateOptionalType)("TypeParameterDeclaration"),
    supertype: (0, _utils.validateOptionalType)("FlowType")
  }
});
(0, _utils.default)("DeclareVariable", {
  visitor: ["id"],
  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, _utils.validateType)("Identifier")
  }
});
(0, _utils.default)("DeclareExportDeclaration", {
  visitor: ["declaration", "specifiers", "source"],
  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
  fields: {
    declaration: (0, _utils.validateOptionalType)("Flow"),
    specifiers: (0, _utils.validateOptional)((0, _utils.arrayOfType)(["ExportSpecifier", "ExportNamespaceSpecifier"])),
    source: (0, _utils.validateOptionalType)("StringLiteral"),
    default: (0, _utils.validateOptional)((0, _utils.assertValueType)("boolean"))
  }
});
(0, _utils.default)("DeclareExportAllDeclaration", {
  visitor: ["source"],
  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
  fields: {
    source: (0, _utils.validateType)("StringLiteral"),
    exportKind: (0, _utils.validateOptional)((0, _utils.assertOneOf)(["type", "value"]))
  }
});
(0, _utils.default)("DeclaredPredicate", {
  visitor: ["value"],
  aliases: ["Flow", "FlowPredicate"],
  fields: {
    value: (0, _utils.validateType)("Flow")
  }
});
(0, _utils.default)("ExistsTypeAnnotation", {
  aliases: ["Flow", "FlowType"]
});
(0, _utils.default)("FunctionTypeAnnotation", {
  visitor: ["typeParameters", "params", "rest", "returnType"],
  aliases: ["Flow", "FlowType"],
  fields: {
    typeParameters: (0, _utils.validateOptionalType)("TypeParameterDeclaration"),
    params: (0, _utils.validate)((0, _utils.arrayOfType)("FunctionTypeParam")),
    rest: (0, _utils.validateOptionalType)("FunctionTypeParam"),
    returnType: (0, _utils.validateType)("FlowType")
  }
});
(0, _utils.default)("FunctionTypeParam", {
  visitor: ["name", "typeAnnotation"],
  aliases: ["Flow"],
  fields: {
    name: (0, _utils.validateOptionalType)("Identifier"),
    typeAnnotation: (0, _utils.validateType)("FlowType"),
    optional: (0, _utils.validateOptional)((0, _utils.assertValueType)("boolean"))
  }
});
(0, _utils.default)("GenericTypeAnnotation", {
  visitor: ["id", "typeParameters"],
  aliases: ["Flow", "FlowType"],
  fields: {
    id: (0, _utils.validateType)("Identifier"),
    typeParameters: (0, _utils.validateOptionalType)("TypeParameterInstantiation")
  }
});
(0, _utils.default)("InferredPredicate", {
  aliases: ["Flow", "FlowPredicate"]
});
(0, _utils.default)("InterfaceExtends", {
  visitor: ["id", "typeParameters"],
  aliases: ["Flow"],
  fields: {
    id: (0, _utils.validateType)("Identifier"),
    typeParameters: (0, _utils.validateOptionalType)("TypeParameterInstantiation")
  }
});
(0, _utils.default)("InterfaceDeclaration", {
  visitor: ["id", "typeParameters", "extends", "body"],
  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, _utils.validateType)("Identifier"),
    typeParameters: (0, _utils.validateOptionalType)("TypeParameterDeclaration"),
    extends: (0, _utils.validate)((0, _utils.arrayOfType)("InterfaceExtends")),
    mixins: (0, _utils.validate)((0, _utils.arrayOfType)("InterfaceExtends")),
    body: (0, _utils.validateType)("ObjectTypeAnnotation")
  }
});
(0, _utils.default)("IntersectionTypeAnnotation", {
  visitor: ["types"],
  aliases: ["Flow", "FlowType"],
  fields: {
    types: (0, _utils.validate)((0, _utils.arrayOfType)("FlowType"))
  }
});
(0, _utils.default)("MixedTypeAnnotation", {
  aliases: ["Flow", "FlowType", "FlowBaseAnnotation"]
});
(0, _utils.default)("EmptyTypeAnnotation", {
  aliases: ["Flow", "FlowType", "FlowBaseAnnotation"]
});
(0, _utils.default)("NullableTypeAnnotation", {
  visitor: ["typeAnnotation"],
  aliases: ["Flow", "FlowType"],
  fields: {
    typeAnnotation: (0, _utils.validateType)("FlowType")
  }
});
(0, _utils.default)("NumberLiteralTypeAnnotation", {
  aliases: ["Flow", "FlowType"],
  fields: {
    value: (0, _utils.validate)((0, _utils.assertValueType)("number"))
  }
});
(0, _utils.default)("NumberTypeAnnotation", {
  aliases: ["Flow", "FlowType", "FlowBaseAnnotation"]
});
(0, _utils.default)("ObjectTypeAnnotation", {
  visitor: ["properties", "indexers", "callProperties"],
  aliases: ["Flow", "FlowType"],
  builder: ["properties", "indexers", "callProperties", "exact"],
  fields: {
    properties: (0, _utils.validate)((0, _utils.arrayOfType)(["ObjectTypeProperty", "ObjectTypeSpreadProperty"])),
    indexers: (0, _utils.validateOptional)((0, _utils.arrayOfType)("ObjectTypeIndexer")),
    callProperties: (0, _utils.validateOptional)((0, _utils.arrayOfType)("ObjectTypeCallProperty")),
    exact: {
      validate: (0, _utils.assertValueType)("boolean"),
      default: false
    }
  }
});
(0, _utils.default)("ObjectTypeCallProperty", {
  visitor: ["value"],
  aliases: ["Flow", "UserWhitespacable"],
  fields: {
    value: (0, _utils.validateType)("FlowType"),
    static: (0, _utils.validate)((0, _utils.assertValueType)("boolean"))
  }
});
(0, _utils.default)("ObjectTypeIndexer", {
  visitor: ["id", "key", "value", "variance"],
  aliases: ["Flow", "UserWhitespacable"],
  fields: {
    id: (0, _utils.validateOptionalType)("Identifier"),
    key: (0, _utils.validateType)("FlowType"),
    value: (0, _utils.validateType)("FlowType"),
    static: (0, _utils.validate)((0, _utils.assertValueType)("boolean")),
    variance: (0, _utils.validateOptionalType)("Variance")
  }
});
(0, _utils.default)("ObjectTypeProperty", {
  visitor: ["key", "value", "variance"],
  aliases: ["Flow", "UserWhitespacable"],
  fields: {
    key: (0, _utils.validateType)(["Identifier", "StringLiteral"]),
    value: (0, _utils.validateType)("FlowType"),
    kind: (0, _utils.validate)((0, _utils.assertOneOf)("init", "get", "set")),
    static: (0, _utils.validate)((0, _utils.assertValueType)("boolean")),
    optional: (0, _utils.validate)((0, _utils.assertValueType)("boolean")),
    variance: (0, _utils.validateOptionalType)("Variance")
  }
});
(0, _utils.default)("ObjectTypeSpreadProperty", {
  visitor: ["argument"],
  aliases: ["Flow", "UserWhitespacable"],
  fields: {
    argument: (0, _utils.validateType)("FlowType")
  }
});
(0, _utils.default)("OpaqueType", {
  visitor: ["id", "typeParameters", "supertype", "impltype"],
  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, _utils.validateType)("Identifier"),
    typeParameters: (0, _utils.validateOptionalType)("TypeParameterDeclaration"),
    supertype: (0, _utils.validateOptionalType)("FlowType"),
    impltype: (0, _utils.validateType)("FlowType")
  }
});
(0, _utils.default)("QualifiedTypeIdentifier", {
  visitor: ["id", "qualification"],
  aliases: ["Flow"],
  fields: {
    id: (0, _utils.validateType)("Identifier"),
    qualification: (0, _utils.validateType)(["Identifier", "QualifiedTypeIdentifier"])
  }
});
(0, _utils.default)("StringLiteralTypeAnnotation", {
  aliases: ["Flow", "FlowType"],
  fields: {
    value: (0, _utils.validate)((0, _utils.assertValueType)("string"))
  }
});
(0, _utils.default)("StringTypeAnnotation", {
  aliases: ["Flow", "FlowType", "FlowBaseAnnotation"]
});
(0, _utils.default)("ThisTypeAnnotation", {
  aliases: ["Flow", "FlowType", "FlowBaseAnnotation"]
});
(0, _utils.default)("TupleTypeAnnotation", {
  visitor: ["types"],
  aliases: ["Flow", "FlowType"],
  fields: {
    types: (0, _utils.validate)((0, _utils.arrayOfType)("FlowType"))
  }
});
(0, _utils.default)("TypeofTypeAnnotation", {
  visitor: ["argument"],
  aliases: ["Flow", "FlowType"],
  fields: {
    argument: (0, _utils.validateType)("FlowType")
  }
});
(0, _utils.default)("TypeAlias", {
  visitor: ["id", "typeParameters", "right"],
  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, _utils.validateType)("Identifier"),
    typeParameters: (0, _utils.validateOptionalType)("TypeParameterDeclaration"),
    right: (0, _utils.validateType)("FlowType")
  }
});
(0, _utils.default)("TypeAnnotation", {
  aliases: ["Flow"],
  visitor: ["typeAnnotation"],
  fields: {
    typeAnnotation: (0, _utils.validateType)("FlowType")
  }
});
(0, _utils.default)("TypeCastExpression", {
  visitor: ["expression", "typeAnnotation"],
  aliases: ["Flow", "ExpressionWrapper", "Expression"],
  fields: {
    expression: (0, _utils.validateType)("Expression"),
    typeAnnotation: (0, _utils.validateType)("TypeAnnotation")
  }
});
(0, _utils.default)("TypeParameter", {
  aliases: ["Flow"],
  visitor: ["bound", "default", "variance"],
  fields: {
    name: (0, _utils.validate)((0, _utils.assertValueType)("string")),
    bound: (0, _utils.validateOptionalType)("TypeAnnotation"),
    default: (0, _utils.validateOptionalType)("FlowType"),
    variance: (0, _utils.validateOptionalType)("Variance")
  }
});
(0, _utils.default)("TypeParameterDeclaration", {
  aliases: ["Flow"],
  visitor: ["params"],
  fields: {
    params: (0, _utils.validate)((0, _utils.arrayOfType)("TypeParameter"))
  }
});
(0, _utils.default)("TypeParameterInstantiation", {
  aliases: ["Flow"],
  visitor: ["params"],
  fields: {
    params: (0, _utils.validate)((0, _utils.arrayOfType)("FlowType"))
  }
});
(0, _utils.default)("UnionTypeAnnotation", {
  visitor: ["types"],
  aliases: ["Flow", "FlowType"],
  fields: {
    types: (0, _utils.validate)((0, _utils.arrayOfType)("FlowType"))
  }
});
(0, _utils.default)("Variance", {
  aliases: ["Flow"],
  builder: ["kind"],
  fields: {
    kind: (0, _utils.validate)((0, _utils.assertOneOf)("minus", "plus"))
  }
});
(0, _utils.default)("VoidTypeAnnotation", {
  aliases: ["Flow", "FlowType", "FlowBaseAnnotation"]
});
}, function(modId) { var map = {"./utils":1651912610418}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610421, function(require, module, exports) {


var _utils = _interopRequireWildcard(require("./utils"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

(0, _utils.default)("JSXAttribute", {
  visitor: ["name", "value"],
  aliases: ["JSX", "Immutable"],
  fields: {
    name: {
      validate: (0, _utils.assertNodeType)("JSXIdentifier", "JSXNamespacedName")
    },
    value: {
      optional: true,
      validate: (0, _utils.assertNodeType)("JSXElement", "JSXFragment", "StringLiteral", "JSXExpressionContainer")
    }
  }
});
(0, _utils.default)("JSXClosingElement", {
  visitor: ["name"],
  aliases: ["JSX", "Immutable"],
  fields: {
    name: {
      validate: (0, _utils.assertNodeType)("JSXIdentifier", "JSXMemberExpression")
    }
  }
});
(0, _utils.default)("JSXElement", {
  builder: ["openingElement", "closingElement", "children", "selfClosing"],
  visitor: ["openingElement", "children", "closingElement"],
  aliases: ["JSX", "Immutable", "Expression"],
  fields: {
    openingElement: {
      validate: (0, _utils.assertNodeType)("JSXOpeningElement")
    },
    closingElement: {
      optional: true,
      validate: (0, _utils.assertNodeType)("JSXClosingElement")
    },
    children: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("JSXText", "JSXExpressionContainer", "JSXSpreadChild", "JSXElement", "JSXFragment")))
    }
  }
});
(0, _utils.default)("JSXEmptyExpression", {
  aliases: ["JSX"]
});
(0, _utils.default)("JSXExpressionContainer", {
  visitor: ["expression"],
  aliases: ["JSX", "Immutable"],
  fields: {
    expression: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  }
});
(0, _utils.default)("JSXSpreadChild", {
  visitor: ["expression"],
  aliases: ["JSX", "Immutable"],
  fields: {
    expression: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  }
});
(0, _utils.default)("JSXIdentifier", {
  builder: ["name"],
  aliases: ["JSX"],
  fields: {
    name: {
      validate: (0, _utils.assertValueType)("string")
    }
  }
});
(0, _utils.default)("JSXMemberExpression", {
  visitor: ["object", "property"],
  aliases: ["JSX"],
  fields: {
    object: {
      validate: (0, _utils.assertNodeType)("JSXMemberExpression", "JSXIdentifier")
    },
    property: {
      validate: (0, _utils.assertNodeType)("JSXIdentifier")
    }
  }
});
(0, _utils.default)("JSXNamespacedName", {
  visitor: ["namespace", "name"],
  aliases: ["JSX"],
  fields: {
    namespace: {
      validate: (0, _utils.assertNodeType)("JSXIdentifier")
    },
    name: {
      validate: (0, _utils.assertNodeType)("JSXIdentifier")
    }
  }
});
(0, _utils.default)("JSXOpeningElement", {
  builder: ["name", "attributes", "selfClosing"],
  visitor: ["name", "attributes"],
  aliases: ["JSX", "Immutable"],
  fields: {
    name: {
      validate: (0, _utils.assertNodeType)("JSXIdentifier", "JSXMemberExpression")
    },
    selfClosing: {
      default: false,
      validate: (0, _utils.assertValueType)("boolean")
    },
    attributes: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("JSXAttribute", "JSXSpreadAttribute")))
    }
  }
});
(0, _utils.default)("JSXSpreadAttribute", {
  visitor: ["argument"],
  aliases: ["JSX"],
  fields: {
    argument: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  }
});
(0, _utils.default)("JSXText", {
  aliases: ["JSX", "Immutable"],
  builder: ["value"],
  fields: {
    value: {
      validate: (0, _utils.assertValueType)("string")
    }
  }
});
(0, _utils.default)("JSXFragment", {
  builder: ["openingFragment", "closingFragment", "children"],
  visitor: ["openingFragment", "children", "closingFragment"],
  aliases: ["JSX", "Immutable", "Expression"],
  fields: {
    openingFragment: {
      validate: (0, _utils.assertNodeType)("JSXOpeningFragment")
    },
    closingFragment: {
      validate: (0, _utils.assertNodeType)("JSXClosingFragment")
    },
    children: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("JSXText", "JSXExpressionContainer", "JSXSpreadChild", "JSXElement", "JSXFragment")))
    }
  }
});
(0, _utils.default)("JSXOpeningFragment", {
  aliases: ["JSX", "Immutable"]
});
(0, _utils.default)("JSXClosingFragment", {
  aliases: ["JSX", "Immutable"]
});
}, function(modId) { var map = {"./utils":1651912610418}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610422, function(require, module, exports) {


var _utils = _interopRequireWildcard(require("./utils"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

(0, _utils.default)("Noop", {
  visitor: []
});
(0, _utils.default)("ParenthesizedExpression", {
  visitor: ["expression"],
  aliases: ["Expression", "ExpressionWrapper"],
  fields: {
    expression: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  }
});
}, function(modId) { var map = {"./utils":1651912610418}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610423, function(require, module, exports) {


var _utils = _interopRequireWildcard(require("./utils"));

var _es = require("./es2015");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(0, _utils.default)("AwaitExpression", {
  builder: ["argument"],
  visitor: ["argument"],
  aliases: ["Expression", "Terminatorless"],
  fields: {
    argument: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  }
});
(0, _utils.default)("BindExpression", {
  visitor: ["object", "callee"],
  aliases: ["Expression"],
  fields: {}
});
(0, _utils.default)("ClassProperty", {
  visitor: ["key", "value", "typeAnnotation", "decorators"],
  builder: ["key", "value", "typeAnnotation", "decorators", "computed"],
  aliases: ["Property"],
  fields: _objectSpread({}, _es.classMethodOrPropertyCommon, {
    value: {
      validate: (0, _utils.assertNodeType)("Expression"),
      optional: true
    },
    definite: {
      validate: (0, _utils.assertValueType)("boolean"),
      optional: true
    },
    typeAnnotation: {
      validate: (0, _utils.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
      optional: true
    },
    decorators: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator"))),
      optional: true
    },
    readonly: {
      validate: (0, _utils.assertValueType)("boolean"),
      optional: true
    }
  })
});
(0, _utils.default)("OptionalMemberExpression", {
  builder: ["object", "property", "computed", "optional"],
  visitor: ["object", "property"],
  aliases: ["Expression"],
  fields: {
    object: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    property: {
      validate: function () {
        var normal = (0, _utils.assertNodeType)("Identifier");
        var computed = (0, _utils.assertNodeType)("Expression");
        return function (node, key, val) {
          var validator = node.computed ? computed : normal;
          validator(node, key, val);
        };
      }()
    },
    computed: {
      default: false
    },
    optional: {
      validate: (0, _utils.assertValueType)("boolean")
    }
  }
});
(0, _utils.default)("OptionalCallExpression", {
  visitor: ["callee", "arguments", "typeParameters"],
  builder: ["callee", "arguments", "optional"],
  aliases: ["Expression"],
  fields: {
    callee: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    arguments: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Expression", "SpreadElement", "JSXNamespacedName")))
    },
    optional: {
      validate: (0, _utils.assertValueType)("boolean")
    },
    typeParameters: {
      validate: (0, _utils.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
      optional: true
    }
  }
});
(0, _utils.default)("Import", {
  aliases: ["Expression"]
});
(0, _utils.default)("Decorator", {
  visitor: ["expression"],
  fields: {
    expression: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  }
});
(0, _utils.default)("DoExpression", {
  visitor: ["body"],
  aliases: ["Expression"],
  fields: {
    body: {
      validate: (0, _utils.assertNodeType)("BlockStatement")
    }
  }
});
(0, _utils.default)("ExportDefaultSpecifier", {
  visitor: ["exported"],
  aliases: ["ModuleSpecifier"],
  fields: {
    exported: {
      validate: (0, _utils.assertNodeType)("Identifier")
    }
  }
});
(0, _utils.default)("ExportNamespaceSpecifier", {
  visitor: ["exported"],
  aliases: ["ModuleSpecifier"],
  fields: {
    exported: {
      validate: (0, _utils.assertNodeType)("Identifier")
    }
  }
});
}, function(modId) { var map = {"./utils":1651912610418,"./es2015":1651912610419}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610424, function(require, module, exports) {


var _utils = _interopRequireWildcard(require("./utils"));

var _core = require("./core");

var _es = require("./es2015");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var bool = (0, _utils.assertValueType)("boolean");
var tSFunctionTypeAnnotationCommon = {
  returnType: {
    validate: (0, _utils.assertNodeType)("TSTypeAnnotation", "Noop"),
    optional: true
  },
  typeParameters: {
    validate: (0, _utils.assertNodeType)("TSTypeParameterDeclaration", "Noop"),
    optional: true
  }
};
(0, _utils.default)("TSParameterProperty", {
  aliases: ["LVal"],
  visitor: ["parameter"],
  fields: {
    accessibility: {
      validate: (0, _utils.assertOneOf)("public", "private", "protected"),
      optional: true
    },
    readonly: {
      validate: (0, _utils.assertValueType)("boolean"),
      optional: true
    },
    parameter: {
      validate: (0, _utils.assertNodeType)("Identifier", "AssignmentPattern")
    }
  }
});
(0, _utils.default)("TSDeclareFunction", {
  aliases: ["Statement", "Declaration"],
  visitor: ["id", "typeParameters", "params", "returnType"],
  fields: _objectSpread({}, _core.functionDeclarationCommon, tSFunctionTypeAnnotationCommon)
});
(0, _utils.default)("TSDeclareMethod", {
  visitor: ["decorators", "key", "typeParameters", "params", "returnType"],
  fields: _objectSpread({}, _es.classMethodOrDeclareMethodCommon, tSFunctionTypeAnnotationCommon)
});
(0, _utils.default)("TSQualifiedName", {
  aliases: ["TSEntityName"],
  visitor: ["left", "right"],
  fields: {
    left: (0, _utils.validateType)("TSEntityName"),
    right: (0, _utils.validateType)("Identifier")
  }
});
var signatureDeclarationCommon = {
  typeParameters: (0, _utils.validateOptionalType)("TSTypeParameterDeclaration"),
  parameters: (0, _utils.validateArrayOfType)(["Identifier", "RestElement"]),
  typeAnnotation: (0, _utils.validateOptionalType)("TSTypeAnnotation")
};
var callConstructSignatureDeclaration = {
  aliases: ["TSTypeElement"],
  visitor: ["typeParameters", "parameters", "typeAnnotation"],
  fields: signatureDeclarationCommon
};
(0, _utils.default)("TSCallSignatureDeclaration", callConstructSignatureDeclaration);
(0, _utils.default)("TSConstructSignatureDeclaration", callConstructSignatureDeclaration);
var namedTypeElementCommon = {
  key: (0, _utils.validateType)("Expression"),
  computed: (0, _utils.validate)(bool),
  optional: (0, _utils.validateOptional)(bool)
};
(0, _utils.default)("TSPropertySignature", {
  aliases: ["TSTypeElement"],
  visitor: ["key", "typeAnnotation", "initializer"],
  fields: _objectSpread({}, namedTypeElementCommon, {
    readonly: (0, _utils.validateOptional)(bool),
    typeAnnotation: (0, _utils.validateOptionalType)("TSTypeAnnotation"),
    initializer: (0, _utils.validateOptionalType)("Expression")
  })
});
(0, _utils.default)("TSMethodSignature", {
  aliases: ["TSTypeElement"],
  visitor: ["key", "typeParameters", "parameters", "typeAnnotation"],
  fields: _objectSpread({}, signatureDeclarationCommon, namedTypeElementCommon)
});
(0, _utils.default)("TSIndexSignature", {
  aliases: ["TSTypeElement"],
  visitor: ["parameters", "typeAnnotation"],
  fields: {
    readonly: (0, _utils.validateOptional)(bool),
    parameters: (0, _utils.validateArrayOfType)("Identifier"),
    typeAnnotation: (0, _utils.validateOptionalType)("TSTypeAnnotation")
  }
});
var tsKeywordTypes = ["TSAnyKeyword", "TSNumberKeyword", "TSObjectKeyword", "TSBooleanKeyword", "TSStringKeyword", "TSSymbolKeyword", "TSVoidKeyword", "TSUndefinedKeyword", "TSNullKeyword", "TSNeverKeyword"];

for (var _i = 0; _i < tsKeywordTypes.length; _i++) {
  var type = tsKeywordTypes[_i];
  (0, _utils.default)(type, {
    aliases: ["TSType"],
    visitor: [],
    fields: {}
  });
}

(0, _utils.default)("TSThisType", {
  aliases: ["TSType"],
  visitor: [],
  fields: {}
});
var fnOrCtr = {
  aliases: ["TSType"],
  visitor: ["typeParameters", "typeAnnotation"],
  fields: signatureDeclarationCommon
};
(0, _utils.default)("TSFunctionType", fnOrCtr);
(0, _utils.default)("TSConstructorType", fnOrCtr);
(0, _utils.default)("TSTypeReference", {
  aliases: ["TSType"],
  visitor: ["typeName", "typeParameters"],
  fields: {
    typeName: (0, _utils.validateType)("TSEntityName"),
    typeParameters: (0, _utils.validateOptionalType)("TSTypeParameterInstantiation")
  }
});
(0, _utils.default)("TSTypePredicate", {
  aliases: ["TSType"],
  visitor: ["parameterName", "typeAnnotation"],
  fields: {
    parameterName: (0, _utils.validateType)(["Identifier", "TSThisType"]),
    typeAnnotation: (0, _utils.validateType)("TSTypeAnnotation")
  }
});
(0, _utils.default)("TSTypeQuery", {
  aliases: ["TSType"],
  visitor: ["exprName"],
  fields: {
    exprName: (0, _utils.validateType)("TSEntityName")
  }
});
(0, _utils.default)("TSTypeLiteral", {
  aliases: ["TSType"],
  visitor: ["members"],
  fields: {
    members: (0, _utils.validateArrayOfType)("TSTypeElement")
  }
});
(0, _utils.default)("TSArrayType", {
  aliases: ["TSType"],
  visitor: ["elementType"],
  fields: {
    elementType: (0, _utils.validateType)("TSType")
  }
});
(0, _utils.default)("TSTupleType", {
  aliases: ["TSType"],
  visitor: ["elementTypes"],
  fields: {
    elementTypes: (0, _utils.validateArrayOfType)("TSType")
  }
});
var unionOrIntersection = {
  aliases: ["TSType"],
  visitor: ["types"],
  fields: {
    types: (0, _utils.validateArrayOfType)("TSType")
  }
};
(0, _utils.default)("TSUnionType", unionOrIntersection);
(0, _utils.default)("TSIntersectionType", unionOrIntersection);
(0, _utils.default)("TSConditionalType", {
  aliases: ["TSType"],
  visitor: ["checkType", "extendsType", "trueType", "falseType"],
  fields: {
    checkType: (0, _utils.validateType)("TSType"),
    extendsType: (0, _utils.validateType)("TSType"),
    trueType: (0, _utils.validateType)("TSType"),
    falseType: (0, _utils.validateType)("TSType")
  }
});
(0, _utils.default)("TSInferType", {
  aliases: ["TSType"],
  visitor: ["typeParameter"],
  fields: {
    typeParameter: (0, _utils.validateType)("TSType")
  }
});
(0, _utils.default)("TSParenthesizedType", {
  aliases: ["TSType"],
  visitor: ["typeAnnotation"],
  fields: {
    typeAnnotation: (0, _utils.validateType)("TSType")
  }
});
(0, _utils.default)("TSTypeOperator", {
  aliases: ["TSType"],
  visitor: ["typeAnnotation"],
  fields: {
    operator: (0, _utils.validate)((0, _utils.assertValueType)("string")),
    typeAnnotation: (0, _utils.validateType)("TSType")
  }
});
(0, _utils.default)("TSIndexedAccessType", {
  aliases: ["TSType"],
  visitor: ["objectType", "indexType"],
  fields: {
    objectType: (0, _utils.validateType)("TSType"),
    indexType: (0, _utils.validateType)("TSType")
  }
});
(0, _utils.default)("TSMappedType", {
  aliases: ["TSType"],
  visitor: ["typeParameter", "typeAnnotation"],
  fields: {
    readonly: (0, _utils.validateOptional)(bool),
    typeParameter: (0, _utils.validateType)("TSTypeParameter"),
    optional: (0, _utils.validateOptional)(bool),
    typeAnnotation: (0, _utils.validateOptionalType)("TSType")
  }
});
(0, _utils.default)("TSLiteralType", {
  aliases: ["TSType"],
  visitor: ["literal"],
  fields: {
    literal: (0, _utils.validateType)(["NumericLiteral", "StringLiteral", "BooleanLiteral"])
  }
});
(0, _utils.default)("TSExpressionWithTypeArguments", {
  aliases: ["TSType"],
  visitor: ["expression", "typeParameters"],
  fields: {
    expression: (0, _utils.validateType)("TSEntityName"),
    typeParameters: (0, _utils.validateOptionalType)("TSTypeParameterInstantiation")
  }
});
(0, _utils.default)("TSInterfaceDeclaration", {
  aliases: ["Statement", "Declaration"],
  visitor: ["id", "typeParameters", "extends", "body"],
  fields: {
    declare: (0, _utils.validateOptional)(bool),
    id: (0, _utils.validateType)("Identifier"),
    typeParameters: (0, _utils.validateOptionalType)("TSTypeParameterDeclaration"),
    extends: (0, _utils.validateOptional)((0, _utils.arrayOfType)("TSExpressionWithTypeArguments")),
    body: (0, _utils.validateType)("TSInterfaceBody")
  }
});
(0, _utils.default)("TSInterfaceBody", {
  visitor: ["body"],
  fields: {
    body: (0, _utils.validateArrayOfType)("TSTypeElement")
  }
});
(0, _utils.default)("TSTypeAliasDeclaration", {
  aliases: ["Statement", "Declaration"],
  visitor: ["id", "typeParameters", "typeAnnotation"],
  fields: {
    declare: (0, _utils.validateOptional)(bool),
    id: (0, _utils.validateType)("Identifier"),
    typeParameters: (0, _utils.validateOptionalType)("TSTypeParameterDeclaration"),
    typeAnnotation: (0, _utils.validateType)("TSType")
  }
});
(0, _utils.default)("TSAsExpression", {
  aliases: ["Expression"],
  visitor: ["expression", "typeAnnotation"],
  fields: {
    expression: (0, _utils.validateType)("Expression"),
    typeAnnotation: (0, _utils.validateType)("TSType")
  }
});
(0, _utils.default)("TSTypeAssertion", {
  aliases: ["Expression"],
  visitor: ["typeAnnotation", "expression"],
  fields: {
    typeAnnotation: (0, _utils.validateType)("TSType"),
    expression: (0, _utils.validateType)("Expression")
  }
});
(0, _utils.default)("TSEnumDeclaration", {
  aliases: ["Statement", "Declaration"],
  visitor: ["id", "members"],
  fields: {
    declare: (0, _utils.validateOptional)(bool),
    const: (0, _utils.validateOptional)(bool),
    id: (0, _utils.validateType)("Identifier"),
    members: (0, _utils.validateArrayOfType)("TSEnumMember"),
    initializer: (0, _utils.validateOptionalType)("Expression")
  }
});
(0, _utils.default)("TSEnumMember", {
  visitor: ["id", "initializer"],
  fields: {
    id: (0, _utils.validateType)(["Identifier", "StringLiteral"]),
    initializer: (0, _utils.validateOptionalType)("Expression")
  }
});
(0, _utils.default)("TSModuleDeclaration", {
  aliases: ["Statement", "Declaration"],
  visitor: ["id", "body"],
  fields: {
    declare: (0, _utils.validateOptional)(bool),
    global: (0, _utils.validateOptional)(bool),
    id: (0, _utils.validateType)(["Identifier", "StringLiteral"]),
    body: (0, _utils.validateType)(["TSModuleBlock", "TSModuleDeclaration"])
  }
});
(0, _utils.default)("TSModuleBlock", {
  visitor: ["body"],
  fields: {
    body: (0, _utils.validateArrayOfType)("Statement")
  }
});
(0, _utils.default)("TSImportEqualsDeclaration", {
  aliases: ["Statement"],
  visitor: ["id", "moduleReference"],
  fields: {
    isExport: (0, _utils.validate)(bool),
    id: (0, _utils.validateType)("Identifier"),
    moduleReference: (0, _utils.validateType)(["TSEntityName", "TSExternalModuleReference"])
  }
});
(0, _utils.default)("TSExternalModuleReference", {
  visitor: ["expression"],
  fields: {
    expression: (0, _utils.validateType)("StringLiteral")
  }
});
(0, _utils.default)("TSNonNullExpression", {
  aliases: ["Expression"],
  visitor: ["expression"],
  fields: {
    expression: (0, _utils.validateType)("Expression")
  }
});
(0, _utils.default)("TSExportAssignment", {
  aliases: ["Statement"],
  visitor: ["expression"],
  fields: {
    expression: (0, _utils.validateType)("Expression")
  }
});
(0, _utils.default)("TSNamespaceExportDeclaration", {
  aliases: ["Statement"],
  visitor: ["id"],
  fields: {
    id: (0, _utils.validateType)("Identifier")
  }
});
(0, _utils.default)("TSTypeAnnotation", {
  visitor: ["typeAnnotation"],
  fields: {
    typeAnnotation: {
      validate: (0, _utils.assertNodeType)("TSType")
    }
  }
});
(0, _utils.default)("TSTypeParameterInstantiation", {
  visitor: ["params"],
  fields: {
    params: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("TSType")))
    }
  }
});
(0, _utils.default)("TSTypeParameterDeclaration", {
  visitor: ["params"],
  fields: {
    params: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("TSTypeParameter")))
    }
  }
});
(0, _utils.default)("TSTypeParameter", {
  visitor: ["constraint", "default"],
  fields: {
    name: {
      validate: (0, _utils.assertValueType)("string")
    },
    constraint: {
      validate: (0, _utils.assertNodeType)("TSType"),
      optional: true
    },
    default: {
      validate: (0, _utils.assertNodeType)("TSType"),
      optional: true
    }
  }
});
}, function(modId) { var map = {"./utils":1651912610418,"./core":1651912610415,"./es2015":1651912610419}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610425, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isCompatTag;

function isCompatTag(tagName) {
  return !!tagName && /^[a-z]/.test(tagName);
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610426, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buildChildren;

var _generated = require("../../validators/generated");

var _cleanJSXElementLiteralChild = _interopRequireDefault(require("../../utils/react/cleanJSXElementLiteralChild"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function buildChildren(node) {
  var elements = [];

  for (var i = 0; i < node.children.length; i++) {
    var child = node.children[i];

    if ((0, _generated.isJSXText)(child)) {
      (0, _cleanJSXElementLiteralChild.default)(child, elements);
      continue;
    }

    if ((0, _generated.isJSXExpressionContainer)(child)) child = child.expression;
    if ((0, _generated.isJSXEmptyExpression)(child)) continue;
    elements.push(child);
  }

  return elements;
}
}, function(modId) { var map = {"../../validators/generated":1651912610410,"../../utils/react/cleanJSXElementLiteralChild":1651912610427}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610427, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cleanJSXElementLiteralChild;

var _generated = require("../../builders/generated");

function cleanJSXElementLiteralChild(child, args) {
  var lines = child.value.split(/\r\n|\n|\r/);
  var lastNonEmptyLine = 0;

  for (var i = 0; i < lines.length; i++) {
    if (lines[i].match(/[^ \t]/)) {
      lastNonEmptyLine = i;
    }
  }

  var str = "";

  for (var _i = 0; _i < lines.length; _i++) {
    var line = lines[_i];
    var isFirstLine = _i === 0;
    var isLastLine = _i === lines.length - 1;
    var isLastNonEmptyLine = _i === lastNonEmptyLine;
    var trimmedLine = line.replace(/\t/g, " ");

    if (!isFirstLine) {
      trimmedLine = trimmedLine.replace(/^[ ]+/, "");
    }

    if (!isLastLine) {
      trimmedLine = trimmedLine.replace(/[ ]+$/, "");
    }

    if (trimmedLine) {
      if (!isLastNonEmptyLine) {
        trimmedLine += " ";
      }

      str += trimmedLine;
    }
  }

  if (str) args.push((0, _generated.stringLiteral)(str));
}
}, function(modId) { var map = {"../../builders/generated":1651912610428}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610428, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrayExpression = exports.ArrayExpression = ArrayExpression;
exports.assignmentExpression = exports.AssignmentExpression = AssignmentExpression;
exports.binaryExpression = exports.BinaryExpression = BinaryExpression;
exports.directive = exports.Directive = Directive;
exports.directiveLiteral = exports.DirectiveLiteral = DirectiveLiteral;
exports.blockStatement = exports.BlockStatement = BlockStatement;
exports.breakStatement = exports.BreakStatement = BreakStatement;
exports.callExpression = exports.CallExpression = CallExpression;
exports.catchClause = exports.CatchClause = CatchClause;
exports.conditionalExpression = exports.ConditionalExpression = ConditionalExpression;
exports.continueStatement = exports.ContinueStatement = ContinueStatement;
exports.debuggerStatement = exports.DebuggerStatement = DebuggerStatement;
exports.doWhileStatement = exports.DoWhileStatement = DoWhileStatement;
exports.emptyStatement = exports.EmptyStatement = EmptyStatement;
exports.expressionStatement = exports.ExpressionStatement = ExpressionStatement;
exports.file = exports.File = File;
exports.forInStatement = exports.ForInStatement = ForInStatement;
exports.forStatement = exports.ForStatement = ForStatement;
exports.functionDeclaration = exports.FunctionDeclaration = FunctionDeclaration;
exports.functionExpression = exports.FunctionExpression = FunctionExpression;
exports.identifier = exports.Identifier = Identifier;
exports.ifStatement = exports.IfStatement = IfStatement;
exports.labeledStatement = exports.LabeledStatement = LabeledStatement;
exports.stringLiteral = exports.StringLiteral = StringLiteral;
exports.numericLiteral = exports.NumericLiteral = NumericLiteral;
exports.nullLiteral = exports.NullLiteral = NullLiteral;
exports.booleanLiteral = exports.BooleanLiteral = BooleanLiteral;
exports.regExpLiteral = exports.RegExpLiteral = RegExpLiteral;
exports.logicalExpression = exports.LogicalExpression = LogicalExpression;
exports.memberExpression = exports.MemberExpression = MemberExpression;
exports.newExpression = exports.NewExpression = NewExpression;
exports.program = exports.Program = Program;
exports.objectExpression = exports.ObjectExpression = ObjectExpression;
exports.objectMethod = exports.ObjectMethod = ObjectMethod;
exports.objectProperty = exports.ObjectProperty = ObjectProperty;
exports.restElement = exports.RestElement = RestElement;
exports.returnStatement = exports.ReturnStatement = ReturnStatement;
exports.sequenceExpression = exports.SequenceExpression = SequenceExpression;
exports.switchCase = exports.SwitchCase = SwitchCase;
exports.switchStatement = exports.SwitchStatement = SwitchStatement;
exports.thisExpression = exports.ThisExpression = ThisExpression;
exports.throwStatement = exports.ThrowStatement = ThrowStatement;
exports.tryStatement = exports.TryStatement = TryStatement;
exports.unaryExpression = exports.UnaryExpression = UnaryExpression;
exports.updateExpression = exports.UpdateExpression = UpdateExpression;
exports.variableDeclaration = exports.VariableDeclaration = VariableDeclaration;
exports.variableDeclarator = exports.VariableDeclarator = VariableDeclarator;
exports.whileStatement = exports.WhileStatement = WhileStatement;
exports.withStatement = exports.WithStatement = WithStatement;
exports.assignmentPattern = exports.AssignmentPattern = AssignmentPattern;
exports.arrayPattern = exports.ArrayPattern = ArrayPattern;
exports.arrowFunctionExpression = exports.ArrowFunctionExpression = ArrowFunctionExpression;
exports.classBody = exports.ClassBody = ClassBody;
exports.classDeclaration = exports.ClassDeclaration = ClassDeclaration;
exports.classExpression = exports.ClassExpression = ClassExpression;
exports.exportAllDeclaration = exports.ExportAllDeclaration = ExportAllDeclaration;
exports.exportDefaultDeclaration = exports.ExportDefaultDeclaration = ExportDefaultDeclaration;
exports.exportNamedDeclaration = exports.ExportNamedDeclaration = ExportNamedDeclaration;
exports.exportSpecifier = exports.ExportSpecifier = ExportSpecifier;
exports.forOfStatement = exports.ForOfStatement = ForOfStatement;
exports.importDeclaration = exports.ImportDeclaration = ImportDeclaration;
exports.importDefaultSpecifier = exports.ImportDefaultSpecifier = ImportDefaultSpecifier;
exports.importNamespaceSpecifier = exports.ImportNamespaceSpecifier = ImportNamespaceSpecifier;
exports.importSpecifier = exports.ImportSpecifier = ImportSpecifier;
exports.metaProperty = exports.MetaProperty = MetaProperty;
exports.classMethod = exports.ClassMethod = ClassMethod;
exports.objectPattern = exports.ObjectPattern = ObjectPattern;
exports.spreadElement = exports.SpreadElement = SpreadElement;
exports.super = exports.Super = Super;
exports.taggedTemplateExpression = exports.TaggedTemplateExpression = TaggedTemplateExpression;
exports.templateElement = exports.TemplateElement = TemplateElement;
exports.templateLiteral = exports.TemplateLiteral = TemplateLiteral;
exports.yieldExpression = exports.YieldExpression = YieldExpression;
exports.anyTypeAnnotation = exports.AnyTypeAnnotation = AnyTypeAnnotation;
exports.arrayTypeAnnotation = exports.ArrayTypeAnnotation = ArrayTypeAnnotation;
exports.booleanTypeAnnotation = exports.BooleanTypeAnnotation = BooleanTypeAnnotation;
exports.booleanLiteralTypeAnnotation = exports.BooleanLiteralTypeAnnotation = BooleanLiteralTypeAnnotation;
exports.nullLiteralTypeAnnotation = exports.NullLiteralTypeAnnotation = NullLiteralTypeAnnotation;
exports.classImplements = exports.ClassImplements = ClassImplements;
exports.declareClass = exports.DeclareClass = DeclareClass;
exports.declareFunction = exports.DeclareFunction = DeclareFunction;
exports.declareInterface = exports.DeclareInterface = DeclareInterface;
exports.declareModule = exports.DeclareModule = DeclareModule;
exports.declareModuleExports = exports.DeclareModuleExports = DeclareModuleExports;
exports.declareTypeAlias = exports.DeclareTypeAlias = DeclareTypeAlias;
exports.declareOpaqueType = exports.DeclareOpaqueType = DeclareOpaqueType;
exports.declareVariable = exports.DeclareVariable = DeclareVariable;
exports.declareExportDeclaration = exports.DeclareExportDeclaration = DeclareExportDeclaration;
exports.declareExportAllDeclaration = exports.DeclareExportAllDeclaration = DeclareExportAllDeclaration;
exports.declaredPredicate = exports.DeclaredPredicate = DeclaredPredicate;
exports.existsTypeAnnotation = exports.ExistsTypeAnnotation = ExistsTypeAnnotation;
exports.functionTypeAnnotation = exports.FunctionTypeAnnotation = FunctionTypeAnnotation;
exports.functionTypeParam = exports.FunctionTypeParam = FunctionTypeParam;
exports.genericTypeAnnotation = exports.GenericTypeAnnotation = GenericTypeAnnotation;
exports.inferredPredicate = exports.InferredPredicate = InferredPredicate;
exports.interfaceExtends = exports.InterfaceExtends = InterfaceExtends;
exports.interfaceDeclaration = exports.InterfaceDeclaration = InterfaceDeclaration;
exports.intersectionTypeAnnotation = exports.IntersectionTypeAnnotation = IntersectionTypeAnnotation;
exports.mixedTypeAnnotation = exports.MixedTypeAnnotation = MixedTypeAnnotation;
exports.emptyTypeAnnotation = exports.EmptyTypeAnnotation = EmptyTypeAnnotation;
exports.nullableTypeAnnotation = exports.NullableTypeAnnotation = NullableTypeAnnotation;
exports.numberLiteralTypeAnnotation = exports.NumberLiteralTypeAnnotation = NumberLiteralTypeAnnotation;
exports.numberTypeAnnotation = exports.NumberTypeAnnotation = NumberTypeAnnotation;
exports.objectTypeAnnotation = exports.ObjectTypeAnnotation = ObjectTypeAnnotation;
exports.objectTypeCallProperty = exports.ObjectTypeCallProperty = ObjectTypeCallProperty;
exports.objectTypeIndexer = exports.ObjectTypeIndexer = ObjectTypeIndexer;
exports.objectTypeProperty = exports.ObjectTypeProperty = ObjectTypeProperty;
exports.objectTypeSpreadProperty = exports.ObjectTypeSpreadProperty = ObjectTypeSpreadProperty;
exports.opaqueType = exports.OpaqueType = OpaqueType;
exports.qualifiedTypeIdentifier = exports.QualifiedTypeIdentifier = QualifiedTypeIdentifier;
exports.stringLiteralTypeAnnotation = exports.StringLiteralTypeAnnotation = StringLiteralTypeAnnotation;
exports.stringTypeAnnotation = exports.StringTypeAnnotation = StringTypeAnnotation;
exports.thisTypeAnnotation = exports.ThisTypeAnnotation = ThisTypeAnnotation;
exports.tupleTypeAnnotation = exports.TupleTypeAnnotation = TupleTypeAnnotation;
exports.typeofTypeAnnotation = exports.TypeofTypeAnnotation = TypeofTypeAnnotation;
exports.typeAlias = exports.TypeAlias = TypeAlias;
exports.typeAnnotation = exports.TypeAnnotation = TypeAnnotation;
exports.typeCastExpression = exports.TypeCastExpression = TypeCastExpression;
exports.typeParameter = exports.TypeParameter = TypeParameter;
exports.typeParameterDeclaration = exports.TypeParameterDeclaration = TypeParameterDeclaration;
exports.typeParameterInstantiation = exports.TypeParameterInstantiation = TypeParameterInstantiation;
exports.unionTypeAnnotation = exports.UnionTypeAnnotation = UnionTypeAnnotation;
exports.variance = exports.Variance = Variance;
exports.voidTypeAnnotation = exports.VoidTypeAnnotation = VoidTypeAnnotation;
exports.jSXAttribute = exports.jsxAttribute = exports.JSXAttribute = JSXAttribute;
exports.jSXClosingElement = exports.jsxClosingElement = exports.JSXClosingElement = JSXClosingElement;
exports.jSXElement = exports.jsxElement = exports.JSXElement = JSXElement;
exports.jSXEmptyExpression = exports.jsxEmptyExpression = exports.JSXEmptyExpression = JSXEmptyExpression;
exports.jSXExpressionContainer = exports.jsxExpressionContainer = exports.JSXExpressionContainer = JSXExpressionContainer;
exports.jSXSpreadChild = exports.jsxSpreadChild = exports.JSXSpreadChild = JSXSpreadChild;
exports.jSXIdentifier = exports.jsxIdentifier = exports.JSXIdentifier = JSXIdentifier;
exports.jSXMemberExpression = exports.jsxMemberExpression = exports.JSXMemberExpression = JSXMemberExpression;
exports.jSXNamespacedName = exports.jsxNamespacedName = exports.JSXNamespacedName = JSXNamespacedName;
exports.jSXOpeningElement = exports.jsxOpeningElement = exports.JSXOpeningElement = JSXOpeningElement;
exports.jSXSpreadAttribute = exports.jsxSpreadAttribute = exports.JSXSpreadAttribute = JSXSpreadAttribute;
exports.jSXText = exports.jsxText = exports.JSXText = JSXText;
exports.jSXFragment = exports.jsxFragment = exports.JSXFragment = JSXFragment;
exports.jSXOpeningFragment = exports.jsxOpeningFragment = exports.JSXOpeningFragment = JSXOpeningFragment;
exports.jSXClosingFragment = exports.jsxClosingFragment = exports.JSXClosingFragment = JSXClosingFragment;
exports.noop = exports.Noop = Noop;
exports.parenthesizedExpression = exports.ParenthesizedExpression = ParenthesizedExpression;
exports.awaitExpression = exports.AwaitExpression = AwaitExpression;
exports.bindExpression = exports.BindExpression = BindExpression;
exports.classProperty = exports.ClassProperty = ClassProperty;
exports.optionalMemberExpression = exports.OptionalMemberExpression = OptionalMemberExpression;
exports.optionalCallExpression = exports.OptionalCallExpression = OptionalCallExpression;
exports.import = exports.Import = Import;
exports.decorator = exports.Decorator = Decorator;
exports.doExpression = exports.DoExpression = DoExpression;
exports.exportDefaultSpecifier = exports.ExportDefaultSpecifier = ExportDefaultSpecifier;
exports.exportNamespaceSpecifier = exports.ExportNamespaceSpecifier = ExportNamespaceSpecifier;
exports.tSParameterProperty = exports.tsParameterProperty = exports.TSParameterProperty = TSParameterProperty;
exports.tSDeclareFunction = exports.tsDeclareFunction = exports.TSDeclareFunction = TSDeclareFunction;
exports.tSDeclareMethod = exports.tsDeclareMethod = exports.TSDeclareMethod = TSDeclareMethod;
exports.tSQualifiedName = exports.tsQualifiedName = exports.TSQualifiedName = TSQualifiedName;
exports.tSCallSignatureDeclaration = exports.tsCallSignatureDeclaration = exports.TSCallSignatureDeclaration = TSCallSignatureDeclaration;
exports.tSConstructSignatureDeclaration = exports.tsConstructSignatureDeclaration = exports.TSConstructSignatureDeclaration = TSConstructSignatureDeclaration;
exports.tSPropertySignature = exports.tsPropertySignature = exports.TSPropertySignature = TSPropertySignature;
exports.tSMethodSignature = exports.tsMethodSignature = exports.TSMethodSignature = TSMethodSignature;
exports.tSIndexSignature = exports.tsIndexSignature = exports.TSIndexSignature = TSIndexSignature;
exports.tSAnyKeyword = exports.tsAnyKeyword = exports.TSAnyKeyword = TSAnyKeyword;
exports.tSNumberKeyword = exports.tsNumberKeyword = exports.TSNumberKeyword = TSNumberKeyword;
exports.tSObjectKeyword = exports.tsObjectKeyword = exports.TSObjectKeyword = TSObjectKeyword;
exports.tSBooleanKeyword = exports.tsBooleanKeyword = exports.TSBooleanKeyword = TSBooleanKeyword;
exports.tSStringKeyword = exports.tsStringKeyword = exports.TSStringKeyword = TSStringKeyword;
exports.tSSymbolKeyword = exports.tsSymbolKeyword = exports.TSSymbolKeyword = TSSymbolKeyword;
exports.tSVoidKeyword = exports.tsVoidKeyword = exports.TSVoidKeyword = TSVoidKeyword;
exports.tSUndefinedKeyword = exports.tsUndefinedKeyword = exports.TSUndefinedKeyword = TSUndefinedKeyword;
exports.tSNullKeyword = exports.tsNullKeyword = exports.TSNullKeyword = TSNullKeyword;
exports.tSNeverKeyword = exports.tsNeverKeyword = exports.TSNeverKeyword = TSNeverKeyword;
exports.tSThisType = exports.tsThisType = exports.TSThisType = TSThisType;
exports.tSFunctionType = exports.tsFunctionType = exports.TSFunctionType = TSFunctionType;
exports.tSConstructorType = exports.tsConstructorType = exports.TSConstructorType = TSConstructorType;
exports.tSTypeReference = exports.tsTypeReference = exports.TSTypeReference = TSTypeReference;
exports.tSTypePredicate = exports.tsTypePredicate = exports.TSTypePredicate = TSTypePredicate;
exports.tSTypeQuery = exports.tsTypeQuery = exports.TSTypeQuery = TSTypeQuery;
exports.tSTypeLiteral = exports.tsTypeLiteral = exports.TSTypeLiteral = TSTypeLiteral;
exports.tSArrayType = exports.tsArrayType = exports.TSArrayType = TSArrayType;
exports.tSTupleType = exports.tsTupleType = exports.TSTupleType = TSTupleType;
exports.tSUnionType = exports.tsUnionType = exports.TSUnionType = TSUnionType;
exports.tSIntersectionType = exports.tsIntersectionType = exports.TSIntersectionType = TSIntersectionType;
exports.tSConditionalType = exports.tsConditionalType = exports.TSConditionalType = TSConditionalType;
exports.tSInferType = exports.tsInferType = exports.TSInferType = TSInferType;
exports.tSParenthesizedType = exports.tsParenthesizedType = exports.TSParenthesizedType = TSParenthesizedType;
exports.tSTypeOperator = exports.tsTypeOperator = exports.TSTypeOperator = TSTypeOperator;
exports.tSIndexedAccessType = exports.tsIndexedAccessType = exports.TSIndexedAccessType = TSIndexedAccessType;
exports.tSMappedType = exports.tsMappedType = exports.TSMappedType = TSMappedType;
exports.tSLiteralType = exports.tsLiteralType = exports.TSLiteralType = TSLiteralType;
exports.tSExpressionWithTypeArguments = exports.tsExpressionWithTypeArguments = exports.TSExpressionWithTypeArguments = TSExpressionWithTypeArguments;
exports.tSInterfaceDeclaration = exports.tsInterfaceDeclaration = exports.TSInterfaceDeclaration = TSInterfaceDeclaration;
exports.tSInterfaceBody = exports.tsInterfaceBody = exports.TSInterfaceBody = TSInterfaceBody;
exports.tSTypeAliasDeclaration = exports.tsTypeAliasDeclaration = exports.TSTypeAliasDeclaration = TSTypeAliasDeclaration;
exports.tSAsExpression = exports.tsAsExpression = exports.TSAsExpression = TSAsExpression;
exports.tSTypeAssertion = exports.tsTypeAssertion = exports.TSTypeAssertion = TSTypeAssertion;
exports.tSEnumDeclaration = exports.tsEnumDeclaration = exports.TSEnumDeclaration = TSEnumDeclaration;
exports.tSEnumMember = exports.tsEnumMember = exports.TSEnumMember = TSEnumMember;
exports.tSModuleDeclaration = exports.tsModuleDeclaration = exports.TSModuleDeclaration = TSModuleDeclaration;
exports.tSModuleBlock = exports.tsModuleBlock = exports.TSModuleBlock = TSModuleBlock;
exports.tSImportEqualsDeclaration = exports.tsImportEqualsDeclaration = exports.TSImportEqualsDeclaration = TSImportEqualsDeclaration;
exports.tSExternalModuleReference = exports.tsExternalModuleReference = exports.TSExternalModuleReference = TSExternalModuleReference;
exports.tSNonNullExpression = exports.tsNonNullExpression = exports.TSNonNullExpression = TSNonNullExpression;
exports.tSExportAssignment = exports.tsExportAssignment = exports.TSExportAssignment = TSExportAssignment;
exports.tSNamespaceExportDeclaration = exports.tsNamespaceExportDeclaration = exports.TSNamespaceExportDeclaration = TSNamespaceExportDeclaration;
exports.tSTypeAnnotation = exports.tsTypeAnnotation = exports.TSTypeAnnotation = TSTypeAnnotation;
exports.tSTypeParameterInstantiation = exports.tsTypeParameterInstantiation = exports.TSTypeParameterInstantiation = TSTypeParameterInstantiation;
exports.tSTypeParameterDeclaration = exports.tsTypeParameterDeclaration = exports.TSTypeParameterDeclaration = TSTypeParameterDeclaration;
exports.tSTypeParameter = exports.tsTypeParameter = exports.TSTypeParameter = TSTypeParameter;
exports.numberLiteral = exports.NumberLiteral = NumberLiteral;
exports.regexLiteral = exports.RegexLiteral = RegexLiteral;
exports.restProperty = exports.RestProperty = RestProperty;
exports.spreadProperty = exports.SpreadProperty = SpreadProperty;

var _builder = _interopRequireDefault(require("../builder"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ArrayExpression() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return _builder.default.apply(void 0, ["ArrayExpression"].concat(args));
}

function AssignmentExpression() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  return _builder.default.apply(void 0, ["AssignmentExpression"].concat(args));
}

function BinaryExpression() {
  for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  return _builder.default.apply(void 0, ["BinaryExpression"].concat(args));
}

function Directive() {
  for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    args[_key4] = arguments[_key4];
  }

  return _builder.default.apply(void 0, ["Directive"].concat(args));
}

function DirectiveLiteral() {
  for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    args[_key5] = arguments[_key5];
  }

  return _builder.default.apply(void 0, ["DirectiveLiteral"].concat(args));
}

function BlockStatement() {
  for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    args[_key6] = arguments[_key6];
  }

  return _builder.default.apply(void 0, ["BlockStatement"].concat(args));
}

function BreakStatement() {
  for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
    args[_key7] = arguments[_key7];
  }

  return _builder.default.apply(void 0, ["BreakStatement"].concat(args));
}

function CallExpression() {
  for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
    args[_key8] = arguments[_key8];
  }

  return _builder.default.apply(void 0, ["CallExpression"].concat(args));
}

function CatchClause() {
  for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
    args[_key9] = arguments[_key9];
  }

  return _builder.default.apply(void 0, ["CatchClause"].concat(args));
}

function ConditionalExpression() {
  for (var _len10 = arguments.length, args = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
    args[_key10] = arguments[_key10];
  }

  return _builder.default.apply(void 0, ["ConditionalExpression"].concat(args));
}

function ContinueStatement() {
  for (var _len11 = arguments.length, args = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
    args[_key11] = arguments[_key11];
  }

  return _builder.default.apply(void 0, ["ContinueStatement"].concat(args));
}

function DebuggerStatement() {
  for (var _len12 = arguments.length, args = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
    args[_key12] = arguments[_key12];
  }

  return _builder.default.apply(void 0, ["DebuggerStatement"].concat(args));
}

function DoWhileStatement() {
  for (var _len13 = arguments.length, args = new Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
    args[_key13] = arguments[_key13];
  }

  return _builder.default.apply(void 0, ["DoWhileStatement"].concat(args));
}

function EmptyStatement() {
  for (var _len14 = arguments.length, args = new Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
    args[_key14] = arguments[_key14];
  }

  return _builder.default.apply(void 0, ["EmptyStatement"].concat(args));
}

function ExpressionStatement() {
  for (var _len15 = arguments.length, args = new Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
    args[_key15] = arguments[_key15];
  }

  return _builder.default.apply(void 0, ["ExpressionStatement"].concat(args));
}

function File() {
  for (var _len16 = arguments.length, args = new Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {
    args[_key16] = arguments[_key16];
  }

  return _builder.default.apply(void 0, ["File"].concat(args));
}

function ForInStatement() {
  for (var _len17 = arguments.length, args = new Array(_len17), _key17 = 0; _key17 < _len17; _key17++) {
    args[_key17] = arguments[_key17];
  }

  return _builder.default.apply(void 0, ["ForInStatement"].concat(args));
}

function ForStatement() {
  for (var _len18 = arguments.length, args = new Array(_len18), _key18 = 0; _key18 < _len18; _key18++) {
    args[_key18] = arguments[_key18];
  }

  return _builder.default.apply(void 0, ["ForStatement"].concat(args));
}

function FunctionDeclaration() {
  for (var _len19 = arguments.length, args = new Array(_len19), _key19 = 0; _key19 < _len19; _key19++) {
    args[_key19] = arguments[_key19];
  }

  return _builder.default.apply(void 0, ["FunctionDeclaration"].concat(args));
}

function FunctionExpression() {
  for (var _len20 = arguments.length, args = new Array(_len20), _key20 = 0; _key20 < _len20; _key20++) {
    args[_key20] = arguments[_key20];
  }

  return _builder.default.apply(void 0, ["FunctionExpression"].concat(args));
}

function Identifier() {
  for (var _len21 = arguments.length, args = new Array(_len21), _key21 = 0; _key21 < _len21; _key21++) {
    args[_key21] = arguments[_key21];
  }

  return _builder.default.apply(void 0, ["Identifier"].concat(args));
}

function IfStatement() {
  for (var _len22 = arguments.length, args = new Array(_len22), _key22 = 0; _key22 < _len22; _key22++) {
    args[_key22] = arguments[_key22];
  }

  return _builder.default.apply(void 0, ["IfStatement"].concat(args));
}

function LabeledStatement() {
  for (var _len23 = arguments.length, args = new Array(_len23), _key23 = 0; _key23 < _len23; _key23++) {
    args[_key23] = arguments[_key23];
  }

  return _builder.default.apply(void 0, ["LabeledStatement"].concat(args));
}

function StringLiteral() {
  for (var _len24 = arguments.length, args = new Array(_len24), _key24 = 0; _key24 < _len24; _key24++) {
    args[_key24] = arguments[_key24];
  }

  return _builder.default.apply(void 0, ["StringLiteral"].concat(args));
}

function NumericLiteral() {
  for (var _len25 = arguments.length, args = new Array(_len25), _key25 = 0; _key25 < _len25; _key25++) {
    args[_key25] = arguments[_key25];
  }

  return _builder.default.apply(void 0, ["NumericLiteral"].concat(args));
}

function NullLiteral() {
  for (var _len26 = arguments.length, args = new Array(_len26), _key26 = 0; _key26 < _len26; _key26++) {
    args[_key26] = arguments[_key26];
  }

  return _builder.default.apply(void 0, ["NullLiteral"].concat(args));
}

function BooleanLiteral() {
  for (var _len27 = arguments.length, args = new Array(_len27), _key27 = 0; _key27 < _len27; _key27++) {
    args[_key27] = arguments[_key27];
  }

  return _builder.default.apply(void 0, ["BooleanLiteral"].concat(args));
}

function RegExpLiteral() {
  for (var _len28 = arguments.length, args = new Array(_len28), _key28 = 0; _key28 < _len28; _key28++) {
    args[_key28] = arguments[_key28];
  }

  return _builder.default.apply(void 0, ["RegExpLiteral"].concat(args));
}

function LogicalExpression() {
  for (var _len29 = arguments.length, args = new Array(_len29), _key29 = 0; _key29 < _len29; _key29++) {
    args[_key29] = arguments[_key29];
  }

  return _builder.default.apply(void 0, ["LogicalExpression"].concat(args));
}

function MemberExpression() {
  for (var _len30 = arguments.length, args = new Array(_len30), _key30 = 0; _key30 < _len30; _key30++) {
    args[_key30] = arguments[_key30];
  }

  return _builder.default.apply(void 0, ["MemberExpression"].concat(args));
}

function NewExpression() {
  for (var _len31 = arguments.length, args = new Array(_len31), _key31 = 0; _key31 < _len31; _key31++) {
    args[_key31] = arguments[_key31];
  }

  return _builder.default.apply(void 0, ["NewExpression"].concat(args));
}

function Program() {
  for (var _len32 = arguments.length, args = new Array(_len32), _key32 = 0; _key32 < _len32; _key32++) {
    args[_key32] = arguments[_key32];
  }

  return _builder.default.apply(void 0, ["Program"].concat(args));
}

function ObjectExpression() {
  for (var _len33 = arguments.length, args = new Array(_len33), _key33 = 0; _key33 < _len33; _key33++) {
    args[_key33] = arguments[_key33];
  }

  return _builder.default.apply(void 0, ["ObjectExpression"].concat(args));
}

function ObjectMethod() {
  for (var _len34 = arguments.length, args = new Array(_len34), _key34 = 0; _key34 < _len34; _key34++) {
    args[_key34] = arguments[_key34];
  }

  return _builder.default.apply(void 0, ["ObjectMethod"].concat(args));
}

function ObjectProperty() {
  for (var _len35 = arguments.length, args = new Array(_len35), _key35 = 0; _key35 < _len35; _key35++) {
    args[_key35] = arguments[_key35];
  }

  return _builder.default.apply(void 0, ["ObjectProperty"].concat(args));
}

function RestElement() {
  for (var _len36 = arguments.length, args = new Array(_len36), _key36 = 0; _key36 < _len36; _key36++) {
    args[_key36] = arguments[_key36];
  }

  return _builder.default.apply(void 0, ["RestElement"].concat(args));
}

function ReturnStatement() {
  for (var _len37 = arguments.length, args = new Array(_len37), _key37 = 0; _key37 < _len37; _key37++) {
    args[_key37] = arguments[_key37];
  }

  return _builder.default.apply(void 0, ["ReturnStatement"].concat(args));
}

function SequenceExpression() {
  for (var _len38 = arguments.length, args = new Array(_len38), _key38 = 0; _key38 < _len38; _key38++) {
    args[_key38] = arguments[_key38];
  }

  return _builder.default.apply(void 0, ["SequenceExpression"].concat(args));
}

function SwitchCase() {
  for (var _len39 = arguments.length, args = new Array(_len39), _key39 = 0; _key39 < _len39; _key39++) {
    args[_key39] = arguments[_key39];
  }

  return _builder.default.apply(void 0, ["SwitchCase"].concat(args));
}

function SwitchStatement() {
  for (var _len40 = arguments.length, args = new Array(_len40), _key40 = 0; _key40 < _len40; _key40++) {
    args[_key40] = arguments[_key40];
  }

  return _builder.default.apply(void 0, ["SwitchStatement"].concat(args));
}

function ThisExpression() {
  for (var _len41 = arguments.length, args = new Array(_len41), _key41 = 0; _key41 < _len41; _key41++) {
    args[_key41] = arguments[_key41];
  }

  return _builder.default.apply(void 0, ["ThisExpression"].concat(args));
}

function ThrowStatement() {
  for (var _len42 = arguments.length, args = new Array(_len42), _key42 = 0; _key42 < _len42; _key42++) {
    args[_key42] = arguments[_key42];
  }

  return _builder.default.apply(void 0, ["ThrowStatement"].concat(args));
}

function TryStatement() {
  for (var _len43 = arguments.length, args = new Array(_len43), _key43 = 0; _key43 < _len43; _key43++) {
    args[_key43] = arguments[_key43];
  }

  return _builder.default.apply(void 0, ["TryStatement"].concat(args));
}

function UnaryExpression() {
  for (var _len44 = arguments.length, args = new Array(_len44), _key44 = 0; _key44 < _len44; _key44++) {
    args[_key44] = arguments[_key44];
  }

  return _builder.default.apply(void 0, ["UnaryExpression"].concat(args));
}

function UpdateExpression() {
  for (var _len45 = arguments.length, args = new Array(_len45), _key45 = 0; _key45 < _len45; _key45++) {
    args[_key45] = arguments[_key45];
  }

  return _builder.default.apply(void 0, ["UpdateExpression"].concat(args));
}

function VariableDeclaration() {
  for (var _len46 = arguments.length, args = new Array(_len46), _key46 = 0; _key46 < _len46; _key46++) {
    args[_key46] = arguments[_key46];
  }

  return _builder.default.apply(void 0, ["VariableDeclaration"].concat(args));
}

function VariableDeclarator() {
  for (var _len47 = arguments.length, args = new Array(_len47), _key47 = 0; _key47 < _len47; _key47++) {
    args[_key47] = arguments[_key47];
  }

  return _builder.default.apply(void 0, ["VariableDeclarator"].concat(args));
}

function WhileStatement() {
  for (var _len48 = arguments.length, args = new Array(_len48), _key48 = 0; _key48 < _len48; _key48++) {
    args[_key48] = arguments[_key48];
  }

  return _builder.default.apply(void 0, ["WhileStatement"].concat(args));
}

function WithStatement() {
  for (var _len49 = arguments.length, args = new Array(_len49), _key49 = 0; _key49 < _len49; _key49++) {
    args[_key49] = arguments[_key49];
  }

  return _builder.default.apply(void 0, ["WithStatement"].concat(args));
}

function AssignmentPattern() {
  for (var _len50 = arguments.length, args = new Array(_len50), _key50 = 0; _key50 < _len50; _key50++) {
    args[_key50] = arguments[_key50];
  }

  return _builder.default.apply(void 0, ["AssignmentPattern"].concat(args));
}

function ArrayPattern() {
  for (var _len51 = arguments.length, args = new Array(_len51), _key51 = 0; _key51 < _len51; _key51++) {
    args[_key51] = arguments[_key51];
  }

  return _builder.default.apply(void 0, ["ArrayPattern"].concat(args));
}

function ArrowFunctionExpression() {
  for (var _len52 = arguments.length, args = new Array(_len52), _key52 = 0; _key52 < _len52; _key52++) {
    args[_key52] = arguments[_key52];
  }

  return _builder.default.apply(void 0, ["ArrowFunctionExpression"].concat(args));
}

function ClassBody() {
  for (var _len53 = arguments.length, args = new Array(_len53), _key53 = 0; _key53 < _len53; _key53++) {
    args[_key53] = arguments[_key53];
  }

  return _builder.default.apply(void 0, ["ClassBody"].concat(args));
}

function ClassDeclaration() {
  for (var _len54 = arguments.length, args = new Array(_len54), _key54 = 0; _key54 < _len54; _key54++) {
    args[_key54] = arguments[_key54];
  }

  return _builder.default.apply(void 0, ["ClassDeclaration"].concat(args));
}

function ClassExpression() {
  for (var _len55 = arguments.length, args = new Array(_len55), _key55 = 0; _key55 < _len55; _key55++) {
    args[_key55] = arguments[_key55];
  }

  return _builder.default.apply(void 0, ["ClassExpression"].concat(args));
}

function ExportAllDeclaration() {
  for (var _len56 = arguments.length, args = new Array(_len56), _key56 = 0; _key56 < _len56; _key56++) {
    args[_key56] = arguments[_key56];
  }

  return _builder.default.apply(void 0, ["ExportAllDeclaration"].concat(args));
}

function ExportDefaultDeclaration() {
  for (var _len57 = arguments.length, args = new Array(_len57), _key57 = 0; _key57 < _len57; _key57++) {
    args[_key57] = arguments[_key57];
  }

  return _builder.default.apply(void 0, ["ExportDefaultDeclaration"].concat(args));
}

function ExportNamedDeclaration() {
  for (var _len58 = arguments.length, args = new Array(_len58), _key58 = 0; _key58 < _len58; _key58++) {
    args[_key58] = arguments[_key58];
  }

  return _builder.default.apply(void 0, ["ExportNamedDeclaration"].concat(args));
}

function ExportSpecifier() {
  for (var _len59 = arguments.length, args = new Array(_len59), _key59 = 0; _key59 < _len59; _key59++) {
    args[_key59] = arguments[_key59];
  }

  return _builder.default.apply(void 0, ["ExportSpecifier"].concat(args));
}

function ForOfStatement() {
  for (var _len60 = arguments.length, args = new Array(_len60), _key60 = 0; _key60 < _len60; _key60++) {
    args[_key60] = arguments[_key60];
  }

  return _builder.default.apply(void 0, ["ForOfStatement"].concat(args));
}

function ImportDeclaration() {
  for (var _len61 = arguments.length, args = new Array(_len61), _key61 = 0; _key61 < _len61; _key61++) {
    args[_key61] = arguments[_key61];
  }

  return _builder.default.apply(void 0, ["ImportDeclaration"].concat(args));
}

function ImportDefaultSpecifier() {
  for (var _len62 = arguments.length, args = new Array(_len62), _key62 = 0; _key62 < _len62; _key62++) {
    args[_key62] = arguments[_key62];
  }

  return _builder.default.apply(void 0, ["ImportDefaultSpecifier"].concat(args));
}

function ImportNamespaceSpecifier() {
  for (var _len63 = arguments.length, args = new Array(_len63), _key63 = 0; _key63 < _len63; _key63++) {
    args[_key63] = arguments[_key63];
  }

  return _builder.default.apply(void 0, ["ImportNamespaceSpecifier"].concat(args));
}

function ImportSpecifier() {
  for (var _len64 = arguments.length, args = new Array(_len64), _key64 = 0; _key64 < _len64; _key64++) {
    args[_key64] = arguments[_key64];
  }

  return _builder.default.apply(void 0, ["ImportSpecifier"].concat(args));
}

function MetaProperty() {
  for (var _len65 = arguments.length, args = new Array(_len65), _key65 = 0; _key65 < _len65; _key65++) {
    args[_key65] = arguments[_key65];
  }

  return _builder.default.apply(void 0, ["MetaProperty"].concat(args));
}

function ClassMethod() {
  for (var _len66 = arguments.length, args = new Array(_len66), _key66 = 0; _key66 < _len66; _key66++) {
    args[_key66] = arguments[_key66];
  }

  return _builder.default.apply(void 0, ["ClassMethod"].concat(args));
}

function ObjectPattern() {
  for (var _len67 = arguments.length, args = new Array(_len67), _key67 = 0; _key67 < _len67; _key67++) {
    args[_key67] = arguments[_key67];
  }

  return _builder.default.apply(void 0, ["ObjectPattern"].concat(args));
}

function SpreadElement() {
  for (var _len68 = arguments.length, args = new Array(_len68), _key68 = 0; _key68 < _len68; _key68++) {
    args[_key68] = arguments[_key68];
  }

  return _builder.default.apply(void 0, ["SpreadElement"].concat(args));
}

function Super() {
  for (var _len69 = arguments.length, args = new Array(_len69), _key69 = 0; _key69 < _len69; _key69++) {
    args[_key69] = arguments[_key69];
  }

  return _builder.default.apply(void 0, ["Super"].concat(args));
}

function TaggedTemplateExpression() {
  for (var _len70 = arguments.length, args = new Array(_len70), _key70 = 0; _key70 < _len70; _key70++) {
    args[_key70] = arguments[_key70];
  }

  return _builder.default.apply(void 0, ["TaggedTemplateExpression"].concat(args));
}

function TemplateElement() {
  for (var _len71 = arguments.length, args = new Array(_len71), _key71 = 0; _key71 < _len71; _key71++) {
    args[_key71] = arguments[_key71];
  }

  return _builder.default.apply(void 0, ["TemplateElement"].concat(args));
}

function TemplateLiteral() {
  for (var _len72 = arguments.length, args = new Array(_len72), _key72 = 0; _key72 < _len72; _key72++) {
    args[_key72] = arguments[_key72];
  }

  return _builder.default.apply(void 0, ["TemplateLiteral"].concat(args));
}

function YieldExpression() {
  for (var _len73 = arguments.length, args = new Array(_len73), _key73 = 0; _key73 < _len73; _key73++) {
    args[_key73] = arguments[_key73];
  }

  return _builder.default.apply(void 0, ["YieldExpression"].concat(args));
}

function AnyTypeAnnotation() {
  for (var _len74 = arguments.length, args = new Array(_len74), _key74 = 0; _key74 < _len74; _key74++) {
    args[_key74] = arguments[_key74];
  }

  return _builder.default.apply(void 0, ["AnyTypeAnnotation"].concat(args));
}

function ArrayTypeAnnotation() {
  for (var _len75 = arguments.length, args = new Array(_len75), _key75 = 0; _key75 < _len75; _key75++) {
    args[_key75] = arguments[_key75];
  }

  return _builder.default.apply(void 0, ["ArrayTypeAnnotation"].concat(args));
}

function BooleanTypeAnnotation() {
  for (var _len76 = arguments.length, args = new Array(_len76), _key76 = 0; _key76 < _len76; _key76++) {
    args[_key76] = arguments[_key76];
  }

  return _builder.default.apply(void 0, ["BooleanTypeAnnotation"].concat(args));
}

function BooleanLiteralTypeAnnotation() {
  for (var _len77 = arguments.length, args = new Array(_len77), _key77 = 0; _key77 < _len77; _key77++) {
    args[_key77] = arguments[_key77];
  }

  return _builder.default.apply(void 0, ["BooleanLiteralTypeAnnotation"].concat(args));
}

function NullLiteralTypeAnnotation() {
  for (var _len78 = arguments.length, args = new Array(_len78), _key78 = 0; _key78 < _len78; _key78++) {
    args[_key78] = arguments[_key78];
  }

  return _builder.default.apply(void 0, ["NullLiteralTypeAnnotation"].concat(args));
}

function ClassImplements() {
  for (var _len79 = arguments.length, args = new Array(_len79), _key79 = 0; _key79 < _len79; _key79++) {
    args[_key79] = arguments[_key79];
  }

  return _builder.default.apply(void 0, ["ClassImplements"].concat(args));
}

function DeclareClass() {
  for (var _len80 = arguments.length, args = new Array(_len80), _key80 = 0; _key80 < _len80; _key80++) {
    args[_key80] = arguments[_key80];
  }

  return _builder.default.apply(void 0, ["DeclareClass"].concat(args));
}

function DeclareFunction() {
  for (var _len81 = arguments.length, args = new Array(_len81), _key81 = 0; _key81 < _len81; _key81++) {
    args[_key81] = arguments[_key81];
  }

  return _builder.default.apply(void 0, ["DeclareFunction"].concat(args));
}

function DeclareInterface() {
  for (var _len82 = arguments.length, args = new Array(_len82), _key82 = 0; _key82 < _len82; _key82++) {
    args[_key82] = arguments[_key82];
  }

  return _builder.default.apply(void 0, ["DeclareInterface"].concat(args));
}

function DeclareModule() {
  for (var _len83 = arguments.length, args = new Array(_len83), _key83 = 0; _key83 < _len83; _key83++) {
    args[_key83] = arguments[_key83];
  }

  return _builder.default.apply(void 0, ["DeclareModule"].concat(args));
}

function DeclareModuleExports() {
  for (var _len84 = arguments.length, args = new Array(_len84), _key84 = 0; _key84 < _len84; _key84++) {
    args[_key84] = arguments[_key84];
  }

  return _builder.default.apply(void 0, ["DeclareModuleExports"].concat(args));
}

function DeclareTypeAlias() {
  for (var _len85 = arguments.length, args = new Array(_len85), _key85 = 0; _key85 < _len85; _key85++) {
    args[_key85] = arguments[_key85];
  }

  return _builder.default.apply(void 0, ["DeclareTypeAlias"].concat(args));
}

function DeclareOpaqueType() {
  for (var _len86 = arguments.length, args = new Array(_len86), _key86 = 0; _key86 < _len86; _key86++) {
    args[_key86] = arguments[_key86];
  }

  return _builder.default.apply(void 0, ["DeclareOpaqueType"].concat(args));
}

function DeclareVariable() {
  for (var _len87 = arguments.length, args = new Array(_len87), _key87 = 0; _key87 < _len87; _key87++) {
    args[_key87] = arguments[_key87];
  }

  return _builder.default.apply(void 0, ["DeclareVariable"].concat(args));
}

function DeclareExportDeclaration() {
  for (var _len88 = arguments.length, args = new Array(_len88), _key88 = 0; _key88 < _len88; _key88++) {
    args[_key88] = arguments[_key88];
  }

  return _builder.default.apply(void 0, ["DeclareExportDeclaration"].concat(args));
}

function DeclareExportAllDeclaration() {
  for (var _len89 = arguments.length, args = new Array(_len89), _key89 = 0; _key89 < _len89; _key89++) {
    args[_key89] = arguments[_key89];
  }

  return _builder.default.apply(void 0, ["DeclareExportAllDeclaration"].concat(args));
}

function DeclaredPredicate() {
  for (var _len90 = arguments.length, args = new Array(_len90), _key90 = 0; _key90 < _len90; _key90++) {
    args[_key90] = arguments[_key90];
  }

  return _builder.default.apply(void 0, ["DeclaredPredicate"].concat(args));
}

function ExistsTypeAnnotation() {
  for (var _len91 = arguments.length, args = new Array(_len91), _key91 = 0; _key91 < _len91; _key91++) {
    args[_key91] = arguments[_key91];
  }

  return _builder.default.apply(void 0, ["ExistsTypeAnnotation"].concat(args));
}

function FunctionTypeAnnotation() {
  for (var _len92 = arguments.length, args = new Array(_len92), _key92 = 0; _key92 < _len92; _key92++) {
    args[_key92] = arguments[_key92];
  }

  return _builder.default.apply(void 0, ["FunctionTypeAnnotation"].concat(args));
}

function FunctionTypeParam() {
  for (var _len93 = arguments.length, args = new Array(_len93), _key93 = 0; _key93 < _len93; _key93++) {
    args[_key93] = arguments[_key93];
  }

  return _builder.default.apply(void 0, ["FunctionTypeParam"].concat(args));
}

function GenericTypeAnnotation() {
  for (var _len94 = arguments.length, args = new Array(_len94), _key94 = 0; _key94 < _len94; _key94++) {
    args[_key94] = arguments[_key94];
  }

  return _builder.default.apply(void 0, ["GenericTypeAnnotation"].concat(args));
}

function InferredPredicate() {
  for (var _len95 = arguments.length, args = new Array(_len95), _key95 = 0; _key95 < _len95; _key95++) {
    args[_key95] = arguments[_key95];
  }

  return _builder.default.apply(void 0, ["InferredPredicate"].concat(args));
}

function InterfaceExtends() {
  for (var _len96 = arguments.length, args = new Array(_len96), _key96 = 0; _key96 < _len96; _key96++) {
    args[_key96] = arguments[_key96];
  }

  return _builder.default.apply(void 0, ["InterfaceExtends"].concat(args));
}

function InterfaceDeclaration() {
  for (var _len97 = arguments.length, args = new Array(_len97), _key97 = 0; _key97 < _len97; _key97++) {
    args[_key97] = arguments[_key97];
  }

  return _builder.default.apply(void 0, ["InterfaceDeclaration"].concat(args));
}

function IntersectionTypeAnnotation() {
  for (var _len98 = arguments.length, args = new Array(_len98), _key98 = 0; _key98 < _len98; _key98++) {
    args[_key98] = arguments[_key98];
  }

  return _builder.default.apply(void 0, ["IntersectionTypeAnnotation"].concat(args));
}

function MixedTypeAnnotation() {
  for (var _len99 = arguments.length, args = new Array(_len99), _key99 = 0; _key99 < _len99; _key99++) {
    args[_key99] = arguments[_key99];
  }

  return _builder.default.apply(void 0, ["MixedTypeAnnotation"].concat(args));
}

function EmptyTypeAnnotation() {
  for (var _len100 = arguments.length, args = new Array(_len100), _key100 = 0; _key100 < _len100; _key100++) {
    args[_key100] = arguments[_key100];
  }

  return _builder.default.apply(void 0, ["EmptyTypeAnnotation"].concat(args));
}

function NullableTypeAnnotation() {
  for (var _len101 = arguments.length, args = new Array(_len101), _key101 = 0; _key101 < _len101; _key101++) {
    args[_key101] = arguments[_key101];
  }

  return _builder.default.apply(void 0, ["NullableTypeAnnotation"].concat(args));
}

function NumberLiteralTypeAnnotation() {
  for (var _len102 = arguments.length, args = new Array(_len102), _key102 = 0; _key102 < _len102; _key102++) {
    args[_key102] = arguments[_key102];
  }

  return _builder.default.apply(void 0, ["NumberLiteralTypeAnnotation"].concat(args));
}

function NumberTypeAnnotation() {
  for (var _len103 = arguments.length, args = new Array(_len103), _key103 = 0; _key103 < _len103; _key103++) {
    args[_key103] = arguments[_key103];
  }

  return _builder.default.apply(void 0, ["NumberTypeAnnotation"].concat(args));
}

function ObjectTypeAnnotation() {
  for (var _len104 = arguments.length, args = new Array(_len104), _key104 = 0; _key104 < _len104; _key104++) {
    args[_key104] = arguments[_key104];
  }

  return _builder.default.apply(void 0, ["ObjectTypeAnnotation"].concat(args));
}

function ObjectTypeCallProperty() {
  for (var _len105 = arguments.length, args = new Array(_len105), _key105 = 0; _key105 < _len105; _key105++) {
    args[_key105] = arguments[_key105];
  }

  return _builder.default.apply(void 0, ["ObjectTypeCallProperty"].concat(args));
}

function ObjectTypeIndexer() {
  for (var _len106 = arguments.length, args = new Array(_len106), _key106 = 0; _key106 < _len106; _key106++) {
    args[_key106] = arguments[_key106];
  }

  return _builder.default.apply(void 0, ["ObjectTypeIndexer"].concat(args));
}

function ObjectTypeProperty() {
  for (var _len107 = arguments.length, args = new Array(_len107), _key107 = 0; _key107 < _len107; _key107++) {
    args[_key107] = arguments[_key107];
  }

  return _builder.default.apply(void 0, ["ObjectTypeProperty"].concat(args));
}

function ObjectTypeSpreadProperty() {
  for (var _len108 = arguments.length, args = new Array(_len108), _key108 = 0; _key108 < _len108; _key108++) {
    args[_key108] = arguments[_key108];
  }

  return _builder.default.apply(void 0, ["ObjectTypeSpreadProperty"].concat(args));
}

function OpaqueType() {
  for (var _len109 = arguments.length, args = new Array(_len109), _key109 = 0; _key109 < _len109; _key109++) {
    args[_key109] = arguments[_key109];
  }

  return _builder.default.apply(void 0, ["OpaqueType"].concat(args));
}

function QualifiedTypeIdentifier() {
  for (var _len110 = arguments.length, args = new Array(_len110), _key110 = 0; _key110 < _len110; _key110++) {
    args[_key110] = arguments[_key110];
  }

  return _builder.default.apply(void 0, ["QualifiedTypeIdentifier"].concat(args));
}

function StringLiteralTypeAnnotation() {
  for (var _len111 = arguments.length, args = new Array(_len111), _key111 = 0; _key111 < _len111; _key111++) {
    args[_key111] = arguments[_key111];
  }

  return _builder.default.apply(void 0, ["StringLiteralTypeAnnotation"].concat(args));
}

function StringTypeAnnotation() {
  for (var _len112 = arguments.length, args = new Array(_len112), _key112 = 0; _key112 < _len112; _key112++) {
    args[_key112] = arguments[_key112];
  }

  return _builder.default.apply(void 0, ["StringTypeAnnotation"].concat(args));
}

function ThisTypeAnnotation() {
  for (var _len113 = arguments.length, args = new Array(_len113), _key113 = 0; _key113 < _len113; _key113++) {
    args[_key113] = arguments[_key113];
  }

  return _builder.default.apply(void 0, ["ThisTypeAnnotation"].concat(args));
}

function TupleTypeAnnotation() {
  for (var _len114 = arguments.length, args = new Array(_len114), _key114 = 0; _key114 < _len114; _key114++) {
    args[_key114] = arguments[_key114];
  }

  return _builder.default.apply(void 0, ["TupleTypeAnnotation"].concat(args));
}

function TypeofTypeAnnotation() {
  for (var _len115 = arguments.length, args = new Array(_len115), _key115 = 0; _key115 < _len115; _key115++) {
    args[_key115] = arguments[_key115];
  }

  return _builder.default.apply(void 0, ["TypeofTypeAnnotation"].concat(args));
}

function TypeAlias() {
  for (var _len116 = arguments.length, args = new Array(_len116), _key116 = 0; _key116 < _len116; _key116++) {
    args[_key116] = arguments[_key116];
  }

  return _builder.default.apply(void 0, ["TypeAlias"].concat(args));
}

function TypeAnnotation() {
  for (var _len117 = arguments.length, args = new Array(_len117), _key117 = 0; _key117 < _len117; _key117++) {
    args[_key117] = arguments[_key117];
  }

  return _builder.default.apply(void 0, ["TypeAnnotation"].concat(args));
}

function TypeCastExpression() {
  for (var _len118 = arguments.length, args = new Array(_len118), _key118 = 0; _key118 < _len118; _key118++) {
    args[_key118] = arguments[_key118];
  }

  return _builder.default.apply(void 0, ["TypeCastExpression"].concat(args));
}

function TypeParameter() {
  for (var _len119 = arguments.length, args = new Array(_len119), _key119 = 0; _key119 < _len119; _key119++) {
    args[_key119] = arguments[_key119];
  }

  return _builder.default.apply(void 0, ["TypeParameter"].concat(args));
}

function TypeParameterDeclaration() {
  for (var _len120 = arguments.length, args = new Array(_len120), _key120 = 0; _key120 < _len120; _key120++) {
    args[_key120] = arguments[_key120];
  }

  return _builder.default.apply(void 0, ["TypeParameterDeclaration"].concat(args));
}

function TypeParameterInstantiation() {
  for (var _len121 = arguments.length, args = new Array(_len121), _key121 = 0; _key121 < _len121; _key121++) {
    args[_key121] = arguments[_key121];
  }

  return _builder.default.apply(void 0, ["TypeParameterInstantiation"].concat(args));
}

function UnionTypeAnnotation() {
  for (var _len122 = arguments.length, args = new Array(_len122), _key122 = 0; _key122 < _len122; _key122++) {
    args[_key122] = arguments[_key122];
  }

  return _builder.default.apply(void 0, ["UnionTypeAnnotation"].concat(args));
}

function Variance() {
  for (var _len123 = arguments.length, args = new Array(_len123), _key123 = 0; _key123 < _len123; _key123++) {
    args[_key123] = arguments[_key123];
  }

  return _builder.default.apply(void 0, ["Variance"].concat(args));
}

function VoidTypeAnnotation() {
  for (var _len124 = arguments.length, args = new Array(_len124), _key124 = 0; _key124 < _len124; _key124++) {
    args[_key124] = arguments[_key124];
  }

  return _builder.default.apply(void 0, ["VoidTypeAnnotation"].concat(args));
}

function JSXAttribute() {
  for (var _len125 = arguments.length, args = new Array(_len125), _key125 = 0; _key125 < _len125; _key125++) {
    args[_key125] = arguments[_key125];
  }

  return _builder.default.apply(void 0, ["JSXAttribute"].concat(args));
}

function JSXClosingElement() {
  for (var _len126 = arguments.length, args = new Array(_len126), _key126 = 0; _key126 < _len126; _key126++) {
    args[_key126] = arguments[_key126];
  }

  return _builder.default.apply(void 0, ["JSXClosingElement"].concat(args));
}

function JSXElement() {
  for (var _len127 = arguments.length, args = new Array(_len127), _key127 = 0; _key127 < _len127; _key127++) {
    args[_key127] = arguments[_key127];
  }

  return _builder.default.apply(void 0, ["JSXElement"].concat(args));
}

function JSXEmptyExpression() {
  for (var _len128 = arguments.length, args = new Array(_len128), _key128 = 0; _key128 < _len128; _key128++) {
    args[_key128] = arguments[_key128];
  }

  return _builder.default.apply(void 0, ["JSXEmptyExpression"].concat(args));
}

function JSXExpressionContainer() {
  for (var _len129 = arguments.length, args = new Array(_len129), _key129 = 0; _key129 < _len129; _key129++) {
    args[_key129] = arguments[_key129];
  }

  return _builder.default.apply(void 0, ["JSXExpressionContainer"].concat(args));
}

function JSXSpreadChild() {
  for (var _len130 = arguments.length, args = new Array(_len130), _key130 = 0; _key130 < _len130; _key130++) {
    args[_key130] = arguments[_key130];
  }

  return _builder.default.apply(void 0, ["JSXSpreadChild"].concat(args));
}

function JSXIdentifier() {
  for (var _len131 = arguments.length, args = new Array(_len131), _key131 = 0; _key131 < _len131; _key131++) {
    args[_key131] = arguments[_key131];
  }

  return _builder.default.apply(void 0, ["JSXIdentifier"].concat(args));
}

function JSXMemberExpression() {
  for (var _len132 = arguments.length, args = new Array(_len132), _key132 = 0; _key132 < _len132; _key132++) {
    args[_key132] = arguments[_key132];
  }

  return _builder.default.apply(void 0, ["JSXMemberExpression"].concat(args));
}

function JSXNamespacedName() {
  for (var _len133 = arguments.length, args = new Array(_len133), _key133 = 0; _key133 < _len133; _key133++) {
    args[_key133] = arguments[_key133];
  }

  return _builder.default.apply(void 0, ["JSXNamespacedName"].concat(args));
}

function JSXOpeningElement() {
  for (var _len134 = arguments.length, args = new Array(_len134), _key134 = 0; _key134 < _len134; _key134++) {
    args[_key134] = arguments[_key134];
  }

  return _builder.default.apply(void 0, ["JSXOpeningElement"].concat(args));
}

function JSXSpreadAttribute() {
  for (var _len135 = arguments.length, args = new Array(_len135), _key135 = 0; _key135 < _len135; _key135++) {
    args[_key135] = arguments[_key135];
  }

  return _builder.default.apply(void 0, ["JSXSpreadAttribute"].concat(args));
}

function JSXText() {
  for (var _len136 = arguments.length, args = new Array(_len136), _key136 = 0; _key136 < _len136; _key136++) {
    args[_key136] = arguments[_key136];
  }

  return _builder.default.apply(void 0, ["JSXText"].concat(args));
}

function JSXFragment() {
  for (var _len137 = arguments.length, args = new Array(_len137), _key137 = 0; _key137 < _len137; _key137++) {
    args[_key137] = arguments[_key137];
  }

  return _builder.default.apply(void 0, ["JSXFragment"].concat(args));
}

function JSXOpeningFragment() {
  for (var _len138 = arguments.length, args = new Array(_len138), _key138 = 0; _key138 < _len138; _key138++) {
    args[_key138] = arguments[_key138];
  }

  return _builder.default.apply(void 0, ["JSXOpeningFragment"].concat(args));
}

function JSXClosingFragment() {
  for (var _len139 = arguments.length, args = new Array(_len139), _key139 = 0; _key139 < _len139; _key139++) {
    args[_key139] = arguments[_key139];
  }

  return _builder.default.apply(void 0, ["JSXClosingFragment"].concat(args));
}

function Noop() {
  for (var _len140 = arguments.length, args = new Array(_len140), _key140 = 0; _key140 < _len140; _key140++) {
    args[_key140] = arguments[_key140];
  }

  return _builder.default.apply(void 0, ["Noop"].concat(args));
}

function ParenthesizedExpression() {
  for (var _len141 = arguments.length, args = new Array(_len141), _key141 = 0; _key141 < _len141; _key141++) {
    args[_key141] = arguments[_key141];
  }

  return _builder.default.apply(void 0, ["ParenthesizedExpression"].concat(args));
}

function AwaitExpression() {
  for (var _len142 = arguments.length, args = new Array(_len142), _key142 = 0; _key142 < _len142; _key142++) {
    args[_key142] = arguments[_key142];
  }

  return _builder.default.apply(void 0, ["AwaitExpression"].concat(args));
}

function BindExpression() {
  for (var _len143 = arguments.length, args = new Array(_len143), _key143 = 0; _key143 < _len143; _key143++) {
    args[_key143] = arguments[_key143];
  }

  return _builder.default.apply(void 0, ["BindExpression"].concat(args));
}

function ClassProperty() {
  for (var _len144 = arguments.length, args = new Array(_len144), _key144 = 0; _key144 < _len144; _key144++) {
    args[_key144] = arguments[_key144];
  }

  return _builder.default.apply(void 0, ["ClassProperty"].concat(args));
}

function OptionalMemberExpression() {
  for (var _len145 = arguments.length, args = new Array(_len145), _key145 = 0; _key145 < _len145; _key145++) {
    args[_key145] = arguments[_key145];
  }

  return _builder.default.apply(void 0, ["OptionalMemberExpression"].concat(args));
}

function OptionalCallExpression() {
  for (var _len146 = arguments.length, args = new Array(_len146), _key146 = 0; _key146 < _len146; _key146++) {
    args[_key146] = arguments[_key146];
  }

  return _builder.default.apply(void 0, ["OptionalCallExpression"].concat(args));
}

function Import() {
  for (var _len147 = arguments.length, args = new Array(_len147), _key147 = 0; _key147 < _len147; _key147++) {
    args[_key147] = arguments[_key147];
  }

  return _builder.default.apply(void 0, ["Import"].concat(args));
}

function Decorator() {
  for (var _len148 = arguments.length, args = new Array(_len148), _key148 = 0; _key148 < _len148; _key148++) {
    args[_key148] = arguments[_key148];
  }

  return _builder.default.apply(void 0, ["Decorator"].concat(args));
}

function DoExpression() {
  for (var _len149 = arguments.length, args = new Array(_len149), _key149 = 0; _key149 < _len149; _key149++) {
    args[_key149] = arguments[_key149];
  }

  return _builder.default.apply(void 0, ["DoExpression"].concat(args));
}

function ExportDefaultSpecifier() {
  for (var _len150 = arguments.length, args = new Array(_len150), _key150 = 0; _key150 < _len150; _key150++) {
    args[_key150] = arguments[_key150];
  }

  return _builder.default.apply(void 0, ["ExportDefaultSpecifier"].concat(args));
}

function ExportNamespaceSpecifier() {
  for (var _len151 = arguments.length, args = new Array(_len151), _key151 = 0; _key151 < _len151; _key151++) {
    args[_key151] = arguments[_key151];
  }

  return _builder.default.apply(void 0, ["ExportNamespaceSpecifier"].concat(args));
}

function TSParameterProperty() {
  for (var _len152 = arguments.length, args = new Array(_len152), _key152 = 0; _key152 < _len152; _key152++) {
    args[_key152] = arguments[_key152];
  }

  return _builder.default.apply(void 0, ["TSParameterProperty"].concat(args));
}

function TSDeclareFunction() {
  for (var _len153 = arguments.length, args = new Array(_len153), _key153 = 0; _key153 < _len153; _key153++) {
    args[_key153] = arguments[_key153];
  }

  return _builder.default.apply(void 0, ["TSDeclareFunction"].concat(args));
}

function TSDeclareMethod() {
  for (var _len154 = arguments.length, args = new Array(_len154), _key154 = 0; _key154 < _len154; _key154++) {
    args[_key154] = arguments[_key154];
  }

  return _builder.default.apply(void 0, ["TSDeclareMethod"].concat(args));
}

function TSQualifiedName() {
  for (var _len155 = arguments.length, args = new Array(_len155), _key155 = 0; _key155 < _len155; _key155++) {
    args[_key155] = arguments[_key155];
  }

  return _builder.default.apply(void 0, ["TSQualifiedName"].concat(args));
}

function TSCallSignatureDeclaration() {
  for (var _len156 = arguments.length, args = new Array(_len156), _key156 = 0; _key156 < _len156; _key156++) {
    args[_key156] = arguments[_key156];
  }

  return _builder.default.apply(void 0, ["TSCallSignatureDeclaration"].concat(args));
}

function TSConstructSignatureDeclaration() {
  for (var _len157 = arguments.length, args = new Array(_len157), _key157 = 0; _key157 < _len157; _key157++) {
    args[_key157] = arguments[_key157];
  }

  return _builder.default.apply(void 0, ["TSConstructSignatureDeclaration"].concat(args));
}

function TSPropertySignature() {
  for (var _len158 = arguments.length, args = new Array(_len158), _key158 = 0; _key158 < _len158; _key158++) {
    args[_key158] = arguments[_key158];
  }

  return _builder.default.apply(void 0, ["TSPropertySignature"].concat(args));
}

function TSMethodSignature() {
  for (var _len159 = arguments.length, args = new Array(_len159), _key159 = 0; _key159 < _len159; _key159++) {
    args[_key159] = arguments[_key159];
  }

  return _builder.default.apply(void 0, ["TSMethodSignature"].concat(args));
}

function TSIndexSignature() {
  for (var _len160 = arguments.length, args = new Array(_len160), _key160 = 0; _key160 < _len160; _key160++) {
    args[_key160] = arguments[_key160];
  }

  return _builder.default.apply(void 0, ["TSIndexSignature"].concat(args));
}

function TSAnyKeyword() {
  for (var _len161 = arguments.length, args = new Array(_len161), _key161 = 0; _key161 < _len161; _key161++) {
    args[_key161] = arguments[_key161];
  }

  return _builder.default.apply(void 0, ["TSAnyKeyword"].concat(args));
}

function TSNumberKeyword() {
  for (var _len162 = arguments.length, args = new Array(_len162), _key162 = 0; _key162 < _len162; _key162++) {
    args[_key162] = arguments[_key162];
  }

  return _builder.default.apply(void 0, ["TSNumberKeyword"].concat(args));
}

function TSObjectKeyword() {
  for (var _len163 = arguments.length, args = new Array(_len163), _key163 = 0; _key163 < _len163; _key163++) {
    args[_key163] = arguments[_key163];
  }

  return _builder.default.apply(void 0, ["TSObjectKeyword"].concat(args));
}

function TSBooleanKeyword() {
  for (var _len164 = arguments.length, args = new Array(_len164), _key164 = 0; _key164 < _len164; _key164++) {
    args[_key164] = arguments[_key164];
  }

  return _builder.default.apply(void 0, ["TSBooleanKeyword"].concat(args));
}

function TSStringKeyword() {
  for (var _len165 = arguments.length, args = new Array(_len165), _key165 = 0; _key165 < _len165; _key165++) {
    args[_key165] = arguments[_key165];
  }

  return _builder.default.apply(void 0, ["TSStringKeyword"].concat(args));
}

function TSSymbolKeyword() {
  for (var _len166 = arguments.length, args = new Array(_len166), _key166 = 0; _key166 < _len166; _key166++) {
    args[_key166] = arguments[_key166];
  }

  return _builder.default.apply(void 0, ["TSSymbolKeyword"].concat(args));
}

function TSVoidKeyword() {
  for (var _len167 = arguments.length, args = new Array(_len167), _key167 = 0; _key167 < _len167; _key167++) {
    args[_key167] = arguments[_key167];
  }

  return _builder.default.apply(void 0, ["TSVoidKeyword"].concat(args));
}

function TSUndefinedKeyword() {
  for (var _len168 = arguments.length, args = new Array(_len168), _key168 = 0; _key168 < _len168; _key168++) {
    args[_key168] = arguments[_key168];
  }

  return _builder.default.apply(void 0, ["TSUndefinedKeyword"].concat(args));
}

function TSNullKeyword() {
  for (var _len169 = arguments.length, args = new Array(_len169), _key169 = 0; _key169 < _len169; _key169++) {
    args[_key169] = arguments[_key169];
  }

  return _builder.default.apply(void 0, ["TSNullKeyword"].concat(args));
}

function TSNeverKeyword() {
  for (var _len170 = arguments.length, args = new Array(_len170), _key170 = 0; _key170 < _len170; _key170++) {
    args[_key170] = arguments[_key170];
  }

  return _builder.default.apply(void 0, ["TSNeverKeyword"].concat(args));
}

function TSThisType() {
  for (var _len171 = arguments.length, args = new Array(_len171), _key171 = 0; _key171 < _len171; _key171++) {
    args[_key171] = arguments[_key171];
  }

  return _builder.default.apply(void 0, ["TSThisType"].concat(args));
}

function TSFunctionType() {
  for (var _len172 = arguments.length, args = new Array(_len172), _key172 = 0; _key172 < _len172; _key172++) {
    args[_key172] = arguments[_key172];
  }

  return _builder.default.apply(void 0, ["TSFunctionType"].concat(args));
}

function TSConstructorType() {
  for (var _len173 = arguments.length, args = new Array(_len173), _key173 = 0; _key173 < _len173; _key173++) {
    args[_key173] = arguments[_key173];
  }

  return _builder.default.apply(void 0, ["TSConstructorType"].concat(args));
}

function TSTypeReference() {
  for (var _len174 = arguments.length, args = new Array(_len174), _key174 = 0; _key174 < _len174; _key174++) {
    args[_key174] = arguments[_key174];
  }

  return _builder.default.apply(void 0, ["TSTypeReference"].concat(args));
}

function TSTypePredicate() {
  for (var _len175 = arguments.length, args = new Array(_len175), _key175 = 0; _key175 < _len175; _key175++) {
    args[_key175] = arguments[_key175];
  }

  return _builder.default.apply(void 0, ["TSTypePredicate"].concat(args));
}

function TSTypeQuery() {
  for (var _len176 = arguments.length, args = new Array(_len176), _key176 = 0; _key176 < _len176; _key176++) {
    args[_key176] = arguments[_key176];
  }

  return _builder.default.apply(void 0, ["TSTypeQuery"].concat(args));
}

function TSTypeLiteral() {
  for (var _len177 = arguments.length, args = new Array(_len177), _key177 = 0; _key177 < _len177; _key177++) {
    args[_key177] = arguments[_key177];
  }

  return _builder.default.apply(void 0, ["TSTypeLiteral"].concat(args));
}

function TSArrayType() {
  for (var _len178 = arguments.length, args = new Array(_len178), _key178 = 0; _key178 < _len178; _key178++) {
    args[_key178] = arguments[_key178];
  }

  return _builder.default.apply(void 0, ["TSArrayType"].concat(args));
}

function TSTupleType() {
  for (var _len179 = arguments.length, args = new Array(_len179), _key179 = 0; _key179 < _len179; _key179++) {
    args[_key179] = arguments[_key179];
  }

  return _builder.default.apply(void 0, ["TSTupleType"].concat(args));
}

function TSUnionType() {
  for (var _len180 = arguments.length, args = new Array(_len180), _key180 = 0; _key180 < _len180; _key180++) {
    args[_key180] = arguments[_key180];
  }

  return _builder.default.apply(void 0, ["TSUnionType"].concat(args));
}

function TSIntersectionType() {
  for (var _len181 = arguments.length, args = new Array(_len181), _key181 = 0; _key181 < _len181; _key181++) {
    args[_key181] = arguments[_key181];
  }

  return _builder.default.apply(void 0, ["TSIntersectionType"].concat(args));
}

function TSConditionalType() {
  for (var _len182 = arguments.length, args = new Array(_len182), _key182 = 0; _key182 < _len182; _key182++) {
    args[_key182] = arguments[_key182];
  }

  return _builder.default.apply(void 0, ["TSConditionalType"].concat(args));
}

function TSInferType() {
  for (var _len183 = arguments.length, args = new Array(_len183), _key183 = 0; _key183 < _len183; _key183++) {
    args[_key183] = arguments[_key183];
  }

  return _builder.default.apply(void 0, ["TSInferType"].concat(args));
}

function TSParenthesizedType() {
  for (var _len184 = arguments.length, args = new Array(_len184), _key184 = 0; _key184 < _len184; _key184++) {
    args[_key184] = arguments[_key184];
  }

  return _builder.default.apply(void 0, ["TSParenthesizedType"].concat(args));
}

function TSTypeOperator() {
  for (var _len185 = arguments.length, args = new Array(_len185), _key185 = 0; _key185 < _len185; _key185++) {
    args[_key185] = arguments[_key185];
  }

  return _builder.default.apply(void 0, ["TSTypeOperator"].concat(args));
}

function TSIndexedAccessType() {
  for (var _len186 = arguments.length, args = new Array(_len186), _key186 = 0; _key186 < _len186; _key186++) {
    args[_key186] = arguments[_key186];
  }

  return _builder.default.apply(void 0, ["TSIndexedAccessType"].concat(args));
}

function TSMappedType() {
  for (var _len187 = arguments.length, args = new Array(_len187), _key187 = 0; _key187 < _len187; _key187++) {
    args[_key187] = arguments[_key187];
  }

  return _builder.default.apply(void 0, ["TSMappedType"].concat(args));
}

function TSLiteralType() {
  for (var _len188 = arguments.length, args = new Array(_len188), _key188 = 0; _key188 < _len188; _key188++) {
    args[_key188] = arguments[_key188];
  }

  return _builder.default.apply(void 0, ["TSLiteralType"].concat(args));
}

function TSExpressionWithTypeArguments() {
  for (var _len189 = arguments.length, args = new Array(_len189), _key189 = 0; _key189 < _len189; _key189++) {
    args[_key189] = arguments[_key189];
  }

  return _builder.default.apply(void 0, ["TSExpressionWithTypeArguments"].concat(args));
}

function TSInterfaceDeclaration() {
  for (var _len190 = arguments.length, args = new Array(_len190), _key190 = 0; _key190 < _len190; _key190++) {
    args[_key190] = arguments[_key190];
  }

  return _builder.default.apply(void 0, ["TSInterfaceDeclaration"].concat(args));
}

function TSInterfaceBody() {
  for (var _len191 = arguments.length, args = new Array(_len191), _key191 = 0; _key191 < _len191; _key191++) {
    args[_key191] = arguments[_key191];
  }

  return _builder.default.apply(void 0, ["TSInterfaceBody"].concat(args));
}

function TSTypeAliasDeclaration() {
  for (var _len192 = arguments.length, args = new Array(_len192), _key192 = 0; _key192 < _len192; _key192++) {
    args[_key192] = arguments[_key192];
  }

  return _builder.default.apply(void 0, ["TSTypeAliasDeclaration"].concat(args));
}

function TSAsExpression() {
  for (var _len193 = arguments.length, args = new Array(_len193), _key193 = 0; _key193 < _len193; _key193++) {
    args[_key193] = arguments[_key193];
  }

  return _builder.default.apply(void 0, ["TSAsExpression"].concat(args));
}

function TSTypeAssertion() {
  for (var _len194 = arguments.length, args = new Array(_len194), _key194 = 0; _key194 < _len194; _key194++) {
    args[_key194] = arguments[_key194];
  }

  return _builder.default.apply(void 0, ["TSTypeAssertion"].concat(args));
}

function TSEnumDeclaration() {
  for (var _len195 = arguments.length, args = new Array(_len195), _key195 = 0; _key195 < _len195; _key195++) {
    args[_key195] = arguments[_key195];
  }

  return _builder.default.apply(void 0, ["TSEnumDeclaration"].concat(args));
}

function TSEnumMember() {
  for (var _len196 = arguments.length, args = new Array(_len196), _key196 = 0; _key196 < _len196; _key196++) {
    args[_key196] = arguments[_key196];
  }

  return _builder.default.apply(void 0, ["TSEnumMember"].concat(args));
}

function TSModuleDeclaration() {
  for (var _len197 = arguments.length, args = new Array(_len197), _key197 = 0; _key197 < _len197; _key197++) {
    args[_key197] = arguments[_key197];
  }

  return _builder.default.apply(void 0, ["TSModuleDeclaration"].concat(args));
}

function TSModuleBlock() {
  for (var _len198 = arguments.length, args = new Array(_len198), _key198 = 0; _key198 < _len198; _key198++) {
    args[_key198] = arguments[_key198];
  }

  return _builder.default.apply(void 0, ["TSModuleBlock"].concat(args));
}

function TSImportEqualsDeclaration() {
  for (var _len199 = arguments.length, args = new Array(_len199), _key199 = 0; _key199 < _len199; _key199++) {
    args[_key199] = arguments[_key199];
  }

  return _builder.default.apply(void 0, ["TSImportEqualsDeclaration"].concat(args));
}

function TSExternalModuleReference() {
  for (var _len200 = arguments.length, args = new Array(_len200), _key200 = 0; _key200 < _len200; _key200++) {
    args[_key200] = arguments[_key200];
  }

  return _builder.default.apply(void 0, ["TSExternalModuleReference"].concat(args));
}

function TSNonNullExpression() {
  for (var _len201 = arguments.length, args = new Array(_len201), _key201 = 0; _key201 < _len201; _key201++) {
    args[_key201] = arguments[_key201];
  }

  return _builder.default.apply(void 0, ["TSNonNullExpression"].concat(args));
}

function TSExportAssignment() {
  for (var _len202 = arguments.length, args = new Array(_len202), _key202 = 0; _key202 < _len202; _key202++) {
    args[_key202] = arguments[_key202];
  }

  return _builder.default.apply(void 0, ["TSExportAssignment"].concat(args));
}

function TSNamespaceExportDeclaration() {
  for (var _len203 = arguments.length, args = new Array(_len203), _key203 = 0; _key203 < _len203; _key203++) {
    args[_key203] = arguments[_key203];
  }

  return _builder.default.apply(void 0, ["TSNamespaceExportDeclaration"].concat(args));
}

function TSTypeAnnotation() {
  for (var _len204 = arguments.length, args = new Array(_len204), _key204 = 0; _key204 < _len204; _key204++) {
    args[_key204] = arguments[_key204];
  }

  return _builder.default.apply(void 0, ["TSTypeAnnotation"].concat(args));
}

function TSTypeParameterInstantiation() {
  for (var _len205 = arguments.length, args = new Array(_len205), _key205 = 0; _key205 < _len205; _key205++) {
    args[_key205] = arguments[_key205];
  }

  return _builder.default.apply(void 0, ["TSTypeParameterInstantiation"].concat(args));
}

function TSTypeParameterDeclaration() {
  for (var _len206 = arguments.length, args = new Array(_len206), _key206 = 0; _key206 < _len206; _key206++) {
    args[_key206] = arguments[_key206];
  }

  return _builder.default.apply(void 0, ["TSTypeParameterDeclaration"].concat(args));
}

function TSTypeParameter() {
  for (var _len207 = arguments.length, args = new Array(_len207), _key207 = 0; _key207 < _len207; _key207++) {
    args[_key207] = arguments[_key207];
  }

  return _builder.default.apply(void 0, ["TSTypeParameter"].concat(args));
}

function NumberLiteral() {
  console.trace("The node type NumberLiteral has been renamed to NumericLiteral");

  for (var _len208 = arguments.length, args = new Array(_len208), _key208 = 0; _key208 < _len208; _key208++) {
    args[_key208] = arguments[_key208];
  }

  return NumberLiteral.apply(void 0, ["NumberLiteral"].concat(args));
}

function RegexLiteral() {
  console.trace("The node type RegexLiteral has been renamed to RegExpLiteral");

  for (var _len209 = arguments.length, args = new Array(_len209), _key209 = 0; _key209 < _len209; _key209++) {
    args[_key209] = arguments[_key209];
  }

  return RegexLiteral.apply(void 0, ["RegexLiteral"].concat(args));
}

function RestProperty() {
  console.trace("The node type RestProperty has been renamed to RestElement");

  for (var _len210 = arguments.length, args = new Array(_len210), _key210 = 0; _key210 < _len210; _key210++) {
    args[_key210] = arguments[_key210];
  }

  return RestProperty.apply(void 0, ["RestProperty"].concat(args));
}

function SpreadProperty() {
  console.trace("The node type SpreadProperty has been renamed to SpreadElement");

  for (var _len211 = arguments.length, args = new Array(_len211), _key211 = 0; _key211 < _len211; _key211++) {
    args[_key211] = arguments[_key211];
  }

  return SpreadProperty.apply(void 0, ["SpreadProperty"].concat(args));
}
}, function(modId) { var map = {"../builder":1651912610429}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610429, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = builder;

function _clone() {
  var data = _interopRequireDefault(require("lodash/clone"));

  _clone = function _clone() {
    return data;
  };

  return data;
}

var _definitions = require("../definitions");

var _validate = _interopRequireDefault(require("../validators/validate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function builder(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var keys = _definitions.BUILDER_KEYS[type];
  var countArgs = args.length;

  if (countArgs > keys.length) {
    throw new Error(type + ": Too many arguments passed. Received " + countArgs + " but can receive no more than " + keys.length);
  }

  var node = {
    type: type
  };
  var i = 0;
  keys.forEach(function (key) {
    var field = _definitions.NODE_FIELDS[type][key];
    var arg;
    if (i < countArgs) arg = args[i];
    if (arg === undefined) arg = (0, _clone().default)(field.default);
    node[key] = arg;
    i++;
  });

  for (var key in node) {
    (0, _validate.default)(node, key, node[key]);
  }

  return node;
}
}, function(modId) { var map = {"../definitions":1651912610414,"../validators/validate":1651912610430}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610430, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = validate;

var _definitions = require("../definitions");

function validate(node, key, val) {
  if (!node) return;
  var fields = _definitions.NODE_FIELDS[node.type];
  if (!fields) return;
  var field = fields[key];
  if (!field || !field.validate) return;
  if (field.optional && val == null) return;
  field.validate(node, key, val);
}
}, function(modId) { var map = {"../definitions":1651912610414}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610431, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = assertNode;

var _isNode = _interopRequireDefault(require("../validators/isNode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function assertNode(node) {
  if (!(0, _isNode.default)(node)) {
    var type = node && node.type || JSON.stringify(node);
    throw new TypeError("Not a valid node of type \"" + type + "\"");
  }
}
}, function(modId) { var map = {"../validators/isNode":1651912610432}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610432, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isNode;

var _definitions = require("../definitions");

function isNode(node) {
  return !!(node && _definitions.VISITOR_KEYS[node.type]);
}
}, function(modId) { var map = {"../definitions":1651912610414}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610433, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assertArrayExpression = assertArrayExpression;
exports.assertAssignmentExpression = assertAssignmentExpression;
exports.assertBinaryExpression = assertBinaryExpression;
exports.assertDirective = assertDirective;
exports.assertDirectiveLiteral = assertDirectiveLiteral;
exports.assertBlockStatement = assertBlockStatement;
exports.assertBreakStatement = assertBreakStatement;
exports.assertCallExpression = assertCallExpression;
exports.assertCatchClause = assertCatchClause;
exports.assertConditionalExpression = assertConditionalExpression;
exports.assertContinueStatement = assertContinueStatement;
exports.assertDebuggerStatement = assertDebuggerStatement;
exports.assertDoWhileStatement = assertDoWhileStatement;
exports.assertEmptyStatement = assertEmptyStatement;
exports.assertExpressionStatement = assertExpressionStatement;
exports.assertFile = assertFile;
exports.assertForInStatement = assertForInStatement;
exports.assertForStatement = assertForStatement;
exports.assertFunctionDeclaration = assertFunctionDeclaration;
exports.assertFunctionExpression = assertFunctionExpression;
exports.assertIdentifier = assertIdentifier;
exports.assertIfStatement = assertIfStatement;
exports.assertLabeledStatement = assertLabeledStatement;
exports.assertStringLiteral = assertStringLiteral;
exports.assertNumericLiteral = assertNumericLiteral;
exports.assertNullLiteral = assertNullLiteral;
exports.assertBooleanLiteral = assertBooleanLiteral;
exports.assertRegExpLiteral = assertRegExpLiteral;
exports.assertLogicalExpression = assertLogicalExpression;
exports.assertMemberExpression = assertMemberExpression;
exports.assertNewExpression = assertNewExpression;
exports.assertProgram = assertProgram;
exports.assertObjectExpression = assertObjectExpression;
exports.assertObjectMethod = assertObjectMethod;
exports.assertObjectProperty = assertObjectProperty;
exports.assertRestElement = assertRestElement;
exports.assertReturnStatement = assertReturnStatement;
exports.assertSequenceExpression = assertSequenceExpression;
exports.assertSwitchCase = assertSwitchCase;
exports.assertSwitchStatement = assertSwitchStatement;
exports.assertThisExpression = assertThisExpression;
exports.assertThrowStatement = assertThrowStatement;
exports.assertTryStatement = assertTryStatement;
exports.assertUnaryExpression = assertUnaryExpression;
exports.assertUpdateExpression = assertUpdateExpression;
exports.assertVariableDeclaration = assertVariableDeclaration;
exports.assertVariableDeclarator = assertVariableDeclarator;
exports.assertWhileStatement = assertWhileStatement;
exports.assertWithStatement = assertWithStatement;
exports.assertAssignmentPattern = assertAssignmentPattern;
exports.assertArrayPattern = assertArrayPattern;
exports.assertArrowFunctionExpression = assertArrowFunctionExpression;
exports.assertClassBody = assertClassBody;
exports.assertClassDeclaration = assertClassDeclaration;
exports.assertClassExpression = assertClassExpression;
exports.assertExportAllDeclaration = assertExportAllDeclaration;
exports.assertExportDefaultDeclaration = assertExportDefaultDeclaration;
exports.assertExportNamedDeclaration = assertExportNamedDeclaration;
exports.assertExportSpecifier = assertExportSpecifier;
exports.assertForOfStatement = assertForOfStatement;
exports.assertImportDeclaration = assertImportDeclaration;
exports.assertImportDefaultSpecifier = assertImportDefaultSpecifier;
exports.assertImportNamespaceSpecifier = assertImportNamespaceSpecifier;
exports.assertImportSpecifier = assertImportSpecifier;
exports.assertMetaProperty = assertMetaProperty;
exports.assertClassMethod = assertClassMethod;
exports.assertObjectPattern = assertObjectPattern;
exports.assertSpreadElement = assertSpreadElement;
exports.assertSuper = assertSuper;
exports.assertTaggedTemplateExpression = assertTaggedTemplateExpression;
exports.assertTemplateElement = assertTemplateElement;
exports.assertTemplateLiteral = assertTemplateLiteral;
exports.assertYieldExpression = assertYieldExpression;
exports.assertAnyTypeAnnotation = assertAnyTypeAnnotation;
exports.assertArrayTypeAnnotation = assertArrayTypeAnnotation;
exports.assertBooleanTypeAnnotation = assertBooleanTypeAnnotation;
exports.assertBooleanLiteralTypeAnnotation = assertBooleanLiteralTypeAnnotation;
exports.assertNullLiteralTypeAnnotation = assertNullLiteralTypeAnnotation;
exports.assertClassImplements = assertClassImplements;
exports.assertDeclareClass = assertDeclareClass;
exports.assertDeclareFunction = assertDeclareFunction;
exports.assertDeclareInterface = assertDeclareInterface;
exports.assertDeclareModule = assertDeclareModule;
exports.assertDeclareModuleExports = assertDeclareModuleExports;
exports.assertDeclareTypeAlias = assertDeclareTypeAlias;
exports.assertDeclareOpaqueType = assertDeclareOpaqueType;
exports.assertDeclareVariable = assertDeclareVariable;
exports.assertDeclareExportDeclaration = assertDeclareExportDeclaration;
exports.assertDeclareExportAllDeclaration = assertDeclareExportAllDeclaration;
exports.assertDeclaredPredicate = assertDeclaredPredicate;
exports.assertExistsTypeAnnotation = assertExistsTypeAnnotation;
exports.assertFunctionTypeAnnotation = assertFunctionTypeAnnotation;
exports.assertFunctionTypeParam = assertFunctionTypeParam;
exports.assertGenericTypeAnnotation = assertGenericTypeAnnotation;
exports.assertInferredPredicate = assertInferredPredicate;
exports.assertInterfaceExtends = assertInterfaceExtends;
exports.assertInterfaceDeclaration = assertInterfaceDeclaration;
exports.assertIntersectionTypeAnnotation = assertIntersectionTypeAnnotation;
exports.assertMixedTypeAnnotation = assertMixedTypeAnnotation;
exports.assertEmptyTypeAnnotation = assertEmptyTypeAnnotation;
exports.assertNullableTypeAnnotation = assertNullableTypeAnnotation;
exports.assertNumberLiteralTypeAnnotation = assertNumberLiteralTypeAnnotation;
exports.assertNumberTypeAnnotation = assertNumberTypeAnnotation;
exports.assertObjectTypeAnnotation = assertObjectTypeAnnotation;
exports.assertObjectTypeCallProperty = assertObjectTypeCallProperty;
exports.assertObjectTypeIndexer = assertObjectTypeIndexer;
exports.assertObjectTypeProperty = assertObjectTypeProperty;
exports.assertObjectTypeSpreadProperty = assertObjectTypeSpreadProperty;
exports.assertOpaqueType = assertOpaqueType;
exports.assertQualifiedTypeIdentifier = assertQualifiedTypeIdentifier;
exports.assertStringLiteralTypeAnnotation = assertStringLiteralTypeAnnotation;
exports.assertStringTypeAnnotation = assertStringTypeAnnotation;
exports.assertThisTypeAnnotation = assertThisTypeAnnotation;
exports.assertTupleTypeAnnotation = assertTupleTypeAnnotation;
exports.assertTypeofTypeAnnotation = assertTypeofTypeAnnotation;
exports.assertTypeAlias = assertTypeAlias;
exports.assertTypeAnnotation = assertTypeAnnotation;
exports.assertTypeCastExpression = assertTypeCastExpression;
exports.assertTypeParameter = assertTypeParameter;
exports.assertTypeParameterDeclaration = assertTypeParameterDeclaration;
exports.assertTypeParameterInstantiation = assertTypeParameterInstantiation;
exports.assertUnionTypeAnnotation = assertUnionTypeAnnotation;
exports.assertVariance = assertVariance;
exports.assertVoidTypeAnnotation = assertVoidTypeAnnotation;
exports.assertJSXAttribute = assertJSXAttribute;
exports.assertJSXClosingElement = assertJSXClosingElement;
exports.assertJSXElement = assertJSXElement;
exports.assertJSXEmptyExpression = assertJSXEmptyExpression;
exports.assertJSXExpressionContainer = assertJSXExpressionContainer;
exports.assertJSXSpreadChild = assertJSXSpreadChild;
exports.assertJSXIdentifier = assertJSXIdentifier;
exports.assertJSXMemberExpression = assertJSXMemberExpression;
exports.assertJSXNamespacedName = assertJSXNamespacedName;
exports.assertJSXOpeningElement = assertJSXOpeningElement;
exports.assertJSXSpreadAttribute = assertJSXSpreadAttribute;
exports.assertJSXText = assertJSXText;
exports.assertJSXFragment = assertJSXFragment;
exports.assertJSXOpeningFragment = assertJSXOpeningFragment;
exports.assertJSXClosingFragment = assertJSXClosingFragment;
exports.assertNoop = assertNoop;
exports.assertParenthesizedExpression = assertParenthesizedExpression;
exports.assertAwaitExpression = assertAwaitExpression;
exports.assertBindExpression = assertBindExpression;
exports.assertClassProperty = assertClassProperty;
exports.assertOptionalMemberExpression = assertOptionalMemberExpression;
exports.assertOptionalCallExpression = assertOptionalCallExpression;
exports.assertImport = assertImport;
exports.assertDecorator = assertDecorator;
exports.assertDoExpression = assertDoExpression;
exports.assertExportDefaultSpecifier = assertExportDefaultSpecifier;
exports.assertExportNamespaceSpecifier = assertExportNamespaceSpecifier;
exports.assertTSParameterProperty = assertTSParameterProperty;
exports.assertTSDeclareFunction = assertTSDeclareFunction;
exports.assertTSDeclareMethod = assertTSDeclareMethod;
exports.assertTSQualifiedName = assertTSQualifiedName;
exports.assertTSCallSignatureDeclaration = assertTSCallSignatureDeclaration;
exports.assertTSConstructSignatureDeclaration = assertTSConstructSignatureDeclaration;
exports.assertTSPropertySignature = assertTSPropertySignature;
exports.assertTSMethodSignature = assertTSMethodSignature;
exports.assertTSIndexSignature = assertTSIndexSignature;
exports.assertTSAnyKeyword = assertTSAnyKeyword;
exports.assertTSNumberKeyword = assertTSNumberKeyword;
exports.assertTSObjectKeyword = assertTSObjectKeyword;
exports.assertTSBooleanKeyword = assertTSBooleanKeyword;
exports.assertTSStringKeyword = assertTSStringKeyword;
exports.assertTSSymbolKeyword = assertTSSymbolKeyword;
exports.assertTSVoidKeyword = assertTSVoidKeyword;
exports.assertTSUndefinedKeyword = assertTSUndefinedKeyword;
exports.assertTSNullKeyword = assertTSNullKeyword;
exports.assertTSNeverKeyword = assertTSNeverKeyword;
exports.assertTSThisType = assertTSThisType;
exports.assertTSFunctionType = assertTSFunctionType;
exports.assertTSConstructorType = assertTSConstructorType;
exports.assertTSTypeReference = assertTSTypeReference;
exports.assertTSTypePredicate = assertTSTypePredicate;
exports.assertTSTypeQuery = assertTSTypeQuery;
exports.assertTSTypeLiteral = assertTSTypeLiteral;
exports.assertTSArrayType = assertTSArrayType;
exports.assertTSTupleType = assertTSTupleType;
exports.assertTSUnionType = assertTSUnionType;
exports.assertTSIntersectionType = assertTSIntersectionType;
exports.assertTSConditionalType = assertTSConditionalType;
exports.assertTSInferType = assertTSInferType;
exports.assertTSParenthesizedType = assertTSParenthesizedType;
exports.assertTSTypeOperator = assertTSTypeOperator;
exports.assertTSIndexedAccessType = assertTSIndexedAccessType;
exports.assertTSMappedType = assertTSMappedType;
exports.assertTSLiteralType = assertTSLiteralType;
exports.assertTSExpressionWithTypeArguments = assertTSExpressionWithTypeArguments;
exports.assertTSInterfaceDeclaration = assertTSInterfaceDeclaration;
exports.assertTSInterfaceBody = assertTSInterfaceBody;
exports.assertTSTypeAliasDeclaration = assertTSTypeAliasDeclaration;
exports.assertTSAsExpression = assertTSAsExpression;
exports.assertTSTypeAssertion = assertTSTypeAssertion;
exports.assertTSEnumDeclaration = assertTSEnumDeclaration;
exports.assertTSEnumMember = assertTSEnumMember;
exports.assertTSModuleDeclaration = assertTSModuleDeclaration;
exports.assertTSModuleBlock = assertTSModuleBlock;
exports.assertTSImportEqualsDeclaration = assertTSImportEqualsDeclaration;
exports.assertTSExternalModuleReference = assertTSExternalModuleReference;
exports.assertTSNonNullExpression = assertTSNonNullExpression;
exports.assertTSExportAssignment = assertTSExportAssignment;
exports.assertTSNamespaceExportDeclaration = assertTSNamespaceExportDeclaration;
exports.assertTSTypeAnnotation = assertTSTypeAnnotation;
exports.assertTSTypeParameterInstantiation = assertTSTypeParameterInstantiation;
exports.assertTSTypeParameterDeclaration = assertTSTypeParameterDeclaration;
exports.assertTSTypeParameter = assertTSTypeParameter;
exports.assertExpression = assertExpression;
exports.assertBinary = assertBinary;
exports.assertScopable = assertScopable;
exports.assertBlockParent = assertBlockParent;
exports.assertBlock = assertBlock;
exports.assertStatement = assertStatement;
exports.assertTerminatorless = assertTerminatorless;
exports.assertCompletionStatement = assertCompletionStatement;
exports.assertConditional = assertConditional;
exports.assertLoop = assertLoop;
exports.assertWhile = assertWhile;
exports.assertExpressionWrapper = assertExpressionWrapper;
exports.assertFor = assertFor;
exports.assertForXStatement = assertForXStatement;
exports.assertFunction = assertFunction;
exports.assertFunctionParent = assertFunctionParent;
exports.assertPureish = assertPureish;
exports.assertDeclaration = assertDeclaration;
exports.assertPatternLike = assertPatternLike;
exports.assertLVal = assertLVal;
exports.assertTSEntityName = assertTSEntityName;
exports.assertLiteral = assertLiteral;
exports.assertImmutable = assertImmutable;
exports.assertUserWhitespacable = assertUserWhitespacable;
exports.assertMethod = assertMethod;
exports.assertObjectMember = assertObjectMember;
exports.assertProperty = assertProperty;
exports.assertUnaryLike = assertUnaryLike;
exports.assertPattern = assertPattern;
exports.assertClass = assertClass;
exports.assertModuleDeclaration = assertModuleDeclaration;
exports.assertExportDeclaration = assertExportDeclaration;
exports.assertModuleSpecifier = assertModuleSpecifier;
exports.assertFlow = assertFlow;
exports.assertFlowType = assertFlowType;
exports.assertFlowBaseAnnotation = assertFlowBaseAnnotation;
exports.assertFlowDeclaration = assertFlowDeclaration;
exports.assertFlowPredicate = assertFlowPredicate;
exports.assertJSX = assertJSX;
exports.assertTSTypeElement = assertTSTypeElement;
exports.assertTSType = assertTSType;
exports.assertNumberLiteral = assertNumberLiteral;
exports.assertRegexLiteral = assertRegexLiteral;
exports.assertRestProperty = assertRestProperty;
exports.assertSpreadProperty = assertSpreadProperty;

var _is = _interopRequireDefault(require("../../validators/is"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function assert(type, node, opts) {
  if (!(0, _is.default)(type, node, opts)) {
    throw new Error("Expected type \"" + type + "\" with option " + JSON.stringify(opts) + ", but instead got \"" + node.type + "\".");
  }
}

function assertArrayExpression(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("ArrayExpression", node, opts);
}

function assertAssignmentExpression(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("AssignmentExpression", node, opts);
}

function assertBinaryExpression(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("BinaryExpression", node, opts);
}

function assertDirective(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("Directive", node, opts);
}

function assertDirectiveLiteral(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("DirectiveLiteral", node, opts);
}

function assertBlockStatement(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("BlockStatement", node, opts);
}

function assertBreakStatement(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("BreakStatement", node, opts);
}

function assertCallExpression(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("CallExpression", node, opts);
}

function assertCatchClause(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("CatchClause", node, opts);
}

function assertConditionalExpression(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("ConditionalExpression", node, opts);
}

function assertContinueStatement(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("ContinueStatement", node, opts);
}

function assertDebuggerStatement(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("DebuggerStatement", node, opts);
}

function assertDoWhileStatement(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("DoWhileStatement", node, opts);
}

function assertEmptyStatement(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("EmptyStatement", node, opts);
}

function assertExpressionStatement(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("ExpressionStatement", node, opts);
}

function assertFile(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("File", node, opts);
}

function assertForInStatement(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("ForInStatement", node, opts);
}

function assertForStatement(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("ForStatement", node, opts);
}

function assertFunctionDeclaration(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("FunctionDeclaration", node, opts);
}

function assertFunctionExpression(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("FunctionExpression", node, opts);
}

function assertIdentifier(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("Identifier", node, opts);
}

function assertIfStatement(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("IfStatement", node, opts);
}

function assertLabeledStatement(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("LabeledStatement", node, opts);
}

function assertStringLiteral(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("StringLiteral", node, opts);
}

function assertNumericLiteral(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("NumericLiteral", node, opts);
}

function assertNullLiteral(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("NullLiteral", node, opts);
}

function assertBooleanLiteral(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("BooleanLiteral", node, opts);
}

function assertRegExpLiteral(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("RegExpLiteral", node, opts);
}

function assertLogicalExpression(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("LogicalExpression", node, opts);
}

function assertMemberExpression(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("MemberExpression", node, opts);
}

function assertNewExpression(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("NewExpression", node, opts);
}

function assertProgram(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("Program", node, opts);
}

function assertObjectExpression(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("ObjectExpression", node, opts);
}

function assertObjectMethod(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("ObjectMethod", node, opts);
}

function assertObjectProperty(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("ObjectProperty", node, opts);
}

function assertRestElement(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("RestElement", node, opts);
}

function assertReturnStatement(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("ReturnStatement", node, opts);
}

function assertSequenceExpression(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("SequenceExpression", node, opts);
}

function assertSwitchCase(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("SwitchCase", node, opts);
}

function assertSwitchStatement(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("SwitchStatement", node, opts);
}

function assertThisExpression(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("ThisExpression", node, opts);
}

function assertThrowStatement(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("ThrowStatement", node, opts);
}

function assertTryStatement(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TryStatement", node, opts);
}

function assertUnaryExpression(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("UnaryExpression", node, opts);
}

function assertUpdateExpression(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("UpdateExpression", node, opts);
}

function assertVariableDeclaration(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("VariableDeclaration", node, opts);
}

function assertVariableDeclarator(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("VariableDeclarator", node, opts);
}

function assertWhileStatement(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("WhileStatement", node, opts);
}

function assertWithStatement(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("WithStatement", node, opts);
}

function assertAssignmentPattern(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("AssignmentPattern", node, opts);
}

function assertArrayPattern(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("ArrayPattern", node, opts);
}

function assertArrowFunctionExpression(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("ArrowFunctionExpression", node, opts);
}

function assertClassBody(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("ClassBody", node, opts);
}

function assertClassDeclaration(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("ClassDeclaration", node, opts);
}

function assertClassExpression(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("ClassExpression", node, opts);
}

function assertExportAllDeclaration(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("ExportAllDeclaration", node, opts);
}

function assertExportDefaultDeclaration(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("ExportDefaultDeclaration", node, opts);
}

function assertExportNamedDeclaration(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("ExportNamedDeclaration", node, opts);
}

function assertExportSpecifier(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("ExportSpecifier", node, opts);
}

function assertForOfStatement(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("ForOfStatement", node, opts);
}

function assertImportDeclaration(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("ImportDeclaration", node, opts);
}

function assertImportDefaultSpecifier(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("ImportDefaultSpecifier", node, opts);
}

function assertImportNamespaceSpecifier(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("ImportNamespaceSpecifier", node, opts);
}

function assertImportSpecifier(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("ImportSpecifier", node, opts);
}

function assertMetaProperty(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("MetaProperty", node, opts);
}

function assertClassMethod(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("ClassMethod", node, opts);
}

function assertObjectPattern(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("ObjectPattern", node, opts);
}

function assertSpreadElement(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("SpreadElement", node, opts);
}

function assertSuper(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("Super", node, opts);
}

function assertTaggedTemplateExpression(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TaggedTemplateExpression", node, opts);
}

function assertTemplateElement(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TemplateElement", node, opts);
}

function assertTemplateLiteral(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TemplateLiteral", node, opts);
}

function assertYieldExpression(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("YieldExpression", node, opts);
}

function assertAnyTypeAnnotation(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("AnyTypeAnnotation", node, opts);
}

function assertArrayTypeAnnotation(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("ArrayTypeAnnotation", node, opts);
}

function assertBooleanTypeAnnotation(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("BooleanTypeAnnotation", node, opts);
}

function assertBooleanLiteralTypeAnnotation(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("BooleanLiteralTypeAnnotation", node, opts);
}

function assertNullLiteralTypeAnnotation(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("NullLiteralTypeAnnotation", node, opts);
}

function assertClassImplements(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("ClassImplements", node, opts);
}

function assertDeclareClass(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("DeclareClass", node, opts);
}

function assertDeclareFunction(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("DeclareFunction", node, opts);
}

function assertDeclareInterface(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("DeclareInterface", node, opts);
}

function assertDeclareModule(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("DeclareModule", node, opts);
}

function assertDeclareModuleExports(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("DeclareModuleExports", node, opts);
}

function assertDeclareTypeAlias(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("DeclareTypeAlias", node, opts);
}

function assertDeclareOpaqueType(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("DeclareOpaqueType", node, opts);
}

function assertDeclareVariable(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("DeclareVariable", node, opts);
}

function assertDeclareExportDeclaration(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("DeclareExportDeclaration", node, opts);
}

function assertDeclareExportAllDeclaration(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("DeclareExportAllDeclaration", node, opts);
}

function assertDeclaredPredicate(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("DeclaredPredicate", node, opts);
}

function assertExistsTypeAnnotation(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("ExistsTypeAnnotation", node, opts);
}

function assertFunctionTypeAnnotation(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("FunctionTypeAnnotation", node, opts);
}

function assertFunctionTypeParam(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("FunctionTypeParam", node, opts);
}

function assertGenericTypeAnnotation(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("GenericTypeAnnotation", node, opts);
}

function assertInferredPredicate(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("InferredPredicate", node, opts);
}

function assertInterfaceExtends(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("InterfaceExtends", node, opts);
}

function assertInterfaceDeclaration(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("InterfaceDeclaration", node, opts);
}

function assertIntersectionTypeAnnotation(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("IntersectionTypeAnnotation", node, opts);
}

function assertMixedTypeAnnotation(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("MixedTypeAnnotation", node, opts);
}

function assertEmptyTypeAnnotation(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("EmptyTypeAnnotation", node, opts);
}

function assertNullableTypeAnnotation(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("NullableTypeAnnotation", node, opts);
}

function assertNumberLiteralTypeAnnotation(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("NumberLiteralTypeAnnotation", node, opts);
}

function assertNumberTypeAnnotation(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("NumberTypeAnnotation", node, opts);
}

function assertObjectTypeAnnotation(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("ObjectTypeAnnotation", node, opts);
}

function assertObjectTypeCallProperty(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("ObjectTypeCallProperty", node, opts);
}

function assertObjectTypeIndexer(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("ObjectTypeIndexer", node, opts);
}

function assertObjectTypeProperty(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("ObjectTypeProperty", node, opts);
}

function assertObjectTypeSpreadProperty(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("ObjectTypeSpreadProperty", node, opts);
}

function assertOpaqueType(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("OpaqueType", node, opts);
}

function assertQualifiedTypeIdentifier(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("QualifiedTypeIdentifier", node, opts);
}

function assertStringLiteralTypeAnnotation(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("StringLiteralTypeAnnotation", node, opts);
}

function assertStringTypeAnnotation(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("StringTypeAnnotation", node, opts);
}

function assertThisTypeAnnotation(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("ThisTypeAnnotation", node, opts);
}

function assertTupleTypeAnnotation(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TupleTypeAnnotation", node, opts);
}

function assertTypeofTypeAnnotation(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TypeofTypeAnnotation", node, opts);
}

function assertTypeAlias(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TypeAlias", node, opts);
}

function assertTypeAnnotation(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TypeAnnotation", node, opts);
}

function assertTypeCastExpression(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TypeCastExpression", node, opts);
}

function assertTypeParameter(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TypeParameter", node, opts);
}

function assertTypeParameterDeclaration(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TypeParameterDeclaration", node, opts);
}

function assertTypeParameterInstantiation(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TypeParameterInstantiation", node, opts);
}

function assertUnionTypeAnnotation(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("UnionTypeAnnotation", node, opts);
}

function assertVariance(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("Variance", node, opts);
}

function assertVoidTypeAnnotation(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("VoidTypeAnnotation", node, opts);
}

function assertJSXAttribute(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("JSXAttribute", node, opts);
}

function assertJSXClosingElement(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("JSXClosingElement", node, opts);
}

function assertJSXElement(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("JSXElement", node, opts);
}

function assertJSXEmptyExpression(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("JSXEmptyExpression", node, opts);
}

function assertJSXExpressionContainer(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("JSXExpressionContainer", node, opts);
}

function assertJSXSpreadChild(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("JSXSpreadChild", node, opts);
}

function assertJSXIdentifier(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("JSXIdentifier", node, opts);
}

function assertJSXMemberExpression(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("JSXMemberExpression", node, opts);
}

function assertJSXNamespacedName(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("JSXNamespacedName", node, opts);
}

function assertJSXOpeningElement(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("JSXOpeningElement", node, opts);
}

function assertJSXSpreadAttribute(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("JSXSpreadAttribute", node, opts);
}

function assertJSXText(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("JSXText", node, opts);
}

function assertJSXFragment(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("JSXFragment", node, opts);
}

function assertJSXOpeningFragment(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("JSXOpeningFragment", node, opts);
}

function assertJSXClosingFragment(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("JSXClosingFragment", node, opts);
}

function assertNoop(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("Noop", node, opts);
}

function assertParenthesizedExpression(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("ParenthesizedExpression", node, opts);
}

function assertAwaitExpression(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("AwaitExpression", node, opts);
}

function assertBindExpression(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("BindExpression", node, opts);
}

function assertClassProperty(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("ClassProperty", node, opts);
}

function assertOptionalMemberExpression(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("OptionalMemberExpression", node, opts);
}

function assertOptionalCallExpression(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("OptionalCallExpression", node, opts);
}

function assertImport(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("Import", node, opts);
}

function assertDecorator(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("Decorator", node, opts);
}

function assertDoExpression(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("DoExpression", node, opts);
}

function assertExportDefaultSpecifier(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("ExportDefaultSpecifier", node, opts);
}

function assertExportNamespaceSpecifier(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("ExportNamespaceSpecifier", node, opts);
}

function assertTSParameterProperty(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TSParameterProperty", node, opts);
}

function assertTSDeclareFunction(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TSDeclareFunction", node, opts);
}

function assertTSDeclareMethod(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TSDeclareMethod", node, opts);
}

function assertTSQualifiedName(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TSQualifiedName", node, opts);
}

function assertTSCallSignatureDeclaration(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TSCallSignatureDeclaration", node, opts);
}

function assertTSConstructSignatureDeclaration(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TSConstructSignatureDeclaration", node, opts);
}

function assertTSPropertySignature(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TSPropertySignature", node, opts);
}

function assertTSMethodSignature(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TSMethodSignature", node, opts);
}

function assertTSIndexSignature(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TSIndexSignature", node, opts);
}

function assertTSAnyKeyword(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TSAnyKeyword", node, opts);
}

function assertTSNumberKeyword(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TSNumberKeyword", node, opts);
}

function assertTSObjectKeyword(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TSObjectKeyword", node, opts);
}

function assertTSBooleanKeyword(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TSBooleanKeyword", node, opts);
}

function assertTSStringKeyword(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TSStringKeyword", node, opts);
}

function assertTSSymbolKeyword(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TSSymbolKeyword", node, opts);
}

function assertTSVoidKeyword(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TSVoidKeyword", node, opts);
}

function assertTSUndefinedKeyword(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TSUndefinedKeyword", node, opts);
}

function assertTSNullKeyword(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TSNullKeyword", node, opts);
}

function assertTSNeverKeyword(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TSNeverKeyword", node, opts);
}

function assertTSThisType(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TSThisType", node, opts);
}

function assertTSFunctionType(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TSFunctionType", node, opts);
}

function assertTSConstructorType(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TSConstructorType", node, opts);
}

function assertTSTypeReference(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TSTypeReference", node, opts);
}

function assertTSTypePredicate(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TSTypePredicate", node, opts);
}

function assertTSTypeQuery(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TSTypeQuery", node, opts);
}

function assertTSTypeLiteral(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TSTypeLiteral", node, opts);
}

function assertTSArrayType(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TSArrayType", node, opts);
}

function assertTSTupleType(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TSTupleType", node, opts);
}

function assertTSUnionType(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TSUnionType", node, opts);
}

function assertTSIntersectionType(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TSIntersectionType", node, opts);
}

function assertTSConditionalType(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TSConditionalType", node, opts);
}

function assertTSInferType(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TSInferType", node, opts);
}

function assertTSParenthesizedType(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TSParenthesizedType", node, opts);
}

function assertTSTypeOperator(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TSTypeOperator", node, opts);
}

function assertTSIndexedAccessType(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TSIndexedAccessType", node, opts);
}

function assertTSMappedType(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TSMappedType", node, opts);
}

function assertTSLiteralType(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TSLiteralType", node, opts);
}

function assertTSExpressionWithTypeArguments(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TSExpressionWithTypeArguments", node, opts);
}

function assertTSInterfaceDeclaration(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TSInterfaceDeclaration", node, opts);
}

function assertTSInterfaceBody(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TSInterfaceBody", node, opts);
}

function assertTSTypeAliasDeclaration(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TSTypeAliasDeclaration", node, opts);
}

function assertTSAsExpression(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TSAsExpression", node, opts);
}

function assertTSTypeAssertion(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TSTypeAssertion", node, opts);
}

function assertTSEnumDeclaration(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TSEnumDeclaration", node, opts);
}

function assertTSEnumMember(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TSEnumMember", node, opts);
}

function assertTSModuleDeclaration(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TSModuleDeclaration", node, opts);
}

function assertTSModuleBlock(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TSModuleBlock", node, opts);
}

function assertTSImportEqualsDeclaration(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TSImportEqualsDeclaration", node, opts);
}

function assertTSExternalModuleReference(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TSExternalModuleReference", node, opts);
}

function assertTSNonNullExpression(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TSNonNullExpression", node, opts);
}

function assertTSExportAssignment(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TSExportAssignment", node, opts);
}

function assertTSNamespaceExportDeclaration(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TSNamespaceExportDeclaration", node, opts);
}

function assertTSTypeAnnotation(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TSTypeAnnotation", node, opts);
}

function assertTSTypeParameterInstantiation(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TSTypeParameterInstantiation", node, opts);
}

function assertTSTypeParameterDeclaration(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TSTypeParameterDeclaration", node, opts);
}

function assertTSTypeParameter(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TSTypeParameter", node, opts);
}

function assertExpression(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("Expression", node, opts);
}

function assertBinary(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("Binary", node, opts);
}

function assertScopable(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("Scopable", node, opts);
}

function assertBlockParent(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("BlockParent", node, opts);
}

function assertBlock(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("Block", node, opts);
}

function assertStatement(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("Statement", node, opts);
}

function assertTerminatorless(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("Terminatorless", node, opts);
}

function assertCompletionStatement(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("CompletionStatement", node, opts);
}

function assertConditional(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("Conditional", node, opts);
}

function assertLoop(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("Loop", node, opts);
}

function assertWhile(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("While", node, opts);
}

function assertExpressionWrapper(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("ExpressionWrapper", node, opts);
}

function assertFor(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("For", node, opts);
}

function assertForXStatement(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("ForXStatement", node, opts);
}

function assertFunction(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("Function", node, opts);
}

function assertFunctionParent(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("FunctionParent", node, opts);
}

function assertPureish(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("Pureish", node, opts);
}

function assertDeclaration(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("Declaration", node, opts);
}

function assertPatternLike(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("PatternLike", node, opts);
}

function assertLVal(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("LVal", node, opts);
}

function assertTSEntityName(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TSEntityName", node, opts);
}

function assertLiteral(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("Literal", node, opts);
}

function assertImmutable(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("Immutable", node, opts);
}

function assertUserWhitespacable(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("UserWhitespacable", node, opts);
}

function assertMethod(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("Method", node, opts);
}

function assertObjectMember(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("ObjectMember", node, opts);
}

function assertProperty(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("Property", node, opts);
}

function assertUnaryLike(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("UnaryLike", node, opts);
}

function assertPattern(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("Pattern", node, opts);
}

function assertClass(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("Class", node, opts);
}

function assertModuleDeclaration(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("ModuleDeclaration", node, opts);
}

function assertExportDeclaration(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("ExportDeclaration", node, opts);
}

function assertModuleSpecifier(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("ModuleSpecifier", node, opts);
}

function assertFlow(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("Flow", node, opts);
}

function assertFlowType(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("FlowType", node, opts);
}

function assertFlowBaseAnnotation(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("FlowBaseAnnotation", node, opts);
}

function assertFlowDeclaration(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("FlowDeclaration", node, opts);
}

function assertFlowPredicate(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("FlowPredicate", node, opts);
}

function assertJSX(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("JSX", node, opts);
}

function assertTSTypeElement(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TSTypeElement", node, opts);
}

function assertTSType(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  assert("TSType", node, opts);
}

function assertNumberLiteral(node, opts) {
  console.trace("The node type NumberLiteral has been renamed to NumericLiteral");
  assert("NumberLiteral", node, opts);
}

function assertRegexLiteral(node, opts) {
  console.trace("The node type RegexLiteral has been renamed to RegExpLiteral");
  assert("RegexLiteral", node, opts);
}

function assertRestProperty(node, opts) {
  console.trace("The node type RestProperty has been renamed to RestElement");
  assert("RestProperty", node, opts);
}

function assertSpreadProperty(node, opts) {
  console.trace("The node type SpreadProperty has been renamed to SpreadElement");
  assert("SpreadProperty", node, opts);
}
}, function(modId) { var map = {"../../validators/is":1651912610411}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610434, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createTypeAnnotationBasedOnTypeof;

var _generated = require("../generated");

function createTypeAnnotationBasedOnTypeof(type) {
  if (type === "string") {
    return (0, _generated.stringTypeAnnotation)();
  } else if (type === "number") {
    return (0, _generated.numberTypeAnnotation)();
  } else if (type === "undefined") {
    return (0, _generated.voidTypeAnnotation)();
  } else if (type === "boolean") {
    return (0, _generated.booleanTypeAnnotation)();
  } else if (type === "function") {
    return (0, _generated.genericTypeAnnotation)((0, _generated.identifier)("Function"));
  } else if (type === "object") {
    return (0, _generated.genericTypeAnnotation)((0, _generated.identifier)("Object"));
  } else if (type === "symbol") {
    return (0, _generated.genericTypeAnnotation)((0, _generated.identifier)("Symbol"));
  } else {
    throw new Error("Invalid typeof value");
  }
}
}, function(modId) { var map = {"../generated":1651912610428}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610435, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createUnionTypeAnnotation;

var _generated = require("../generated");

var _removeTypeDuplicates = _interopRequireDefault(require("../../modifications/flow/removeTypeDuplicates"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createUnionTypeAnnotation(types) {
  var flattened = (0, _removeTypeDuplicates.default)(types);

  if (flattened.length === 1) {
    return flattened[0];
  } else {
    return (0, _generated.unionTypeAnnotation)(flattened);
  }
}
}, function(modId) { var map = {"../generated":1651912610428,"../../modifications/flow/removeTypeDuplicates":1651912610436}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610436, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeTypeDuplicates;

var _generated = require("../../validators/generated");

function removeTypeDuplicates(nodes) {
  var generics = {};
  var bases = {};
  var typeGroups = [];
  var types = [];

  for (var i = 0; i < nodes.length; i++) {
    var node = nodes[i];
    if (!node) continue;

    if (types.indexOf(node) >= 0) {
      continue;
    }

    if ((0, _generated.isAnyTypeAnnotation)(node)) {
      return [node];
    }

    if ((0, _generated.isFlowBaseAnnotation)(node)) {
      bases[node.type] = node;
      continue;
    }

    if ((0, _generated.isUnionTypeAnnotation)(node)) {
      if (typeGroups.indexOf(node.types) < 0) {
        nodes = nodes.concat(node.types);
        typeGroups.push(node.types);
      }

      continue;
    }

    if ((0, _generated.isGenericTypeAnnotation)(node)) {
      var name = node.id.name;

      if (generics[name]) {
        var existing = generics[name];

        if (existing.typeParameters) {
          if (node.typeParameters) {
            existing.typeParameters.params = removeTypeDuplicates(existing.typeParameters.params.concat(node.typeParameters.params));
          }
        } else {
          existing = node.typeParameters;
        }
      } else {
        generics[name] = node;
      }

      continue;
    }

    types.push(node);
  }

  for (var type in bases) {
    types.push(bases[type]);
  }

  for (var _name in generics) {
    types.push(generics[_name]);
  }

  return types;
}
}, function(modId) { var map = {"../../validators/generated":1651912610410}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610437, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cloneNode;

var _definitions = require("../definitions");

var has = Function.call.bind(Object.prototype.hasOwnProperty);

function cloneIfNode(obj, deep) {
  if (obj && typeof obj.type === "string" && obj.type !== "CommentLine" && obj.type !== "CommentBlock") {
    return cloneNode(obj, deep);
  }

  return obj;
}

function cloneIfNodeOrArray(obj, deep) {
  if (Array.isArray(obj)) {
    return obj.map(function (node) {
      return cloneIfNode(node, deep);
    });
  }

  return cloneIfNode(obj, deep);
}

function cloneNode(node, deep) {
  if (deep === void 0) {
    deep = true;
  }

  if (!node) return node;
  var type = node.type;
  var newNode = {
    type: type
  };

  if (type === "Identifier") {
    newNode.name = node.name;
  } else if (!has(_definitions.NODE_FIELDS, type)) {
    throw new Error("Unknown node type: \"" + type + "\"");
  } else {
    var _arr = Object.keys(_definitions.NODE_FIELDS[type]);

    for (var _i = 0; _i < _arr.length; _i++) {
      var field = _arr[_i];

      if (has(node, field)) {
        newNode[field] = deep ? cloneIfNodeOrArray(node[field], true) : node[field];
      }
    }
  }

  if (has(node, "loc")) {
    newNode.loc = node.loc;
  }

  if (has(node, "leadingComments")) {
    newNode.leadingComments = node.leadingComments;
  }

  if (has(node, "innerComments")) {
    newNode.innerComments = node.innerCmments;
  }

  if (has(node, "trailingComments")) {
    newNode.trailingComments = node.trailingComments;
  }

  if (has(node, "extra")) {
    newNode.extra = Object.assign({}, node.extra);
  }

  return newNode;
}
}, function(modId) { var map = {"../definitions":1651912610414}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610438, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = clone;

var _cloneNode = _interopRequireDefault(require("./cloneNode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function clone(node) {
  return (0, _cloneNode.default)(node, false);
}
}, function(modId) { var map = {"./cloneNode":1651912610437}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610439, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cloneDeep;

var _cloneNode = _interopRequireDefault(require("./cloneNode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cloneDeep(node) {
  return (0, _cloneNode.default)(node);
}
}, function(modId) { var map = {"./cloneNode":1651912610437}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610440, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cloneWithoutLoc;

var _clone = _interopRequireDefault(require("./clone"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cloneWithoutLoc(node) {
  var newNode = (0, _clone.default)(node);
  newNode.loc = null;
  return newNode;
}
}, function(modId) { var map = {"./clone":1651912610438}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610441, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addComment;

var _addComments = _interopRequireDefault(require("./addComments"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addComment(node, type, content, line) {
  return (0, _addComments.default)(node, type, [{
    type: line ? "CommentLine" : "CommentBlock",
    value: content
  }]);
}
}, function(modId) { var map = {"./addComments":1651912610442}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610442, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addComments;

function addComments(node, type, comments) {
  if (!comments || !node) return node;
  var key = type + "Comments";

  if (node[key]) {
    if (type === "leading") {
      node[key] = comments.concat(node[key]);
    } else {
      node[key] = node[key].concat(comments);
    }
  } else {
    node[key] = comments;
  }

  return node;
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610443, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = inheritInnerComments;

var _inherit = _interopRequireDefault(require("../utils/inherit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function inheritInnerComments(child, parent) {
  (0, _inherit.default)("innerComments", child, parent);
}
}, function(modId) { var map = {"../utils/inherit":1651912610444}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610444, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = inherit;

function _uniq() {
  var data = _interopRequireDefault(require("lodash/uniq"));

  _uniq = function _uniq() {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function inherit(key, child, parent) {
  if (child && parent) {
    child[key] = (0, _uniq().default)([].concat(child[key], parent[key]).filter(Boolean));
  }
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610445, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = inheritLeadingComments;

var _inherit = _interopRequireDefault(require("../utils/inherit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function inheritLeadingComments(child, parent) {
  (0, _inherit.default)("leadingComments", child, parent);
}
}, function(modId) { var map = {"../utils/inherit":1651912610444}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610446, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = inheritsComments;

var _inheritTrailingComments = _interopRequireDefault(require("./inheritTrailingComments"));

var _inheritLeadingComments = _interopRequireDefault(require("./inheritLeadingComments"));

var _inheritInnerComments = _interopRequireDefault(require("./inheritInnerComments"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function inheritsComments(child, parent) {
  (0, _inheritTrailingComments.default)(child, parent);
  (0, _inheritLeadingComments.default)(child, parent);
  (0, _inheritInnerComments.default)(child, parent);
  return child;
}
}, function(modId) { var map = {"./inheritTrailingComments":1651912610447,"./inheritLeadingComments":1651912610445,"./inheritInnerComments":1651912610443}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610447, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = inheritTrailingComments;

var _inherit = _interopRequireDefault(require("../utils/inherit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function inheritTrailingComments(child, parent) {
  (0, _inherit.default)("trailingComments", child, parent);
}
}, function(modId) { var map = {"../utils/inherit":1651912610444}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610448, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeComments;

var _constants = require("../constants");

function removeComments(node) {
  _constants.COMMENT_KEYS.forEach(function (key) {
    node[key] = null;
  });

  return node;
}
}, function(modId) { var map = {"../constants":1651912610417}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610449, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TSTYPE_TYPES = exports.TSTYPEELEMENT_TYPES = exports.JSX_TYPES = exports.FLOWPREDICATE_TYPES = exports.FLOWDECLARATION_TYPES = exports.FLOWBASEANNOTATION_TYPES = exports.FLOWTYPE_TYPES = exports.FLOW_TYPES = exports.MODULESPECIFIER_TYPES = exports.EXPORTDECLARATION_TYPES = exports.MODULEDECLARATION_TYPES = exports.CLASS_TYPES = exports.PATTERN_TYPES = exports.UNARYLIKE_TYPES = exports.PROPERTY_TYPES = exports.OBJECTMEMBER_TYPES = exports.METHOD_TYPES = exports.USERWHITESPACABLE_TYPES = exports.IMMUTABLE_TYPES = exports.LITERAL_TYPES = exports.TSENTITYNAME_TYPES = exports.LVAL_TYPES = exports.PATTERNLIKE_TYPES = exports.DECLARATION_TYPES = exports.PUREISH_TYPES = exports.FUNCTIONPARENT_TYPES = exports.FUNCTION_TYPES = exports.FORXSTATEMENT_TYPES = exports.FOR_TYPES = exports.EXPRESSIONWRAPPER_TYPES = exports.WHILE_TYPES = exports.LOOP_TYPES = exports.CONDITIONAL_TYPES = exports.COMPLETIONSTATEMENT_TYPES = exports.TERMINATORLESS_TYPES = exports.STATEMENT_TYPES = exports.BLOCK_TYPES = exports.BLOCKPARENT_TYPES = exports.SCOPABLE_TYPES = exports.BINARY_TYPES = exports.EXPRESSION_TYPES = void 0;

var _definitions = require("../../definitions");

var EXPRESSION_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Expression"];
exports.EXPRESSION_TYPES = EXPRESSION_TYPES;
var BINARY_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Binary"];
exports.BINARY_TYPES = BINARY_TYPES;
var SCOPABLE_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Scopable"];
exports.SCOPABLE_TYPES = SCOPABLE_TYPES;
var BLOCKPARENT_TYPES = _definitions.FLIPPED_ALIAS_KEYS["BlockParent"];
exports.BLOCKPARENT_TYPES = BLOCKPARENT_TYPES;
var BLOCK_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Block"];
exports.BLOCK_TYPES = BLOCK_TYPES;
var STATEMENT_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Statement"];
exports.STATEMENT_TYPES = STATEMENT_TYPES;
var TERMINATORLESS_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Terminatorless"];
exports.TERMINATORLESS_TYPES = TERMINATORLESS_TYPES;
var COMPLETIONSTATEMENT_TYPES = _definitions.FLIPPED_ALIAS_KEYS["CompletionStatement"];
exports.COMPLETIONSTATEMENT_TYPES = COMPLETIONSTATEMENT_TYPES;
var CONDITIONAL_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Conditional"];
exports.CONDITIONAL_TYPES = CONDITIONAL_TYPES;
var LOOP_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Loop"];
exports.LOOP_TYPES = LOOP_TYPES;
var WHILE_TYPES = _definitions.FLIPPED_ALIAS_KEYS["While"];
exports.WHILE_TYPES = WHILE_TYPES;
var EXPRESSIONWRAPPER_TYPES = _definitions.FLIPPED_ALIAS_KEYS["ExpressionWrapper"];
exports.EXPRESSIONWRAPPER_TYPES = EXPRESSIONWRAPPER_TYPES;
var FOR_TYPES = _definitions.FLIPPED_ALIAS_KEYS["For"];
exports.FOR_TYPES = FOR_TYPES;
var FORXSTATEMENT_TYPES = _definitions.FLIPPED_ALIAS_KEYS["ForXStatement"];
exports.FORXSTATEMENT_TYPES = FORXSTATEMENT_TYPES;
var FUNCTION_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Function"];
exports.FUNCTION_TYPES = FUNCTION_TYPES;
var FUNCTIONPARENT_TYPES = _definitions.FLIPPED_ALIAS_KEYS["FunctionParent"];
exports.FUNCTIONPARENT_TYPES = FUNCTIONPARENT_TYPES;
var PUREISH_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Pureish"];
exports.PUREISH_TYPES = PUREISH_TYPES;
var DECLARATION_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Declaration"];
exports.DECLARATION_TYPES = DECLARATION_TYPES;
var PATTERNLIKE_TYPES = _definitions.FLIPPED_ALIAS_KEYS["PatternLike"];
exports.PATTERNLIKE_TYPES = PATTERNLIKE_TYPES;
var LVAL_TYPES = _definitions.FLIPPED_ALIAS_KEYS["LVal"];
exports.LVAL_TYPES = LVAL_TYPES;
var TSENTITYNAME_TYPES = _definitions.FLIPPED_ALIAS_KEYS["TSEntityName"];
exports.TSENTITYNAME_TYPES = TSENTITYNAME_TYPES;
var LITERAL_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Literal"];
exports.LITERAL_TYPES = LITERAL_TYPES;
var IMMUTABLE_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Immutable"];
exports.IMMUTABLE_TYPES = IMMUTABLE_TYPES;
var USERWHITESPACABLE_TYPES = _definitions.FLIPPED_ALIAS_KEYS["UserWhitespacable"];
exports.USERWHITESPACABLE_TYPES = USERWHITESPACABLE_TYPES;
var METHOD_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Method"];
exports.METHOD_TYPES = METHOD_TYPES;
var OBJECTMEMBER_TYPES = _definitions.FLIPPED_ALIAS_KEYS["ObjectMember"];
exports.OBJECTMEMBER_TYPES = OBJECTMEMBER_TYPES;
var PROPERTY_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Property"];
exports.PROPERTY_TYPES = PROPERTY_TYPES;
var UNARYLIKE_TYPES = _definitions.FLIPPED_ALIAS_KEYS["UnaryLike"];
exports.UNARYLIKE_TYPES = UNARYLIKE_TYPES;
var PATTERN_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Pattern"];
exports.PATTERN_TYPES = PATTERN_TYPES;
var CLASS_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Class"];
exports.CLASS_TYPES = CLASS_TYPES;
var MODULEDECLARATION_TYPES = _definitions.FLIPPED_ALIAS_KEYS["ModuleDeclaration"];
exports.MODULEDECLARATION_TYPES = MODULEDECLARATION_TYPES;
var EXPORTDECLARATION_TYPES = _definitions.FLIPPED_ALIAS_KEYS["ExportDeclaration"];
exports.EXPORTDECLARATION_TYPES = EXPORTDECLARATION_TYPES;
var MODULESPECIFIER_TYPES = _definitions.FLIPPED_ALIAS_KEYS["ModuleSpecifier"];
exports.MODULESPECIFIER_TYPES = MODULESPECIFIER_TYPES;
var FLOW_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Flow"];
exports.FLOW_TYPES = FLOW_TYPES;
var FLOWTYPE_TYPES = _definitions.FLIPPED_ALIAS_KEYS["FlowType"];
exports.FLOWTYPE_TYPES = FLOWTYPE_TYPES;
var FLOWBASEANNOTATION_TYPES = _definitions.FLIPPED_ALIAS_KEYS["FlowBaseAnnotation"];
exports.FLOWBASEANNOTATION_TYPES = FLOWBASEANNOTATION_TYPES;
var FLOWDECLARATION_TYPES = _definitions.FLIPPED_ALIAS_KEYS["FlowDeclaration"];
exports.FLOWDECLARATION_TYPES = FLOWDECLARATION_TYPES;
var FLOWPREDICATE_TYPES = _definitions.FLIPPED_ALIAS_KEYS["FlowPredicate"];
exports.FLOWPREDICATE_TYPES = FLOWPREDICATE_TYPES;
var JSX_TYPES = _definitions.FLIPPED_ALIAS_KEYS["JSX"];
exports.JSX_TYPES = JSX_TYPES;
var TSTYPEELEMENT_TYPES = _definitions.FLIPPED_ALIAS_KEYS["TSTypeElement"];
exports.TSTYPEELEMENT_TYPES = TSTYPEELEMENT_TYPES;
var TSTYPE_TYPES = _definitions.FLIPPED_ALIAS_KEYS["TSType"];
exports.TSTYPE_TYPES = TSTYPE_TYPES;
}, function(modId) { var map = {"../../definitions":1651912610414}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610450, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ensureBlock;

var _toBlock = _interopRequireDefault(require("./toBlock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ensureBlock(node, key) {
  if (key === void 0) {
    key = "body";
  }

  return node[key] = (0, _toBlock.default)(node[key], node);
}
}, function(modId) { var map = {"./toBlock":1651912610451}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610451, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toBlock;

var _generated = require("../validators/generated");

var _generated2 = require("../builders/generated");

function toBlock(node, parent) {
  if ((0, _generated.isBlockStatement)(node)) {
    return node;
  }

  var blockNodes = [];

  if ((0, _generated.isEmptyStatement)(node)) {
    blockNodes = [];
  } else {
    if (!(0, _generated.isStatement)(node)) {
      if ((0, _generated.isFunction)(parent)) {
        node = (0, _generated2.returnStatement)(node);
      } else {
        node = (0, _generated2.expressionStatement)(node);
      }
    }

    blockNodes = [node];
  }

  return (0, _generated2.blockStatement)(blockNodes);
}
}, function(modId) { var map = {"../validators/generated":1651912610410,"../builders/generated":1651912610428}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610452, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toBindingIdentifierName;

var _toIdentifier = _interopRequireDefault(require("./toIdentifier"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toBindingIdentifierName(name) {
  name = (0, _toIdentifier.default)(name);
  if (name === "eval" || name === "arguments") name = "_" + name;
  return name;
}
}, function(modId) { var map = {"./toIdentifier":1651912610453}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610453, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toIdentifier;

var _isValidIdentifier = _interopRequireDefault(require("../validators/isValidIdentifier"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toIdentifier(name) {
  name = name + "";
  name = name.replace(/[^a-zA-Z0-9$_]/g, "-");
  name = name.replace(/^[-0-9]+/, "");
  name = name.replace(/[-\s]+(.)?/g, function (match, c) {
    return c ? c.toUpperCase() : "";
  });

  if (!(0, _isValidIdentifier.default)(name)) {
    name = "_" + name;
  }

  return name || "_";
}
}, function(modId) { var map = {"../validators/isValidIdentifier":1651912610416}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610454, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toComputedKey;

var _generated = require("../validators/generated");

var _generated2 = require("../builders/generated");

function toComputedKey(node, key) {
  if (key === void 0) {
    key = node.key || node.property;
  }

  if (!node.computed && (0, _generated.isIdentifier)(key)) key = (0, _generated2.stringLiteral)(key.name);
  return key;
}
}, function(modId) { var map = {"../validators/generated":1651912610410,"../builders/generated":1651912610428}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610455, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toExpression;

var _generated = require("../validators/generated");

function toExpression(node) {
  if ((0, _generated.isExpressionStatement)(node)) {
    node = node.expression;
  }

  if ((0, _generated.isExpression)(node)) {
    return node;
  }

  if ((0, _generated.isClass)(node)) {
    node.type = "ClassExpression";
  } else if ((0, _generated.isFunction)(node)) {
    node.type = "FunctionExpression";
  }

  if (!(0, _generated.isExpression)(node)) {
    throw new Error("cannot turn " + node.type + " to an expression");
  }

  return node;
}
}, function(modId) { var map = {"../validators/generated":1651912610410}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610456, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toKeyAlias;

var _generated = require("../validators/generated");

var _cloneNode = _interopRequireDefault(require("../clone/cloneNode"));

var _removePropertiesDeep = _interopRequireDefault(require("../modifications/removePropertiesDeep"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toKeyAlias(node, key) {
  if (key === void 0) {
    key = node.key;
  }

  var alias;

  if (node.kind === "method") {
    return toKeyAlias.increment() + "";
  } else if ((0, _generated.isIdentifier)(key)) {
    alias = key.name;
  } else if ((0, _generated.isStringLiteral)(key)) {
    alias = JSON.stringify(key.value);
  } else {
    alias = JSON.stringify((0, _removePropertiesDeep.default)((0, _cloneNode.default)(key)));
  }

  if (node.computed) {
    alias = "[" + alias + "]";
  }

  if (node.static) {
    alias = "static:" + alias;
  }

  return alias;
}

toKeyAlias.uid = 0;

toKeyAlias.increment = function () {
  if (toKeyAlias.uid >= Number.MAX_SAFE_INTEGER) {
    return toKeyAlias.uid = 0;
  } else {
    return toKeyAlias.uid++;
  }
};
}, function(modId) { var map = {"../validators/generated":1651912610410,"../clone/cloneNode":1651912610437,"../modifications/removePropertiesDeep":1651912610457}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610457, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removePropertiesDeep;

var _traverseFast = _interopRequireDefault(require("../traverse/traverseFast"));

var _removeProperties = _interopRequireDefault(require("./removeProperties"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function removePropertiesDeep(tree, opts) {
  (0, _traverseFast.default)(tree, _removeProperties.default, opts);
  return tree;
}
}, function(modId) { var map = {"../traverse/traverseFast":1651912610458,"./removeProperties":1651912610459}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610458, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = traverseFast;

var _definitions = require("../definitions");

function traverseFast(node, enter, opts) {
  if (!node) return;
  var keys = _definitions.VISITOR_KEYS[node.type];
  if (!keys) return;
  opts = opts || {};
  enter(node, opts);

  for (var _iterator = keys, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var key = _ref;
    var subNode = node[key];

    if (Array.isArray(subNode)) {
      for (var _iterator2 = subNode, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
        var _ref2;

        if (_isArray2) {
          if (_i2 >= _iterator2.length) break;
          _ref2 = _iterator2[_i2++];
        } else {
          _i2 = _iterator2.next();
          if (_i2.done) break;
          _ref2 = _i2.value;
        }

        var _node = _ref2;
        traverseFast(_node, enter, opts);
      }
    } else {
      traverseFast(subNode, enter, opts);
    }
  }
}
}, function(modId) { var map = {"../definitions":1651912610414}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610459, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeProperties;

var _constants = require("../constants");

var CLEAR_KEYS = ["tokens", "start", "end", "loc", "raw", "rawValue"];

var CLEAR_KEYS_PLUS_COMMENTS = _constants.COMMENT_KEYS.concat(["comments"]).concat(CLEAR_KEYS);

function removeProperties(node, opts) {
  if (opts === void 0) {
    opts = {};
  }

  var map = opts.preserveComments ? CLEAR_KEYS : CLEAR_KEYS_PLUS_COMMENTS;

  for (var _iterator = map, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var _key = _ref;
    if (node[_key] != null) node[_key] = undefined;
  }

  for (var key in node) {
    if (key[0] === "_" && node[key] != null) node[key] = undefined;
  }

  var symbols = Object.getOwnPropertySymbols(node);

  for (var _iterator2 = symbols, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
    var _ref2;

    if (_isArray2) {
      if (_i2 >= _iterator2.length) break;
      _ref2 = _iterator2[_i2++];
    } else {
      _i2 = _iterator2.next();
      if (_i2.done) break;
      _ref2 = _i2.value;
    }

    var sym = _ref2;
    node[sym] = null;
  }
}
}, function(modId) { var map = {"../constants":1651912610417}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610460, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toSequenceExpression;

var _gatherSequenceExpressions = _interopRequireDefault(require("./gatherSequenceExpressions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toSequenceExpression(nodes, scope) {
  if (!nodes || !nodes.length) return;
  var declars = [];
  var result = (0, _gatherSequenceExpressions.default)(nodes, scope, declars);
  if (!result) return;

  for (var _i = 0; _i < declars.length; _i++) {
    var declar = declars[_i];
    scope.push(declar);
  }

  return result;
}
}, function(modId) { var map = {"./gatherSequenceExpressions":1651912610461}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610461, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gatherSequenceExpressions;

var _getBindingIdentifiers = _interopRequireDefault(require("../retrievers/getBindingIdentifiers"));

var _generated = require("../validators/generated");

var _generated2 = require("../builders/generated");

var _cloneNode = _interopRequireDefault(require("../clone/cloneNode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function gatherSequenceExpressions(nodes, scope, declars) {
  var exprs = [];
  var ensureLastUndefined = true;

  for (var _iterator = nodes, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var node = _ref;
    ensureLastUndefined = false;

    if ((0, _generated.isExpression)(node)) {
      exprs.push(node);
    } else if ((0, _generated.isExpressionStatement)(node)) {
      exprs.push(node.expression);
    } else if ((0, _generated.isVariableDeclaration)(node)) {
      if (node.kind !== "var") return;
      var _arr = node.declarations;

      for (var _i2 = 0; _i2 < _arr.length; _i2++) {
        var declar = _arr[_i2];
        var bindings = (0, _getBindingIdentifiers.default)(declar);

        for (var key in bindings) {
          declars.push({
            kind: node.kind,
            id: (0, _cloneNode.default)(bindings[key])
          });
        }

        if (declar.init) {
          exprs.push((0, _generated2.assignmentExpression)("=", declar.id, declar.init));
        }
      }

      ensureLastUndefined = true;
    } else if ((0, _generated.isIfStatement)(node)) {
      var consequent = node.consequent ? gatherSequenceExpressions([node.consequent], scope, declars) : scope.buildUndefinedNode();
      var alternate = node.alternate ? gatherSequenceExpressions([node.alternate], scope, declars) : scope.buildUndefinedNode();
      if (!consequent || !alternate) return;
      exprs.push((0, _generated2.conditionalExpression)(node.test, consequent, alternate));
    } else if ((0, _generated.isBlockStatement)(node)) {
      var body = gatherSequenceExpressions(node.body, scope, declars);
      if (!body) return;
      exprs.push(body);
    } else if ((0, _generated.isEmptyStatement)(node)) {
      ensureLastUndefined = true;
    } else {
      return;
    }
  }

  if (ensureLastUndefined) {
    exprs.push(scope.buildUndefinedNode());
  }

  if (exprs.length === 1) {
    return exprs[0];
  } else {
    return (0, _generated2.sequenceExpression)(exprs);
  }
}
}, function(modId) { var map = {"../retrievers/getBindingIdentifiers":1651912610462,"../validators/generated":1651912610410,"../builders/generated":1651912610428,"../clone/cloneNode":1651912610437}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610462, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getBindingIdentifiers;

var _generated = require("../validators/generated");

function getBindingIdentifiers(node, duplicates, outerOnly) {
  var search = [].concat(node);
  var ids = Object.create(null);

  while (search.length) {
    var id = search.shift();
    if (!id) continue;
    var keys = getBindingIdentifiers.keys[id.type];

    if ((0, _generated.isIdentifier)(id)) {
      if (duplicates) {
        var _ids = ids[id.name] = ids[id.name] || [];

        _ids.push(id);
      } else {
        ids[id.name] = id;
      }

      continue;
    }

    if ((0, _generated.isExportDeclaration)(id)) {
      if ((0, _generated.isDeclaration)(id.declaration)) {
        search.push(id.declaration);
      }

      continue;
    }

    if (outerOnly) {
      if ((0, _generated.isFunctionDeclaration)(id)) {
        search.push(id.id);
        continue;
      }

      if ((0, _generated.isFunctionExpression)(id)) {
        continue;
      }
    }

    if (keys) {
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];

        if (id[key]) {
          search = search.concat(id[key]);
        }
      }
    }
  }

  return ids;
}

getBindingIdentifiers.keys = {
  DeclareClass: ["id"],
  DeclareFunction: ["id"],
  DeclareModule: ["id"],
  DeclareVariable: ["id"],
  InterfaceDeclaration: ["id"],
  TypeAlias: ["id"],
  OpaqueType: ["id"],
  CatchClause: ["param"],
  LabeledStatement: ["label"],
  UnaryExpression: ["argument"],
  AssignmentExpression: ["left"],
  ImportSpecifier: ["local"],
  ImportNamespaceSpecifier: ["local"],
  ImportDefaultSpecifier: ["local"],
  ImportDeclaration: ["specifiers"],
  ExportSpecifier: ["exported"],
  ExportNamespaceSpecifier: ["exported"],
  ExportDefaultSpecifier: ["exported"],
  FunctionDeclaration: ["id", "params"],
  FunctionExpression: ["id", "params"],
  ArrowFunctionExpression: ["params"],
  ObjectMethod: ["params"],
  ClassMethod: ["params"],
  ForInStatement: ["left"],
  ForOfStatement: ["left"],
  ClassDeclaration: ["id"],
  ClassExpression: ["id"],
  RestElement: ["argument"],
  UpdateExpression: ["argument"],
  ObjectProperty: ["value"],
  AssignmentPattern: ["left"],
  ArrayPattern: ["elements"],
  ObjectPattern: ["properties"],
  VariableDeclaration: ["declarations"],
  VariableDeclarator: ["id"]
};
}, function(modId) { var map = {"../validators/generated":1651912610410}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610463, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toStatement;

var _generated = require("../validators/generated");

var _generated2 = require("../builders/generated");

function toStatement(node, ignore) {
  if ((0, _generated.isStatement)(node)) {
    return node;
  }

  var mustHaveId = false;
  var newType;

  if ((0, _generated.isClass)(node)) {
    mustHaveId = true;
    newType = "ClassDeclaration";
  } else if ((0, _generated.isFunction)(node)) {
    mustHaveId = true;
    newType = "FunctionDeclaration";
  } else if ((0, _generated.isAssignmentExpression)(node)) {
    return (0, _generated2.expressionStatement)(node);
  }

  if (mustHaveId && !node.id) {
    newType = false;
  }

  if (!newType) {
    if (ignore) {
      return false;
    } else {
      throw new Error("cannot turn " + node.type + " to a statement");
    }
  }

  node.type = newType;
  return node;
}
}, function(modId) { var map = {"../validators/generated":1651912610410,"../builders/generated":1651912610428}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610464, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = valueToNode;

function _isPlainObject() {
  var data = _interopRequireDefault(require("lodash/isPlainObject"));

  _isPlainObject = function _isPlainObject() {
    return data;
  };

  return data;
}

function _isRegExp() {
  var data = _interopRequireDefault(require("lodash/isRegExp"));

  _isRegExp = function _isRegExp() {
    return data;
  };

  return data;
}

var _isValidIdentifier = _interopRequireDefault(require("../validators/isValidIdentifier"));

var _generated = require("../builders/generated");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function valueToNode(value) {
  if (value === undefined) {
    return (0, _generated.identifier)("undefined");
  }

  if (value === true || value === false) {
    return (0, _generated.booleanLiteral)(value);
  }

  if (value === null) {
    return (0, _generated.nullLiteral)();
  }

  if (typeof value === "string") {
    return (0, _generated.stringLiteral)(value);
  }

  if (typeof value === "number") {
    return (0, _generated.numericLiteral)(value);
  }

  if ((0, _isRegExp().default)(value)) {
    var pattern = value.source;
    var flags = value.toString().match(/\/([a-z]+|)$/)[1];
    return (0, _generated.regExpLiteral)(pattern, flags);
  }

  if (Array.isArray(value)) {
    return (0, _generated.arrayExpression)(value.map(valueToNode));
  }

  if ((0, _isPlainObject().default)(value)) {
    var props = [];

    for (var key in value) {
      var nodeKey = void 0;

      if ((0, _isValidIdentifier.default)(key)) {
        nodeKey = (0, _generated.identifier)(key);
      } else {
        nodeKey = (0, _generated.stringLiteral)(key);
      }

      props.push((0, _generated.objectProperty)(nodeKey, valueToNode(value[key])));
    }

    return (0, _generated.objectExpression)(props);
  }

  throw new Error("don't know how to turn this value into a node");
}
}, function(modId) { var map = {"../validators/isValidIdentifier":1651912610416,"../builders/generated":1651912610428}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610465, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = appendToMemberExpression;

var _generated = require("../builders/generated");

function appendToMemberExpression(member, append, computed) {
  if (computed === void 0) {
    computed = false;
  }

  member.object = (0, _generated.memberExpression)(member.object, member.property, member.computed);
  member.property = append;
  member.computed = !!computed;
  return member;
}
}, function(modId) { var map = {"../builders/generated":1651912610428}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610466, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = inherits;

var _constants = require("../constants");

var _inheritsComments = _interopRequireDefault(require("../comments/inheritsComments"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function inherits(child, parent) {
  if (!child || !parent) return child;
  var _arr = _constants.INHERIT_KEYS.optional;

  for (var _i = 0; _i < _arr.length; _i++) {
    var _key = _arr[_i];

    if (child[_key] == null) {
      child[_key] = parent[_key];
    }
  }

  for (var key in parent) {
    if (key[0] === "_" && key !== "__clone") child[key] = parent[key];
  }

  var _arr2 = _constants.INHERIT_KEYS.force;

  for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
    var _key2 = _arr2[_i2];
    child[_key2] = parent[_key2];
  }

  (0, _inheritsComments.default)(child, parent);
  return child;
}
}, function(modId) { var map = {"../constants":1651912610417,"../comments/inheritsComments":1651912610446}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610467, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prependToMemberExpression;

var _generated = require("../builders/generated");

function prependToMemberExpression(member, prepend) {
  member.object = (0, _generated.memberExpression)(prepend, member.object);
  return member;
}
}, function(modId) { var map = {"../builders/generated":1651912610428}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610468, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getOuterBindingIdentifiers;

var _getBindingIdentifiers = _interopRequireDefault(require("./getBindingIdentifiers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getOuterBindingIdentifiers(node, duplicates) {
  return (0, _getBindingIdentifiers.default)(node, duplicates, true);
}
}, function(modId) { var map = {"./getBindingIdentifiers":1651912610462}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610469, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = traverse;

var _definitions = require("../definitions");

function traverse(node, handlers, state) {
  if (typeof handlers === "function") {
    handlers = {
      enter: handlers
    };
  }

  var _ref = handlers,
      enter = _ref.enter,
      exit = _ref.exit;
  traverseSimpleImpl(node, enter, exit, state, []);
}

function traverseSimpleImpl(node, enter, exit, state, ancestors) {
  var keys = _definitions.VISITOR_KEYS[node.type];
  if (!keys) return;
  if (enter) enter(node, ancestors, state);

  for (var _iterator = keys, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref2;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref2 = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref2 = _i.value;
    }

    var _key = _ref2;
    var subNode = node[_key];

    if (Array.isArray(subNode)) {
      for (var i = 0; i < subNode.length; i++) {
        var child = subNode[i];
        if (!child) continue;
        ancestors.push({
          node: node,
          key: _key,
          index: i
        });
        traverseSimpleImpl(child, enter, exit, state, ancestors);
        ancestors.pop();
      }
    } else if (subNode) {
      ancestors.push({
        node: node,
        key: _key
      });
      traverseSimpleImpl(subNode, enter, exit, state, ancestors);
      ancestors.pop();
    }
  }

  if (exit) exit(node, ancestors, state);
}
}, function(modId) { var map = {"../definitions":1651912610414}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610470, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBinding;

var _getBindingIdentifiers = _interopRequireDefault(require("../retrievers/getBindingIdentifiers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isBinding(node, parent) {
  var keys = _getBindingIdentifiers.default.keys[parent.type];

  if (keys) {
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var val = parent[key];

      if (Array.isArray(val)) {
        if (val.indexOf(node) >= 0) return true;
      } else {
        if (val === node) return true;
      }
    }
  }

  return false;
}
}, function(modId) { var map = {"../retrievers/getBindingIdentifiers":1651912610462}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610471, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBlockScoped;

var _generated = require("./generated");

var _isLet = _interopRequireDefault(require("./isLet"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isBlockScoped(node) {
  return (0, _generated.isFunctionDeclaration)(node) || (0, _generated.isClassDeclaration)(node) || (0, _isLet.default)(node);
}
}, function(modId) { var map = {"./generated":1651912610410,"./isLet":1651912610472}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610472, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isLet;

var _generated = require("./generated");

var _constants = require("../constants");

function isLet(node) {
  return (0, _generated.isVariableDeclaration)(node) && (node.kind !== "var" || node[_constants.BLOCK_SCOPED_SYMBOL]);
}
}, function(modId) { var map = {"./generated":1651912610410,"../constants":1651912610417}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610473, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isImmutable;

var _isType = _interopRequireDefault(require("./isType"));

var _generated = require("./generated");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isImmutable(node) {
  if ((0, _isType.default)(node.type, "Immutable")) return true;

  if ((0, _generated.isIdentifier)(node)) {
    if (node.name === "undefined") {
      return true;
    } else {
      return false;
    }
  }

  return false;
}
}, function(modId) { var map = {"./isType":1651912610413,"./generated":1651912610410}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610474, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isNodesEquivalent;

var _definitions = require("../definitions");

function isNodesEquivalent(a, b) {
  if (typeof a !== "object" || typeof b !== "object" || a == null || b == null) {
    return a === b;
  }

  if (a.type !== b.type) {
    return false;
  }

  var fields = Object.keys(_definitions.NODE_FIELDS[a.type] || a.type);

  for (var _i = 0; _i < fields.length; _i++) {
    var field = fields[_i];

    if (typeof a[field] !== typeof b[field]) {
      return false;
    }

    if (Array.isArray(a[field])) {
      if (!Array.isArray(b[field])) {
        return false;
      }

      if (a[field].length !== b[field].length) {
        return false;
      }

      for (var i = 0; i < a[field].length; i++) {
        if (!isNodesEquivalent(a[field][i], b[field][i])) {
          return false;
        }
      }

      continue;
    }

    if (!isNodesEquivalent(a[field], b[field])) {
      return false;
    }
  }

  return true;
}
}, function(modId) { var map = {"../definitions":1651912610414}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610475, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isReferenced;

function isReferenced(node, parent) {
  switch (parent.type) {
    case "BindExpression":
      return parent.object === node || parent.callee === node;

    case "MemberExpression":
    case "JSXMemberExpression":
      if (parent.property === node && parent.computed) {
        return true;
      } else if (parent.object === node) {
        return true;
      } else {
        return false;
      }

    case "MetaProperty":
      return false;

    case "ObjectProperty":
      if (parent.key === node) {
        return parent.computed;
      }

    case "VariableDeclarator":
      return parent.id !== node;

    case "ArrowFunctionExpression":
    case "FunctionDeclaration":
    case "FunctionExpression":
      var _arr = parent.params;

      for (var _i = 0; _i < _arr.length; _i++) {
        var param = _arr[_i];
        if (param === node) return false;
      }

      return parent.id !== node;

    case "ExportSpecifier":
      if (parent.source) {
        return false;
      } else {
        return parent.local === node;
      }

    case "ExportNamespaceSpecifier":
    case "ExportDefaultSpecifier":
      return false;

    case "JSXAttribute":
      return parent.name !== node;

    case "ClassProperty":
      if (parent.key === node) {
        return parent.computed;
      } else {
        return parent.value === node;
      }

    case "ImportDefaultSpecifier":
    case "ImportNamespaceSpecifier":
    case "ImportSpecifier":
      return false;

    case "ClassDeclaration":
    case "ClassExpression":
      return parent.id !== node;

    case "ClassMethod":
    case "ObjectMethod":
      return parent.key === node && parent.computed;

    case "LabeledStatement":
      return false;

    case "CatchClause":
      return parent.param !== node;

    case "RestElement":
      return false;

    case "AssignmentExpression":
      return parent.right === node;

    case "AssignmentPattern":
      return parent.right === node;

    case "ObjectPattern":
    case "ArrayPattern":
      return false;
  }

  return true;
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610476, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isScope;

var _generated = require("./generated");

function isScope(node, parent) {
  if ((0, _generated.isBlockStatement)(node) && (0, _generated.isFunction)(parent, {
    body: node
  })) {
    return false;
  }

  if ((0, _generated.isBlockStatement)(node) && (0, _generated.isCatchClause)(parent, {
    body: node
  })) {
    return false;
  }

  return (0, _generated.isScopable)(node);
}
}, function(modId) { var map = {"./generated":1651912610410}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610477, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isSpecifierDefault;

var _generated = require("./generated");

function isSpecifierDefault(specifier) {
  return (0, _generated.isImportDefaultSpecifier)(specifier) || (0, _generated.isIdentifier)(specifier.imported || specifier.exported, {
    name: "default"
  });
}
}, function(modId) { var map = {"./generated":1651912610410}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610478, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isValidES3Identifier;

var _isValidIdentifier = _interopRequireDefault(require("./isValidIdentifier"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RESERVED_WORDS_ES3_ONLY = new Set(["abstract", "boolean", "byte", "char", "double", "enum", "final", "float", "goto", "implements", "int", "interface", "long", "native", "package", "private", "protected", "public", "short", "static", "synchronized", "throws", "transient", "volatile"]);

function isValidES3Identifier(name) {
  return (0, _isValidIdentifier.default)(name) && !RESERVED_WORDS_ES3_ONLY.has(name);
}
}, function(modId) { var map = {"./isValidIdentifier":1651912610416}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610479, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isVar;

var _generated = require("./generated");

var _constants = require("../constants");

function isVar(node) {
  return (0, _generated.isVariableDeclaration)(node, {
    kind: "var"
  }) && !node[_constants.BLOCK_SCOPED_SYMBOL];
}
}, function(modId) { var map = {"./generated":1651912610410,"../constants":1651912610417}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1651912610406);
})()
//miniprogram-npm-outsideDeps=["to-fast-properties","esutils","lodash/clone","lodash/uniq","lodash/isPlainObject","lodash/isRegExp"]
//# sourceMappingURL=index.js.map