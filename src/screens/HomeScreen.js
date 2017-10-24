// =============================================================================
// import
// =============================================================================

// react
import React from 'react';
import PropTypes from 'prop-types';

// containers
import HeroContainer from '../containers/HeroContainer';
import WorksContainer from '../containers/WorksContainer';

// components
import { Section } from '../components/Layout';

// content
import { home, lab, work, works } from '../utils/content';

// =============================================================================
// component
// =============================================================================

export default function HomeScreen({ match: { params: { filter }, url } }) {
  const page = url.split('/')[1];
  const copy = { home, lab, work }[page || 'home'];
  const filteredWorks = works.filter(item =>
    !page
      ? item.type.some(type => type === 'case')
      : page === 'lab'
        ? item.type.some(type => type === 'lab')
        : filter
          ? item.type.some(type => type === filter)
          : item.type.some(type => type !== 'lab'));

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
          <WorksContainer works={filteredWorks} />
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
