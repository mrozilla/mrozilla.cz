// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { forwardRef } from 'react';

import { Input } from '~components/primitives/Input';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default forwardRef(({ onChange, ...rest }, ref) => {
  const handleChange = (event) => {
    if (event.target.type === 'url') {
      // intentional check for state of one slash deleted
      if (event.target.value === 'https:/') {
        event.target.value = ''; // eslint-disable-line no-param-reassign
      }

      if (!event.target.value.includes('https://')) {
        event.target.value = `https://${event.target.value}`; // eslint-disable-line no-param-reassign
      }
    }

    if (onChange) {
      onChange(event);
    }
  };

  return <Input ref={ref} onChange={handleChange} {...rest} />;
});
