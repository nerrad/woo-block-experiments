(window["webpackJsonp_woo_block_experiments"] = window["webpackJsonp_woo_block_experiments"] || []).push([["style-index"],{

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp_woo_block_experiments"] = window["webpackJsonp_woo_block_experiments"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","style-index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _extends.apply(this, arguments);
}

module.exports = _extends;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./src/block-components/container.js":
/*!*******************************************!*\
  !*** ./src/block-components/container.js ***!
  \*******************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */

var Container = function Container(_ref) {
  var _ref$shouldUseBlockPr = _ref.shouldUseBlockProps,
      shouldUseBlockProps = _ref$shouldUseBlockPr === void 0 ? true : _ref$shouldUseBlockPr,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(_ref, ["shouldUseBlockProps"]);

  var blockProps = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["useBlockProps"])(props);
  var containerProps = shouldUseBlockProps ? _objectSpread({}, blockProps) : _objectSpread({}, props);

  var className = containerProps.className,
      restProps = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(containerProps, ["className"]);

  className = "".concat(className, " wc-exp-block");
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    className: className
  }, restProps));
};

/***/ }),

/***/ "./src/block-components/index.js":
/*!***************************************!*\
  !*** ./src/block-components/index.js ***!
  \***************************************/
/*! exports provided: Container, TextInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./container */ "./src/block-components/container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return _container__WEBPACK_IMPORTED_MODULE_0__["Container"]; });

/* harmony import */ var _text_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text-input */ "./src/block-components/text-input.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextInput", function() { return _text_input__WEBPACK_IMPORTED_MODULE_1__["TextInput"]; });




/***/ }),

/***/ "./src/block-components/text-input.js":
/*!********************************************!*\
  !*** ./src/block-components/text-input.js ***!
  \********************************************/
/*! exports provided: TextInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextInput", function() { return TextInput; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var TextInput = function TextInput(_ref) {
  var label = _ref.label,
      name = _ref.name;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", {
    htmlFor: "text-input-".concat(name)
  }, label), ":", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
    type: "text",
    disabled: true,
    id: "text-input-".concat(name)
  }));
};

/***/ }),

/***/ "./src/blocks/address/billing-address-block.js":
/*!*****************************************************!*\
  !*** ./src/blocks/address/billing-address-block.js ***!
  \*****************************************************/
/*! exports provided: BillingAddressBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingAddressBlock", function() { return BillingAddressBlock; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _block_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../block-components */ "./src/block-components/index.js");




/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


var ALLOWED_BLOCKS = ['wcxp/text-field'];
var TEMPLATE = [['wcxp/text-field', {}]];
var BillingAddressBlock = function BillingAddressBlock(_ref) {
  var children = _ref.children,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["children"]);

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_block_components__WEBPACK_IMPORTED_MODULE_4__["Container"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    className: "billing-address-block"
  }, props), children, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("p", null, "This block is configured with a static text input that is not a block and an inner block area that allows for multiple insertion/repositioning of a text input block."), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_block_components__WEBPACK_IMPORTED_MODULE_4__["TextInput"], {
    label: "Example Non-editable Field",
    name: "sample-text-input"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"], {
    allowedBlocks: ALLOWED_BLOCKS,
    template: TEMPLATE,
    templateLock: false
  }));
};

/***/ }),

/***/ "./src/blocks/address/contact-information-block.js":
/*!*********************************************************!*\
  !*** ./src/blocks/address/contact-information-block.js ***!
  \*********************************************************/
/*! exports provided: ContactInformationBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactInformationBlock", function() { return ContactInformationBlock; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _block_components_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../block-components/container */ "./src/block-components/container.js");



/**
 * Internal dependencies
 */

var ContactInformationBlock = function ContactInformationBlock(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_block_components_container__WEBPACK_IMPORTED_MODULE_2__["Container"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    className: "billing-address-block"
  }, props));
};

/***/ }),

