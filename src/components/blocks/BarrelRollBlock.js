// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import { PureComponent } from 'react';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default class BarrelRollBlock extends PureComponent {
  state = {
    count: 0,
  };

  componentDidMount = () => {
    document.addEventListener('keydown', this.handleBarrelRoll);
  };
  componentWillUnmount = () => {
    document.removeEventListener('keydown', this.handleBarrelRoll);
  };

  handleBarrelRoll = (evt) => {
    if (evt.key === 'r') {
      if (this.state.count < 4) {
        return this.setState(
          {
            count: this.state.count + 1,
          },
          () => {
            document.body.style.transform = null;
            document.body.style.transition = null;
          },
        );
      }
      return this.setState(
        {
          count: 0,
        },
        () => {
          document.body.style.transition = '1000ms';
          document.body.style.transform = 'rotate(360deg)';
        },
      );
    }
  };

  render() {
    return null;
  }
}
