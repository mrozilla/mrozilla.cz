// =============================================================================
// Import
// =============================================================================

import { css, keyframes } from 'styled-components';
import { complement, desaturate, lighten, darken } from 'polished';

// =============================================================================
// Colour
// =============================================================================

export const colour = {
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
  grey:  {
    get basic() {
      return desaturate(0.75, colour.brand.primary); // ~'#55595c'
    },
    get lightest() {
      return lighten(0.43, this.basic); // ~#f7f7f9
    },
    get lighter() {
      return lighten(0.40, this.basic); // ~#f7f7f9
    },
    get light() {
      return lighten(0.30, this.basic); // ~#818a91
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
  }
};

// =============================================================================
// Z-index
// =============================================================================

export const zIndex = {
  navbar:   {
    basic:  '1000',
    sticky: '1020',
    fixed:  '1030',
  },
  dropdown: '1010',
  sidebar:  '1020',
  modal:    {
    bg:   '1040',
    body: '1050',
  },
  popover:  '1060',
  tooltip:  '1070',
};

// =============================================================================
// Grid
// =============================================================================

export const grid = {
  gutter:  1,
  columns: '12',
  width:   {
    xs: '100%',
    sm: '576px',
    md: '720px',
    lg: '940px',
    xl: '940px', // replaced from 1140px
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
// Typography
// =============================================================================

export const typography = {
  font: {
    family:     {
      headings: 'Nunito',
      body:     'Roboto Mono',
    },
    size:       {
      root: '125%',
      base: '0.85rem',
    },
    lineHeight: '1rem',
    colour:     {
      body: colour.grey.dark,
    }
  },
};

// =============================================================================
// Border
// =============================================================================

export const border = {
  radius: {
    small:  '0.25rem',
    medium: '0.5rem',
    big:    '1rem',
  },
};

// =============================================================================
// Box shadow
// =============================================================================

export const shadow = {
  small:  `0 0 1rem rgba(0,0,0,0.25)`,
  medium: `0 0 2rem rgba(0,0,0,0.25)`,
  big:    `0 0 5rem rgba(0,0,0,0.25)`,
};

// =============================================================================
// Transitions
// =============================================================================

export const transition = {
  primary:   {
    short:  '250ms cubic-bezier(.6, .2, .1, 1)',
    medium: '500ms cubic-bezier(.6, .2, .1, 1)',
    long:   '1000ms cubic-bezier(.6, .2, .1, 1)',
  },
  secondary: {
    short:  '250ms cubic-bezier(.25, .1, .25, 1)',
    medium: '500ms cubic-bezier(.25, .1, .25, 1)',
    long:   '1000ms cubic-bezier(.25, .1, .25, 1)',
  }
};

// =============================================================================
// Animations
// =============================================================================

export const animation = {
  slide:     {
    up:    keyframes`
      from { transform: scaleY(0); transform-origin: bottom; }
      40% { transform: scaleY(1); transform-origin: bottom; }
      60% { transform: scaleY(1); transform-origin: top; }
      to { transform: scaleY(0); transform-origin: top; }
    `,
    right: keyframes`
      from { transform: scaleX(0); transform-origin: left; }
      40% { transform: scaleX(1); transform-origin: left; }
      60% { transform: scaleX(1); transform-origin: right; }
      to { transform: scaleX(0); transform-origin: right; }
    `,
    down:  keyframes`
      from { transform: scaleY(0); transform-origin: top; }
      40% { transform: scaleY(1); transform-origin: top; }
      60% { transform: scaleY(1); transform-origin: bottom; }
      to { transform: scaleY(0); transform-origin: bottom; }
    `,
    left:  keyframes`
      from { transform: scaleX(0); transform-origin: right; }
      40% { transform: scaleX(1); transform-origin: right; }
      60% { transform: scaleX(1); transform-origin: left; }
      to { transform: scaleX(0); transform-origin: left; }
    `,
  },
  slideBack: {
    up:    keyframes`
      from, to { transform: scaleY(0); transform-origin: bottom; }
      40%, 60% { transform: scaleY(1); }
    `,
    right: keyframes`
      from, to { transform: scaleX(0); transform-origin: left; }
      40%, 60% { transform: scaleX(1); }
    `,
    down:  keyframes`
      from, to { transform: scaleY(0); transform-origin: top; }
      40%, 60% { transform: scaleY(1); }
    `,
    left:  keyframes`
      from, to { transform: scaleX(0); transform-origin: right; }
      40%, 60% { transform: scaleX(1); }
    `,
  },
  appear:    keyframes`
    from, 40% { opacity: 0; }
    60%, to { opacity: 1; }
  `,
};

// =============================================================================
// Mixins
// =============================================================================

export function positionAbsolute() {
  return `
    position: absolute;
    top: 0; bottom: 0; left: 0; right: 0;
    width: 100%; height: 100%;
  `;
}

// =============================================================================
// Dynamic classes
// =============================================================================

export const activeClassName = 'active';

// =============================================================================
// Normalise
// =============================================================================

export const reboot = css`
  html {
    box-sizing: border-box;
    font-size: ${typography.font.size.root};
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: ${typography.font.family.body};
    font-size: ${typography.font.size.base};
    line-height: ${typography.font.lineHeight};
    color: ${typography.font.colour.body};
    background-color: ${colour.background};
    -webkit-font-smoothing: antialiased;
  }
  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    white-space: pre-line;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  figure {
    margin: 0;
  }
  img[src=""], img:not([src]) {
    opacity: 0;
  }
`;