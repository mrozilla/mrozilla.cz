// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { graphql } from 'gatsby';

import { Main, Section, Subheading } from '../../components';
import {
  LayoutContainer,
  HeroContainer,
  WorksContainer,
  ColourThemeContainer,
  BarrelRollContainer,
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
      meta: seo,
      body: { hero },
    },
    labs: { edges: labs },
  },
}) {
  return (
    <LayoutContainer>
      <Main
        gridTemplate={{
          xs: "'hero' 'theme' 'tools' 'products'",
          md: "'hero hero' 'theme theme' 'tools products' / 1fr 1fr",
        }}
        gridGap="10vh 4rem"
      >
        <SEOContainer {...{ seo }} />
        <HeroContainer title={hero.title} />
        <Section gridArea="theme">
          <Subheading>current colour theme</Subheading>
          <ColourThemeContainer />
        </Section>
        <Section gridArea="tools">
          <Subheading>little tools</Subheading>
          <WorksContainer
            works={labs
              .filter(({ node: { meta: { type } } }) => type.includes('tool'))
              .map(({ node: { meta, body } }) => ({ ...meta, ...body }))}
          />
        </Section>
        <Section gridArea="products">
          <Subheading>standalone products</Subheading>
          <WorksContainer
            works={labs
              .filter(({ node: { meta: { type } } }) => type.includes('product'))
              .map(({ node: { meta, body } }) => ({ ...meta, ...body }))}
          />
        </Section>
        <BarrelRollContainer />
      </Main>
    </LayoutContainer>
  );
}
