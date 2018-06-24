// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';
import { Label } from '../typography';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: flex-end;
  margin: ${({ margin = '0 0 1rem 0' }) => margin};
`;

const StyledInput = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
  outline: none;

  box-shadow: inset 0 0 0 1px hsla(var(--hsl-text), 0.5);
  transition: 250ms;

  &:checked {
    box-shadow: inset 0 0 0 6px hsl(var(--hsl-info));
  }
}

input:checked {
  border: 6px solid black;
}
`;

export default function Radio({
  name, label, margin, ...rest
}) {
  return (
    <Wrapper margin={margin}>
      <Label htmlFor={name}>{label}</Label>
      <StyledInput id={name} type="radio" name={name} {...rest} />
    </Wrapper>
  );
}

Radio.propTypes = {
  name:   string.isRequired,
  label:  string.isRequired,
  margin: string,
};
Radio.defaultProps = {
  margin: null,
};
