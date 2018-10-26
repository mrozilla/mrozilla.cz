// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { PureComponent } from 'react';

import { Input } from '../components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default class ColourThemeContainer extends PureComponent {
  state = {
    currentTheme:
      (typeof window !== 'undefined' && window.localStorage.getItem('currentTheme')) || 'basic',
  };

  componentDidMount = () => {
    this.handleChangeColorTheme(this.state.currentTheme);
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

    this.setState({ currentTheme: theme }, () => {
      document.documentElement.style.setProperty('--hsl-text', themes[theme].color);
      document.documentElement.style.setProperty('--hsl-bg', themes[theme].backgroundColor);
      window.localStorage.setItem('currentTheme', theme);
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
            label:   'Basic',
            checked: this.state.currentTheme === 'basic',
          },
          {
            value:   'dark',
            label:   'Dark',
            checked: this.state.currentTheme === 'dark',
          },
          {
            value:   'crazy',
            label:   'Crazy',
            checked: this.state.currentTheme === 'crazy',
          },
        ]}
        onChange={({ target: { value } }) => this.handleChangeColorTheme(value)}
      />
    );
  }
}
