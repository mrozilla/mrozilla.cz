// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';

import { Input } from '~components/primitives/Input';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function TextAreaInput({ onChange, ...rest }) {
  const handleChange = (event) => {
    event.target.style.height = `${event.target.scrollHeight}px`; // eslint-disable-line no-param-reassign

    if (onChange) {
      onChange(event);
    }
  };

  return <Input as="textarea" onChange={handleChange} {...rest} />;
}
