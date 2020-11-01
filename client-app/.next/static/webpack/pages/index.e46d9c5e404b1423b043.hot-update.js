webpackHotUpdate_N_E("pages/index",{

/***/ "./components/login-form/login.jsx":
/*!*****************************************!*\
  !*** ./components/login-form/login.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "../node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _login_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.scss */ "./components/login-form/login.scss");
/* harmony import */ var _login_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_login_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "../node_modules/@keystonejs/app-next/node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "/mnt/f/Coding/Projects/realtime-quiz/client-app/components/login-form/login.jsx",
    _this = undefined;





var Login = function Login(props) {
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.replace('/game');
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "login container p-5",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      className: "text-center p-2",
      children: "\u0110\u0103ng nh\u1EADp"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      className: "login-form",
      onSubmit: function onSubmit(e) {
        return handleSubmit(e);
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
        controlId: "formBasicEmail",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
          children: "T\xEAn \u0111\u0103ng nh\u1EADp"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
          className: "form-input",
          type: "text",
          placeholder: "T\xEAn \u0111\u0103ng nh\u1EADp"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
          className: "text-muted",
          children: "T\xEAn \u0111\u0103ng nh\u1EADp do ban t\u1ED5 ch\u1EE9c c\u1EA5p"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
        controlId: "formBasicPassword",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
          children: "Password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
          className: "form-input",
          type: "password",
          placeholder: "M\u1EADt kh\u1EA9u",
          minLength: "8"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
          className: "text-muted",
          children: "M\u1EADt kh\u1EA9u ph\u1EA3i c\xF3 \xEDt nh\u1EA5t 8 k\xED t\u1EF1"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "login-submit",
        variant: "success",
        type: "submit",
        children: "\u0110\u0103ng nh\u1EADp"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, _this), " "]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, _this);
};

_c = Login;
/* harmony default export */ __webpack_exports__["default"] = (Login);

var _c;

$RefreshReg$(_c, "Login");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/@keystonejs/app-next/node_modules/webpack/buildin/harmony-module.js */ "../node_modules/@keystonejs/app-next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sb2dpbi1mb3JtL2xvZ2luLmpzeCJdLCJuYW1lcyI6WyJMb2dpbiIsInByb3BzIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiUm91dGVyIiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3ZCLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUFDLENBQUMsRUFBSTtBQUN4QkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FDLHNEQUFNLENBQUNDLE9BQVAsQ0FBZSxPQUFmO0FBQ0QsR0FIRDs7QUFJQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxxQkFBZjtBQUFBLDRCQUNFO0FBQUksZUFBUyxFQUFDLGlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSxxRUFBQyxvREFBRDtBQUFNLGVBQVMsRUFBQyxZQUFoQjtBQUE2QixjQUFRLEVBQUUsa0JBQUFILENBQUM7QUFBQSxlQUFJRCxZQUFZLENBQUNDLENBQUQsQ0FBaEI7QUFBQSxPQUF4QztBQUFBLDhCQUNFLHFFQUFDLG9EQUFELENBQU0sS0FBTjtBQUFZLGlCQUFTLEVBQUMsZ0JBQXRCO0FBQUEsZ0NBQ0UscUVBQUMsb0RBQUQsQ0FBTSxLQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUUscUVBQUMsb0RBQUQsQ0FBTSxPQUFOO0FBQ0UsbUJBQVMsRUFBQyxZQURaO0FBRUUsY0FBSSxFQUFDLE1BRlA7QUFHRSxxQkFBVyxFQUFDO0FBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQU9FLHFFQUFDLG9EQUFELENBQU0sSUFBTjtBQUFXLG1CQUFTLEVBQUMsWUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFhRSxxRUFBQyxvREFBRCxDQUFNLEtBQU47QUFBWSxpQkFBUyxFQUFDLG1CQUF0QjtBQUFBLGdDQUNFLHFFQUFDLG9EQUFELENBQU0sS0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFLHFFQUFDLG9EQUFELENBQU0sT0FBTjtBQUNFLG1CQUFTLEVBQUMsWUFEWjtBQUVFLGNBQUksRUFBQyxVQUZQO0FBR0UscUJBQVcsRUFBQyxvQkFIZDtBQUlFLG1CQUFTLEVBQUM7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBUUUscUVBQUMsb0RBQUQsQ0FBTSxJQUFOO0FBQVcsbUJBQVMsRUFBQyxZQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFiRixlQXlCRSxxRUFBQyxzREFBRDtBQUFRLGlCQUFTLEVBQUMsY0FBbEI7QUFBaUMsZUFBTyxFQUFDLFNBQXpDO0FBQW1ELFlBQUksRUFBQyxRQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixFQThCVSxHQTlCVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWtDRCxDQXZDRDs7S0FBTUgsSztBQXdDU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTQ2ZDljNWU0MDRiMTQyM2IwNDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm0sIEJ1dHRvbiB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IFwiLi9sb2dpbi5zY3NzXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmNvbnN0IExvZ2luID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBSb3V0ZXIucmVwbGFjZSgnL2dhbWUnKVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4gY29udGFpbmVyIHAtNVwiPlxyXG4gICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcC0yXCI+xJDEg25nIG5o4bqtcDwvaDM+XHJcbiAgICAgIDxGb3JtIGNsYXNzTmFtZT1cImxvZ2luLWZvcm1cIiBvblN1Ym1pdD17ZSA9PiBoYW5kbGVTdWJtaXQoZSl9PlxyXG4gICAgICAgIDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cImZvcm1CYXNpY0VtYWlsXCI+XHJcbiAgICAgICAgICA8Rm9ybS5MYWJlbD5Uw6puIMSRxINuZyBuaOG6rXA8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIlxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVMOqbiDEkcSDbmcgbmjhuq1wXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Rm9ybS5UZXh0IGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgVMOqbiDEkcSDbmcgbmjhuq1wIGRvIGJhbiB04buVIGNo4bupYyBj4bqlcFxyXG4gICAgICAgICAgPC9Gb3JtLlRleHQ+XHJcbiAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJmb3JtQmFzaWNQYXNzd29yZFwiPlxyXG4gICAgICAgICAgPEZvcm0uTGFiZWw+UGFzc3dvcmQ8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIlxyXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk3huq10IGto4bqpdVwiXHJcbiAgICAgICAgICAgIG1pbkxlbmd0aD1cIjhcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxGb3JtLlRleHQgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICBN4bqtdCBraOG6qXUgcGjhuqNpIGPDsyDDrXQgbmjhuqV0IDgga8OtIHThu7FcclxuICAgICAgICAgIDwvRm9ybS5UZXh0PlxyXG4gICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImxvZ2luLXN1Ym1pdFwiIHZhcmlhbnQ9XCJzdWNjZXNzXCIgdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgxJDEg25nIG5o4bqtcFxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L0Zvcm0+e1wiIFwifVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgTG9naW47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=