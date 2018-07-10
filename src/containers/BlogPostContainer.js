// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import {
  Article,
  Aside,
  Heading,
  Link,
  Main,
  Subheading,
  Text,
} from '../components';
import { SEOContainer, BlogPreviewsContainer } from '../containers';
import { renderMarkdown, parseLinks } from '../utils';

require('prismjs/themes/prism.css');

// ─────────────────────────────────────────────────────────────────────────────
// data
// ─────────────────────────────────────────────────────────────────────────────

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    article: markdownRemark(frontmatter: { permalink: { eq: $path } }) {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        permalink
        title
        description
      }
      htmlAst
    }
    relatedArticles: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/blog/" }
        frontmatter: { related: { in: [$path] } }
      }
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
    article: { frontmatter, htmlAst },
    relatedArticles,
  },
}) {
  return (
    <Main
      gridTemplate={{
        xs: "'article' 'suggestions'",
        lg: "'article suggestions' / 3fr 1fr",
      }}
      gridGap="5vw"
    >
      <SEOContainer seo={frontmatter} />
      <Article itemScope itemType="http://schema.org/BlogPosting">
        <header style={{ margin: '0 0 4rem 0' }}>
          <Heading itemprop="name" margin="0 0 3rem 0">
            <Link to={frontmatter.permalink} itemProp="url">
              {frontmatter.title}
            </Link>
          </Heading>
          <Text fontSize="3rem">{parseLinks(frontmatter.description)}</Text>
          <time
            style={{
              fontSize:      '1.25rem',
              fontWeight:    '300',
              lineHeight:    '2rem',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              marginTop:     '-2rem',
            }}
            dateTime={new Date(frontmatter.date).toISOString()}
            itemProp="datePublished"
          >
            {frontmatter.date}
          </time>
        </header>
        {renderMarkdown(htmlAst)}
      </Article>
      {relatedArticles && (
        <Aside>
          <Subheading>Related articles</Subheading>
          <BlogPreviewsContainer
            posts={relatedArticles.edges.map(
              ({ node: { frontmatter: post, timeToRead } }) => ({
                ...post,
                timeToRead,
              }),
            )}
          />
        </Aside>
      )}
    </Main>
  );
}
