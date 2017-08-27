// =============================================================================
// Import
// =============================================================================

import { css } from 'styled-components';

// =============================================================================
// Media
// =============================================================================

const mediaSizes = {
  xs: 0, // Extra small screen / phone
  sm: 544, // Small screen / phone
  md: 768, // Medium screen / tablet
  lg: 992, // Large screen / desktop
  xl: 1200, // Extra large screen / wide desktop
};

const media = Object.keys(mediaSizes).reduce((acc, val) => {
  acc[val] = (...args) =>
    css`@media (min-width: ${mediaSizes[val]}px) {${css(...args)}}`;
  return acc;
}, {});

// =============================================================================
// Export
// =============================================================================

export default media;
