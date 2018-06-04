// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { PureComponent } from 'react';
import { Text } from '../../components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default class ColourThemeBlock extends PureComponent {
  state = {
    isCrazyTheme: false,
    original:     {
      color:           getComputedStyle(document.documentElement).getPropertyValue('--hsl-text'),
      backgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--color-bg'),
    },
  };

  handleColorTheme = () => {
    const seed = Math.floor(Math.random() * 360);
    const emojiSeed = Math.floor(Math.random() * (128591 - 128513)) + 128513;

    this.setState(
      {
        isCrazyTheme: !this.state.isCrazyTheme,
        emoji:        String.fromCodePoint(emojiSeed),
      },
      () => {
        document.documentElement.style.setProperty(
          '--hsl-text',
          this.state.isCrazyTheme
            ? `${seed}, 100%, 50%`
            : this.state.original.color,
        );
        document.documentElement.style.setProperty(
          '--color-bg',
          this.state.isCrazyTheme
            ? `hsl(${seed - 180}, 100%, 50%)`
            : this.state.original.backgroundColor,
        );
      },
    );
  };

  render() {
    return (
      <Text
        fontSize="3rem"
        fontWeight="700"
        onClick={this.handleColorTheme}
        style={{ cursor: 'pointer' }}
      >
        {this.state.isCrazyTheme
          ? `🥑 CRAZY!!1! ${this.state.emoji}`
          : 'b o r i n g'}
      </Text>
    );
  }
}
