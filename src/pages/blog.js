// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';

import { Main, Section, Subheading } from '../components';
import { HeroContainer, BlogPreviewsContainer, SEOContainer } from '../containers';

// ─────────────────────────────────────────────────────────────────────────────
// query
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  query BlogPage {
    pagesJson(meta: { permalink: { eq: "/blog" } }) {
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
    allMarkdownRemark(
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
    pagesJson: {
      meta: seo,
      body: { hero },
    },
    allMarkdownRemark: { edges: posts },
  },
}) {
  return (
    <Main gridTemplate="'hero' 'blog'" gridGap="10vh 4rem">
      <SEOContainer {...{ seo }} />
      <HeroContainer title={hero.title} />
      <Section gridArea="blog" id="blog">
        <Subheading>all blog articles</Subheading>
        <BlogPreviewsContainer
          posts={posts.map(({ node: { frontmatter: post, timeToRead } }) => ({
            ...post,
            timeToRead,
          }))}
        />
      </Section>
    </Main>
  );
}
