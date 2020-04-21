// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import ReactDOM from 'react-dom';
import FocusLock from 'react-focus-lock';
import { string, bool, node, func } from 'prop-types';
import styled from 'styled-components';

import { Button } from '~components/interactive/Button';
import { Icon } from '~components/multimedia/Icon';

import { animation, useEventListener, useScrollLock } from '~utils';

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

  background-color: hsla(var(--hsl-bg), 0.95);

  padding: ${({ padding }) => padding};
`;

const ModalBody = styled.div`
  --shadow: inset 0 0 0 2px hsla(var(--hsl-text), 0.1);

  position: relative;

  border-radius: 0.5rem;
  background-color: var(--color-bg);
  box-shadow: var(--shadow);
  animation: ${animation({
    from: {
      opacity: '0',
      transform: 'translateY(1vh)',
    },
    to: {
      opacity: '1',
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
  portalRoot,
  onClickEscape,
  onClickBackground,
  onClickClose,
  children,
}) {
  useEventListener('keydown', (event) => {
    if (isOpen && event.key === 'Escape') {
      onClickEscape();
    }
  });

  const { enableScrollLock, disableScrollLock } = useScrollLock();

  const handleClickBackground = (event) => {
    if (event.target === event.currentTarget) {
      onClickBackground();
    }
  };

  React.useEffect(() => {
    if (isOpen) {
      enableScrollLock();
      return undefined;
    }
    disableScrollLock();
    return undefined;
  }, [isOpen]);

  if (isOpen) {
    return ReactDOM.createPortal(
      <FocusLock>
        <ModalBackground
          aria-modal="true"
          tabIndex="-1"
          role="dialog"
          onClick={handleClickBackground}
          css={`
            padding: ${outerPadding};
          `}
        >
          <ModalBody
            key={innerKey}
            css={`
              padding: ${innerPadding};
              min-width: ${innerMinWidth};
            `}
          >
            <Button
              aria-label="Close modal"
              css={`
                position: absolute;
                top: 0;
                right: 0;
              `}
              onClick={onClickClose}
            >
              <Icon icon="FaTimes" />
            </Button>
            {children}
          </ModalBody>
        </ModalBackground>
      </FocusLock>,
      document.querySelector(portalRoot),
    );
  }
  return null;
}

Modal.propTypes = {
  innerKey: string,
  isOpen: bool.isRequired,
  children: node.isRequired,
  outerPadding: string,
  innerPadding: string,
  innerMinWidth: string,
  portalRoot: string,
  onClickBackground: func,
  onClickClose: func,
  onClickEscape: func,
};

Modal.defaultProps = {
  innerKey: null,
  outerPadding: '5vmin',
  innerPadding: '2rem',
  innerMinWidth: null,
  portalRoot: '#___gatsby',
  onClickBackground: () => {},
  onClickClose: () => {},
  onClickEscape: () => {},
};
