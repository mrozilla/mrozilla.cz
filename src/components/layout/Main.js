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
    gridArea:           'main',
    display:            'grid',
    animationName:      fadeUpAnimation,
    animationDuration:  '750ms',
    animationnFillMode: 'both',
  },
  ({ gridGap = '1rem', gridTemplate }) => ({
    ...mediaQuerise({ gridGap }),
    ...mediaQuerise({ gridTemplate }),
  }),
);
