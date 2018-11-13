// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { PureComponent } from 'react';

import { Toast, Link, Button } from '~components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default class CookieContainer extends PureComponent {
  state = {
    isHidden:
      (typeof window !== 'undefined' && window.localStorage.getItem('isCookiesHidden')) || false,
  };

  handleVisibility = () => {
    window.localStorage.setItem('isCookiesHidden', !this.state.isHidden);
    this.setState(prevState => ({ isHidden: !prevState.isHidden }));
  };

  render() {
    if (!this.state.isHidden) {
      return (
        <Toast
          backgroundColor="var(--color-bg)"
          animation="none"
          color="var(--color-text)"
          fontSize="1.25rem"
          bottom={{
            xs: 'auto',
            sm: '0',
          }}
          top={{
            xs: '0',
            sm: 'auto',
          }}
        >
          Yeah, we use cookies, we even have a{' '}
          <Link type="secondary" to="/legal#cookies">
            cookie policy
          </Link>
          <Button margin="0 0 0 1rem" onClick={this.handleVisibility}>
            Accept{' '}
            <span role="img" aria-label="cookie">
              🍪
            </span>
          </Button>
        </Toast>
      );
    }
    return null;
  }
}
