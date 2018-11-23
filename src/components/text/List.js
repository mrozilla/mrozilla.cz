// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';

import { View } from '~components/primitives/View';
import { Text } from '~components/primitives/Text';

// ─────────────────────────────────────────────────────────────────────────────
// ul
// ─────────────────────────────────────────────────────────────────────────────

export const Ul = styled(View)`
  display: grid;

  list-style: ${({ listStyle = 'none' }) => listStyle};
`;
Ul.defaultProps = { as: 'ul' };

// ─────────────────────────────────────────────────────────────────────────────
// li
// ─────────────────────────────────────────────────────────────────────────────

export const Li = styled(Text)``;
Li.defaultProps = { as: 'li' };
