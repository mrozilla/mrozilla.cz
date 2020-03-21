// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { useState } from 'react';
import { graphql } from 'gatsby';

import { RootContainer, SEOContainer } from '~containers';
import { Main, Section, H2, P, Button } from '~components';
import { renderBlocks, pagePropTypes } from '~utils';

// ─────────────────────────────────────────────────────────────────────────────
// query
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  {
    page: mdx(frontmatter: { meta: { permalink: { eq: "/lab/emoji/" } } }) {
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
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function EmojiPage({
  data: {
    page: {
      frontmatter: { meta, blocks },
    },
  },
}) {
  const [randomEmojis, setRandomEmojis] = useState([]);

  const getRandomEmoji = () => fetch('/.netlify/functions/emoji').then((r) => r.json());

  const handleAddEmoji = async () => {
    const emoji = await getRandomEmoji();
    setRandomEmojis((prev) => [...prev, emoji]);
  };

  const handleClear = () => setRandomEmojis([]);

  return (
    <RootContainer>
      <SEOContainer meta={meta} />
      <Main
        css={`
          grid-template: 'hero' 'random' 'map';
          grid-gap: 10vh 4rem;
        `}
      >
        {renderBlocks(blocks)}
        <Section
          css={`
            grid-area: random;
          `}
        >
          <H2>Emoji story generator</H2>
          <Button look="primary" onClick={handleAddEmoji} grouped>
            Add topic
          </Button>
          <Button look="secondary" onClick={handleClear} grouped>
            Clear
          </Button>
          <P
            css={`
              font-size: 10rem;
              line-height: 1;
              margin: 2rem 0 0 0;
            `}
          >
            {randomEmojis.map((emoji) => (
              <span
                key={emoji.description}
                role="img"
                aria-label={emoji.description}
                title={emoji.description}
              >
                {String.fromCodePoint(...emoji.codepoint)}
              </span>
            ))}
          </P>
        </Section>
      </Main>
    </RootContainer>
  );
}

EmojiPage.propTypes = pagePropTypes;
