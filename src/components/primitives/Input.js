// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';

import { Text } from '~components/primitives/Text';
import { Error } from '~components/interactive/Error';
import { Label } from '~components/text/Label';
import { Tooltip } from '~components/text/Tooltip';

// ─────────────────────────────────────────────────────────────────────────────
// helpers
// ─────────────────────────────────────────────────────────────────────────────

export const Input = styled(Text)`
  border: none;
  outline: none;
  resize: none;
  background-color: transparent;

  display: block;
  width: 100%;

  &::placeholder {
    opacity: 0.25;
  }

  &:not(:read-only):not(:disabled) {
    :hover {
      box-shadow: 0 1px 0 0 hsla(var(--hsl-text), 0.5);
      ::placeholder {
        opacity: 0.5;
      }
    }
    &:focus {
      box-shadow: 0 1px 0 0 var(--color-info);
      ::placeholder {
        opacity: 0.5;
      }
    }
    &:hover,
    &:focus {
      & ~ svg {
        fill: var(--color-info);
      }
    }
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

  /**
   * position svg chevron for select and search inputs
   */

  & ~ svg {
    position: absolute;
    bottom: 1rem;
    right: 0;
    pointer-events: none;
    fill: hsla(var(--hsl-text), 0.25);
  }

  /**
   * errors only shown on required inputs when blurred and with value
   * 1. show error sibling
   * 2. hide tooltip sibling (would crash into error)
   */

  &:required:not(:focus):not(:placeholder-shown) {
    &:invalid {
      color: var(--color-danger);
      box-shadow: 0 1px 0 0 var(--color-danger);

      & ~ ${Error} {
        visibility: visible; /* 1 */
        opacity: 1;
        transform: translateY(0);
      }

      & ~ ${Tooltip} {
        visibility: hidden; /* 2 */
        opacity: 0;
      }
    }
  }

  /**
   * remove autofill yellow background in webkit
   * 1. override text colour, inherit doesn't work
   * 2. transition very long, background-color doesn't work
   */

  &:-webkit-autofill {
    -webkit-text-fill-color: var(--color-text); /* 1 */
    transition: background-color 50000s ease-in-out; /* 2 */
  }

  /**
   * remove search input additional styling in webkit
   */

  &::-webkit-calendar-picker-indicator,
  &::-webkit-search-cancel-button {
    display: none;
  }
`;

Input.defaultProps = {
  as:        'input',
  boxShadow: '0 1px 0 0 hsla(var(--hsl-text), 0.25)',
  padding:   '2.5rem 0 1.5rem',
};
