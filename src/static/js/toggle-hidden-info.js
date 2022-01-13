"use strict";

class ToggleHiddenInfo {
  constructor() {
    this.buttons = document.body.querySelectorAll('.js-hidden-info-button');
    this.init();
  }

  init() {
    this.listenEvents();
  }

  listenEvents() {
    for (let i = 0; i < this.buttons.length; i++) {
      this.buttons[i].addEventListener('click', this._toggleHiddenInfo);
    }
  }

  _toggleHiddenInfo(e) {
    e.target.closest('.js-hidden-info').classList.toggle('is-shown');
  }
}

export default ToggleHiddenInfo;
