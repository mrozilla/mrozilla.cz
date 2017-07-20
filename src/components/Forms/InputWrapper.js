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

export const Wrapper = glamorous.div(({ marginBottom, padding, height }) => ({
  marginBottom,
  padding,
  height,
}));

Wrapper.displayName = 'Wrapper';

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

Label.displayName = 'Label';

export const Description = glamorous.span({
  display:  'inline-block',
  fontSize: '0.5rem',
});

Description.displayName = 'Description';

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
  height:       PropTypes.string,
};

InputWrapper.defaultProps = {
  label:        null,
  description:  null,
  marginBottom: null,
  padding:      null,
  height:       null,
};
