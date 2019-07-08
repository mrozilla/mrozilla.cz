// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { Fragment, useReducer } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import { RootContainer, SEOContainer } from '~containers';
import { Main, Section, Button, Input, Form } from '~components';
import { renderBlocks } from '~utils';

// ─────────────────────────────────────────────────────────────────────────────
// query
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  {
    page: mdx(frontmatter: { meta: { permalink: { eq: "/lab/scoreboard/" } } }) {
      frontmatter {
        ...MetaFragment
        blocks {
          title
          type
        }
      }
    }
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// components
// ─────────────────────────────────────────────────────────────────────────────

const Scoreboard = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 0rem 2rem;

  @media screen and (min-width: 900px) {
    grid-template-columns: max-content minmax(max-content, 8fr) repeat(8, 1fr);
  }
`;

Scoreboard.Team = styled.div`
  grid-column: 1 / -1;

  @media screen and (min-width: 900px) {
    grid-column: 1;
  }
`;

Scoreboard.Name = styled.div`
  grid-column: 1 / -1;
  font-weight: bold;

  @media screen and (min-width: 900px) {
    grid-column: 2;
  }
`;

Scoreboard.Set = styled.div`
  font-weight: bold;
`;

Scoreboard.Point = styled.div`
  text-align: right;

  opacity: ${({ opacity }) => opacity};
`;

// ─────────────────────────────────────────────────────────────────────────────
// reducer
// ─────────────────────────────────────────────────────────────────────────────

const utils = {
  getOpponent: (state, player) => (player === 'home' ? 'away' : 'home'),
  getSetCount: (state, player) => {
    const opponent = utils.getOpponent(state, player);

    return state[player].points.reduce((acc, point, i) => {
      if (point > 10 && point - state[opponent].points[i] > 1) {
        return acc + 1;
      }

      return acc;
    }, 0);
  },
  getWinner: (state) => {
    if (utils.getSetCount(state, 'home') > 3) {
      return 'home';
    }
    if (utils.getSetCount(state, 'away') > 3) {
      return 'away';
    }
    return null;
  },
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'addPoint': {
      const opponent = utils.getOpponent(state, payload.player);
      const playerPoint = state[payload.player].points[state[payload.player].points.length - 1] + 1;
      const opponentPoint = state[opponent].points[state[opponent].points.length - 1];
      const isNextSet = playerPoint > 10
        && playerPoint - opponentPoint > 1
        && utils.getSetCount(state, payload.player) < 3;

      return {
        [payload.player]: {
          ...state[payload.player],
          points: [
            ...state[payload.player].points.map((point, i, arr) => (i === arr.length - 1 ? point + 1 : point)),
            ...(isNextSet ? [0] : []),
          ],
        },
        [opponent]: {
          ...state[opponent],
          points: [...state[opponent].points, ...(isNextSet ? [0] : [])],
        },
      };
    }

    case 'removePoint': {
      const opponent = utils.getOpponent(state, payload.player);
      const playerPoint = state[payload.player].points[state[payload.player].points.length - 1] - 1;
      const isPreviousSet = playerPoint < 0;

      return {
        [payload.player]: {
          ...state[payload.player],
          points: isPreviousSet
            ? state[payload.player].points.slice(0, -1)
            : state[payload.player].points.map((point, i, arr) => (i === arr.length - 1 ? point - 1 : point)),
        },
        [opponent]: {
          ...state[opponent],
          points: isPreviousSet ? state[opponent].points.slice(0, -1) : state[opponent].points,
        },
      };
    }

    case 'reset': {
      return {
        home: {
          ...state.home,
          points: [0],
        },
        away: {
          ...state.away,
          points: [0],
        },
      };
    }

    case 'input': {
      return {
        ...state,
        [payload.player]: {
          ...state[payload.player],
          [payload.name]: payload.value,
        },
      };
    }

    default:
      console.warn('UNKNOWN ACTION', type); // eslint-disable-line no-console
      return state;
  }
};

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function ScoreboardPage({
  data: {
    page: {
      frontmatter: { meta, blocks },
    },
  },
}) {
  const [state, dispatch] = useReducer(reducer, {
    home: {
      name:   'MA Long',
      team:   'CHN',
      points: [0],
    },
    away: {
      name:   'FAN Zhendong',
      team:   'CHN',
      points: [0],
    },
  });

  const handleAddPoint = (player) => {
    dispatch({ type: 'addPoint', payload: { player } });
  };

  const handleRemovePoint = (player) => {
    dispatch({ type: 'removePoint', payload: { player } });
  };

  const handleResetScore = () => {
    dispatch({ type: 'reset' });
  };

  const handleInput = (player, { name, value }) => {
    dispatch({
      type:    'input',
      payload: {
        player,
        name,
        value,
      },
    });
  };

  const renderPlayer = (player) => {
    const winner = utils.getWinner(state);
    const opponent = utils.getOpponent(state, player);
    return (
      <Fragment key={state[player].name}>
        <Scoreboard.Team>{state[player].team}</Scoreboard.Team>
        <Scoreboard.Name>{state[player].name}</Scoreboard.Name>
        <Scoreboard.Set
          css={`
            font-weight: bold;
          `}
        >
          {utils.getSetCount(state, player)}
        </Scoreboard.Set>
        {winner === null && (
          <Scoreboard.Point>
            {state[player].points[state[player].points.length - 1]}
          </Scoreboard.Point>
        )}
        {winner
          && state[player].points.map((point, i) => (
            <Scoreboard.Point
              css={`
                opacity: ${state[player].points[i] > 10
                && state[player].points[i] - state[opponent].points[i] > 1
                ? '1'
                : '0.5'};
              `}
            >
              {point}
            </Scoreboard.Point>
          ))}
      </Fragment>
    );
  };

  const renderControls = () => {
    const isEnd = utils.getWinner(state) !== null;
    return (
      <Form
        css={`
          grid-template:
            'homeName homeTeam homeUp homeDown'
            'awayName awayTeam awayUp awayDown'
            '. . reset reset'
            / 2fr 1fr auto auto;
          grid-gap: 1rem;
        `}
        onSubmit={event => event.preventDefault()}
      >
        <Input
          type="text"
          value={state.home.name}
          name="name"
          label="Home player name"
          css={`
            grid-area: homeName;
          `}
          onChange={({ target }) => handleInput('home', target)}
        />
        <Input
          type="text"
          value={state.home.team}
          name="team"
          label="Home player team"
          css={`
            grid-area: homeTeam;
          `}
          onChange={({ target }) => handleInput('home', target)}
        />
        <Button
          look="secondary"
          disabled={isEnd}
          css={`
            grid-area: homeUp;
          `}
          onClick={() => handleAddPoint('home')}
        >
          ↑
        </Button>
        <Button
          look="secondary"
          disabled={state.home.points.every(point => point === 0)}
          css={`
            grid-area: homeDown;
          `}
          onClick={() => handleRemovePoint('home')}
        >
          ↓
        </Button>
        <Input
          type="text"
          value={state.away.name}
          name="name"
          label="Away player name"
          css={`
            grid-area: awayName;
          `}
          onChange={({ target }) => handleInput('away', target)}
        />
        <Input
          type="text"
          value={state.away.team}
          name="team"
          label="Away player team"
          css={`
            grid-area: awayTeam;
          `}
          onChange={({ target }) => handleInput('away', target)}
        />
        <Button
          look="secondary"
          disabled={isEnd}
          css={`
            grid-area: awayUp;
          `}
          onClick={() => handleAddPoint('away')}
        >
          ↑
        </Button>
        <Button
          look="secondary"
          disabled={state.away.points.every(point => point === 0)}
          css={`
            grid-area: awayDown;
          `}
          onClick={() => handleRemovePoint('away')}
        >
          ↓
        </Button>
        <Button
          look="secondary"
          css={`
            grid-area: reset;
          `}
          onClick={handleResetScore}
        >
          Reset score
        </Button>
      </Form>
    );
  };

  return (
    <RootContainer>
      <SEOContainer meta={meta} />
      <Main
        css={`
          grid-template: 'hero' 'scoreboard' 'controls';
          grid-gap: 10vh 4rem;
        `}
      >
        {renderBlocks(blocks)}

        <Section
          css={`
            grid-area: scoreboard;
          `}
        >
          <Scoreboard>
            {renderPlayer('home')}
            {renderPlayer('away')}
          </Scoreboard>
        </Section>

        <Section
          css={`
            grid-area: controls;
          `}
        >
          {renderControls()}
        </Section>
      </Main>
    </RootContainer>
  );
}
