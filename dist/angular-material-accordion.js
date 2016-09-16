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
	  name: 'mdAccordion',
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
	
	  var locked = $attributes.locked && 'md-accordion-locked';
	
	  return '<div class="md-accordion ' + locked + '" ng-transclude></div>';
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
	      $element[0].classList.add('md-accordion-locked');
	    } else {
	      $element[0].classList.remove('md-accordion-locked');
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
	  name: 'mdAccordionGroup',
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
	
	  return '<div class="md-accordion-group" flex layout="column" layout-align="start start" ng-transclude></div>';
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
	    controllerAs: '$mdAccordionContent',
	    bindToController: true
	  };
	};
	
	exports.default = {
	  name: 'mdAccordionContent',
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
	
	  return "\n    <div class=\"md-accordion-content\" layout=\"column\">\n      <md-button class=\"md-accordion-toggle\" ng-if=\"$mdAccordionContent.heading\" ng-click=\"$mdAccordionContent.changeState();\" ng-class=\"{ 'md-active': $mdAccordionContent.visible }\">\n        <div layout=\"row\">\n          <md-icon ng-if=\"$mdAccordionContent.svgIcon\" md-svg-icon=\"$mdAccordionContent.svgIcon\"></md-icon>\n          <md-icon ng-if=\"$mdAccordionContent.icon\">{{ $mdAccordionContent.icon }}</md-icon>\n          <span flex>{{ $mdAccordionContent.heading }}</span>\n          <i ng-if=\"$mdAccordionContent.arrow\" class=\"fa fa-chevron-down accordion-arrow\" aria-hidden=\"true\"></i>\n        </div>\n      </md-button>\n\n      <div class=\"md-accordion-wrapper\" md-accordion-disable-animate ng-class=\"{ 'md-active': $mdAccordionContent.visible, 'md-accordion-wrapper-icons':  $mdAccordionContent.icon }\" layout=\"column\" ng-transclude></div>\n    </div>\n  ";
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
	
	  return "\n    <md-button\n      class=\"md-accordion-button\"\n      layout=\"column\"\n      ng-attr-href=\"{{ $mdAccordionButton.href }}\"\n      ng-attr-target=\"{{ $mdAccordionButton.target }}\">\n      <div layout=\"row\" layout-fill layout-align=\"start center\" ng-transclude></div>\n    </md-button>\n  ";
	};

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzU1NzlmMTFmZTlhMjcwNWUwMWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uanM/MzQ3OSIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tZEFjY29yZGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tZEFjY29yZGlvbi9pbmRleC5qcz8wMmY3Iiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21kQWNjb3JkaW9uL3RlbXBsYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21kQWNjb3JkaW9uL3RlbXBsYXRlLmpzP2MxNTIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWRBY2NvcmRpb24vbGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tZEFjY29yZGlvbi9saW5rLmpzPzU1OGIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWRBY2NvcmRpb25Hcm91cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tZEFjY29yZGlvbkdyb3VwL2luZGV4LmpzP2VkNjciLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWRBY2NvcmRpb25Hcm91cC90ZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tZEFjY29yZGlvbkdyb3VwL3RlbXBsYXRlLmpzPzVhM2QiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWRBY2NvcmRpb25Db250ZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21kQWNjb3JkaW9uQ29udGVudC9pbmRleC5qcz80ODMzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21kQWNjb3JkaW9uQ29udGVudC9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21kQWNjb3JkaW9uQ29udGVudC9jb250cm9sbGVyLmpzPzM1NjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWRBY2NvcmRpb25Db250ZW50L3RlbXBsYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21kQWNjb3JkaW9uQ29udGVudC90ZW1wbGF0ZS5qcz83ZmI1Iiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21kQWNjb3JkaW9uQnV0dG9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21kQWNjb3JkaW9uQnV0dG9uL2luZGV4LmpzPzk2MWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWRBY2NvcmRpb25CdXR0b24vY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tZEFjY29yZGlvbkJ1dHRvbi9jb250cm9sbGVyLmpzP2E5MDMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWRBY2NvcmRpb25CdXR0b24vdGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWRBY2NvcmRpb25CdXR0b24vdGVtcGxhdGUuanM/Y2VhYyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwiZGlyZWN0aXZlIiwibmFtZSIsInJlc3RyaWN0Iiwic2NvcGUiLCJsb2NrZWQiLCJyZXBsYWNlIiwidHJhbnNjbHVkZSIsInRlbXBsYXRlIiwibGluayIsIiRlbGVtZW50IiwiJGF0dHJpYnV0ZXMiLCIkc2NvcGUiLCIkd2F0Y2giLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJoZWFkaW5nIiwiaWNvbiIsInN2Z0ljb24iLCJhcnJvdyIsImNvbnRyb2xsZXIiLCJjb250cm9sbGVyQXMiLCJiaW5kVG9Db250cm9sbGVyIiwidmlzaWJsZSIsImNoYW5nZVN0YXRlIiwibmdDbGljayIsInVpU3JlZiIsInVpU3JlZkFjdGl2ZSIsImhyZWYiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFB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IiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgMzU1NzlmMTFmZTlhMjcwNWUwMWZcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfbWRBY2NvcmRpb24gPSByZXF1aXJlKCcuL3NjcmlwdHMvbWRBY2NvcmRpb24nKTtcblxudmFyIF9tZEFjY29yZGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tZEFjY29yZGlvbik7XG5cbnZhciBfbWRBY2NvcmRpb25Hcm91cCA9IHJlcXVpcmUoJy4vc2NyaXB0cy9tZEFjY29yZGlvbkdyb3VwJyk7XG5cbnZhciBfbWRBY2NvcmRpb25Hcm91cDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tZEFjY29yZGlvbkdyb3VwKTtcblxudmFyIF9tZEFjY29yZGlvbkNvbnRlbnQgPSByZXF1aXJlKCcuL3NjcmlwdHMvbWRBY2NvcmRpb25Db250ZW50Jyk7XG5cbnZhciBfbWRBY2NvcmRpb25Db250ZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21kQWNjb3JkaW9uQ29udGVudCk7XG5cbnZhciBfbWRBY2NvcmRpb25CdXR0b24gPSByZXF1aXJlKCcuL3NjcmlwdHMvbWRBY2NvcmRpb25CdXR0b24nKTtcblxudmFyIF9tZEFjY29yZGlvbkJ1dHRvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tZEFjY29yZGlvbkJ1dHRvbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbihmdW5jdGlvbiAoYW5ndWxhcikge1xuXG4gIGFuZ3VsYXIubW9kdWxlKCduZ01hdGVyaWFsQWNjb3JkaW9uJywgWyduZ01hdGVyaWFsJ10pLmRpcmVjdGl2ZShfbWRBY2NvcmRpb24yLmRlZmF1bHQubmFtZSwgX21kQWNjb3JkaW9uMi5kZWZhdWx0LmRpcmVjdGl2ZSkuZGlyZWN0aXZlKF9tZEFjY29yZGlvbkdyb3VwMi5kZWZhdWx0Lm5hbWUsIF9tZEFjY29yZGlvbkdyb3VwMi5kZWZhdWx0LmRpcmVjdGl2ZSkuZGlyZWN0aXZlKF9tZEFjY29yZGlvbkNvbnRlbnQyLmRlZmF1bHQubmFtZSwgX21kQWNjb3JkaW9uQ29udGVudDIuZGVmYXVsdC5kaXJlY3RpdmUpLmRpcmVjdGl2ZShfbWRBY2NvcmRpb25CdXR0b24yLmRlZmF1bHQubmFtZSwgX21kQWNjb3JkaW9uQnV0dG9uMi5kZWZhdWx0LmRpcmVjdGl2ZSk7XG59KShhbmd1bGFyKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9tYWluLmpzXG4gKiovIiwiaW1wb3J0IG1kQWNjb3JkaW9uIGZyb20gJy4vc2NyaXB0cy9tZEFjY29yZGlvbic7XG5pbXBvcnQgbWRBY2NvcmRpb25Hcm91cCBmcm9tICcuL3NjcmlwdHMvbWRBY2NvcmRpb25Hcm91cCc7XG5pbXBvcnQgbWRBY2NvcmRpb25Db250ZW50IGZyb20gJy4vc2NyaXB0cy9tZEFjY29yZGlvbkNvbnRlbnQnO1xuaW1wb3J0IG1kQWNjb3JkaW9uQnV0dG9uIGZyb20gJy4vc2NyaXB0cy9tZEFjY29yZGlvbkJ1dHRvbic7XG5cbigoYW5ndWxhcikgPT4ge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCduZ01hdGVyaWFsQWNjb3JkaW9uJywgW1xuICAgICAgJ25nTWF0ZXJpYWwnXG4gICAgXSlcbiAgICAuZGlyZWN0aXZlKG1kQWNjb3JkaW9uLm5hbWUsIG1kQWNjb3JkaW9uLmRpcmVjdGl2ZSlcbiAgICAuZGlyZWN0aXZlKG1kQWNjb3JkaW9uR3JvdXAubmFtZSwgbWRBY2NvcmRpb25Hcm91cC5kaXJlY3RpdmUpXG4gICAgLmRpcmVjdGl2ZShtZEFjY29yZGlvbkNvbnRlbnQubmFtZSwgbWRBY2NvcmRpb25Db250ZW50LmRpcmVjdGl2ZSlcbiAgICAuZGlyZWN0aXZlKG1kQWNjb3JkaW9uQnV0dG9uLm5hbWUsIG1kQWNjb3JkaW9uQnV0dG9uLmRpcmVjdGl2ZSk7XG5cbn0pKGFuZ3VsYXIpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbWFpbi5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF90ZW1wbGF0ZSA9IHJlcXVpcmUoJy4vdGVtcGxhdGUnKTtcblxudmFyIF90ZW1wbGF0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90ZW1wbGF0ZSk7XG5cbnZhciBfbGluayA9IHJlcXVpcmUoJy4vbGluaycpO1xuXG52YXIgX2xpbmsyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGluayk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBkaXJlY3RpdmUgPSBmdW5jdGlvbiBkaXJlY3RpdmUoKSB7XG5cbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHNjb3BlOiB7XG4gICAgICBsb2NrZWQ6ICdAP21kTG9ja2VkJ1xuICAgIH0sXG4gICAgcmVwbGFjZTogdHJ1ZSxcbiAgICB0cmFuc2NsdWRlOiB0cnVlLFxuICAgIHRlbXBsYXRlOiBfdGVtcGxhdGUyLmRlZmF1bHQsXG4gICAgbGluazogX2xpbmsyLmRlZmF1bHRcbiAgfTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgbmFtZTogJ21kQWNjb3JkaW9uJyxcbiAgZGlyZWN0aXZlOiBkaXJlY3RpdmVcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc2NyaXB0cy9tZEFjY29yZGlvbi9pbmRleC5qc1xuICoqLyIsImltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3RlbXBsYXRlJztcbmltcG9ydCBsaW5rIGZyb20gJy4vbGluayc7XG5cbmxldCBkaXJlY3RpdmUgPSAoKSA9PiB7XG5cbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHNjb3BlOiB7XG4gICAgICBsb2NrZWQ6ICdAP21kTG9ja2VkJ1xuICAgIH0sXG4gICAgcmVwbGFjZTogdHJ1ZSxcbiAgICB0cmFuc2NsdWRlOiB0cnVlLFxuICAgIHRlbXBsYXRlLFxuICAgIGxpbmtcbiAgfTtcblxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRBY2NvcmRpb24nLFxuICBkaXJlY3RpdmVcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zY3JpcHRzL21kQWNjb3JkaW9uL2luZGV4LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoJGVsZW1lbnQsICRhdHRyaWJ1dGVzKSB7XG5cbiAgdmFyIGxvY2tlZCA9ICRhdHRyaWJ1dGVzLmxvY2tlZCAmJiAnbWQtYWNjb3JkaW9uLWxvY2tlZCc7XG5cbiAgcmV0dXJuICc8ZGl2IGNsYXNzPVwibWQtYWNjb3JkaW9uICcgKyBsb2NrZWQgKyAnXCIgbmctdHJhbnNjbHVkZT48L2Rpdj4nO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zY3JpcHRzL21kQWNjb3JkaW9uL3RlbXBsYXRlLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oJGVsZW1lbnQsICRhdHRyaWJ1dGVzKSB7XG5cbiAgbGV0IGxvY2tlZCA9ICRhdHRyaWJ1dGVzLmxvY2tlZCAmJiAnbWQtYWNjb3JkaW9uLWxvY2tlZCc7XG5cbiAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwibWQtYWNjb3JkaW9uICR7IGxvY2tlZCB9XCIgbmctdHJhbnNjbHVkZT48L2Rpdj5gO1xuXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zY3JpcHRzL21kQWNjb3JkaW9uL3RlbXBsYXRlLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoJHNjb3BlLCAkZWxlbWVudCwgJGF0dHJpYnV0ZXMpIHtcblxuICAkc2NvcGUuJHdhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gJGF0dHJpYnV0ZXMubG9ja2VkO1xuICB9LCBmdW5jdGlvbiAobG9ja2VkKSB7XG4gICAgaWYgKGxvY2tlZCkge1xuICAgICAgJGVsZW1lbnRbMF0uY2xhc3NMaXN0LmFkZCgnbWQtYWNjb3JkaW9uLWxvY2tlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkZWxlbWVudFswXS5jbGFzc0xpc3QucmVtb3ZlKCdtZC1hY2NvcmRpb24tbG9ja2VkJyk7XG4gICAgfVxuICB9KTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc2NyaXB0cy9tZEFjY29yZGlvbi9saW5rLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oJHNjb3BlLCAkZWxlbWVudCwgJGF0dHJpYnV0ZXMpIHtcblxuICAkc2NvcGUuJHdhdGNoKGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAkYXR0cmlidXRlcy5sb2NrZWQ7XG4gIH0sIGZ1bmN0aW9uKGxvY2tlZCkge1xuICAgIGlmIChsb2NrZWQpIHtcbiAgICAgICRlbGVtZW50WzBdLmNsYXNzTGlzdC5hZGQoJ21kLWFjY29yZGlvbi1sb2NrZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJGVsZW1lbnRbMF0uY2xhc3NMaXN0LnJlbW92ZSgnbWQtYWNjb3JkaW9uLWxvY2tlZCcpO1xuICAgIH1cbiAgfSk7XG5cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NjcmlwdHMvbWRBY2NvcmRpb24vbGluay5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF90ZW1wbGF0ZSA9IHJlcXVpcmUoJy4vdGVtcGxhdGUnKTtcblxudmFyIF90ZW1wbGF0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90ZW1wbGF0ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBkaXJlY3RpdmUgPSBmdW5jdGlvbiBkaXJlY3RpdmUoKSB7XG5cbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHJlcGxhY2U6IHRydWUsXG4gICAgdHJhbnNjbHVkZTogdHJ1ZSxcbiAgICB0ZW1wbGF0ZTogX3RlbXBsYXRlMi5kZWZhdWx0XG4gIH07XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIG5hbWU6ICdtZEFjY29yZGlvbkdyb3VwJyxcbiAgZGlyZWN0aXZlOiBkaXJlY3RpdmVcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc2NyaXB0cy9tZEFjY29yZGlvbkdyb3VwL2luZGV4LmpzXG4gKiovIiwiaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGUnO1xuXG5sZXQgZGlyZWN0aXZlID0gKCkgPT4ge1xuXG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICByZXBsYWNlOiB0cnVlLFxuICAgIHRyYW5zY2x1ZGU6IHRydWUsXG4gICAgdGVtcGxhdGVcbiAgfTtcblxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRBY2NvcmRpb25Hcm91cCcsXG4gIGRpcmVjdGl2ZVxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NjcmlwdHMvbWRBY2NvcmRpb25Hcm91cC9pbmRleC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuXG4gIHJldHVybiAnPGRpdiBjbGFzcz1cIm1kLWFjY29yZGlvbi1ncm91cFwiIGZsZXggbGF5b3V0PVwiY29sdW1uXCIgbGF5b3V0LWFsaWduPVwic3RhcnQgc3RhcnRcIiBuZy10cmFuc2NsdWRlPjwvZGl2Pic7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NjcmlwdHMvbWRBY2NvcmRpb25Hcm91cC90ZW1wbGF0ZS5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuXG4gIHJldHVybiAnPGRpdiBjbGFzcz1cIm1kLWFjY29yZGlvbi1ncm91cFwiIGZsZXggbGF5b3V0PVwiY29sdW1uXCIgbGF5b3V0LWFsaWduPVwic3RhcnQgc3RhcnRcIiBuZy10cmFuc2NsdWRlPjwvZGl2Pic7XG5cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NjcmlwdHMvbWRBY2NvcmRpb25Hcm91cC90ZW1wbGF0ZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jb250cm9sbGVyID0gcmVxdWlyZSgnLi9jb250cm9sbGVyJyk7XG5cbnZhciBfY29udHJvbGxlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb250cm9sbGVyKTtcblxudmFyIF90ZW1wbGF0ZSA9IHJlcXVpcmUoJy4vdGVtcGxhdGUnKTtcblxudmFyIF90ZW1wbGF0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90ZW1wbGF0ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBkaXJlY3RpdmUgPSBmdW5jdGlvbiBkaXJlY3RpdmUoKSB7XG5cbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHNjb3BlOiB7XG4gICAgICBoZWFkaW5nOiAnQG1kSGVhZGluZycsXG4gICAgICBpY29uOiAnQD9tZEljb24nLFxuICAgICAgc3ZnSWNvbjogJ0A/bWRTdmdJY29uJyxcbiAgICAgIGFycm93OiAnQD9tZEFycm93J1xuICAgIH0sXG4gICAgcmVwbGFjZTogdHJ1ZSxcbiAgICB0cmFuc2NsdWRlOiB0cnVlLFxuICAgIHRlbXBsYXRlOiBfdGVtcGxhdGUyLmRlZmF1bHQsXG4gICAgY29udHJvbGxlcjogX2NvbnRyb2xsZXIyLmRlZmF1bHQsXG4gICAgY29udHJvbGxlckFzOiAnJG1kQWNjb3JkaW9uQ29udGVudCcsXG4gICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZVxuICB9O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBuYW1lOiAnbWRBY2NvcmRpb25Db250ZW50JyxcbiAgZGlyZWN0aXZlOiBkaXJlY3RpdmVcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc2NyaXB0cy9tZEFjY29yZGlvbkNvbnRlbnQvaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgY29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXInO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGUnO1xuXG5sZXQgZGlyZWN0aXZlID0gKCkgPT4ge1xuXG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICBzY29wZToge1xuICAgICAgaGVhZGluZzogJ0BtZEhlYWRpbmcnLFxuICAgICAgaWNvbjogJ0A/bWRJY29uJyxcbiAgICAgIHN2Z0ljb246ICdAP21kU3ZnSWNvbicsXG4gICAgICBhcnJvdzogJ0A/bWRBcnJvdydcbiAgICB9LFxuICAgIHJlcGxhY2U6IHRydWUsXG4gICAgdHJhbnNjbHVkZTogdHJ1ZSxcbiAgICB0ZW1wbGF0ZSxcbiAgICBjb250cm9sbGVyLFxuICAgIGNvbnRyb2xsZXJBczogJyRtZEFjY29yZGlvbkNvbnRlbnQnLFxuICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWVcbiAgfTtcblxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRBY2NvcmRpb25Db250ZW50JyxcbiAgZGlyZWN0aXZlXG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc2NyaXB0cy9tZEFjY29yZGlvbkNvbnRlbnQvaW5kZXguanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuXG4gIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuXG4gIHRoaXMuY2hhbmdlU3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy52aXNpYmxlID0gIXRoaXMudmlzaWJsZTtcbiAgfTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc2NyaXB0cy9tZEFjY29yZGlvbkNvbnRlbnQvY29udHJvbGxlci5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuXG4gIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuXG4gIHRoaXMuY2hhbmdlU3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnZpc2libGUgPSAhdGhpcy52aXNpYmxlO1xuICB9O1xuXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zY3JpcHRzL21kQWNjb3JkaW9uQ29udGVudC9jb250cm9sbGVyLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcblxuICByZXR1cm4gXCJcXG4gICAgPGRpdiBjbGFzcz1cXFwibWQtYWNjb3JkaW9uLWNvbnRlbnRcXFwiIGxheW91dD1cXFwiY29sdW1uXFxcIj5cXG4gICAgICA8bWQtYnV0dG9uIGNsYXNzPVxcXCJtZC1hY2NvcmRpb24tdG9nZ2xlXFxcIiBuZy1pZj1cXFwiJG1kQWNjb3JkaW9uQ29udGVudC5oZWFkaW5nXFxcIiBuZy1jbGljaz1cXFwiJG1kQWNjb3JkaW9uQ29udGVudC5jaGFuZ2VTdGF0ZSgpO1xcXCIgbmctY2xhc3M9XFxcInsgJ21kLWFjdGl2ZSc6ICRtZEFjY29yZGlvbkNvbnRlbnQudmlzaWJsZSB9XFxcIj5cXG4gICAgICAgIDxkaXYgbGF5b3V0PVxcXCJyb3dcXFwiPlxcbiAgICAgICAgICA8bWQtaWNvbiBuZy1pZj1cXFwiJG1kQWNjb3JkaW9uQ29udGVudC5zdmdJY29uXFxcIiBtZC1zdmctaWNvbj1cXFwiJG1kQWNjb3JkaW9uQ29udGVudC5zdmdJY29uXFxcIj48L21kLWljb24+XFxuICAgICAgICAgIDxtZC1pY29uIG5nLWlmPVxcXCIkbWRBY2NvcmRpb25Db250ZW50Lmljb25cXFwiPnt7ICRtZEFjY29yZGlvbkNvbnRlbnQuaWNvbiB9fTwvbWQtaWNvbj5cXG4gICAgICAgICAgPHNwYW4gZmxleD57eyAkbWRBY2NvcmRpb25Db250ZW50LmhlYWRpbmcgfX08L3NwYW4+XFxuICAgICAgICAgIDxpIG5nLWlmPVxcXCIkbWRBY2NvcmRpb25Db250ZW50LmFycm93XFxcIiBjbGFzcz1cXFwiZmEgZmEtY2hldnJvbi1kb3duIGFjY29yZGlvbi1hcnJvd1xcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvbWQtYnV0dG9uPlxcblxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIm1kLWFjY29yZGlvbi13cmFwcGVyXFxcIiBtZC1hY2NvcmRpb24tZGlzYWJsZS1hbmltYXRlIG5nLWNsYXNzPVxcXCJ7ICdtZC1hY3RpdmUnOiAkbWRBY2NvcmRpb25Db250ZW50LnZpc2libGUsICdtZC1hY2NvcmRpb24td3JhcHBlci1pY29ucyc6ICAkbWRBY2NvcmRpb25Db250ZW50Lmljb24gfVxcXCIgbGF5b3V0PVxcXCJjb2x1bW5cXFwiIG5nLXRyYW5zY2x1ZGU+PC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgXCI7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NjcmlwdHMvbWRBY2NvcmRpb25Db250ZW50L3RlbXBsYXRlLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG5cbiAgcmV0dXJuIGBcbiAgICA8ZGl2IGNsYXNzPVwibWQtYWNjb3JkaW9uLWNvbnRlbnRcIiBsYXlvdXQ9XCJjb2x1bW5cIj5cbiAgICAgIDxtZC1idXR0b24gY2xhc3M9XCJtZC1hY2NvcmRpb24tdG9nZ2xlXCIgbmctaWY9XCIkbWRBY2NvcmRpb25Db250ZW50LmhlYWRpbmdcIiBuZy1jbGljaz1cIiRtZEFjY29yZGlvbkNvbnRlbnQuY2hhbmdlU3RhdGUoKTtcIiBuZy1jbGFzcz1cInsgJ21kLWFjdGl2ZSc6ICRtZEFjY29yZGlvbkNvbnRlbnQudmlzaWJsZSB9XCI+XG4gICAgICAgIDxkaXYgbGF5b3V0PVwicm93XCI+XG4gICAgICAgICAgPG1kLWljb24gbmctaWY9XCIkbWRBY2NvcmRpb25Db250ZW50LnN2Z0ljb25cIiBtZC1zdmctaWNvbj1cIiRtZEFjY29yZGlvbkNvbnRlbnQuc3ZnSWNvblwiPjwvbWQtaWNvbj5cbiAgICAgICAgICA8bWQtaWNvbiBuZy1pZj1cIiRtZEFjY29yZGlvbkNvbnRlbnQuaWNvblwiPnt7ICRtZEFjY29yZGlvbkNvbnRlbnQuaWNvbiB9fTwvbWQtaWNvbj5cbiAgICAgICAgICA8c3BhbiBmbGV4Pnt7ICRtZEFjY29yZGlvbkNvbnRlbnQuaGVhZGluZyB9fTwvc3Bhbj5cbiAgICAgICAgICA8aSBuZy1pZj1cIiRtZEFjY29yZGlvbkNvbnRlbnQuYXJyb3dcIiBjbGFzcz1cImZhIGZhLWNoZXZyb24tZG93biBhY2NvcmRpb24tYXJyb3dcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tZC1idXR0b24+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJtZC1hY2NvcmRpb24td3JhcHBlclwiIG1kLWFjY29yZGlvbi1kaXNhYmxlLWFuaW1hdGUgbmctY2xhc3M9XCJ7ICdtZC1hY3RpdmUnOiAkbWRBY2NvcmRpb25Db250ZW50LnZpc2libGUsICdtZC1hY2NvcmRpb24td3JhcHBlci1pY29ucyc6ICAkbWRBY2NvcmRpb25Db250ZW50Lmljb24gfVwiIGxheW91dD1cImNvbHVtblwiIG5nLXRyYW5zY2x1ZGU+PC9kaXY+XG4gICAgPC9kaXY+XG4gIGA7XG5cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NjcmlwdHMvbWRBY2NvcmRpb25Db250ZW50L3RlbXBsYXRlLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NvbnRyb2xsZXIgPSByZXF1aXJlKCcuL2NvbnRyb2xsZXInKTtcblxudmFyIF9jb250cm9sbGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbnRyb2xsZXIpO1xuXG52YXIgX3RlbXBsYXRlID0gcmVxdWlyZSgnLi90ZW1wbGF0ZScpO1xuXG52YXIgX3RlbXBsYXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RlbXBsYXRlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGRpcmVjdGl2ZSA9IGZ1bmN0aW9uIGRpcmVjdGl2ZSgpIHtcblxuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgc2NvcGU6IHtcbiAgICAgIG5nQ2xpY2s6ICdAPycsXG4gICAgICB1aVNyZWY6ICdAPycsXG4gICAgICB1aVNyZWZBY3RpdmU6ICdAPycsXG4gICAgICBocmVmOiAnQD8nLFxuICAgICAgdGFyZ2V0OiAnQD8nXG4gICAgfSxcbiAgICB0cmFuc2NsdWRlOiB0cnVlLFxuICAgIHRlbXBsYXRlOiBfdGVtcGxhdGUyLmRlZmF1bHQsXG4gICAgY29udHJvbGxlcjogX2NvbnRyb2xsZXIyLmRlZmF1bHQsXG4gICAgY29udHJvbGxlckFzOiAnJG1kQWNjb3JkaW9uQnV0dG9uJyxcbiAgICBiaW5kVG9Db250cm9sbGVyOiB0cnVlXG4gIH07XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIG5hbWU6ICdtZEFjY29yZGlvbkJ1dHRvbicsXG4gIGRpcmVjdGl2ZTogZGlyZWN0aXZlXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NjcmlwdHMvbWRBY2NvcmRpb25CdXR0b24vaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgY29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXInO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGUnO1xuXG5sZXQgZGlyZWN0aXZlID0gKCkgPT4ge1xuXG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICBzY29wZToge1xuICAgICAgbmdDbGljazogJ0A/JyxcbiAgICAgIHVpU3JlZjogJ0A/JyxcbiAgICAgIHVpU3JlZkFjdGl2ZTogJ0A/JyxcbiAgICAgIGhyZWY6ICdAPycsXG4gICAgICB0YXJnZXQ6ICdAPydcbiAgICB9LFxuICAgIHRyYW5zY2x1ZGU6IHRydWUsXG4gICAgdGVtcGxhdGUsXG4gICAgY29udHJvbGxlcixcbiAgICBjb250cm9sbGVyQXM6ICckbWRBY2NvcmRpb25CdXR0b24nLFxuICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWVcbiAgfTtcblxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRBY2NvcmRpb25CdXR0b24nLFxuICBkaXJlY3RpdmVcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zY3JpcHRzL21kQWNjb3JkaW9uQnV0dG9uL2luZGV4LmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHt9O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NjcmlwdHMvbWRBY2NvcmRpb25CdXR0b24vY29udHJvbGxlci5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zY3JpcHRzL21kQWNjb3JkaW9uQnV0dG9uL2NvbnRyb2xsZXIuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuXG4gIHJldHVybiBcIlxcbiAgICA8bWQtYnV0dG9uXFxuICAgICAgY2xhc3M9XFxcIm1kLWFjY29yZGlvbi1idXR0b25cXFwiXFxuICAgICAgbGF5b3V0PVxcXCJjb2x1bW5cXFwiXFxuICAgICAgbmctYXR0ci1ocmVmPVxcXCJ7eyAkbWRBY2NvcmRpb25CdXR0b24uaHJlZiB9fVxcXCJcXG4gICAgICBuZy1hdHRyLXRhcmdldD1cXFwie3sgJG1kQWNjb3JkaW9uQnV0dG9uLnRhcmdldCB9fVxcXCI+XFxuICAgICAgPGRpdiBsYXlvdXQ9XFxcInJvd1xcXCIgbGF5b3V0LWZpbGwgbGF5b3V0LWFsaWduPVxcXCJzdGFydCBjZW50ZXJcXFwiIG5nLXRyYW5zY2x1ZGU+PC9kaXY+XFxuICAgIDwvbWQtYnV0dG9uPlxcbiAgXCI7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NjcmlwdHMvbWRBY2NvcmRpb25CdXR0b24vdGVtcGxhdGUuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcblxuICByZXR1cm4gYFxuICAgIDxtZC1idXR0b25cbiAgICAgIGNsYXNzPVwibWQtYWNjb3JkaW9uLWJ1dHRvblwiXG4gICAgICBsYXlvdXQ9XCJjb2x1bW5cIlxuICAgICAgbmctYXR0ci1ocmVmPVwie3sgJG1kQWNjb3JkaW9uQnV0dG9uLmhyZWYgfX1cIlxuICAgICAgbmctYXR0ci10YXJnZXQ9XCJ7eyAkbWRBY2NvcmRpb25CdXR0b24udGFyZ2V0IH19XCI+XG4gICAgICA8ZGl2IGxheW91dD1cInJvd1wiIGxheW91dC1maWxsIGxheW91dC1hbGlnbj1cInN0YXJ0IGNlbnRlclwiIG5nLXRyYW5zY2x1ZGU+PC9kaXY+XG4gICAgPC9tZC1idXR0b24+XG4gIGA7XG5cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NjcmlwdHMvbWRBY2NvcmRpb25CdXR0b24vdGVtcGxhdGUuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9