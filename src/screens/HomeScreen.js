// =============================================================================
// Import
// =============================================================================

// React
import React from 'react';
import PropTypes from 'prop-types';

// Components
import HeroContainer from '../containers/HeroContainer';

import { Section, Container, Row } from '../components/Layout';
import { WorkCard } from '../components/Cards';

// Content
import content from '../utils/content';

// =============================================================================
// Component
// =============================================================================

export default function HomeScreen({ match: { params: { filter }, url } }) {
  const page = url.split('/')[1];
  const copy = content.pages[page || 'home'];
  const works = content.works.filter(
    work =>
      !page
        ? work.type.some(type => type === 'case')
        : page === 'lab'
          ? work.type.some(type => type === 'lab')
          : filter
            ? work.type.some(type => type === filter)
            : work.type.some(type => type !== 'lab'),
  );

  return (
    <main>
      <Section>
        <HeroContainer
          key={copy.top.title}
          content={copy.top}
          filter={filter}
        />
      </Section>
      {works.length > 0 && (
        <Section marginTop="-25vh" id="below">
          <Container>
            <Row justifyContent="center">
              {works.map(work => <WorkCard key={work.title} work={work} />)}
            </Row>
          </Container>
        </Section>
      )}
      {copy.bottom && (
        <Section marginTop="-25vh" marginBottom="-10vh">
          <HeroContainer key={copy.bottom.title} content={copy.bottom} />
        </Section>
      )}
    </main>
  );
}

HomeScreen.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      page:   PropTypes.string,
      filter: PropTypes.string,
    }),
  }).isRequired,
};
