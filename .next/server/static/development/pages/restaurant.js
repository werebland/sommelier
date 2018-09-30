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

/***/ "./components/DishCard.jsx":
/*!*********************************!*\
  !*** ./components/DishCard.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-pose */ "react-pose");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_pose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var DishCardWrapper = react_pose__WEBPACK_IMPORTED_MODULE_2___default.a.article({
  pressable: true,
  enter: {
    y: -20,
    opacity: 1
  },
  exit: {
    y: 20,
    opacity: 0
  },
  init: {
    scale: 1,
    boxShadow: '0px 2px 16px -2px rgba(0,0,0,0.32)'
  },
  press: {
    scale: 0.99,
    boxShadow: '0px 2px 8px -2px rgba(0,0,0,0.32)'
  }
});
var StyledDishCardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "DishCard__StyledDishCardWrapper",
  componentId: "sc-1nb8way-0"
})(["width:100%;height:auto;position:relative;border-radius:4px;overflow:hidden;background:#FFFFFF;display:flex;flex-flow:column nowrap;scale:1;"]);
var DishCardImage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "DishCard__DishCardImage",
  componentId: "sc-1nb8way-1"
})(["width:100%;height:164px;display:flex;background:#9f9f9f;background-image:url(", ");background-size:cover;background-position:center;"], function (props) {
  return props.image;
});
var DishCardContent = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "DishCard__DishCardContent",
  componentId: "sc-1nb8way-2"
})(["width:100%;display:flex;flex:1;flex-flow:column nowrap;padding:16px;box-sizing:border-box;"]);
var DishCardTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h3.withConfig({
  displayName: "DishCard__DishCardTitle",
  componentId: "sc-1nb8way-3"
})(["font-size:1rem;font-weight:700;color:#0f0f0f;width:100%;display:flex;justify-content:space-between;margin:0;"]);
var DishCardSubtitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
  displayName: "DishCard__DishCardSubtitle",
  componentId: "sc-1nb8way-4"
})(["font-size:.875rem;font-weight:400;color:#9f9f9f;"]);

var DishCard =
/*#__PURE__*/
function (_Component) {
  _inherits(DishCard, _Component);

  function DishCard() {
    _classCallCheck(this, DishCard);

    return _possibleConstructorReturn(this, _getPrototypeOf(DishCard).apply(this, arguments));
  }

  _createClass(DishCard, [{
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledDishCardWrapper, {
        onPressEnd: function onPressEnd() {
          return _this.props.handleDishCardClick('af3efdssdfgergvds');
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DishCardImage, {
        image: this.props.dish.image
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DishCardContent, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DishCardTitle, null, this.props.dish.title, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "$", this.props.dish.price)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DishCardSubtitle, null, lodash__WEBPACK_IMPORTED_MODULE_3___default.a.upperFirst(this.props.dish.family), " \xB7 ", lodash__WEBPACK_IMPORTED_MODULE_3___default.a.upperFirst(this.props.dish.type))));
    }
  }]);

  return DishCard;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (DishCard);

/***/ }),

