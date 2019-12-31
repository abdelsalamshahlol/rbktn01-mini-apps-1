/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/app.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/app.jsx":
/*!************************!*\
  !*** ./client/app.jsx ***!
  \************************/
/*! no exports provided */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: E:\\\\Personal\\\\RBK\\\\Immersive\\\\miniApps\\\\rbktn01-mini-apps-1\\\\challenge_4\\\\client\\\\app.jsx: JSX attributes must only be assigned a non-empty expression (59:43)\\n\\n  57 |         ],\\n  58 |         [\\n> 59 |           <Circle row={5} column={0} color={} key={`rc-50`} handlePushColumn={this.pushToColumn} />,\\n     |                                            ^\\n  60 |           <Circle row={5} column={1} color={} key={`rc-51`} handlePushColumn={this.pushToColumn} />,\\n  61 |           <Circle row={5} column={2} color={} key={`rc-52`} handlePushColumn={this.pushToColumn} />,\\n  62 |           <Circle row={5} column={3} color={} key={`rc-53`} handlePushColumn={this.pushToColumn} />,\\n    at Object.raise (E:\\\\Personal\\\\RBK\\\\Immersive\\\\miniApps\\\\rbktn01-mini-apps-1\\\\challenge_4\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7012:17)\\n    at Object.jsxParseAttributeValue (E:\\\\Personal\\\\RBK\\\\Immersive\\\\miniApps\\\\rbktn01-mini-apps-1\\\\challenge_4\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:3947:16)\\n    at Object.jsxParseAttribute (E:\\\\Personal\\\\RBK\\\\Immersive\\\\miniApps\\\\rbktn01-mini-apps-1\\\\challenge_4\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:3995:44)\\n    at Object.jsxParseOpeningElementAfterName (E:\\\\Personal\\\\RBK\\\\Immersive\\\\miniApps\\\\rbktn01-mini-apps-1\\\\challenge_4\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:4015:28)\\n    at Object.jsxParseOpeningElementAt (E:\\\\Personal\\\\RBK\\\\Immersive\\\\miniApps\\\\rbktn01-mini-apps-1\\\\challenge_4\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:4008:17)\\n    at Object.jsxParseElementAt (E:\\\\Personal\\\\RBK\\\\Immersive\\\\miniApps\\\\rbktn01-mini-apps-1\\\\challenge_4\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:4040:33)\\n    at Object.jsxParseElement (E:\\\\Personal\\\\RBK\\\\Immersive\\\\miniApps\\\\rbktn01-mini-apps-1\\\\challenge_4\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:4114:17)\\n    at Object.parseExprAtom (E:\\\\Personal\\\\RBK\\\\Immersive\\\\miniApps\\\\rbktn01-mini-apps-1\\\\challenge_4\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:4121:19)\\n    at Object.parseExprSubscripts (E:\\\\Personal\\\\RBK\\\\Immersive\\\\miniApps\\\\rbktn01-mini-apps-1\\\\challenge_4\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9237:23)\\n    at Object.parseMaybeUnary (E:\\\\Personal\\\\RBK\\\\Immersive\\\\miniApps\\\\rbktn01-mini-apps-1\\\\challenge_4\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9217:21)\\n    at Object.parseExprOps (E:\\\\Personal\\\\RBK\\\\Immersive\\\\miniApps\\\\rbktn01-mini-apps-1\\\\challenge_4\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9083:23)\\n    at Object.parseMaybeConditional (E:\\\\Personal\\\\RBK\\\\Immersive\\\\miniApps\\\\rbktn01-mini-apps-1\\\\challenge_4\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9056:23)\\n    at Object.parseMaybeAssign (E:\\\\Personal\\\\RBK\\\\Immersive\\\\miniApps\\\\rbktn01-mini-apps-1\\\\challenge_4\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9015:21)\\n    at Object.parseExprListItem (E:\\\\Personal\\\\RBK\\\\Immersive\\\\miniApps\\\\rbktn01-mini-apps-1\\\\challenge_4\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10331:18)\\n    at Object.parseExprList (E:\\\\Personal\\\\RBK\\\\Immersive\\\\miniApps\\\\rbktn01-mini-apps-1\\\\challenge_4\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10305:22)\\n    at Object.parseExprAtom (E:\\\\Personal\\\\RBK\\\\Immersive\\\\miniApps\\\\rbktn01-mini-apps-1\\\\challenge_4\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9590:32)\\n    at Object.parseExprAtom (E:\\\\Personal\\\\RBK\\\\Immersive\\\\miniApps\\\\rbktn01-mini-apps-1\\\\challenge_4\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:4126:20)\\n    at Object.parseExprSubscripts (E:\\\\Personal\\\\RBK\\\\Immersive\\\\miniApps\\\\rbktn01-mini-apps-1\\\\challenge_4\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9237:23)\\n    at Object.parseMaybeUnary (E:\\\\Personal\\\\RBK\\\\Immersive\\\\miniApps\\\\rbktn01-mini-apps-1\\\\challenge_4\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9217:21)\\n    at Object.parseExprOps (E:\\\\Personal\\\\RBK\\\\Immersive\\\\miniApps\\\\rbktn01-mini-apps-1\\\\challenge_4\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9083:23)\\n    at Object.parseMaybeConditional (E:\\\\Personal\\\\RBK\\\\Immersive\\\\miniApps\\\\rbktn01-mini-apps-1\\\\challenge_4\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9056:23)\\n    at Object.parseMaybeAssign (E:\\\\Personal\\\\RBK\\\\Immersive\\\\miniApps\\\\rbktn01-mini-apps-1\\\\challenge_4\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9015:21)\\n    at Object.parseExprListItem (E:\\\\Personal\\\\RBK\\\\Immersive\\\\miniApps\\\\rbktn01-mini-apps-1\\\\challenge_4\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10331:18)\\n    at Object.parseExprList (E:\\\\Personal\\\\RBK\\\\Immersive\\\\miniApps\\\\rbktn01-mini-apps-1\\\\challenge_4\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10305:22)\\n    at Object.parseExprAtom (E:\\\\Personal\\\\RBK\\\\Immersive\\\\miniApps\\\\rbktn01-mini-apps-1\\\\challenge_4\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9590:32)\\n    at Object.parseExprAtom (E:\\\\Personal\\\\RBK\\\\Immersive\\\\miniApps\\\\rbktn01-mini-apps-1\\\\challenge_4\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:4126:20)\\n    at Object.parseExprSubscripts (E:\\\\Personal\\\\RBK\\\\Immersive\\\\miniApps\\\\rbktn01-mini-apps-1\\\\challenge_4\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9237:23)\\n    at Object.parseMaybeUnary (E:\\\\Personal\\\\RBK\\\\Immersive\\\\miniApps\\\\rbktn01-mini-apps-1\\\\challenge_4\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9217:21)\\n    at Object.parseExprOps (E:\\\\Personal\\\\RBK\\\\Immersive\\\\miniApps\\\\rbktn01-mini-apps-1\\\\challenge_4\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9083:23)\\n    at Object.parseMaybeConditional (E:\\\\Personal\\\\RBK\\\\Immersive\\\\miniApps\\\\rbktn01-mini-apps-1\\\\challenge_4\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9056:23)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvYXBwLmpzeC5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/app.jsx\n");

/***/ })

/******/ });