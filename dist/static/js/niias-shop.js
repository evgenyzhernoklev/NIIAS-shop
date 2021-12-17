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
  "/Users/evgenyzhernoklev/Projects/NIIAS-shop/src/static/js/niias-shop.js": [function (require, module, exports) {
    "use strict"; // import Dropdowns  from "../js/dropdown";

    document.addEventListener('DOMContentLoaded', function () {
      // toggle hidden info block
      var buttonToggleHiddenInfo = document.body.querySelectorAll('.js-hidden-info-button');

      for (var i = 0; i < buttonToggleHiddenInfo.length; i++) {
        buttonToggleHiddenInfo[i].addEventListener('click', function (e) {
          e.target.closest('.js-hidden-info').classList.toggle('is-shown');
        });
      }
    });
  }, {}]
}, {}, ["/Users/evgenyzhernoklev/Projects/NIIAS-shop/src/static/js/niias-shop.js"]);
//# sourceMappingURL=maps/niias-shop.js.map
