// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import styled from 'styled-components';
import {
  string, bool, node, func,
} from 'prop-types';

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
  padding: ${({ padding }) => padding};
  border-radius: 0.25rem;
  background-color: var(--color-bg);
  box-shadow: 0 0 0 1px var(--color-grey);
`;

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function Modal({
  outerPadding, innerPadding, isOpen, onClickBackground, children,
}) {
  const handleClickBackground = (event) => {
    if (event.target === event.currentTarget) {
      onClickBackground();
    }
  };

  if (isOpen) {
    return (
      <ModalBackground onClick={handleClickBackground} padding={outerPadding}>
        <ModalWrapper padding={innerPadding}>{children}</ModalWrapper>
      </ModalBackground>
    );
  }
  return null;
}

Modal.propTypes = {
  isOpen:            bool.isRequired,
  children:          node.isRequired,
  outerPadding:      string,
  innerPadding:      string,
  onClickBackground: func,
};

Modal.defaultProps = {
  outerPadding:      '2rem',
  innerPadding:      '2rem',
  onClickBackground: x => x,
};
