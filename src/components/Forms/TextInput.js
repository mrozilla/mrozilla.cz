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

const Input = styled.input`
  -webkit-appearance: none;
  outline: none;
  color: inherit;
  background-color: transparent;
  display: block;
  width: 100%;
  border: 1px solid ${color.grey.lighter};
  caret-color: ${color.brand.primary};
  border-radius: ${border.radius.small};
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
}) {
  return (
    <InputWrapper
      name={name}
      label={label}
      description={description}
      marginBottom={marginBottom}
    >
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
};

TextInput.defaultProps = {
  placeholder:  null,
  label:        null,
  description:  null,
  marginBottom: null,
  padding:      '0.5rem',
  fontSize:     null,
  fontFamily:   'inherit',
};
