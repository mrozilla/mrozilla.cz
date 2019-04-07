// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { graphql } from 'gatsby';

import { RootContainer, BlogPreviewsContainer, SEOContainer } from '~containers';
import { Main, Section, H2 } from '~components';
import { renderBlocks } from '~utils';

// ─────────────────────────────────────────────────────────────────────────────
// query
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  {
    page: mdx(frontmatter: { meta: { permalink: { eq: "/blog/" } } }) {
      frontmatter {
        ...MetaFragment
        blocks {
          title
          type
        }
      }
    }
    posts: allMdx(
      filter: { fields: { sourceName: { eq: "blog" } } }
      sort: { fields: [frontmatter___date], order: DESC }
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

export default function BlogPage({
  data: {
    page: {
      frontmatter: { meta, blocks },
    },
    posts,
  },
}) {
  return (
    <RootContainer>
      <SEOContainer meta={meta} />
      <Main gridTemplate="'hero' 'blog'" gridGap="10vh 4rem">
        {renderBlocks(blocks)}
        <Section gridArea="blog" id="blog">
          <H2>all blog articles</H2>
          <BlogPreviewsContainer
            posts={posts.edges.map(({ node: { frontmatter: post, timeToRead } }) => ({
              ...post,
              timeToRead,
            }))}
          />
        </Section>
      </Main>
    </RootContainer>
  );
}
