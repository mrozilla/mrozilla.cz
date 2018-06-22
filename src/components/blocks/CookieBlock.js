// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { PureComponent } from 'react';
import {
  Toast, Link, Text, Button,
} from '..';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default class CookieBlock extends PureComponent {
  state = {
    isHidden: window.localStorage.getItem('isCookiesHidden'),
  };

  handleVisibility = () => {
    window.localStorage.setItem('isCookiesHidden', !this.state.isHidden);
    this.setState({
      isHidden: !this.state.isHidden,
    });
  };

  render() {
    if (!this.state.isHidden) {
      return (
        <Toast>
          <Text display="inline-block" lineHeight="2rem" fontSize="1.5rem">
            Yeah, we use cookies, we even have a
            {' '}
            <Link type="secondary" to="/legal">
              cookie policy
            </Link>
          </Text>
          <Button
            type="basic"
            margin="0 0 0 1rem"
            onClick={this.handleVisibility}
          >
            🍪👍
          </Button>
        </Toast>
      );
    }
    return null;
  }
}
