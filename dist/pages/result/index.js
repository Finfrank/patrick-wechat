(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/result/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/pages/result/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/pages/result/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_liu_Desktop_patrick_wechat_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_liu_Desktop_patrick_wechat_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_liu_Desktop_patrick_wechat_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_liu_Desktop_patrick_wechat_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_liu_Desktop_patrick_wechat_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_liu_Desktop_patrick_wechat_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index.scss */ "./src/pages/result/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);












var Result = /*#__PURE__*/function (_Component) {
  Object(_Users_liu_Desktop_patrick_wechat_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Result, _Component);

  var _super = Object(_Users_liu_Desktop_patrick_wechat_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Result);

  function Result() {
    var _this;

    Object(_Users_liu_Desktop_patrick_wechat_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Result);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_Users_liu_Desktop_patrick_wechat_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_liu_Desktop_patrick_wechat_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "initChart", function (canvas, width, height, F2) {
      var data = [{
        name: '属性1',
        value: 6
      }, {
        name: '属性2',
        value: 9.5
      }, {
        name: '属性3',
        value: 9
      }, {
        name: '属性4',
        value: 6
      }, {
        name: '属性5',
        value: 6
      }, {
        name: '属性6',
        value: 8
      }];
      var chart = new F2.Chart({
        el: canvas,
        width: width,
        height: height
      });
      chart.source(data, {
        value: {
          min: 0,
          max: 10
        }
      });
      chart.coord('polar');
      chart.tooltip(false); // 关闭 tooltip

      chart.axis('value', {
        grid: {
          lineDash: null
        },
        label: null,
        line: null
      });
      chart.axis('name', {
        grid: {
          lineDash: null
        }
      });
      chart.area().position('name*value').style({
        fillOpacity: 0.2
      }).animate({
        appear: {
          animation: 'groupWaveIn'
        }
      });
      chart.line().position('name*value').size(1).animate({
        appear: {
          animation: 'groupWaveIn'
        }
      });
      chart.point().position('name*value').animate({
        appear: {
          delay: 300
        }
      });
      chart.guide().text({
        position: ['50%', '50%'],
        content: '73',
        style: {
          fontSize: 32,
          fontWeight: 'bold'
        }
      });
      chart.render();
      return chart;
    });

    return _this;
  }

  Object(_Users_liu_Desktop_patrick_wechat_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Result, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log('result mount');
    }
  }, {
    key: "onShareAppMessage",
    value: function onShareAppMessage() {
      return {
        title: '网络文明周',
        path: '/pages/result/index'
      };
    }
  }, {
    key: "render",
    value: function render() {
      var opts = {
        onInit: this.initChart
      };
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
        className: "page",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
          className: "doc-body bg",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
            className: "panel",
            children: ["\u5F85\u5B9E\u73B0", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])("chart-canvas", {
              opts: opts
            })]
          })
        })
      });
    }
  }]);

  return Result;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Result);

/***/ }),

/***/ "./src/pages/result/index.js":
/*!***********************************!*\
  !*** ./src/pages/result/index.js ***!
  \***********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib!./index.js */ "./node_modules/babel-loader/lib/index.js!./src/pages/result/index.js");


var config = {"navigationBarTitleText":"结果","enableShareAppMessage":true,"usingComponents":{"chart-canvas":"../../components/chart-canvas/index"}};

_node_modules_babel_loader_lib_index_js_index_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].enableShareAppMessage = true
var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/result/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/pages/result/index.scss":
/*!*************************************!*\
  !*** ./src/pages/result/index.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/result/index.js","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map