// =============================================================================
// Import
// =============================================================================

// React
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import glamorous from 'glamorous';
import InputWrapper, { Label } from './InputWrapper';
import { Flex } from '../Layout';

// =============================================================================
// Styles
// =============================================================================

const Checkbox = glamorous.input({
  display:     'inline-block',
  marginRight: '0.25rem',
});

// =============================================================================
// Component
// =============================================================================

export default function CheckboxInput({
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
      description={description}
      marginBottom={marginBottom}
      padding="0.25rem 0"
    >
      <Flex>
        <Checkbox
          type="checkbox"
          name={name}
          checked={value}
          onChange={e => onChange(name, e.target.checked)}
        />
        <Label>
          {label}
        </Label>
      </Flex>
    </InputWrapper>
  );
}

CheckboxInput.propTypes = {
  name:         PropTypes.string.isRequired,
  value:        PropTypes.bool.isRequired,
  onChange:     PropTypes.func.isRequired,
  label:        PropTypes.string,
  description:  PropTypes.string,
  marginBottom: PropTypes.string,
};

CheckboxInput.defaultProps = {
  label:        null,
  description:  null,
  marginBottom: null,
};
