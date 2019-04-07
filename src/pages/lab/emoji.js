// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { useState } from 'react';
import { graphql } from 'gatsby';

import { RootContainer, SEOContainer, HeroContainer } from '~containers';
import { Main, Section, H2, P, Button } from '~components';

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

  const getRandomEmoji = () => fetch('/.netlify/functions/emoji').then(r => r.json());

  const handleAddEmoji = async () => {
    const emoji = await getRandomEmoji();
    setRandomEmojis(prev => [...prev, emoji]);
  };

  const handleClear = () => setRandomEmojis([]);

  return (
    <RootContainer>
      <SEOContainer meta={meta} />
      <Main gridTemplate="'hero' 'random' 'map'" gridGap="10vh 4rem">
        <HeroContainer title={blocks[0].title} />
        <Section gridArea="random">
          <H2>Emoji story generator</H2>
          <Button onClick={handleAddEmoji} grouped>
            Add topic
          </Button>
          <Button onClick={handleClear} grouped>
            Clear
          </Button>
          <P fontSize="12rem" lineHeight={1} margin="2rem 0 0 0">
            {randomEmojis.map(emoji => (
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
