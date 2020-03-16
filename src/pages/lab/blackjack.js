// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { PureComponent } from 'react';
import { graphql } from 'gatsby';
import styled, { css } from 'styled-components';
import shuffle from 'lodash/shuffle';

import { RootContainer, SEOContainer } from '~containers';
import { Main, Section, Button, P, Modal, Ul, Li, Link, Toast } from '~components';
import { persist, animation, pagePropTypes } from '~utils';

// ─────────────────────────────────────────────────────────────────────────────
// query
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  {
    page: mdx(frontmatter: { meta: { permalink: { eq: "/lab/blackjack/" } } }) {
      frontmatter {
        ...MetaFragment
      }
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

  animation: ${animation({
    from: {
      opacity: '0',
      transform: 'translateY(1vh)',
    },
    to: {
      opacity: '1',
      transform: 'translateY(0)',
    },
    properties: '250ms both',
  })};

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
  deck: [],
  drawn: [],
  shuffleLimit: 13,

  dealer: [],
  player: [],
  winner: '',
  game: 'DEAL',

  bank: 1000,
  bet: 0,

  hands: 0,
  victories: 0,
  maxBank: 0,

  isModal: false,
};

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default class BlackjackPage extends PureComponent {
  state = persist.getItem('blackjack', initialState);

  componentDidUpdate = () => {
    persist.setItem('blackjack', this.state);
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

  handleWinner = (winner, { isBlackjack = false } = {}) =>
    this.setState((state) => {
      function calculateBank() {
        if (winner === 'dealer') {
          return Math.max(state.bank - state.bet, 0);
        }
        return Math.max(state.bank + (isBlackjack ? state.bet * 1.5 : state.bet), 0);
      }

      function calculateBet() {
        if (winner === 'dealer') {
          return Math.min(state.bet, state.bank);
        }
        return state.bet;
      }

      return {
        winner,
        game: 'DEAL',
        bank: calculateBank(),
        bet: calculateBet(),
        hands: state.hands + 1,
        victories: state.victories + (winner === 'player' ? 1 : 0),
        maxBank: Math.max(state.maxBank, state.bank + state.bet),
      };
    });

  handleDraw = () =>
    this.setState((state) => ({
      winner: 'draw',
      game: 'DEAL',
      hands: state.hands + 1,
    }));

  handleBet = (bet) =>
    this.setState((state) => ({
      bet: state.bet + bet,
      bank: state.bank - bet,
    }));

  handleDealCard = async (player) => {
    if (this.state.deck.length < this.state.shuffleLimit) {
      await this.handleNewDeck(); // shuffle at 75% of deck used
      this.Toast.show({
        message: 'Deck shuffled',
      });
    }

    this.setState((state) => ({
      [player]: [...state[player], state.deck[0]],
      deck: state.deck.slice(1),
      drawn: [...state.drawn, ...state.deck.slice(0, 1)],
    }));
  };

  handleDeal = async () => {
    if (this.state.drawn.length === 0) {
      await this.handleNewDeck();
    }

    await this.setState({ player: [], dealer: [], winner: '', game: 'PLAYER' });
    await this.handleDealCard('player');
    await this.handleDealCard('dealer');
    await this.handleDealCard('player');
    await this.handleDealCard('dealer');

    if (this.getScore(this.state.player) === 21) {
      return this.handleStand({ isBlackjack: true });
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

  handleStand = async ({ isBlackjack = false } = {}) => {
    const dealerScore = this.getScore(this.state.dealer);
    const playerScore = this.getScore(this.state.player);

    if (dealerScore < 17) {
      await this.handleDealCard('dealer');
      return this.handleStand({ isBlackjack });
    }

    if (dealerScore > 21 || playerScore > dealerScore) {
      return this.handleWinner('player', { isBlackjack });
    }
    if (dealerScore > playerScore) {
      return this.handleWinner('dealer');
    }
    if (dealerScore === playerScore) {
      return this.handleDraw();
    }

    return null;
  };

  handleDouble = async () => {
    await this.handleBet(this.state.bet);
    await this.handleDealCard('player');
    this.handleStand();
  };

  handleReset = async () => {
    await this.handleNewDeck();
    this.setState({
      ...initialState,
    });
  };

  handleModal = () => this.setState((state) => ({ isModal: !state.isModal }));

  getScore = (cards) => {
    const score = cards.reduce((acc, card) => {
      if (card.rank === 'A') {
        return acc + 1; // count each ace as 1 at first
      }
      if (['K', 'Q', 'J'].some((rank) => card.rank === rank)) {
        return acc + 10;
      }
      return acc + parseInt(card.rank, 10);
    }, 0);

    if (score < 12 && cards.some((card) => card.rank === 'A')) {
      return score + 10; // if aces and score still 11 or lower, count 1 ace as 11
    }

    return score;
  };

  renderCurrency = (amount) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
    }).format(amount);

  renderPlural = (word, count) => {
    if (count === 1) {
      return word;
    }
    return `${word}s`;
  };

  render() {
    return (
      <RootContainer>
        <SEOContainer meta={this.props.data.page.frontmatter.meta} />
        <Main
          css={`
            grid-template: 'dealer' 'player' 'controls' 'bank';
            grid-gap: 1rem;
          `}
        >
          <Section
            css={`
              grid-area: dealer;
              position: relative;
              min-height: 7rem;
            `}
          >
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

          <Section
            css={`
              grid-area: player;
              position: relative;
              min-height: 7rem;
              margin: 0 0 4rem 0;
            `}
          >
            {this.state.player.map((card) => (
              <Card key={`${card.rank}${card.suit}`} {...card} />
            ))}
            {this.state.drawn.length > 0 && (
              <Score winner={this.state.winner} player="player">
                {this.getScore(this.state.player)}
              </Score>
            )}
          </Section>

          <Section
            css={`
              grid-area: controls;
            `}
          >
            <P
              css={`
                margin: 0 0 2rem 0;
              `}
            >
              <P
                as="span"
                css={`
                  font-weight: 700;
                  font-size: 3rem;
                `}
              >
                {this.renderCurrency(this.state.bet)}
              </P>{' '}
              / {this.renderCurrency(this.state.bank)}
            </P>
            <Button
              look="secondary"
              onClick={this.handleDeal}
              disabled={this.state.game !== 'DEAL' || this.state.bet === 0}
              grouped
            >
              Deal
            </Button>
            <Button
              look="secondary"
              disabled={this.state.game !== 'PLAYER'}
              grouped
              onClick={this.handleHit}
            >
              Hit
            </Button>
            <Button
              look="secondary"
              disabled={this.state.game !== 'PLAYER'}
              grouped
              onClick={this.handleStand}
            >
              Stand
            </Button>
            <Button
              look="secondary"
              disabled={this.state.game !== 'PLAYER' || this.state.bank < this.state.bet}
              grouped
              onClick={this.handleDouble}
            >
              Double
            </Button>
            <Button look="secondary" disabled grouped>
              Split
            </Button>
          </Section>

          <Section
            css={`
              grid-area: bank;
            `}
          >
            <Button
              look="secondary"
              disabled={
                this.state.game !== 'DEAL' || (this.state.bank === 0 && this.state.bet === 0)
              }
              grouped
              onClick={() => this.setState((state) => ({ bet: 0, bank: state.bank + state.bet }))}
            >
              {this.renderCurrency(0)}
            </Button>
            {[25, 100, 1000].map((bet) => (
              <Button
                look="secondary"
                key={bet}
                disabled={this.state.game !== 'DEAL' || this.state.bank < bet}
                grouped
                onClick={() => this.handleBet(bet)}
              >
                + {this.renderCurrency(bet)}
              </Button>
            ))}
            <Button look="secondary" onClick={this.handleModal}>
              ?
            </Button>
          </Section>

          <Section
            css={`
              min-height: 15rem;
            `}
          >
            {this.state.bank === 0 && this.state.bet === 0 && (
              <>
                <Button onClick={this.handleReset}>Reset</Button>
                <Ul
                  css={`
                    margin: 2rem 0 0;
                  `}
                >
                  <Li>
                    {this.state.hands} {this.renderPlural('hand', this.state.hands)} played
                  </Li>
                  <Li>
                    {this.state.victories} {this.renderPlural('hand', this.state.victories)} won (
                    {((this.state.victories / this.state.hands) * 100).toFixed(2)}%)
                  </Li>
                  <Li>{this.renderCurrency(this.state.maxBank)} maximum bank</Li>
                </Ul>
              </>
            )}
          </Section>
          <Modal
            isOpen={this.state.isModal}
            innerPadding="4rem 4rem 2rem 4rem"
            innerMinWidth="15vw"
            onClickBackground={this.handleModal}
            onClickClose={this.handleModal}
            onClickEscape={this.handleModal}
          >
            <P
              css={`
                font-size: 3rem;
              `}
            >
              Table rules
            </P>
            <Ul
              css={`
                list-style: disc;
                padding: 0 0 2rem 1em;
              `}
            >
              <Li>Blackjack pays 3 to 2</Li>
              {/* <Li>Insurance pays 2 to 1</Li> */}
              <Li>Dealer stands on soft 17</Li>
              <Li>One deck of 52 cards</Li>
              <Li>Dealer shuffles after dealing 75% of the deck</Li>
              <Li>Minimum bet $25, no maximum bet</Li>
              <Li>Your progress is saved automatically</Li>
            </Ul>
            <P
              css={`
                font-size: 3rem;
              `}
            >
              Currently missing
            </P>
            <Ul
              css={`
                list-style: disc;
                padding: 0 0 2rem 1em;
              `}
            >
              <Li>Insurance logic</Li>
              <Li>Split logic</Li>
            </Ul>
            <P
              css={`
                font-size: 3rem;
              `}
            >
              Inspiration
            </P>
            <Ul
              css={`
                list-style: disc;
                padding: 0 0 0 1em;
              `}
            >
              <Li>
                <Link to="https://blackjackbreak.com/" look="secondary">
                  https://blackjackbreak.com/
                </Link>
              </Li>
            </Ul>
          </Modal>
        </Main>
        <Toast
          ref={(ref) => {
            this.Toast = ref;
          }}
        />
      </RootContainer>
    );
  }
}

BlackjackPage.propTypes = pagePropTypes;
