// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { Fragment, useReducer } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import { RootContainer, SEOContainer, HeroContainer } from '~containers';
import { Main, Section, Button, Input, Form } from '~components';

// ─────────────────────────────────────────────────────────────────────────────
// query
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  {
    page: labJson(meta: { permalink: { eq: "/lab/scoreboard/" } }) {
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

export default function ScoreboardPage(props) {
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
        <Scoreboard.Set fontWeight="bold">{utils.getSetCount(state, player)}</Scoreboard.Set>
        {winner === null && (
          <Scoreboard.Point>
            {state[player].points[state[player].points.length - 1]}
          </Scoreboard.Point>
        )}
        {winner
          && state[player].points.map((point, i) => (
            <Scoreboard.Point
              opacity={
                state[player].points[i] > 10
                && state[player].points[i] - state[opponent].points[i] > 1
                  ? 1
                  : 0.5
              }
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
        gridTemplate={{
          xs: `
            'homeName homeTeam homeUp homeDown'
            'awayName awayTeam awayUp awayDown'
            '. . reset reset'
            / 2fr 1fr auto auto
          `,
        }}
        gridGap="1rem"
        onSubmit={event => event.preventDefault()}
      >
        <Input
          gridArea="homeName"
          type="text"
          value={state.home.name}
          name="name"
          onChange={({ target }) => handleInput('home', target)}
        />
        <Input
          gridArea="homeTeam"
          type="text"
          name="team"
          value={state.home.team}
          onChange={({ target }) => handleInput('home', target)}
        />
        <Button gridArea="homeUp" onClick={() => handleAddPoint('home')} disabled={isEnd}>
          ↑
        </Button>
        <Button
          gridArea="homeDown"
          onClick={() => handleRemovePoint('home')}
          disabled={state.home.points.every(point => point === 0)}
        >
          ↓
        </Button>
        <Input
          gridArea="awayName"
          type="text"
          value={state.away.name}
          name="name"
          onChange={({ target }) => handleInput('away', target)}
        />
        <Input
          gridArea="awayTeam"
          type="text"
          value={state.away.team}
          name="team"
          onChange={({ target }) => handleInput('away', target)}
        />
        <Button gridArea="awayUp" onClick={() => handleAddPoint('away')} disabled={isEnd}>
          ↑
        </Button>
        <Button
          gridArea="awayDown"
          onClick={() => handleRemovePoint('away')}
          disabled={state.away.points.every(point => point === 0)}
        >
          ↓
        </Button>
        <Button gridArea="reset" onClick={handleResetScore}>
          Reset score
        </Button>
      </Form>
    );
  };

  return (
    <RootContainer>
      <SEOContainer meta={props.data.page.meta} />
      <Main
        gridTemplate={{
          xs: "'hero' 'scoreboard' 'controls'",
        }}
        gridGap="10vh 4rem"
      >
        <HeroContainer title={props.data.page.body.hero.title} />

        <Section gridArea="scoreboard">
          <Scoreboard>
            {renderPlayer('home')}
            {renderPlayer('away')}
          </Scoreboard>
        </Section>

        <Section gridArea="controls">{renderControls()}</Section>
      </Main>
    </RootContainer>
  );
}
