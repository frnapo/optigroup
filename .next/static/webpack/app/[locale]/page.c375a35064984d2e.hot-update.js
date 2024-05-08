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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductsCarousel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_locale_providers_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/[locale]/providers/settings */ \"(app-pages-browser)/./app/[locale]/providers/settings.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _barrel_optimize_names_ChevronLeftIcon_ChevronRightIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronLeftIcon,ChevronRightIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/ChevronLeftIcon.js\");\n/* harmony import */ var _barrel_optimize_names_ChevronLeftIcon_ChevronRightIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronLeftIcon,ChevronRightIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/ChevronRightIcon.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction ProductsCarousel() {\n    _s();\n    const products = _app_locale_providers_settings__WEBPACK_IMPORTED_MODULE_1__.Settings.getInstance().products;\n    const [activeIndex, setActiveIndex] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);\n    const [productsPerSlide, setProductsPerSlide] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(4);\n    const [translateX, setTranslateX] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const handleResize = ()=>{\n            if (window.innerWidth >= 768) {\n                setProductsPerSlide(4);\n            } else {\n                setProductsPerSlide(2);\n            }\n        };\n        handleResize();\n        window.addEventListener(\"resize\", handleResize);\n        return ()=>window.removeEventListener(\"resize\", handleResize);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        setTranslateX(-activeIndex * (100 / productsPerSlide));\n    }, [\n        activeIndex,\n        productsPerSlide\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            nextSlide();\n        }, 5000);\n        return ()=>clearInterval(interval);\n    }, [\n        activeIndex,\n        productsPerSlide,\n        products.length\n    ]);\n    const nextSlide = ()=>{\n        setActiveIndex((current)=>current < products.length - productsPerSlide ? current + 1 : 0);\n    };\n    const prevSlide = ()=>{\n        setActiveIndex((current)=>current > 0 ? current - 1 : products.length - productsPerSlide);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto px-4 md:px-8 select-none\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex justify-between items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"p-2 rounded-full hover:bg-gray-200 transition-all duration-300 cursor-pointer\",\n                    onClick: prevSlide,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronLeftIcon_ChevronRightIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        className: \"h-6 w-6 text-gray-800\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Francesco\\\\Desktop\\\\optigroup\\\\app\\\\[locale]\\\\components\\\\ProductsCarousel.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Francesco\\\\Desktop\\\\optigroup\\\\app\\\\[locale]\\\\components\\\\ProductsCarousel.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"overflow-hidden relative w-full\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex transition-transform duration-700 ease-out\",\n                        style: {\n                            transform: \"translateX(\".concat(translateX, \"%)\"),\n                            width: \"100%\"\n                        },\n                        children: products.map((product, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"select-none\",\n                                style: {\n                                    width: \"\".concat(100 / productsPerSlide, \"%\"),\n                                    flexShrink: 0\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        src: __webpack_require__(\"(app-pages-browser)/./app/[locale]/assets/products sync recursive ^\\\\.\\\\/.*$\")(\"./\".concat(product.href)),\n                                        alt: product.title,\n                                        width: 100,\n                                        height: 100,\n                                        layout: \"responsive\",\n                                        className: \"product-image\",\n                                        unselectable: \"on\",\n                                        onDragStart: (e)=>e.preventDefault()\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Francesco\\\\Desktop\\\\optigroup\\\\app\\\\[locale]\\\\components\\\\ProductsCarousel.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mt-2 flex justify-center items-center px-2\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"border border-gray-300 text-gray-600 hover:bg-gray-300 hover:text-gray-700 py-1 px-3 rounded-l transition-all\",\n                                                onClick: ()=>alert(\"Dettagli di \" + product.title),\n                                                children: \"Dettagli\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Francesco\\\\Desktop\\\\optigroup\\\\app\\\\[locale]\\\\components\\\\ProductsCarousel.tsx\",\n                                                lineNumber: 74,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"bg-gray-800 text-white py-1 px-3 rounded-r hover:bg-gray-700 transition-all\",\n                                                onClick: ()=>alert(\"Acquista \" + product.title),\n                                                children: \"Acquista\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Francesco\\\\Desktop\\\\optigroup\\\\app\\\\[locale]\\\\components\\\\ProductsCarousel.tsx\",\n                                                lineNumber: 80,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Francesco\\\\Desktop\\\\optigroup\\\\app\\\\[locale]\\\\components\\\\ProductsCarousel.tsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, index, true, {\n                                fileName: \"C:\\\\Users\\\\Francesco\\\\Desktop\\\\optigroup\\\\app\\\\[locale]\\\\components\\\\ProductsCarousel.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 15\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Francesco\\\\Desktop\\\\optigroup\\\\app\\\\[locale]\\\\components\\\\ProductsCarousel.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Francesco\\\\Desktop\\\\optigroup\\\\app\\\\[locale]\\\\components\\\\ProductsCarousel.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"p-2 rounded-full hover:bg-gray-200 transition-all duration-300 cursor-pointer\",\n                    onClick: nextSlide,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronLeftIcon_ChevronRightIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        className: \"h-6 w-6 text-gray-800\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Francesco\\\\Desktop\\\\optigroup\\\\app\\\\[locale]\\\\components\\\\ProductsCarousel.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Francesco\\\\Desktop\\\\optigroup\\\\app\\\\[locale]\\\\components\\\\ProductsCarousel.tsx\",\n                    lineNumber: 91,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Francesco\\\\Desktop\\\\optigroup\\\\app\\\\[locale]\\\\components\\\\ProductsCarousel.tsx\",\n            lineNumber: 49,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Francesco\\\\Desktop\\\\optigroup\\\\app\\\\[locale]\\\\components\\\\ProductsCarousel.tsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this);\n}\n_s(ProductsCarousel, \"VPql6RDhUlX2W2rHAgWaQB7Gr70=\");\n_c = ProductsCarousel;\nvar _c;\n$RefreshReg$(_c, \"ProductsCarousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9bbG9jYWxlXS9jb21wb25lbnRzL1Byb2R1Y3RzQ2Fyb3VzZWwudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDNkQ7QUFDOUI7QUFDYTtBQUNvQztBQUVqRSxTQUFTTTs7SUFDdEIsTUFBTUMsV0FBV1Asb0VBQVFBLENBQUNRLFdBQVcsR0FBR0QsUUFBUTtJQUNoRCxNQUFNLENBQUNFLGFBQWFDLGVBQWUsR0FBR1AsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDUSxrQkFBa0JDLG9CQUFvQixHQUFHVCwrQ0FBUUEsQ0FBQztJQUN6RCxNQUFNLENBQUNVLFlBQVlDLGNBQWMsR0FBR1gsK0NBQVFBLENBQUM7SUFFN0NELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWEsZUFBZTtZQUNuQixJQUFJQyxPQUFPQyxVQUFVLElBQUksS0FBSztnQkFDNUJMLG9CQUFvQjtZQUN0QixPQUFPO2dCQUNMQSxvQkFBb0I7WUFDdEI7UUFDRjtRQUVBRztRQUNBQyxPQUFPRSxnQkFBZ0IsQ0FBQyxVQUFVSDtRQUNsQyxPQUFPLElBQU1DLE9BQU9HLG1CQUFtQixDQUFDLFVBQVVKO0lBQ3BELEdBQUcsRUFBRTtJQUVMYixnREFBU0EsQ0FBQztRQUNSWSxjQUFjLENBQUNMLGNBQWUsT0FBTUUsZ0JBQWU7SUFDckQsR0FBRztRQUFDRjtRQUFhRTtLQUFpQjtJQUVsQ1QsZ0RBQVNBLENBQUM7UUFDUixNQUFNa0IsV0FBV0MsWUFBWTtZQUMzQkM7UUFDRixHQUFHO1FBRUgsT0FBTyxJQUFNQyxjQUFjSDtJQUM3QixHQUFHO1FBQUNYO1FBQWFFO1FBQWtCSixTQUFTaUIsTUFBTTtLQUFDO0lBRW5ELE1BQU1GLFlBQVk7UUFDaEJaLGVBQWUsQ0FBQ2UsVUFBYUEsVUFBVWxCLFNBQVNpQixNQUFNLEdBQUdiLG1CQUFtQmMsVUFBVSxJQUFJO0lBQzVGO0lBRUEsTUFBTUMsWUFBWTtRQUNoQmhCLGVBQWUsQ0FBQ2UsVUFBYUEsVUFBVSxJQUFJQSxVQUFVLElBQUlsQixTQUFTaUIsTUFBTSxHQUFHYjtJQUM3RTtJQUVBLHFCQUNFLDhEQUFDZ0I7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNEO29CQUNDQyxXQUFVO29CQUNWQyxTQUFTSDs4QkFFVCw0RUFBQ3RCLDBIQUFlQTt3QkFBQ3dCLFdBQVU7Ozs7Ozs7Ozs7OzhCQUU3Qiw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNEO3dCQUNDQyxXQUFVO3dCQUNWRSxPQUFPOzRCQUFFQyxXQUFXLGNBQXlCLE9BQVhsQixZQUFXOzRCQUFLbUIsT0FBTzt3QkFBTztrQ0FFL0R6QixTQUFTMEIsR0FBRyxDQUFDLENBQUNDLFNBQVNDLHNCQUN0Qiw4REFBQ1I7Z0NBQWdCQyxXQUFVO2dDQUFjRSxPQUFPO29DQUFFRSxPQUFPLEdBQTBCLE9BQXZCLE1BQU1yQixrQkFBaUI7b0NBQUl5QixZQUFZO2dDQUFFOztrREFDbkcsOERBQUNuQyxrREFBS0E7d0NBQ0pvQyxLQUFLQyxvR0FBUSxLQUFtQyxPQUFiSixRQUFRSyxJQUFJO3dDQUMvQ0MsS0FBS04sUUFBUU8sS0FBSzt3Q0FDbEJULE9BQU87d0NBQ1BVLFFBQVE7d0NBQ1JDLFFBQU87d0NBQ1BmLFdBQVU7d0NBQ1ZnQixjQUFhO3dDQUNiQyxhQUFhLENBQUNDLElBQU1BLEVBQUVDLGNBQWM7Ozs7OztrREFFdEMsOERBQUNwQjt3Q0FBSUMsV0FBVTs7MERBQ2IsOERBQUNvQjtnREFDQ3BCLFdBQVU7Z0RBQ1ZDLFNBQVMsSUFBTW9CLE1BQU0saUJBQWlCZixRQUFRTyxLQUFLOzBEQUNwRDs7Ozs7OzBEQUdELDhEQUFDTztnREFDQ3BCLFdBQVU7Z0RBQ1ZDLFNBQVMsSUFBTW9CLE1BQU0sY0FBY2YsUUFBUU8sS0FBSzswREFDakQ7Ozs7Ozs7Ozs7Ozs7K0JBckJLTjs7Ozs7Ozs7Ozs7Ozs7OzhCQTZCaEIsOERBQUNSO29CQUNDQyxXQUFVO29CQUNWQyxTQUFTUDs4QkFFVCw0RUFBQ2pCLDBIQUFnQkE7d0JBQUN1QixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3RDO0dBN0Z3QnRCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9bbG9jYWxlXS9jb21wb25lbnRzL1Byb2R1Y3RzQ2Fyb3VzZWwudHN4Pzg4NzYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCB7IFNldHRpbmdzIH0gZnJvbSBcIkAvYXBwL1tsb2NhbGVdL3Byb3ZpZGVycy9zZXR0aW5nc1wiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDaGV2cm9uTGVmdEljb24sIENoZXZyb25SaWdodEljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC8yNC9vdXRsaW5lXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0c0Nhcm91c2VsKCkge1xyXG4gIGNvbnN0IHByb2R1Y3RzID0gU2V0dGluZ3MuZ2V0SW5zdGFuY2UoKS5wcm9kdWN0cztcclxuICBjb25zdCBbYWN0aXZlSW5kZXgsIHNldEFjdGl2ZUluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtwcm9kdWN0c1BlclNsaWRlLCBzZXRQcm9kdWN0c1BlclNsaWRlXSA9IHVzZVN0YXRlKDQpO1xyXG4gIGNvbnN0IFt0cmFuc2xhdGVYLCBzZXRUcmFuc2xhdGVYXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xyXG4gICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPj0gNzY4KSB7XHJcbiAgICAgICAgc2V0UHJvZHVjdHNQZXJTbGlkZSg0KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRQcm9kdWN0c1BlclNsaWRlKDIpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGhhbmRsZVJlc2l6ZSgpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcclxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFRyYW5zbGF0ZVgoLWFjdGl2ZUluZGV4ICogKDEwMCAvIHByb2R1Y3RzUGVyU2xpZGUpKTtcclxuICB9LCBbYWN0aXZlSW5kZXgsIHByb2R1Y3RzUGVyU2xpZGVdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBuZXh0U2xpZGUoKTtcclxuICAgIH0sIDUwMDApO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICB9LCBbYWN0aXZlSW5kZXgsIHByb2R1Y3RzUGVyU2xpZGUsIHByb2R1Y3RzLmxlbmd0aF0pO1xyXG5cclxuICBjb25zdCBuZXh0U2xpZGUgPSAoKSA9PiB7XHJcbiAgICBzZXRBY3RpdmVJbmRleCgoY3VycmVudCkgPT4gKGN1cnJlbnQgPCBwcm9kdWN0cy5sZW5ndGggLSBwcm9kdWN0c1BlclNsaWRlID8gY3VycmVudCArIDEgOiAwKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcHJldlNsaWRlID0gKCkgPT4ge1xyXG4gICAgc2V0QWN0aXZlSW5kZXgoKGN1cnJlbnQpID0+IChjdXJyZW50ID4gMCA/IGN1cnJlbnQgLSAxIDogcHJvZHVjdHMubGVuZ3RoIC0gcHJvZHVjdHNQZXJTbGlkZSkpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgbWQ6cHgtOCBzZWxlY3Qtbm9uZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInAtMiByb3VuZGVkLWZ1bGwgaG92ZXI6YmctZ3JheS0yMDAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgIG9uQ2xpY2s9e3ByZXZTbGlkZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8Q2hldnJvbkxlZnRJY29uIGNsYXNzTmFtZT1cImgtNiB3LTYgdGV4dC1ncmF5LTgwMFwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW4gcmVsYXRpdmUgdy1mdWxsXCI+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tNzAwIGVhc2Utb3V0XCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgke3RyYW5zbGF0ZVh9JSlgLCB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3Byb2R1Y3RzLm1hcCgocHJvZHVjdCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cInNlbGVjdC1ub25lXCIgc3R5bGU9e3sgd2lkdGg6IGAkezEwMCAvIHByb2R1Y3RzUGVyU2xpZGV9JWAsIGZsZXhTaHJpbms6IDAgfX0+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgc3JjPXtyZXF1aXJlKGAuLi9hc3NldHMvcHJvZHVjdHMvJHtwcm9kdWN0LmhyZWZ9YCl9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD17cHJvZHVjdC50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezEwMH1cclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxMDB9XHJcbiAgICAgICAgICAgICAgICAgIGxheW91dD1cInJlc3BvbnNpdmVcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9kdWN0LWltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgdW5zZWxlY3RhYmxlPVwib25cIlxyXG4gICAgICAgICAgICAgICAgICBvbkRyYWdTdGFydD17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcHgtMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LWdyYXktNjAwIGhvdmVyOmJnLWdyYXktMzAwIGhvdmVyOnRleHQtZ3JheS03MDAgcHktMSBweC0zIHJvdW5kZWQtbCB0cmFuc2l0aW9uLWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYWxlcnQoXCJEZXR0YWdsaSBkaSBcIiArIHByb2R1Y3QudGl0bGUpfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgRGV0dGFnbGlcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTgwMCB0ZXh0LXdoaXRlIHB5LTEgcHgtMyByb3VuZGVkLXIgaG92ZXI6YmctZ3JheS03MDAgdHJhbnNpdGlvbi1hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFsZXJ0KFwiQWNxdWlzdGEgXCIgKyBwcm9kdWN0LnRpdGxlKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEFjcXVpc3RhXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwicC0yIHJvdW5kZWQtZnVsbCBob3ZlcjpiZy1ncmF5LTIwMCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgb25DbGljaz17bmV4dFNsaWRlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxDaGV2cm9uUmlnaHRJY29uIGNsYXNzTmFtZT1cImgtNiB3LTYgdGV4dC1ncmF5LTgwMFwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiU2V0dGluZ3MiLCJJbWFnZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ2hldnJvbkxlZnRJY29uIiwiQ2hldnJvblJpZ2h0SWNvbiIsIlByb2R1Y3RzQ2Fyb3VzZWwiLCJwcm9kdWN0cyIsImdldEluc3RhbmNlIiwiYWN0aXZlSW5kZXgiLCJzZXRBY3RpdmVJbmRleCIsInByb2R1Y3RzUGVyU2xpZGUiLCJzZXRQcm9kdWN0c1BlclNsaWRlIiwidHJhbnNsYXRlWCIsInNldFRyYW5zbGF0ZVgiLCJoYW5kbGVSZXNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwibmV4dFNsaWRlIiwiY2xlYXJJbnRlcnZhbCIsImxlbmd0aCIsImN1cnJlbnQiLCJwcmV2U2xpZGUiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJ3aWR0aCIsIm1hcCIsInByb2R1Y3QiLCJpbmRleCIsImZsZXhTaHJpbmsiLCJzcmMiLCJyZXF1aXJlIiwiaHJlZiIsImFsdCIsInRpdGxlIiwiaGVpZ2h0IiwibGF5b3V0IiwidW5zZWxlY3RhYmxlIiwib25EcmFnU3RhcnQiLCJlIiwicHJldmVudERlZmF1bHQiLCJidXR0b24iLCJhbGVydCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/[locale]/components/ProductsCarousel.tsx\n"));

/***/ })

});