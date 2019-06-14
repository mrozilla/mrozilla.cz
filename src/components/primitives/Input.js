// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';

import { Text } from '~components/primitives/Text';
import { Label } from '~components/text/Label';
import { Tooltip } from '~components/text/Tooltip';
import { Error } from '~components/text/Error';

// ─────────────────────────────────────────────────────────────────────────────
// helpers
// ─────────────────────────────────────────────────────────────────────────────

export const Input = styled(Text)`
  --shadow: inset 0 0 0 2px hsla(var(--hsl-text), 0.1);

  appearance: none;
  border: none;
  outline: none;
  resize: none;

  display: block;
  width: 100%;
  background-color: hsla(var(--hsl-text), 0.05);
  line-height: 1.5em;

  & ~ ${Tooltip} {
    visibility: hidden;
    opacity: 0;
    transform: translateY(1rem);
  }

  &::placeholder {
    opacity: 0.5;
  }

  &:not(:read-only):not(:disabled) {
    :hover {
      box-shadow: var(--shadow);
      ::placeholder {
        opacity: 0.75;
      }
    }
    &:focus {
      box-shadow: inset 0 0 0 2px var(--color-info);
      ::placeholder {
        opacity: 0.75;
      }
    }
    &:hover,
    &:focus {
      & ~ ${Tooltip} {
        visibility: visible;
        opacity: 1;
        transform: translateY(0);
      }
    }
  }

  &:not(:placeholder-shown) {
    padding: 3rem 1rem 1rem;
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
   * color svg chevron for select and search inputs
   */

  &[type='select'],
  &[type='search'] {
    &:hover, &:focus, &:active {
      & ~ svg {
        opacity: 1;
        fill: var(--color-info);
      }
    }
  }

  /**
   * errors only shown on required inputs when blurred and with value
   * 1. show error sibling
   * 2. hide tooltip sibling (would crash into error)
   */

  &:required:not(:focus):not(:placeholder-shown) {
    &:invalid:not([type^='date']):not([type='time']):not([type='month']) {
      color: var(--color-danger);
      box-shadow: inset 0 0 0 2px var(--color-danger);

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

  &[type='search']::-webkit-calendar-picker-indicator,
  &[type='search']::-webkit-search-cancel-button {
    display: none;
  }

  /**
   * add temporal fields placeholder, doesn't work in Firefox
   */

  &[type^='date'],
  &[type='time'],
  &[type='month'] {
    &::before {
      content: attr(placeholder) ':';
      opacity: 0.25;
      margin: 0 1rem 0 0;
    }

    &::-webkit-calendar-picker-indicator {
      color: var(--color-info);
    }
    &::-webkit-datetime-edit-text {
      opacity: 0.5;
    }
  }
`;

Input.defaultProps = {
  as:           'input',
  padding:      '2rem',
  borderRadius: '0.5rem',
};