/***/ "./src/blocks/address/index.js":
/*!*************************************!*\
  !*** ./src/blocks/address/index.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _billing_address_block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./billing-address-block */ "./src/blocks/address/billing-address-block.js");
/* harmony import */ var _shipping_address_block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shipping-address-block */ "./src/blocks/address/shipping-address-block.js");
/* harmony import */ var _contact_information_block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact-information-block */ "./src/blocks/address/contact-information-block.js");


/**
 * External dependencies
 */

/**
 * Internal dependencies
 */




var contactInformationSettings = {
  title: 'Contact Information Block',
  category: 'woocommerce',
  description: 'Contact Information for the checkout block',
  supports: {
    align: ['wide', 'full'],
    html: false,
    multiple: false
  },
  attributes: {},
  edit: function edit() {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_contact_information_block__WEBPACK_IMPORTED_MODULE_4__["ContactInformationBlock"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", null, "Contact Information block"));
  },
  //Save the props to post content.
  save: function save() {
    return null;
  }
};
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('wcxp/contact-information-block', contactInformationSettings);
var billingSettings = {
  title: 'Billing Address Block',
  category: 'woocommerce',
  description: 'Billing address fields for the checkout block',
  supports: {
    align: ['wide', 'full'],
    html: false,
    multiple: false
  },
  attributes: {},
  edit: function edit() {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_billing_address_block__WEBPACK_IMPORTED_MODULE_2__["BillingAddressBlock"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", null, "Billing address block"));
  },
  //Save the props to post content.
  save: function save() {
    return null;
  }
};
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('wcxp/billing-address-block', billingSettings);
var shippingSettings = {
  title: 'Shipping Address Block',
  category: 'woocommerce',
  description: 'Shipping address fields for the checkout block',
  supports: {
    align: ['wide', 'full'],
    html: false,
    multiple: false
  },
  attributes: {},
  edit: function edit() {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_shipping_address_block__WEBPACK_IMPORTED_MODULE_3__["ShippingAddressBlock"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", null, "Shipping address block"));
  },
  //Save the props to post content.
  save: function save() {
    return null;
  }
};
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('wcxp/shipping-address-block', shippingSettings);

/***/ }),

/***/ "./src/blocks/address/shipping-address-block.js":
/*!******************************************************!*\
  !*** ./src/blocks/address/shipping-address-block.js ***!
  \******************************************************/
/*! exports provided: ShippingAddressBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingAddressBlock", function() { return ShippingAddressBlock; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _block_components_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../block-components/container */ "./src/block-components/container.js");



/**
 * Internal dependencies
 */

var ShippingAddressBlock = function ShippingAddressBlock(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_block_components_container__WEBPACK_IMPORTED_MODULE_2__["Container"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    className: "columns-block"
  }, props));
};

/***/ }),

/***/ "./src/blocks/checkout-actions/checkout-actions-block.js":
/*!***************************************************************!*\
  !*** ./src/blocks/checkout-actions/checkout-actions-block.js ***!
  \***************************************************************/
/*! exports provided: CheckoutActionsBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutActionsBlock", function() { return CheckoutActionsBlock; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _block_components_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../block-components/container */ "./src/block-components/container.js");


/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


var CheckoutActionsBlock = function CheckoutActionsBlock(_ref) {
  var children = _ref.children;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_components_container__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    className: "checkout-actions-block"
  }, children, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "The inner blocks area is configured here so inserting new blocks is disabled, but users can still reposition the blocks."), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"], {
    allowedBlocks: ['wcxp/return-to-cart-block', 'wcxp/checkout-submit-block', 'core/paragraph'],
    template: [['wcxp/return-to-cart-block', {}], ['wcxp/checkout-submit-block', {}]],
    templateLock: 'insert',
    orientation: "horizontal"
  }));
};

/***/ }),

/***/ "./src/blocks/checkout-actions/checkout-submit-block.js":
/*!**************************************************************!*\
  !*** ./src/blocks/checkout-actions/checkout-submit-block.js ***!
  \**************************************************************/
