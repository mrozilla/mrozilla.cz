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
      nodes {
        ...WorkPreviewFragment
      }
    }
    posts: allMdx(
      filter: { fields: { sourceName: { eq: "posts" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
    ) {
      nodes {
        ...BlogPreviewFragment
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
        css={`
          grid-template: 'hero' 'location' 'availability' 'work' 'blog';
          grid-gap: 10vh 4rem;

          @media screen and (min-width: 900px) {
            grid-template: 'hero hero' 'location availability' 'work blog';
          }
        `}
      >
        {renderBlocks(blocks)}
        <Section
          id="work"
          css={`
            grid-area: work;
          `}
        >
          <H2>Latest client work</H2>
          <WorksContainer works={works.nodes.map(({ frontmatter }) => ({ ...frontmatter }))} />
        </Section>
        <Section
          id="blog"
          css={`
            grid-area: blog;
          `}
        >
          <H2>Latest blog articles</H2>
          <BlogPreviewsContainer posts={posts} />
        </Section>
      </Main>
    </RootContainer>
  );
}
