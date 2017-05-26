// =============================================================================
// Imports
// =============================================================================

import { css } from 'styled-components';
import { complement, desaturate, lighten, darken }        from 'polished';

// =============================================================================
// Colour
// =============================================================================

export let colour = {
  brand: {
    primary:   "#ea2e42",
    secondary: "#ffe400",
    success: "#5cb85c",
    info:    "#5bc0de",
    warning: "#f0ad4e",
    danger:  "#d9534f",

    complement: complement(this.brand.primary),
  },
};

// =============================================================================
// Export
// =============================================================================

// export * as styles; // FIXME figure out syntax