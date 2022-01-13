"use strict";

class Menu {
  constructor() {
    this.$container = document.body.querySelector('.js-menu');
    this.$close     = this.$container.querySelector('.js-menu-close');
    this.$items     = this.$container.querySelectorAll('.js-menu-item');
    this.$links     = this.$container.querySelectorAll('.js-menu-link');
    this.$linksBack = this.$container.querySelectorAll('.js-menu-link-back');
    this.classList  = {
      active: 'is-active'
    };
    this.init();
  }

  init() {
    this.listenEvents();
  }

  listenEvents() {
    this.$close.addEventListener('click', this._toggleMenu.bind(this));
    for (let i = 0; i < this.$links.length; i++) {
      this.$links[i].addEventListener('click', this._toggleMenuList.bind(this));
    }
    for (let i = 0; i < this.$linksBack.length; i++) {
      this.$linksBack[i].addEventListener('click', this._showPrevMenu.bind(this));
    }
  }

  _toggleMenu() {
    this.$container.classList.toggle(this.classList.active);
    this.$close.classList.toggle(this.classList.active);
    for (let i = 0; i < this.$items.length; i++) {
      this.$items[i].classList.remove(this.classList.active);
    }
  }

  _toggleMenuList(e) {
    e.preventDefault();
    e.target.closest('.js-menu-item').classList.toggle(this.classList.active);
  }

  _showPrevMenu(e) {
    e.preventDefault();
    e.target.closest('.js-menu-item').classList.remove(this.classList.active);
  }
}

export default Menu;
