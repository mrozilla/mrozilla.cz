// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { useState, useImperativeHandle, useEffect, forwardRef } from 'react';
import styled from 'styled-components';

// ─────────────────────────────────────────────────────────────────────────────
// helpers
// ─────────────────────────────────────────────────────────────────────────────

export const StyledToast = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;

  padding: 1rem;
  z-index: var(--z-index-toast);
  visibility: hidden;

  text-align: center;
  color: var(--color-inverse);
  background-color: var(--color-brand-primary);

  &[open] {
    visibility: visible;
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

function Toast({ isVisible = false, className, children }, ref) {
  const [{ isOpen, message, css, delay }, setState] = useState({
    isOpen:  isVisible,
    message: '',
    delay:   0,
  });

  useImperativeHandle(ref, () => ({
    show: config => setState({ isOpen: true, ...config }),
    hide: () => setState({ isOpen: false }),
  }));

  useEffect(() => {
    const timeoutHelper = delay && setTimeout(() => setState({ isOpen: false }), delay);
    return () => clearTimeout(timeoutHelper);
  }, [isOpen, message, css]);

  return (
    <StyledToast className={className} css={css} open={isOpen}>
      {message || children}
    </StyledToast>
  );
}

export default forwardRef(Toast);
