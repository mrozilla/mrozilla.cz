import React from "react";
import { shuffle } from "lodash";

import { RootContainer, SEOContainer } from "~containers";
import {
  Main,
  Hero,
  Button,
  Text,
  Toast,
  ToastImperatives,
  BlackjackCard,
  type BlackjackCardType,
  BlackjackScore,
  Group,
  Modal,
  Heading,
  Link,
} from "~components";
import { persist } from "~utils";

type State = {
  deck: BlackjackCardType[];
  drawn: BlackjackCardType[];
  shuffleLimit: number;

  dealer: BlackjackCardType[];
  player: BlackjackCardType[];
  winner: "P" | "D" | "DRAW" | "";
  game: "DEAL" | "P";

  bank: number;
  bet: number;

  hands: number;
  victories: number;
  maxBank: number;

  isModal: boolean;
};

const initialState: State = {
  deck: [],
  drawn: [],
  shuffleLimit: 13,

  dealer: [],
  player: [],
  winner: "",
  game: "DEAL",

  bank: 1000,
  bet: 0,

  hands: 0,
  victories: 0,
  maxBank: 0,

  isModal: false,
};

export default class BlackjackPage extends React.Component<{}, State> {
  state = persist.getItem("blackjack", initialState);

  componentDidUpdate = () => {
    persist.setItem("blackjack", this.state);
  };

  Toast = React.createRef<ToastImperatives>();

  getNewDeck = async () => {
    const suits: BlackjackCardType["suit"][] = ["♥", "♦", "♠", "♣"];
    const ranks: BlackjackCardType["rank"][] = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
    ];
    const deck = suits
      .map((suit) => [...ranks.map((rank) => ({ suit, rank }))])
      .flat() as BlackjackCardType[];

