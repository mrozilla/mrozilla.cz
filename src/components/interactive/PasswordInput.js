// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { useState, useRef } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import zxcvbn from 'zxcvbn';

import { Input } from '~components/primitives/Input';
import { Icon } from '~components/multimedia/Icon';
import Dots from '~components/interactive/Dots';
import { Button } from '~components/interactive/Button';

// ─────────────────────────────────────────────────────────────────────────────
// helpers
// ─────────────────────────────────────────────────────────────────────────────

const defaultColors = Array.from({ length: 4 }, () => 'hsla(var(--hsl-text), 0.25)');

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function TextInput({ onChange, type, ...rest }) {
  const inputRef = useRef();
  const [isHidden, setIsHidden] = useState(type === 'password');
  const [colors, setColors] = useState(defaultColors);

  const handleChange = (event) => {
    const { score } = zxcvbn(event.target.value);

    if (onChange) {
      onChange(event);
    }

    if (event.target.value === '') {
      return setColors(defaultColors);
    }

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

  const handleFocus = () => inputRef.current.focus();
  const handleVisibility = () => {
    handleFocus();
    setIsHidden(prev => !prev);
  };

  return (
    <>
      <Input ref={inputRef} type={isHidden ? type : 'text'} onChange={handleChange} {...rest} />
      <Button
        type="button"
        position="absolute"
        top="2.5rem"
        right="3rem"
        cursor="pointer"
        opacity="0.5"
        padding="0"
        hover={{
          opacity: '1',
          fill:    'var(--color-brand-primary)',
        }}
        onClick={handleVisibility}
      >
        <Icon icon={isHidden ? 'FaEyeSlash' : 'FaEye'} />
      </Button>
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
