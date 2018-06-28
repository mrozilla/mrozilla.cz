// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { string, func } from 'prop-types';
import styled from 'styled-components';
import { Label, Text } from '../typography';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

const Wrapper = styled.div`
  margin: ${({ margin = '0 0 1rem 0' }) => margin};
`;

const InputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  overflow: hidden;
  width: ${({ width }) => width};
  box-shadow: inset 0 0 0 1px var(--color-grey-light);
  border-radius: 1rem;
  background-color: hsla(var(--hsl-grey), 0.1);
`;

const StyledInput = styled.input`
  outline: 0;
  border: 0;
  flex: 1;
  padding: ${({ padding = '1rem' }) => padding};
  background-color: transparent;
  &::placeholder {
    opacity: 0.5;
  }
`;

export default function Input({
  type = 'text',
  label = 'input',
  margin,
  width,
  description,
  renderLeft,
  renderRight,
  ...rest
}) {
  return (
    <Wrapper margin={margin}>
      {label !== 'input' && (
        <Label htmlFor={label} padding="0 1rem">
          {label}
        </Label>
      )}
      {description && (
        <Text
          fontSize="1.25rem"
          lineHeight="1.25rem"
          opacity="0.75"
          padding="0 1rem"
          margin="0.5rem 0"
        >
          {description}
        </Text>
      )}
      <InputWrapper width={width}>
        {renderLeft && renderLeft()}
        <StyledInput type={type} name={label} {...rest} />
        {renderRight && renderRight()}
      </InputWrapper>
    </Wrapper>
  );
}

Input.propTypes = {
  type:        string,
  label:       string.isRequired,
  margin:      string,
  width:       string,
  description: string,
  renderLeft:  func,
  renderRight: func,
};
Input.defaultProps = {
  type:        'text',
  margin:      '0 0 1rem 0',
  width:       null, // '100%'
  description: null,
  renderLeft:  null,
  renderRight: null,
};
