module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1651912610567, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _helperPluginUtils = require("@babel/helper-plugin-utils");

var _helperModuleTransforms = require("@babel/helper-module-transforms");

var _core = require("@babel/core");

var _utils = require("babel-plugin-dynamic-import-node/utils");

const buildWrapper = (0, _core.template)(`
  define(MODULE_NAME, AMD_ARGUMENTS, function(IMPORT_NAMES) {
  })
`);
const buildAnonymousWrapper = (0, _core.template)(`
  define(["require"], function(REQUIRE) {
  })
`);

function injectWrapper(path, wrapper) {
  const {
    body,
    directives
  } = path.node;
  path.node.directives = [];
  path.node.body = [];
  const amdWrapper = path.pushContainer("body", wrapper)[0];
  const amdFactory = amdWrapper.get("expression.arguments").filter(arg => arg.isFunctionExpression())[0].get("body");
  amdFactory.pushContainer("directives", directives);
  amdFactory.pushContainer("body", body);
}

var _default = (0, _helperPluginUtils.declare)((api, options) => {
  var _api$assumption, _api$assumption2;

  api.assertVersion(7);
  const {
    allowTopLevelThis,
    strict,
    strictMode,
    importInterop,
    noInterop
  } = options;
  const constantReexports = (_api$assumption = api.assumption("constantReexports")) != null ? _api$assumption : options.loose;
  const enumerableModuleMeta = (_api$assumption2 = api.assumption("enumerableModuleMeta")) != null ? _api$assumption2 : options.loose;
  return {
    name: "transform-modules-amd",

    pre() {
      this.file.set("@babel/plugin-transform-modules-*", "amd");
    },

    visitor: {
      CallExpression(path, state) {
        if (!this.file.has("@babel/plugin-proposal-dynamic-import")) return;
        if (!path.get("callee").isImport()) return;
        let {
          requireId,
          resolveId,
          rejectId
        } = state;

        if (!requireId) {
          requireId = path.scope.generateUidIdentifier("require");
          state.requireId = requireId;
        }

        if (!resolveId || !rejectId) {
          resolveId = path.scope.generateUidIdentifier("resolve");
          rejectId = path.scope.generateUidIdentifier("reject");
          state.resolveId = resolveId;
          state.rejectId = rejectId;
        }

        let result = _core.types.identifier("imported");

        if (!noInterop) result = (0, _helperModuleTransforms.wrapInterop)(path, result, "namespace");
        path.replaceWith(_core.template.expression.ast`
            new Promise((${resolveId}, ${rejectId}) =>
              ${requireId}(
                [${(0, _utils.getImportSource)(_core.types, path.node)}],
                imported => ${_core.types.cloneNode(resolveId)}(${result}),
                ${_core.types.cloneNode(rejectId)}
              )
            )`);
      },

      Program: {
        exit(path, {
          requireId
        }) {
          if (!(0, _helperModuleTransforms.isModule)(path)) {
            if (requireId) {
              injectWrapper(path, buildAnonymousWrapper({
                REQUIRE: _core.types.cloneNode(requireId)
              }));
            }

            return;
          }

          const amdArgs = [];
          const importNames = [];

          if (requireId) {
            amdArgs.push(_core.types.stringLiteral("require"));
            importNames.push(_core.types.cloneNode(requireId));
          }

          let moduleName = (0, _helperModuleTransforms.getModuleName)(this.file.opts, options);
          if (moduleName) moduleName = _core.types.stringLiteral(moduleName);
          const {
            meta,
            headers
          } = (0, _helperModuleTransforms.rewriteModuleStatementsAndPrepareHeader)(path, {
            enumerableModuleMeta,
            constantReexports,
            strict,
            strictMode,
            allowTopLevelThis,
            importInterop,
            noInterop
          });

          if ((0, _helperModuleTransforms.hasExports)(meta)) {
            amdArgs.push(_core.types.stringLiteral("exports"));
            importNames.push(_core.types.identifier(meta.exportName));
          }

          for (const [source, metadata] of meta.source) {
            amdArgs.push(_core.types.stringLiteral(source));
            importNames.push(_core.types.identifier(metadata.name));

            if (!(0, _helperModuleTransforms.isSideEffectImport)(metadata)) {
              const interop = (0, _helperModuleTransforms.wrapInterop)(path, _core.types.identifier(metadata.name), metadata.interop);

              if (interop) {
                const header = _core.types.expressionStatement(_core.types.assignmentExpression("=", _core.types.identifier(metadata.name), interop));

                header.loc = metadata.loc;
                headers.push(header);
              }
            }

            headers.push(...(0, _helperModuleTransforms.buildNamespaceInitStatements)(meta, metadata, constantReexports));
          }

          (0, _helperModuleTransforms.ensureStatementsHoisted)(headers);
          path.unshiftContainer("body", headers);
          injectWrapper(path, buildWrapper({
            MODULE_NAME: moduleName,
            AMD_ARGUMENTS: _core.types.arrayExpression(amdArgs),
            IMPORT_NAMES: importNames
          }));
        }

      }
    }
  };
});

exports.default = _default;
}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1651912610567);
})()
//miniprogram-npm-outsideDeps=["@babel/helper-plugin-utils","@babel/helper-module-transforms","@babel/core","babel-plugin-dynamic-import-node/utils"]
//# sourceMappingURL=index.js.map