module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1651912610536, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _helperPluginUtils = require("@babel/helper-plugin-utils");

var _default = (0, _helperPluginUtils.declare)((api, options) => {
  api.assertVersion(7);
  const {
    legacy,
    version = legacy ? "legacy" : "2018-09",
    decoratorsBeforeExport = version === "2021-12" ? false : undefined
  } = options;

  if (version !== "2021-12" && version !== "2018-09" && version !== "legacy") {
    throw new Error("Unsupported decorators version: " + version);
  }

  if (legacy !== undefined) {
    if (typeof legacy !== "boolean") {
      throw new Error(".legacy must be a boolean.");
    }

    if (options.version !== undefined) {
      throw new Error("You can either use the .legacy or the .version option, not both.");
    }
  }

  if (decoratorsBeforeExport === undefined) {
    if (version === "2018-09") {
      throw new Error("The decorators plugin, when .version is '2018-09' or not specified," + " requires a 'decoratorsBeforeExport' option, whose value must be a boolean.");
    }
  } else {
    if (version === "legacy") {
      throw new Error("'decoratorsBeforeExport' can't be used with legacy decorators.");
    }

    if (typeof decoratorsBeforeExport !== "boolean") {
      throw new Error("'decoratorsBeforeExport' must be a boolean.");
    }
  }

  return {
    name: "syntax-decorators",

    manipulateOptions({
      generatorOpts
    }, parserOpts) {
      if (version === "legacy") {
        parserOpts.plugins.push("decorators-legacy");
      } else if (version === "2018-09") {
        parserOpts.plugins.push(["decorators", {
          decoratorsBeforeExport
        }]);
        generatorOpts.decoratorsBeforeExport = decoratorsBeforeExport;
      } else {
        parserOpts.plugins.push(["decorators", {
          decoratorsBeforeExport
        }], "decoratorAutoAccessors");
        generatorOpts.decoratorsBeforeExport = decoratorsBeforeExport;
      }
    }

  };
});

exports.default = _default;
}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1651912610536);
})()
//miniprogram-npm-outsideDeps=["@babel/helper-plugin-utils"]
//# sourceMappingURL=index.js.map