// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { PureComponent } from 'react';

import { Input } from '~components';
import { persist } from '~utils';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default class ColourThemeContainer extends PureComponent {
  state = {
    theme: persist.getItem('theme', 'basic'),
  };

  componentDidMount = () => {
    this.handleChangeColorTheme(this.state.theme);
  };

  handleChangeColorTheme = (theme = 'basic') => {
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

    this.setState({ theme }, () => {
      document.documentElement.style.setProperty('--hsl-text', themes[theme].color);
      document.documentElement.style.setProperty('--hsl-bg', themes[theme].backgroundColor);
      persist.setItem('theme', theme);
    });
  };

  render() {
    return (
      <Input
        type="radio"
        name="theme"
        options={[
          {
            value:   'basic',
            label:   'default',
            checked: this.state.theme === 'basic',
          },
          {
            value:   'dark',
            label:   'dark',
            checked: this.state.theme === 'dark',
          },
          {
            value:   'crazy',
            label:   'crazy',
            checked: this.state.theme === 'crazy',
          },
        ]}
        onChange={({ target: { value } }) => this.handleChangeColorTheme(value)}
      />
    );
  }
}
