(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/introduce/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/pages/introduce/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/pages/introduce/index.js ***!
  \**********************************************************************/
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! taro-ui */ "./node_modules/taro-ui/dist/index.esm.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./index.scss */ "./src/pages/introduce/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);







var _dec, _class;









var Introduce = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__[/* connect */ "b"])(function (_ref) {
  var questionnaires = _ref.questionnaires;
  return {
    questionnaires: questionnaires.list
  };
}), _dec(_class = /*#__PURE__*/function (_Component) {
  Object(_Users_liu_Desktop_patrick_wechat_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Introduce, _Component);

  var _super = Object(_Users_liu_Desktop_patrick_wechat_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Introduce);

  function Introduce() {
    var _this;

    Object(_Users_liu_Desktop_patrick_wechat_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Introduce);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_Users_liu_Desktop_patrick_wechat_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_liu_Desktop_patrick_wechat_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "state", {
      questionnaireId: ''
    });

    Object(_Users_liu_Desktop_patrick_wechat_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_liu_Desktop_patrick_wechat_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "handleAnswer", function () {
      var questionnaireId = _this.state.questionnaireId;
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.navigateTo({
        url: "/pages/questionnaire/index?questionnaireId=".concat(questionnaireId)
      });
    });

    return _this;
  }

  Object(_Users_liu_Desktop_patrick_wechat_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Introduce, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _getCurrentInstance = Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_8__["getCurrentInstance"])(),
          router = _getCurrentInstance.router;

      var questionnaireId = router.params.questionnaireId;
      this.setState({
        questionnaireId: parseInt(questionnaireId)
      });
    } // auto invoke when share

  }, {
    key: "onShareAppMessage",
    value: function onShareAppMessage() {
      var questionnaireId = this.state.questionnaireId;
      return {
        title: '问卷测评',
        path: "/pages/introduce/index?questionnaireId=".concat(questionnaireId)
      };
    }
  }, {
    key: "render",
    value: function render() {
      var questionnaires = this.props.questionnaires;
      var questionnaireId = this.state.questionnaireId;
      console.log(questionnaireId);
      var questionnaire = questionnaires.find(function (item) {
        return item.id === questionnaireId;
      }) || {};
      var title = questionnaire.title,
          imageUrl = questionnaire.imageUrl,
          duration = questionnaire.duration,
          description = questionnaire.description;
      var questionSize = (questionnaire.questions || []).length;
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "q"], {
        className: "page",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "q"], {
          className: "doc-body bg",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "q"], {
            className: "head",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "q"], {
              className: "image",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Image */ "c"], {
                src: imageUrl
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Text */ "o"], {
                children: title
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "q"], {
              className: "desc",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Text */ "o"], {
                children: [questionSize, " \u9053\u9898"]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Text */ "o"], {
                children: [duration, " \u5206\u949F"]
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "q"], {
              className: "btns",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_10__[/* AtButton */ "b"], {
                circle: true,
                type: "secondary",
                openType: "share",
                children: "\u5206\u4EAB\u597D\u53CB"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_10__[/* AtButton */ "b"], {
                circle: true,
                type: "primary",
                onClick: this.handleAnswer,
                children: "\u5F00\u59CB\u7B54\u9898"
              })]
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "q"], {
            className: "panel desc",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "q"], {
              className: "panel__title title",
              children: "\u95EE\u5377\u7B80\u4ECB"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "q"], {
              className: "panel__content no-padding txt",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Text */ "o"], {
                children: description
              })
            })]
          })]
        })
      });
    }
  }]);

  return Introduce;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"])) || _class);
/* harmony default export */ __webpack_exports__["a"] = (Introduce);

/***/ }),

/***/ "./src/pages/introduce/index.js":
/*!**************************************!*\
  !*** ./src/pages/introduce/index.js ***!
  \**************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib!./index.js */ "./node_modules/babel-loader/lib/index.js!./src/pages/introduce/index.js");


var config = {"navigationBarTitleText":"问卷简介","navigationBarBackgroundColor":"#F0F0F0","backgroundColor":"#F0F0F0"};

_node_modules_babel_loader_lib_index_js_index_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].enableShareAppMessage = true
var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/introduce/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/pages/introduce/index.scss":
/*!****************************************!*\
  !*** ./src/pages/introduce/index.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/introduce/index.js","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map