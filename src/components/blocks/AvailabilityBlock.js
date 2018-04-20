// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { PureComponent } from 'react';
import { Grid, Subheading, Text, Link } from '../../components';

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
      <Grid.Item gridArea="availability">
        <Subheading
          fontSize="1.25rem"
          fontWeight="300"
          margin="0"
          textTransform="uppercase"
          letterSpacing="0.1em"
        >
          {this.props.availability.title}
        </Subheading>
        <Text fontSize="4rem" fontWeight="700">
          <Link to="mailto:jan@mrozilla.cz" type="primary">
            {this.state.availability}
          </Link>
        </Text>
      </Grid.Item>
    );
  }
}
