// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';
import { fadeOutAnimation, mediaQuerise } from '../../utils';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default styled.div(
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
    bottom = 'auto',
    top = '0',
    animation = `250ms ${fadeOutAnimation} forwards`,
  }) => ({
    color,
    backgroundColor,
    fontSize,
    ...mediaQuerise({ bottom, top }),
    animation,
    animationDelay: `${duration - 250}ms`,
  }),
);
