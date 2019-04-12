// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { graphql } from 'gatsby';

import { RootContainer, WorksContainer, SEOContainer } from '~containers';
import { Main, Section, H2 } from '~components';
import { renderBlocks } from '~utils';

// ─────────────────────────────────────────────────────────────────────────────
// query
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  {
    page: mdx(
      fields: { sourceName: { eq: "pages" } }
      frontmatter: { meta: { permalink: { eq: "/lab/" } } }
    ) {
      frontmatter {
        ...MetaFragment
        blocks {
          title
          type
        }
      }
    }
    tools: allMdx(
      filter: {
        fields: { sourceName: { eq: "labs" } }
        frontmatter: { meta: { tags: { in: "tool" } } }
      }
    ) {
      edges {
        node {
          ...LabPreviewFragment
        }
      }
    }
    demos: allMdx(
      filter: {
        fields: { sourceName: { eq: "labs" } }
        frontmatter: { meta: { tags: { in: "demo" } } }
      }
    ) {
      edges {
        node {
          ...LabPreviewFragment
        }
      }
    }
    products: allMdx(
      filter: {
        fields: { sourceName: { eq: "labs" } }
        frontmatter: { meta: { tags: { in: "product" } } }
      }
    ) {
      edges {
        node {
          ...LabPreviewFragment
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
      frontmatter: { meta, blocks },
    },
    tools,
    products,
    demos,
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
        {renderBlocks(blocks)}
        <Section gridArea="tools">
          <H2>Little tools</H2>
          <WorksContainer
            works={tools.edges.map(({ node: { frontmatter } }) => ({ ...frontmatter }))}
          />
        </Section>
        <Section gridArea="products">
          <H2>Standalone products</H2>
          <WorksContainer
            works={products.edges.map(({ node: { frontmatter } }) => ({ ...frontmatter }))}
          />
        </Section>
        <Section gridArea="demos">
          <H2>Demos</H2>
          <WorksContainer
            works={demos.edges.map(({ node: { frontmatter } }) => ({ ...frontmatter }))}
          />
        </Section>
      </Main>
    </RootContainer>
  );
}
