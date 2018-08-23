// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

import Label from '../typography/Label';

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

const StyledInput = styled.input``;

export default function Checkbox({
  name, label, margin, ...rest
}) {
  return (
    <Wrapper margin={margin}>
      <Label htmlFor={name}>{label}</Label>
      <StyledInput type="checkbox" name={name} {...rest} />
    </Wrapper>
  );
}

Checkbox.propTypes = {
  name:   string.isRequired,
  label:  string.isRequired,
  margin: string,
};
Checkbox.defaultProps = {
  margin: '0 0 1rem 0',
};
