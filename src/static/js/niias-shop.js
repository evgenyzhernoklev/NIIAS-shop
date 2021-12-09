"use strict";

// import Dropdowns  from "../js/dropdown";

document.addEventListener('DOMContentLoaded', () => {
  // toggle hidden info block
  let buttonToggleHiddenInfo = document.body.querySelectorAll('.js-hidden-info-button');

  for (let i = 0; i < buttonToggleHiddenInfo.length; i++) {
    buttonToggleHiddenInfo[i].addEventListener('click', (e) => {
      e.target.closest('.js-hidden-info').classList.toggle('is-shown');
    });
  }
});
