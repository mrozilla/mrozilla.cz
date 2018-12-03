// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { PureComponent } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import shuffle from 'lodash/shuffle';

import { RootContainer, SEOContainer } from '~containers';
import { Main, Section, H1, Button } from '~components';

// ─────────────────────────────────────────────────────────────────────────────
// query
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  {
    page: labJson(meta: { permalink: { eq: "/lab/blackjack/" } }) {
      meta {
        title
        description
        permalink
        ogImage {
          ...OgImageFragment
        }
      }
      # body {
      #   hero {
      #     title
      #   }
      # }
    }
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// helpers
// ─────────────────────────────────────────────────────────────────────────────

const Card = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  min-width: 6rem;

  line-height: 1;
  font-size: 3rem;
  padding: 1rem 1rem 0.5rem 1rem;
  border-radius: 0.5rem;
  margin: 0.25rem;
  box-shadow: 0 0 0 1px hsla(var(--hsl-text), 0.25);

  &:hover {
    transform: translateY(-1px);
  }
  
  &::after {
    content: '${({ suit }) => suit}';
    font-size: 4rem;
  }
  &::before {
    content: '${({ rank }) => rank}';
    font-weight: 700;
  }
  ${({ suit }) => {
    if (suit === '♥' || suit === '♦') {
      return 'color: var(--color-danger);';
    }
    // return 'color: red;';
  }}
`;

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default class BlackjackPage extends PureComponent {
  state = {
    deck:  [],
    drawn: [],
  };

  componentDidMount = () => {
    this.handleNewDeck();
  };

  handleNewDeck = () => {
    const suits = ['♥', '♦', '♠', '♣'];
    const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

    const deck = suits.reduce(
      (accSuits, suit) => [
        ...accSuits,
        ...ranks.reduce(
          (accRanks, rank) => [
            ...accRanks,
            {
              suit,
              rank,
            },
          ],
          [],
        ),
      ],
      [],
    );

    this.setState({ deck: shuffle(deck), drawn: [] });
  };

  handleDrawCard = () => {
    if (this.state.deck.length > 0) {
      return this.setState(state => ({
        deck:  state.deck.splice(1),
        drawn: [...state.drawn, state.deck[0]],
      }));
    }

    return this.handleNewDeck();
  };

  render() {
    return (
      <RootContainer>
        <SEOContainer meta={this.props.data.page.meta} />
        <Main
          gridTemplate={{
            xs: "'deck' 'drawn' 'controls'",
            lg: "'deck controls' 'drawn controls' / 3fr 1fr",
          }}
          gridGap="10vh 4rem"
        >
          <Section gridArea="deck">
            <H1>Deck</H1>
            {this.state.deck.map(card => (
              <Card {...card} />
            ))}
          </Section>
          <Section gridArea="drawn">
            <H1>Drawn</H1>
            {this.state.drawn.map(card => (
              <Card {...card} />
            ))}
          </Section>
          <Section gridArea="controls">
            <H1>Controls</H1>
            <Button onClick={this.handleDrawCard}>Draw</Button>
          </Section>
        </Main>
      </RootContainer>
    );
  }
}
