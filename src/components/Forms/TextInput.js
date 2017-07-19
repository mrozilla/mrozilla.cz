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
    fontFamily:       'inherit',
    color:            'inherit',
    backgroundColor:  'transparent',
    display:          'block',
    width:            '100%',
    padding:          '0.5rem',
    border:           `1px solid ${color.grey.lighter}`,
    borderRadius:     border.radius.small,
  },
  ({ isInline }) =>
    isInline && {
      display: 'inline-block',
    },
);

// =============================================================================
// Component
// =============================================================================

export default function TextInput({
  type,
  name,
  value,
  label,
  description,
  marginBottom,
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
  label:        PropTypes.string,
  description:  PropTypes.string,
  marginBottom: PropTypes.string,
};

TextInput.defaultProps = {
  label:        null,
  description:  null,
  marginBottom: null,
};
