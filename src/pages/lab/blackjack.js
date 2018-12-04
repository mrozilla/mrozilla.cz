// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { PureComponent } from 'react';
import { graphql } from 'gatsby';
import styled, { css } from 'styled-components';
import shuffle from 'lodash/shuffle';

import { RootContainer, SEOContainer } from '~containers';
import { Main, Section, H1, Button, P } from '~components';
import { fadeUpAnimation } from '~utils';

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
  min-width: 4.5rem;

  line-height: 1;
  font-size: 2rem;
  padding: 1rem 1rem 0.5rem 1rem;
  border-radius: 0.5rem;
  margin: 0.25rem;
  box-shadow: 0 0 0 1px hsla(var(--hsl-text), 0.25);

  animation: ${fadeUpAnimation} 250ms;

  &:hover {
    transform: translateY(-1px);
  }

  ${({ suit, rank, isFaceDown }) => css`
    &::after {
      content: '${isFaceDown ? ' ' : suit}';
      white-space: pre;
      font-size: 3rem;
    }
    &::before {
      content: '${isFaceDown ? ' ' : rank}';
      white-space: pre;
      font-weight: 700;
    }
  `};

  ${({ suit }) => {
    if (suit === '♥' || suit === '♦') {
      return 'color: var(--color-danger);';
    }
    return 'color: var(--color-text);';
  }}
`;

const Score = styled.span`
  --background-color: hsla(var(--hsl-text), 0.1);
  --color: var(--color-text);

  position: absolute;
  top: 0.25rem;
  right: calc(100% + 0.5rem);

  font-size: 1.5rem;
  line-height: 1;
  padding: 0.5rem;
  border-radius: 0.25rem;

  background-color: var(--background-color);
  color: var(--color);

  ${({ winner, player }) => {
    if (winner === 'draw') {
      return `
        --background-color: var(--color-info);
        --color: var(--color-bg);
      `;
    }
    if (winner === player) {
      return `
        --background-color: var(--color-success);
        --color: var(--color-bg);
      `;
    }
    if (winner && winner !== player) {
      return `
        --background-color: var(--color-danger);
        --color: var(--color-bg);
      `;
    }
    return null;
  }}
