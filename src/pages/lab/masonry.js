// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';

import { graphql } from 'gatsby';

import { RootContainer, SEOContainer } from '~containers';
import { Main, Section, Masonry, Img } from '~components';
import { renderBlocks } from '~utils';

// ─────────────────────────────────────────────────────────────────────────────
// query
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  {
    page: mdx(frontmatter: { meta: { permalink: { eq: "/lab/masonry/" } } }) {
      frontmatter {
        ...MetaFragment
        blocks {
          title
          type
        }
      }
    }
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function MasonryPage({
  data: {
    page: {
      frontmatter: { meta, blocks },
    },
  },
}) {
  return (
    <RootContainer>
      <SEOContainer meta={meta} />
      <Main gridTemplate="'hero' 'masonry'" gridGap="10vh 1rem">
        {renderBlocks(blocks)}
        <Section gridArea="masonry">
          <Masonry>
            {Array.from({ length: 15 }, (_, i) => i).map(order => (
              <Img
                key={order}
                ratio={Math.random() + 0.5}
                src="https://source.unsplash.com/random/400x400"
                alt="a random photo"
              />
            ))}
          </Masonry>
        </Section>
      </Main>
    </RootContainer>
  );
}
