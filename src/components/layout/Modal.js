// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { useEffect } from 'react';
import { string, bool, node, func } from 'prop-types';
import styled from 'styled-components';

import { Button } from '~components/interactive/Button';

import { fadeUpAnimation } from '~utils';

// ─────────────────────────────────────────────────────────────────────────────
// helpers
// ─────────────────────────────────────────────────────────────────────────────

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: var(--z-index-modal);

  display: flex;
  align-items: center;
  justify-content: center;

  overscroll-behavior: contain;

  background-color: hsla(var(--hsl-bg), 0.95);

  padding: ${({ padding }) => padding};
`;

const ModalWrapper = styled.div`
  --shadow: 0 0 0 1px hsla(var(--hsl-text), 0.25);

  position: relative;

  border-radius: 0.25rem;
  background-color: var(--color-bg);
  box-shadow: var(--shadow);
  animation: ${fadeUpAnimation} 500ms both;

  padding: ${({ padding }) => padding};
  min-width: ${({ minWidth }) => minWidth};
`;

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function Modal({
  innerKey,
  isOpen,
  outerPadding,
  innerPadding,
  innerMinWidth,
  onClickEscape,
  onClickBackground,
  onClickClose,
  children,
}) {
  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      onClickEscape();
    }
  };

  const handleClickBackground = (event) => {
    if (event.target === event.currentTarget) {
      onClickBackground();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }

    return undefined;
  }, [isOpen]);

  if (isOpen) {
    return (
      <ModalBackground onClick={handleClickBackground} padding={outerPadding}>
        <ModalWrapper key={innerKey} padding={innerPadding} minWidth={innerMinWidth}>
          {children}
          <Button position="absolute" top="0" right="0" onClick={onClickClose}>
            ×
          </Button>
        </ModalWrapper>
      </ModalBackground>
    );
  }
  return null;
}

Modal.propTypes = {
  innerKey:          string,
  isOpen:            bool.isRequired,
  children:          node.isRequired,
  outerPadding:      string,
  innerPadding:      string,
  innerMinWidth:     string,
  onClickBackground: func,
  onClickClose:      func,
  onClickEscape:     func,
};

Modal.defaultProps = {
  innerKey:          null,
  outerPadding:      '5vmin',
  innerPadding:      '2rem',
  innerMinWidth:     null,
  onClickBackground: x => x,
  onClickClose:      x => x,
  onClickEscape:     x => x,
};
