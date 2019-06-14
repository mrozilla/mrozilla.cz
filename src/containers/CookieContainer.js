// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';

import { Toast, Link, Button } from '~components';
import { useLocalStorage } from '~utils/';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function CookieContainer() {
  const [isVisible, setIsVisible] = useLocalStorage('isShowCookies', true);

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
      isVisible={isVisible}
    >
      Yeah, we use cookies, we even have a <Link to="/legal/privacy/">cookie policy</Link>
      <Button margin="0 0 0 1rem" look="secondary" onClick={() => setIsVisible(!isVisible)}>
        Accept{' '}
        <span role="img" aria-label="cookie">
          🍪
        </span>
      </Button>
    </Toast>
  );
}
