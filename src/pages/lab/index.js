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
  WorksBlock,
  ColourThemeBlock,
  BarrelRollBlock,
} from '../../components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function LabPage({
  data: {
    pagesJson: {
      meta,
      body: { hero },
    },
    allLabJson: { edges: labs },
  },
}) {
  return (
    <Main
      gridTemplate={{
        xs: "'hero' 'theme' 'tools' 'products'",
        md: "'hero hero' 'theme theme' 'tools products' / 1fr 1fr",
      }}
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
      <Section gridArea="tools">
        <Subheading>little tools</Subheading>
        <WorksBlock
          works={labs
            .filter(({ node: { meta: { type } } }) => type.includes('tool'))
            .map(({ node: { meta: lab } }) => lab)}
        />
      </Section>
      <Section gridArea="products">
        <Subheading>standalone products</Subheading>
        <WorksBlock
          works={labs
            .filter(({ node: { meta: { type } } }) => type.includes('product'))
            .map(({ node: { meta: lab } }) => lab)}
        />
      </Section>
      <BarrelRollBlock />
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
    allLabJson(sort: { fields: [meta___date], order: DESC }) {
      edges {
        node {
          meta {
            type
            permalink
            title
            tags
          }
        }
      }
    }
  }
`;
