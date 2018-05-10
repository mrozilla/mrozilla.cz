// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { PureComponent } from 'react';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default class DesignModeBlock extends PureComponent {
  state = {
    designMode: 'off',
  };

  handleChangeDesignMode = () => {
    this.setState(
      {
        designMode: this.state.designMode === 'off' ? 'on' : 'off',
      },
      () => {
        document.designMode = this.state.designMode;
      },
    );
  };

  render() {
    if (process.env.NODE_ENV === 'development') {
      return (
        <button
          onClick={this.handleChangeDesignMode}
          style={{
            position: 'fixed',
            bottom:   '1rem',
            left:     '1rem',
            fontSize: '1rem',
            zindex:   999,
          }}
        >
          document.designMode: &quot;{this.state.designMode}&quot;
        </button>
      );
    }
    return null;
  }
}
