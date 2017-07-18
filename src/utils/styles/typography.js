// =============================================================================
// Import
// =============================================================================

import { css } from 'glamor';
import { color } from '../styles';

import nunitoLight from '../../utils/fonts/nnt-300.woff2';
import nunitoBlack from '../../utils/fonts/nnt-900.woff2';
import robotoMono from '../../utils/fonts/rbtmn-400.woff2';
import robotoMonoBold from '../../utils/fonts/rbtmn-700.woff2';

// =============================================================================
// Fonts
// =============================================================================

css.fontFace({
  fontFamily: 'Nunito',
  fontStyle:  'normal',
  fontWeight: 300,
  src:        `local('Nunito Light'), url('${nunitoLight}') format('woff2')`,
});

css.fontFace({
  fontFamily: 'Nunito',
  fontStyle:  'normal',
  fontWeight: 900,
  src:        `local('Nunito Black'), url('${nunitoBlack}') format('woff2')`,
});

css.fontFace({
  fontFamily: 'Roboto Mono',
  fontStyle:  'normal',
  fontWeight: 400,
  src:        `local('Roboto Mono'), url('${robotoMono}')`,
});

css.fontFace({
  fontFamily: 'Roboto Mono',
  fontStyle:  'normal',
  fontWeight: 700,
  src:        `local('Roboto Mono Bold'), url('${robotoMonoBold}')`,
});

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
