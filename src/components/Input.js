// =============================================================================
// Import
// =============================================================================

// React
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import glamorous from 'glamorous';
import { border } from '../utils/styles';

// =============================================================================
// Styles
// =============================================================================

export const TextArea = glamorous.textarea(
  {
    width:            '100%',
    height:           '100%',
    backgroundColor:  'white',
    border:           'none',
    fontFamily:       'inherit',
    color:            'inherit',
    lineHeight:       'inherit',
    borderRadius:     border.radius.small,
    outline:          '0',
    '&::placeholder': {
      opacity: 0.5,
    },
  },
  ({ padding }) => ({
    padding,
  }),
);

const TextInput = glamorous.input({
  WebkitAppearance: 'none',
  outline:          'none',
  border:           'none',
  fontFamily:       'inherit',
  color:            'inherit',
});

// =============================================================================
// Component
// =============================================================================

export function Input({ type, name, value, onChange }) {
  const types = {
    text: (
      <TextInput
        type="text"
        name={name}
        value={value}
        onChange={e => onChange(name, e.target.value)}
      />
    ),
    number: (
      <TextInput
        type="number"
        name={name}
        value={value}
        onChange={e => onChange(name, parseInt(e.target.value, 10))}
      />
    ),
  };
  return types[type];
}

Input.propTypes = {
  type:     PropTypes.string.isRequired,
  value:    PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]).isRequired,
  name:     PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
