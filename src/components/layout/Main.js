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
  },
  ({
    gridGap = '1rem',
    gridTemplate,
    animation = `${fadeUpAnimation} 750ms forwards`,
  }) => ({
    ...mediaQuerise({ gridGap }),
    ...mediaQuerise({ gridTemplate }),
    ...mediaQuerise({ animation }),
  }),
);
