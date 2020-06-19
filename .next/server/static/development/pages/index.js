module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/home/walter/Programas/work/landing-page/components/Header.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_ => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"nav\", {\n  class: \"navbar fixed-top navbar-expand-lg\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 2,\n    columnNumber: 5\n  }\n}, __jsx(\"div\", {\n  class: \"container\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 3,\n    columnNumber: 9\n  }\n}, __jsx(\"a\", {\n  class: \"navbar-brand\",\n  href: \"#\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 13\n  }\n}, __jsx(\"img\", {\n  class: \"logo\",\n  src: \"./images/agro_logo.png\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 13\n  }\n})), __jsx(\"button\", {\n  class: \"navbar-toggler\",\n  type: \"button\",\n  \"data-toggle\": \"collapse\",\n  \"data-target\": \"#navbarSupportedContent\",\n  \"aria-controls\": \"navbarSupportedContent\",\n  \"aria-expanded\": \"false\",\n  \"aria-label\": \"Toggle navigation\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 13\n  }\n}, __jsx(\"span\", {\n  class: \"navbar-toggler-icon\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 13\n  }\n}))))));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcz82ZjRhIl0sIm5hbWVzIjpbIl8iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFlQSxnRUFBQyxJQUFJLG1FQUNoQjtBQUFLLE9BQUssRUFBQyxtQ0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0k7QUFBSyxPQUFLLEVBQUMsV0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0k7QUFBRyxPQUFLLEVBQUMsY0FBVDtBQUF3QixNQUFJLEVBQUMsR0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNBO0FBQUssT0FBSyxFQUFDLE1BQVg7QUFBa0IsS0FBRyxFQUFDLHdCQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREEsQ0FESixFQUlJO0FBQVEsT0FBSyxFQUFDLGdCQUFkO0FBQStCLE1BQUksRUFBQyxRQUFwQztBQUE2QyxpQkFBWSxVQUF6RDtBQUFvRSxpQkFBWSx5QkFBaEY7QUFBMEcsbUJBQWMsd0JBQXhIO0FBQWlKLG1CQUFjLE9BQS9KO0FBQXVLLGdCQUFXLG1CQUFsTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0E7QUFBTSxPQUFLLEVBQUMscUJBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQURBLENBSkosQ0FESixDQURnQixDQUFwQiIsImZpbGUiOiIuL2NvbXBvbmVudHMvSGVhZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXyA9PiA8PlxuICAgIDxuYXYgY2xhc3M9XCJuYXZiYXIgZml4ZWQtdG9wIG5hdmJhci1leHBhbmQtbGdcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgPGltZyBjbGFzcz1cImxvZ29cIiBzcmM9XCIuL2ltYWdlcy9hZ3JvX2xvZ28ucG5nXCIvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm5hdmJhci10b2dnbGVyXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCIgYXJpYS1jb250cm9scz1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj4gICAgICBcbiAgICA8L25hdj5cbjwvPiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ \"./components/Header.js\");\nvar _jsxFileName = \"/home/walter/Programas/work/landing-page/components/Layout.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (({\n  children\n}) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }\n}, __jsx(\"meta\", {\n  charset: \"utf-8\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 9\n  }\n}), __jsx(\"meta\", {\n  name: \"viewport\",\n  content: \"width=device-width, initial-scale=1, shrink-to-fit=no\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 9\n  }\n}), __jsx(\"link\", {\n  rel: \"stylesheet\",\n  href: \"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css\",\n  integrity: \"sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk\",\n  crossorigin: \"anonymous\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 9\n  }\n}), __jsx(\"link\", {\n  rel: \"stylesheet\",\n  href: \"style.css\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 9\n  }\n}), __jsx(\"title\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 9\n  }\n}, \"Agro de Bolso\")), __jsx(\"div\", {\n  class: \"container-full\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }\n}, __jsx(\"nav\", {\n  class: \"navbar fixed-top navbar-expand-lg\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 5\n  }\n}, __jsx(\"div\", {\n  class: \"container\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 7\n  }\n}, __jsx(\"a\", {\n  class: \"navbar-brand\",\n  href: \"#\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 9\n  }\n}, __jsx(\"img\", {\n  class: \"logo\",\n  src: \"./images/agro_logo.png\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 11\n  }\n})), __jsx(\"button\", {\n  class: \"navbar-toggler\",\n  type: \"button\",\n  \"data-toggle\": \"collapse\",\n  \"data-target\": \"#navbarSupportedContent\",\n  \"aria-controls\": \"navbarSupportedContent\",\n  \"aria-expanded\": \"false\",\n  \"aria-label\": \"Toggle navigation\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 9\n  }\n}, __jsx(\"span\", {\n  class: \"navbar-toggler-icon\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 11\n  }\n})))), __jsx(\"div\", {\n  class: \"jumbotron\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 5\n  }\n}, __jsx(\"div\", {\n  class: \"container\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 7\n  }\n}, __jsx(\"div\", {\n  class: \"row\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 9\n  }\n}, __jsx(\"div\", {\n  class: \"col col-md-6\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 11\n  }\n}, __jsx(\"h1\", {\n  class: \"display-4 mb-4\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 13\n  }\n}, \"Produtos da fazenda, frescos, entregues na sua casa\"), __jsx(\"div\", {\n  class: \"row\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 13\n  }\n}, __jsx(\"div\", {\n  class: \"col d-none d-md-block\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 15\n  }\n}, __jsx(\"p\", {\n  class: \"mb-5\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 17\n  }\n}, \"Tenha as melhores frutas, verduras, legumes e diversos outros produtos naturais entregues no conforto da sua casa em at\\xE9 um dia. Aqui, conectamos o pequeno produtor rural com voc\\xEA, sendo tudo isso por um pre\\xE7o acess\\xEDvel e sem taxa de entrega.\"), __jsx(\"a\", {\n  href: \"#\",\n  id: \"register\",\n  class: \"btn btn-warning\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 41,\n    columnNumber: 17\n  }\n}, \"Cadastre-se\"), __jsx(\"div\", {\n  class: \"row mt-5\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 42,\n    columnNumber: 17\n  }\n}, __jsx(\"div\", {\n  class: \"col-md-1\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 43,\n    columnNumber: 19\n  }\n}, __jsx(\"img\", {\n  src: \"./images/face.svg\",\n  alt: \"\",\n  class: \"src\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 21\n  }\n})), __jsx(\"div\", {\n  class: \"col-md-1\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 47,\n    columnNumber: 19\n  }\n}, __jsx(\"img\", {\n  src: \"./images/instagram.svg\",\n  alt: \"\",\n  class: \"src\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 48,\n    columnNumber: 21\n  }\n})))))), __jsx(\"div\", {\n  class: \"col-xs-12 col-md-6\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 55,\n    columnNumber: 11\n  }\n}, __jsx(\"img\", {\n  class: \"img-fluid img-cesta\",\n  src: \"./images/homemcesta.svg\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 56,\n    columnNumber: 13\n  }\n})), __jsx(\"div\", {\n  class: \"row\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 59,\n    columnNumber: 11\n  }\n}, __jsx(\"div\", {\n  class: \"col d-xs-block d-md-none text-box\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 60,\n    columnNumber: 13\n  }\n}, __jsx(\"p\", {\n  class: \"mt-4 mb-5\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 61,\n    columnNumber: 15\n  }\n}, \"Tenha as melhores frutas, verduras, legumes e diversos outros produtos naturais entregues no conforto da sua casa em at\\xE9 um dia. Aqui, conectamos o pequeno produtor rural com voc\\xEA, sendo tudo isso por um pre\\xE7o acess\\xEDvel e sem taxa de entrega.\"), __jsx(\"div\", {\n  class: \"text-center\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 64,\n    columnNumber: 15\n  }\n}, __jsx(\"a\", {\n  href: \"#\",\n  id: \"register\",\n  class: \"btn btn-warning\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 65,\n    columnNumber: 17\n  }\n}, \"Cadastre-se\")), __jsx(\"div\", {\n  class: \"row justify-content-center mt-5 pb-4\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 68,\n    columnNumber: 15\n  }\n}, __jsx(\"div\", {\n  class: \"col-auto\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 69,\n    columnNumber: 17\n  }\n}, __jsx(\"img\", {\n  src: \"./images/face.svg\",\n  alt: \"\",\n  class: \"src\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 70,\n    columnNumber: 19\n  }\n})), __jsx(\"div\", {\n  class: \"col-auto\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 73,\n    columnNumber: 17\n  }\n}, __jsx(\"img\", {\n  src: \"./images/instagram.svg\",\n  alt: \"\",\n  class: \"src\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 74,\n    columnNumber: 19\n  }\n})))))))), __jsx(\"script\", {\n  src: \"https://code.jquery.com/jquery-3.5.1.slim.min.js\",\n  integrity: \"sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj\",\n  crossorigin: \"anonymous\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 82,\n    columnNumber: 5\n  }\n}), __jsx(\"script\", {\n  src: \"https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js\",\n  integrity: \"sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo\",\n  crossorigin: \"anonymous\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 83,\n    columnNumber: 5\n  }\n}), __jsx(\"script\", {\n  src: \"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js\",\n  integrity: \"sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI\",\n  crossorigin: \"anonymous\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 84,\n    columnNumber: 5\n  }\n}))));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcz9lNThhIl0sIm5hbWVzIjpbImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsZ0VBQUM7QUFBQ0E7QUFBRCxDQUFELEtBQWdCLG1FQUMzQixNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDSTtBQUFNLFNBQU8sRUFBQyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFESixFQUVJO0FBQU0sTUFBSSxFQUFDLFVBQVg7QUFBc0IsU0FBTyxFQUFDLHVEQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBRkosRUFHSTtBQUFNLEtBQUcsRUFBQyxZQUFWO0FBQXVCLE1BQUksRUFBQywwRUFBNUI7QUFBdUcsV0FBUyxFQUFDLHlFQUFqSDtBQUEyTCxhQUFXLEVBQUMsV0FBdk07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUhKLEVBSUk7QUFBTSxLQUFHLEVBQUMsWUFBVjtBQUF1QixNQUFJLEVBQUMsV0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUpKLEVBTUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFOSixDQUQyQixFQVMzQjtBQUFLLE9BQUssRUFBQyxnQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBRUE7QUFBSyxPQUFLLEVBQUMsbUNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUssT0FBSyxFQUFDLFdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUcsT0FBSyxFQUFDLGNBQVQ7QUFBd0IsTUFBSSxFQUFDLEdBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtB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Y29tcG9uZW50cy9MYXlvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJ1xuXG5leHBvcnQgZGVmYXVsdCAoe2NoaWxkcmVufSkgPT4gPD5cbiAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgY2hhcnNldD1cInV0Zi04XCIvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIHNocmluay10by1maXQ9bm9cIi8+ICAgICAgICBcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjUuMC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiBpbnRlZ3JpdHk9XCJzaGEzODQtOWFJdDJuUnBDMTJVazlnUzliYURsNDExTlFBcEZtQzI2RXdBT0g4V2dabDVNWVl4RmZjK05jUGIxZEtHajdTa1wiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCIvPlxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cInN0eWxlLmNzc1wiLz5cbiAgICAgICAgXG4gICAgICAgIDx0aXRsZT5BZ3JvIGRlIEJvbHNvPC90aXRsZT5cbiAgICA8L0hlYWQ+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mdWxsXCI+XG4gICAgXG4gICAgPG5hdiBjbGFzcz1cIm5hdmJhciBmaXhlZC10b3AgbmF2YmFyLWV4cGFuZC1sZ1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICA8YSBjbGFzcz1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgPGltZyBjbGFzcz1cImxvZ29cIiBzcmM9XCIuL2ltYWdlcy9hZ3JvX2xvZ28ucG5nXCIvPlxuICAgICAgICA8L2E+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJuYXZiYXItdG9nZ2xlclwiIHR5cGU9XCJidXR0b25cIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjbmF2YmFyU3VwcG9ydGVkQ29udGVudFwiIGFyaWEtY29udHJvbHM9XCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgPC9uYXY+XG4gICAgXG5cbiAgICA8ZGl2IGNsYXNzPVwianVtYm90cm9uXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIGNvbC1tZC02XCI+XG4gICAgICAgICAgICA8aDEgY2xhc3M9XCJkaXNwbGF5LTQgbWItNFwiPlxuICAgICAgICAgICAgICBQcm9kdXRvcyBkYSBmYXplbmRhLCBmcmVzY29zLCBlbnRyZWd1ZXMgbmEgc3VhIGNhc2FcbiAgICAgICAgICAgIDwvaDE+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBkLW5vbmUgZC1tZC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibWItNVwiPlxuICAgICAgICAgICAgICAgICAgVGVuaGEgYXMgbWVsaG9yZXMgZnJ1dGFzLCB2ZXJkdXJhcywgbGVndW1lcyBlIGRpdmVyc29zIG91dHJvcyBwcm9kdXRvcyBuYXR1cmFpcyBlbnRyZWd1ZXMgbm8gY29uZm9ydG8gZGEgc3VhIGNhc2EgZW0gYXTDqSB1bSBkaWEuIEFxdWksIGNvbmVjdGFtb3MgbyBwZXF1ZW5vIHByb2R1dG9yIHJ1cmFsIGNvbSB2b2PDqiwgc2VuZG8gdHVkbyBpc3NvIHBvciB1bSBwcmXDp28gYWNlc3PDrXZlbCBlIHNlbSB0YXhhIGRlIGVudHJlZ2EuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgaWQ9XCJyZWdpc3RlclwiIGNsYXNzPVwiYnRuIGJ0bi13YXJuaW5nXCI+Q2FkYXN0cmUtc2U8L2E+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBtdC01XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL2ltYWdlcy9mYWNlLnN2Z1wiIGFsdD1cIlwiIGNsYXNzPVwic3JjXCIvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMVwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vaW1hZ2VzL2luc3RhZ3JhbS5zdmdcIiBhbHQ9XCJcIiBjbGFzcz1cInNyY1wiLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtbWQtNlwiPlxuICAgICAgICAgICAgPGltZyBjbGFzcz1cImltZy1mbHVpZCBpbWctY2VzdGFcIiBzcmM9XCIuL2ltYWdlcy9ob21lbWNlc3RhLnN2Z1wiLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgZC14cy1ibG9jayBkLW1kLW5vbmUgdGV4dC1ib3hcIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtdC00IG1iLTVcIj5cbiAgICAgICAgICAgICAgICBUZW5oYSBhcyBtZWxob3JlcyBmcnV0YXMsIHZlcmR1cmFzLCBsZWd1bWVzIGUgZGl2ZXJzb3Mgb3V0cm9zIHByb2R1dG9zIG5hdHVyYWlzIGVudHJlZ3VlcyBubyBjb25mb3J0byBkYSBzdWEgY2FzYSBlbSBhdMOpIHVtIGRpYS4gQXF1aSwgY29uZWN0YW1vcyBvIHBlcXVlbm8gcHJvZHV0b3IgcnVyYWwgY29tIHZvY8OqLCBzZW5kbyB0dWRvIGlzc28gcG9yIHVtIHByZcOnbyBhY2Vzc8OtdmVsIGUgc2VtIHRheGEgZGUgZW50cmVnYS5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGlkPVwicmVnaXN0ZXJcIiBjbGFzcz1cImJ0biBidG4td2FybmluZ1wiPkNhZGFzdHJlLXNlPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBtdC01IHBiLTRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9pbWFnZXMvZmFjZS5zdmdcIiBhbHQ9XCJcIiBjbGFzcz1cInNyY1wiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL2ltYWdlcy9pbnN0YWdyYW0uc3ZnXCIgYWx0PVwiXCIgY2xhc3M9XCJzcmNcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2NvZGUuanF1ZXJ5LmNvbS9qcXVlcnktMy41LjEuc2xpbS5taW4uanNcIiBpbnRlZ3JpdHk9XCJzaGEzODQtRGZYZHoyaHRQSDBsc1NTczVuQ1RwdWovenk0QytPR3BhbW9GVnkzOE1WQm5FK0liYlZZVWV3K09yQ1hhUmtmalwiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCI+PC9zY3JpcHQ+XG4gICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3BvcHBlci5qc0AxLjE2LjAvZGlzdC91bWQvcG9wcGVyLm1pbi5qc1wiIGludGVncml0eT1cInNoYTM4NC1RNkU5Ukh2Ykl5WkZKb2Z0KzJtSmJIYUVXbGRsdkk5SU9ZeTVuM3pWOXp6VHRtSTNVa3NkUVJWdm94TWZvb0FvXCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIj48L3NjcmlwdD5cbiAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuNS4wL2pzL2Jvb3RzdHJhcC5taW4uanNcIiBpbnRlZ3JpdHk9XCJzaGEzODQtT2dWUnZ1QVRQMXo3SmpITGt1T1U3WHc3MDQraDgzNUxyKzZRTDlVdllqWkUzSXB1NlRwNzVqN0JoL2tSMEpLSVwiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCI+PC9zY3JpcHQ+XG4gIDwvZGl2PlxuPC8+Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\nvar _jsxFileName = \"/home/walter/Programas/work/landing-page/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_ => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 5\n  }\n})));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIl8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUVlQSxnRUFBQyxJQUFJLG1FQUNoQixNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFEZ0IsQ0FBcEIiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IF8gPT4gPD5cbiAgICA8TGF5b3V0PlxuICAgICAgICBcbiAgICA8L0xheW91dD5cbjwvPiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/walter/Programas/work/landing-page/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });