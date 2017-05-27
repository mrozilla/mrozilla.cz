// =============================================================================
// Imports
// =============================================================================

import { css } from 'styled-components';
import { complement, desaturate, lighten, darken }        from 'polished';

// =============================================================================
// Colour
// =============================================================================

export const colour = {
  brand: {
    primary:   "#ea2e42",
    get secondary() {
      return darken(0.1, this.primary);
    },
    success:   "#5cb85c",
    info:      "#5bc0de",
    warning:   "#f0ad4e",
    danger:    "#d9534f",
    get complement() {
      return complement(this.primary);
    },
    get gradient() {
      return `linear-gradient(45deg, ${this.primary}, ${this.secondary})`;
    },
  },
  grey:  {
    get basic() {
      return desaturate(0.95, colour.brand.primary); // ~"#55595c"
    },
    get lightest() {
      return lighten(0.47, this.basic); // ~#f7f7f9
    },
    get lighter() {
      return lighten(0.42, this.basic); // ~#f7f7f9
    },
    get light() {
      return lighten(0.42, this.basic); // ~#818a91
    },
    get dark() {
      return darken(0.25, this.basic); // ~#373a3c
    },
    get darker() {
      return darken(0.42, this.basic); // FIXME add target colour
    },
    get darkest() {
      return darken(0.47, this.basic); // FIXME add target colour
    },
  },
};

// background: gray--lightest
// background--inverse: brand--primary
//
// link: brand--primary
// link--hover:	darken(link, 10%)
// link--visited:	darken(link, 25%)

// =============================================================================
// Z-index
// =============================================================================

export const zIndex = {
  navbar:   {
    basic:  "1000",
    sticky: "1020",
    fixed:  "1030",
  },
  dropdown: "1010",
  sidebar:  "1020",
  modal:    {
    bg:   "1040",
    body: "1050",
  },
  popover:  "1060",
  tooltip:  "1070",
};

// =============================================================================
// Grid
// =============================================================================

export const grid = {
  gutter:  "1rem",
  columns: "12",
  width:   {
    xs: "100%",
    sm: "576px",
    md: "720px",
    lg: "940px",
    xl: "1140px",
  }
};

// =============================================================================
// Media
// =============================================================================

const mediaSizes = {
  xs: 0,		// Extra small screen / phone
  sm: 544,	// Small screen / phone
  md: 768,	// Medium screen / tablet
  lg: 992,	// Large screen / desktop
  xl: 1200,	// Extra large screen / wide desktop
};

export const media = Object.keys(mediaSizes).reduce((acc, val) => {
  acc[val] = (...args) => css`@media (min-width: ${mediaSizes[val]}px) {${css(...args)}}`;
  return acc;
}, {});

// =============================================================================
// Export
// =============================================================================

// export * as styles; // FIXME figure out syntax