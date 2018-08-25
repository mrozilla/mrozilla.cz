// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { graphql } from 'gatsby';

import { Main, Section, H2 } from '../components';
import {
  RootContainer, HeroContainer, BlogPreviewsContainer, SEOContainer,
} from '../containers';

// ─────────────────────────────────────────────────────────────────────────────
// query
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  {
    page: pagesJson(meta: { permalink: { eq: "/blog" } }) {
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
    posts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          timeToRead
          frontmatter {
            permalink
            title
            date(formatString: "MMMM D, YYYY")
          }
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
      meta: seo,
      body: { hero },
    },
    posts: { edges: posts },
  },
}) {
  return (
    <RootContainer>
      <Main gridTemplate="'hero' 'blog'" gridGap="10vh 4rem">
        <SEOContainer {...{ seo }} />
        <HeroContainer title={hero.title} />
        <Section gridArea="blog" id="blog">
          <H2>all blog articles</H2>
          <BlogPreviewsContainer
            posts={posts.map(({ node: { frontmatter: post, timeToRead } }) => ({
              ...post,
              timeToRead,
            }))}
          />
        </Section>
      </Main>
    </RootContainer>
  );
}
