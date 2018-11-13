// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';

import { Layout } from '~components/primitives';
import { Tooltip } from '~components/text/Tooltip';

// ─────────────────────────────────────────────────────────────────────────────
// fieldset
// ─────────────────────────────────────────────────────────────────────────────

export const Fieldset = styled(Layout)`
  position: relative;
  border: none;

  & ${Tooltip} {
    visibility: hidden;
    opacity: 0;
    transform: translateY(1rem);
  }

  &:hover,
  &:focus-within {
    & ${Tooltip} {
      visibility: visible;
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
Fieldset.defaultProps = { as: 'fieldset' };
