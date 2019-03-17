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
    page: labJson(meta: { permalink: { eq: "/lab/emoji/" } }) {
      meta {
        title
        description
        permalink
        ogImage {
          ...OgImageFragment
        }
      }
      body {
        hero {
          title
        }
      }
    }
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function EmojiPage(props) {
  const [randomEmojis, setRandomEmojis] = useState([]);

  const getRandomEmoji = () => fetch('/.netlify/functions/emoji').then(r => r.json());

  const handleAddEmoji = async () => {
    const emoji = await getRandomEmoji();
    setRandomEmojis(prev => [...prev, emoji]);
  };

  const handleClear = () => setRandomEmojis([]);

  return (
    <RootContainer>
      <SEOContainer meta={props.data.page.meta} />
      <Main gridTemplate="'hero' 'random' 'map'" gridGap="10vh 4rem">
        <HeroContainer title={props.data.page.body.hero.title} />
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
