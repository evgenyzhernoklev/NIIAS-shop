"use strict";

import ToggleHiddenInfo from "../js/toggle-hidden-info.js";
import Menu from "../js/menu";
import Parallax from "../js/parallax";

document.addEventListener('DOMContentLoaded', () => {
  new ToggleHiddenInfo();
  new Menu();

  if (document.body.querySelector('.js-parallax')) {
    new Parallax();
  }
});