/*! exports provided: CheckoutSubmitBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutSubmitBlock", function() { return CheckoutSubmitBlock; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _block_components_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../block-components/container */ "./src/block-components/container.js");



/**
 * Internal dependencies
 */

var CheckoutSubmitBlock = function CheckoutSubmitBlock(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_block_components_container__WEBPACK_IMPORTED_MODULE_2__["Container"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    className: "checkout-submit-block"
  }, props));
};

/***/ }),

/***/ "./src/blocks/checkout-actions/index.js":
/*!**********************************************!*\
  !*** ./src/blocks/checkout-actions/index.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _checkout_actions_block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkout-actions-block */ "./src/blocks/checkout-actions/checkout-actions-block.js");
/* harmony import */ var _checkout_submit_block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkout-submit-block */ "./src/blocks/checkout-actions/checkout-submit-block.js");
/* harmony import */ var _return_to_cart_block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./return-to-cart-block */ "./src/blocks/checkout-actions/return-to-cart-block.js");


/**
 * External dependencies
 */

/**
 * Internal dependencies
 */




var checkoutSubmitSettings = {
  title: 'Checkout Submit Block',
  category: 'woocommerce',
  description: 'Checkout Submit for the checkout block',
  supports: {
    align: ['wide', 'full'],
    html: false,
    multiple: false
  },
  attributes: {},
  edit: function edit() {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_checkout_submit_block__WEBPACK_IMPORTED_MODULE_3__["CheckoutSubmitBlock"], null, "Checkout Submit block");
  },
  //Save the props to post content.
  save: function save() {
    return null;
  }
};
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('wcxp/checkout-submit-block', checkoutSubmitSettings);
var returnToCartSettings = {
  title: 'Return To Cart Block',
  category: 'woocommerce',
  description: 'Return to Cart for the checkout block',
  supports: {
    align: ['wide', 'full'],
    html: false,
    multiple: false
  },
  attributes: {},
  edit: function edit() {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_return_to_cart_block__WEBPACK_IMPORTED_MODULE_4__["ReturnToCartBlock"], null, "Return to Cart block");
  },
  //Save the props to post content.
  save: function save() {
    return null;
  }
};
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('wcxp/return-to-cart-block', returnToCartSettings);
var checkoutActionsSettings = {
  title: 'Checkout Actions Block',
  category: 'woocommerce',
  description: 'Checkout Actions for the checkout block',
  supports: {
    align: ['wide', 'full'],
    html: false,
    multiple: false
  },
  attributes: {},
  edit: function edit() {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_checkout_actions_block__WEBPACK_IMPORTED_MODULE_2__["CheckoutActionsBlock"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", null, "Checkout actions block"));
  },
  //Save the props to post content.
  save: function save() {
    return null;
  }
};
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('wcxp/checkout-actions-block', checkoutActionsSettings);

/***/ }),

/***/ "./src/blocks/checkout-actions/return-to-cart-block.js":
/*!*************************************************************!*\
  !*** ./src/blocks/checkout-actions/return-to-cart-block.js ***!
  \*************************************************************/
/*! exports provided: ReturnToCartBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnToCartBlock", function() { return ReturnToCartBlock; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _block_components_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../block-components/container */ "./src/block-components/container.js");



/**
 * Internal dependencies
 */

var ReturnToCartBlock = function ReturnToCartBlock(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_block_components_container__WEBPACK_IMPORTED_MODULE_2__["Container"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    className: "return-to-cart-block"
  }, props));
};

/***/ }),

/***/ "./src/blocks/checkout/index.js":
/*!**************************************!*\
  !*** ./src/blocks/checkout/index.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _order_fields_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-fields-block */ "./src/blocks/checkout/order-fields-block.js");
/* harmony import */ var _order_totals_block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-totals-block */ "./src/blocks/checkout/order-totals-block.js");
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



