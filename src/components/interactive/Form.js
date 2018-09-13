// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';
import { mediaQuerise } from '../../utils';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default styled.form(
  {
    gridArea: 'form',
    display:  'grid',
  },
  ({ gridGap = '2rem 1rem', gridTemplate }) => ({
    ...mediaQuerise({ gridTemplate }),
    ...mediaQuerise({ gridGap }),
  }),
);
