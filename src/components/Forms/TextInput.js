// =============================================================================
// Import
// =============================================================================

// React
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import styled from 'styled-components';
import { color, border } from '../../utils/styles';
import InputWrapper from './InputWrapper';

// =============================================================================
// Styles
// =============================================================================

// Input
const Input = styled.input`
  -webkit-appearance: none;
  outline: none;
  border: initial;
  color: inherit;
  background-color: transparent;
  flex: 1;
  caret-color: ${color.brand.primary};
  &::placeholder {
    opacity: 0.5;
  }
  display: ${props => (props.isInline ? 'inline-block' : 'block')};
  padding: ${props => props.padding};
  font-size: ${props => props.fontSize};
  font-family: ${props => props.fontFamily};
`;

Input.displayName = 'Input';
Input.propTypes = {
  padding: PropTypes.string.isRequired,
};
Input.defaultProps = {
  fontSize:   'inherit',
  fontFamily: 'inherit',
};

// InputFlex
const InputFlex = styled.div`
  display: flex;
  border: 1px solid ${color.grey.lighter};
  border-radius: ${border.radius.small};
`; // TODO find a better name

// InputButton
const InputButton = styled.button`
  border: none;
  outline: none;
  font-family: inherit;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  cursor: pointer;
  background-color: ${color.grey.lighter};
`;

// =============================================================================
// Component
// =============================================================================

export default function TextInput({
  type,
  name,
  value,
  placeholder,
  label,
  description,
  marginBottom,
  padding,
  fontSize,
  fontFamily,
  onChange,
  onCopy,
}) {
  return (
    <InputWrapper
      name={name}
      label={label}
      description={description}
      marginBottom={marginBottom}
    >
      <InputFlex>
        <Input
          type={type}
          name={name}
          id={name}
          value={value}
          placeholder={placeholder}
          padding={padding}
          fontSize={fontSize}
          fontFamily={fontFamily}
          onChange={e =>
            onChange(
              name,
              type === 'number' ? parseInt(e.target.value, 10) : e.target.value,
            )}
        />
        {onCopy && (
          <InputButton onClick={() => onCopy()}>
            <span role="img" aria-label="clipboard">
              📋
            </span>
          </InputButton>
        )}
      </InputFlex>
    </InputWrapper>
  );
}

TextInput.propTypes = {
  type:         PropTypes.string.isRequired,
  name:         PropTypes.string.isRequired,
  onChange:     PropTypes.func.isRequired,
  value:        PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  placeholder:  PropTypes.string,
  label:        PropTypes.string,
  description:  PropTypes.string,
  marginBottom: PropTypes.string,
  padding:      PropTypes.string,
  fontSize:     PropTypes.string,
  fontFamily:   PropTypes.string,
  onCopy:       PropTypes.func,
};

TextInput.defaultProps = {
  placeholder:  null,
  label:        null,
  description:  null,
  marginBottom: null,
  padding:      '2rem',
  fontSize:     null,
  fontFamily:   'inherit',
  onCopy:       null,
};
