// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { graphql } from 'gatsby';

import { RootContainer, WorksContainer, SEOContainer } from '~containers';
import { Main, Section, H2 } from '~components';
import { renderBlocks, pagePropTypes } from '~utils';

// ─────────────────────────────────────────────────────────────────────────────
// query
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  {
    page: mdx(
      fileAbsolutePath: { regex: "/cms/pages/" }
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
        fileAbsolutePath: { regex: "/cms/labs/" }
        frontmatter: { meta: { tags: { in: "tool" } } }
      }
      sort: { fields: [frontmatter___title], order: ASC }
    ) {
      nodes {
        ...LabPreviewFragment
      }
    }
    demos: allMdx(
      filter: {
        fileAbsolutePath: { regex: "/cms/labs/" }
        frontmatter: { meta: { tags: { in: "demo" } } }
      }
      sort: { fields: [frontmatter___title], order: ASC }
    ) {
      nodes {
        ...LabPreviewFragment
      }
    }
    products: allMdx(
      filter: {
        fileAbsolutePath: { regex: "/cms/labs/" }
        frontmatter: { meta: { tags: { in: "product" } } }
      }
      sort: { fields: [frontmatter___title], order: ASC }
    ) {
      nodes {
        ...LabPreviewFragment
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
        css={`
          grid-template: 'hero' 'tools' 'products' 'demos';
          grid-gap: 10vh 4rem;

          @media screen and (min-width: 900px) {
            grid-template: 'hero hero' 'tools products' 'tools demos' / 1fr 1fr;
          }
        `}
      >
        {renderBlocks(blocks)}
        <Section
          css={`
            grid-area: tools;
          `}
        >
          <H2>Little tools</H2>
          <WorksContainer works={tools.nodes.map(({ frontmatter }) => ({ ...frontmatter }))} />
        </Section>
        <Section
          css={`
            grid-area: products;
          `}
        >
          <H2>Standalone products</H2>
          <WorksContainer works={products.nodes.map(({ frontmatter }) => ({ ...frontmatter }))} />
        </Section>
        <Section
          css={`
            grid-area: demos;
          `}
        >
          <H2>Demos</H2>
          <WorksContainer works={demos.nodes.map(({ frontmatter }) => ({ ...frontmatter }))} />
        </Section>
      </Main>
    </RootContainer>
  );
}

LabPage.propTypes = pagePropTypes;
