(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./src/actions/questionnaires.js":
/*!***************************************!*\
  !*** ./src/actions/questionnaires.js ***!
  \***************************************/
/*! exports provided: fetchQuestionnaires, answer, complete */
/*! exports used: answer, complete, fetchQuestionnaires */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return fetchQuestionnaires; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return answer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return complete; });
/* harmony import */ var _Users_liu_Desktop_patrick_wechat_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_liu_Desktop_patrick_wechat_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_liu_Desktop_patrick_wechat_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_liu_Desktop_patrick_wechat_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_actionType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/actionType */ "./src/constants/actionType.js");
/* harmony import */ var _api_questionnaires__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/questionnaires */ "./src/api/questionnaires.js");



 // request questionnaires

var requestQuestionnaires = function requestQuestionnaires() {
  return {
    type: _constants_actionType__WEBPACK_IMPORTED_MODULE_2__[/* REQUEST_QUESTIONNAIRES */ "d"]
  };
};

var receiveQuestionnaires = function receiveQuestionnaires(data) {
  return {
    type: _constants_actionType__WEBPACK_IMPORTED_MODULE_2__[/* RECEIVE_QUESTIONNAIRES */ "b"],
    payload: data
  };
};

var fetchQuestionnaires = function fetchQuestionnaires() {
  return /*#__PURE__*/function () {
    var _ref = Object(_Users_liu_Desktop_patrick_wechat_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])( /*#__PURE__*/_Users_liu_Desktop_patrick_wechat_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(dispatch) {
      var response;
      return _Users_liu_Desktop_patrick_wechat_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch(requestQuestionnaires());
              _context.next = 3;
              return _api_questionnaires__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].fetchQuestionnaires();

            case 3:
              response = _context.sent;
              return _context.abrupt("return", dispatch(receiveQuestionnaires(response)));

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}; // answer one question

var answer = function answer(questionnaireId, questionId, selectedIds) {
  return {
    type: _constants_actionType__WEBPACK_IMPORTED_MODULE_2__[/* ANSWER_QUESTION */ "a"],
    payload: {
      questionnaireId: questionnaireId,
      questionId: questionId,
      selectedIds: selectedIds
    }
  };
};

var receiveQuestionnaireResult = function receiveQuestionnaireResult(data) {
  return {
    type: _constants_actionType__WEBPACK_IMPORTED_MODULE_2__[/* RECEIVE_QUESTIONNAIRE_RESULT */ "c"],
    payload: data
  };
}; // complete one questionnaire


var complete = function complete(questionnaireId) {
  return /*#__PURE__*/function () {
    var _ref2 = Object(_Users_liu_Desktop_patrick_wechat_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])( /*#__PURE__*/_Users_liu_Desktop_patrick_wechat_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(dispatch) {
      var response;
      return _Users_liu_Desktop_patrick_wechat_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _api_questionnaires__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].completeQuestionnaire(questionnaireId);

            case 2:
              response = _context2.sent;
              return _context2.abrupt("return", dispatch(receiveQuestionnaireResult(response)));

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./src/api/questionnaires.js":
/*!***********************************!*\
  !*** ./src/api/questionnaires.js ***!
  \***********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_liu_Desktop_patrick_wechat_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_liu_Desktop_patrick_wechat_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_liu_Desktop_patrick_wechat_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_liu_Desktop_patrick_wechat_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__);


// import { BASE_API_URL } from '../constants/common'
/* harmony default export */ __webpack_exports__["a"] = ({
  fetchQuestionnaires: function () {
    var _fetchQuestionnaires = Object(_Users_liu_Desktop_patrick_wechat_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])( /*#__PURE__*/_Users_liu_Desktop_patrick_wechat_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var data;
      return _Users_liu_Desktop_patrick_wechat_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              data = [{
                id: 1,
                title: '兼职刷单测试题',
                description: '套着“兼职刷单”伪装的诈骗套路，利用在校学生熟悉网络操作，却又涉世未深、急于赚钱的心理，不断入侵校园取得被害人的信任后，犯罪分子会不断提升刷单金额，再以各种理由要求被害人反复多次刷单，一旦被害人警觉或提出申请退款，就迅速拉黑对方。“刷单”是指电商付款请人假扮顾客购买商品，但实际上并不真正发货，仅仅是在线完成的“空交易”，是电商为了提高销量和好评率的一种不合规行为。',
                duration: 6,
                imageUrl: 'https://636c-cloud1-0gyp62l90a77e65f-1307942153.tcb.qcloud.la/%E5%9B%BE%E7%89%87%201.png?sign=5079857c43625d4a06e90e3873db84e4&t=1651920184',
                questions: [{
                  id: 1,
                  title: '请问电商付款请人假扮顾客购买商品，但实际上并不真正发货，仅仅是在线完成的“空交易”来提高销量和好评率的行为是____?',
                  single: true,
                  options: [{
                    id: 1,
                    key: 'A',
                    value: '不合规行为',
                    score: 0
                  }, {
                    id: 2,
                    key: 'B',
                    value: '合规行为',
                    score: 1
                  }, {
                    id: 3,
                    key: 'C',
                    value: '机智行为',
                    score: 0
                  }]
                }, {
                  id: 2,
                  title: '今年暑假，湘潭某高校学生陈某留校学车，萌生在网上做兼职赚取生活费的想法。陈某在网上找到一家网络刷单公司，随后通过QQ与客服联系，对方发来一个工作流程让他按照要求操作。第一单，陈某花120元买入一件衣服，对方很快就给他退还了125元，让他立即放松了警惕，觉得刷单能轻松挣钱。随后，陈某又先后认购了几批衣服。对方称这一单分三次，每次1500元，让其陆续转账4500元。当陈某意识到可能上当受骗时，却发现对方已将他从QQ好友中删除，而他再也找不到对方，4500元钱要不回来了。以上是哪种诈骗类型？',
                  single: true,
                  options: [{
                    id: 1,
                    key: 'A',
                    value: '交友诈骗',
                    score: 0
                  }, {
                    id: 2,
                    key: 'B',
                    value: '冒充网购客服诈骗',
                    score: 0
                  }, {
                    id: 3,
                    key: 'C',
                    value: '兼职刷单诈骗',
                    score: 1
                  }, {
                    id: 4,
                    key: 'D',
                    value: '网络贷款诈骗',
                    score: 0
                  }]
                }, {
                  id: 3,
                  title: '在假期时你想要赚取一些生活费，这个时候在邮箱内发现一份兼职刷单邮件。邮件上说“利用碎片时间，手机半个小时轻松搞定，每月赚两三千元不成问题。”，并且引导你加对方好友，你该怎么做？',
                  single: true,
                  options: [{
                    id: 1,
                    key: 'A',
                    value: '这是赚钱的大好时机啊，赶紧加好友',
                    score: 1
                  }, {
                    id: 2,
                    key: 'B',
                    value: '这骗子招数我见多了，让我来骗骗骗子',
                    score: 0
                  }, {
                    id: 3,
                    key: 'C',
                    value: '将邮件删除置之不管',
                    score: 0
                  }, {
                    id: 4,
                    key: 'D',
                    value: '向有管部门举报对方',
                    score: 0
                  }]
                },{
                    id: 4,
                    title: '大学生利用暑假假期打工赚取生活费的正确做法',
                    single: true,
                    options: [{
                      id: 1,
                      key: 'A',
                      value: '接取网络刷单',
                      score: 1
                    }, {
                      id: 2,
                      key: 'B',
                      value: '结合专业知识进入正规企业实习',
                      score: 0
                    }, {
                      id: 3,
                      key: 'C',
                      value: '通过不明中介寻找兼职',
                      score: 0
                    }, {
                      id: 4,
                      key: 'D',
                      value: '网络诈骗骗取金钱',
                      score: 0
                    }]
                },{
                    id: 5,
                    title: '马先生在某二手交易网站看到一条兼职广告：“正规项目，手机操作，每小时75元。”马先生想赚点外快，便与广告发布人联系。对方说，要下载安装一款“XX联盟”APP，在APP里购物刷单，完成任务即返还本金并支付报酬。对方把马先生拉进一个聊天群。他观察了十余天，发现群里的人每天忙着“抢单”“刷单”，人人都说自己赚了钱。5月2日，马先生下载了“XX联盟”APP，试着刷了两单，共付款8800元，APP显示他赚了1690元。马先生于是继续刷单。当账户本金加上提成达到13万元时，他想提现，但没有成功。他联系“客服”，对方要求他交纳5万元“保证金”。马先生这才意识到被骗。以上是哪种诈骗类型？',
                    single: true,
                    options: [{
                      id: 1,
                      key: 'A',
                      value: '交友诈骗',
                      score: 1
                    }, {
                      id: 2,
                      key: 'B',
                      value: '冒充网购客服诈骗',
                      score: 0
                    }, {
                      id: 3,
                      key: 'C',
                      value: '兼职刷单诈骗',
                      score: 0
                    }, {
                      id: 4,
                      key: 'D',
                      value: '网络贷款诈骗',
                      score: 0
                    }]
                }
            ]
              }, {
                id: 2,
                title: '假冒冰墩墩，新冠疫苗',
                description: '在网络诈骗横行的今天，各种诈骗花样层出不穷，多数是利用现在大数人心里有不用花大力气就可以赚钱的想法，从而诱导一些经验不足的人入坑，所以为了测试大家的防诈骗意识，教会大家识别诈骗，防止大家未来上当受骗。',
                duration: 6,
                imageUrl: 'https://636c-cloud1-0gyp62l90a77e65f-1307942153.tcb.qcloud.la/381652164837_.pic.jpg?sign=d3bf75454d730127dfd50e866cb3e13c&t=1652171524',
                questions: [{
                  id: 1,
                  title: '你的微信上收到了一条个为“疫苗接种普查调查员”的人的好友申请，接受申请后，他要求你在某个网站上填写个人信息，如:身份证号，手机号，手机验证码，银行卡号等等，下列做法不正确的是:                  ',
                  single: true,
                  options: [{
                    id: 1,
                    key: 'A',
                    value: '如实填写',
                    score: 1
                  }, {
                    id: 2,
                    key: 'B',
                    value: '直接删除好友',
                    score: 2
                  }, {
                    id: 3,
                    key: 'C',
                    value: '向相关人员询问',
                    score: 3
                  }]
                }, {
                  id: 2,
                  title: '你收到了一条不明来历的名为“缴费接种新冠疫苗的”信息，要求你在他给出的网站上进行身份验证，并缴费，否则将会将你列入失信名单，要求填写个人信息并要求填写手机验证码，这时你会:                  ',
                  single: true,
                  options: [{
                    id: 1,
                    key: 'A',
                    value: '立即填写，可不能被列入失信名单',
                    score: 1
                  }, {
                    id: 2,
                    key: 'B',
                    value: '考虑再三后填写',
                    score: 2
                  }, {
                    id: 3,
                    key: 'C',
                    value: '直接删除信息',
                    score: 3
                  }]
                }, {
                  id: 3,
                  title: '你在某app上看到了有人自称可以代购冰墩墩，数量不多先到先得，而你求墩心切，添加对方好友，对方要求你先交3500元定金，货到退回，你会:                  ',
                  single: true,
                  options: [{
                    id: 1,
                    key: 'A',
                    value: '立刻转账',
                    score: 1
                  }, {
                    id: 2,
                    key: 'B',
                    value: '考虑下自身情况后转账',
                    score: 2
                  }, {
                    id: 3,
                    key: 'C',
                    value: '问问他能不能多买几个',
                    score: 3
                  }, {
                    id: 4,
                    key: 'D',
                    value: '一眼假，删除好友并拉黑',
                    score: 4
                  }]
                }, {
                  id: 4,
                  title: '远在北化上学的女儿通过QQ向老妈要钱，称帮助同学，并让妈妈将钱汇到同学账户上。如果你是这位妈妈，你不能怎么做？',
                  single: true,
                  options: [{
                    id: 1,
                    key: 'A',
                    value: '赶紧打电话跟女儿核实此事'                   ,
                    score: 4
                  }, {
                    id: 2,
                    key: 'B',
                    value: '女儿和自己视频了，肯定是她本人，汇钱'                  ,
                    score: 2
                  }, {
                    id: 3,
                    key: 'C',
                    value: '和女儿视频，让她做个鬼脸给自己看看',
                    score: 3
                  }, {
                    id: 4,
                    key: 'D',
                    value: '一时电话联系不上，等等再说',
                    score: 2
                  }]
                }, {
                  id: 5,
                  title: '小李打算在网上找找兼职,某天,在某社交平台上,发布了“一部手机,随时随地都可以做,日赚500!”的兼职刷单广告,小李觉得赚钱的机会来了!下面哪种认识是错误的?',
                  single: true,
                  options: [{
                    id: 1,
                    key: 'A',
                    value: '日赚500的兼职,90%是假的!',
                    score: 1
                  }, {
                    id: 2,
                    key: 'B',
                    value: '拿到兼职,就可以挣网费了,想想都觉得刺激。'                    ,
                    score: 4
                  }, {
                    id: 3,
                    key: 'C',
                    value: '这是典型的网络兼职刷单诈骗,切不可钻进骗子圈套。'                    ,
                    score: 1
                  }, {
                    id: 4,
                    key: 'D',
                    value: '一般来说,骗子以交押金等各种借口让小李交钱,最终,卷钱走人。',
                    score: 1
                  }]
                }, {
                    id: 6,
                    title: '小李是一名企业员工,今天大清早,小李接到自称移动公司工作人员小姐打来的电话,称身份信息遭泄露,然后又将电话转接至公安局贾警官,官称要求小李配合工作,需要小李将自己银行卡内现金转入司法机关设立的“安全账户下列说法正确的是?',
                    single: true,
                    options: [{
                      id: 1,
                      key: 'A',
                      value: '现在身份信息泄露这么严重,自己的身份真的有可能被人利用,赶紧配合公安机关工作'                      ,
                      score: 1
                    }, {
                      id: 2,
                      key: 'B',
                      value: '这个贾警官连姓名和警号都报给我了,肯定是真警察'                    ,
                      score: 2
                    }, {
                      id: 3,
                      key: 'C',
                      value: '贾警官要我汇款的账户是安全账户,我的钱都是爸妈给的生活费,不是赃款，我把钱转过去司法机关查明后会还给我的'                    ,
                      score: 3
                    }, {
                      id: 4,
                      key: 'D',
                      value: '社会套路深,警察办案不会通过电话办案的,假的',
                      score: 4
                    }]
                  }]
            },{
                id: 3,
                title: '裸聊，你以为的艳遇只不过是诈骗套路',
                description: '在网络诈骗横行的今天，各种诈骗花样层出不穷，多数是利用现在大数人心里有不用花大力气就可以赚钱的想法，从而诱导一些经验不足的人入坑，所以为了测试大家的防诈骗意识，教会大家识别诈骗，防止大家未来上当受骗。',
                duration: 10,
                imageUrl: 'https://636c-cloud1-0gyp62l90a77e65f-1307942153.tcb.qcloud.la/371652164837_.pic.jpg?sign=aee2eed82f42c68343ba621cd7d9e9db&t=1652169550',
                questions: [{
                  id: 1,
                  title: '11月9日，于某报案称，自己玩手机时，收到交友软件中一陌生人发来的消息，随后于某添加了对方交友账号进行视频裸聊，几分钟后，对方以泄露其裸聊视频威胁，要求他转账到指定账户。该情况下于某的正确做法是：',
                  single: true,
                  options: [{
                    id: 1,
                    key: 'A',
                    value: '进行转账，以免裸聊视频传播',
                    score: 1
                  }, {
                    id: 2,
                    key: 'B',
                    value: '立即报警，向警方寻求帮助',
                    score: 4
                  }, {
                    id: 3,
                    key: 'C',
                    value: '求对方删除视频',
                    score: 3
                  }, {
                    id: 4,
                    key: 'D',
                    value: '对她进行辱骂',
                    score: 2
                  }]
                }, {
                  id: 2,
                  title: '魏先生看到一个交友软件，好奇之下就下载了，看到一个叫“妍妍”的美女头像就和对方聊了起来，更让魏先生没想到的是，妍妍直接脱起了衣服，作出一些诱惑的动作，还让魏先生也脱掉衣服裸聊此时正确的做法是：',
                  single: true,
                  options: [{
                    id: 1,
                    key: 'A',
                    value: '立即脱掉衣服，“坦诚相待”',
                    score: 1
                  }, {
                    id: 2,
                    key: 'B',
                    value: '多“欣赏”一会,但不脱衣服',
                    score: 2
                  }, {
                    id: 3,
                    key: 'C',
                    value: '先聊会天等会再脱掉衣服',
                    score: 3
                  }, {
                    id: 4,
                    key: 'D',
                    value: '拉黑,删除好友并卸载病毒软件',
                    score: 4
                  }]
                }, {
                  id: 3,
                  title: '李四闲来无聊，在网上冲浪，突然一个交友软件的下载链接蹦了出来。此情况下正确的做法是：',
                  single: true,
                  options: [{
                    id: 1,
                    key: 'A',
                    value: '进行下载',
                    score: 1
                  }, {
                    id: 2,
                    key: 'B',
                    value: '向好友推荐',
                    score: 2
                  }, {
                    id: 3,
                    key: 'C',
                    value: '进行举报',
                    score: 4
                  }, {
                    id: 4,
                    key: 'D',
                    value: '只是个软件而已，玩玩再说',
                    score: 1
                  }]
                }, {
                  id: 4,
                  title: '小黄添加了一名陌生女性网友的微信。二人相谈甚欢，对方自称是27岁的离异女性，喜欢在网上寻刺激，并邀请小黄进行刺激的视频聊天。接通视频后，对方是个裸体的女性，小黄不禁血脉偾张，也立马跟对方“坦诚相见”。令黄先生没想到的是，没过几天，对方向小黄发来小黄的个人信息，包括姓名、身份证、工作单位，对方以聊天视频要挟小黄转账6万元到指定账号，若钱到账就删视频。急于平息事情的小黄立即按对方要求将6万元转到指定的账户，但对方仍不肯罢休，继续向小黄索要赎金。以上行为属于什么诈骗行为?',
                  single: true,
                  options: [{
                    id: 1,
                    key: 'A',
                    value: '网络赌博',
                    score: 1
                  }, {
                    id: 2,
                    key: 'B',
                    value: '裸聊',
                    score: 4
                  }, {
                    id: 3,
                    key: 'C',
                    value: '杀猪盘',
                    score: 3
                  }, {
                    id: 4,
                    key: 'D',
                    value: '网络刷单',
                    score: 2
                  }]
                }, {
                  id: 5,
                  title: '众目睽睽下或者同时与多人裸聊犯法吗？',
                  single: true,
                  options: [{
                    id: 1,
                    key: 'A',
                    value: '不犯法',
                    score: 1
                  }, {
                    id: 2,
                    key: 'B',
                    value: '犯了刑法',
                    score: 2
                  }]
                }, {
                    id: 6,
                    title: '什么是裸聊？',
                    single: true,
                    options: [{
                      id: 1,
                      key: 'A',
                      value: '不穿衣服跟人交流',
                      score: 1
                    }, {
                      id: 2,
                      key: 'B',
                      value: '指除去脸部外其他身体部位全部裸露在摄像头下，通过网络视频传给聊天对象，以大胆的文字和动作进行交流。',
                      score: 2
                    }]
                  }, {
                    id: 7,
                    title: '聚众进行淫乱活动的，对首要分子或者多次参加的，处罚为',
                    single: true,
                    options: [{
                      id: 1,
                      key: 'A',
                      value: '五年以下有期徒刑、拘役或者管制',
                      score: 2
                    }, {
                      id: 2,
                      key: 'B',
                      value: '罚款3000元',
                      score: 1
                    }, {
                        id: 3,
                        key: 'C',
                        value: '警告教育',
                        score: 1
                      }]
                  }, {
                    id: 8,
                    title: '引诱未成年人参加聚众淫乱活动的，依照前款的规定',
                    single: true,
                    options: [{
                      id: 1,
                      key: 'A',
                      value: '从轻处罚',
                      score: 1
                    }, {
                      id: 2,
                      key: 'B',
                      value: '从重处罚',
                      score: 2
                    }]
                  }, {
                    id: 9,
                    title: '以下属于裸聊形式的是：',
                    single: true,
                    options: [{
                      id: 1,
                      key: 'A',
                      value: '一对一式的，点对点式的，别人看不到',
                      score: 2
                    }, {
                      id: 2,
                      key: 'B',
                      value: '有人组织淫秽表演，从提供网络场所到诱导纵容，再到有职业裸聊者，目的就是牟取暴利',
                      score: 2
                    }, {
                        id: 3,
                        key: 'C',
                        value: '网上公共会议式，互相进行淫秽表演',
                        score: 2
                      }]
                  }]
              }
            ]; // mock delay 1000ms

              return _context.abrupt("return", new Promise(function (resolve) {
                return setTimeout(function () {
                  return resolve(data);
                }, 1000);
              }));

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function fetchQuestionnaires() {
      return _fetchQuestionnaires.apply(this, arguments);
    }

    return fetchQuestionnaires;
  }(),
  completeQuestionnaire: function () {
    var _completeQuestionnaire = Object(_Users_liu_Desktop_patrick_wechat_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])( /*#__PURE__*/_Users_liu_Desktop_patrick_wechat_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(questionnaireId) {
      var result;
      return _Users_liu_Desktop_patrick_wechat_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              result = {
                title: 'ok',
                content: 'You have completed the questionnaire'
              };
              return _context2.abrupt("return", new Promise(function (resolve) {
                return setTimeout(function () {
                  return resolve(result);
                }, 1000);
              }));

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function completeQuestionnaire(_x) {
      return _completeQuestionnaire.apply(this, arguments);
    }

    return completeQuestionnaire;
  }()
});

/***/ }),

/***/ "./src/constants/actionType.js":
/*!*************************************!*\
  !*** ./src/constants/actionType.js ***!
  \*************************************/
/*! exports provided: REQUEST_QUESTIONNAIRES, RECEIVE_QUESTIONNAIRES, ANSWER_QUESTION, RECEIVE_QUESTIONNAIRE_RESULT */
/*! exports used: ANSWER_QUESTION, RECEIVE_QUESTIONNAIRES, RECEIVE_QUESTIONNAIRE_RESULT, REQUEST_QUESTIONNAIRES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return REQUEST_QUESTIONNAIRES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RECEIVE_QUESTIONNAIRES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ANSWER_QUESTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return RECEIVE_QUESTIONNAIRE_RESULT; });
var REQUEST_QUESTIONNAIRES = 'REQUEST_QUESTIONNAIRES';
var RECEIVE_QUESTIONNAIRES = 'RECEIVE_QUESTIONNAIRES';
var ANSWER_QUESTION = 'ANSWER_QUESTION';
var RECEIVE_QUESTIONNAIRE_RESULT = 'RECEIVE_QUESTIONNAIRE_RESULT';

/***/ })

}]);
//# sourceMappingURL=common.js.map