// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';
import { fadeOutAnimation } from '../../utils';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default styled.div(
  {
    position:  'fixed',
    left:      0,
    right:     0,
    padding:   '2rem',
    textAlign: 'center',
    zIndex:    'var(--z-index-popover)',
    animation: `250ms ${fadeOutAnimation} forwards`,
  },
  ({
    duration = 1000,
    color = 'white',
    backgroundColor = 'var(--color-success',
    bottom = 'auto',
    top = '0',
  }) => ({
    animationDelay: `${duration - 250}ms`,
    color,
    backgroundColor,
    bottom,
    top,
  }),
);
