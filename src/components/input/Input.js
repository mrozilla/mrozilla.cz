// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import styled from 'styled-components';
import { Label, Text } from '../../components';

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
  width: ${({ width = '100%' }) => width};
  border: ${({ border = '1px solid var(--color-grey-light)' }) => border};
  border-radius: 1rem;
`;

const StyledInput = styled.input`
  outline: 0;
  border: 0;
  flex: 1;
  padding: ${({ padding = '1rem' }) => padding};
  &::placeholder {
    opacity: 0.5;
  }
`;

export default function Input({
  type = 'text',
  label = 'input',
  margin,
  width,
  border,
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
      <InputWrapper width={width} border={border}>
        {renderLeft && renderLeft()}
        <StyledInput type={type} name={label} {...rest} />
        {renderRight && renderRight()}
      </InputWrapper>
      {description && (
        <Text fontSize="1.25rem" opacity="0.75" padding="0 1rem">
          {description}
        </Text>
      )}
    </Wrapper>
  );
}
