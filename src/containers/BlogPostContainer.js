// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { graphql } from 'gatsby';

import {
  Article, Aside, Link, Main, H1, H2, P,
} from '../components';
import { RootContainer, SEOContainer, BlogPreviewsContainer } from '.';

import { renderMarkdown, parseLinks } from '../utils';

import 'prismjs/themes/prism.css';

// ─────────────────────────────────────────────────────────────────────────────
// query
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  query($path: String!) {
    article: markdownRemark(frontmatter: { permalink: { eq: $path } }) {
      meta: frontmatter {
        date(formatString: "MMMM D, YYYY")
        permalink
        title
        description
        ogImage {
          ...OgImageFragment
        }
      }
      htmlAst
    }
    relatedArticles: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog/" }, frontmatter: { related: { in: [$path] } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          timeToRead
          frontmatter {
            permalink
            title
          }
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
    article: { meta, htmlAst },
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
                {meta.title}
              </Link>
            </H1>
            {meta.description && (
              <P fontSize="3rem">{parseLinks(meta.description, { type: 'primary' })}</P>
            )}
            {meta.date && (
              <time
                style={{
                  fontSize:      '1.25rem',
                  fontWeight:    '300',
                  lineHeight:    '2rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  marginTop:     '-2rem',
                }}
                dateTime={new Date(meta.date).toISOString()}
                itemProp="datePublished"
              >
                {meta.date}
              </time>
            )}
          </header>
          {renderMarkdown(htmlAst)}
        </Article>
        {relatedArticles && (
          <Aside>
            <H2>Related articles</H2>
            <BlogPreviewsContainer
              posts={relatedArticles.edges.map(({ node: { frontmatter: post, timeToRead } }) => ({
                ...post,
                timeToRead,
              }))}
            />
          </Aside>
        )}
      </Main>
    </RootContainer>
  );
}