/***/ "./components/Profile.jsx":
/*!********************************!*\
  !*** ./components/Profile.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/Chris/dishful-infinity/components/Profile.jsx";


var ProfileWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Profile__ProfileWrapper",
  componentId: "sc-12ke1u2-0"
})(["width:100%;height:200px;position:fixed;top:0;left:0;right:0;z-index:-1;background:#f0f0f0;background-image:url(", ");background-size:cover;background-position:center;display:flex;align-items:center;justify-content:center;&::before{content:\"\";width:100%;height:100%;position:absolute;left:0;right:0;top:0;bottom:0;display:block;background:rgba(0,0,0,.32);}"], function (props) {
  return props.background;
});
var ProfileContent = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Profile__ProfileContent",
  componentId: "sc-12ke1u2-1"
})(["display:inline-flex;align-items:flex-start;flex-flow:column nowrap;text-align:right;z-index:4;"]);
var ProfileTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1.withConfig({
  displayName: "Profile__ProfileTitle",
  componentId: "sc-12ke1u2-2"
})(["font-size:1.5rem;font-weight:700;color:#fff;margin:0;display:inline-flex;"]);
var ProfileSubtitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
  displayName: "Profile__ProfileSubtitle",
  componentId: "sc-12ke1u2-3"
})(["font-size:1rem;font-weight:500;color:#fff;"]);

var Profile = function Profile(_ref) {
  var title = _ref.title,
      cuisine = _ref.cuisine,
      priceRange = _ref.priceRange,
      background = _ref.background,
      address = _ref.address;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProfileWrapper, {
    background: background,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProfileContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProfileTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProfileSubtitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, cuisine, " \xB7 ", priceRange, " \xB7 ", address)));
};

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ }),

/***/ "./components/Search.jsx":
/*!*******************************!*\
  !*** ./components/Search.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-pose */ "react-pose");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_pose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fuse.js */ "fuse.js");
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fuse_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _DishCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DishCard */ "./components/DishCard.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var SearchWrapper = react_pose__WEBPACK_IMPORTED_MODULE_2___default.a.div({
  expanded: {
    width: '100vw',
    height: '100vh',
    y: -36,
    x: -16
  },
  collapsed: {
    width: function width(_ref) {
      var _width = _ref.width;
      return _width;
    },
    height: '40px',
    y: -20,
    x: 0
  }
});
var StyledSearchWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(SearchWrapper).withConfig({
  displayName: "Search__StyledSearchWrapper",
  componentId: "sc-1891do4-0"
})(["width:", ";height:40px;background:#FFFFFF;box-shadow:0 2px 16px -2px rgba(0,0,0,0.32);border-radius:", ";margin-left:16px;position:", ";transform:translateY(-20px);top:36px;overflow:hidden;box-sizing:border-box;padding:", ";z-index:8;"], function (props) {
  return props.width;
}, function (props) {
  return props.expanded ? '0' : '4px';
}, function (props) {
  return props.expanded ? 'fixed' : 'sticky';
}, function (props) {
  return props.expanded ? '16px' : 0;
});
var SearchInputWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Search__SearchInputWrapper",
  componentId: "sc-1891do4-1"
})(["width:100%;height:40px;position:relative;box-sizing:border-box;padding:0 0 0 40px;"]);
var SearchInput = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.input.withConfig({
  displayName: "Search__SearchInput",
  componentId: "sc-1891do4-2"
})(["width:100%;height:100%;max-height:40px;border-radius:0;border:0;box-shadow:none;appearance:none;position:relative;display:flex;align-items:center;box-sizing:border-box;padding:0 8px;margin:0;font-size:1rem;font-weight:400;color:#0f0f0f;transition:0.4s ease-out all;&::placeholder{font-size:1rem;font-weight:400;color:#9f9f9f;}&:focus{outline:none;}"]);
var SearchIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.i.withConfig({
  displayName: "Search__SearchIcon",
  componentId: "sc-1891do4-3"
})(["width:40px;height:40px;position:absolute;left:0;top:0;bottom:0;display:flex;align-items:center;justify-content:center;color:", ";transition:0.4s ease-out all;cursor:", ";"], function (props) {
  return props.expanded ? '#0f0f0f' : '#9f9f9f';
}, function (props) {
  return props.expanded ? 'pointer' : 'default';
});
var SearchResults = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Search__SearchResults",
  componentId: "sc-1891do4-4"
})(["width:100vw;height:100%;display:flex;flex-flow:column nowrap;overflow:scroll;margin-left:-16px;padding:16px;box-sizing:border-box;"]);
var PosedDishCard = react_pose__WEBPACK_IMPORTED_MODULE_2___default.a.article({
  pressable: true,
  enter: {
    opacity: 1
  },
  exit: {
    opacity: 0
  },
  init: {
    scale: 1,
    boxShadow: '0px 2px 16px -2px rgba(0,0,0,0.32)'
  },
  press: {
    scale: 0.99,
    boxShadow: '0px 2px 8px -2px rgba(0,0,0,0.32)'
  }
});
var StyledPosedDishCard = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(PosedDishCard).withConfig({
  displayName: "Search__StyledPosedDishCard",
  componentId: "sc-1891do4-5"
})(["margin-bottom:16px;scale:1;transform-origin:center !important;border-radius:4px;background:transparent;"]);

