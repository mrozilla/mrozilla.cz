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
      this.props.nowDate.setMonth(this.props.nowDate.getMonth() + 1),
      this.props.availabilityDate,
    ),
  );

  render() {
    return (
      <P fontSize="3rem">
        <Link to="/contact" type="primary">
          {this.availabilityDate.toLocaleDateString('en-GB', {
            month: 'long',
            year:  'numeric',
          })}
        </Link>
      </P>
    );
  }
}
