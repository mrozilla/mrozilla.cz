// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import Helmet from 'react-helmet';
import {
  Main,
  Section,
  Subheading,
  HeroBlock,
  ColourThemeBlock,
  WorksBlock,
  TextBackgroundBlock,
} from '../components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function HomePage({
  data: {
    pagesJson: {
      meta,
      body: { hero },
    },
    allLabsJson: { edges: labs },
  },
}) {
  return (
    <Main
      gridTemplateColumns="1fr 1fr"
      gridTemplateAreas="'hero hero' 'theme theme' 'lab blog'"
      gridGap="10vh 4rem"
    >
      <Helmet
        title={`mrozilla: ${meta.title}`}
        meta={[
          { name: 'description', content: meta.description },
          { name: 'keywords', content: meta.keywords },
        ]}
      />
      <HeroBlock hero={hero} />
      <Section gridArea="theme">
        <Subheading>current colour theme</Subheading>
        <ColourThemeBlock />
      </Section>
      <Section gridArea="lab" id="lab">
        <Subheading>latest lab experiments</Subheading>
        <WorksBlock works={labs} />
      </Section>
      <TextBackgroundBlock symbol="⌇" />
    </Main>
  );
}

export const query = graphql`
  query LabPage {
    pagesJson(meta: { permalink: { eq: "/lab" } }) {
      meta {
        title
        description
        keywords
      }
      body {
        hero {
          title
        }
      }
    }
    allLabsJson(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          url
          title
          tags
        }
      }
    }
  }
`;
