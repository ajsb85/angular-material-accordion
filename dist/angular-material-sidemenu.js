/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _mdSidemenu = __webpack_require__(1);
	
	var _mdSidemenu2 = _interopRequireDefault(_mdSidemenu);
	
	var _mdSidemenuGroup = __webpack_require__(4);
	
	var _mdSidemenuGroup2 = _interopRequireDefault(_mdSidemenuGroup);
	
	var _mdSidemenuContent = __webpack_require__(6);
	
	var _mdSidemenuContent2 = _interopRequireDefault(_mdSidemenuContent);
	
	var _mdSidemenuButton = __webpack_require__(9);
	
	var _mdSidemenuButton2 = _interopRequireDefault(_mdSidemenuButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(function (angular) {
	
	  angular.module('ngMaterialSidemenu', ['ngMaterial']).directive(_mdSidemenu2.default.name, _mdSidemenu2.default.directive).directive(_mdSidemenuGroup2.default.name, _mdSidemenuGroup2.default.directive).directive(_mdSidemenuContent2.default.name, _mdSidemenuContent2.default.directive).directive(_mdSidemenuButton2.default.name, _mdSidemenuButton2.default.directive);
	})(angular);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _template = __webpack_require__(2);
	
	var _template2 = _interopRequireDefault(_template);
	
	var _link = __webpack_require__(3);
	
	var _link2 = _interopRequireDefault(_link);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var directive = function directive() {
	
	  return {
	    restrict: 'E',
	    scope: {
	      locked: '@?mdLocked'
	    },
	    replace: true,
	    transclude: true,
	    template: _template2.default,
	    link: _link2.default
	  };
	};
	
	exports.default = {
	  name: 'mdSidemenu',
	  directive: directive
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function ($element, $attributes) {
	
	  var locked = $attributes.locked && 'md-sidemenu-locked';
	
	  return '<div class="md-sidemenu ' + locked + '" ng-transclude></div>';
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function ($scope, $element, $attributes) {
	
	  $scope.$watch(function () {
	    return $attributes.locked;
	  }, function (locked) {
	    if (locked) {
	      $element[0].classList.add('md-sidemenu-locked');
	    } else {
	      $element[0].classList.remove('md-sidemenu-locked');
	    }
	  });
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _template = __webpack_require__(5);
	
	var _template2 = _interopRequireDefault(_template);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var directive = function directive() {
	
	  return {
	    restrict: 'E',
	    replace: true,
	    transclude: true,
	    template: _template2.default
	  };
	};
	
	exports.default = {
	  name: 'mdSidemenuGroup',
	  directive: directive
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	
	  return '<div class="md-sidemenu-group" flex layout="column" layout-align="start start" ng-transclude></div>';
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _controller = __webpack_require__(7);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _template = __webpack_require__(8);
	
	var _template2 = _interopRequireDefault(_template);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var directive = function directive() {
	
	  return {
	    restrict: 'E',
	    scope: {
	      heading: '@mdHeading',
	      icon: '@?mdIcon',
	      svgIcon: '@?mdSvgIcon',
	      arrow: '@?mdArrow'
	    },
	    replace: true,
	    transclude: true,
	    template: _template2.default,
	    controller: _controller2.default,
	    controllerAs: '$mdSidemenuContent',
	    bindToController: true
	  };
	};
	
	exports.default = {
	  name: 'mdSidemenuContent',
	  directive: directive
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	
	  this.visible = false;
	
	  this.changeState = function () {
	    this.visible = !this.visible;
	  };
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	
	  return "\n    <div class=\"md-sidemenu-content\" layout=\"column\">\n      <md-button class=\"md-sidemenu-toggle\" ng-if=\"$mdSidemenuContent.heading\" ng-click=\"$mdSidemenuContent.changeState();\" ng-class=\"{ 'md-active': $mdSidemenuContent.visible }\">\n        <div layout=\"row\">\n          <md-icon ng-if=\"$mdSidemenuContent.svgIcon\" md-svg-icon=\"$mdSidemenuContent.svgIcon\"></md-icon>\n          <md-icon ng-if=\"$mdSidemenuContent.icon\">{{ $mdSidemenuContent.icon }}</md-icon>\n          <span flex>{{ $mdSidemenuContent.heading }}</span>\n          <md-icon ng-if=\"$mdSidemenuContent.arrow\">keyboard_arrow_down</md-icon>\n        </div>\n      </md-button>\n\n      <div class=\"md-sidemenu-wrapper\" md-sidemenu-disable-animate ng-class=\"{ 'md-active': $mdSidemenuContent.visible, 'md-sidemenu-wrapper-icons':  $mdSidemenuContent.icon }\" layout=\"column\" ng-transclude></div>\n    </div>\n  ";
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _controller = __webpack_require__(10);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _template = __webpack_require__(11);
	
	var _template2 = _interopRequireDefault(_template);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var directive = function directive() {
	
	  return {
	    restrict: 'E',
	    scope: {
	      uiSref: '@?',
	      uiSrefActive: '@?',
	      href: '@?',
	      target: '@?'
	    },
	    transclude: true,
	    template: _template2.default,
	    controller: _controller2.default,
	    controllerAs: '$mdSidemenuButton',
	    bindToController: true
	  };
	};
	
	exports.default = {
	  name: 'mdSidemenuButton',
	  directive: directive
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {};

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	
	  return "\n    <md-button\n      class=\"md-sidemenu-button\"\n      layout=\"column\"\n      ng-attr-href=\"{{ $mdSidemenuButton.href }}\"\n      ng-attr-ui-sref=\"{{ $mdSidemenuButton.uiSref }}\"\n      ng-attr-ui-sref-active=\"{{ $mdSidemenuButton.uiSrefActive }}\"\n      ng-attr-target=\"{{ $mdSidemenuButton.target }}\">\n      <div layout=\"row\" layout-fill layout-align=\"start center\" ng-transclude></div>\n    </md-button>\n  ";
	};

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzUxYzhlYjFhNTJjYTRhOWY2YjkiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uanM/MzQ3OSIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21kU2lkZW1lbnUvaW5kZXguanM/NGM3MSIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51L3RlbXBsYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21kU2lkZW1lbnUvdGVtcGxhdGUuanM/NWNjNiIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWRTaWRlbWVudS9saW5rLmpzPzRmMzYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWRTaWRlbWVudUdyb3VwL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21kU2lkZW1lbnVHcm91cC9pbmRleC5qcz9kODc0Iiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21kU2lkZW1lbnVHcm91cC90ZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51R3JvdXAvdGVtcGxhdGUuanM/YzJjOSIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51Q29udGVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51Q29udGVudC9pbmRleC5qcz8wZmIwIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21kU2lkZW1lbnVDb250ZW50L2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWRTaWRlbWVudUNvbnRlbnQvY29udHJvbGxlci5qcz9hYmE0Iiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21kU2lkZW1lbnVDb250ZW50L3RlbXBsYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21kU2lkZW1lbnVDb250ZW50L3RlbXBsYXRlLmpzPzI4N2IiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWRTaWRlbWVudUJ1dHRvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51QnV0dG9uL2luZGV4LmpzPzI5MjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWRTaWRlbWVudUJ1dHRvbi9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21kU2lkZW1lbnVCdXR0b24vY29udHJvbGxlci5qcz8wODMzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21kU2lkZW1lbnVCdXR0b24vdGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWRTaWRlbWVudUJ1dHRvbi90ZW1wbGF0ZS5qcz8wZmFlIl0sIm5hbWVzIjpbImFuZ3VsYXIiLCJtb2R1bGUiLCJkaXJlY3RpdmUiLCJuYW1lIiwicmVzdHJpY3QiLCJzY29wZSIsImxvY2tlZCIsInJlcGxhY2UiLCJ0cmFuc2NsdWRlIiwidGVtcGxhdGUiLCJsaW5rIiwiJGVsZW1lbnQiLCIkYXR0cmlidXRlcyIsIiRzY29wZSIsIiR3YXRjaCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImhlYWRpbmciLCJpY29uIiwic3ZnSWNvbiIsImFycm93IiwiY29udHJvbGxlciIsImNvbnRyb2xsZXJBcyIsImJpbmRUb0NvbnRyb2xsZXIiLCJ2aXNpYmxlIiwiY2hhbmdlU3RhdGUiLCJ1aVNyZWYiLCJ1aVNyZWZBY3RpdmUiLCJocmVmIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFF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QUMsY0FBYztLQUNkQyxrQkFBa0I7Ozs7QURpQnRCLFNBQVEsVUNaTztHQUNickIsTUFBTTtHQUNORDs7Ozs7OztBQ3pCRjs7QUFFQSxRQUFPLGVBQWUsU0FBUyxjQUFjO0dBQzNDLE9BQU87OztBQUdULFNBQVEsVUNOTyxZQUFXOztHQUV4QixLQUFLdUIsVUFBVTs7R0FFZixLQUFLQyxjQUFjLFlBQVc7S0FDNUIsS0FBS0QsVUFBVSxDQUFDLEtBQUtBOzs7Ozs7OztBQ0x6Qjs7QUFFQSxRQUFPLGVBQWUsU0FBUyxjQUFjO0dBQzNDLE9BQU87OztBQUdULFNBQVEsVUNOTyxZQUFXOztHQUV4Qjs7Ozs7OztBQ0ZGOztBQUVBLFFBQU8sZUFBZSxTQUFTLGNBQWM7R0FDM0MsT0FBTzs7O0FDSFQ7O0FEUUEsS0FBSSxlQUFlLHVCQUF1Qjs7QUNQMUM7O0FEV0EsS0FBSSxhQUFhLHVCQUF1Qjs7QUFFeEMsVUFBUyx1QkFBdUIsS0FBSyxFQUFFLE9BQU8sT0FBTyxJQUFJLGFBQWEsTUFBTSxFQUFFLFNBQVM7O0FDWHZGLEtBQUl2QixZQUFZLFNBQVpBLFlBQWtCOztHQUVwQixPQUFPO0tBQ0xFLFVBQVU7S0FDVkMsT0FBTztPQUNMc0IsUUFBUTtPQUNSQyxjQUFjO09BQ2RDLE1BQU07T0FDTkMsUUFBUTs7S0FFVnRCLFlBQVk7S0FDWkM7S0FDQWE7S0FDQUMsY0FBYztLQUNkQyxrQkFBa0I7Ozs7QURpQnRCLFNBQVEsVUNaTztHQUNickIsTUFBTTtHQUNORDs7Ozs7OztBQ3hCRjs7QUFFQSxRQUFPLGVBQWUsU0FBUyxjQUFjO0dBQzNDLE9BQU87OztBQUdULFNBQVEsVUNOTyxZQUFXLEc7Ozs7OztBQ0ExQjs7QUFFQSxRQUFPLGVBQWUsU0FBUyxjQUFjO0dBQzNDLE9BQU87OztBQUdULFNBQVEsVUNOTyxZQUFXOztHQUV4QiIsImZpbGUiOiJhbmd1bGFyLW1hdGVyaWFsLXNpZGVtZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA3NTFjOGViMWE1MmNhNGE5ZjZiOVxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9tZFNpZGVtZW51ID0gcmVxdWlyZSgnLi9zY3JpcHRzL21kU2lkZW1lbnUnKTtcblxudmFyIF9tZFNpZGVtZW51MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21kU2lkZW1lbnUpO1xuXG52YXIgX21kU2lkZW1lbnVHcm91cCA9IHJlcXVpcmUoJy4vc2NyaXB0cy9tZFNpZGVtZW51R3JvdXAnKTtcblxudmFyIF9tZFNpZGVtZW51R3JvdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWRTaWRlbWVudUdyb3VwKTtcblxudmFyIF9tZFNpZGVtZW51Q29udGVudCA9IHJlcXVpcmUoJy4vc2NyaXB0cy9tZFNpZGVtZW51Q29udGVudCcpO1xuXG52YXIgX21kU2lkZW1lbnVDb250ZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21kU2lkZW1lbnVDb250ZW50KTtcblxudmFyIF9tZFNpZGVtZW51QnV0dG9uID0gcmVxdWlyZSgnLi9zY3JpcHRzL21kU2lkZW1lbnVCdXR0b24nKTtcblxudmFyIF9tZFNpZGVtZW51QnV0dG9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21kU2lkZW1lbnVCdXR0b24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4oZnVuY3Rpb24gKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyLm1vZHVsZSgnbmdNYXRlcmlhbFNpZGVtZW51JywgWyduZ01hdGVyaWFsJ10pLmRpcmVjdGl2ZShfbWRTaWRlbWVudTIuZGVmYXVsdC5uYW1lLCBfbWRTaWRlbWVudTIuZGVmYXVsdC5kaXJlY3RpdmUpLmRpcmVjdGl2ZShfbWRTaWRlbWVudUdyb3VwMi5kZWZhdWx0Lm5hbWUsIF9tZFNpZGVtZW51R3JvdXAyLmRlZmF1bHQuZGlyZWN0aXZlKS5kaXJlY3RpdmUoX21kU2lkZW1lbnVDb250ZW50Mi5kZWZhdWx0Lm5hbWUsIF9tZFNpZGVtZW51Q29udGVudDIuZGVmYXVsdC5kaXJlY3RpdmUpLmRpcmVjdGl2ZShfbWRTaWRlbWVudUJ1dHRvbjIuZGVmYXVsdC5uYW1lLCBfbWRTaWRlbWVudUJ1dHRvbjIuZGVmYXVsdC5kaXJlY3RpdmUpO1xufSkoYW5ndWxhcik7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbWFpbi5qc1xuICoqLyIsImltcG9ydCBtZFNpZGVtZW51IGZyb20gJy4vc2NyaXB0cy9tZFNpZGVtZW51JztcbmltcG9ydCBtZFNpZGVtZW51R3JvdXAgZnJvbSAnLi9zY3JpcHRzL21kU2lkZW1lbnVHcm91cCc7XG5pbXBvcnQgbWRTaWRlbWVudUNvbnRlbnQgZnJvbSAnLi9zY3JpcHRzL21kU2lkZW1lbnVDb250ZW50JztcbmltcG9ydCBtZFNpZGVtZW51QnV0dG9uIGZyb20gJy4vc2NyaXB0cy9tZFNpZGVtZW51QnV0dG9uJztcblxuKChhbmd1bGFyKSA9PiB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ25nTWF0ZXJpYWxTaWRlbWVudScsIFtcbiAgICAgICduZ01hdGVyaWFsJ1xuICAgIF0pXG4gICAgLmRpcmVjdGl2ZShtZFNpZGVtZW51Lm5hbWUsIG1kU2lkZW1lbnUuZGlyZWN0aXZlKVxuICAgIC5kaXJlY3RpdmUobWRTaWRlbWVudUdyb3VwLm5hbWUsIG1kU2lkZW1lbnVHcm91cC5kaXJlY3RpdmUpXG4gICAgLmRpcmVjdGl2ZShtZFNpZGVtZW51Q29udGVudC5uYW1lLCBtZFNpZGVtZW51Q29udGVudC5kaXJlY3RpdmUpXG4gICAgLmRpcmVjdGl2ZShtZFNpZGVtZW51QnV0dG9uLm5hbWUsIG1kU2lkZW1lbnVCdXR0b24uZGlyZWN0aXZlKTtcblxufSkoYW5ndWxhcik7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9tYWluLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3RlbXBsYXRlID0gcmVxdWlyZSgnLi90ZW1wbGF0ZScpO1xuXG52YXIgX3RlbXBsYXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RlbXBsYXRlKTtcblxudmFyIF9saW5rID0gcmVxdWlyZSgnLi9saW5rJyk7XG5cbnZhciBfbGluazIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saW5rKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGRpcmVjdGl2ZSA9IGZ1bmN0aW9uIGRpcmVjdGl2ZSgpIHtcblxuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgc2NvcGU6IHtcbiAgICAgIGxvY2tlZDogJ0A/bWRMb2NrZWQnXG4gICAgfSxcbiAgICByZXBsYWNlOiB0cnVlLFxuICAgIHRyYW5zY2x1ZGU6IHRydWUsXG4gICAgdGVtcGxhdGU6IF90ZW1wbGF0ZTIuZGVmYXVsdCxcbiAgICBsaW5rOiBfbGluazIuZGVmYXVsdFxuICB9O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBuYW1lOiAnbWRTaWRlbWVudScsXG4gIGRpcmVjdGl2ZTogZGlyZWN0aXZlXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NjcmlwdHMvbWRTaWRlbWVudS9pbmRleC5qc1xuICoqLyIsImltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3RlbXBsYXRlJztcbmltcG9ydCBsaW5rIGZyb20gJy4vbGluayc7XG5cbmxldCBkaXJlY3RpdmUgPSAoKSA9PiB7XG5cbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHNjb3BlOiB7XG4gICAgICBsb2NrZWQ6ICdAP21kTG9ja2VkJ1xuICAgIH0sXG4gICAgcmVwbGFjZTogdHJ1ZSxcbiAgICB0cmFuc2NsdWRlOiB0cnVlLFxuICAgIHRlbXBsYXRlLFxuICAgIGxpbmtcbiAgfTtcblxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRTaWRlbWVudScsXG4gIGRpcmVjdGl2ZVxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NjcmlwdHMvbWRTaWRlbWVudS9pbmRleC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCRlbGVtZW50LCAkYXR0cmlidXRlcykge1xuXG4gIHZhciBsb2NrZWQgPSAkYXR0cmlidXRlcy5sb2NrZWQgJiYgJ21kLXNpZGVtZW51LWxvY2tlZCc7XG5cbiAgcmV0dXJuICc8ZGl2IGNsYXNzPVwibWQtc2lkZW1lbnUgJyArIGxvY2tlZCArICdcIiBuZy10cmFuc2NsdWRlPjwvZGl2Pic7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NjcmlwdHMvbWRTaWRlbWVudS90ZW1wbGF0ZS5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCRlbGVtZW50LCAkYXR0cmlidXRlcykge1xuXG4gIGxldCBsb2NrZWQgPSAkYXR0cmlidXRlcy5sb2NrZWQgJiYgJ21kLXNpZGVtZW51LWxvY2tlZCc7XG5cbiAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwibWQtc2lkZW1lbnUgJHsgbG9ja2VkIH1cIiBuZy10cmFuc2NsdWRlPjwvZGl2PmA7XG5cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NjcmlwdHMvbWRTaWRlbWVudS90ZW1wbGF0ZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCRzY29wZSwgJGVsZW1lbnQsICRhdHRyaWJ1dGVzKSB7XG5cbiAgJHNjb3BlLiR3YXRjaChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICRhdHRyaWJ1dGVzLmxvY2tlZDtcbiAgfSwgZnVuY3Rpb24gKGxvY2tlZCkge1xuICAgIGlmIChsb2NrZWQpIHtcbiAgICAgICRlbGVtZW50WzBdLmNsYXNzTGlzdC5hZGQoJ21kLXNpZGVtZW51LWxvY2tlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkZWxlbWVudFswXS5jbGFzc0xpc3QucmVtb3ZlKCdtZC1zaWRlbWVudS1sb2NrZWQnKTtcbiAgICB9XG4gIH0pO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zY3JpcHRzL21kU2lkZW1lbnUvbGluay5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCRzY29wZSwgJGVsZW1lbnQsICRhdHRyaWJ1dGVzKSB7XG5cbiAgJHNjb3BlLiR3YXRjaChmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gJGF0dHJpYnV0ZXMubG9ja2VkO1xuICB9LCBmdW5jdGlvbihsb2NrZWQpIHtcbiAgICBpZiAobG9ja2VkKSB7XG4gICAgICAkZWxlbWVudFswXS5jbGFzc0xpc3QuYWRkKCdtZC1zaWRlbWVudS1sb2NrZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJGVsZW1lbnRbMF0uY2xhc3NMaXN0LnJlbW92ZSgnbWQtc2lkZW1lbnUtbG9ja2VkJyk7XG4gICAgfVxuICB9KTtcblxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51L2xpbmsuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdGVtcGxhdGUgPSByZXF1aXJlKCcuL3RlbXBsYXRlJyk7XG5cbnZhciBfdGVtcGxhdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdGVtcGxhdGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgZGlyZWN0aXZlID0gZnVuY3Rpb24gZGlyZWN0aXZlKCkge1xuXG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICByZXBsYWNlOiB0cnVlLFxuICAgIHRyYW5zY2x1ZGU6IHRydWUsXG4gICAgdGVtcGxhdGU6IF90ZW1wbGF0ZTIuZGVmYXVsdFxuICB9O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBuYW1lOiAnbWRTaWRlbWVudUdyb3VwJyxcbiAgZGlyZWN0aXZlOiBkaXJlY3RpdmVcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51R3JvdXAvaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi90ZW1wbGF0ZSc7XG5cbmxldCBkaXJlY3RpdmUgPSAoKSA9PiB7XG5cbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHJlcGxhY2U6IHRydWUsXG4gICAgdHJhbnNjbHVkZTogdHJ1ZSxcbiAgICB0ZW1wbGF0ZVxuICB9O1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZFNpZGVtZW51R3JvdXAnLFxuICBkaXJlY3RpdmVcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zY3JpcHRzL21kU2lkZW1lbnVHcm91cC9pbmRleC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuXG4gIHJldHVybiAnPGRpdiBjbGFzcz1cIm1kLXNpZGVtZW51LWdyb3VwXCIgZmxleCBsYXlvdXQ9XCJjb2x1bW5cIiBsYXlvdXQtYWxpZ249XCJzdGFydCBzdGFydFwiIG5nLXRyYW5zY2x1ZGU+PC9kaXY+Jztcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51R3JvdXAvdGVtcGxhdGUuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcblxuICByZXR1cm4gJzxkaXYgY2xhc3M9XCJtZC1zaWRlbWVudS1ncm91cFwiIGZsZXggbGF5b3V0PVwiY29sdW1uXCIgbGF5b3V0LWFsaWduPVwic3RhcnQgc3RhcnRcIiBuZy10cmFuc2NsdWRlPjwvZGl2Pic7XG5cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NjcmlwdHMvbWRTaWRlbWVudUdyb3VwL3RlbXBsYXRlLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NvbnRyb2xsZXIgPSByZXF1aXJlKCcuL2NvbnRyb2xsZXInKTtcblxudmFyIF9jb250cm9sbGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbnRyb2xsZXIpO1xuXG52YXIgX3RlbXBsYXRlID0gcmVxdWlyZSgnLi90ZW1wbGF0ZScpO1xuXG52YXIgX3RlbXBsYXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RlbXBsYXRlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGRpcmVjdGl2ZSA9IGZ1bmN0aW9uIGRpcmVjdGl2ZSgpIHtcblxuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgc2NvcGU6IHtcbiAgICAgIGhlYWRpbmc6ICdAbWRIZWFkaW5nJyxcbiAgICAgIGljb246ICdAP21kSWNvbicsXG4gICAgICBzdmdJY29uOiAnQD9tZFN2Z0ljb24nLFxuICAgICAgYXJyb3c6ICdAP21kQXJyb3cnXG4gICAgfSxcbiAgICByZXBsYWNlOiB0cnVlLFxuICAgIHRyYW5zY2x1ZGU6IHRydWUsXG4gICAgdGVtcGxhdGU6IF90ZW1wbGF0ZTIuZGVmYXVsdCxcbiAgICBjb250cm9sbGVyOiBfY29udHJvbGxlcjIuZGVmYXVsdCxcbiAgICBjb250cm9sbGVyQXM6ICckbWRTaWRlbWVudUNvbnRlbnQnLFxuICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWVcbiAgfTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgbmFtZTogJ21kU2lkZW1lbnVDb250ZW50JyxcbiAgZGlyZWN0aXZlOiBkaXJlY3RpdmVcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51Q29udGVudC9pbmRleC5qc1xuICoqLyIsImltcG9ydCBjb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcic7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi90ZW1wbGF0ZSc7XG5cbmxldCBkaXJlY3RpdmUgPSAoKSA9PiB7XG5cbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHNjb3BlOiB7XG4gICAgICBoZWFkaW5nOiAnQG1kSGVhZGluZycsXG4gICAgICBpY29uOiAnQD9tZEljb24nLFxuICAgICAgc3ZnSWNvbjogJ0A/bWRTdmdJY29uJyxcbiAgICAgIGFycm93OiAnQD9tZEFycm93J1xuICAgIH0sXG4gICAgcmVwbGFjZTogdHJ1ZSxcbiAgICB0cmFuc2NsdWRlOiB0cnVlLFxuICAgIHRlbXBsYXRlLFxuICAgIGNvbnRyb2xsZXIsXG4gICAgY29udHJvbGxlckFzOiAnJG1kU2lkZW1lbnVDb250ZW50JyxcbiAgICBiaW5kVG9Db250cm9sbGVyOiB0cnVlXG4gIH07XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ21kU2lkZW1lbnVDb250ZW50JyxcbiAgZGlyZWN0aXZlXG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51Q29udGVudC9pbmRleC5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG5cbiAgdGhpcy52aXNpYmxlID0gZmFsc2U7XG5cbiAgdGhpcy5jaGFuZ2VTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnZpc2libGUgPSAhdGhpcy52aXNpYmxlO1xuICB9O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zY3JpcHRzL21kU2lkZW1lbnVDb250ZW50L2NvbnRyb2xsZXIuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcblxuICB0aGlzLnZpc2libGUgPSBmYWxzZTtcblxuICB0aGlzLmNoYW5nZVN0YXRlID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy52aXNpYmxlID0gIXRoaXMudmlzaWJsZTtcbiAgfTtcblxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51Q29udGVudC9jb250cm9sbGVyLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcblxuICByZXR1cm4gXCJcXG4gICAgPGRpdiBjbGFzcz1cXFwibWQtc2lkZW1lbnUtY29udGVudFxcXCIgbGF5b3V0PVxcXCJjb2x1bW5cXFwiPlxcbiAgICAgIDxtZC1idXR0b24gY2xhc3M9XFxcIm1kLXNpZGVtZW51LXRvZ2dsZVxcXCIgbmctaWY9XFxcIiRtZFNpZGVtZW51Q29udGVudC5oZWFkaW5nXFxcIiBuZy1jbGljaz1cXFwiJG1kU2lkZW1lbnVDb250ZW50LmNoYW5nZVN0YXRlKCk7XFxcIiBuZy1jbGFzcz1cXFwieyAnbWQtYWN0aXZlJzogJG1kU2lkZW1lbnVDb250ZW50LnZpc2libGUgfVxcXCI+XFxuICAgICAgICA8ZGl2IGxheW91dD1cXFwicm93XFxcIj5cXG4gICAgICAgICAgPG1kLWljb24gbmctaWY9XFxcIiRtZFNpZGVtZW51Q29udGVudC5zdmdJY29uXFxcIiBtZC1zdmctaWNvbj1cXFwiJG1kU2lkZW1lbnVDb250ZW50LnN2Z0ljb25cXFwiPjwvbWQtaWNvbj5cXG4gICAgICAgICAgPG1kLWljb24gbmctaWY9XFxcIiRtZFNpZGVtZW51Q29udGVudC5pY29uXFxcIj57eyAkbWRTaWRlbWVudUNvbnRlbnQuaWNvbiB9fTwvbWQtaWNvbj5cXG4gICAgICAgICAgPHNwYW4gZmxleD57eyAkbWRTaWRlbWVudUNvbnRlbnQuaGVhZGluZyB9fTwvc3Bhbj5cXG4gICAgICAgICAgPG1kLWljb24gbmctaWY9XFxcIiRtZFNpZGVtZW51Q29udGVudC5hcnJvd1xcXCI+a2V5Ym9hcmRfYXJyb3dfZG93bjwvbWQtaWNvbj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvbWQtYnV0dG9uPlxcblxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIm1kLXNpZGVtZW51LXdyYXBwZXJcXFwiIG1kLXNpZGVtZW51LWRpc2FibGUtYW5pbWF0ZSBuZy1jbGFzcz1cXFwieyAnbWQtYWN0aXZlJzogJG1kU2lkZW1lbnVDb250ZW50LnZpc2libGUsICdtZC1zaWRlbWVudS13cmFwcGVyLWljb25zJzogICRtZFNpZGVtZW51Q29udGVudC5pY29uIH1cXFwiIGxheW91dD1cXFwiY29sdW1uXFxcIiBuZy10cmFuc2NsdWRlPjwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIFwiO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zY3JpcHRzL21kU2lkZW1lbnVDb250ZW50L3RlbXBsYXRlLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG5cbiAgcmV0dXJuIGBcbiAgICA8ZGl2IGNsYXNzPVwibWQtc2lkZW1lbnUtY29udGVudFwiIGxheW91dD1cImNvbHVtblwiPlxuICAgICAgPG1kLWJ1dHRvbiBjbGFzcz1cIm1kLXNpZGVtZW51LXRvZ2dsZVwiIG5nLWlmPVwiJG1kU2lkZW1lbnVDb250ZW50LmhlYWRpbmdcIiBuZy1jbGljaz1cIiRtZFNpZGVtZW51Q29udGVudC5jaGFuZ2VTdGF0ZSgpO1wiIG5nLWNsYXNzPVwieyAnbWQtYWN0aXZlJzogJG1kU2lkZW1lbnVDb250ZW50LnZpc2libGUgfVwiPlxuICAgICAgICA8ZGl2IGxheW91dD1cInJvd1wiPlxuICAgICAgICAgIDxtZC1pY29uIG5nLWlmPVwiJG1kU2lkZW1lbnVDb250ZW50LnN2Z0ljb25cIiBtZC1zdmctaWNvbj1cIiRtZFNpZGVtZW51Q29udGVudC5zdmdJY29uXCI+PC9tZC1pY29uPlxuICAgICAgICAgIDxtZC1pY29uIG5nLWlmPVwiJG1kU2lkZW1lbnVDb250ZW50Lmljb25cIj57eyAkbWRTaWRlbWVudUNvbnRlbnQuaWNvbiB9fTwvbWQtaWNvbj5cbiAgICAgICAgICA8c3BhbiBmbGV4Pnt7ICRtZFNpZGVtZW51Q29udGVudC5oZWFkaW5nIH19PC9zcGFuPlxuICAgICAgICAgIDxtZC1pY29uIG5nLWlmPVwiJG1kU2lkZW1lbnVDb250ZW50LmFycm93XCI+a2V5Ym9hcmRfYXJyb3dfZG93bjwvbWQtaWNvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21kLWJ1dHRvbj5cblxuICAgICAgPGRpdiBjbGFzcz1cIm1kLXNpZGVtZW51LXdyYXBwZXJcIiBtZC1zaWRlbWVudS1kaXNhYmxlLWFuaW1hdGUgbmctY2xhc3M9XCJ7ICdtZC1hY3RpdmUnOiAkbWRTaWRlbWVudUNvbnRlbnQudmlzaWJsZSwgJ21kLXNpZGVtZW51LXdyYXBwZXItaWNvbnMnOiAgJG1kU2lkZW1lbnVDb250ZW50Lmljb24gfVwiIGxheW91dD1cImNvbHVtblwiIG5nLXRyYW5zY2x1ZGU+PC9kaXY+XG4gICAgPC9kaXY+XG4gIGA7XG5cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NjcmlwdHMvbWRTaWRlbWVudUNvbnRlbnQvdGVtcGxhdGUuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY29udHJvbGxlciA9IHJlcXVpcmUoJy4vY29udHJvbGxlcicpO1xuXG52YXIgX2NvbnRyb2xsZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29udHJvbGxlcik7XG5cbnZhciBfdGVtcGxhdGUgPSByZXF1aXJlKCcuL3RlbXBsYXRlJyk7XG5cbnZhciBfdGVtcGxhdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdGVtcGxhdGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgZGlyZWN0aXZlID0gZnVuY3Rpb24gZGlyZWN0aXZlKCkge1xuXG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICBzY29wZToge1xuICAgICAgdWlTcmVmOiAnQD8nLFxuICAgICAgdWlTcmVmQWN0aXZlOiAnQD8nLFxuICAgICAgaHJlZjogJ0A/JyxcbiAgICAgIHRhcmdldDogJ0A/J1xuICAgIH0sXG4gICAgdHJhbnNjbHVkZTogdHJ1ZSxcbiAgICB0ZW1wbGF0ZTogX3RlbXBsYXRlMi5kZWZhdWx0LFxuICAgIGNvbnRyb2xsZXI6IF9jb250cm9sbGVyMi5kZWZhdWx0LFxuICAgIGNvbnRyb2xsZXJBczogJyRtZFNpZGVtZW51QnV0dG9uJyxcbiAgICBiaW5kVG9Db250cm9sbGVyOiB0cnVlXG4gIH07XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIG5hbWU6ICdtZFNpZGVtZW51QnV0dG9uJyxcbiAgZGlyZWN0aXZlOiBkaXJlY3RpdmVcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51QnV0dG9uL2luZGV4LmpzXG4gKiovIiwiaW1wb3J0IGNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVyJztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3RlbXBsYXRlJztcblxubGV0IGRpcmVjdGl2ZSA9ICgpID0+IHtcblxuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgc2NvcGU6IHtcbiAgICAgIHVpU3JlZjogJ0A/JyxcbiAgICAgIHVpU3JlZkFjdGl2ZTogJ0A/JyxcbiAgICAgIGhyZWY6ICdAPycsXG4gICAgICB0YXJnZXQ6ICdAPydcbiAgICB9LFxuICAgIHRyYW5zY2x1ZGU6IHRydWUsXG4gICAgdGVtcGxhdGUsXG4gICAgY29udHJvbGxlcixcbiAgICBjb250cm9sbGVyQXM6ICckbWRTaWRlbWVudUJ1dHRvbicsXG4gICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZVxuICB9O1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZFNpZGVtZW51QnV0dG9uJyxcbiAgZGlyZWN0aXZlXG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51QnV0dG9uL2luZGV4LmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHt9O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NjcmlwdHMvbWRTaWRlbWVudUJ1dHRvbi9jb250cm9sbGVyLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG5cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NjcmlwdHMvbWRTaWRlbWVudUJ1dHRvbi9jb250cm9sbGVyLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcblxuICByZXR1cm4gXCJcXG4gICAgPG1kLWJ1dHRvblxcbiAgICAgIGNsYXNzPVxcXCJtZC1zaWRlbWVudS1idXR0b25cXFwiXFxuICAgICAgbGF5b3V0PVxcXCJjb2x1bW5cXFwiXFxuICAgICAgbmctYXR0ci1ocmVmPVxcXCJ7eyAkbWRTaWRlbWVudUJ1dHRvbi5ocmVmIH19XFxcIlxcbiAgICAgIG5nLWF0dHItdWktc3JlZj1cXFwie3sgJG1kU2lkZW1lbnVCdXR0b24udWlTcmVmIH19XFxcIlxcbiAgICAgIG5nLWF0dHItdWktc3JlZi1hY3RpdmU9XFxcInt7ICRtZFNpZGVtZW51QnV0dG9uLnVpU3JlZkFjdGl2ZSB9fVxcXCJcXG4gICAgICBuZy1hdHRyLXRhcmdldD1cXFwie3sgJG1kU2lkZW1lbnVCdXR0b24udGFyZ2V0IH19XFxcIj5cXG4gICAgICA8ZGl2IGxheW91dD1cXFwicm93XFxcIiBsYXlvdXQtZmlsbCBsYXlvdXQtYWxpZ249XFxcInN0YXJ0IGNlbnRlclxcXCIgbmctdHJhbnNjbHVkZT48L2Rpdj5cXG4gICAgPC9tZC1idXR0b24+XFxuICBcIjtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51QnV0dG9uL3RlbXBsYXRlLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG5cbiAgcmV0dXJuIGBcbiAgICA8bWQtYnV0dG9uXG4gICAgICBjbGFzcz1cIm1kLXNpZGVtZW51LWJ1dHRvblwiXG4gICAgICBsYXlvdXQ9XCJjb2x1bW5cIlxuICAgICAgbmctYXR0ci1ocmVmPVwie3sgJG1kU2lkZW1lbnVCdXR0b24uaHJlZiB9fVwiXG4gICAgICBuZy1hdHRyLXVpLXNyZWY9XCJ7eyAkbWRTaWRlbWVudUJ1dHRvbi51aVNyZWYgfX1cIlxuICAgICAgbmctYXR0ci11aS1zcmVmLWFjdGl2ZT1cInt7ICRtZFNpZGVtZW51QnV0dG9uLnVpU3JlZkFjdGl2ZSB9fVwiXG4gICAgICBuZy1hdHRyLXRhcmdldD1cInt7ICRtZFNpZGVtZW51QnV0dG9uLnRhcmdldCB9fVwiPlxuICAgICAgPGRpdiBsYXlvdXQ9XCJyb3dcIiBsYXlvdXQtZmlsbCBsYXlvdXQtYWxpZ249XCJzdGFydCBjZW50ZXJcIiBuZy10cmFuc2NsdWRlPjwvZGl2PlxuICAgIDwvbWQtYnV0dG9uPlxuICBgO1xuXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zY3JpcHRzL21kU2lkZW1lbnVCdXR0b24vdGVtcGxhdGUuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9