// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import styled from 'styled-components';
import {
  string, bool, node, func,
} from 'prop-types';

import { fadeUpAnimation } from '../../utils';

// ─────────────────────────────────────────────────────────────────────────────
// helpers
// ─────────────────────────────────────────────────────────────────────────────

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: hsla(var(--hsl-bg), 0.95);
  z-index: var(--z-index-modal);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5vh;
`;

const ModalWrapper = styled.div`
  border-radius: 0.25rem;
  background-color: var(--color-bg);
  box-shadow: 0 0 0 1px hsla(var(--hsl-text), 0.25);

  animation: ${fadeUpAnimation} 500ms both;

  padding: ${({ padding }) => padding};
  min-width: ${({ minWidth }) => minWidth};
`;

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function Modal({
  key,
  outerPadding,
  innerPadding,
  innerMinWidth,
  isOpen,
  onClickBackground,
  children,
}) {
  const handleClickBackground = (event) => {
    if (event.target === event.currentTarget) {
      onClickBackground();
    }
  };

  if (isOpen) {
    return (
      <ModalBackground onClick={handleClickBackground} padding={outerPadding}>
        <ModalWrapper key={key} padding={innerPadding} minWidth={innerMinWidth}>
          {children}
        </ModalWrapper>
      </ModalBackground>
    );
  }
  return null;
}

Modal.propTypes = {
  key:               string,
  isOpen:            bool.isRequired,
  children:          node.isRequired,
  outerPadding:      string,
  innerPadding:      string,
  innerMinWidth:     string,
  onClickBackground: func,
};

Modal.defaultProps = {
  key:               null,
  outerPadding:      '2rem',
  innerPadding:      '2rem',
  innerMinWidth:     null,
  onClickBackground: x => x,
};
