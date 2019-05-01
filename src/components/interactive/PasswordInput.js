// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { useState } from 'react';
import zxcvbn from 'zxcvbn';

import { Input } from '~components/primitives/Input';
import Dots from '~components/interactive/Dots';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

const defaultColors = Array.from({ length: 4 }, () => 'hsla(var(--hsl-text), 0.25)');

export default function TextInput({ onChange, type, ...rest }) {
  const [isHidden, setIsHidden] = useState(type === 'password');
  const [colors, setColors] = useState(defaultColors);

  const handleChange = (event) => {
    if (event.target.value === '') {
      return setColors(defaultColors);
    }

    const { score } = zxcvbn(event.target.value);
    return setColors(
      Array.from({ length: 4 }, (_, i) => {
        if (score < 2 && i === 3) return 'var(--color-danger)';
        if (score === 2 && i > 1) return 'var(--color-warning)';
        if (score === 3 && i > 0) return 'var(--color-success)';
        if (score === 4) return 'var(--color-success)';
        return 'hsla(var(--hsl-text), 0.25)';
      }),
    );
  };

  return (
    <>
      <Input type={isHidden ? type : 'text'} onChange={handleChange} {...rest} />
      <Dots
        position="absolute"
        top="2rem"
        right="1rem"
        amount="4"
        orientation="column"
        pointerEvents="none"
        colors={colors}
      />
    </>
  );
}
