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
    isVisible:
      (typeof window !== 'undefined'
        && JSON.parse(window.localStorage.getItem('isCookiesHidden')))
      || false,
  };

  handleVisibility = () => {
    window.localStorage.setItem('isCookiesHidden', JSON.stringify(!this.state.isVisible));
    this.setState(state => ({ isVisible: !state.isVisible }));
  };

  render() {
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
        isVisible={this.state.isVisible}
      >
        Yeah, we use cookies, we even have a <Link to="/legal/privacy/">cookie policy</Link>
        <Button margin="0 0 0 1rem" onClick={this.handleVisibility}>
          Accept{' '}
          <span role="img" aria-label="cookie">
            🍪
          </span>
        </Button>
      </Toast>
    );
  }
}
