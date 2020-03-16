// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { func } from 'prop-types';

import { Input } from '~components/primitives/Input';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function TextAreaInput({ onChange, ...rest }) {
  const handleChange = (event) => {
    /* eslint-disable no-param-reassign */
    event.target.style.height = 'inherit'; // resetting height helps when deleting from added lines
    event.target.style.height = `${event.target.scrollHeight}px`; // makes sure the element grows to accommodate potential scroll
    /* eslint-enable */

    onChange(event);
  };

  return <Input as="textarea" onChange={handleChange} {...rest} />;
}

TextAreaInput.propTypes = {
  onChange: func,
};
TextAreaInput.defaultProps = {
  onChange: () => {},
};
