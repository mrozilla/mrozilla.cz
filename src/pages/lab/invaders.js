// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { useState } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import uniqueId from 'lodash/uniqueId';

import { RootContainer, SEOContainer } from '~containers';
import { Main, Section, Button, H1 } from '~components';
import { renderBlocks, pagePropTypes } from '~utils';

// ─────────────────────────────────────────────────────────────────────────────
// query
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  {
    page: mdx(frontmatter: { meta: { permalink: { eq: "/lab/invaders/" } } }) {
      frontmatter {
        ...MetaFragment
        blocks {
          title
          codeLink
          type
        }
      }
    }
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// helpers
// ─────────────────────────────────────────────────────────────────────────────

function Invader({ pixels, ...rest }) {
  const mirroredPixels = [...pixels, ...pixels.slice(5, 10), ...pixels.slice(0, 5)];
  const renderPixels = (pixel) => <Invader.Pixel key={uniqueId()} pixel={pixel} />;

  return <Invader.Body {...rest}>{mirroredPixels.map(renderPixels)}</Invader.Body>;
}

Invader.Body = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-auto-flow: column;
`;

Invader.Pixel = styled.div`
  padding-bottom: 100%;
  background-color: ${({ pixel }) => (pixel ? 'var(--color-text)' : 'var(--color-bg)')};
`;

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function InvadersPage({
  data: {
    page: {
      frontmatter: { meta, blocks },
    },
  },
}) {
  const [amount, setAmount] = useState(200);
  const [_, forceUpdate] = useState();

  const getInvader = () => Array.from({ length: 15 }, () => Math.random() > 0.5);

  return (
    <RootContainer>
      <SEOContainer meta={meta} />
      <Main
        css={`
          grid-template: 'hero' 'specimen' 'invaders';
          grid-gap: 10vh 4rem;
        `}
      >
        {renderBlocks(blocks)}
        <Section
          css={`
            grid-area: specimen;
          `}
        >
          <H1
            css={`
              grid-column: 1 / -1;
              margin: 0 0 1rem;
            `}
          >
            Your personal one:
          </H1>
          <Invader
            pixels={getInvader()}
            css={`
              max-width: 8rem;
              margin: 0 0 2rem;
            `}
          />
          <Button
            look="primary"
            css={`
              grid-column: 1 / -1;
            `}
            onClick={() => forceUpdate(Date.now())}
          >
            Generate new
          </Button>
        </Section>
        <Section
          css={`
            grid-area: invaders;
            display: grid;
            grid-template-columns: repeat(8, 1fr);
            grid-gap: 1rem;

            @media screen and (min-width: 1200px) {
              grid-template-columns: repeat(24, 1fr);
            }
          `}
        >
          <H1
            css={`
              grid-column: 1 / -1;
              margin: 0 0 1rem;
            `}
          >
            {amount} more examples ({((amount / 32768) * 100).toFixed(1)}% of all possibilities):
          </H1>
          {Array.from(
            {
              length: amount,
            },
            (_, i) => i + 1,
          ).map((item) => (
            <Invader key={item} pixels={getInvader()} />
          ))}
        </Section>
      </Main>
    </RootContainer>
  );
}

InvadersPage.propTypes = pagePropTypes;
