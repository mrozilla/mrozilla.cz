// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';

import styled from 'styled-components';

import { Text } from '~components/primitives';

import { Error } from '~components/interactive/Error';
import { Label } from '~components/text/Label';
import { Tooltip } from '~components/text/Tooltip';

// ─────────────────────────────────────────────────────────────────────────────
// helpers
// ─────────────────────────────────────────────────────────────────────────────

export const StyledTextInput = styled(Text)`
  border: none;
  outline: none;
  resize: none;
  background-color: transparent;

  display: block;
  width: 100%;

  &::placeholder {
    opacity: 0.25;
  }

  &:hover:not(:read-only) {
    box-shadow: 0 1px 0 0 hsla(var(--hsl-text), 0.5);
  }

  &:focus:not(:read-only) {
    box-shadow: 0 1px 0 0 var(--color-info);
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

  &:-webkit-autofill {
    -webkit-text-fill-color: var(--color-text);
    transition: background-color 50000s ease-in-out;
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
