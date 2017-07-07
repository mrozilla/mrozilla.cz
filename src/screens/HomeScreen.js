// =============================================================================
// Import
// =============================================================================

// React
import React from 'react';
import PropTypes from 'prop-types';

// Components
import HeaderContainer from '../containers/HeaderContainer';
import FooterContainer from '../containers/FooterContainer';
import HeroContainer from '../containers/HeroContainer';

import { Section, Container, Row } from '../components/Layout';
import Work from '../components/WorkCard';

// Content
import content from '../utils/content';

// =============================================================================
// Component
// =============================================================================

export default function HomeScreen({ match: { params: { page, filter } }, location }) {
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
    <div>
      <HeaderContainer location={location} />
      <main>
        <Section>
          <HeroContainer key={copy.top.title} content={copy.top} filter={filter} />
        </Section>
        {works.length > 0 &&
          <Section marginTop="-25vh">
            <Container>
              <Row isCentered>
                {works.map((work, index) => <Work key={work.title} work={work} index={index} />)}
              </Row>
            </Container>
          </Section>}
        <Section marginTop="-25vh">
          <HeroContainer key={copy.bottom.title} content={copy.bottom} />
        </Section>
      </main>
      <FooterContainer />
    </div>
  );
}

HomeScreen.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      page:   PropTypes.string,
      filter: PropTypes.string,
    }),
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};