var orderFieldsSettings = {
  title: 'Order fields Block',
  category: 'woocommerce',
  description: 'Wrapper block for order fields',
  supports: {
    align: ['wide', 'full'],
    html: false,
    multiple: false
  },
  attributes: {},
  edit: _order_fields_block__WEBPACK_IMPORTED_MODULE_1__["OrderFieldsBlock"],
  //Save the props to post content.
  save: function save() {
    return null;
  }
};
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])('wcxp/order-fields-block', orderFieldsSettings);
var orderTotalsSettings = {
  title: 'Order Totals Block',
  category: 'woocommerce',
  description: 'Wrapper block for order totals',
  supports: {
    align: ['wide', 'full'],
    html: false,
    multiple: false
  },
  attributes: {},
  edit: _order_totals_block__WEBPACK_IMPORTED_MODULE_2__["OrderTotalsBlock"],
  //Save the props to post content.
  save: function save() {
    return null;
  }
};
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])('wcxp/order-totals-block', orderTotalsSettings);

/***/ }),

/***/ "./src/blocks/checkout/order-fields-block.js":
/*!***************************************************!*\
  !*** ./src/blocks/checkout/order-fields-block.js ***!
  \***************************************************/
/*! exports provided: OrderFieldsBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderFieldsBlock", function() { return OrderFieldsBlock; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _columns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../columns */ "./src/blocks/columns/index.js");


/**
 * Internal dependencies
 */

var ALLOWED_BLOCKS = ['wcxp/express-payments-block', 'wcxp/contact-information-block', 'wcxp/shipping-address-block', 'wcxp/billing-address-block', 'wcxp/payment-methods-block', 'wcxp/order-note-checkbox-block', 'wcxp/checkout-actions-block'];
var TEMPLATE = [['wcxp/express-payments-block', {}], ['wcxp/contact-information-block', {}], ['wcxp/shipping-address-block', {}], ['wcxp/billing-address-block', {}], ['wcxp/payment-methods-block', {}], ['wcxp/order-note-checkbox-block', {}], ['wcxp/checkout-actions-block', {}]];
var OrderFieldsBlock = function OrderFieldsBlock() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_columns__WEBPACK_IMPORTED_MODULE_1__["Column"], {
    allowedBlocks: ALLOWED_BLOCKS,
    template: TEMPLATE,
    templateLock: "all"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", null, "Order Fields/Actions"));
};

/***/ }),

/***/ "./src/blocks/checkout/order-totals-block.js":
/*!***************************************************!*\
  !*** ./src/blocks/checkout/order-totals-block.js ***!
  \***************************************************/
/*! exports provided: OrderTotalsBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderTotalsBlock", function() { return OrderTotalsBlock; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _columns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../columns */ "./src/blocks/columns/index.js");


/**
 * Internal dependencies
 */

var ALLOWED_BLOCKS = ['wcxp/totals-block'];
var TEMPLATE = [['wcxp/totals-block', {}]];
var OrderTotalsBlock = function OrderTotalsBlock() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_columns__WEBPACK_IMPORTED_MODULE_1__["Column"], {
    allowedBlocks: ALLOWED_BLOCKS,
    template: TEMPLATE,
    templateLock: "all"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", null, "Order Totals"));
};

/***/ }),

/***/ "./src/blocks/columns/column-block.js":
/*!********************************************!*\
  !*** ./src/blocks/columns/column-block.js ***!
  \********************************************/
/*! exports provided: Column */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Column", function() { return Column; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _block_components_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../block-components/container */ "./src/block-components/container.js");


/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


var Column = function Column(_ref) {
  var _ref$allowedBlocks = _ref.allowedBlocks,
      allowedBlocks = _ref$allowedBlocks === void 0 ? [] : _ref$allowedBlocks,
      _ref$template = _ref.template,
      template = _ref$template === void 0 ? [] : _ref$template,
      _ref$templateLock = _ref.templateLock,
      templateLock = _ref$templateLock === void 0 ? 'all' : _ref$templateLock,
      _ref$isEditor = _ref.isEditor,
      isEditor = _ref$isEditor === void 0 ? true : _ref$isEditor,
      children = _ref.children;
  var content = isEditor ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"], {
    allowedBlocks: allowedBlocks,
    template: template,
    templateLock: templateLock
  }) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"].Content, null);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_components_container__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    className: "column-block",
    shouldUseBlockProps: false
  }, children, content);
};

