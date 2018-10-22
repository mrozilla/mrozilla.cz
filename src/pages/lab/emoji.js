// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { PureComponent } from 'react';
import { graphql } from 'gatsby';

import {
  Main, Section, H2, P, Button,
} from '../../components';
import { RootContainer, SEOContainer, HeroContainer } from '../../containers';

// ─────────────────────────────────────────────────────────────────────────────
// query
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  {
    page: labJson(meta: { permalink: { eq: "/lab/emoji" } }) {
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

export default class EmojiPage extends PureComponent {
  state = {
    randomEmojis: [],
  };

  getRandomEmoji = () => fetch('/.netlify/functions/emoji').then(r => r.json());

  handleAddEmoji = async () => {
    const emoji = await this.getRandomEmoji();
    this.setState(prevState => ({
      randomEmojis: [...prevState.randomEmojis, emoji],
    }));
  };

  handleClear = () => this.setState({
    randomEmojis: [],
  });

  render() {
    return (
      <RootContainer>
        <SEOContainer meta={this.props.data.page.meta} />
        <Main gridTemplate="'hero' 'random' 'map'" gridGap="10vh 4rem">
          <HeroContainer title={this.props.data.page.body.hero.title} />
          <Section gridArea="random">
            <H2>Emoji story generator</H2>
            <Button onClick={this.handleAddEmoji}>Add topic</Button>
            <Button onClick={this.handleClear}>Clear</Button>
            <P fontSize="12rem" lineHeight={1} margin="2rem 0 0 0">
              {this.state.randomEmojis.map(emoji => (
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
}
