// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';

import Button from '../Button';
import Tooltip from '../../layout/Tooltip';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export const StyledInput = styled.input`
  outline: 0;
  border: 0;
  resize: none;
  appearance: none; /* TODO: regression tests for a11y */
  font-family: inherit;
  font-size: inherit;
  display: block;

  flex: 1;
  background-color: transparent;
  overflow-x: hidden; /* TODO: regression tests for auto-resizing textarea */

  width: ${({ width = '100%' }) => width};
  height: ${({ height }) => height};
  padding: ${({ padding = '1rem' }) => padding};
  background-color: ${({ backgroundColor = 'hsla(var(--hsl-text), 0.025)' }) => backgroundColor};
  box-shadow: ${({ boxShadow = '0 2px 0 -1px hsla(var(--hsl-text), 0.25)' }) => boxShadow};

  & ~ ${Tooltip} {
    visibility: hidden;
    opacity: 0;
    transform: translateY(1rem);
  }

  &:hover:not(:read-only),
  &:focus:not(:read-only) {
    box-shadow: ${({ hoverBoxShadow = '0 2px 0 -1px hsla(var(--hsl-text), 0.5)' }) => hoverBoxShadow};
    & ~ ${Tooltip} {
      visibility: visible;
      opacity: 1;
      transform: translateY(0);
    }
  }

  &:required:focus:not(:placeholder-shown) {
    &:valid {
      box-shadow: ${({ validBoxShadow = '0 2px 0 -1px var(--color-success)' }) => validBoxShadow};
    }
    &:invalid {
      box-shadow: ${({ invalidBoxShadow = '0 2px 0 -1px var(--color-danger)' }) => invalidBoxShadow};
    }
  }

  &::placeholder {
    opacity: 0.5;
  }
`;

export const StyledTextArea = StyledInput.withComponent('textarea');

export const StyledRadio = styled.input.attrs({
  type: 'radio',
})`
  margin: 1rem 1rem 0 0;
`;

export const StyledSelect = StyledInput.withComponent('select');

export const StyledSubmit = Button.withComponent('input');