/***/ }),

/***/ "./src/blocks/columns/columns-block.js":
/*!*********************************************!*\
  !*** ./src/blocks/columns/columns-block.js ***!
  \*********************************************/
/*! exports provided: Columns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Columns", function() { return Columns; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _block_components_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../block-components/container */ "./src/block-components/container.js");



/**
 * Internal dependencies
 */

var Columns = function Columns(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_block_components_container__WEBPACK_IMPORTED_MODULE_2__["Container"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    className: "columns-block"
  }, props));
};

/***/ }),

/***/ "./src/blocks/columns/index.js":
/*!*************************************!*\
  !*** ./src/blocks/columns/index.js ***!
  \*************************************/
/*! exports provided: Column, Columns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _column_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./column-block */ "./src/blocks/columns/column-block.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Column", function() { return _column_block__WEBPACK_IMPORTED_MODULE_0__["Column"]; });

/* harmony import */ var _columns_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./columns-block */ "./src/blocks/columns/columns-block.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Columns", function() { return _columns_block__WEBPACK_IMPORTED_MODULE_1__["Columns"]; });




/***/ }),

/***/ "./src/blocks/field-blocks/index.js":
/*!******************************************!*\
  !*** ./src/blocks/field-blocks/index.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _order_note_checkbox_block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-note-checkbox-block */ "./src/blocks/field-blocks/order-note-checkbox-block.js");
/* harmony import */ var _text_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./text-field */ "./src/blocks/field-blocks/text-field.js");


/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



var orderNoteCheckboxSettings = {
  title: 'Order note checkbox Block',
  category: 'woocommerce',
  description: 'Order Note Checkbox for the checkout block',
  supports: {
    align: ['wide', 'full'],
    html: false,
    multiple: false
  },
  attributes: {},
  edit: function edit() {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_order_note_checkbox_block__WEBPACK_IMPORTED_MODULE_2__["OrderNoteCheckboxBlock"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", null, "Order note checkbox block"));
  },
  //Save the props to post content.
  save: function save() {
    return null;
  }
};
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('wcxp/order-note-checkbox-block', orderNoteCheckboxSettings);
var textFieldSettings = {
  title: 'Text Field Block',
  category: 'woocommerce',
  description: 'Text Field block',
  supports: {
    align: ['wide', 'full'],
    html: false
  },
  attributes: {},
  edit: function edit() {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_text_field__WEBPACK_IMPORTED_MODULE_3__["TextField"], null);
  },
  //Save the props to post content.
  save: function save() {
    return null;
  }
};
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('wcxp/text-field', textFieldSettings);

/***/ }),

/***/ "./src/blocks/field-blocks/order-note-checkbox-block.js":
/*!**************************************************************!*\
  !*** ./src/blocks/field-blocks/order-note-checkbox-block.js ***!
  \**************************************************************/
/*! exports provided: OrderNoteCheckboxBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderNoteCheckboxBlock", function() { return OrderNoteCheckboxBlock; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _block_components_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../block-components/container */ "./src/block-components/container.js");



/**
 * Internal dependencies
 */

var OrderNoteCheckboxBlock = function OrderNoteCheckboxBlock(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_block_components_container__WEBPACK_IMPORTED_MODULE_2__["Container"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    className: "order-note-checkbox-block"
  }, props));
};

/***/ }),

/***/ "./src/blocks/field-blocks/text-field.js":
/*!***********************************************!*\
  !*** ./src/blocks/field-blocks/text-field.js ***!
  \***********************************************/
