// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';

import { View } from '~components/primitives/View';
import { fadeUpAnimation } from '~utils/style/animations';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export const Main = styled(View)`
  grid-area: main;
  display: grid;

  animation: ${fadeUpAnimation} 500ms;
`;
Main.defaultProps = { as: 'main' };
