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
      color:           getComputedStyle(document.documentElement).getPropertyValue('--color-text'),
      backgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--color-bg'),
    },
  };

  handleColorTheme = () => {
    const seed = Math.floor(Math.random() * 360);
    this.setState(
      {
        isCrazyTheme: !this.state.isCrazyTheme,
      },
      () => {
        document.documentElement.style.setProperty(
          '--color-text',
          this.state.isCrazyTheme
            ? `hsl(${seed}, 100%, 50%)`
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
        {this.state.isCrazyTheme ? '🥑 CRAZY!!1! 😵' : 'b o r i n g'}
      </Text>
    );
  }
}
