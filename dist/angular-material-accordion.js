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
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _mdAccordion = __webpack_require__(1);
	
	var _mdAccordion2 = _interopRequireDefault(_mdAccordion);
	
	var _mdAccordionGroup = __webpack_require__(4);
	
	var _mdAccordionGroup2 = _interopRequireDefault(_mdAccordionGroup);
	
	var _mdAccordionContent = __webpack_require__(6);
	
	var _mdAccordionContent2 = _interopRequireDefault(_mdAccordionContent);
	
	var _mdAccordionButton = __webpack_require__(9);
	
	var _mdAccordionButton2 = _interopRequireDefault(_mdAccordionButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(function (angular) {
	
	  angular.module('ngMaterialAccordion', ['ngMaterial']).directive(_mdAccordion2.default.name, _mdAccordion2.default.directive).directive(_mdAccordionGroup2.default.name, _mdAccordionGroup2.default.directive).directive(_mdAccordionContent2.default.name, _mdAccordionContent2.default.directive).directive(_mdAccordionButton2.default.name, _mdAccordionButton2.default.directive);
	})(angular);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

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
	  name: 'mdAccordion',
	  directive: directive
	};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function ($element, $attributes) {
	
	  var locked = $attributes.locked && 'md-accordion-locked';
	
	  return '<div class="md-accordion ' + locked + '" ng-transclude></div>';
	};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function ($scope, $element, $attributes) {
	
	  $scope.$watch(function () {
	    return $attributes.locked;
	  }, function (locked) {
	    if (locked) {
	      $element[0].classList.add('md-accordion-locked');
	    } else {
	      $element[0].classList.remove('md-accordion-locked');
	    }
	  });
	};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

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
	  name: 'mdAccordionGroup',
	  directive: directive
	};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	
	  return '<div class="md-accordion-group" flex layout="column" layout-align="start start" ng-transclude></div>';
	};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

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
	      arrow: '@?mdArrow',
	      collapsed: '=?mdAccordionCollapsed'
	    },
	    replace: true,
	    transclude: true,
	    template: _template2.default,
	    controller: _controller2.default,
	    controllerAs: '$mdAccordionContent',
	    bindToController: true
	  };
	};
	
	exports.default = {
	  name: 'mdAccordionContent',
	  directive: directive
	};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	
	  this.collapsed = angular.isDefined(this.collapsed) ? this.collapsed : true;
	
	  this.changeState = function () {
	    this.collapsed = !this.collapsed;
	  };
	};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	
	  return "\n    <div class=\"md-accordion-content\" layout=\"column\">\n      <md-button class=\"md-accordion-toggle\" ng-if=\"$mdAccordionContent.heading\" ng-click=\"$mdAccordionContent.changeState();\" ng-class=\"{ 'md-active': !$mdAccordionContent.collapsed }\">\n        <div layout=\"row\">\n          <md-icon ng-if=\"$mdAccordionContent.svgIcon\" md-svg-icon=\"$mdAccordionContent.svgIcon\"></md-icon>\n          <md-icon ng-if=\"$mdAccordionContent.icon\">{{ $mdAccordionContent.icon }}</md-icon>\n          <span flex>{{ $mdAccordionContent.heading }}</span>\n          <i ng-if=\"$mdAccordionContent.arrow\" class=\"fa fa-chevron-down accordion-arrow\" aria-hidden=\"true\"></i>\n        </div>\n      </md-button>\n\n      <div class=\"md-accordion-wrapper\" md-accordion-disable-animate ng-class=\"{ 'md-active': !$mdAccordionContent.collapsed, 'md-accordion-wrapper-icons':  $mdAccordionContent.icon }\" layout=\"column\" ng-transclude></div>\n    </div>\n  ";
	};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

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
	      ngClick: '@?',
	      uiSref: '@?',
	      uiSrefActive: '@?',
	      href: '@?',
	      target: '@?'
	    },
	    transclude: true,
	    template: _template2.default,
	    controller: _controller2.default,
	    controllerAs: '$mdAccordionButton',
	    bindToController: true
	  };
	};
	
	exports.default = {
	  name: 'mdAccordionButton',
	  directive: directive
	};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	
	  return "\n    <md-button\n      class=\"md-accordion-button\"\n      layout=\"column\"\n      ng-attr-href=\"{{ $mdAccordionButton.href }}\"\n      ng-attr-target=\"{{ $mdAccordionButton.target }}\">\n      <div layout=\"row\" layout-fill layout-align=\"start center\" ng-transclude></div>\n    </md-button>\n  ";
	};

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgN2EwMWJiYTBmNmY1MWU0NDc0NjAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWRBY2NvcmRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWRBY2NvcmRpb24vdGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWRBY2NvcmRpb24vbGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tZEFjY29yZGlvbkdyb3VwL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21kQWNjb3JkaW9uR3JvdXAvdGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWRBY2NvcmRpb25Db250ZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21kQWNjb3JkaW9uQ29udGVudC9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21kQWNjb3JkaW9uQ29udGVudC90ZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tZEFjY29yZGlvbkJ1dHRvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tZEFjY29yZGlvbkJ1dHRvbi9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21kQWNjb3JkaW9uQnV0dG9uL3RlbXBsYXRlLmpzIl0sIm5hbWVzIjpbImFuZ3VsYXIiLCJtb2R1bGUiLCJkaXJlY3RpdmUiLCJuYW1lIiwicmVzdHJpY3QiLCJzY29wZSIsImxvY2tlZCIsInJlcGxhY2UiLCJ0cmFuc2NsdWRlIiwidGVtcGxhdGUiLCJsaW5rIiwiJGVsZW1lbnQiLCIkYXR0cmlidXRlcyIsIiRzY29wZSIsIiR3YXRjaCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImhlYWRpbmciLCJpY29uIiwic3ZnSWNvbiIsImFycm93IiwiY29sbGFwc2VkIiwiY29udHJvbGxlciIsImNvbnRyb2xsZXJBcyIsImJpbmRUb0NvbnRyb2xsZXIiLCJpc0RlZmluZWQiLCJjaGFuZ2VTdGF0ZSIsIm5nQ2xpY2siLCJ1aVNyZWYiLCJ1aVNyZWZBY3RpdmUiLCJocmVmIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQTs7QUFBQTs7QUFJQSxLQUFJLGdCQUFnQix1QkFBdUI7O0FBSDNDOztBQU9BLEtBQUkscUJBQXFCLHVCQUF1Qjs7QUFOaEQ7O0FBVUEsS0FBSSx1QkFBdUIsdUJBQXVCOztBQVRsRDs7QUFhQSxLQUFJLHNCQUFzQix1QkFBdUI7O0FBRWpELFVBQVMsdUJBQXVCLEtBQUssRUFBRSxPQUFPLE9BQU8sSUFBSSxhQUFhLE1BQU0sRUFBRSxTQUFTOztBQWJ2RixFQUFDLFVBQUNBLFNBQVk7O0dBRVpBLFFBQ0dDLE9BQU8sdUJBQXVCLENBQzdCLGVBRURDLFVBQVUsc0JBQVlDLE1BQU0sc0JBQVlELFdBQ3hDQSxVQUFVLDJCQUFpQkMsTUFBTSwyQkFBaUJELFdBQ2xEQSxVQUFVLDZCQUFtQkMsTUFBTSw2QkFBbUJELFdBQ3REQSxVQUFVLDRCQUFrQkMsTUFBTSw0QkFBa0JEO0lBRXRERixTOzs7Ozs7QUNoQkg7O0FBRUEsUUFBTyxlQUFlLFNBQVMsY0FBYztHQUMzQyxPQUFPOzs7QUFIVDs7QUFRQSxLQUFJLGFBQWEsdUJBQXVCOztBQVB4Qzs7QUFXQSxLQUFJLFNBQVMsdUJBQXVCOztBQUVwQyxVQUFTLHVCQUF1QixLQUFLLEVBQUUsT0FBTyxPQUFPLElBQUksYUFBYSxNQUFNLEVBQUUsU0FBUzs7QUFY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O0tBQ0FjO0tBQ0FDLGNBQWM7S0FDZEMsa0JBQWtCOzs7O0FBaUJ0QixTQUFRLFVBWk87R0FDYnRCLE1BQU07R0FDTkQ7Ozs7Ozs7QUN6QkY7O0FBRUEsUUFBTyxlQUFlLFNBQVMsY0FBYztHQUMzQyxPQUFPOzs7QUFHVCxTQUFRLFVBTk8sWUFBVyxHOzs7Ozs7QUNBMUI7O0FBRUEsUUFBTyxlQUFlLFNBQVMsY0FBYztHQUMzQyxPQUFPOzs7QUFHVCxTQUFRLFVBTk8sWUFBVzs7R0FFeEIiLCJmaWxlIjoiYW5ndWxhci1tYXRlcmlhbC1hY2NvcmRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA3YTAxYmJhMGY2ZjUxZTQ0NzQ2MCIsImltcG9ydCBtZEFjY29yZGlvbiBmcm9tICcuL3NjcmlwdHMvbWRBY2NvcmRpb24nO1xuaW1wb3J0IG1kQWNjb3JkaW9uR3JvdXAgZnJvbSAnLi9zY3JpcHRzL21kQWNjb3JkaW9uR3JvdXAnO1xuaW1wb3J0IG1kQWNjb3JkaW9uQ29udGVudCBmcm9tICcuL3NjcmlwdHMvbWRBY2NvcmRpb25Db250ZW50JztcbmltcG9ydCBtZEFjY29yZGlvbkJ1dHRvbiBmcm9tICcuL3NjcmlwdHMvbWRBY2NvcmRpb25CdXR0b24nO1xuXG4oKGFuZ3VsYXIpID0+IHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnbmdNYXRlcmlhbEFjY29yZGlvbicsIFtcbiAgICAgICduZ01hdGVyaWFsJ1xuICAgIF0pXG4gICAgLmRpcmVjdGl2ZShtZEFjY29yZGlvbi5uYW1lLCBtZEFjY29yZGlvbi5kaXJlY3RpdmUpXG4gICAgLmRpcmVjdGl2ZShtZEFjY29yZGlvbkdyb3VwLm5hbWUsIG1kQWNjb3JkaW9uR3JvdXAuZGlyZWN0aXZlKVxuICAgIC5kaXJlY3RpdmUobWRBY2NvcmRpb25Db250ZW50Lm5hbWUsIG1kQWNjb3JkaW9uQ29udGVudC5kaXJlY3RpdmUpXG4gICAgLmRpcmVjdGl2ZShtZEFjY29yZGlvbkJ1dHRvbi5uYW1lLCBtZEFjY29yZGlvbkJ1dHRvbi5kaXJlY3RpdmUpO1xuXG59KShhbmd1bGFyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYWluLmpzIiwiaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGUnO1xuaW1wb3J0IGxpbmsgZnJvbSAnLi9saW5rJztcblxubGV0IGRpcmVjdGl2ZSA9ICgpID0+IHtcblxuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgc2NvcGU6IHtcbiAgICAgIGxvY2tlZDogJ0A/bWRMb2NrZWQnXG4gICAgfSxcbiAgICByZXBsYWNlOiB0cnVlLFxuICAgIHRyYW5zY2x1ZGU6IHRydWUsXG4gICAgdGVtcGxhdGUsXG4gICAgbGlua1xuICB9O1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZEFjY29yZGlvbicsXG4gIGRpcmVjdGl2ZVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHRzL21kQWNjb3JkaW9uL2luZGV4LmpzIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oJGVsZW1lbnQsICRhdHRyaWJ1dGVzKSB7XG5cbiAgbGV0IGxvY2tlZCA9ICRhdHRyaWJ1dGVzLmxvY2tlZCAmJiAnbWQtYWNjb3JkaW9uLWxvY2tlZCc7XG5cbiAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwibWQtYWNjb3JkaW9uICR7IGxvY2tlZCB9XCIgbmctdHJhbnNjbHVkZT48L2Rpdj5gO1xuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9tZEFjY29yZGlvbi90ZW1wbGF0ZS5qcyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCRzY29wZSwgJGVsZW1lbnQsICRhdHRyaWJ1dGVzKSB7XG5cbiAgJHNjb3BlLiR3YXRjaChmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gJGF0dHJpYnV0ZXMubG9ja2VkO1xuICB9LCBmdW5jdGlvbihsb2NrZWQpIHtcbiAgICBpZiAobG9ja2VkKSB7XG4gICAgICAkZWxlbWVudFswXS5jbGFzc0xpc3QuYWRkKCdtZC1hY2NvcmRpb24tbG9ja2VkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICRlbGVtZW50WzBdLmNsYXNzTGlzdC5yZW1vdmUoJ21kLWFjY29yZGlvbi1sb2NrZWQnKTtcbiAgICB9XG4gIH0pO1xuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9tZEFjY29yZGlvbi9saW5rLmpzIiwiaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGUnO1xuXG5sZXQgZGlyZWN0aXZlID0gKCkgPT4ge1xuXG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICByZXBsYWNlOiB0cnVlLFxuICAgIHRyYW5zY2x1ZGU6IHRydWUsXG4gICAgdGVtcGxhdGVcbiAgfTtcblxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRBY2NvcmRpb25Hcm91cCcsXG4gIGRpcmVjdGl2ZVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHRzL21kQWNjb3JkaW9uR3JvdXAvaW5kZXguanMiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcblxuICByZXR1cm4gJzxkaXYgY2xhc3M9XCJtZC1hY2NvcmRpb24tZ3JvdXBcIiBmbGV4IGxheW91dD1cImNvbHVtblwiIGxheW91dC1hbGlnbj1cInN0YXJ0IHN0YXJ0XCIgbmctdHJhbnNjbHVkZT48L2Rpdj4nO1xuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9tZEFjY29yZGlvbkdyb3VwL3RlbXBsYXRlLmpzIiwiaW1wb3J0IGNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVyJztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3RlbXBsYXRlJztcblxubGV0IGRpcmVjdGl2ZSA9ICgpID0+IHtcblxuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgc2NvcGU6IHtcbiAgICAgIGhlYWRpbmc6ICdAbWRIZWFkaW5nJyxcbiAgICAgIGljb246ICdAP21kSWNvbicsXG4gICAgICBzdmdJY29uOiAnQD9tZFN2Z0ljb24nLFxuICAgICAgYXJyb3c6ICdAP21kQXJyb3cnLFxuICAgICAgY29sbGFwc2VkOiAnPT9tZEFjY29yZGlvbkNvbGxhcHNlZCdcbiAgICB9LFxuICAgIHJlcGxhY2U6IHRydWUsXG4gICAgdHJhbnNjbHVkZTogdHJ1ZSxcbiAgICB0ZW1wbGF0ZSxcbiAgICBjb250cm9sbGVyLFxuICAgIGNvbnRyb2xsZXJBczogJyRtZEFjY29yZGlvbkNvbnRlbnQnLFxuICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWVcbiAgfTtcblxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRBY2NvcmRpb25Db250ZW50JyxcbiAgZGlyZWN0aXZlXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvbWRBY2NvcmRpb25Db250ZW50L2luZGV4LmpzIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG5cbiAgdGhpcy5jb2xsYXBzZWQgPSBhbmd1bGFyLmlzRGVmaW5lZCh0aGlzLmNvbGxhcHNlZCkgPyB0aGlzLmNvbGxhcHNlZCA6IHRydWU7XG5cbiAgdGhpcy5jaGFuZ2VTdGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuY29sbGFwc2VkID0gIXRoaXMuY29sbGFwc2VkO1xuICB9O1xuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9tZEFjY29yZGlvbkNvbnRlbnQvY29udHJvbGxlci5qcyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuXG4gIHJldHVybiBgXG4gICAgPGRpdiBjbGFzcz1cIm1kLWFjY29yZGlvbi1jb250ZW50XCIgbGF5b3V0PVwiY29sdW1uXCI+XG4gICAgICA8bWQtYnV0dG9uIGNsYXNzPVwibWQtYWNjb3JkaW9uLXRvZ2dsZVwiIG5nLWlmPVwiJG1kQWNjb3JkaW9uQ29udGVudC5oZWFkaW5nXCIgbmctY2xpY2s9XCIkbWRBY2NvcmRpb25Db250ZW50LmNoYW5nZVN0YXRlKCk7XCIgbmctY2xhc3M9XCJ7ICdtZC1hY3RpdmUnOiAhJG1kQWNjb3JkaW9uQ29udGVudC5jb2xsYXBzZWQgfVwiPlxuICAgICAgICA8ZGl2IGxheW91dD1cInJvd1wiPlxuICAgICAgICAgIDxtZC1pY29uIG5nLWlmPVwiJG1kQWNjb3JkaW9uQ29udGVudC5zdmdJY29uXCIgbWQtc3ZnLWljb249XCIkbWRBY2NvcmRpb25Db250ZW50LnN2Z0ljb25cIj48L21kLWljb24+XG4gICAgICAgICAgPG1kLWljb24gbmctaWY9XCIkbWRBY2NvcmRpb25Db250ZW50Lmljb25cIj57eyAkbWRBY2NvcmRpb25Db250ZW50Lmljb24gfX08L21kLWljb24+XG4gICAgICAgICAgPHNwYW4gZmxleD57eyAkbWRBY2NvcmRpb25Db250ZW50LmhlYWRpbmcgfX08L3NwYW4+XG4gICAgICAgICAgPGkgbmctaWY9XCIkbWRBY2NvcmRpb25Db250ZW50LmFycm93XCIgY2xhc3M9XCJmYSBmYS1jaGV2cm9uLWRvd24gYWNjb3JkaW9uLWFycm93XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWQtYnV0dG9uPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwibWQtYWNjb3JkaW9uLXdyYXBwZXJcIiBtZC1hY2NvcmRpb24tZGlzYWJsZS1hbmltYXRlIG5nLWNsYXNzPVwieyAnbWQtYWN0aXZlJzogISRtZEFjY29yZGlvbkNvbnRlbnQuY29sbGFwc2VkLCAnbWQtYWNjb3JkaW9uLXdyYXBwZXItaWNvbnMnOiAgJG1kQWNjb3JkaW9uQ29udGVudC5pY29uIH1cIiBsYXlvdXQ9XCJjb2x1bW5cIiBuZy10cmFuc2NsdWRlPjwvZGl2PlxuICAgIDwvZGl2PlxuICBgO1xuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9tZEFjY29yZGlvbkNvbnRlbnQvdGVtcGxhdGUuanMiLCJpbXBvcnQgY29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXInO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGUnO1xuXG5sZXQgZGlyZWN0aXZlID0gKCkgPT4ge1xuXG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICBzY29wZToge1xuICAgICAgbmdDbGljazogJ0A/JyxcbiAgICAgIHVpU3JlZjogJ0A/JyxcbiAgICAgIHVpU3JlZkFjdGl2ZTogJ0A/JyxcbiAgICAgIGhyZWY6ICdAPycsXG4gICAgICB0YXJnZXQ6ICdAPydcbiAgICB9LFxuICAgIHRyYW5zY2x1ZGU6IHRydWUsXG4gICAgdGVtcGxhdGUsXG4gICAgY29udHJvbGxlcixcbiAgICBjb250cm9sbGVyQXM6ICckbWRBY2NvcmRpb25CdXR0b24nLFxuICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWVcbiAgfTtcblxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRBY2NvcmRpb25CdXR0b24nLFxuICBkaXJlY3RpdmVcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9tZEFjY29yZGlvbkJ1dHRvbi9pbmRleC5qcyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9tZEFjY29yZGlvbkJ1dHRvbi9jb250cm9sbGVyLmpzIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG5cbiAgcmV0dXJuIGBcbiAgICA8bWQtYnV0dG9uXG4gICAgICBjbGFzcz1cIm1kLWFjY29yZGlvbi1idXR0b25cIlxuICAgICAgbGF5b3V0PVwiY29sdW1uXCJcbiAgICAgIG5nLWF0dHItaHJlZj1cInt7ICRtZEFjY29yZGlvbkJ1dHRvbi5ocmVmIH19XCJcbiAgICAgIG5nLWF0dHItdGFyZ2V0PVwie3sgJG1kQWNjb3JkaW9uQnV0dG9uLnRhcmdldCB9fVwiPlxuICAgICAgPGRpdiBsYXlvdXQ9XCJyb3dcIiBsYXlvdXQtZmlsbCBsYXlvdXQtYWxpZ249XCJzdGFydCBjZW50ZXJcIiBuZy10cmFuc2NsdWRlPjwvZGl2PlxuICAgIDwvbWQtYnV0dG9uPlxuICBgO1xuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9tZEFjY29yZGlvbkJ1dHRvbi90ZW1wbGF0ZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=