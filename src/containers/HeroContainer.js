// =============================================================================
// Import
// =============================================================================

// React
import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Container } from '../components/Layout';
import { Heading, Subheading, Text } from '../components/Typography';
import { Reveal, Wiggle } from '../components/Effects';

// =============================================================================
// Component
// =============================================================================

export default function HeroContainer({ content: { title, subtitle, text }, filter }) {
  return (
    <Container>
      <Wiggle>
        <Heading>
          <Reveal delay="250ms" key={filter}>
            {filter && filter} {title}
          </Reveal>
        </Heading>
      </Wiggle>
      <Wiggle>
        <Subheading marginBottom="3rem">
          <Reveal delay="500ms">
            {subtitle}
          </Reveal>
        </Subheading>
      </Wiggle>
      <Wiggle>
        <Text marginBottom="3rem">
          <Reveal delay="750ms">
            {text}
          </Reveal>
        </Text>
      </Wiggle>
    </Container>
  );
}

HeroContainer.propTypes = {
  content: PropTypes.shape({
    title:    PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    text:     PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  }).isRequired,
  filter: PropTypes.string,
};

HeroContainer.defaultProps = {
  filter: undefined,
  text:   '',
};
