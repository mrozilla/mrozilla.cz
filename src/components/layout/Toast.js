// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import styled, { css } from 'styled-components';

import { Layout } from '../primitives';

import { fadeOutAnimation } from '../../utils';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export const Toast = styled(Layout)`
  position: fixed;
  padding: 1rem;
  text-align: center;

  z-index: var(--z-index-popup);

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
