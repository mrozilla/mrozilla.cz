// =============================================================================
// Import
// =============================================================================

import React from 'react';
import PropTypes from 'prop-types';

// Styles
import styled from 'styled-components';

// Components
import Label from './Label';
import { Text } from '../Typography';

// =============================================================================
// Styles
// =============================================================================

export const Wrapper = styled.div`
  margin-bottom: ${props => props.marginBottom};
  padding: ${props => props.padding};
  height: ${props => props.height};
`;

Wrapper.displayName = 'Wrapper';

// =============================================================================
// Component
// =============================================================================

export default function InputWrapper({
  name,
  children,
  label,
  description,
  marginBottom,
  padding,
  height,
}) {
  return (
    <Wrapper marginBottom={marginBottom} padding={padding} height={height}>
      {label && (
        <Label htmlFor={name} isUppercase>
          {label}
        </Label>
      )}
      {children}
      {description && (
        <Text fontSize="1.25rem" lineHeight="2rem">
          {description}
        </Text>
      )}
    </Wrapper>
  );
}

InputWrapper.propTypes = {
  name:         PropTypes.string.isRequired,
  children:     PropTypes.node.isRequired,
  label:        PropTypes.string,
  description:  PropTypes.string,
  marginBottom: PropTypes.string,
  padding:      PropTypes.string,
  height:       PropTypes.string,
};

InputWrapper.defaultProps = {
  label:        null,
  description:  null,
  marginBottom: null,
  padding:      null,
  height:       null,
};