    this.setState({ deck: shuffle(deck), drawn: [] });
  };

  getScore = (cards: BlackjackCardType[]) => {
    const score = cards.reduce((acc, card) => {
      if (card.rank === "A") return acc + 1; // count each ace as 1 at first
      if (["K", "Q", "J"].some((rank) => card.rank === rank)) return acc + 10;
      return acc + parseInt(card.rank || "", 10);
    }, 0);

    if (score < 12 && cards.some((card) => card.rank === "A")) return score + 10; // if aces and score still 11 or lower, count 1 ace as 11
    return score;
  };

  handleWinner = (winner: State["winner"], { isBlackjack = false } = {}) =>
    this.setState((state) => {
      function calculateBank() {
        if (winner === "D") return Math.max(state.bank - state.bet, 0);
        return Math.max(state.bank + (isBlackjack ? state.bet * 1.5 : state.bet), 0);
      }

      function calculateBet() {
        if (winner === "D") return Math.min(state.bet, state.bank);
        return state.bet;
      }

      return {
        winner,
        game: "DEAL",
        bank: calculateBank(),
        bet: calculateBet(),
        hands: state.hands + 1,
        victories: state.victories + (winner === "P" ? 1 : 0),
        maxBank: Math.max(state.maxBank, state.bank + state.bet),
      };
    });

  handleDraw = () =>
    this.setState((state) => ({ winner: "DRAW", game: "DEAL", hands: state.hands + 1 }));

  handleBet = (bet: number) =>
    this.setState((state) => ({ bet: state.bet + bet, bank: state.bank - bet }));

  handleDealCard = async (player: "dealer" | "player") => {
    if (this.state.deck.length < this.state.shuffleLimit) {
      await this.getNewDeck(); // shuffle at 75% of deck used
      this.Toast.current?.show({ message: "Deck shuffled", delay: 1000 });
    }

    this.setState((state) => ({
      ...state,
      [player]: [...state[player], state.deck[0]],
      deck: state.deck.slice(1),
      drawn: [...state.drawn, ...state.deck.slice(0, 1)],
    }));
  };

  handleDeal = async () => {
    if (this.state.drawn.length === 0) await this.getNewDeck();

    await this.setState({ player: [], dealer: [], winner: "", game: "P" });
    await this.handleDealCard("player");
    await this.handleDealCard("dealer");
    await this.handleDealCard("player");
    await this.handleDealCard("dealer");

    if (this.getScore(this.state.player) === 21) return this.handleStand({ isBlackjack: true });
    return null;
  };

  handleHit = async () => {
    await this.handleDealCard("player");

    const score = this.getScore(this.state.player);
    if (score === 21) return this.handleStand();
    if (score > 21) return this.handleWinner("D");
    return null;
  };

  handleStand = async ({ isBlackjack = false } = {}) => {
    const dealerScore = this.getScore(this.state.dealer);
    const playerScore = this.getScore(this.state.player);

    if (dealerScore < 17) {
      await this.handleDealCard("dealer");
      this.handleStand({ isBlackjack });
      return;
    }

    if (dealerScore > 21 || playerScore > dealerScore)
      return this.handleWinner("P", { isBlackjack });
    if (dealerScore > playerScore) return this.handleWinner("D");
    if (dealerScore === playerScore) return this.handleDraw();
    return;
  };

  handleDouble = async () => {
    await this.handleBet(this.state.bet);
    await this.handleDealCard("player");
    this.handleStand();
  };

  handleReset = async () => {
    await this.getNewDeck();
    this.setState({ ...initialState });
  };

  handleModal = () => this.setState((state) => ({ isModal: !state.isModal }));

  renderCurrency = (amount: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
    }).format(amount);

  renderPlural = (word: string, count: number) => {
    if (count === 1) return word;
    return `${word}s`;
  };

  renderPlaceholderCards = () => (
    <>
      <BlackjackCard
        style={{ "--box-shadow-color": "hsla(var(--hsl-text), 0.2)" } as React.CSSProperties}
        isFaceDown
      />
      <BlackjackCard
        style={{ "--box-shadow-color": "hsla(var(--hsl-text), 0.2)" } as React.CSSProperties}
        isFaceDown
      />
    </>
  );

  render = () => (
    <RootContainer>
      <Main>
        <Hero
          title="An implementation of blackjack rules completely in React (no hooks just yet)—also, it remembers your progress"
          codeLink="https://github.com/mrozilla/mrozilla.cz/blob/master/src/pages/lab/blackjack.tsx"
        />
        <section>
          <section style={{ position: "relative", minHeight: "7rem" }}>
            {this.state.dealer.length === 0 && this.renderPlaceholderCards()}
            {this.state.dealer.map((card, i) => (
              <BlackjackCard
                key={`${card.rank}${card.suit}`}
                {...card}
                isFaceDown={this.state.game === "P" && i > 0}
              />
            ))}
            {this.state.drawn.length > 0 && (
              <BlackjackScore winner={this.state.winner} owner="D">
                {this.getScore(
                  this.state.game === "P" ? this.state.dealer.slice(0, 1) : this.state.dealer
                )}
              </BlackjackScore>
            )}
          </section>
          <section style={{ position: "relative", minHeight: "7rem", margin: "0 0 4rem 0" }}>
            {this.state.player.length === 0 && this.renderPlaceholderCards()}
            {this.state.player.map((card) => (
              <BlackjackCard key={`${card.rank}${card.suit}`} {...card} />
            ))}
            {this.state.drawn.length > 0 && (
              <BlackjackScore winner={this.state.winner} owner="P">
                {this.getScore(this.state.player)}
              </BlackjackScore>
            )}
          </section>
          <section>
            <Text style={{ margin: "0 0 2rem 0" }}>
              <Text tag="span" style={{ fontWeight: 700, fontSize: "3rem" }}>
                {this.renderCurrency(this.state.bet)}
              </Text>{" "}
              / {this.renderCurrency(this.state.bank)}
            </Text>
            <Group gap="0.25rem">
              <Button
                look="secondary"
                onClick={this.handleDeal}
                disabled={this.state.game !== "DEAL" || this.state.bet === 0}
              >
                Deal
              </Button>
              <Button look="secondary" disabled={this.state.game !== "P"} onClick={this.handleHit}>
                Hit
              </Button>
              <Button
                look="secondary"
                disabled={this.state.game !== "P"}
                onClick={() => this.handleStand()}
              >
                Stand
              </Button>
              <Button
                look="secondary"
                disabled={this.state.game !== "P" || this.state.bank < this.state.bet}
                onClick={this.handleDouble}
              >
                Double
              </Button>
              <Button look="secondary" disabled>
                Split
              </Button>
            </Group>
          </section>
          <section>
            <Group gap="0.25rem">
              <Button
                look="secondary"
                disabled={
                  this.state.game !== "DEAL" || (this.state.bank === 0 && this.state.bet === 0)
                }
                onClick={() => this.setState((state) => ({ bet: 0, bank: state.bank + state.bet }))}
              >
                {this.renderCurrency(0)}
              </Button>
              {[25, 100, 1000].map((bet) => (
                <Button
                  look="secondary"
                  key={bet}
                  disabled={this.state.game !== "DEAL" || this.state.bank < bet}
                  onClick={() => this.handleBet(bet)}
                >
                  + {this.renderCurrency(bet)}
                </Button>
              ))}
              <Button look="secondary" onClick={this.handleModal}>
                ?
              </Button>
            </Group>
          </section>
        </section>
        <Modal
          isOpen={this.state.isModal}
          innerPadding="4rem 4rem 2rem 4rem"
          innerMinWidth="15vw"
          onClickBackground={this.handleModal}
          onClickClose={this.handleModal}
          onClickEscape={this.handleModal}
        >
          <Heading look="h1" tag="h3">
            Table rules
          </Heading>
          <ul style={{ listStyle: "disc", padding: "0 0 2rem 1em" }}>
            <li>Blackjack pays 3 to 2</li>
            {/* <li>Insurance pays 2 to 1</li> */}
            <li>Dealer stands on soft 17</li>
            <li>One deck of 52 cards</li>
            <li>Dealer shuffles after dealing 75% of the deck</li>
            <li>Minimum bet $25, no maximum bet</li>
            <li>Your progress is saved automatically</li>
          </ul>
          <Heading look="h1" tag="h3">
            Currently missing
          </Heading>
          <ul style={{ listStyle: "disc", padding: "0 0 2rem 1em" }}>
            <li>Insurance logic</li>
            <li>Split logic</li>
          </ul>
          <Heading look="h1" tag="h3">
            Inspiration
          </Heading>
          <ul style={{ listStyle: "disc", padding: "0 0 0 1em" }}>
            <li>
              <Link to="https://blackjackbreak.com/" look="secondary">
                https://blackjackbreak.com/
              </Link>
            </li>
          </ul>
        </Modal>
      </Main>
      <Toast ref={this.Toast} />
    </RootContainer>
  );
}

export const Head = () => {
  return (
    <SEOContainer
      title="Blackjack"
      description="An implementation of blackjack rules completely in React (no hooks just yet)—also, it remembers your progress"
      permalink="/lab/blackjack"
      ogImage="/assets/og.png"
    />
  );
};
