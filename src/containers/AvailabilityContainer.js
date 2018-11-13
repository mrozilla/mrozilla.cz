// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { PureComponent } from 'react';
import { instanceOf } from 'prop-types';

import { P, Link } from '~components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default class AvailabilityContainer extends PureComponent {
  static propTypes = {
    nowDate:          instanceOf(Date),
    availabilityDate: instanceOf(Date),
  };

  static defaultProps = {
    nowDate:          new Date(),
    availabilityDate: new Date(),
  };

  availabilityDate = new Date(
    Math.max(
      new Date(this.props.nowDate.getFullYear(), this.props.nowDate.getMonth() + 1),
      this.props.availabilityDate,
    ),
  );

  render() {
    return (
      <P fontSize="3rem">
        <Link to="/contact" type="secondary">
          {this.availabilityDate.toLocaleString('en-GB', {
            month: 'long',
            year:  'numeric',
          })}
        </Link>
      </P>
    );
  }
}
