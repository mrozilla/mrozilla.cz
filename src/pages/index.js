// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { graphql } from 'gatsby';

import { RootContainer, WorksContainer, BlogPreviewsContainer, SEOContainer } from '~containers';

import { Main, Section, H2 } from '~components';
import { renderBlocks } from '~utils';

// ─────────────────────────────────────────────────────────────────────────────
// query
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  {
    page: mdx(
      fields: { sourceName: { eq: "pages" } }
      frontmatter: { meta: { permalink: { eq: "/" } } }
    ) {
      frontmatter {
        ...MetaFragment
        blocks {
          title
          text
          date
          type
        }
      }
    }
    works: allMdx(
      filter: { fields: { sourceName: { eq: "works" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          ...WorkPreviewFragment
        }
      }
    }
    posts: allMdx(
      filter: { fields: { sourceName: { eq: "posts" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
    ) {
      edges {
        node {
          ...BlogPreviewFragment
        }
      }
    }
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function HomePage({
  data: {
    page: {
      frontmatter: { meta, blocks },
    },
    works,
    posts,
  },
}) {
  return (
    <RootContainer>
      <SEOContainer meta={meta} />
      <Main
        gridTemplate={{
          xs: "'hero' 'location' 'availability' 'work' 'blog'",
          md: "'hero hero' 'location availability' 'work blog'",
        }}
        gridGap="10vh 4rem"
      >
        {renderBlocks(blocks)}
        <Section gridArea="work" id="work">
          <H2>Latest client work</H2>
          <WorksContainer
            works={works.edges.map(({ node: { frontmatter } }) => ({ ...frontmatter }))}
          />
        </Section>
        <Section gridArea="blog" id="blog">
          <H2>Latest blog articles</H2>
          <BlogPreviewsContainer posts={posts} />
        </Section>
      </Main>
    </RootContainer>
  );
}
