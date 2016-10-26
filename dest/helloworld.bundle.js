/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	ReactDOM.render(React.createElement(
		'h1',
		null,
		'hello world'
	), document.getElementById("root"));
	//root#2
	var names = ['jack', 'rose'];
	ReactDOM.render(React.createElement(
		'div',
		null,
		React.createElement(
			'div',
			null,
			'\u904D\u5386\u6570\u7EC4\u6570\u636E\uFF1A'
		),
		names.map(function (name) {
			return React.createElement(
				'div',
				null,
				'hello,',
				name,
				'!'
			);
		})
	), document.getElementById("root2"));
	//root#3
	var arr = [React.createElement(
		'div',
		null,
		'hello jack'
	), React.createElement(
		'div',
		null,
		'hello rose'
	)];
	ReactDOM.render(React.createElement(
		'div',
		null,
		React.createElement(
			'div',
			null,
			'\u76F4\u63A5\u5F15\u7528\u6570\u7EC4\u6570\u636E\uFF1A'
		),
		arr
	), document.getElementById("root3"));

/***/ }
/******/ ]);