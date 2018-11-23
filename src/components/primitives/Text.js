// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';

import { View } from '~components/primitives/View';

import { mediaQuerise } from '~utils';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export const Text = styled(View)(
  {},
  ({
    color,
    fontFamily,
    fontSize,
    fontWeight,
    lineHeight,
    letterSpacing,
    textAlign,
    textTransform,
    whiteSpace,
    hyphens,
  }) => ({
    ...mediaQuerise({
      color,
      fontFamily,
      fontSize,
      fontWeight,
      lineHeight,
      letterSpacing,
      textAlign,
      textTransform,
      whiteSpace,
      hyphens,
    }),
  }),
);

Text.defaultProps = { as: 'span' };
