// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { PureComponent } from 'react';
import { Radio } from '../components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default class ColourThemeContainer extends PureComponent {
  state = {
    currentTheme:
      (typeof window !== 'undefined' && window.localStorage.getItem('currentTheme')) || 'basic',
    emoji: String.fromCodePoint(Math.floor(Math.random() * (128591 - 128513)) + 128513),
  };

  componentDidMount = () => {
    this.handleChangeColorTheme(this.state.currentTheme);
  };

  handleChangeColorTheme = (type = 'basic') => {
    const seed = Math.floor(Math.random() * 360);
    const emojiSeed = Math.floor(Math.random() * (128591 - 128513)) + 128513;

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

    this.setState(
      {
        currentTheme: type,
        emoji:        String.fromCodePoint(emojiSeed),
      },
      () => {
        document.documentElement.style.setProperty('--hsl-text', themes[type].color);
        document.documentElement.style.setProperty('--hsl-bg', themes[type].backgroundColor);
        // document.documentElement.style.setProperty('--color-bg', themes[type].backgroundColor);
        window.localStorage.setItem('currentTheme', type);
      },
    );
  };

  render() {
    return (
      <div>
        {[
          {
            name:  'basic',
            label: 'basic',
          },
          {
            name:  'crazy',
            label: `🥑 CRAZY!!1! ${this.state.emoji}`,
          },
          {
            name:  'dark',
            label: '🌙',
          },
        ].map(radio => (
          <Radio
            key={radio.name}
            {...radio}
            checked={this.state.currentTheme === radio.name}
            onChange={() => this.handleChangeColorTheme(radio.name)}
          />
        ))}
      </div>
    );
  }
}
