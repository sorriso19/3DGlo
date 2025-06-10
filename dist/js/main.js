/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/validator */ \"./modules/validator.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('21 april 2025');\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_validator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n  const menu = () => {\r\n    \r\n    const menuBtn = document.querySelector('.menu')\r\n    const menu = document.querySelector('menu')\r\n    const closeBtn = menu.querySelector('.close-btn')\r\n    const menuItems = menu.querySelectorAll('ul>li>a')\r\n    const menuItem = menu.querySelectorAll('li')\r\n\r\n    const handleMenu = () => {\r\n \r\n      menu.classList.toggle('active-menu')\r\n\r\n    }\r\n\r\n  \r\n     \r\n   menuItems.addEventListener('click', (e) =>  {\r\n      if (e.target.tagName === 'LI') {\r\n           menuBtn.addEventListener('click', handleMenu)\r\n      } else {\r\n        if (e.target.className === '.close-btn') {\r\n          closeBtn.addEventListener('click', handleMenu)\r\n        }\r\n      }\r\n   })\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n    const modal = document.querySelector('.popup')\r\n    const buttons = document.querySelectorAll('.popup-btn')\r\n    \r\n          buttons.forEach(btn => {\r\n                btn.addEventListener('click', () => {\r\n                    modal.style.display = 'block'\r\n                })\r\n          })\r\n\r\n          modal.addEventListener('click', (e) => {\r\n              if(!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {\r\n\r\n                    modal.style.display = 'none'\r\n            }\r\n                \r\n        })\r\n          \r\n    }\r\n   \r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n    const tabPanel = document.querySelector('.service-header')\r\n    const tabs = document.querySelectorAll('.service-header-tab')\r\n    const tabContent = document.querySelectorAll('.service-tab')\r\n\r\n    tabPanel.addEventListener('click', (e) => {\r\n        if (e.target.closest('.service-header-tab')) {\r\n            const tabBtn = e.target.closest('.service-header-tab')\r\n         \r\n            tabs.forEach((tab, index) => {\r\n                if(tab === tabBtn) {\r\n                    tab.classList.add('active')\r\n                    tabContent[index].classList.remove('d-none')\r\n                } else {\r\n                   tab.classList.remove('active') \r\n                   tabContent[index].classList.add('d-none')\r\n                }\r\n            })\r\n        }\r\n    })\r\n\r\n  }\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n    console.log(deadline)\r\n    const timerHours = document.getElementById('timer-hours')\r\n    const timerMinutes = document.getElementById('timer-minutes')\r\n    const timerSeconds = document.getElementById('timer-seconds')\r\n\r\n    const twoDigits = (num) => {\r\n        return('0' + num).slice(-2)\r\n    }\r\n\r\n    const getTimeRemaining = () => {\r\n\r\n        const dateStop = new Date(deadline).getTime()\r\n        const dateNow = new Date().getTime()\r\n        const timeRemaining = (dateStop - dateNow) / 1000\r\n        console.log(timeRemaining)\r\n\r\n        const hours = twoDigits(Math.floor(timeRemaining / 60 / 60))\r\n        const minutes = twoDigits(Math.floor((timeRemaining / 60) % 60))\r\n        const seconds = twoDigits(Math.floor(timeRemaining % 60))\r\n\r\n        return {\r\n            timeRemaining,\r\n            hours,\r\n            minutes,\r\n            seconds\r\n        }\r\n\r\n    }\r\n    \r\n    const updateClock = () => {\r\n        const getTime = getTimeRemaining()\r\n        console.log(getTime)\r\n        \r\n        timerHours.textContent = getTime.hours;\r\n        timerMinutes.textContent = getTime.minutes;\r\n        timerSeconds.textContent = getTime.seconds;\r\n\r\n       \r\n\r\n        if (getTime.timeRemaining < 0) {\r\n            timerHours.textContent = '00';\r\n            timerMinutes.textContent = '00';\r\n            timerSeconds.textContent = '00';\r\n\r\n        }\r\n\r\n    }\r\n    \r\n        let idInerval = setInterval(() => {\r\n        updateClock()\r\n    }, 1000)\r\n    if ((new Date(deadline).getTime() - new Date().getTime()) < 0) {\r\n        clearInterval(idInerval);\r\n    }\r\n   \r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ }),

/***/ "./modules/validator.js":
/*!******************************!*\
  !*** ./modules/validator.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validator = () => {\r\n    const items = document.querySelectorAll('.calc-item')\r\n    let i;\r\n    for (let i = 1; i < items.length; ++i){\r\n        let calcItems = items[i]\r\n        calcItems.addEventListener('input', (e) => {\r\n            e.target.value = e.target.value.replace(/^\\D+/g, \"\")\r\n        })\r\n    }\r\nconst userName = document.querySelectorAll(('[name=\"user_name\"]'))\r\n    userName.forEach(element => {\r\n            element.addEventListener('input', (e) => {\r\n                e.target.value = e.target.value.replace(/[^\\а-яА-ЯёЁ\\sa]+$/g, \"\")\r\n            })\r\n        })\r\n\r\n        const userEmail = document.querySelectorAll('.form-email')\r\n        userEmail.forEach(el => {\r\n            el.addEventListener('input', (e) => {\r\n                e.target.value = e.target.value.replace(/([^A-Za-z0-9@\\-\\_\\.\\~\\*\\'])+$/g, \"\");\r\n                                \r\n            })\r\n        })\r\n\r\n        const userTelephone = document.querySelectorAll('input[type=\"tel\"]')\r\n            userTelephone.forEach(elem => {\r\n                elem.addEventListener('input', (e) => {\r\n                    e.target.value = e.target.value.replace(/[^0-9\\(\\)\\-]/g, \"\")\r\n            })\r\n        })\r\n        const placeHolder = document.querySelector('[placeholder=\"Ваше сообщение\"]')\r\n                placeHolder.addEventListener('input', (e) => {\r\n                    e.target.value = e.target.value.replace(/[^\\-а-яА-ЯЁё\\s]+$/g, \"\")\r\n\r\n        })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validator);\n\n//# sourceURL=webpack:///./modules/validator.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;