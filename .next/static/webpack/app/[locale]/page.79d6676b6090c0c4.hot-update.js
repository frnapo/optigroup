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

/***/ "(app-pages-browser)/./app/[locale]/components/ProductsCarousel.tsx":
/*!******************************************************!*\
  !*** ./app/[locale]/components/ProductsCarousel.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductsCarousel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_locale_providers_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/[locale]/providers/settings */ \"(app-pages-browser)/./app/[locale]/providers/settings.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction ProductsCarousel() {\n    _s();\n    const products = _app_locale_providers_settings__WEBPACK_IMPORTED_MODULE_1__.Settings.getInstance().products;\n    const [activeIndex, setActiveIndex] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);\n    const productsPerSlide = 4;\n    const maxIndex = Math.ceil((products.length - productsPerSlide) / productsPerSlide);\n    const nextSlide = ()=>{\n        setActiveIndex((current)=>(current + 1) % (maxIndex + 1));\n    };\n    const prevSlide = ()=>{\n        setActiveIndex((current)=>(current - 1 + maxIndex + 1) % (maxIndex + 1));\n    };\n    const getProductsForCurrentSlide = ()=>{\n        return products.slice(activeIndex * productsPerSlide, activeIndex * productsPerSlide + productsPerSlide).concat(products.slice(0, Math.max(0, activeIndex * productsPerSlide + productsPerSlide - products.length)));\n    };\n    const handleSliderChange = (event)=>{\n        setActiveIndex(Number(event.target.value));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between items-center px-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: prevSlide,\n                        className: \"rounded-full text-2xl bg-gray-300 px-3 p-1 hover:bg-gray-400\",\n                        children: \"<\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Francesco\\\\Desktop\\\\optigroup\\\\app\\\\[locale]\\\\components\\\\ProductsCarousel.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex transition-transform duration-700\",\n                        children: getProductsForCurrentSlide().map((product, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-1/4 p-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    src: __webpack_require__(\"(app-pages-browser)/./app/[locale]/assets/products sync recursive ^\\\\.\\\\/.*$\")(\"./\".concat(product.href)),\n                                    alt: product.title,\n                                    width: 100,\n                                    height: 100,\n                                    layout: \"responsive\",\n                                    className: \"product-image\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Francesco\\\\Desktop\\\\optigroup\\\\app\\\\[locale]\\\\components\\\\ProductsCarousel.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 15\n                                }, this)\n                            }, index, false, {\n                                fileName: \"C:\\\\Users\\\\Francesco\\\\Desktop\\\\optigroup\\\\app\\\\[locale]\\\\components\\\\ProductsCarousel.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Francesco\\\\Desktop\\\\optigroup\\\\app\\\\[locale]\\\\components\\\\ProductsCarousel.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: nextSlide,\n                        className: \"rounded-full text-2xl bg-gray-300 px-3 p-1 hover:bg-gray-400\",\n                        children: \">\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Francesco\\\\Desktop\\\\optigroup\\\\app\\\\[locale]\\\\components\\\\ProductsCarousel.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Francesco\\\\Desktop\\\\optigroup\\\\app\\\\[locale]\\\\components\\\\ProductsCarousel.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center mt-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"range\",\n                    min: \"0\",\n                    max: maxIndex,\n                    value: activeIndex,\n                    onChange: handleSliderChange,\n                    className: \"w-full\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Francesco\\\\Desktop\\\\optigroup\\\\app\\\\[locale]\\\\components\\\\ProductsCarousel.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Francesco\\\\Desktop\\\\optigroup\\\\app\\\\[locale]\\\\components\\\\ProductsCarousel.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(ProductsCarousel, \"rd+5N/MkYjuYD0I+B+MlySxQysU=\");\n_c = ProductsCarousel;\nvar _c;\n$RefreshReg$(_c, \"ProductsCarousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9bbG9jYWxlXS9jb21wb25lbnRzL1Byb2R1Y3RzQ2Fyb3VzZWwudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQzZEO0FBQzlCO0FBQ0U7QUFFbEIsU0FBU0c7O0lBQ3RCLE1BQU1DLFdBQVdKLG9FQUFRQSxDQUFDSyxXQUFXLEdBQUdELFFBQVE7SUFDaEQsTUFBTSxDQUFDRSxhQUFhQyxlQUFlLEdBQUdMLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU1NLG1CQUFtQjtJQUN6QixNQUFNQyxXQUFXQyxLQUFLQyxJQUFJLENBQUMsQ0FBQ1AsU0FBU1EsTUFBTSxHQUFHSixnQkFBZSxJQUFLQTtJQUVsRSxNQUFNSyxZQUFZO1FBQ2hCTixlQUFlLENBQUNPLFVBQVksQ0FBQ0EsVUFBVSxLQUFNTCxDQUFBQSxXQUFXO0lBQzFEO0lBRUEsTUFBTU0sWUFBWTtRQUNoQlIsZUFBZSxDQUFDTyxVQUFZLENBQUNBLFVBQVUsSUFBSUwsV0FBVyxLQUFNQSxDQUFBQSxXQUFXO0lBQ3pFO0lBRUEsTUFBTU8sNkJBQTZCO1FBQ2pDLE9BQU9aLFNBQ0phLEtBQUssQ0FBQ1gsY0FBY0Usa0JBQWtCRixjQUFjRSxtQkFBbUJBLGtCQUN2RVUsTUFBTSxDQUFDZCxTQUFTYSxLQUFLLENBQUMsR0FBR1AsS0FBS1MsR0FBRyxDQUFDLEdBQUdiLGNBQWNFLG1CQUFtQkEsbUJBQW1CSixTQUFTUSxNQUFNO0lBQzdHO0lBRUEsTUFBTVEscUJBQXFCLENBQUNDO1FBQzFCZCxlQUFlZSxPQUFPRCxNQUFNRSxNQUFNLENBQUNDLEtBQUs7SUFDMUM7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUNDO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQU9DLFNBQVNiO3dCQUFXVyxXQUFVO2tDQUNuQzs7Ozs7O2tDQUVILDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDWlYsNkJBQTZCYSxHQUFHLENBQUMsQ0FBQ0MsU0FBU0Msc0JBQzFDLDhEQUFDTjtnQ0FBZ0JDLFdBQVU7MENBQ3pCLDRFQUFDekIsa0RBQUtBO29DQUNKK0IsS0FBS0Msb0dBQVEsS0FBbUMsT0FBYkgsUUFBUUksSUFBSTtvQ0FDL0NDLEtBQUtMLFFBQVFNLEtBQUs7b0NBQ2xCQyxPQUFPO29DQUNQQyxRQUFRO29DQUNSQyxRQUFPO29DQUNQYixXQUFVOzs7Ozs7K0JBUEpLOzs7Ozs7Ozs7O2tDQVlkLDhEQUFDSjt3QkFBT0MsU0FBU2Y7d0JBQVdhLFdBQVU7a0NBQ25DOzs7Ozs7Ozs7Ozs7MEJBR0wsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDYztvQkFDQ0MsTUFBSztvQkFDTEMsS0FBSTtvQkFDSnZCLEtBQUtWO29CQUNMZSxPQUFPbEI7b0JBQ1BxQyxVQUFVdkI7b0JBQ1ZNLFdBQVU7Ozs7Ozs7Ozs7Ozs7QUFLcEI7R0E1RHdCdkI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL1tsb2NhbGVdL2NvbXBvbmVudHMvUHJvZHVjdHNDYXJvdXNlbC50c3g/ODg3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IHsgU2V0dGluZ3MgfSBmcm9tIFwiQC9hcHAvW2xvY2FsZV0vcHJvdmlkZXJzL3NldHRpbmdzXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdHNDYXJvdXNlbCgpIHtcclxuICBjb25zdCBwcm9kdWN0cyA9IFNldHRpbmdzLmdldEluc3RhbmNlKCkucHJvZHVjdHM7XHJcbiAgY29uc3QgW2FjdGl2ZUluZGV4LCBzZXRBY3RpdmVJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBwcm9kdWN0c1BlclNsaWRlID0gNDtcclxuICBjb25zdCBtYXhJbmRleCA9IE1hdGguY2VpbCgocHJvZHVjdHMubGVuZ3RoIC0gcHJvZHVjdHNQZXJTbGlkZSkgLyBwcm9kdWN0c1BlclNsaWRlKTtcclxuXHJcbiAgY29uc3QgbmV4dFNsaWRlID0gKCkgPT4ge1xyXG4gICAgc2V0QWN0aXZlSW5kZXgoKGN1cnJlbnQpID0+IChjdXJyZW50ICsgMSkgJSAobWF4SW5kZXggKyAxKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcHJldlNsaWRlID0gKCkgPT4ge1xyXG4gICAgc2V0QWN0aXZlSW5kZXgoKGN1cnJlbnQpID0+IChjdXJyZW50IC0gMSArIG1heEluZGV4ICsgMSkgJSAobWF4SW5kZXggKyAxKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0UHJvZHVjdHNGb3JDdXJyZW50U2xpZGUgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gcHJvZHVjdHNcclxuICAgICAgLnNsaWNlKGFjdGl2ZUluZGV4ICogcHJvZHVjdHNQZXJTbGlkZSwgYWN0aXZlSW5kZXggKiBwcm9kdWN0c1BlclNsaWRlICsgcHJvZHVjdHNQZXJTbGlkZSlcclxuICAgICAgLmNvbmNhdChwcm9kdWN0cy5zbGljZSgwLCBNYXRoLm1heCgwLCBhY3RpdmVJbmRleCAqIHByb2R1Y3RzUGVyU2xpZGUgKyBwcm9kdWN0c1BlclNsaWRlIC0gcHJvZHVjdHMubGVuZ3RoKSkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNsaWRlckNoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIHNldEFjdGl2ZUluZGV4KE51bWJlcihldmVudC50YXJnZXQudmFsdWUpKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgcHgtNFwiPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17cHJldlNsaWRlfSBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgdGV4dC0yeGwgYmctZ3JheS0zMDAgcHgtMyBwLTEgaG92ZXI6YmctZ3JheS00MDBcIj5cclxuICAgICAgICAgIHtcIjxcIn1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tNzAwXCI+XHJcbiAgICAgICAgICB7Z2V0UHJvZHVjdHNGb3JDdXJyZW50U2xpZGUoKS5tYXAoKHByb2R1Y3QsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwidy0xLzQgcC00XCI+XHJcbiAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICBzcmM9e3JlcXVpcmUoYC4uL2Fzc2V0cy9wcm9kdWN0cy8ke3Byb2R1Y3QuaHJlZn1gKX1cclxuICAgICAgICAgICAgICAgIGFsdD17cHJvZHVjdC50aXRsZX1cclxuICAgICAgICAgICAgICAgIHdpZHRoPXsxMDB9XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezEwMH1cclxuICAgICAgICAgICAgICAgIGxheW91dD1cInJlc3BvbnNpdmVcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZHVjdC1pbWFnZVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e25leHRTbGlkZX0gY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIHRleHQtMnhsIGJnLWdyYXktMzAwIHB4LTMgcC0xIGhvdmVyOmJnLWdyYXktNDAwXCI+XHJcbiAgICAgICAgICB7XCI+XCJ9XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbXQtNFwiPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInJhbmdlXCJcclxuICAgICAgICAgIG1pbj1cIjBcIlxyXG4gICAgICAgICAgbWF4PXttYXhJbmRleH1cclxuICAgICAgICAgIHZhbHVlPXthY3RpdmVJbmRleH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTbGlkZXJDaGFuZ2V9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGxcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiU2V0dGluZ3MiLCJJbWFnZSIsInVzZVN0YXRlIiwiUHJvZHVjdHNDYXJvdXNlbCIsInByb2R1Y3RzIiwiZ2V0SW5zdGFuY2UiLCJhY3RpdmVJbmRleCIsInNldEFjdGl2ZUluZGV4IiwicHJvZHVjdHNQZXJTbGlkZSIsIm1heEluZGV4IiwiTWF0aCIsImNlaWwiLCJsZW5ndGgiLCJuZXh0U2xpZGUiLCJjdXJyZW50IiwicHJldlNsaWRlIiwiZ2V0UHJvZHVjdHNGb3JDdXJyZW50U2xpZGUiLCJzbGljZSIsImNvbmNhdCIsIm1heCIsImhhbmRsZVNsaWRlckNoYW5nZSIsImV2ZW50IiwiTnVtYmVyIiwidGFyZ2V0IiwidmFsdWUiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwibWFwIiwicHJvZHVjdCIsImluZGV4Iiwic3JjIiwicmVxdWlyZSIsImhyZWYiLCJhbHQiLCJ0aXRsZSIsIndpZHRoIiwiaGVpZ2h0IiwibGF5b3V0IiwiaW5wdXQiLCJ0eXBlIiwibWluIiwib25DaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/[locale]/components/ProductsCarousel.tsx\n"));

/***/ })

});