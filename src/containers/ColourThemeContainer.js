// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { useEffect } from 'react';

import { Input } from '~components';
import { useLocalStorage, getBrowserTheme } from '~utils';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function ColourThemeContainer() {
  const [theme, setTheme] = useLocalStorage('theme', getBrowserTheme());

  useEffect(() => {
    if (theme === 'crazy') {
      const seed = Math.floor(Math.random() * 360);

      document.documentElement.style.setProperty('--hsl-crazy-bg', `${seed}, 100%, 50%`);
      document.documentElement.style.setProperty('--hsl-crazy-text', `${seed - 180}, 100%, 50%`);
    }
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <Input
      type="radio"
      name="theme"
      options={[
        {
          value: 'light',
          label: 'Light',
          checked: theme === 'light',
        },
        {
          value: 'dark',
          label: 'Dark',
          checked: theme === 'dark',
        },
        {
          value: 'crazy',
          label: 'Crazy',
          checked: theme === 'crazy',
        },
      ]}
      onChange={({ target: { value } }) => setTheme(value)}
    />
  );
}
