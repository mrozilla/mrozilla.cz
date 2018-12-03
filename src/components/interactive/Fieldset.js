// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';

import { View } from '~components/primitives/View';

// ─────────────────────────────────────────────────────────────────────────────
// fieldset
// ─────────────────────────────────────────────────────────────────────────────

export const Fieldset = styled(View)`
  position: relative;
  border: none;
`;
Fieldset.defaultProps = { as: 'fieldset' };
