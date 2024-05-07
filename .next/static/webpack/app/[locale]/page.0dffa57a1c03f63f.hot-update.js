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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_locale_providers_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/[locale]/providers/settings */ \"(app-pages-browser)/./app/[locale]/providers/settings.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const products = _app_locale_providers_settings__WEBPACK_IMPORTED_MODULE_1__.Settings.getInstance().products;\n    const [activeIndex, setActiveIndex] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);\n    const productsPerSlide = 4;\n    const intervalTime = 4000;\n    const nextSlide = ()=>{\n        setActiveIndex((current)=>(current + productsPerSlide) % products.length);\n    };\n    const prevSlide = ()=>{\n        setActiveIndex((current)=>(current - productsPerSlide + products.length) % products.length);\n    };\n    const getProductsForCurrentSlide = ()=>{\n        return products.slice(activeIndex, activeIndex + productsPerSlide).concat(products.slice(0, Math.max(0, activeIndex + productsPerSlide - products.length)));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const timer = setInterval(()=>{\n            nextSlide();\n        }, intervalTime);\n        return ()=>clearInterval(timer);\n    }, [\n        activeIndex\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between items-center px-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: prevSlide,\n                        className: \"text-2xl bg-gray-300 p-2 rounded hover:bg-gray-400\",\n                        children: \"<\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Francesco\\\\Desktop\\\\optigroup\\\\app\\\\[locale]\\\\page.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex transition-transform duration-700\",\n                        children: getProductsForCurrentSlide().map((product, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-1/4 p-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    src: __webpack_require__(\"(app-pages-browser)/./app/[locale]/assets/products sync recursive ^\\\\.\\\\/.*$\")(\"./\".concat(product.href)),\n                                    alt: product.title,\n                                    width: 100,\n                                    height: 100,\n                                    layout: \"responsive\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Francesco\\\\Desktop\\\\optigroup\\\\app\\\\[locale]\\\\page.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 15\n                                }, this)\n                            }, index, false, {\n                                fileName: \"C:\\\\Users\\\\Francesco\\\\Desktop\\\\optigroup\\\\app\\\\[locale]\\\\page.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Francesco\\\\Desktop\\\\optigroup\\\\app\\\\[locale]\\\\page.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: nextSlide,\n                        className: \"text-2xl bg-gray-300 p-2 rounded hover:bg-gray-400\",\n                        children: \">\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Francesco\\\\Desktop\\\\optigroup\\\\app\\\\[locale]\\\\page.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Francesco\\\\Desktop\\\\optigroup\\\\app\\\\[locale]\\\\page.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center space-x-2 mt-4\",\n                children: Array.from({\n                    length: Math.ceil(products.length / productsPerSlide)\n                }).map((_, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"h-4 w-4 rounded-full \".concat(idx === Math.floor(activeIndex / productsPerSlide) ? \"bg-blue-500\" : \"bg-gray-300\"),\n                        onClick: ()=>setActiveIndex(idx * productsPerSlide)\n                    }, idx, false, {\n                        fileName: \"C:\\\\Users\\\\Francesco\\\\Desktop\\\\optigroup\\\\app\\\\[locale]\\\\page.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Francesco\\\\Desktop\\\\optigroup\\\\app\\\\[locale]\\\\page.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"16En7kR7TbAJMjBrm+xutVNIc5Q=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9bbG9jYWxlXS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUM2RDtBQUM5QjtBQUNhO0FBRTdCLFNBQVNJOztJQUN0QixNQUFNQyxXQUFXTCxvRUFBUUEsQ0FBQ00sV0FBVyxHQUFHRCxRQUFRO0lBQ2hELE1BQU0sQ0FBQ0UsYUFBYUMsZUFBZSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNTSxtQkFBbUI7SUFDekIsTUFBTUMsZUFBZTtJQUVyQixNQUFNQyxZQUFZO1FBQ2hCSCxlQUFlLENBQUNJLFVBQVksQ0FBQ0EsVUFBVUgsZ0JBQWUsSUFBS0osU0FBU1EsTUFBTTtJQUM1RTtJQUVBLE1BQU1DLFlBQVk7UUFDaEJOLGVBQWUsQ0FBQ0ksVUFBWSxDQUFDQSxVQUFVSCxtQkFBbUJKLFNBQVNRLE1BQU0sSUFBSVIsU0FBU1EsTUFBTTtJQUM5RjtJQUVBLE1BQU1FLDZCQUE2QjtRQUNqQyxPQUFPVixTQUNKVyxLQUFLLENBQUNULGFBQWFBLGNBQWNFLGtCQUNqQ1EsTUFBTSxDQUFDWixTQUFTVyxLQUFLLENBQUMsR0FBR0UsS0FBS0MsR0FBRyxDQUFDLEdBQUdaLGNBQWNFLG1CQUFtQkosU0FBU1EsTUFBTTtJQUMxRjtJQUVBWCxnREFBU0EsQ0FBQztRQUNSLE1BQU1rQixRQUFRQyxZQUFZO1lBQ3hCVjtRQUNGLEdBQUdEO1FBQ0gsT0FBTyxJQUFNWSxjQUFjRjtJQUM3QixHQUFHO1FBQUNiO0tBQVk7SUFFaEIscUJBQ0U7OzBCQUNFLDhEQUFDZ0I7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBT0MsU0FBU1o7d0JBQVdVLFdBQVU7a0NBQ25DOzs7Ozs7a0NBRUgsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNaVCw2QkFBNkJZLEdBQUcsQ0FBQyxDQUFDQyxTQUFTQyxzQkFDMUMsOERBQUNOO2dDQUFnQkMsV0FBVTswQ0FDekIsNEVBQUN2QixrREFBS0E7b0NBQ0o2QixLQUFLQyxvR0FBUSxLQUFrQyxPQUFiSCxRQUFRSSxJQUFJO29DQUM5Q0MsS0FBS0wsUUFBUU0sS0FBSztvQ0FDbEJDLE9BQU87b0NBQ1BDLFFBQVE7b0NBQ1JDLFFBQU87Ozs7OzsrQkFORFI7Ozs7Ozs7Ozs7a0NBV2QsOERBQUNKO3dCQUFPQyxTQUFTZjt3QkFBV2EsV0FBVTtrQ0FDbkM7Ozs7Ozs7Ozs7OzswQkFHTCw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1pjLE1BQU1DLElBQUksQ0FBQztvQkFBRTFCLFFBQVFLLEtBQUtzQixJQUFJLENBQUNuQyxTQUFTUSxNQUFNLEdBQUdKO2dCQUFrQixHQUFHa0IsR0FBRyxDQUFDLENBQUNjLEdBQUdDLG9CQUM3RSw4REFBQ2pCO3dCQUVDRCxXQUFXLHdCQUVWLE9BRENrQixRQUFReEIsS0FBS3lCLEtBQUssQ0FBQ3BDLGNBQWNFLG9CQUFvQixnQkFBZ0I7d0JBRXZFaUIsU0FBUyxJQUFNbEIsZUFBZWtDLE1BQU1qQzt1QkFKL0JpQzs7Ozs7Ozs7Ozs7O0FBVWpCO0dBL0R3QnRDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9bbG9jYWxlXS9wYWdlLnRzeD8zYjBmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgU2V0dGluZ3MgfSBmcm9tIFwiQC9hcHAvW2xvY2FsZV0vcHJvdmlkZXJzL3NldHRpbmdzXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgcHJvZHVjdHMgPSBTZXR0aW5ncy5nZXRJbnN0YW5jZSgpLnByb2R1Y3RzO1xuICBjb25zdCBbYWN0aXZlSW5kZXgsIHNldEFjdGl2ZUluZGV4XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBwcm9kdWN0c1BlclNsaWRlID0gNDtcbiAgY29uc3QgaW50ZXJ2YWxUaW1lID0gNDAwMDtcblxuICBjb25zdCBuZXh0U2xpZGUgPSAoKSA9PiB7XG4gICAgc2V0QWN0aXZlSW5kZXgoKGN1cnJlbnQpID0+IChjdXJyZW50ICsgcHJvZHVjdHNQZXJTbGlkZSkgJSBwcm9kdWN0cy5sZW5ndGgpO1xuICB9O1xuXG4gIGNvbnN0IHByZXZTbGlkZSA9ICgpID0+IHtcbiAgICBzZXRBY3RpdmVJbmRleCgoY3VycmVudCkgPT4gKGN1cnJlbnQgLSBwcm9kdWN0c1BlclNsaWRlICsgcHJvZHVjdHMubGVuZ3RoKSAlIHByb2R1Y3RzLmxlbmd0aCk7XG4gIH07XG5cbiAgY29uc3QgZ2V0UHJvZHVjdHNGb3JDdXJyZW50U2xpZGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHByb2R1Y3RzXG4gICAgICAuc2xpY2UoYWN0aXZlSW5kZXgsIGFjdGl2ZUluZGV4ICsgcHJvZHVjdHNQZXJTbGlkZSlcbiAgICAgIC5jb25jYXQocHJvZHVjdHMuc2xpY2UoMCwgTWF0aC5tYXgoMCwgYWN0aXZlSW5kZXggKyBwcm9kdWN0c1BlclNsaWRlIC0gcHJvZHVjdHMubGVuZ3RoKSkpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBuZXh0U2xpZGUoKTtcbiAgICB9LCBpbnRlcnZhbFRpbWUpO1xuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgfSwgW2FjdGl2ZUluZGV4XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgcHgtNFwiPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3ByZXZTbGlkZX0gY2xhc3NOYW1lPVwidGV4dC0yeGwgYmctZ3JheS0zMDAgcC0yIHJvdW5kZWQgaG92ZXI6YmctZ3JheS00MDBcIj5cbiAgICAgICAgICB7XCI8XCJ9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tNzAwXCI+XG4gICAgICAgICAge2dldFByb2R1Y3RzRm9yQ3VycmVudFNsaWRlKCkubWFwKChwcm9kdWN0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJ3LTEvNCBwLTRcIj5cbiAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgc3JjPXtyZXF1aXJlKGAuL2Fzc2V0cy9wcm9kdWN0cy8ke3Byb2R1Y3QuaHJlZn1gKX1cbiAgICAgICAgICAgICAgICBhbHQ9e3Byb2R1Y3QudGl0bGV9XG4gICAgICAgICAgICAgICAgd2lkdGg9ezEwMH1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezEwMH1cbiAgICAgICAgICAgICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtuZXh0U2xpZGV9IGNsYXNzTmFtZT1cInRleHQtMnhsIGJnLWdyYXktMzAwIHAtMiByb3VuZGVkIGhvdmVyOmJnLWdyYXktNDAwXCI+XG4gICAgICAgICAge1wiPlwifVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHNwYWNlLXgtMiBtdC00XCI+XG4gICAgICAgIHtBcnJheS5mcm9tKHsgbGVuZ3RoOiBNYXRoLmNlaWwocHJvZHVjdHMubGVuZ3RoIC8gcHJvZHVjdHNQZXJTbGlkZSkgfSkubWFwKChfLCBpZHgpID0+IChcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBrZXk9e2lkeH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGgtNCB3LTQgcm91bmRlZC1mdWxsICR7XG4gICAgICAgICAgICAgIGlkeCA9PT0gTWF0aC5mbG9vcihhY3RpdmVJbmRleCAvIHByb2R1Y3RzUGVyU2xpZGUpID8gXCJiZy1ibHVlLTUwMFwiIDogXCJiZy1ncmF5LTMwMFwiXG4gICAgICAgICAgICB9YH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZUluZGV4KGlkeCAqIHByb2R1Y3RzUGVyU2xpZGUpfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiU2V0dGluZ3MiLCJJbWFnZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSG9tZSIsInByb2R1Y3RzIiwiZ2V0SW5zdGFuY2UiLCJhY3RpdmVJbmRleCIsInNldEFjdGl2ZUluZGV4IiwicHJvZHVjdHNQZXJTbGlkZSIsImludGVydmFsVGltZSIsIm5leHRTbGlkZSIsImN1cnJlbnQiLCJsZW5ndGgiLCJwcmV2U2xpZGUiLCJnZXRQcm9kdWN0c0ZvckN1cnJlbnRTbGlkZSIsInNsaWNlIiwiY29uY2F0IiwiTWF0aCIsIm1heCIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsIm1hcCIsInByb2R1Y3QiLCJpbmRleCIsInNyYyIsInJlcXVpcmUiLCJocmVmIiwiYWx0IiwidGl0bGUiLCJ3aWR0aCIsImhlaWdodCIsImxheW91dCIsIkFycmF5IiwiZnJvbSIsImNlaWwiLCJfIiwiaWR4IiwiZmxvb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/[locale]/page.tsx\n"));

/***/ })

});