var Search =
/*#__PURE__*/
function (_Component) {
  _inherits(Search, _Component);

  function Search(props) {
    var _this;

    _classCallCheck(this, Search);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Search).call(this, props));
    _this.state = {
      expanded: false,
      term: ''
    };
    return _this;
  }

  _createClass(Search, [{
    key: "handleExpand",
    value: function handleExpand() {
      this.setState({
        expanded: true
      });
      this.props.handleExpandSearch();
    }
  }, {
    key: "handleCollapse",
    value: function handleCollapse() {
      this.setState({
        expanded: false,
        term: ''
      });
      this.props.handleCollapseSearch();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var options = {
        shouldSort: true,
        threshold: 0.4,
        location: 0,
        distance: 80,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: ["title", "type", "family"]
      };
      var fuse = new fuse_js__WEBPACK_IMPORTED_MODULE_3___default.a(this.props.dishes, options); // "list" is the item array

      var result = fuse.search(this.state.term);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledSearchWrapper, {
        pose: this.state.expanded ? 'expanded' : 'collapsed',
        expanded: this.state.expanded,
        width: this.props.width,
        style: {
          width: this.props.width
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SearchInputWrapper, {
        expanded: this.state.expanded
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SearchIcon, {
        className: "material-icons",
        onClick: function onClick() {
          return _this2.state.expanded === true && _this2.handleCollapse();
        },
        expanded: this.state.expanded
      }, this.state.expanded ? 'close' : 'search'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SearchInput, {
        type: "search",
        onFocus: function onFocus() {
          return _this2.state.expanded === false && _this2.handleExpand();
        },
        onChange: function onChange(e) {
          return _this2.setState({
            term: e.target.value
          });
        },
        placeholder: "Search Dishes"
      })), this.state.expanded && this.state.term !== "" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SearchResults, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_pose__WEBPACK_IMPORTED_MODULE_2__["PoseGroup"], null, result && result.map(function (dish) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledPosedDishCard, {
          key: dish.id,
          onClick: function onClick() {
            return _this2.props.handleDishCardClick(dish.id, result);
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DishCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
          dish: dish
        }));
      }))));
    }
  }]);

  return Search;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./components/Swiper.jsx":
