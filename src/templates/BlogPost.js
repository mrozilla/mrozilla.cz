// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import Helmet from 'react-helmet';
import {
  Main, Heading, Subheading, Article, Link,
} from '../components';
import { renderMarkdown } from '../utils';

require('prismjs/themes/prism.css');

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function BlogPost({
  data: {
    markdownRemark: { frontmatter, htmlAst },
    allMarkdownRemark: { edges: suggestions },
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
      <Helmet
        title={`mrozilla: ${frontmatter.title}`}
        meta={[
          { name: 'description', content: frontmatter.description },
          { name: 'keywords', content: frontmatter.keywords },
        ]}
      />
      <Article>
        <header style={{ margin: '0 0 4rem 0' }}>
          <Heading margin="0">
            {frontmatter.title}
          </Heading>
          <time
            style={{
              fontSize:      '1.25rem',
              fontWeight:    '300',
              lineHeight:    '3rem',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
            }}
            dateTime={new Date(frontmatter.date).toISOString()}
          >
            {frontmatter.date}
          </time>
        </header>
        {renderMarkdown(htmlAst)}
      </Article>
      <aside>
        <Subheading>
          {'Popular articles'}
        </Subheading>
        {suggestions.map(({ node: { frontmatter: { permalink, title } } }) => (
          <Link key={permalink} to={permalink}>
            {title}
          </Link>
        ))}
      </aside>
    </Main>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { permalink: { eq: $path } }) {
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        permalink
        title
      }
      htmlAst
    }
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            permalink
            title
          }
        }
      }
    }
  }
`;
