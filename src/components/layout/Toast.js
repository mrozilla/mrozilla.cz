// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { number, bool } from 'prop-types';

import { View } from '~components/primitives/View';

// ─────────────────────────────────────────────────────────────────────────────
// helpers
// ─────────────────────────────────────────────────────────────────────────────

export const StyledToast = styled(View)`
  position: fixed;
  padding: 1rem;
  z-index: var(--z-index-toast);
  visibility: hidden;

  font-size: ${({ fontSize }) => fontSize};
  text-align: center;
  color: ${({ color = 'white' }) => color};

  &[open] {
    visibility: visible;
  }
`;

StyledToast.defaultProps = {
  as:              'aside',
  backgroundColor: 'var(--color-info)',
  top:             0,
  right:           0,
  left:            0,
};

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
