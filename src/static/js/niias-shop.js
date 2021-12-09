"use strict";

// import Dropdowns  from "../js/dropdown";

document.addEventListener('DOMContentLoaded', () => {
  let buttonToShowHiddenInfo = document.body.querySelectorAll('.js-hidden-info-button');

  for (let i = 0; i < buttonToShowHiddenInfo.length; i++) {
    buttonToShowHiddenInfo[i].addEventListener('click', (e) => {
      e.target.closest('.js-hidden-info').classList.toggle('is-shown');
    });
  }
});
