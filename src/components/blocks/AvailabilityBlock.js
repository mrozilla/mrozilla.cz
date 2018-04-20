// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { PureComponent } from 'react';
import { Text, Link } from '../../components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default class AvailabilityBlock extends PureComponent {
  state = {
    availability: this.props.availability.text,
  };

  componentDidMount() {
    const availabilityDate = new Date();
    availabilityDate.setMonth(availabilityDate.getMonth() + 1);
    this.setState({
      availability: availabilityDate.toLocaleDateString('en-GB', {
        month: 'long',
        year:  'numeric',
      }),
    });
  }

  render() {
    return (
      <Text fontSize="3rem" fontWeight="700">
        <Link to="mailto:jan@mrozilla.cz" type="primary">
          {this.state.availability}
        </Link>
      </Text>
    );
  }
}