/*!*******************************!*\
  !*** ./components/Swiper.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var SwiperWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Swiper__SwiperWrapper",
  componentId: "olrsc9-0"
})(["width:100vw;height:100vh;position:absolute;background:#0f0f0f;display:flex;flex-flow:column nowrap;color:#fff;"]);
var SwiperCollapse = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.i.withConfig({
  displayName: "Swiper__SwiperCollapse",
  componentId: "olrsc9-1"
})(["width:24px;height:24px;color:#fff;cursor:pointer;display:block;margin:16px 0 0 16px;"]);
var SwiperHeader = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Swiper__SwiperHeader",
  componentId: "olrsc9-2"
})(["width:100%;padding:16px;box-sizing:border-box;display:flex;flex-flow:row nowrap;justify-content:space-between;"]);
var SwiperTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h3.withConfig({
  displayName: "Swiper__SwiperTitle",
  componentId: "olrsc9-3"
})(["font-size:1.5rem;font-weight:700;color:#fff;margin:0;"]);
var SwiperStatus = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Swiper__SwiperStatus",
  componentId: "olrsc9-4"
})(["font-size:1rem;font-weight:400;color:#fff;display:flex;align-items:center;& strong{font-weight:700;}"]);
var SwiperSlick = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Swiper__SwiperSlick",
  componentId: "olrsc9-5"
})(["width:100%;"]);
var DishSlide = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Swiper__DishSlide",
  componentId: "olrsc9-6"
})(["width:100%;height:100%;display:flex;flex-flow:column nowrap;"]);
var DishSlideImage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Swiper__DishSlideImage",
  componentId: "olrsc9-7"
})(["width:100vw;height:calc(100vw/1.7777);display:block;background-image:url(", ");background-size:cover;background-position:center;"], function (props) {
  return props.image;
});
var DishSlideContent = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Swiper__DishSlideContent",
  componentId: "olrsc9-8"
})(["width:100%;display:flex;flex:1;flex-flow:column nowrap;padding:16px;box-sizing:border-box;"]);
var DishSlideTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h3.withConfig({
  displayName: "Swiper__DishSlideTitle",
  componentId: "olrsc9-9"
})(["font-size:1.25rem;font-weight:700;color:#fff;width:100%;display:flex;justify-content:space-between;margin:0;"]);
var DishSlideSubtitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
  displayName: "Swiper__DishSlideSubtitle",
  componentId: "olrsc9-10"
})(["font-size:1rem;font-weight:400;color:#fff;margin-bottom:8px;"]);
var DishSlideDescription = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
  displayName: "Swiper__DishSlideDescription",
  componentId: "olrsc9-11"
})(["font-size:1rem;font-weight:400;color:#fff;padding:0;margin:0;box-sizing:border-box;"]);

var Swiper =
/*#__PURE__*/
function (_Component) {
  _inherits(Swiper, _Component);

  function Swiper(props) {
    var _this;

    _classCallCheck(this, Swiper);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Swiper).call(this, props));
    _this.state = {
      slideIndex: _this.props.dishIndex
    };
    return _this;
  }

  _createClass(Swiper, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.body.style.overflowY = 'auto';
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.props.isVisible) {
        document.body.style.overflowY = 'hidden';
      } else {
        document.body.style.overflowY = 'auto';
      }

      var settings = {
        dots: false,
        arrows: false,
        initialSlide: this.props.dishIndex,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: function afterChange(current) {
          return _this2.setState({
            slideIndex: current
          });
        }
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SwiperWrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SwiperCollapse, {
        className: "material-icons",
        onClick: function onClick() {
          return _this2.props.handleCollapse();
        }
      }, "close"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SwiperHeader, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SwiperTitle, null, this.props.title === "popular" && "Popular", this.props.title === "results" && "Results", this.props.title !== "popular" && this.props.title !== "results" && lodash__WEBPACK_IMPORTED_MODULE_3___default.a.upperFirst(this.props.title) + "s"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SwiperStatus, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "material-icons",
        onClick: function onClick() {
          return _this2.slider.slickGoTo(_this2.state.slideIndex - 1);
        }
      }, "chevron_left"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, this.state.slideIndex + 1), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "material-icons",
        onClick: function onClick(e) {
          return _this2.slider.slickGoTo(_this2.state.slideIndex + 1);
        }
      }, "chevron_right"), "of ", this.props.dishes.length)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SwiperSlick, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({
        ref: function ref(slider) {
          return _this2.slider = slider;
        }
      }, settings), this.props.dishes.map(function (dish) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DishSlide, {
          key: dish.id
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DishSlideImage, {
          image: dish.image
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DishSlideContent, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DishSlideTitle, null, dish.title, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "$", dish.price)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DishSlideSubtitle, null, lodash__WEBPACK_IMPORTED_MODULE_3___default.a.upperFirst(dish.family), " \xB7 ", lodash__WEBPACK_IMPORTED_MODULE_3___default.a.upperFirst(dish.type)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DishSlideDescription, null, dish.description)));
      }))));
    }
  }]);

  return Swiper;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Swiper);

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var re_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! re-base */ "re-base");
/* harmony import */ var re_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(re_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ "firebase/firestore");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_2__);




