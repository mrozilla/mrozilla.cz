// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import styled from 'styled-components';
import { Label } from '../../components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  justify-content: flex-end;
  margin: ${({ margin = '0 0 1rem 0' }) => margin};
`;

const StyledInput = styled.input`
  margin-right: 1rem;
`;

export default function Checkbox({
  name, label = 'input', margin, ...rest
}) {
  return (
    <Wrapper margin={margin}>
      <Label htmlFor={name}>{label}</Label>
      <StyledInput type="checkbox" name={name} {...rest} />
    </Wrapper>
  );
}
