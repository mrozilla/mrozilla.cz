// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { graphql } from 'gatsby';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';

import { RootContainer, SEOContainer, BlogPreviewsContainer } from '.';
import { Article, Aside, Link, Main, H1, H2, P } from '~components';
import { parseLinks } from '~utils';

import '~utils/style/highlight.css';

// ─────────────────────────────────────────────────────────────────────────────
// query
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  query($path: String!) {
    article: mdx(frontmatter: { meta: { permalink: { eq: $path } } }) {
      frontmatter {
        ...MetaFragment
        title
        date(formatString: "MMMM D, YYYY")
      }
      mdx: code {
        body
      }
    }
    relatedArticles: allMdx(
      filter: { fields: { sourceName: { eq: "posts" } }, frontmatter: { related: { in: [$path] } } }
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

export default function BlogPost({
  data: {
    article: {
      frontmatter: { title, date, meta },
      mdx,
    },
    relatedArticles,
  },
}) {
  return (
    <RootContainer>
      <SEOContainer meta={meta} />
      <Main
        gridTemplate={{
          xs: "'article' 'suggestions'",
          lg: "'article suggestions' / 3fr 1fr",
        }}
        gridGap="5vw"
      >
        <Article itemScope itemType="http://schema.org/BlogPosting">
          <header style={{ margin: '0 0 4rem 0' }}>
            <H1 itemProp="name" margin="0 0 3rem 0">
              <Link to={meta.permalink} itemProp="url">
                {title}
              </Link>
            </H1>
            {meta.description && (
              <P fontSize="3rem">{parseLinks(meta.description, { type: 'primary' })}</P>
            )}
            {date && (
              <H2 as="time" dateTime={new Date(date).toISOString()} itemProp="datePublished">
                {date}
              </H2>
            )}
          </header>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </Article>
        {relatedArticles.edges.length > 0 && (
          <Aside>
            <H2>Related articles</H2>
            <BlogPreviewsContainer posts={relatedArticles} />
          </Aside>
        )}
      </Main>
    </RootContainer>
  );
}
