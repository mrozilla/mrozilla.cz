// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';

import { View } from '~components/primitives/View';
import { animation } from '~utils';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export const Main = styled(View)`
`;

Main.defaultProps = {
  as:        'main',
  gridArea:  'main',
  display:   'grid',
  animation: animation({
    from: {
      opacity:   0,
      transform: 'translateY(1vh)',
    },
    to: {
      opacity:   1,
      transform: 'translateY(0)',
    },
    properties: '500ms',
  }),
};
