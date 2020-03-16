// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { graphql } from 'gatsby';

import { RootContainer, SEOContainer } from '~containers';
import { Main, Article } from '~components';
import { renderBlocks, pagePropTypes } from '~utils';

// ─────────────────────────────────────────────────────────────────────────────
// query
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  {
    page: mdx(
      fields: { sourceName: { eq: "pages" } }
      frontmatter: { meta: { permalink: { eq: "/about/" } } }
    ) {
      frontmatter {
        ...MetaFragment
        blocks {
          title
          mdx
          type
        }
      }
    }
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function AboutPage({
  data: {
    page: {
      frontmatter: { meta, blocks },
    },
  },
}) {
  return (
    <RootContainer>
      <SEOContainer meta={meta} />
      <Main
        css={`
          grid-template: 'hero' 'about';
          grid-gap: 10vh 4rem;
        `}
      >
        {renderBlocks(blocks, { wrapper: Article })}
      </Main>
    </RootContainer>
  );
}

AboutPage.propTypes = pagePropTypes;
