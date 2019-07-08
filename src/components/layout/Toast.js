// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { number, bool } from 'prop-types';

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

export default class Toast extends PureComponent {
  static propTypes = {
    delay:     number,
    isVisible: bool,
  };

  static defaultProps = {
    delay:     2000,
    isVisible: false,
  };

  state = {
    isVisible: this.props.isVisible,
  };

  static getDerivedStateFromProps(props, state) {
    return {
      isVisible: props.isVisible,
    };
  }

  show = () => {
    clearTimeout(this.timeoutHelper);
    this.setState(
      {
        isVisible: true,
      },
      () => {
        this.timeoutHelper = setTimeout(
          () => this.setState({ isVisible: false }),
          this.props.delay,
        );
      },
    );
  };

  hide = () => {
    clearTimeout(this.timeoutHelper);
    this.setState({ isVisible: false });
  };

  render() {
    return (
      <StyledToast {...this.props} open={this.state.isVisible}>
        {this.props.children}
      </StyledToast>
    );
  }
}
