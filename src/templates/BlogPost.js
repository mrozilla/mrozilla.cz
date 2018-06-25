// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import {
  Main, Heading, Text, Article, Link,
} from '../components';
import { SEOContainer } from '../containers';
import { renderMarkdown } from '../utils';

require('prismjs/themes/prism.css');

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function BlogPost({
  data: {
    markdownRemark: { frontmatter, htmlAst },
    // allMarkdownRemark: { edges: suggestions },
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
          <Text fontSize="3rem">{frontmatter.kicker}</Text>
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
      {/* <aside>
        <Subheading>
          {'Popular articles'}
        </Subheading>
        {suggestions.map(({ node: { frontmatter: { permalink, title } } }) => (
          <Link key={permalink} to={permalink}>
            {title}
          </Link>
        ))}
      </aside> */}
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
        kicker
        # description
        # keywords
      }
      htmlAst
    }
    # allMarkdownRemark {
    #   edges {
    #     node {
    #       frontmatter {
    #         permalink
    #         title
    #       }
    #     }
    #   }
    # }
  }
`;
