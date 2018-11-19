// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';

import { Input } from '~components/primitives/Input';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

/* eslint-disable no-param-reassign */

export default function TextAreaInput({ onChange, ...rest }) {
  const handleChange = (event) => {
    event.target.style.height = `${event.target.scrollHeight}px`;

    if (onChange) {
      onChange(event);
    }
  };

  return <Input as="textarea" onChange={handleChange} {...rest} />;
}
