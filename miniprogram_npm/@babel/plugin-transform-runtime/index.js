module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1651912610580, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _helperPluginUtils = require("@babel/helper-plugin-utils");

var _helperModuleImports = require("@babel/helper-module-imports");

var _core = require("@babel/core");

var _helpers = require("./helpers");

var _getRuntimePath = require("./get-runtime-path");

var _babelPluginPolyfillCorejs = require("babel-plugin-polyfill-corejs2");

var _babelPluginPolyfillCorejs2 = require("babel-plugin-polyfill-corejs3");

var _babelPluginPolyfillRegenerator = require("babel-plugin-polyfill-regenerator");

const pluginCorejs2 = _babelPluginPolyfillCorejs.default || _babelPluginPolyfillCorejs;
const pluginCorejs3 = _babelPluginPolyfillCorejs2.default || _babelPluginPolyfillCorejs2;
const pluginRegenerator = _babelPluginPolyfillRegenerator.default || _babelPluginPolyfillRegenerator;
const pluginsCompat = "#__secret_key__@babel/runtime__compatibility";

function supportsStaticESM(caller) {
  return !!(caller != null && caller.supportsStaticESM);
}

var _default = (0, _helperPluginUtils.declare)((api, options, dirname) => {
  api.assertVersion(7);
  const {
    corejs,
    helpers: useRuntimeHelpers = true,
    regenerator: useRuntimeRegenerator = true,
    useESModules = false,
    version: runtimeVersion = "7.0.0-beta.0",
    absoluteRuntime = false
  } = options;
  let proposals = false;
  let rawVersion;

  if (typeof corejs === "object" && corejs !== null) {
    rawVersion = corejs.version;
    proposals = Boolean(corejs.proposals);
  } else {
    rawVersion = corejs;
  }

  const corejsVersion = rawVersion ? Number(rawVersion) : false;

  if (![false, 2, 3].includes(corejsVersion)) {
    throw new Error(`The \`core-js\` version must be false, 2 or 3, but got ${JSON.stringify(rawVersion)}.`);
  }

  if (proposals && (!corejsVersion || corejsVersion < 3)) {
    throw new Error("The 'proposals' option is only supported when using 'corejs: 3'");
  }

  if (typeof useRuntimeRegenerator !== "boolean") {
    throw new Error("The 'regenerator' option must be undefined, or a boolean.");
  }

  if (typeof useRuntimeHelpers !== "boolean") {
    throw new Error("The 'helpers' option must be undefined, or a boolean.");
  }

  if (typeof useESModules !== "boolean" && useESModules !== "auto") {
    throw new Error("The 'useESModules' option must be undefined, or a boolean, or 'auto'.");
  }

  if (typeof absoluteRuntime !== "boolean" && typeof absoluteRuntime !== "string") {
    throw new Error("The 'absoluteRuntime' option must be undefined, a boolean, or a string.");
  }

  if (typeof runtimeVersion !== "string") {
    throw new Error(`The 'version' option must be a version string.`);
  }

  {
    const DUAL_MODE_RUNTIME = "7.13.0";
    var supportsCJSDefault = (0, _helpers.hasMinVersion)(DUAL_MODE_RUNTIME, runtimeVersion);
  }

  function has(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
  }

  if (has(options, "useBuiltIns")) {
    if (options.useBuiltIns) {
      throw new Error("The 'useBuiltIns' option has been removed. The @babel/runtime " + "module now uses builtins by default.");
    } else {
      throw new Error("The 'useBuiltIns' option has been removed. Use the 'corejs'" + "option to polyfill with `core-js` via @babel/runtime.");
    }
  }

  if (has(options, "polyfill")) {
    if (options.polyfill === false) {
      throw new Error("The 'polyfill' option has been removed. The @babel/runtime " + "module now skips polyfilling by default.");
    } else {
      throw new Error("The 'polyfill' option has been removed. Use the 'corejs'" + "option to polyfill with `core-js` via @babel/runtime.");
    }
  }

  if (has(options, "moduleName")) {
    throw new Error("The 'moduleName' option has been removed. @babel/transform-runtime " + "no longer supports arbitrary runtimes. If you were using this to " + "set an absolute path for Babel's standard runtimes, please use the " + "'absoluteRuntime' option.");
  }

  const esModules = useESModules === "auto" ? api.caller(supportsStaticESM) : useESModules;
  const injectCoreJS2 = corejsVersion === 2;
  const injectCoreJS3 = corejsVersion === 3;
  const moduleName = injectCoreJS3 ? "@babel/runtime-corejs3" : injectCoreJS2 ? "@babel/runtime-corejs2" : "@babel/runtime";
  const HEADER_HELPERS = ["interopRequireWildcard", "interopRequireDefault"];
  const modulePath = (0, _getRuntimePath.default)(moduleName, dirname, absoluteRuntime);

  function createCorejsPlgin(plugin, options, regeneratorPlugin) {
    return (api, _, filename) => {
      return Object.assign({}, plugin(api, options, filename), {
        inherits: regeneratorPlugin
      });
    };
  }

  function createRegeneratorPlugin(options) {
    if (!useRuntimeRegenerator) return undefined;
    return (api, _, filename) => {
      return pluginRegenerator(api, options, filename);
    };
  }

  return {
    name: "transform-runtime",
    inherits: injectCoreJS2 ? createCorejsPlgin(pluginCorejs2, {
      method: "usage-pure",
      absoluteImports: absoluteRuntime ? modulePath : false,
      [pluginsCompat]: {
        runtimeVersion,
        useBabelRuntime: modulePath,
        ext: ""
      }
    }, createRegeneratorPlugin({
      method: "usage-pure",
      absoluteImports: absoluteRuntime ? modulePath : false,
      [pluginsCompat]: {
        useBabelRuntime: modulePath
      }
    })) : injectCoreJS3 ? createCorejsPlgin(pluginCorejs3, {
      method: "usage-pure",
      version: 3,
      proposals,
      absoluteImports: absoluteRuntime ? modulePath : false,
      [pluginsCompat]: {
        useBabelRuntime: modulePath,
        ext: ""
      }
    }, createRegeneratorPlugin({
      method: "usage-pure",
      absoluteImports: absoluteRuntime ? modulePath : false,
      [pluginsCompat]: {
        useBabelRuntime: modulePath
      }
    })) : createRegeneratorPlugin({
      method: "usage-pure",
      absoluteImports: absoluteRuntime ? modulePath : false,
      [pluginsCompat]: {
        useBabelRuntime: modulePath
      }
    }),

    pre(file) {
      if (!useRuntimeHelpers) return;
      file.set("helperGenerator", name => {
        if (file.availableHelper && !file.availableHelper(name, runtimeVersion)) {
          return;
        }

        const isInteropHelper = HEADER_HELPERS.indexOf(name) !== -1;
        const blockHoist = isInteropHelper && !(0, _helperModuleImports.isModule)(file.path) ? 4 : undefined;
        const helpersDir = esModules && file.path.node.sourceType === "module" ? "helpers/esm" : "helpers";
        let helperPath = `${modulePath}/${helpersDir}/${name}`;
        if (absoluteRuntime) helperPath = (0, _getRuntimePath.resolveFSPath)(helperPath);
        return addDefaultImport(helperPath, name, blockHoist, true);
      });
      const cache = new Map();

      function addDefaultImport(source, nameHint, blockHoist, isHelper = false) {
        const cacheKey = (0, _helperModuleImports.isModule)(file.path);
        const key = `${source}:${nameHint}:${cacheKey || ""}`;
        let cached = cache.get(key);

        if (cached) {
          cached = _core.types.cloneNode(cached);
        } else {
          cached = (0, _helperModuleImports.addDefault)(file.path, source, {
            importedInterop: isHelper && supportsCJSDefault ? "compiled" : "uncompiled",
            nameHint,
            blockHoist
          });
          cache.set(key, cached);
        }

        return cached;
      }
    }

  };
});

