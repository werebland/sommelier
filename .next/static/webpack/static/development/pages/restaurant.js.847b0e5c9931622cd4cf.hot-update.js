webpackHotUpdate("static/development/pages/restaurant.js",{

/***/ "./pages/restaurant.js":
/*!*****************************!*\
  !*** ./pages/restaurant.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.es.js");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-pose */ "../node_modules/react-pose/dist/react-pose.es.js");
/* harmony import */ var sticky_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sticky-events */ "./node_modules/sticky-events/dist/sticky-events.umd.js");
/* harmony import */ var sticky_events__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sticky_events__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var _components_Profile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Profile */ "./components/Profile.jsx");
/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Search */ "./components/Search.jsx");
/* harmony import */ var _components_DishCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/DishCard */ "./components/DishCard.jsx");
/* harmony import */ var _components_Swiper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Swiper */ "./components/Swiper.jsx");


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













var RestaurantWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "restaurant__RestaurantWrapper",
  componentId: "jqq8w8-0"
})(["width:100%;height:100%;padding:0;margin:0;background:#f7f7f7;"]);
var ActionButton = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "restaurant__ActionButton",
  componentId: "jqq8w8-1"
})(["position:fixed;top:16px;right:16px;height:40px;padding:0 24px;display:flex;align-items:center;justify-content:center;border-radius:4px;overflow:hidden;background:#FFFFFF;box-shadow:0 2px 16px -2px rgba(0,0,0,0.32);cursor:pointer;"]);
var Scroller = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "restaurant__Scroller",
  componentId: "jqq8w8-2"
})(["width:100%;height:100%;min-height:100vh;margin-top:200px;background:transparent;& .sticky-events--sentinel{left:0;position:absolute;right:0;visibility:hidden;}& .sticky-events--sentinel-top{position:relative;}"]);
var DishCards = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "restaurant__DishCards",
  componentId: "jqq8w8-3"
})(["width:100%;height:100%;display:flex;flex-flow:column nowrap;padding:0 16px;box-sizing:border-box;"]);
var DishCardsFilters = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].ul.withConfig({
  displayName: "restaurant__DishCardsFilters",
  componentId: "jqq8w8-4"
})(["width:100%;max-width:100vw;overflow:scroll;padding:0 16px 0 16px;box-sizing:border-box;margin:0 0 16px 0;display:flex;flex-flow:row nowrap;position:relative;z-index:4;"]);
var DishCardsFilter = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].li.withConfig({
  displayName: "restaurant__DishCardsFilter",
  componentId: "jqq8w8-5"
})(["list-style:none;margin-right:8px;font-size:1.25rem;font-weight:400;color:", ";cursor:pointer;"], function (props) {
  return props.active ? '#0f0f0f' : '#9f9f9f';
});
var DishCardContainer = react_pose__WEBPACK_IMPORTED_MODULE_4__["default"].div({});
var PosedDishCard = react_pose__WEBPACK_IMPORTED_MODULE_4__["default"].article({
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
var StyledPosedDishCard = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(PosedDishCard).withConfig({
  displayName: "restaurant__StyledPosedDishCard",
  componentId: "jqq8w8-6"
})(["margin-bottom:16px;scale:1;transform-origin:center !important;border-radius:4px;background:transparent;"]);
var SwiperContainer = react_pose__WEBPACK_IMPORTED_MODULE_4__["default"].div({
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
var StyledSwiperContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(SwiperContainer).withConfig({
  displayName: "restaurant__StyledSwiperContainer",
  componentId: "jqq8w8-7"
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
      isSearching: false
    };
    _this.actionButton = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
    return _this;
  }

  _createClass(Restaurant, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var actionButtonWidth = this.actionButton.current.offsetWidth;
      this.fetchDishes();
    }
  }, {
    key: "fetchDishes",
    value: function fetchDishes() {
      var _this2 = this;

      var restaurantId = this.props.restaurant.id;
      console.log(restaurantId);
      _config__WEBPACK_IMPORTED_MODULE_7__["default"].get('dishes', {
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

      lodash__WEBPACK_IMPORTED_MODULE_6___default.a.each(dishes, function (dish) {
        var family = dish.family;
        families.push(family);
      });

      if (families.length === dishes.length) {
        var uniqueFamiles = lodash__WEBPACK_IMPORTED_MODULE_6___default.a.uniq(families);

        var groupedDishes = lodash__WEBPACK_IMPORTED_MODULE_6___default.a.groupBy(dishes, 'family');

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

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RestaurantWrapper, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, this.props.restaurant.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "stylesheet",
        type: "text/css",
        charset: "UTF-8",
        href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "stylesheet",
        type: "text/css",
        href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ActionButton, {
        innerRef: this.actionButton
      }, "Call"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Profile__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: this.props.restaurant.title,
        cuisine: this.props.restaurant.cuisine,
        priceRange: this.props.restaurant.price,
        background: "http://irishpubcompany.com/wp-content/uploads/2018/01/Four-650x400.jpg",
        address: this.props.restaurant.address.street
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Scroller, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Search__WEBPACK_IMPORTED_MODULE_10__["default"], {
        dishes: this.state.dishes,
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
          active: _this3.state.activeFilter === lodash__WEBPACK_IMPORTED_MODULE_6___default.a.lowerCase(family),
          onClick: function onClick() {
            return _this3.setState({
              activeFilter: lodash__WEBPACK_IMPORTED_MODULE_6___default.a.lowerCase(family),
              filteredDishes: _this3.state.groupedDishes[family]
            });
          }
        }, lodash__WEBPACK_IMPORTED_MODULE_6___default.a.upperFirst(family), "s");
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DishCards, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_pose__WEBPACK_IMPORTED_MODULE_4__["PoseGroup"], null, this.state.filteredDishes.map(function (dish) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledPosedDishCard, {
          key: dish.id,
          onClick: function onClick() {
            return _this3.setState({
              activeDish: dish.id
            });
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_DishCard__WEBPACK_IMPORTED_MODULE_11__["default"], {
          dish: dish
        }));
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_pose__WEBPACK_IMPORTED_MODULE_4__["PoseGroup"], null, this.state.activeDish !== "" && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledSwiperContainer, {
        key: "0"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Swiper__WEBPACK_IMPORTED_MODULE_12__["default"], {
        dish: this.state.activeDish,
        dishes: this.state.filteredDishes,
        dishIndex: lodash__WEBPACK_IMPORTED_MODULE_6___default.a.findIndex(this.state.filteredDishes, {
          id: this.state.activeDish
        }),
        title: this.state.activeFilter,
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
                return _config__WEBPACK_IMPORTED_MODULE_7__["default"].get('restaurants', {
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
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/restaurant")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=restaurant.js.847b0e5c9931622cd4cf.hot-update.js.map