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

const TextArea = glamorous.textarea(
  {
    border:           'none',
    outline:          'none',
    fontFamily:       'inherit',
    color:            'inherit',
    lineHeight:       'inherit',
    width:            '100%',
    height:           '100%',
    backgroundColor:  'white',
    caretColor:       color.brand.primary,
    borderRadius:     border.radius.small,
    '&::placeholder': {
      opacity: 0.5,
    },
  },
  ({ padding }) => ({
    padding,
  }),
);

TextArea.displayName = 'TextArea';

// =============================================================================
// Component
// =============================================================================

export default function TextAreaInput({
  name,
  value,
  label,
  description,
  placeholder,
  onChange,
  marginBottom,
  padding,
  height,
}) {
  return (
    <InputWrapper
      name={name}
      label={label}
      description={description}
      marginBottom={marginBottom}
      height={height}
    >
      <TextArea
        name={name}
        id={name}
        value={value}
        padding={padding}
        placeholder={placeholder}
        onChange={e => onChange(name, e.target.value)}
      />
    </InputWrapper>
  );
}

TextAreaInput.propTypes = {
  name:         PropTypes.string.isRequired,
  value:        PropTypes.string.isRequired,
  onChange:     PropTypes.func.isRequired,
  label:        PropTypes.string,
  description:  PropTypes.string,
  placeholder:  PropTypes.string,
  marginBottom: PropTypes.string,
  padding:      PropTypes.string,
  height:       PropTypes.string,
};

TextAreaInput.defaultProps = {
  label:        null,
  description:  null,
  placeholder:  null,
  marginBottom: null,
  padding:      null,
  height:       null,
};
