// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';
import { mediaQuerise, fadeUpAnimation } from '../../utils';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default styled.main(
  {
    gridArea: 'main',
    display:  'grid',
    // animation: `${fadeUpAnimation} 750ms forwards`,
  },
  ({ gridGap = '1rem', gridTemplate }) => ({
    ...mediaQuerise({ gridGap, gridTemplate }),
  }),
);
