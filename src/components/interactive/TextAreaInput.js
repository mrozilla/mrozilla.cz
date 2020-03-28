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
  const autoResize = (element) => {
    const { style } = element; // prevent no-param-reassign eslint error
    const { borderTopWidth, borderBottomWidth } = window.getComputedStyle(element);
    const extraHeight = parseInt(borderTopWidth, 10) + parseInt(borderBottomWidth, 10);

    style.height = 'inherit'; // reset scrollHeight when deleting text
    style.height = `${element.scrollHeight + extraHeight}px`; // resize element to accommodate potential scroll
  };

  const handleChange = (event) => {
    autoResize(event.target);
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
