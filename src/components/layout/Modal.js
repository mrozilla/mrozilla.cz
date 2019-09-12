// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { string, bool, node, func } from 'prop-types';
import styled from 'styled-components';

import { Button } from '~components/interactive/Button';

import { animation, useEventListener } from '~utils';

// ─────────────────────────────────────────────────────────────────────────────
// helpers
// ─────────────────────────────────────────────────────────────────────────────

const ModalBackground = styled.aside`
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

  background-color: hsla(var(--hsl-bg), .95);

  padding: ${({ padding }) => padding};
`;

const ModalWrapper = styled.div`
  --shadow: inset 0 0 0 2px hsla(var(--hsl-text), .1);

  position: relative;

  border-radius: .5rem;
  background-color: var(--color-bg);
  box-shadow: var(--shadow);
  animation: ${animation({
    from: {
      opacity:   '0',
      transform: 'translateY(1vh)',
    },
    to: {
      opacity:   '1',
      transform: 'translateY(0)',
    },
    properties: '500ms both',
  })};

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
  useEventListener('keydown', (event) => {
    if (isOpen && event.key === 'Escape') {
      onClickEscape();
    }
  })

  const handleClickBackground = (event) => {
    if (event.target === event.currentTarget) {
      onClickBackground();
    }
  };

  if (isOpen) {
    return (
      <ModalBackground
        onClick={handleClickBackground}
        css={`
          padding: ${outerPadding};
        `}
      >
        <ModalWrapper
          key={innerKey}
          css={`
            padding: ${innerPadding};
            minwidth: ${innerMinWidth};
          `}
        >
          {children}
          <Button
            css={`
              position: absolute;
              top: 0;
              right: 0;
            `}
            onClick={onClickClose}
          >
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
