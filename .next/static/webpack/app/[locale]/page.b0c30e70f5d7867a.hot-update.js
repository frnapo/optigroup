"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[locale]/page",{

/***/ "(app-pages-browser)/./app/[locale]/page.tsx":
/*!*******************************!*\
  !*** ./app/[locale]/page.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_locale_providers_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/[locale]/providers/settings */ \"(app-pages-browser)/./app/[locale]/providers/settings.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"show a carousel\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Francesco\\\\Desktop\\\\optigroup\\\\app\\\\[locale]\\\\page.tsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            _app_locale_providers_settings__WEBPACK_IMPORTED_MODULE_1__.Settings.getInstance().products.map((product, index)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        src: __webpack_require__(\"(app-pages-browser)/./app/[locale]/assets/products sync recursive ^\\\\.\\\\/.*$\")(\"./\".concat(product.href)),\n                        alt: product.title,\n                        width: 100,\n                        height: 500\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Francesco\\\\Desktop\\\\optigroup\\\\app\\\\[locale]\\\\page.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 13\n                    }, this)\n                }, index, false, {\n                    fileName: \"C:\\\\Users\\\\Francesco\\\\Desktop\\\\optigroup\\\\app\\\\[locale]\\\\page.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 11\n                }, this);\n            })\n        ]\n    }, void 0, true);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9bbG9jYWxlXS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUM2RDtBQUM5QjtBQUVoQixTQUFTRTtJQUN0QixxQkFDRTs7MEJBQ0UsOERBQUNDOzBCQUFJOzs7Ozs7WUFFSkgsb0VBQVFBLENBQUNJLFdBQVcsR0FBR0MsUUFBUSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsU0FBU0M7Z0JBQzdDLHFCQUNFLDhEQUFDTDs4QkFDQyw0RUFBQ0Ysa0RBQUtBO3dCQUNKUSxLQUFLQyxvR0FBUSxLQUFrQyxPQUFiSCxRQUFRSSxJQUFJO3dCQUM5Q0MsS0FBS0wsUUFBUU0sS0FBSzt3QkFDbEJDLE9BQU87d0JBQ1BDLFFBQVE7Ozs7OzttQkFMRlA7Ozs7O1lBU2Q7OztBQUdOO0tBbkJ3Qk4iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL1tsb2NhbGVdL3BhZ2UudHN4PzNiMGYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyBTZXR0aW5ncyB9IGZyb20gXCJAL2FwcC9bbG9jYWxlXS9wcm92aWRlcnMvc2V0dGluZ3NcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2PnNob3cgYSBjYXJvdXNlbDwvZGl2PlxuXG4gICAgICB7U2V0dGluZ3MuZ2V0SW5zdGFuY2UoKS5wcm9kdWN0cy5tYXAoKHByb2R1Y3QsIGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9e3JlcXVpcmUoYC4vYXNzZXRzL3Byb2R1Y3RzLyR7cHJvZHVjdC5ocmVmfWApfVxuICAgICAgICAgICAgICBhbHQ9e3Byb2R1Y3QudGl0bGV9XG4gICAgICAgICAgICAgIHdpZHRoPXsxMDB9XG4gICAgICAgICAgICAgIGhlaWdodD17NTAwfVxuICAgICAgICAgICAgPjwvSW1hZ2U+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJTZXR0aW5ncyIsIkltYWdlIiwiSG9tZSIsImRpdiIsImdldEluc3RhbmNlIiwicHJvZHVjdHMiLCJtYXAiLCJwcm9kdWN0IiwiaW5kZXgiLCJzcmMiLCJyZXF1aXJlIiwiaHJlZiIsImFsdCIsInRpdGxlIiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/[locale]/page.tsx\n"));

/***/ })

});