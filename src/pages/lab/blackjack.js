// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { PureComponent } from 'react';
import { graphql } from 'gatsby';
import styled, { css } from 'styled-components';
import shuffle from 'lodash/shuffle';

import { RootContainer, SEOContainer } from '~containers';
import { Main, Section, H1, Button } from '~components';
import {fadeUpAnimation} from '~utils';

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

  animation: ${fadeUpAnimation} 250ms both;

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

const Score = styled.span`
  position: absolute;
  top: 0;
  left: -3rem;

  font-size: 1.5rem;
  line-height: 1;
  padding: 0.5rem;
  border-radius: 0.25rem;

  ${({ winner, player }) => {
    console.log(winner, player);

    if (winner === player) {
      return css`
        background-color: var(--color-success);
        color: var(--color-bg);
      `;
    }
    if (winner && winner !== player) {
      return css`
        background-color: var(--color-danger);
        color: var(--color-bg);
      `;
    }
    return 'background-color: hsla(var(--hsl-text), 0.1)';
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
    // shuffle at 75% of deck used
    if (this.state.deck.length < 13) {
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
      await this.setState({ player: [], dealer: [], winner: '' });
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

  handleStand = async () => {
    await this.handleDealCard('dealer');

    const dealerScore = this.getScore('dealer');
    const playerScore = this.getScore('player');

    if (dealerScore > 21) {
      return this.handleWinner('player');
    }
    if (dealerScore > playerScore) {
      return this.handleWinner('dealer');
    }
    return this.handleStand();
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
          gridGap="4rem 4rem"
        >
          <Section gridArea="dealer" position="relative">
            {this.state.dealer.map(this.renderCard)}
            {this.state.drawn.length > 0 && (
              <Score winner={this.state.winner} player="dealer">
                {this.getScore('dealer')}
              </Score>
            )}
          </Section>

          <Section gridArea="player" position="relative">
            {this.state.player.map(this.renderCard)}
            {this.state.drawn.length > 0 && (
              <Score winner={this.state.winner} player="player">
                {this.getScore('player')}
              </Score>
            )}
          </Section>

          <Section gridArea="controls">
            <Button
              width="100%"
              margin="0 0 1rem"
              onClick={this.handleDeal}
              disabled={!['DEAL', 'OVER'].some(state => this.state.game === state)}
            >
              Deal
            </Button>
            <Button
              margin="0 0 1rem"
              width="100%"
              disabled={this.state.game !== 'PLAYER'}
              onClick={this.handleHit}
            >
              Hit
            </Button>
            <Button
              margin="0 0 1rem"
              width="100%"
              disabled={this.state.game !== 'PLAYER'}
              onClick={this.handleStand}
            >
              Stand
            </Button>
            <Button margin="0 0 1rem" width="100%" disabled>
              Double
            </Button>
            <Button margin="0 0 1rem" width="100%" disabled>
              Split
            </Button>
          </Section>

          <Section gridArea="deck">
            {this.state.deck.map(this.renderCard)}
          </Section>

          <Section gridArea="drawn">
            {this.state.drawn.map(this.renderCard)}
          </Section>
        </Main>
      </RootContainer>
    );
  }
}