/*! exports provided: TextField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextField", function() { return TextField; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _block_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../block-components */ "./src/block-components/index.js");



/**
 * Internal dependencies
 */

var TextField = function TextField(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_block_components__WEBPACK_IMPORTED_MODULE_2__["Container"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    className: "text-field-block"
  }, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_block_components__WEBPACK_IMPORTED_MODULE_2__["TextInput"], {
    label: "Another Input",
    name: "another-input"
  }));
};

/***/ }),

/***/ "./src/blocks/index.js":
/*!*****************************!*\
  !*** ./src/blocks/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _address__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./address */ "./src/blocks/address/index.js");
/* harmony import */ var _checkout_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkout-actions */ "./src/blocks/checkout-actions/index.js");
/* harmony import */ var _field_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./field-blocks */ "./src/blocks/field-blocks/index.js");
/* harmony import */ var _payments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payments */ "./src/blocks/payments/index.js");
/* harmony import */ var _totals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./totals */ "./src/blocks/totals/index.js");
/* harmony import */ var _checkout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkout */ "./src/blocks/checkout/index.js");
/**
 * Internal dependencies
 */





 // above registers all the blocks

/***/ }),

/***/ "./src/blocks/main.js":
/*!****************************!*\
  !*** ./src/blocks/main.js ***!
  \****************************/
/*! exports provided: Edit, Save */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Edit", function() { return Edit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Save", function() { return Save; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _columns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./columns */ "./src/blocks/columns/index.js");

// export const Main = ( props ) => {
// 	return (
// 		<Columns>
// 			<Column>
// 				<ExpressPaymentsBlock />
// 					<ContactInformationBlock />
// 					<ShippingAddressBlock />
// 					<BillingAddressBlock />
// 					<ShippingOptionsBlock />
// 					<PaymentMethodsBlock />
// 				<OrderNoteCheckboxBlock />
// 				<CheckoutActionsBlock>
// 					<ReturnToCartBlock />
// 					<CheckoutSubmitBlock />
// 				</CheckoutActionsBlock>
// 			</Column>
// 			<Column>
// 				<TotalsBlock />
// 			</Column>
// 		</Columns>
// 	);
// };

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


var ALLOWED_BLOCKS = ['wcxp/order-fields-block', 'wcxp/order-totals-block'];
var TEMPLATE = [['wcxp/order-fields-block', {}], ['wcxp/order-totals-block', {}]];

var Main = function Main() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InspectorControls"], null, "Main Block controls"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_columns__WEBPACK_IMPORTED_MODULE_2__["Columns"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"], {
    allowedBlocks: ALLOWED_BLOCKS,
    template: TEMPLATE,
    templateLock: "all"
  })));
};

var Edit = function Edit() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Main, {
    isEditor: true
  });
};
var Save = function Save() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Main, {
    isEditor: false
  });
};

/***/ }),

/***/ "./src/blocks/payments/express-payments-block.js":
/*!*******************************************************!*\
  !*** ./src/blocks/payments/express-payments-block.js ***!
  \*******************************************************/
/*! exports provided: ExpressPaymentsBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpressPaymentsBlock", function() { return ExpressPaymentsBlock; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _block_components_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../block-components/container */ "./src/block-components/container.js");




/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


var ALLOWED_BLOCKS = ['core/buttons'];
var TEMPLATE = [['core/buttons', {}]];
var ExpressPaymentsBlock = function ExpressPaymentsBlock(_ref) {
  var children = _ref.children,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["children"]);

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_block_components_container__WEBPACK_IMPORTED_MODULE_4__["Container"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    className: "express-payments-block"
  }, props), children, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("p", null, "This block is configured with inner blocks that allow insertion of multiple buttons blocks (which in turn allow for inserting multiple buttons)."), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("p", null, "We definitely won't have something ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("em", null, "exactly"), " like this in the Express Payment methods area but it does illustrate how we could potentially dynamically wrap payment method buttons here as blocks and thus allow for payment methods to have in context settings in this area."), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"], {
    allowedBlocks: ALLOWED_BLOCKS,
    template: TEMPLATE,
    templateLock: false
  }));
};

