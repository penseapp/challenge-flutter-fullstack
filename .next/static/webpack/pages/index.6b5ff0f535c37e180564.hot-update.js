/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/context.tsx":
/*!*************************!*\
  !*** ./src/context.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CartContext\": function() { return /* binding */ CartContext; },\n/* harmony export */   \"default\": function() { return /* binding */ CartProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_jean_Documents_penseApp_frontend_challenge_flutter_fullstack_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/jean/Documents/penseApp/frontend/challenge-flutter-fullstack/src/context.tsx\",\n    _s = $RefreshSig$();\n\n/* eslint-disable no-alert */\n\n/* eslint-disable no-restricted-globals */\n\nvar CartContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)(null);\nfunction CartProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      products = _useState[0],\n      setProducts = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    var data = localStorage.getItem('@penseapp:cart');\n\n    if (data) {\n      setProducts(JSON.parse(data));\n    }\n  }, []);\n  var addToCart = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (product) {\n    var productIndex = products.findIndex(function (item) {\n      return item.id === product.id;\n    });\n\n    if (product.statusFlag === 'Ativo') {\n      if (productIndex >= 0) {\n        var productsList = products;\n        productsList[productIndex].quantity += 1;\n        setProducts((0,_home_jean_Documents_penseApp_frontend_challenge_flutter_fullstack_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(productsList));\n        localStorage.setItem('@penseapp:cart', JSON.stringify((0,_home_jean_Documents_penseApp_frontend_challenge_flutter_fullstack_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(productsList)));\n      } else {\n        var newProduct = {\n          id: product.id,\n          name: product.name,\n          description: product.description,\n          price: product.price,\n          promoPrice: product.promoPrice,\n          statusFlag: product.statusFlag,\n          category: product.category,\n          quantity: 1\n        };\n        setProducts([].concat((0,_home_jean_Documents_penseApp_frontend_challenge_flutter_fullstack_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(products), [newProduct]));\n        localStorage.setItem('@penseapp:cart', JSON.stringify([].concat((0,_home_jean_Documents_penseApp_frontend_challenge_flutter_fullstack_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(products), [newProduct])));\n      }\n    } else {\n      throw new Error('Produto indisponível no estoque');\n    }\n  }, [products]);\n  var increment = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (product) {\n    var productsList = products;\n    var index = products.findIndex(function (item) {\n      return item.id === product.id;\n    });\n    productsList[index].quantity += 1;\n    setProducts((0,_home_jean_Documents_penseApp_frontend_challenge_flutter_fullstack_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(productsList));\n  }, [products]);\n  var decrement = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (product) {\n    var productsList = products;\n    var index = products.findIndex(function (item) {\n      return item.id === product.id;\n    });\n\n    if (productsList[index].quantity > 1) {\n      productsList[index].quantity -= 1;\n      setProducts((0,_home_jean_Documents_penseApp_frontend_challenge_flutter_fullstack_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(productsList));\n    } else {\n      var response = confirm('Remover o produto do carrinho?');\n\n      if (response) {\n        productsList.splice(index, 1);\n        setProducts((0,_home_jean_Documents_penseApp_frontend_challenge_flutter_fullstack_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(productsList));\n      }\n    }\n  }, [products]);\n  var totalItensInCart = products.reduce(function (total, item) {\n    return total + item.quantity;\n  }, 0);\n  var value = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function () {\n    return {\n      addToCart: addToCart,\n      products: products,\n      totalItensInCart: totalItensInCart,\n      increment: increment,\n      decrement: decrement\n    };\n  }, [addToCart, products, totalItensInCart, increment, decrement]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartContext.Provider, {\n    value: value,\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 140,\n    columnNumber: 10\n  }, this);\n}\n\n_s(CartProvider, \"AQg+d2WdDLaMPzKiKckiMYmxmvU=\");\n\n_c = CartProvider;\n\nvar _c;\n\n$RefreshReg$(_c, \"CartProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHQudHN4P2Q1OTEiXSwibmFtZXMiOlsiQ2FydENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQ2FydFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJ1c2VFZmZlY3QiLCJkYXRhIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsImFkZFRvQ2FydCIsInVzZUNhbGxiYWNrIiwicHJvZHVjdCIsInByb2R1Y3RJbmRleCIsImZpbmRJbmRleCIsIml0ZW0iLCJpZCIsInN0YXR1c0ZsYWciLCJwcm9kdWN0c0xpc3QiLCJxdWFudGl0eSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJuZXdQcm9kdWN0IiwibmFtZSIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJwcm9tb1ByaWNlIiwiY2F0ZWdvcnkiLCJFcnJvciIsImluY3JlbWVudCIsImluZGV4IiwiZGVjcmVtZW50IiwicmVzcG9uc2UiLCJjb25maXJtIiwic3BsaWNlIiwidG90YWxJdGVuc0luQ2FydCIsInJlZHVjZSIsInRvdGFsIiwidmFsdWUiLCJ1c2VNZW1vIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBO0FBQ0E7QUFnQ08sSUFBTUEsV0FBVyxnQkFBR0Msb0RBQWEsQ0FBcUIsSUFBckIsQ0FBakM7QUFFUSxTQUFTQyxZQUFULE9BRW9CO0FBQUE7O0FBQUEsTUFEakNDLFFBQ2lDLFFBRGpDQSxRQUNpQzs7QUFBQSxrQkFDREMsK0NBQVEsQ0FBWSxFQUFaLENBRFA7QUFBQSxNQUMxQkMsUUFEMEI7QUFBQSxNQUNoQkMsV0FEZ0I7O0FBR2pDQyxrREFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxJQUFJLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixnQkFBckIsQ0FBYjs7QUFFQSxRQUFJRixJQUFKLEVBQVU7QUFDUkYsaUJBQVcsQ0FBQ0ssSUFBSSxD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Q0FBeEI7O0FBRUEsVUFBSUQsUUFBSixFQUFjO0FBQ1pkLG9CQUFZLENBQUNnQixNQUFiLENBQW9CSixLQUFwQixFQUEyQixDQUEzQjtBQUVBM0IsbUJBQVcsQ0FBQyx1TEFBSWUsWUFBTCxFQUFYO0FBQ0Q7QUFDRjtBQUNGLEdBbkIwQixFQW9CM0IsQ0FBQ2hCLFFBQUQsQ0FwQjJCLENBQTdCO0FBdUJBLE1BQU1pQyxnQkFBZ0IsR0FBR2pDLFFBQVEsQ0FBQ2tDLE1BQVQsQ0FBZ0IsVUFBQ0MsS0FBRCxFQUFRdEIsSUFBUixFQUFpQjtBQUN4RCxXQUFPc0IsS0FBSyxHQUFHdEIsSUFBSSxDQUFDSSxRQUFwQjtBQUNELEdBRndCLEVBRXRCLENBRnNCLENBQXpCO0FBSUEsTUFBTW1CLEtBQUssR0FBR0MsOENBQU8sQ0FDbkI7QUFBQSxXQUFPO0FBQ0w3QixlQUFTLEVBQVRBLFNBREs7QUFFTFIsY0FBUSxFQUFSQSxRQUZLO0FBR0xpQyxzQkFBZ0IsRUFBaEJBLGdCQUhLO0FBSUxOLGVBQVMsRUFBVEEsU0FKSztBQUtMRSxlQUFTLEVBQVRBO0FBTEssS0FBUDtBQUFBLEdBRG1CLEVBUW5CLENBQUNyQixTQUFELEVBQVlSLFFBQVosRUFBc0JpQyxnQkFBdEIsRUFBd0NOLFNBQXhDLEVBQW1ERSxTQUFuRCxDQVJtQixDQUFyQjtBQVdBLHNCQUFPLDhEQUFDLFdBQUQsQ0FBYSxRQUFiO0FBQXNCLFNBQUssRUFBRU8sS0FBN0I7QUFBQSxjQUFxQ3RDO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEOztHQXhHdUJELFk7O0tBQUFBLFkiLCJmaWxlIjoiLi9zcmMvY29udGV4dC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1hbGVydCAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzICovXG5pbXBvcnQge1xuICBjcmVhdGVDb250ZXh0LFxuICBSZWFjdE5vZGUsXG4gIHVzZUNhbGxiYWNrLFxuICB1c2VFZmZlY3QsXG4gIHVzZU1lbW8sXG4gIHVzZVN0YXRlLFxufSBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBQcm9kdWN0IHtcbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBwcmljZTogbnVtYmVyO1xuICBwcm9tb1ByaWNlOiBudW1iZXI7XG4gIHN0YXR1c0ZsYWc6IHN0cmluZztcbiAgY2F0ZWdvcnk6IHN0cmluZztcbiAgcXVhbnRpdHk6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIENhcnRDb250ZXh0IHtcbiAgcHJvZHVjdHM6IFByb2R1Y3RbXTtcbiAgYWRkVG9DYXJ0KGl0ZW06IE9taXQ8UHJvZHVjdCwgJ3F1YW50aXR5Jz4pOiB2b2lkO1xuICB0b3RhbEl0ZW5zSW5DYXJ0OiBudW1iZXI7XG4gIGluY3JlbWVudDogKGl0ZW06IFByb2R1Y3QpID0+IHZvaWQ7XG4gIGRlY3JlbWVudDogKGl0ZW06IFByb2R1Y3QpID0+IHZvaWQ7XG59XG5cbmludGVyZmFjZSBDYXJ0UHJvdmlkZXJQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG59XG5cbmV4cG9ydCBjb25zdCBDYXJ0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8Q2FydENvbnRleHQgfCBudWxsPihudWxsKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FydFByb3ZpZGVyKHtcbiAgY2hpbGRyZW4sXG59OiBDYXJ0UHJvdmlkZXJQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZTxQcm9kdWN0W10+KFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQHBlbnNlYXBwOmNhcnQnKTtcblxuICAgIGlmIChkYXRhKSB7XG4gICAgICBzZXRQcm9kdWN0cyhKU09OLnBhcnNlKGRhdGEpKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCBhZGRUb0NhcnQgPSB1c2VDYWxsYmFjayhcbiAgICBwcm9kdWN0ID0+IHtcbiAgICAgIGNvbnN0IHByb2R1Y3RJbmRleCA9IHByb2R1Y3RzLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uaWQgPT09IHByb2R1Y3QuaWQpO1xuXG4gICAgICBpZiAocHJvZHVjdC5zdGF0dXNGbGFnID09PSAnQXRpdm8nKSB7XG4gICAgICAgIGlmIChwcm9kdWN0SW5kZXggPj0gMCkge1xuICAgICAgICAgIGNvbnN0IHByb2R1Y3RzTGlzdCA9IHByb2R1Y3RzO1xuICAgICAgICAgIHByb2R1Y3RzTGlzdFtwcm9kdWN0SW5kZXhdLnF1YW50aXR5ICs9IDE7XG4gICAgICAgICAgc2V0UHJvZHVjdHMoWy4uLnByb2R1Y3RzTGlzdF0pO1xuXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAnQHBlbnNlYXBwOmNhcnQnLFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoWy4uLnByb2R1Y3RzTGlzdF0pLFxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgbmV3UHJvZHVjdDogUHJvZHVjdCA9IHtcbiAgICAgICAgICAgIGlkOiBwcm9kdWN0LmlkLFxuICAgICAgICAgICAgbmFtZTogcHJvZHVjdC5uYW1lLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHByb2R1Y3QuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBwcmljZTogcHJvZHVjdC5wcmljZSxcbiAgICAgICAgICAgIHByb21vUHJpY2U6IHByb2R1Y3QucHJvbW9QcmljZSxcbiAgICAgICAgICAgIHN0YXR1c0ZsYWc6IHByb2R1Y3Quc3RhdHVzRmxhZyxcbiAgICAgICAgICAgIGNhdGVnb3J5OiBwcm9kdWN0LmNhdGVnb3J5LFxuICAgICAgICAgICAgcXVhbnRpdHk6IDEsXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIHNldFByb2R1Y3RzKFsuLi5wcm9kdWN0cywgbmV3UHJvZHVjdF0pO1xuXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAnQHBlbnNlYXBwOmNhcnQnLFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoWy4uLnByb2R1Y3RzLCBuZXdQcm9kdWN0XSksXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQcm9kdXRvIGluZGlzcG9uw612ZWwgbm8gZXN0b3F1ZScpO1xuICAgICAgfVxuICAgIH0sXG4gICAgW3Byb2R1Y3RzXSxcbiAgKTtcblxuICBjb25zdCBpbmNyZW1lbnQgPSB1c2VDYWxsYmFjayhcbiAgICBwcm9kdWN0ID0+IHtcbiAgICAgIGNvbnN0IHByb2R1Y3RzTGlzdCA9IHByb2R1Y3RzO1xuXG4gICAgICBjb25zdCBpbmRleCA9IHByb2R1Y3RzLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uaWQgPT09IHByb2R1Y3QuaWQpO1xuICAgICAgcHJvZHVjdHNMaXN0W2luZGV4XS5xdWFudGl0eSArPSAxO1xuXG4gICAgICBzZXRQcm9kdWN0cyhbLi4ucHJvZHVjdHNMaXN0XSk7XG4gICAgfSxcbiAgICBbcHJvZHVjdHNdLFxuICApO1xuXG4gIGNvbnN0IGRlY3JlbWVudCA9IHVzZUNhbGxiYWNrKFxuICAgIHByb2R1Y3QgPT4ge1xuICAgICAgY29uc3QgcHJvZHVjdHNMaXN0ID0gcHJvZHVjdHM7XG5cbiAgICAgIGNvbnN0IGluZGV4ID0gcHJvZHVjdHMuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5pZCA9PT0gcHJvZHVjdC5pZCk7XG5cbiAgICAgIGlmIChwcm9kdWN0c0xpc3RbaW5kZXhdLnF1YW50aXR5ID4gMSkge1xuICAgICAgICBwcm9kdWN0c0xpc3RbaW5kZXhdLnF1YW50aXR5IC09IDE7XG5cbiAgICAgICAgc2V0UHJvZHVjdHMoWy4uLnByb2R1Y3RzTGlzdF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBjb25maXJtKCdSZW1vdmVyIG8gcHJvZHV0byBkbyBjYXJyaW5obz8nKTtcblxuICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICBwcm9kdWN0c0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcblxuICAgICAgICAgIHNldFByb2R1Y3RzKFsuLi5wcm9kdWN0c0xpc3RdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW3Byb2R1Y3RzXSxcbiAgKTtcblxuICBjb25zdCB0b3RhbEl0ZW5zSW5DYXJ0ID0gcHJvZHVjdHMucmVkdWNlKCh0b3RhbCwgaXRlbSkgPT4ge1xuICAgIHJldHVybiB0b3RhbCArIGl0ZW0ucXVhbnRpdHk7XG4gIH0sIDApO1xuXG4gIGNvbnN0IHZhbHVlID0gdXNlTWVtbyhcbiAgICAoKSA9PiAoe1xuICAgICAgYWRkVG9DYXJ0LFxuICAgICAgcHJvZHVjdHMsXG4gICAgICB0b3RhbEl0ZW5zSW5DYXJ0LFxuICAgICAgaW5jcmVtZW50LFxuICAgICAgZGVjcmVtZW50LFxuICAgIH0pLFxuICAgIFthZGRUb0NhcnQsIHByb2R1Y3RzLCB0b3RhbEl0ZW5zSW5DYXJ0LCBpbmNyZW1lbnQsIGRlY3JlbWVudF0sXG4gICk7XG5cbiAgcmV0dXJuIDxDYXJ0Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PntjaGlsZHJlbn08L0NhcnRDb250ZXh0LlByb3ZpZGVyPjtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/context.tsx\n");

/***/ })

});