// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import styled, { css } from 'styled-components';

import { View } from '~components/primitives/View';
import { fadeOutAnimation } from '~utils';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export const Toast = styled(View)`
  position: fixed;
  padding: 1rem;
  text-align: center;

  z-index: var(--z-index-toast);

  animation: ${({ animation = css`250ms ${fadeOutAnimation} forwards 750ms` }) => animation};
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ color = 'white' }) => color};
`;
Toast.defaultProps = {
  as:              'aside',
  backgroundColor: 'var(--color-success)',
  top:             0,
  right:           0,
  left:            0,
};
