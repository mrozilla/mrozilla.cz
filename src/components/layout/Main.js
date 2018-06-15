// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import styled, { keyframes } from 'styled-components';
import { mediaQuerise } from '../../utils';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(1vh); }
  to   { opacity: 1; transform: translateY(0); }
`;

export default styled.main(
  {
    gridArea: 'main',
    display:  'grid',
  },
  ({
    gridGap = '1rem',
    gridTemplate,
    animation = `${fadeUp} 750ms forwards`,
  }) => ({
    ...mediaQuerise({ gridGap }),
    ...mediaQuerise({ gridTemplate }),
    ...mediaQuerise({ animation }),
  }),
);
