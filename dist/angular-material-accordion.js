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
	      active: '<?mdActive',
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
	
	  return "\n    <md-button\n      class=\"md-accordion-button\"\n      ng-class=\"{'md-active':!!$mdAccordionButton.active}\"\n      layout=\"column\"\n      ng-attr-href=\"{{ $mdAccordionButton.href }}\"\n      ng-attr-target=\"{{ $mdAccordionButton.target }}\">\n      <div layout=\"row\" layout-fill layout-align=\"start center\" ng-transclude></div>\n    </md-button>\n  ";
	};

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzgzOGI0NjJmNTEyODQ3ZDc1OGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWRBY2NvcmRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWRBY2NvcmRpb24vdGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWRBY2NvcmRpb24vbGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tZEFjY29yZGlvbkdyb3VwL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21kQWNjb3JkaW9uR3JvdXAvdGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWRBY2NvcmRpb25Db250ZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21kQWNjb3JkaW9uQ29udGVudC9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21kQWNjb3JkaW9uQ29udGVudC90ZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tZEFjY29yZGlvbkJ1dHRvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tZEFjY29yZGlvbkJ1dHRvbi9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21kQWNjb3JkaW9uQnV0dG9uL3RlbXBsYXRlLmpzIl0sIm5hbWVzIjpbImFuZ3VsYXIiLCJtb2R1bGUiLCJkaXJlY3RpdmUiLCJuYW1lIiwicmVzdHJpY3QiLCJzY29wZSIsImxvY2tlZCIsInJlcGxhY2UiLCJ0cmFuc2NsdWRlIiwidGVtcGxhdGUiLCJsaW5rIiwiJGVsZW1lbnQiLCIkYXR0cmlidXRlcyIsIiRzY29wZSIsIiR3YXRjaCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImhlYWRpbmciLCJpY29uIiwic3ZnSWNvbiIsImFycm93IiwiY29sbGFwc2VkIiwiY29udHJvbGxlciIsImNvbnRyb2xsZXJBcyIsImJpbmRUb0NvbnRyb2xsZXIiLCJpc0RlZmluZWQiLCJjaGFuZ2VTdGF0ZSIsIm5nQ2xpY2siLCJ1aVNyZWYiLCJ1aVNyZWZBY3RpdmUiLCJhY3RpdmUiLCJocmVmIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQTs7QUFBQTs7QUFJQSxLQUFJLGdCQUFnQix1QkFBdUI7O0FBSDNDOztBQU9BLEtBQUkscUJBQXFCLHVCQUF1Qjs7QUFOaEQ7O0FBVUEsS0FBSSx1QkFBdUIsdUJBQXVCOztBQVRsRDs7QUFhQSxLQUFJLHNCQUFzQix1QkFBdUI7O0FBRWpELFVBQVMsdUJBQXVCLEtBQUssRUFBRSxPQUFPLE9BQU8sSUFBSSxhQUFhLE1BQU0sRUFBRSxTQUFTOztBQWJ2RixFQUFDLFVBQUNBLFNBQVk7O0dBRVpBLFFBQ0dDLE9BQU8sdUJBQXVCLENBQzdCLGVBRURDLFVBQVUsc0JBQVlDLE1BQU0sc0JBQVlELFdBQ3hDQSxVQUFVLDJCQUFpQkMsTUFBTSwyQkFBaUJELFdBQ2xEQSxVQUFVLDZCQUFtQkMsTUFBTSw2QkFBbUJELFdBQ3REQSxVQUFVLDRCQUFrQkMsTUFBTSw0QkFBa0JEO0lBRXRERixTOzs7Ozs7QUNoQkg7O0FBRUEsUUFBTyxlQUFlLFNBQVMsY0FBYztHQUMzQyxPQUFPOzs7QUFIVDs7QUFRQSxLQUFJLGFBQWEsdUJBQXVCOztBQVB4Qzs7QUFXQSxLQUFJLFNBQVMsdUJBQXVCOztBQUVwQyxVQUFTLHVCQUF1QixLQUFLLEVBQUUsT0FBTyxPQUFPLElBQUksYUFBYSxNQUFNLEVBQUUs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UTs7S0FFVnpCLFlBQVk7S0FDWkM7S0FDQWM7S0FDQUMsY0FBYztLQUNkQyxrQkFBa0I7Ozs7QUFpQnRCLFNBQVEsVUFaTztHQUNidEIsTUFBTTtHQUNORDs7Ozs7OztBQzFCRjs7QUFFQSxRQUFPLGVBQWUsU0FBUyxjQUFjO0dBQzNDLE9BQU87OztBQUdULFNBQVEsVUFOTyxZQUFXLEc7Ozs7OztBQ0ExQjs7QUFFQSxRQUFPLGVBQWUsU0FBUyxjQUFjO0dBQzNDLE9BQU87OztBQUdULFNBQVEsVUFOTyxZQUFXOztHQUV4QiIsImZpbGUiOiJhbmd1bGFyLW1hdGVyaWFsLWFjY29yZGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGM4MzhiNDYyZjUxMjg0N2Q3NThmIiwiaW1wb3J0IG1kQWNjb3JkaW9uIGZyb20gJy4vc2NyaXB0cy9tZEFjY29yZGlvbic7XG5pbXBvcnQgbWRBY2NvcmRpb25Hcm91cCBmcm9tICcuL3NjcmlwdHMvbWRBY2NvcmRpb25Hcm91cCc7XG5pbXBvcnQgbWRBY2NvcmRpb25Db250ZW50IGZyb20gJy4vc2NyaXB0cy9tZEFjY29yZGlvbkNvbnRlbnQnO1xuaW1wb3J0IG1kQWNjb3JkaW9uQnV0dG9uIGZyb20gJy4vc2NyaXB0cy9tZEFjY29yZGlvbkJ1dHRvbic7XG5cbigoYW5ndWxhcikgPT4ge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCduZ01hdGVyaWFsQWNjb3JkaW9uJywgW1xuICAgICAgJ25nTWF0ZXJpYWwnXG4gICAgXSlcbiAgICAuZGlyZWN0aXZlKG1kQWNjb3JkaW9uLm5hbWUsIG1kQWNjb3JkaW9uLmRpcmVjdGl2ZSlcbiAgICAuZGlyZWN0aXZlKG1kQWNjb3JkaW9uR3JvdXAubmFtZSwgbWRBY2NvcmRpb25Hcm91cC5kaXJlY3RpdmUpXG4gICAgLmRpcmVjdGl2ZShtZEFjY29yZGlvbkNvbnRlbnQubmFtZSwgbWRBY2NvcmRpb25Db250ZW50LmRpcmVjdGl2ZSlcbiAgICAuZGlyZWN0aXZlKG1kQWNjb3JkaW9uQnV0dG9uLm5hbWUsIG1kQWNjb3JkaW9uQnV0dG9uLmRpcmVjdGl2ZSk7XG5cbn0pKGFuZ3VsYXIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21haW4uanMiLCJpbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi90ZW1wbGF0ZSc7XG5pbXBvcnQgbGluayBmcm9tICcuL2xpbmsnO1xuXG5sZXQgZGlyZWN0aXZlID0gKCkgPT4ge1xuXG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICBzY29wZToge1xuICAgICAgbG9ja2VkOiAnQD9tZExvY2tlZCdcbiAgICB9LFxuICAgIHJlcGxhY2U6IHRydWUsXG4gICAgdHJhbnNjbHVkZTogdHJ1ZSxcbiAgICB0ZW1wbGF0ZSxcbiAgICBsaW5rXG4gIH07XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ21kQWNjb3JkaW9uJyxcbiAgZGlyZWN0aXZlXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvbWRBY2NvcmRpb24vaW5kZXguanMiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigkZWxlbWVudCwgJGF0dHJpYnV0ZXMpIHtcblxuICBsZXQgbG9ja2VkID0gJGF0dHJpYnV0ZXMubG9ja2VkICYmICdtZC1hY2NvcmRpb24tbG9ja2VkJztcblxuICByZXR1cm4gYDxkaXYgY2xhc3M9XCJtZC1hY2NvcmRpb24gJHsgbG9ja2VkIH1cIiBuZy10cmFuc2NsdWRlPjwvZGl2PmA7XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHRzL21kQWNjb3JkaW9uL3RlbXBsYXRlLmpzIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oJHNjb3BlLCAkZWxlbWVudCwgJGF0dHJpYnV0ZXMpIHtcblxuICAkc2NvcGUuJHdhdGNoKGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAkYXR0cmlidXRlcy5sb2NrZWQ7XG4gIH0sIGZ1bmN0aW9uKGxvY2tlZCkge1xuICAgIGlmIChsb2NrZWQpIHtcbiAgICAgICRlbGVtZW50WzBdLmNsYXNzTGlzdC5hZGQoJ21kLWFjY29yZGlvbi1sb2NrZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJGVsZW1lbnRbMF0uY2xhc3NMaXN0LnJlbW92ZSgnbWQtYWNjb3JkaW9uLWxvY2tlZCcpO1xuICAgIH1cbiAgfSk7XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHRzL21kQWNjb3JkaW9uL2xpbmsuanMiLCJpbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi90ZW1wbGF0ZSc7XG5cbmxldCBkaXJlY3RpdmUgPSAoKSA9PiB7XG5cbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHJlcGxhY2U6IHRydWUsXG4gICAgdHJhbnNjbHVkZTogdHJ1ZSxcbiAgICB0ZW1wbGF0ZVxuICB9O1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZEFjY29yZGlvbkdyb3VwJyxcbiAgZGlyZWN0aXZlXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvbWRBY2NvcmRpb25Hcm91cC9pbmRleC5qcyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuXG4gIHJldHVybiAnPGRpdiBjbGFzcz1cIm1kLWFjY29yZGlvbi1ncm91cFwiIGZsZXggbGF5b3V0PVwiY29sdW1uXCIgbGF5b3V0LWFsaWduPVwic3RhcnQgc3RhcnRcIiBuZy10cmFuc2NsdWRlPjwvZGl2Pic7XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHRzL21kQWNjb3JkaW9uR3JvdXAvdGVtcGxhdGUuanMiLCJpbXBvcnQgY29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXInO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGUnO1xuXG5sZXQgZGlyZWN0aXZlID0gKCkgPT4ge1xuXG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICBzY29wZToge1xuICAgICAgaGVhZGluZzogJ0BtZEhlYWRpbmcnLFxuICAgICAgaWNvbjogJ0A/bWRJY29uJyxcbiAgICAgIHN2Z0ljb246ICdAP21kU3ZnSWNvbicsXG4gICAgICBhcnJvdzogJ0A/bWRBcnJvdycsXG4gICAgICBjb2xsYXBzZWQ6ICc9P21kQWNjb3JkaW9uQ29sbGFwc2VkJ1xuICAgIH0sXG4gICAgcmVwbGFjZTogdHJ1ZSxcbiAgICB0cmFuc2NsdWRlOiB0cnVlLFxuICAgIHRlbXBsYXRlLFxuICAgIGNvbnRyb2xsZXIsXG4gICAgY29udHJvbGxlckFzOiAnJG1kQWNjb3JkaW9uQ29udGVudCcsXG4gICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZVxuICB9O1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZEFjY29yZGlvbkNvbnRlbnQnLFxuICBkaXJlY3RpdmVcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9tZEFjY29yZGlvbkNvbnRlbnQvaW5kZXguanMiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcblxuICB0aGlzLmNvbGxhcHNlZCA9IGFuZ3VsYXIuaXNEZWZpbmVkKHRoaXMuY29sbGFwc2VkKSA/IHRoaXMuY29sbGFwc2VkIDogdHJ1ZTtcblxuICB0aGlzLmNoYW5nZVN0YXRlID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5jb2xsYXBzZWQgPSAhdGhpcy5jb2xsYXBzZWQ7XG4gIH07XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHRzL21kQWNjb3JkaW9uQ29udGVudC9jb250cm9sbGVyLmpzIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG5cbiAgcmV0dXJuIGBcbiAgICA8ZGl2IGNsYXNzPVwibWQtYWNjb3JkaW9uLWNvbnRlbnRcIiBsYXlvdXQ9XCJjb2x1bW5cIj5cbiAgICAgIDxtZC1idXR0b24gY2xhc3M9XCJtZC1hY2NvcmRpb24tdG9nZ2xlXCIgbmctaWY9XCIkbWRBY2NvcmRpb25Db250ZW50LmhlYWRpbmdcIiBuZy1jbGljaz1cIiRtZEFjY29yZGlvbkNvbnRlbnQuY2hhbmdlU3RhdGUoKTtcIiBuZy1jbGFzcz1cInsgJ21kLWFjdGl2ZSc6ICEkbWRBY2NvcmRpb25Db250ZW50LmNvbGxhcHNlZCB9XCI+XG4gICAgICAgIDxkaXYgbGF5b3V0PVwicm93XCI+XG4gICAgICAgICAgPG1kLWljb24gbmctaWY9XCIkbWRBY2NvcmRpb25Db250ZW50LnN2Z0ljb25cIiBtZC1zdmctaWNvbj1cIiRtZEFjY29yZGlvbkNvbnRlbnQuc3ZnSWNvblwiPjwvbWQtaWNvbj5cbiAgICAgICAgICA8bWQtaWNvbiBuZy1pZj1cIiRtZEFjY29yZGlvbkNvbnRlbnQuaWNvblwiPnt7ICRtZEFjY29yZGlvbkNvbnRlbnQuaWNvbiB9fTwvbWQtaWNvbj5cbiAgICAgICAgICA8c3BhbiBmbGV4Pnt7ICRtZEFjY29yZGlvbkNvbnRlbnQuaGVhZGluZyB9fTwvc3Bhbj5cbiAgICAgICAgICA8aSBuZy1pZj1cIiRtZEFjY29yZGlvbkNvbnRlbnQuYXJyb3dcIiBjbGFzcz1cImZhIGZhLWNoZXZyb24tZG93biBhY2NvcmRpb24tYXJyb3dcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tZC1idXR0b24+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJtZC1hY2NvcmRpb24td3JhcHBlclwiIG1kLWFjY29yZGlvbi1kaXNhYmxlLWFuaW1hdGUgbmctY2xhc3M9XCJ7ICdtZC1hY3RpdmUnOiAhJG1kQWNjb3JkaW9uQ29udGVudC5jb2xsYXBzZWQsICdtZC1hY2NvcmRpb24td3JhcHBlci1pY29ucyc6ICAkbWRBY2NvcmRpb25Db250ZW50Lmljb24gfVwiIGxheW91dD1cImNvbHVtblwiIG5nLXRyYW5zY2x1ZGU+PC9kaXY+XG4gICAgPC9kaXY+XG4gIGA7XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHRzL21kQWNjb3JkaW9uQ29udGVudC90ZW1wbGF0ZS5qcyIsImltcG9ydCBjb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcic7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi90ZW1wbGF0ZSc7XG5cbmxldCBkaXJlY3RpdmUgPSAoKSA9PiB7XG5cbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHNjb3BlOiB7XG4gICAgICBuZ0NsaWNrOiAnQD8nLFxuICAgICAgdWlTcmVmOiAnQD8nLFxuICAgICAgdWlTcmVmQWN0aXZlOiAnQD8nLFxuICAgICAgYWN0aXZlOiAnPD9tZEFjdGl2ZScsXG4gICAgICBocmVmOiAnQD8nLFxuICAgICAgdGFyZ2V0OiAnQD8nXG4gICAgfSxcbiAgICB0cmFuc2NsdWRlOiB0cnVlLFxuICAgIHRlbXBsYXRlLFxuICAgIGNvbnRyb2xsZXIsXG4gICAgY29udHJvbGxlckFzOiAnJG1kQWNjb3JkaW9uQnV0dG9uJyxcbiAgICBiaW5kVG9Db250cm9sbGVyOiB0cnVlXG4gIH07XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ21kQWNjb3JkaW9uQnV0dG9uJyxcbiAgZGlyZWN0aXZlXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvbWRBY2NvcmRpb25CdXR0b24vaW5kZXguanMiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvbWRBY2NvcmRpb25CdXR0b24vY29udHJvbGxlci5qcyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuXG4gIHJldHVybiBgXG4gICAgPG1kLWJ1dHRvblxuICAgICAgY2xhc3M9XCJtZC1hY2NvcmRpb24tYnV0dG9uXCJcbiAgICAgIG5nLWNsYXNzPVwieydtZC1hY3RpdmUnOiEhJG1kQWNjb3JkaW9uQnV0dG9uLmFjdGl2ZX1cIlxuICAgICAgbGF5b3V0PVwiY29sdW1uXCJcbiAgICAgIG5nLWF0dHItaHJlZj1cInt7ICRtZEFjY29yZGlvbkJ1dHRvbi5ocmVmIH19XCJcbiAgICAgIG5nLWF0dHItdGFyZ2V0PVwie3sgJG1kQWNjb3JkaW9uQnV0dG9uLnRhcmdldCB9fVwiPlxuICAgICAgPGRpdiBsYXlvdXQ9XCJyb3dcIiBsYXlvdXQtZmlsbCBsYXlvdXQtYWxpZ249XCJzdGFydCBjZW50ZXJcIiBuZy10cmFuc2NsdWRlPjwvZGl2PlxuICAgIDwvbWQtYnV0dG9uPlxuICBgO1xuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9tZEFjY29yZGlvbkJ1dHRvbi90ZW1wbGF0ZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=