exports.default = _default;
}, function(modId) {var map = {"./helpers":1651912610581,"./get-runtime-path":1651912610582}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610581, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasMinVersion = hasMinVersion;

var _semver = require("semver");

function hasMinVersion(minVersion, runtimeVersion) {
  if (!runtimeVersion) return true;
  if (_semver.valid(runtimeVersion)) runtimeVersion = `^${runtimeVersion}`;
  return !_semver.intersects(`<${minVersion}`, runtimeVersion) && !_semver.intersects(`>=8.0.0`, runtimeVersion);
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1651912610582, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
exports.resolveFSPath = resolveFSPath;

var _path = require("path");

var _module = require("module");

function _default(moduleName, dirname, absoluteRuntime) {
  if (absoluteRuntime === false) return moduleName;
  return resolveAbsoluteRuntime(moduleName, _path.resolve(dirname, absoluteRuntime === true ? "." : absoluteRuntime));
}

function resolveAbsoluteRuntime(moduleName, dirname) {
  try {
    return _path.dirname((((v, w) => (v = v.split("."), w = w.split("."), +v[0] > +w[0] || v[0] == w[0] && +v[1] >= +w[1]))(process.versions.node, "8.9") ? require.resolve : (r, {
      paths: [b]
    }, M = require("module")) => {
      let f = M._findPath(r, M._nodeModulePaths(b).concat(b));

      if (f) return f;
      f = new Error(`Cannot resolve module '${r}'`);
      f.code = "MODULE_NOT_FOUND";
      throw f;
    })(`${moduleName}/package.json`, {
      paths: [dirname]
    })).replace(/\\/g, "/");
  } catch (err) {
    if (err.code !== "MODULE_NOT_FOUND") throw err;
    throw Object.assign(new Error(`Failed to resolve "${moduleName}" relative to "${dirname}"`), {
      code: "BABEL_RUNTIME_NOT_FOUND",
      runtime: moduleName,
      dirname
    });
  }
}

function resolveFSPath(path) {
  return require.resolve(path).replace(/\\/g, "/");
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1651912610580);
})()
//miniprogram-npm-outsideDeps=["@babel/helper-plugin-utils","@babel/helper-module-imports","@babel/core","babel-plugin-polyfill-corejs2","babel-plugin-polyfill-corejs3","babel-plugin-polyfill-regenerator","semver","path","module"]
//# sourceMappingURL=index.js.map