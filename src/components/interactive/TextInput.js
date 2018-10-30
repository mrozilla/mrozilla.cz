// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';

import styled from 'styled-components';

import { Text } from '../primitives';

import { Error } from './Error';
import { Label } from '../text/Label';
import { Tooltip } from '../text/Tooltip';

// ─────────────────────────────────────────────────────────────────────────────
// helpers
// ─────────────────────────────────────────────────────────────────────────────

export const StyledTextInput = styled(Text)`
  border: none;
  outline: none;
  resize: none;

  display: block;
  width: 100%;

  &:hover:not(:read-only),
  &:focus:not(:read-only) {
    box-shadow: 0 1px 0 0 hsla(var(--hsl-text), 0.5);
  }

  :read-only {
    cursor: copy;
  }

  &::placeholder {
    opacity: 0.5;
  }

  &:not(:placeholder-shown) {
    padding: 3rem 0 1rem;
  }
  &:placeholder-shown ~ ${Label} {
    display: none;
  }

  & ~ ${Error} {
    visibility: hidden;
    opacity: 0;
    transform: translateY(1rem);
  }

  &:required:not(:focus):not(:placeholder-shown) {
    &:invalid {
      color: var(--color-danger);
      box-shadow: 0 1px 0 0 var(--color-danger);
      & ~ ${Error} {
        visibility: visible;
        opacity: 1;
        transform: translateY(0);
      }
      & ~ ${Tooltip} {
        visibility: hidden;
        opacity: 0;
      }
    }
  }
`;

StyledTextInput.defaultProps = {
  as:        'input',
  boxShadow: '0 1px 0 0 hsla(var(--hsl-text), 0.25)',
  padding:   '2.5rem 0 1.5rem',
};

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function TextInput({ onChange, ...rest }) {
  const handleTextAreaResize = (event) => {
    if (event.target.tagName === 'TEXTAREA') {
      event.target.style.height = `${event.target.scrollHeight}px`; // eslint-disable-line no-param-reassign
    }
    if (onChange) {
      onChange(event);
    }
  };

  return <StyledTextInput onChange={handleTextAreaResize} {...rest} />;
}