if (!firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.apps.length) {
  var app = firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.initializeApp({
    apiKey: "AIzaSyCnFAFeVej1tIO9muB4M1ayuiUMo2GF3G8",
    authDomain: "dishful-3d728.firebaseapp.com",
    databaseURL: "https://dishful-3d728.firebaseio.com",
    projectId: "dishful-3d728",
    storageBucket: "dishful-3d728.appspot.com",
    messagingSenderId: "452243524763"
  });
  app.settings = {
    timestampsInSnapshots: true
  };
} else {
  var app = firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a;
}

var db = firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.firestore(app);
var settings = {
  timestampsInSnapshots: true
};
db.settings(settings);
var base = re_base__WEBPACK_IMPORTED_MODULE_0___default.a.createClass(db);
/* harmony default export */ __webpack_exports__["default"] = (base);

/***/ }),

/***/ "./pages/restaurant.js":
/*!*****************************!*\
  !*** ./pages/restaurant.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-pose */ "react-pose");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_pose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/firestore */ "firebase/firestore");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Profile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Profile */ "./components/Profile.jsx");
/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Search */ "./components/Search.jsx");
/* harmony import */ var _components_DishCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/DishCard */ "./components/DishCard.jsx");
/* harmony import */ var _components_Swiper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Swiper */ "./components/Swiper.jsx");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }












var RestaurantWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "restaurant__RestaurantWrapper",
  componentId: "b9wkxk-0"
})(["width:100%;height:100%;padding:0;margin:0;background:#f7f7f7;"]);
var ActionButton = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.a.withConfig({
  displayName: "restaurant__ActionButton",
  componentId: "b9wkxk-1"
})(["position:fixed;top:16px;right:16px;height:40px;padding:0 24px;display:flex;align-items:center;justify-content:center;border-radius:4px;overflow:hidden;background:#FFFFFF;box-shadow:0 2px 16px -2px rgba(0,0,0,0.32);cursor:pointer;text-decoration:none;font-size:1rem;font-weight:400;color:#0f0f0f;z-index:8;"]);
var Scroller = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "restaurant__Scroller",
  componentId: "b9wkxk-2"
})(["width:100%;height:100%;min-height:100vh;margin-top:200px;background:transparent;& .sticky-events--sentinel{left:0;position:absolute;right:0;visibility:hidden;}& .sticky-events--sentinel-top{position:relative;}"]);
var DishCards = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "restaurant__DishCards",
  componentId: "b9wkxk-3"
})(["width:100%;height:100%;display:flex;flex-flow:column nowrap;padding:0 16px;box-sizing:border-box;"]);
var DishCardsFilters = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.ul.withConfig({
  displayName: "restaurant__DishCardsFilters",
  componentId: "b9wkxk-4"
})(["width:100%;max-width:100vw;overflow:scroll;padding:0 16px 0 16px;box-sizing:border-box;margin:0 0 16px 0;display:flex;flex-flow:row nowrap;position:relative;z-index:4;"]);
var DishCardsFilter = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.li.withConfig({
  displayName: "restaurant__DishCardsFilter",
  componentId: "b9wkxk-5"
})(["list-style:none;margin-right:8px;font-size:1.25rem;font-weight:400;color:", ";cursor:pointer;"], function (props) {
  return props.active ? '#0f0f0f' : '#9f9f9f';
});
var DishCardContainer = react_pose__WEBPACK_IMPORTED_MODULE_4___default.a.div({});
var PosedDishCard = react_pose__WEBPACK_IMPORTED_MODULE_4___default.a.article({
  pressable: true,
  enter: {
    opacity: 1
  },
  exit: {
    opacity: 0
  },
  init: {
    scale: 1,
    boxShadow: '0px 2px 16px -2px rgba(0,0,0,0.32)'
  },
  press: {
    scale: 0.99,
    boxShadow: '0px 2px 8px -2px rgba(0,0,0,0.32)'
  }
});
var StyledPosedDishCard = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(PosedDishCard).withConfig({
  displayName: "restaurant__StyledPosedDishCard",
  componentId: "b9wkxk-6"
})(["margin-bottom:16px;scale:1;transform-origin:center !important;border-radius:4px;background:transparent;"]);
var SwiperContainer = react_pose__WEBPACK_IMPORTED_MODULE_4___default.a.div({
  enter: {
    x: '0vw'
  },
  exit: {
    x: '100vw'
  },
  init: {
    x: '100vw'
  }
});
var StyledSwiperContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(SwiperContainer).withConfig({
  displayName: "restaurant__StyledSwiperContainer",
  componentId: "b9wkxk-7"
})(["width:100vw;height:100vh;position:fixed;transform:translateX(100vw);top:0;z-index:8888;"]);

