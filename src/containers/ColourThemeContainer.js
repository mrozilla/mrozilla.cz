// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { useEffect } from 'react';

import { Input } from '~components';
import { useLocalStorage } from '~utils';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function ColourThemeContainer() {
  const [theme, setTheme] = useLocalStorage('theme', 'basic');

  useEffect(() => {
    const seed = Math.floor(Math.random() * 360);

    const themes = {
      basic: {
        color:           '200, 5%, 45%',
        backgroundColor: '0, 100%, 100%',
      },
      crazy: {
        color:           `${seed}, 100%, 50%`,
        backgroundColor: `${seed - 180}, 100%, 50%`,
      },
      dark: {
        color:           '0, 0%, 60%',
        backgroundColor: '0, 0%, 5%',
      },
    };

    document.documentElement.style.setProperty('--hsl-text', themes[theme].color);
    document.documentElement.style.setProperty('--hsl-bg', themes[theme].backgroundColor);
  }, [theme]);

  return (
    <Input
      type="radio"
      name="theme"
      options={[
        {
          value:   'basic',
          label:   'default',
          checked: theme === 'basic',
        },
        {
          value:   'dark',
          label:   'dark',
          checked: theme === 'dark',
        },
        {
          value:   'crazy',
          label:   'crazy',
          checked: theme === 'crazy',
        },
      ]}
      onChange={({ target: { value } }) => setTheme(value)}
    />
  );
}
