// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { PureComponent } from 'react';

import {
  Toast, Link, P, Button,
} from '../components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default class CookieContainer extends PureComponent {
  state = {
    isHidden: typeof window !== 'undefined' ? window.localStorage.getItem('isCookiesHidden') : true,
  };

  handleVisibility = () => {
    window.localStorage.setItem('isCookiesHidden', !this.state.isHidden);
    this.setState(prevState => ({ isHidden: !prevState.isHidden }));
  };

  render() {
    if (!this.state.isHidden) {
      return (
        <Toast>
          <P display="inline-block" lineHeight="2rem" fontSize="1.5rem">
            Yeah, we use cookies, we even have a{' '}
            <Link type="primary" to="/legal">
              cookie policy
            </Link>
          </P>
          <Button type="basic" margin="0 0 0 1rem" onClick={this.handleVisibility}>
            <span role="img" aria-label="cookie and thumbs up">
              🍪👍
            </span>
          </Button>
        </Toast>
      );
    }
    return null;
  }
}
