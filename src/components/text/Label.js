// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';

import { Text } from '../primitives';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export const Label = styled(Text)`
  display: block;

  animation: ${({ animation }) => animation};
`;
Label.defaultProps = {
  as:            'label',
  color:         'hsla(var(--hsl-text), 0.75)',
  fontSize:      '1.25rem',
  lineHeight:    '2rem',
  padding:       '0 1rem',
  textTransform: 'uppercase',
};
