import React from "react";

import { RootContainer, SEOContainer } from "~containers";
import { Main, Hero, Button, TextInput } from "~components";

import * as styles from "~components/snowflakes/scoreboard.module.scss";

type Player = { name: string; team: string; points: number[] };
type State = { home: Player; away: Player };

const utils = {
  getOpponent: (state: State, player: keyof State) => (player === "home" ? "away" : "home"),
  getSetCount: (state: State, player: keyof State) => {
    const opponent = utils.getOpponent(state, player);

    return state[player].points.reduce((acc, point, i) => {
      if (point > 10 && point - state[opponent].points[i] > 1) return acc + 1;
      return acc;
    }, 0);
  },
  getWinner: (state: State) => {
    if (utils.getSetCount(state, "home") > 3) return "home";
    if (utils.getSetCount(state, "away") > 3) return "away";
    return null;
  },
};

const reducer = (
  state: State,
  action: {
    type: "addPoint" | "removePoint" | "reset" | "input";
    payload: { player: keyof State; name?: string; value?: string };
  }
) => {
  const { type, payload } = action;

  switch (type) {
    case "addPoint": {
      const opponent = utils.getOpponent(state, payload.player);
      const playerPoint = state[payload.player].points[state[payload.player].points.length - 1] + 1;
      const opponentPoint = state[opponent].points[state[opponent].points.length - 1];
      const isNextSet =
        playerPoint > 10 &&
        playerPoint - opponentPoint > 1 &&
        utils.getSetCount(state, payload.player) < 3;

      return {
        [payload.player]: {
          ...state[payload.player],
          points: [
            ...state[payload.player].points.map((point, i, arr) =>
              i === arr.length - 1 ? point + 1 : point
            ),
            ...(isNextSet ? [0] : []),
          ],
        },
        [opponent]: {
          ...state[opponent],
          points: [...state[opponent].points, ...(isNextSet ? [0] : [])],
        },
      } as State;
    }

    case "removePoint": {
      const opponent = utils.getOpponent(state, payload.player);
      const playerPoint = state[payload.player].points[state[payload.player].points.length - 1] - 1;
      const isPreviousSet = playerPoint < 0;

      return {
        [payload.player]: {
          ...state[payload.player],
          points: isPreviousSet
            ? state[payload.player].points.slice(0, -1)
            : state[payload.player].points.map((point, i, arr) =>
                i === arr.length - 1 ? point - 1 : point
              ),
        },
        [opponent]: {
          ...state[opponent],
          points: isPreviousSet ? state[opponent].points.slice(0, -1) : state[opponent].points,
        },
      } as State;
    }

    case "reset": {
      return { home: { ...state.home, points: [0] }, away: { ...state.away, points: [0] } };
    }

    case "input": {
      return {
        ...state,
        [payload.player]: { ...state[payload.player], [payload.name || ""]: payload.value },
      };
    }

    default:
      console.warn("UNKNOWN ACTION", type);
      return state;
  }
};

export default function ScoreboardPage() {
  const [state, dispatch] = React.useReducer(reducer, {
    home: { name: "MA Long", team: "CHN", points: [0] },
    away: { name: "FAN Zhendong", team: "CHN", points: [0] },
  });

  const handleAddPoint = (player: keyof State) => {
    dispatch({ type: "addPoint", payload: { player } });
  };

  const handleRemovePoint = (player: keyof State) => {
    dispatch({ type: "removePoint", payload: { player } });
  };

  const handleResetScore = () => {
    // @ts-expect-error TS doesn't like the empty payload here
    dispatch({ type: "reset" });
  };

  const handleInput = (player: keyof State, { name, value }: HTMLInputElement) => {
    dispatch({ type: "input", payload: { player, name, value } });
  };

  const renderPlayer = (player: keyof State) => {
    const winner = utils.getWinner(state);
    const opponent = utils.getOpponent(state, player);

    return (
      <React.Fragment key={state[player].name}>
        <div className={styles.team}>{state[player].team}</div>
        <div className={styles.name}>{state[player].name}</div>
        <div className={styles.set}>{utils.getSetCount(state, player)}</div>
        {winner === null && (
          <div className={styles.point}>
            {state[player].points[state[player].points.length - 1]}
          </div>
        )}
        {winner &&
          state[player].points.map((point, i) => (
            <div
              className={styles.point}
              style={{
                opacity:
                  state[player].points[i] > 10 &&
                  state[player].points[i] - state[opponent].points[i] > 1
                    ? "1"
                    : ".5",
              }}
            >
              {point}
            </div>
          ))}
      </React.Fragment>
    );
  };

  const renderControls = () => {
    const isEnd = utils.getWinner(state) !== null;
    return (
      <form
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr auto auto",
          gridGap: "1rem",
        }}
        onSubmit={(event) => event.preventDefault()}
      >
        <TextInput
          value={state.home.name}
          name="name"
          label="Home player name"
          onChange={({ target }) => handleInput("home", target)}
        />
        <TextInput
          value={state.home.team}
          name="team"
          label="Home player team"
          onChange={({ target }) => handleInput("home", target)}
        />
        <Button look="secondary" disabled={isEnd} onClick={() => handleAddPoint("home")}>
          ↑
        </Button>
        <Button
          look="secondary"
          disabled={state.home.points.every((point) => point === 0)}
          onClick={() => handleRemovePoint("home")}
        >
          ↓
        </Button>
        <TextInput
          value={state.away.name}
          name="name"
          label="Away player name"
          onChange={({ target }) => handleInput("away", target)}
        />
        <TextInput
          type="text"
          value={state.away.team}
          name="team"
          label="Away player team"
          onChange={({ target }) => handleInput("away", target)}
        />
        <Button look="secondary" disabled={isEnd} onClick={() => handleAddPoint("away")}>
          ↑
        </Button>
        <Button
          look="secondary"
          disabled={state.away.points.every((point) => point === 0)}
          onClick={() => handleRemovePoint("away")}
        >
          ↓
        </Button>
        <Button look="secondary" style={{ gridColumn: "3/5" }} onClick={handleResetScore}>
          Reset score
        </Button>
      </form>
    );
  };

  return (
    <RootContainer>
      <Main>
        <Hero
          title="Table tennis is awesome—and so implementing its scoring logic was obviously the next logical thing to do"
          codeLink="https://github.com/mrozilla/mrozilla.cz/blob/master/src/pages/lab/scoreboard.tsx"
        />

        <section>
          <div className={styles.scoreboard}>
            {renderPlayer("home")}
            {renderPlayer("away")}
          </div>
        </section>

        <section>{renderControls()}</section>
      </Main>
    </RootContainer>
  );
}

export const Head = () => {
  return (
    <SEOContainer
      title="Table tennis scoreboard"
      description="Table tennis is awesome—and so implementing its scoring logic was obviously the next logical thing to do"
      permalink="/lab/scoreboard"
      ogImage="/assets/og.png"
    />
  );
};
