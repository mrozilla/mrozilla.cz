// =============================================================================
// Import
// =============================================================================

// react
import React from 'react';
import PropTypes from 'prop-types';

// components
import { Container, Row } from '../components/Layout';
import { WorkCard } from '../components/Cards';

// =============================================================================
// Component
// =============================================================================

export default function WorkContainer({ works }) {
  return (
    <Container>
      <Row justifyContent="center">
        {works.map((work, index) => (
          <WorkCard key={work.title} work={work} index={index} />
        ))}
      </Row>
    </Container>
  );
}

WorkContainer.propTypes = {
  works: PropTypes.arrayOf(
    PropTypes.shape({
      link:    PropTypes.string.isRequired,
      title:   PropTypes.string.isRequired,
      tagline: PropTypes.string.isRequired,
      tags:    PropTypes.arrayOf(PropTypes.string).isRequired,
      image:   PropTypes.string,
    }).isRequired,
  ).isRequired,
};
