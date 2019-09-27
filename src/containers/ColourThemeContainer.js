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
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  useEffect(() => {
    const seed = Math.floor(Math.random() * 360);

    const themes = {
      light: {
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

    const selectedTheme = themes[theme] || themes.light;

    document.documentElement.style.setProperty('--hsl-text', selectedTheme.color);
    document.documentElement.style.setProperty('--hsl-bg', selectedTheme.backgroundColor);
  }, [theme]);

  return (
    <Input
      type="radio"
      name="theme"
      options={[
        {
          value:   'light',
          label:   'Light',
          checked: theme === 'light',
        },
        {
          value:   'dark',
          label:   'Dark',
          checked: theme === 'dark',
        },
        {
          value:   'crazy',
          label:   'Crazy',
          checked: theme === 'crazy',
        },
      ]}
      onChange={({ target: { value } }) => setTheme(value)}
    />
  );
}
