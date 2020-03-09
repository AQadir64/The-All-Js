(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/app/Component.js":
/*!******************************!*\
  !*** ./src/app/Component.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* eslint-disable multiline-ternary */\n/* harmony default export */ __webpack_exports__[\"default\"] = (class {\n  constructor(hostElementId, insertBefore = false) {\n    if (hostElementId) {\n      this.hostElement = document.getElementById(hostElementId);\n    } else {\n      this.hostElement = document.body;\n    }\n    this.insertBefore = insertBefore;\n  }\n\n  detach() {\n    if (this.element) {\n      this.element.remove();\n      // this.element.parentElement.removeChild(this.element);\n    }\n  }\n\n  attach() {\n    this.hostElement.insertAdjacentElement(\n      // eslint-disable-next-line multiline-ternary\n      // eslint-disable-next-line no-ternary\n      this.insertBefore ? \"afterbegin\" : \"beforeend\",\n      this.element\n    );\n  }\n});\n\n\n//# sourceURL=webpack:///./src/app/Component.js?");

/***/ }),

/***/ "./src/app/Tooltip.js":
/*!****************************!*\
  !*** ./src/app/Tooltip.js ***!
  \****************************/
/*! exports provided: Tooltip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Tooltip\", function() { return Tooltip; });\n/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ \"./src/app/Component.js\");\n/* eslint-disable no-magic-numbers */\n/* eslint-disable max-statements */\n/* eslint-disable no-inline-comments */\n\n\nclass Tooltip extends _Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(closeNotifierFunction, text, hostElementId) {\n    super(hostElementId);\n    this.closeNotifier = closeNotifierFunction;\n    this.text = text;\n    this.create();\n\n    this.closeTooltip = () => {\n      this.detach();\n      this.closeNotifier();\n    };\n  }\n\n  create() {\n    const tooltipElement = document.createElement(\"div\");\n    tooltipElement.className = \"card\";\n    const tooltipTemplate = document.getElementById(\"tooltip\");\n    const tooltipBody = document.importNode(tooltipTemplate.content, true);\n    tooltipBody.querySelector(\"p\").textContent = this.text;\n    tooltipElement.append(tooltipBody);\n\n    const hostElPosLeft = this.hostElement.offsetLeft;\n    const hostElPosTop = this.hostElement.offsetTop;\n    const hostElHeight = this.hostElement.clientHeight;\n    const parentElementScrolling = this.hostElement.parentElement.scrollTop;\n\n    // eslint-disable-next-line no-magic-numbers\n    // eslint-disable-next-line id-length\n    const x = hostElPosLeft + 20;\n    // eslint-disable-next-line no-magic-numbers\n    // eslint-disable-next-line id-length\n    const y = hostElPosTop + hostElHeight - parentElementScrolling - 10;\n    tooltipElement.style.position = \"absolute\";\n    // eslint-disable-next-line line-comment-position\n    tooltipElement.style.left = `${x}px`; // 500px\n    tooltipElement.style.top = `${y}px`;\n\n    tooltipElement.addEventListener(\"click\", this.closeTooltip);\n    this.element = tooltipElement;\n  }\n}\n\n\n//# sourceURL=webpack:///./src/app/Tooltip.js?");

/***/ })

}]);