var Restaurant =
/*#__PURE__*/
function (_Component) {
  _inherits(Restaurant, _Component);

  function Restaurant(props) {
    var _this;

    _classCallCheck(this, Restaurant);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Restaurant).call(this, props));
    _this.state = {
      activeDish: "",
      activeFilter: 'popular',
      families: [],
      dishes: [],
      filteredDishes: [],
      isSearching: false,
      isSticky: false
    };
    _this.actionButton = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
    return _this;
  }

  _createClass(Restaurant, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var actionButtonWidth = this.actionButton.current.offsetWidth;
      this.fetchDishes();

      if (window) {
        window.addEventListener('scroll', this.handleScroll.bind(this));
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll.bind(this));
    }
  }, {
    key: "handleScroll",
    value: function handleScroll() {
      var scrollY = window.scrollY;

      if (scrollY >= 160) {
        this.setState({
          isSticky: true
        });
      } else {
        this.setState({
          isSticky: false
        });
      }
    }
  }, {
    key: "fetchDishes",
    value: function fetchDishes() {
      var _this2 = this;

      var restaurantId = this.props.restaurant.id;
      console.log(restaurantId);
      _config__WEBPACK_IMPORTED_MODULE_6__["default"].get('dishes', {
        context: this,
        withIds: true,
        withRefs: true,
        query: function query(ref) {
          return ref.where('restaurantId', '==', restaurantId);
        }
      }).then(function (data) {
        _this2.processDishes(data);
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: "processDishes",
    value: function processDishes(dishes) {
      var families = [];

      lodash__WEBPACK_IMPORTED_MODULE_5___default.a.each(dishes, function (dish) {
        var family = dish.family;
        families.push(family);
      });

      if (families.length === dishes.length) {
        var uniqueFamiles = lodash__WEBPACK_IMPORTED_MODULE_5___default.a.uniq(families);

        var groupedDishes = lodash__WEBPACK_IMPORTED_MODULE_5___default.a.groupBy(dishes, 'family');

        this.setState({
          families: uniqueFamiles,
          groupedDishes: groupedDishes,
          dishes: dishes,
          filteredDishes: dishes
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RestaurantWrapper, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, "What to eat at ", this.props.restaurant.title, " - ", this.props.restaurant.address.street, ", ", this.props.restaurant.address.city), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "stylesheet",
        type: "text/css",
        charset: "UTF-8",
        href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "stylesheet",
        type: "text/css",
        href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      })), this.props.restaurant.action === "call" && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ActionButton, {
        innerRef: this.actionButton,
        href: "tel: ".concat(this.props.restaurant.phone)
      }, "Call"), this.props.restaurant.action === "reserve" && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ActionButton, {
        innerRef: this.actionButton,
        target: "black",
        href: this.props.restaurant.reserve
      }, "Reserve"), this.props.restaurant.action === "order" && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ActionButton, {
        innerRef: this.actionButton,
        target: "blank",
        href: this.props.restaurant.order
      }, "Order"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Profile__WEBPACK_IMPORTED_MODULE_8__["default"], {
        title: this.props.restaurant.title,
        cuisine: this.props.restaurant.cuisine,
        priceRange: this.props.restaurant.price,
        background: "http://irishpubcompany.com/wp-content/uploads/2018/01/Four-650x400.jpg",
        address: this.props.restaurant.address.street
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Scroller, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Search__WEBPACK_IMPORTED_MODULE_9__["default"], {
        dishes: this.state.dishes,
        width: this.state.isSticky ? "calc(100vw - 32px - ".concat(this.actionButton.current.offsetWidth, "px - 16px)") : 'calc(100vw - 32px)',
        handleExpandSearch: function handleExpandSearch() {
          return _this3.setState({
            isSearching: true
          });
        },
        handleCollapseSearch: function handleCollapseSearch() {
          return _this3.setState({
            isSearching: false
          });
        },
        handleDishCardClick: function handleDishCardClick(id, result) {
          return _this3.setState({
            activeDish: id,
            results: result
          });
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DishCardsFilters, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DishCardsFilter, {
        active: this.state.activeFilter === 'popular',
        onClick: function onClick() {
          return _this3.setState({
            activeFilter: 'popular',
            filteredDishes: _this3.state.dishes
          });
        }
      }, "Popular"), this.state.families.map(function (family) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DishCardsFilter, {
          key: family,
          active: _this3.state.activeFilter === lodash__WEBPACK_IMPORTED_MODULE_5___default.a.lowerCase(family),
          onClick: function onClick() {
            return _this3.setState({
              activeFilter: lodash__WEBPACK_IMPORTED_MODULE_5___default.a.lowerCase(family),
              filteredDishes: _this3.state.groupedDishes[family]
            });
          }
        }, lodash__WEBPACK_IMPORTED_MODULE_5___default.a.upperFirst(family), "s");
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DishCards, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_pose__WEBPACK_IMPORTED_MODULE_4__["PoseGroup"], null, this.state.filteredDishes.map(function (dish) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledPosedDishCard, {
          key: dish.id,
          onClick: function onClick() {
            return _this3.setState({
              activeDish: dish.id
            });
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_DishCard__WEBPACK_IMPORTED_MODULE_10__["default"], {
          dish: dish
        }));
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_pose__WEBPACK_IMPORTED_MODULE_4__["PoseGroup"], null, this.state.activeDish !== "" && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledSwiperContainer, {
        key: "0"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Swiper__WEBPACK_IMPORTED_MODULE_11__["default"], {
        dish: this.state.activeDish,
        dishes: this.state.isSearching ? this.state.results : this.state.filteredDishes,
        dishIndex: this.state.isSearching ? lodash__WEBPACK_IMPORTED_MODULE_5___default.a.findIndex(this.state.results, {
          id: this.state.activeDish
        }) : lodash__WEBPACK_IMPORTED_MODULE_5___default.a.findIndex(this.state.filteredDishes, {
          id: this.state.activeDish
        }),
        title: this.state.isSearching ? 'results' : this.state.activeFilter,
        isVisible: this.state.activeDish !== "",
        handleCollapse: function handleCollapse() {
          return _this3.setState({
            activeDish: ""
          });
        }
      }))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var query, username, restaurants, restaurant;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query;
                username = query.username;
                console.log(username);
                _context.next = 5;
                return _config__WEBPACK_IMPORTED_MODULE_6__["default"].get('restaurants', {
                  context: this,
                  query: function query(ref) {
                    return ref.where('username', '==', username);
                  },
                  withIds: true
                }).then(function (data) {
                  return data;
                }).catch(function (err) {
                  console.log(err);
                });

              case 5:
                restaurants = _context.sent;
                restaurant = restaurants[0];
                return _context.abrupt("return", {
                  restaurant: restaurant,
                  query: query
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return Restaurant;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Restaurant);

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** multi ./pages/restaurant.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/restaurant.js */"./pages/restaurant.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "fuse.js":
/*!**************************!*\
  !*** external "fuse.js" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fuse.js");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "re-base":
/*!**************************!*\
  !*** external "re-base" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("re-base");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-pose":
/*!*****************************!*\
  !*** external "react-pose" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-pose");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=restaurant.js.map