// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';
import { mediaQuerise, fadeOutAnimation } from '../../utils';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default styled.aside(
  {
    position:  'fixed',
    left:      0,
    right:     0,
    padding:   '1rem',
    textAlign: 'center',
    zIndex:    'var(--z-index-popup)',
  },
  ({
    duration = 1000,
    color = 'white',
    backgroundColor = 'var(--color-success)',
    fontSize,
    top = '0',
    bottom = 'auto',
    animation = `250ms ${fadeOutAnimation} forwards`,
  }) => ({
    color,
    backgroundColor,
    fontSize,
    ...mediaQuerise({ top, bottom }),
    animation,
    animationDelay: `${duration - 250}ms`,
  }),
);
