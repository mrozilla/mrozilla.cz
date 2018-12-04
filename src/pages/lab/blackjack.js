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
  min-width: 4rem;

  line-height: 1;
  font-size: 2rem;
  padding: 1rem 1rem 0.5rem 1rem;
  border-radius: 0.5rem;
  margin: 0.25rem;
  box-shadow: 0 0 0 1px hsla(var(--hsl-text), 0.25);

  &:hover {
    transform: translateY(-1px);
  }
  
  &::after {
    content: '${({ suit }) => suit}';
    font-size: 3rem;
  }
  &::before {
    content: '${({ rank }) => rank}';
    font-weight: 700;
  }
  ${({ suit }) => {
    if (suit === '♥' || suit === '♦') {
      return 'color: var(--color-danger);';
    }
    return 'color: inherit;';
  }}
`;

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default class BlackjackPage extends PureComponent {
  state = {
    deck:   [],
    drawn:  [],
    dealer: [],
    player: [],
    winner: '',
    game:   'DEAL',
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

  handleDealCard = (player) => {
    if (this.state.deck.length === 0) {
      this.handleNewDeck();
    }

    this.setState(state => ({
      [player]: [...state[player], state.deck[0]],
      deck:     state.deck.slice(1),
      drawn:    [...state.drawn, ...state.deck.slice(0, 1)],
      game:     'PLAYER',
    }));
  };

  handleDeal = async () => {
    if (this.state.game === 'OVER') {
      await this.setState({ player: [], dealer: [] });
    }

    await this.handleDealCard('player');
    await this.handleDealCard('dealer');
    await this.handleDealCard('player');
    await this.handleDealCard('dealer');

    if (this.getScore('player') === 21) {
      this.handleWinner('player');
    }
  };

  handleWinner = player => this.setState({
    winner: player,
    game:   'OVER',
  });

  handleHit = async () => {
    await this.handleDealCard('player');

    const score = this.getScore('player');
    if (score === 21) {
      return this.handleWinner('player');
    }
    if (score > 21) {
      return this.handleWinner('dealer');
    }

    return null;
  };

  getScore = (player) => {
    const naiveScore = this.state[player].reduce((acc, card) => {
      if (card.rank === 'A') {
        return acc + 11;
      }
      if (['K', 'Q', 'J'].some(rank => card.rank === rank)) {
        return acc + 10;
      }
      return acc + parseInt(card.rank, 10);
    }, 0);

    if (naiveScore > 21 && this.state[player].some(card => card.rank === 'A')) {
      return naiveScore - 10;
    }

    return naiveScore;
  };

  renderCard = card => <Card key={`${card.rank}${card.suit}`} {...card} />;

  render() {
    return (
      <RootContainer>
        <SEOContainer meta={this.props.data.page.meta} />
        <Main
          gridTemplate={{
            xs: "'deck' 'drawn' 'controls'",
            lg: "'dealer controls' 'player controls' 'deck deck' 'drawn drawn' / 3fr 1fr",
          }}
          gridGap="10vh 4rem"
        >
          <Section gridArea="dealer">
            <H1>Dealer ({this.getScore('dealer')})</H1>
            {this.state.dealer.map(this.renderCard)}
          </Section>

          <Section gridArea="player">
            <H1>Player ({this.getScore('player')})</H1>
            {this.state.player.map(this.renderCard)}
          </Section>

          <Section gridArea="controls">
            <H1>Controls</H1>
            <p>Winner: {this.state.winner}</p>
            <Button
              onClick={this.handleDeal}
              disabled={!['DEAL', 'OVER'].some(state => this.state.game === state)}
            >
              Deal
            </Button>
            <Button onClick={this.handleHit} disabled={this.state.game !== 'PLAYER'}>
              Hit
            </Button>
          </Section>

          <Section gridArea="deck">
            <H1>Deck</H1>
            {this.state.deck.map(this.renderCard)}
          </Section>

          <Section gridArea="drawn">
            <H1>Drawn</H1>
            {this.state.drawn.map(this.renderCard)}
          </Section>
        </Main>
      </RootContainer>
    );
  }
}
