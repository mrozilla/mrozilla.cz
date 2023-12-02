import React from "react";

import * as styles from "./blackjack.module.scss";

export type BlackjackCardType = {
  suit?: "♥" | "♦" | "♠" | "♣";
  rank?: "A" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "J" | "Q" | "K";
};

export interface BlackjackCardProps
  extends BlackjackCardType,
    React.ComponentPropsWithoutRef<"div"> {
  isFaceDown?: boolean;
}

export const BlackjackCard: React.FC<BlackjackCardProps> = ({
  suit,
  rank,
  isFaceDown,
  ...rest
}) => {
  return (
    <div
      className={styles.card}
      data-suit={suit || " "}
      data-rank={rank || " "}
      data-facedown={isFaceDown}
      {...rest}
    />
  );
};

export interface BlackjackScoreProps extends React.ComponentPropsWithoutRef<"span"> {
  winner: "P" | "D" | "DRAW" | "";
  owner: "P" | "D";
}

export const BlackjackScore: React.FC<BlackjackScoreProps> = ({ winner, owner, ...rest }) => {
  const getVariant = () => {
    if (winner === "DRAW") return "info";
    if (winner === owner) return "success";
    if (winner && winner !== owner) return "danger";
  };

  return <span className={styles.score} data-variant={getVariant()} {...rest} />;
};
