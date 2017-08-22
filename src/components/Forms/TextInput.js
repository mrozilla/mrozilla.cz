// =============================================================================
// Import
// =============================================================================

// React
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import glamorous from 'glamorous';
import { color, border } from '../../utils/styles';
import InputWrapper from './InputWrapper';

// =============================================================================
// Styles
// =============================================================================

const Input = glamorous.input(
  {
    WebkitAppearance: 'none',
    outline:          'none',
    color:            'inherit',
    backgroundColor:  'transparent',
    display:          'block',
    width:            '100%',
    border:           `1px solid ${color.grey.lighter}`,
    caretColor:       color.brand.primary,
    borderRadius:     border.radius.small,
    '&::placeholder': {
      opacity: 0.5,
    },
  },
  ({ isInline, padding, fontSize, fontFamily }) => ({
    display: isInline ? 'inline-block' : 'block',
    padding,
    fontSize,
    fontFamily,
  }),
);

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
