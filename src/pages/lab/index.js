// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { graphql } from 'gatsby';

import { RootContainer, HeroContainer, WorksContainer, SEOContainer } from '~containers';
import { Main, Section, H2 } from '~components';

// ─────────────────────────────────────────────────────────────────────────────
// query
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  {
    page: pagesJson(meta: { permalink: { eq: "/lab/" } }) {
      ...MetaFragment
      body {
        hero {
          title
        }
      }
    }
    labs: allLabJson(sort: { fields: [meta___date], order: DESC }) {
      edges {
        node {
          ...LabFragment
        }
      }
    }
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function LabPage({
  data: {
    page: {
      meta,
      body: { hero },
    },
    labs: { edges: labs },
  },
}) {
  return (
    <RootContainer>
      <SEOContainer meta={meta} />
      <Main
        gridTemplate={{
          xs: "'hero' 'tools' 'products' 'demos'",
          md: "'hero hero' 'tools products' 'tools demos' / 1fr 1fr",
        }}
        gridGap="10vh 4rem"
      >
        <HeroContainer title={hero.title} />
        <Section gridArea="tools">
          <H2>Little tools</H2>
          <WorksContainer
            works={labs
              .filter(({ node: { meta: { type } } }) => type.includes('tool'))
              .map(({ node: { meta: { permalink }, body } }) => ({ permalink, ...body }))}
          />
        </Section>
        <Section gridArea="products">
          <H2>Standalone products</H2>
          <WorksContainer
            works={labs
              .filter(({ node: { meta: { type } } }) => type.includes('product'))
              .map(({ node: { meta: { permalink }, body } }) => ({ permalink, ...body }))}
          />
        </Section>
        <Section gridArea="demos">
          <H2>Demos</H2>
          <WorksContainer
            works={labs
              .filter(({ node: { meta: { type } } }) => type.includes('demo'))
              .map(({ node: { meta: { permalink }, body } }) => ({ permalink, ...body }))}
          />
        </Section>
      </Main>
    </RootContainer>
  );
}
