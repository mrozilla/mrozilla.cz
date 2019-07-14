// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { RootContainer, SEOContainer, BlogPreviewsContainer, HighlightShareContainer } from '.';
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
      body
    }
    relatedArticles: allMdx(
      filter: { fields: { sourceName: { eq: "posts" } }, frontmatter: { related: { in: [$path] } } }
      sort: { fields: [frontmatter___date], order: DESC }
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

export default function BlogPost({
  data: {
    article: {
      frontmatter: { title, date, meta },
      body
    },
    relatedArticles,
  },
  location,
}) {
  return (
    <RootContainer>
      <SEOContainer meta={meta} />
      <Main
        css={`
          grid-template: 'article' 'suggestions';
          grid-gap: 5vw;

          @media screen and (min-width: 1200px) {
            grid-template: 'article suggestions' / 3fr 1fr;
          }
        `}
      >
        <Article itemScope itemType="http://schema.org/BlogPosting">
          <header
            css={`
              margin: 0 0 4rem;
            `}
          >
            <H1
              itemProp="name"
              css={`
                margin: 0 0 3rem 0;
              `}
            >
              <Link to={meta.permalink} itemProp="url">
                {title}
              </Link>
            </H1>
            {meta.description && (
              <P
                css={`
                  font-size: 3rem;
                `}
              >
                {parseLinks(meta.description, { type: 'primary' })}
              </P>
            )}
            {date && (
              <H2 as="time" dateTime={new Date(date).toISOString()} itemProp="datePublished">
                {date}
              </H2>
            )}
          </header>
          <MDXRenderer>{body}</MDXRenderer>
        </Article>
        {relatedArticles.nodes.length > 0 && (
          <Aside>
            <H2>Related articles</H2>
            <BlogPreviewsContainer posts={relatedArticles} />
          </Aside>
        )}
      </Main>
      <HighlightShareContainer location={location} />
    </RootContainer>
  );
}
