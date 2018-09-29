webpackHotUpdate("static/development/pages/restaurant.js",{

/***/ "./components/Search.jsx":
/*!*******************************!*\
  !*** ./components/Search.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.es.js");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-pose */ "../node_modules/react-pose/dist/react-pose.es.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var SearchWrapper = react_pose__WEBPACK_IMPORTED_MODULE_2__["default"].div({
  expanded: {
    width: '100vw',
    height: '100vh',
    y: -36
  },
  collapsed: {
    width: 'calc(100vw - 32px)',
    height: '40px',
    y: -20
  }
});
var StyledSearchWrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(SearchWrapper).withConfig({
  displayName: "Search__StyledSearchWrapper",
  componentId: "sc-30z2li-0"
})(["width:calc(100vw - 32px);height:40px;background:#FFFFFF;box-shadow:0 2px 16px -2px rgba(0,0,0,0.32);border-radius:", ";margin:auto;position:", ";transform:translateY(-20px);top:36px;overflow:hidden;box-sizing:border-box;padding:", ";z-index:8;"], function (props) {
  return props.expanded ? '0' : '4px';
}, function (props) {
  return props.expanded ? 'fixed' : 'sticky';
}, function (props) {
  return props.expanded ? '16px' : 0;
});
var SearchInputWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Search__SearchInputWrapper",
  componentId: "sc-30z2li-1"
})(["width:100%;height:100%;position:relative;box-sizing:border-box;padding:0 0 0 40px;"]);
var SearchInput = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].input.withConfig({
  displayName: "Search__SearchInput",
  componentId: "sc-30z2li-2"
})(["width:100%;height:100%;max-height:40px;border-radius:0;border:0;box-shadow:none;appearance:none;position:relative;display:flex;align-items:center;box-sizing:border-box;padding:0 8px;margin:0;font-size:1rem;font-weight:400;color:#0f0f0f;transition:0.4s ease-out all;&::placeholder{font-size:1rem;font-weight:400;color:#9f9f9f;}&:focus{outline:none;}"]);
var SearchIcon = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].i.withConfig({
  displayName: "Search__SearchIcon",
  componentId: "sc-30z2li-3"
})(["width:40px;height:40px;position:absolute;left:0;top:0;bottom:0;display:flex;align-items:center;justify-content:center;color:", ";transition:0.4s ease-out all;cursor:", ";"], function (props) {
  return props.expanded ? '#0f0f0f' : '#9f9f9f';
}, function (props) {
  return props.expanded ? 'pointer' : 'default';
});

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
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledSearchWrapper, {
        pose: this.state.expanded ? 'expanded' : 'collapsed',
        expanded: this.state.expanded,
        className: "sticky-events"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SearchInputWrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SearchIcon, {
        className: "material-icons",
        onClick: function onClick() {
          return _this2.state.expanded === true && _this2.setState({
            expanded: false
          });
        },
        expanded: this.state.expanded
      }, this.state.expanded ? 'close' : 'search'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SearchInput, {
        type: "search",
        onFocus: function onFocus() {
          return _this2.state.expanded === false && _this2.setState({
            expanded: true
          });
        },
        onChange: function onChange(e) {
          return _this2.setState({
            term: e.target.value
          });
        },
        placeholder: "Search Dishes"
      })));
    }
  }]);

  return Search;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ })

})
//# sourceMappingURL=restaurant.js.cc52c20260598afe07df.hot-update.js.map