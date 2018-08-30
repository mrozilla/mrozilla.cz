// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { graphql } from 'gatsby';

import { Main, Section, H2 } from '../../components';
import {
  RootContainer,
  HeroContainer,
  WorksContainer,
  ColourThemeContainer,
  SEOContainer,
} from '../../containers';

// ─────────────────────────────────────────────────────────────────────────────
// query
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  {
    page: pagesJson(meta: { permalink: { eq: "/lab" } }) {
      meta {
        title
        description
        ogImage {
          ...OgImageFragment
        }
      }
      body {
        hero {
          title
        }
      }
    }
    labs: allLabJson(sort: { fields: [meta___date], order: DESC }) {
      edges {
        node {
          meta {
            type
            permalink
            tags
          }
          body {
            title
            tagline
          }
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
      <Main
        gridTemplate={{
          xs: "'hero' 'theme' 'tools' 'products'",
          md: "'hero hero' 'theme theme' 'tools products' / 1fr 1fr",
        }}
        gridGap="10vh 4rem"
      >
        <SEOContainer meta={meta} />
        <HeroContainer title={hero.title} />
        <Section gridArea="theme">
          <H2>current colour theme</H2>
          <ColourThemeContainer />
        </Section>
        <Section gridArea="tools">
          <H2>little tools</H2>
          <WorksContainer
            works={labs
              .filter(({ node: { meta: { type } } }) => type.includes('tool'))
              .map(({ node: { meta, body } }) => ({ ...meta, ...body }))}
          />
        </Section>
        <Section gridArea="products">
          <H2>standalone products</H2>
          <WorksContainer
            works={labs
              .filter(({ node: { meta: { type } } }) => type.includes('product'))
              .map(({ node: { meta, body } }) => ({ ...meta, ...body }))}
          />
        </Section>
      </Main>
    </RootContainer>
  );
}
