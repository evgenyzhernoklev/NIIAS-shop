"use strict";

import lax from 'lax.js'

class Parallax {
  constructor() {
    this.init();
  }

  init() {
    lax.init();
    lax.addDriver('scrollY', function() {
      return window.scrollY;
    }, { inertiaEnabled: true });

    this._initMainPage();
    this._initKartoriumPage();
    this._initKartoriumSchemePage();
    this._initKartoriumAlbumPage();
  }

  _initMainPage() {
    lax.addElements(
      '.js-parallax-item[data-item="main-1"]',
      {
        scrollY: {
          translateX: [
            [0, 300, 500, 1000],
            ['- elWidth/4', 'screenWidth/4', 'screenWidth/2 - elWidth/2', 'screenWidth/2 - elWidth/2']
          ],
          scale: [
            [0, 500],
            [0.5, 1.5]
          ],
          opacity: [
            [800, 1000],
            [1, 0]
          ]
        }
      }
    );
    lax.addElements(
      '.js-parallax-item[data-item="main-2"]',
      {
        scrollY: {
          translateX: [
            [0, 300, 400],
            [0, '-screenWidth/4 - 120', '-screenWidth/4 - 120']
          ],
          "width": [
            [0, 300],
            [700, 350],
            {
              inertia: -1,
              cssFn: (val) => {
                return `${Math.abs(val)}px`
              }
            }
          ],
          opacity: [
            [0, 400],
            [1, 0]
          ]
        }
      }
    );
    lax.addElements(
      '.js-parallax-item[data-item="main-3"]',
      {
        scrollY: {
          translateY: [
            [1500, 2000, 2200],
            [0, '-screenHeight', '-screenHeight - elHeight']
          ],
          scale: [
            [800, 1500],
            [0, 2]
          ]
        }
      }
    );
    lax.addElements(
      '.js-parallax-item[data-item="main-4"]',
      {
        scrollY: {
          translateY: [
            [1500, 2000, 2200, 2500, 3000],
            ['screenHeight', 'screenHeight/2', 'screenHeight/2 - 100', 'screenHeight/2 - 100', '-screenHeight']
          ]
        }
      }
    );
  }

  _initKartoriumPage() {
    lax.addElements(
      '.js-parallax-item[data-item="kartorium-1"]',
      {
        scrollY: {
          scale: [
            [300, 1300],
            [1, 3]
          ],
          opacity: [
            [300, 1300],
            [1, 0]
          ]
        }
      }
    );
    lax.addElements(
      '.js-parallax-item[data-item="kartorium-2"]',
      {
        scrollY: {
          scale: [
            [800, 1800],
            [3, 1]
          ],
          opacity: [
            [800, 1800],
            [0, 1]
          ],
          translateY: [
            [2100, 2400, 3000, 3500],
            ['0', '-100', '-100', '-screenHeight']
          ]
        }
      }
    );
    lax.addElements(
      '.js-parallax-item[data-item="kartorium-4"]',
      {
        scrollY: {
          translateY: [
            [1900, 2400, 3000, 3500, 4000],
            ['screenHeight', 'elHeight*2', 'elHeight*2', '-screenHeight/2', '-screenHeight']
          ]
        }
      }
    );
  }

  _initKartoriumSchemePage() {
    lax.addElements(
      '.js-parallax-item[data-item="kartorium-scheme-1"]',
      {
        scrollY: {
          translateX: [
            [0, 400, 1400],
            ['0', '0', '-screenWidth']
          ]
        }
      }
    );
    lax.addElements(
      '.js-parallax-item[data-item="kartorium-scheme-2"]',
      {
        scrollY: {
          translateX: [
            [600, 1400],
            ['screenWidth', '0']
          ],
          scale: [
            [1400, 2200],
            [1, 2]
          ],
          opacity: [
            [1400, 2200],
            [1, 0]
          ]
        }
      }
    );
  }

  _initKartoriumAlbumPage() {
    lax.addElements(
      '.js-parallax-item[data-item="kartorium-album-1"]',
      {
        scrollY: {
          translateY: [
            [0, 200, 1200],
            ['0', '0', '-screenHeight']
          ]
        }
      }
    );
    lax.addElements(
      '.js-parallax-item[data-item="kartorium-album-2"]',
      {
        scrollY: {
          translateY: [
            [300, 800, 1500, 2500],
            ['screenHeight', '0', '0', '-screenHeight'],
            { inertia: 1 }
          ]
        }
      }
    );
    lax.addElements(
      '.js-parallax-item[data-item="kartorium-album-3"]',
      {
        scrollY: {
          translateY: [
            [1600, 2100, 2700, 3200],
            ['screenHeight', '0', '0', '-screenHeight'],
            { inertia: 5 }
          ]
        }
      }
    );
  }
}

export default Parallax;
