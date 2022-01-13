"use strict";

import lax from 'lax.js'

class Parallax {
  constructor() {
    this.init();
  }

  init() {
    lax.init();

    // Add a driver that we use to control our animations
    lax.addDriver('scrollY', function() {
      return window.scrollY;
    }, { inertiaEnabled: true });

    this._initMainPage();
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
}

export default Parallax;
