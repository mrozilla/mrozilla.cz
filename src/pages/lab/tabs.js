// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { FaEye } from 'react-icons/fa';
import { graphql } from 'gatsby';

import { RootContainer, SEOContainer } from '~containers';
import { Main, Section, Tabs, Img, H1, P, Icon } from '~components';
import { renderBlocks } from '~utils';

// ─────────────────────────────────────────────────────────────────────────────
// query
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  {
    page: mdx(frontmatter: { meta: { permalink: { eq: "/lab/tabs/" } } }) {
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

export default function CarouselPage({
  data: {
    page: {
      frontmatter: { meta, blocks },
    },
  },
}) {
  return (
    <RootContainer>
      <SEOContainer meta={meta} />
      <Main gridTemplate="'hero' 'carousel'" gridGap="10vh 1rem">
        {renderBlocks(blocks)}
        <Section gridArea="carousel">
          <Tabs
            content={[
              {
                title: 'Text',
                body:  'Just a text body',
              },
              {
                title: (
                  <P>
                    <Icon icon="FaEye" fontSize="1.5rem" /> Components
                  </P>
                ),
                body: (
                  <Section>
                    <H1>This is a title</H1>
                    <P>More text follows</P>
                  </Section>
                ),
              },
              {
                title: 'Nested tabs',
                body:  (
                  <Tabs
                    content={[
                      { title: 'Nested', body: 'Nested body' },
                      { title: 'Another one', body: 'Another body' },
                    ]}
                  />
                ),
              },
            ]}
          />
        </Section>
      </Main>
    </RootContainer>
  );
}
