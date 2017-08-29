// =============================================================================
// Import
// =============================================================================

import { keyframes } from 'styled-components';

// =============================================================================
// Styles
// =============================================================================

const animation = {
  slide: {
    // up: css.keyframes({
    //   '0%':   { transform: 'scaleY(0)', transformOrigin: 'bottom' },
    //   '40%':  { transform: 'scaleY(1)', transformOrigin: 'bottom' },
    //   '60%':  { transform: 'scaleY(1)', transformOrigin: 'top' },
    //   '100%': { transform: 'scaleY(0)', transformOrigin: 'top' },
    // }),
    right: keyframes`
      0%   { transform: scaleX(0); transform-origin: left; }
      40%  { transform: scaleX(1); transform-origin: left; }
      60%  { transform: scaleX(1); transform-origin: right; }
      100% { transform: scaleX(0); transform-origin: right; }
    `,
    // down: css.keyframes({
    //   '0%':   { transform: 'scaleY(0)', transformOrigin: 'top' },
    //   '40%':  { transform: 'scaleY(1)', transformOrigin: 'top' },
    //   '60%':  { transform: 'scaleY(1)', transformOrigin: 'bottom' },
    //   '100%': { transform: 'scaleY(0)', transformOrigin: 'bottom' },
    // }),
    // left: css.keyframes({
    //   '0%':   { transform: 'scaleX(0)', transformOrigin: 'right' },
    //   '40%':  { transform: 'scaleX(1)', transformOrigin: 'right' },
    //   '60%':  { transform: 'scaleX(1)', transformOrigin: 'left' },
    //   '100%': { transform: 'scaleX(0)', transformOrigin: 'left' },
    // }),
  },
  // slideBack: {
  //   up: css.keyframes({
  //     'from, to': { transform: 'scaleY(0)', transformOrigin: 'bottom' },
  //     '40%, 60%': { transform: 'scaleY(1)' },
  //   }),
  //   right: css.keyframes({
  //     'from, to': { transform: 'scaleX(0)', transformOrigin: 'left' },
  //     '40%, 60%': { transform: 'scaleX(1)' },
  //   }),
  //   down: css.keyframes({
  //     'from, to': { transform: 'scaleY(0)', transformOrigin: 'top' },
  //     '40%, 60%': { transform: 'scaleY(1)' },
  //   }),
  //   left: css.keyframes({
  //     'from, to': { transform: 'scaleX(0)', transformOrigin: 'right' },
  //     '40%, 60%': { transform: 'scaleX(1)' },
  //   }),
  // },
  appear: keyframes`
    from, 40% { opacity: 0; }
    60%, to   { opacity: 1; }
  `,
};

// =============================================================================
// Export
// =============================================================================

export default animation;
