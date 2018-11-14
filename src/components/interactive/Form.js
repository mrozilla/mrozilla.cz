// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';

import { Layout } from '~components/primitives/Layout';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export const Form = styled(Layout)`
  display: grid;
  grid-gap: 1rem;
`;
Form.defaultProps = { as: 'form', gridArea: 'form' };
