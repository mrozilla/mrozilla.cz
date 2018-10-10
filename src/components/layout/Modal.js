// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { PureComponent } from 'react';
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

export default class Modal extends PureComponent {
  static propTypes = {
    innerKey:          string,
    isOpen:            bool.isRequired,
    children:          node.isRequired,
    outerPadding:      string,
    innerPadding:      string,
    innerMinWidth:     string,
    onClickBackground: func,
    onClickEscape:     func,
  };

  static defaultProps = {
    innerKey:          null,
    outerPadding:      '2rem',
    innerPadding:      '2rem',
    innerMinWidth:     null,
    onClickBackground: x => x,
    onClickEscape:     x => x,
  };

  componentDidUpdate = (prevProps) => {
    if (!prevProps.isOpen && this.props.isOpen) {
      document.addEventListener('keydown', this.handleKeyDown);
    }
    if (prevProps.isOpen && !this.props.isOpen) {
      document.removeEventListener('keydown', this.handleKeyDown);
    }
  };

  handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      this.props.onClickEscape();
    }
  };

  handleClickBackground = (event) => {
    if (event.target === event.currentTarget) {
      this.props.onClickBackground();
    }
  };

  render() {
    if (this.props.isOpen) {
      return (
        <ModalBackground onClick={this.handleClickBackground} padding={this.props.outerPadding}>
          <ModalWrapper
            key={this.props.innerKey}
            padding={this.props.innerPadding}
            minWidth={this.props.innerMinWidth}
          >
            {this.props.children}
          </ModalWrapper>
        </ModalBackground>
      );
    }
    return null;
  }
}
