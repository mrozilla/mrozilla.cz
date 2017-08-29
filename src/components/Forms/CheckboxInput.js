// =============================================================================
// Import
// =============================================================================

// React
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import styled from 'styled-components';
import { InputWrapper, Label } from '../Forms';
import { Flex } from '../Layout';

// =============================================================================
// Styles
// =============================================================================

const Checkbox = styled.input`
  display: inline-block;
  margin-right: 0.25rem;
`;

Checkbox.displayName = 'Checkbox';

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
