"use strict";

import Menu from "../js/menu";
import Parallax from "../js/parallax";

document.addEventListener('DOMContentLoaded', () => {
  new Menu('.js-menu');

  // init parallax
  let $parallax = document.body.querySelectorAll('.js-parallax');

  for (let i = 0; i < $parallax.length; i++) {
    new Parallax($parallax[i]);
  }

  // toggle hidden info block
  let buttonToggleHiddenInfo = document.body.querySelectorAll('.js-hidden-info-button');

  for (let i = 0; i < buttonToggleHiddenInfo.length; i++) {
    buttonToggleHiddenInfo[i].addEventListener('click', (e) => {
      e.target.closest('.js-hidden-info').classList.toggle('is-shown');
    });
  }
});
