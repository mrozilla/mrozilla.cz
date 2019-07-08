// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';

import { graphql } from 'gatsby';

import { RootContainer, SEOContainer, Signup, Login, CardCheckout } from '~containers';
import { Main, Section, H1 } from '~components';
import { renderBlocks } from '~utils';

// ─────────────────────────────────────────────────────────────────────────────
// query
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  {
    page: mdx(frontmatter: { meta: { permalink: { eq: "/lab/daily-ui/" } } }) {
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
      <Main
        css={`
          grid-template: 'hero' 'signup' 'card';
          grid-gap: 10vh 1rem;
        `}
      >
        {renderBlocks(blocks)}
        <Section
          id="001"
          css={`
            grid-area: signup;
            display: grid;
            grid-template: 'title' 'signup' 'login';
            grid-gap: 2rem 8rem;
            alignitems: start;

            @media screen and (min-width: 1200px) {
              grid-template: 'title title' 'signup login' / 1fr 1fr;
            }
          `}
        >
          <H1
            css={`
              grid-area: title;
              margin: 0 0 2rem;
            `}
          >
            001 Signup
          </H1>
          <Signup onSubmit={data => console.log(data)} />
          <Login onSubmit={data => console.log(data)} />
        </Section>
        <Section
          id="002"
          css={`
            gridarea: card;
            display: grid;

            @media screen and (min-width: 1200px) {
              grid-template: 'title title' 'form .' / 1fr 1fr;
            }
          `}
        >
          <H1
            css={`
              grid-area: title;
              margin: 0 0 2rem;
            `}
          >
            002 Card checkout
          </H1>
          <CardCheckout onSubmit={data => console.log(data)} />
        </Section>
      </Main>
    </RootContainer>
  );
}
