// =============================================================================
// Import
// =============================================================================

// React
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import glamorous from 'glamorous';
import { border } from '../../utils/styles';
import InputWrapper from './InputWrapper';

// =============================================================================
// Styles
// =============================================================================

const StyledTextArea = glamorous.textarea(
  {
    border:           'none',
    outline:          'none',
    fontFamily:       'inherit',
    color:            'inherit',
    lineHeight:       'inherit',
    width:            '100%',
    height:           '100%',
    backgroundColor:  'white',
    borderRadius:     border.radius.small,
    '&::placeholder': {
      opacity: 0.5,
    },
  },
  ({ padding }) => ({
    padding,
  }),
);

// =============================================================================
// Component
// =============================================================================

export default function TextArea({
  name,
  value,
  label,
  description,
  onChange,
  marginBottom,
  padding,
}) {
  return (
    <InputWrapper
      name={name}
      label={label}
      description={description}
      marginBottom={marginBottom}
    >
      <StyledTextArea
        name={name}
        id={name}
        value={value}
        padding={padding}
        onChange={e => onChange(name, e.target.value)}
      />
    </InputWrapper>
  );
}

TextArea.propTypes = {
  name:         PropTypes.string.isRequired,
  value:        PropTypes.string.isRequired,
  onChange:     PropTypes.func.isRequired,
  label:        PropTypes.string,
  description:  PropTypes.string,
  marginBottom: PropTypes.string,
  padding:      PropTypes.string,
};

TextArea.defaultProps = {
  label:        null,
  description:  null,
  marginBottom: null,
  padding:      null,
};
