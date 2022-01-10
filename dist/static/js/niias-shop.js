"use strict";

(function () {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;
          if (!f && c) return c(i, !0);
          if (u) return u(i, !0);
          var a = new Error("Cannot find module '" + i + "'");
          throw a.code = "MODULE_NOT_FOUND", a;
        }

        var p = n[i] = {
          exports: {}
        };
        e[i][0].call(p.exports, function (r) {
          var n = e[i][1][r];
          return o(n || r);
        }, p, p.exports, r, e, n, t);
      }

      return n[i].exports;
    }

    for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) {
      o(t[i]);
    }

    return o;
  }

  return r;
})()({
  "/Users/evgenyzhernoklev/Projects/NIIAS-shop/src/static/js/menu.js": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", {
        writable: false
      });
      return Constructor;
    }

    var Menu = /*#__PURE__*/function () {
      function Menu($container) {
        _classCallCheck(this, Menu);

        this.$container = document.body.querySelector($container);
        this.$close = this.$container.querySelector('.js-menu-close');
        this.$items = this.$container.querySelectorAll('.js-menu-item');
        this.$links = this.$container.querySelectorAll('.js-menu-link');
        this.$linksBack = this.$container.querySelectorAll('.js-menu-link-back');
        this.classList = {
          active: 'is-active'
        };
        this.init();
      }

      _createClass(Menu, [{
        key: "init",
        value: function init() {
          this.listenEvents();
        }
      }, {
        key: "listenEvents",
        value: function listenEvents() {
          this.$close.addEventListener('click', this._toggleMenu.bind(this));

          for (var i = 0; i < this.$links.length; i++) {
            this.$links[i].addEventListener('click', this._toggleMenuList.bind(this));
          }

          for (var _i = 0; _i < this.$linksBack.length; _i++) {
            this.$linksBack[_i].addEventListener('click', this._showPrevMenu.bind(this));
          }
        }
      }, {
        key: "_toggleMenu",
        value: function _toggleMenu() {
          this.$container.classList.toggle(this.classList.active);
          this.$close.classList.toggle(this.classList.active);

          for (var i = 0; i < this.$items.length; i++) {
            this.$items[i].classList.remove(this.classList.active);
          }
        }
      }, {
        key: "_toggleMenuList",
        value: function _toggleMenuList(e) {
          e.preventDefault();
          e.target.closest('.js-menu-item').classList.toggle(this.classList.active);
        }
      }, {
        key: "_showPrevMenu",
        value: function _showPrevMenu(e) {
          e.preventDefault();
          e.target.closest('.js-menu-item').classList.remove(this.classList.active);
        }
      }]);

      return Menu;
    }();

    var _default = Menu;
    exports["default"] = _default;
  }, {}],
  "/Users/evgenyzhernoklev/Projects/NIIAS-shop/src/static/js/niias-shop.js": [function (require, module, exports) {
    "use strict";

    var _menu = _interopRequireDefault(require("../js/menu"));

    var _parallax = _interopRequireDefault(require("../js/parallax"));

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        "default": obj
      };
    }

    document.addEventListener('DOMContentLoaded', function () {
      new _menu["default"]('.js-menu'); // init parallax

      var $parallax = document.body.querySelectorAll('.js-parallax');

      for (var i = 0; i < $parallax.length; i++) {
        new _parallax["default"]($parallax[i]);
      } // toggle hidden info block


      var buttonToggleHiddenInfo = document.body.querySelectorAll('.js-hidden-info-button');

      for (var _i = 0; _i < buttonToggleHiddenInfo.length; _i++) {
        buttonToggleHiddenInfo[_i].addEventListener('click', function (e) {
          e.target.closest('.js-hidden-info').classList.toggle('is-shown');
        });
      }
    });
  }, {
    "../js/menu": "/Users/evgenyzhernoklev/Projects/NIIAS-shop/src/static/js/menu.js",
    "../js/parallax": "/Users/evgenyzhernoklev/Projects/NIIAS-shop/src/static/js/parallax.js"
  }],
  "/Users/evgenyzhernoklev/Projects/NIIAS-shop/src/static/js/parallax.js": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", {
        writable: false
      });
      return Constructor;
    }

    var Parallax = /*#__PURE__*/function () {
      function Parallax($container) {
        _classCallCheck(this, Parallax);

        this.$container = $container;
        this.$items = this.$container.querySelectorAll('.js-parallax-item');
        this.init();
      }

      _createClass(Parallax, [{
        key: "init",
        value: function init() {
          this._setContainerHeight();

          this.listenEvents();
        }
      }, {
        key: "listenEvents",
        value: function listenEvents() {
          window.addEventListener('scroll', this.animate.bind(this));
          window.addEventListener('resize', this._updateElementsPositions.bind(this));
        }
      }, {
        key: "animate",
        value: function animate(e) {}
      }, {
        key: "_setContainerHeight",
        value: function _setContainerHeight() {
          this.$container.style.height = document.documentElement.clientHeight + 'px';
        }
      }, {
        key: "_updateElementsPositions",
        value: function _updateElementsPositions() {
          this._setContainerHeight();
        }
      }]);

      return Parallax;
    }();

    var _default = Parallax;
    exports["default"] = _default;
  }, {}]
}, {}, ["/Users/evgenyzhernoklev/Projects/NIIAS-shop/src/static/js/niias-shop.js"]);