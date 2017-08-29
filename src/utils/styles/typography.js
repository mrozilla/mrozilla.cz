// =============================================================================
// Import
// =============================================================================

import { injectGlobal } from 'styled-components';
import { color } from '../styles';

import nunitoLight from '../../utils/fonts/nnt-300.woff2';
import nunitoBlack from '../../utils/fonts/nnt-900.woff2';
import robotoMono from '../../utils/fonts/rbtmn-400.woff2';
import robotoMonoBold from '../../utils/fonts/rbtmn-700.woff2';

// =============================================================================
// Fonts
// =============================================================================

/* eslint-disable */
injectGlobal`
  @font-face {
    font-family: Nunito;
    font-style:  normal;
    font-weight: 300;
    src: local('Nunito Light'), url('${nunitoLight}') format('woff2');
  }
  @font-face {
    font-family: Nunito;
    font-style: normal;
    font-weight: 900;
    src: local('Nunito Black'), url('${nunitoBlack}') format('woff2');
  }
  @font-face {
    font-family: Roboto Mono;
    font-style: normal;
    font-weight: 400;
    src: local('Roboto Mono'), url('${robotoMono}');
  }
  @font-face {
    font-family: Roboto Mono;
    font-style: normal;
    font-weight: 700;
    src: local('Roboto Mono Bold'), url('${robotoMonoBold}');
  }
`;
/* eslint-enable */

// =============================================================================
// Typography
// =============================================================================

const typography = {
  font: {
    family: {
      headings: 'Nunito',
      body:     'Roboto Mono',
    },
    size: {
      root: '125%',
      base: '0.85rem',
    },
    lineHeight: '1rem',
    color:      {
      body: color.grey.dark,
    },
  },
};

// =============================================================================
// Export
// =============================================================================

export default typography;
