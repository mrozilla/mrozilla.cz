// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import { keyframes } from 'styled-components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export const fadeUpAnimation = keyframes`
  from { opacity: 0; transform: translateY(1vh); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const fadeDownAnimation = keyframes`
  from { opacity: 0; transform: translateY(-1vh); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const fadeInAnimation = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

export const fadeOutAnimation = keyframes`
  from { opacity: 1; }
  to   { opacity: 0; }
`;
