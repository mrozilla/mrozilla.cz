// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { PureComponent } from 'react';
import { shape, string } from 'prop-types';
import { P, Link } from '../components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default class AvailabilityContainer extends PureComponent {
  static propTypes = {
    availability: shape({
      title: string.isRequired,
      text:  string.isRequired,
    }).isRequired,
  };

  state = {
    availability: this.props.availability.text,
  };

  componentDidMount() {
    const availabilityDate = new Date();
    availabilityDate.setMonth(
      availabilityDate.getMonth() + (availabilityDate.getDate() > 15 ? 2 : 1),
    );
    this.setState({
      availability: availabilityDate.toLocaleDateString('en-GB', {
        month: 'long',
        year:  'numeric',
      }),
    });
  }

  render() {
    return (
      <P fontSize="3rem">
        <Link to="mailto:jan@mrozilla.cz" type="primary">
          {this.state.availability}
        </Link>
      </P>
    );
  }
}
