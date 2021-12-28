"use strict";

class Parallax {
  constructor($container) {
    this.$container = $container;
    this.$items     = this.$container.querySelectorAll('.js-parallax-item');
    this.init();
  }

  init() {
    this._setContainerHeight();
    this.listenEvents();
  }

  listenEvents() {
    window.addEventListener('scroll', this.animate.bind(this));
    window.addEventListener('resize', this._updateElementsPositions.bind(this));
  }

  animate(e) {

  }

  _setContainerHeight() {
    this.$container.style.height = document.documentElement.clientHeight + 'px';
  }

  _updateElementsPositions() {
    this._setContainerHeight();
  }
}

export default Parallax;
