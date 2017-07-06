// =============================================================================
// Import
// =============================================================================

import { complement, desaturate, lighten, darken } from 'polished';

// =============================================================================
// Styles
// =============================================================================

const colour = {
  brand: {
    primary: '#ea2e42',
    get secondary() {
      return darken(0.1, this.primary);
    },
    success: '#5cb85c',
    info:    '#5bc0de',
    warning: '#f0ad4e',
    danger:  '#d9534f',
    get complement() {
      return complement(this.primary);
    },
    get gradient() {
      return `linear-gradient(45deg, ${this.primary}, ${this.secondary})`;
    },
  },
  grey: {
    get basic() {
      return desaturate(0.75, colour.brand.primary); // ~'#55595c'
    },
    get lightest() {
      return lighten(0.43, this.basic); // ~#f7f7f9
    },
    get lighter() {
      return lighten(0.4, this.basic); // ~#f7f7f9
    },
    get light() {
      return lighten(0.3, this.basic); // ~#818a91
    },
    get dark() {
      return darken(0.15, desaturate(0.05, this.basic)); // ~#373a3c
    },
    get darker() {
      return darken(0.42, this.basic); // FIXME add target colour
    },
    get darkest() {
      return darken(0.47, this.basic); // FIXME add target colour
    },
  },
  get background() {
    return this.grey.lightest;
  },
};

// =============================================================================
// Styles
// =============================================================================

export default colour;
