// =============================================================================
// Import
// =============================================================================

import { typography, color } from '../styles';

// =============================================================================
// Reboot
// =============================================================================

const reboot = `
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
    color: ${typography.font.color.body};
    background-color: ${color.background};
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
  ::selection {
    background-color: ${color.brand.primary};
  }
  ::-moz-selection {
    background-color: ${color.brand.primary};
  }
`;

// =============================================================================
// Export
// =============================================================================

export default reboot;