/***/ }),

/***/ "./src/blocks/payments/index.js":
/*!**************************************!*\
  !*** ./src/blocks/payments/index.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _express_payments_block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./express-payments-block */ "./src/blocks/payments/express-payments-block.js");
/* harmony import */ var _payments_block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payments-block */ "./src/blocks/payments/payments-block.js");


/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



var expressPaymentsSettings = {
  title: 'Express Payments Block',
  category: 'woocommerce',
  description: 'Express Payments Block for the checkout block',
  supports: {
    align: ['wide', 'full'],
    html: false,
    multiple: false
  },
  attributes: {},
  edit: function edit() {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_express_payments_block__WEBPACK_IMPORTED_MODULE_2__["ExpressPaymentsBlock"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", null, "Express payments block"));
  },
  //Save the props to post content.
  save: function save() {
    return null;
  }
};
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('wcxp/express-payments-block', expressPaymentsSettings);
var paymentsSettings = {
  title: 'Payment Methods Block',
  category: 'woocommerce',
  description: 'Payments Block for the checkout block',
  supports: {
    align: ['wide', 'full'],
    html: false,
    multiple: false
  },
  attributes: {},
  edit: function edit() {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_payments_block__WEBPACK_IMPORTED_MODULE_3__["PaymentsBlock"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", null, "Payment Methods Block"));
  },
  //Save the props to post content.
  save: function save() {
    return null;
  }
};
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('wcxp/payment-methods-block', paymentsSettings);

/***/ }),

/***/ "./src/blocks/payments/payments-block.js":
/*!***********************************************!*\
  !*** ./src/blocks/payments/payments-block.js ***!
  \***********************************************/
/*! exports provided: PaymentsBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsBlock", function() { return PaymentsBlock; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _block_components_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../block-components/container */ "./src/block-components/container.js");



/**
 * Internal dependencies
 */

var PaymentsBlock = function PaymentsBlock(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_block_components_container__WEBPACK_IMPORTED_MODULE_2__["Container"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    className: "payments-block"
  }, props));
};

/***/ }),

/***/ "./src/blocks/totals/index.js":
/*!************************************!*\
  !*** ./src/blocks/totals/index.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _totals_block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./totals-block */ "./src/blocks/totals/totals-block.js");


/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


var settings = {
  title: 'Totals Block',
  category: 'woocommerce',
  description: 'Totals block for the checkout block',
  supports: {
    align: ['wide', 'full'],
    html: false,
    multiple: false
  },
  attributes: {},
  edit: function edit() {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_totals_block__WEBPACK_IMPORTED_MODULE_2__["TotalsBlock"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", null, "Totals Block"));
  },
  //Save the props to post content.
  save: function save() {
    return null;
  }
};
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('wcxp/totals-block', settings);

/***/ }),

/***/ "./src/blocks/totals/totals-block.js":
/*!*******************************************!*\
  !*** ./src/blocks/totals/totals-block.js ***!
  \*******************************************/
/*! exports provided: TotalsBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotalsBlock", function() { return TotalsBlock; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _block_components_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../block-components/container */ "./src/block-components/container.js");



/**
 * Internal dependencies
 */

var TotalsBlock = function TotalsBlock(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_block_components_container__WEBPACK_IMPORTED_MODULE_2__["Container"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    className: "totals-block"
  }, props));
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks */ "./src/blocks/index.js");
/* harmony import */ var _blocks_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/main */ "./src/blocks/main.js");
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */

Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])('wcxp/main-block', {
  edit: _blocks_main__WEBPACK_IMPORTED_MODULE_3__["Edit"],
  // just doing null for now - not worrying about frontend for initial part of experiment.
  save: function save() {
    return null;
  },
  supports: {
    align: ['wide', 'full'],
    html: false,
    multiple: false
  }
});

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map