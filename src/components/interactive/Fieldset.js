// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';

import { View } from '~components/primitives/View';
import { Tooltip } from '~components/text/Tooltip';

// ─────────────────────────────────────────────────────────────────────────────
// fieldset
// ─────────────────────────────────────────────────────────────────────────────

export const Fieldset = styled(View)`
  position: relative;
  border: none;

  & > ${Tooltip} {
    visibility: hidden;
    opacity: 0;
    transform: translateY(1rem);
  }

  &:hover > ${Tooltip}, &:focus > ${Tooltip}, &:focus-within > ${Tooltip} {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
  }
`;
Fieldset.defaultProps = { as: 'fieldset' };