`;

const initialState = {
  deck:   [],
  drawn:  [],
  dealer: [],
  player: [],
  winner: '',
  game:   'DEAL',
  bank:   500,
  bet:    500,
};

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default class BlackjackPage extends PureComponent {
  state = { ...initialState };

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

  handleWinner = winner => this.setState((state) => {
    const bank = Math.max(
      winner === 'dealer' ? state.bank - state.bet : state.bank + state.bet,
      0,
    );
    const bet = winner === 'dealer' ? Math.min(state.bet, state.bank) : state.bet;
    return {
      winner,
      game: 'DEAL',
      bank,
      bet,
    };
  });

  handleDraw = () => this.setState({
    winner: 'draw',
    game:   'DEAL',
  });

  handleBet = bet => this.setState(state => ({
    bet:  state.bet + bet,
    bank: state.bank - bet,
  }));

  handleDealCard = (player) => {
    if (this.state.deck.length < 13) {
      this.handleNewDeck(); // shuffle at 75% of deck used
    }

    this.setState(state => ({
      [player]: [...state[player], state.deck[0]],
      deck:     state.deck.slice(1),
      drawn:    [...state.drawn, ...state.deck.slice(0, 1)],
      game:     'PLAYER',
    }));
  };

  handleDeal = async () => {
    if (this.state.game === 'DEAL') {
      await this.setState({ player: [], dealer: [], winner: '' });
    }

    await this.handleDealCard('player');
    await this.handleDealCard('dealer');
    await this.handleDealCard('player');
    await this.handleDealCard('dealer');

    if (this.getScore(this.state.player) === 21) {
      return this.handleStand();
    }

    return null;
  };

  handleHit = async () => {
    await this.handleDealCard('player');

    const score = this.getScore(this.state.player);
    if (score === 21) {
      return this.handleStand();
    }
    if (score > 21) {
      return this.handleWinner('dealer');
    }

    return null;
  };

  handleStand = async () => {
    const dealerScore = this.getScore(this.state.dealer);
    const playerScore = this.getScore(this.state.player);

    if (dealerScore < 17) {
      await this.handleDealCard('dealer');
      return this.handleStand();
    }

    if (dealerScore > 21 || playerScore > dealerScore) {
      return this.handleWinner('player');
    }
    if (dealerScore > playerScore) {
      return this.handleWinner('dealer');
    }
    if (dealerScore === playerScore) {
      return this.handleDraw();
    }

    return null;
  };

  getScore = (cards) => {
    const score = cards.reduce((acc, card) => {
      if (card.rank === 'A') {
        return acc + 1; // count each ace as 1 at first
      }
      if (['K', 'Q', 'J'].some(rank => card.rank === rank)) {
        return acc + 10;
      }
      return acc + parseInt(card.rank, 10);
    }, 0);

    if (score < 12 && cards.some(card => card.rank === 'A')) {
      return score + 10; // if aces and score still 11 or lower, count 1 ace as 11
    }

    return score;
  };

  renderCurrency = amount => new Intl.NumberFormat('en-US', {
    style:                 'currency',
    currency:              'USD',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(amount);

  render() {
    return (
      <RootContainer>
        <SEOContainer meta={this.props.data.page.meta} />
        <Main
          gridTemplate={{
            xs: "'dealer' 'player' 'controls' 'bank'",
          }}
          gridGap="0.5rem"
        >
          <Section gridArea="dealer" position="relative" minHeight="7rem">
            {this.state.dealer.map((card, i) => (
              <Card
                key={`${card.rank}${card.suit}`}
                {...card}
                isFaceDown={this.state.game === 'PLAYER' && i > 0}
              />
            ))}
            {this.state.drawn.length > 0 && (
              <Score winner={this.state.winner} player="dealer">
                {this.getScore(
                  this.state.game === 'PLAYER' ? this.state.dealer.slice(0, 1) : this.state.dealer,
                )}
              </Score>
            )}
          </Section>

          <Section gridArea="player" position="relative" minHeight="7rem" margin="0 0 4rem 0">
            {this.state.player.map(card => (
              <Card key={`${card.rank}${card.suit}`} {...card} />
            ))}
            {this.state.drawn.length > 0 && (
              <Score winner={this.state.winner} player="player">
                {this.getScore(this.state.player)}
              </Score>
            )}
          </Section>

          <Section gridArea="controls">
            <P margin="0 0 2rem 0">
              <P as="span" fontWeight="700" fontSize="3rem">
                {this.renderCurrency(this.state.bet)}
              </P>{' '}
              / {this.renderCurrency(this.state.bank)}
            </P>
            <Button
              onClick={this.handleDeal}
              disabled={this.state.game !== 'DEAL' || this.state.bet === 0}
              grouped
            >
              Deal
            </Button>
            <Button disabled={this.state.game !== 'PLAYER'} grouped onClick={this.handleHit}>
              Hit
            </Button>
            <Button disabled={this.state.game !== 'PLAYER'} grouped onClick={this.handleStand}>
              Stand
            </Button>
            <Button disabled grouped>
              Double
            </Button>
            <Button disabled grouped>
              Split
            </Button>
          </Section>

          <Section gridArea="bank">
            <Button
              disabled={this.state.game !== 'DEAL'}
              grouped
              onClick={() => this.setState(state => ({ bet: 0, bank: state.bank + state.bet }))}
            >
              {this.renderCurrency(0)}
            </Button>
            {[25, 100, 1000].map(bet => (
              <Button
                key={bet}
                disabled={this.state.game !== 'DEAL' || this.state.bank < bet}
                grouped
                onClick={() => this.handleBet(bet)}
              >
                + {this.renderCurrency(bet)}
              </Button>
            ))}
          </Section>

          {this.state.bank === 0 && this.state.bet === 0 && (
            <Section>
              <Button
                onClick={() => this.setState({
                  ...initialState,
                })
                }
              >
                Reset
              </Button>
            </Section>
          )}
        </Main>
      </RootContainer>
    );
  }
}
