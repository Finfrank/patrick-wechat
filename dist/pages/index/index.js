(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/pages/index/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/pages/index/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Index; });
/* harmony import */ var _Users_liu_Desktop_patrick_wechat_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_liu_Desktop_patrick_wechat_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_liu_Desktop_patrick_wechat_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_liu_Desktop_patrick_wechat_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! taro-ui */ "./node_modules/taro-ui/dist/index.esm.js");
/* harmony import */ var _actions_questionnaires__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../actions/questionnaires */ "./src/actions/questionnaires.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index.scss */ "./src/pages/index/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);











function Index() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[/* useDispatch */ "c"])();
  var questionnaires = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[/* useSelector */ "d"])(function (state) {
    return state.questionnaires.list;
  });
  var loading = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[/* useSelector */ "d"])(function (state) {
    return state.questionnaires.loading;
  });

  var fetchData = /*#__PURE__*/function () {
    var _ref = Object(_Users_liu_Desktop_patrick_wechat_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])( /*#__PURE__*/_Users_liu_Desktop_patrick_wechat_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      return _Users_liu_Desktop_patrick_wechat_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.showNavigationBarLoading();
              _context.next = 3;
              return dispatch(Object(_actions_questionnaires__WEBPACK_IMPORTED_MODULE_7__[/* fetchQuestionnaires */ "c"])());

            case 3:
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.hideNavigationBarLoading();

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function fetchData() {
      return _ref.apply(this, arguments);
    };
  }();

  var fetchDataCallback = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(fetchData, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    fetchDataCallback();
  }, [fetchDataCallback]);
  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_4__["usePullDownRefresh"])( /*#__PURE__*/Object(_Users_liu_Desktop_patrick_wechat_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])( /*#__PURE__*/_Users_liu_Desktop_patrick_wechat_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
    return _Users_liu_Desktop_patrick_wechat_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetchData();

          case 2:
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.stopPullDownRefresh();

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_4__["useShareAppMessage"])(function () {
    return {
      title: '防疫小助手',
      path: '/pages/index/index'
    };
  });

  var handleClick = function handleClick(item) {
    return _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.navigateTo({
      url: "/pages/introduce/index?questionnaireId=".concat(item.id)
    });
  };

  var questionnaireList = questionnaires.map(function (item) {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_6__[/* AtListItem */ "d"], {
      title: item.title,
      extraText: "".concat(item.duration, " \u5206\u949F"),
      arrow: "right",
      onClick: function onClick() {
        return handleClick(item);
      }
    }, item.id);
  });
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "q"], {
    className: "page",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "q"], {
      className: "doc-body bg",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "q"], {
        className: "panel",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "q"], {
          className: "panel__title",
          children: "\u95EE\u5377\u5217\u8868"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "q"], {
          className: "panel__content no-padding",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "q"], {
            className: "example-item list",
            children: loading ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_6__[/* AtActivityIndicator */ "a"], {
              mode: "center"
            }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_6__[/* AtList */ "c"], {
              children: questionnaireList
            })
          })
        })]
      })
    })
  });
}

/***/ }),

/***/ "./src/pages/index/index.js":
/*!**********************************!*\
  !*** ./src/pages/index/index.js ***!
  \**********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib!./index.js */ "./node_modules/babel-loader/lib/index.js!./src/pages/index/index.js");


var config = {"navigationBarTitleText":"防疫小助手","enablePullDownRefresh":true,"enableShareAppMessage":true};

_node_modules_babel_loader_lib_index_js_index_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].enableShareAppMessage = true
var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/index/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/pages/index/index.scss":
/*!************************************!*\
  !*** ./src/pages/index/index.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/index/index.js","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map