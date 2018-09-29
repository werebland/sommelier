webpackHotUpdate("static/development/pages/restaurant.js",{

/***/ "./components/Swiper.jsx":
/*!*******************************!*\
  !*** ./components/Swiper.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.es.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var SwiperWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Swiper__SwiperWrapper",
  componentId: "olrsc9-0"
})(["width:100vw;height:100vh;position:absolute;background:#0f0f0f;display:flex;flex-flow:column nowrap;color:#fff;"]);
var SwipperCollapse = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].i.withConfig({
  displayName: "Swiper__SwipperCollapse",
  componentId: "olrsc9-1"
})(["width:24px;height:24px;color:#fff;cursor:pointer;display:block;"]);
var SwiperHeader = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Swiper__SwiperHeader",
  componentId: "olrsc9-2"
})(["width:100%;padding:16px;box-sizing:border-box;"]);
var SwiperTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h3.withConfig({
  displayName: "Swiper__SwiperTitle",
  componentId: "olrsc9-3"
})(["font-size:1.5rem;font-weight:700;color:#fff;margin:0;"]);
var SwiperSlick = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Swiper__SwiperSlick",
  componentId: "olrsc9-4"
})(["width:100%;"]);
var DishSlide = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Swiper__DishSlide",
  componentId: "olrsc9-5"
})(["width:100%;height:100%;display:flex;flex-flow:column nowrap;"]);
var DishSlideImage = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Swiper__DishSlideImage",
  componentId: "olrsc9-6"
})(["width:100vw;height:calc(100vw/1.7777);display:block;background-image:url(", ");background-size:cover;background-position:center;"], function (props) {
  return props.image;
});
var DishSlideContent = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Swiper__DishSlideContent",
  componentId: "olrsc9-7"
})(["width:100%;display:flex;flex:1;padding:16px;box-sizing:border-box;"]);

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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SwiperWrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SwipperCollapse, {
        className: "material-icons",
        onClick: function onClick() {
          return _this2.props.handleCollapse();
        }
      }, "close"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SwiperHeader, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SwiperTitle, null, this.props.title), this.state.slideIndex + 1, " of ", this.props.dishes.length), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SwiperSlick, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, settings, this.props.dishes.map(function (dish) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DishSlide, {
          key: dish.id
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DishSlideImage, {
          image: dish.image
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DishSlideContent, null, dish.title));
      }))));
    }
  }]);

  return Swiper;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Swiper);

/***/ })

})
//# sourceMappingURL=restaurant.js.e26234afd2875aa507f5.hot-update.js.map