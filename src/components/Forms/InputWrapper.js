// =============================================================================
// Import
// =============================================================================

import React from 'react';
import PropTypes from 'prop-types';

// Styles
import glamorous from 'glamorous';

// =============================================================================
// Styles
// =============================================================================

export const Wrapper = glamorous.div(({ marginBottom, padding }) => ({
  marginBottom,
  padding,
}));

export const Label = glamorous.label(
  {
    fontSize: '0.5rem',
  },
  ({ isUppercase }) =>
    isUppercase && {
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
    },
);

export const Description = glamorous.span({
  display:  'inline-block',
  fontSize: '0.5rem',
});

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
}) {
  return (
    <Wrapper marginBottom={marginBottom} padding={padding}>
      {label &&
        <Label htmlFor={name} isUppercase>
          {label}
        </Label>}
      {children}
      {description &&
        <Description>
          {description}
        </Description>}
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
};

InputWrapper.defaultProps = {
  label:        null,
  description:  null,
  marginBottom: null,
  padding:      null,
};
