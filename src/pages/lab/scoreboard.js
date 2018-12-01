// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { PureComponent, Fragment } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import { RootContainer, SEOContainer, HeroContainer } from '~containers';
import { Main, Section, Button, Input, Form } from '~components';
import { parseInput } from '~utils';

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
// component
// ─────────────────────────────────────────────────────────────────────────────

export default class ScoreboardPage extends PureComponent {
  state = {
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
  };

  handleAddPoint = (player) => {
    this.setState((state) => {
      const opponent = this.getOpponent(player);
      const playerPoint = state[player].points[state[player].points.length - 1] + 1;
      const opponentPoint = state[opponent].points[state[opponent].points.length - 1];
      const isNextSet = playerPoint > 10 && playerPoint - opponentPoint > 1 && this.getSetCount(player) < 3;

      return {
        [player]: {
          ...state[player],
          points: [
            ...state[player].points.map((point, i, arr) => (i === arr.length - 1 ? point + 1 : point)),
            ...(isNextSet ? [0] : []),
          ],
        },
        [opponent]: {
          ...state[opponent],
          points: [...state[opponent].points, ...(isNextSet ? [0] : [])],
        },
      };
    });
  };

  handleRemovePoint = (player) => {
    this.setState((state) => {
      const opponent = this.getOpponent(player);
      const playerPoint = state[player].points[state[player].points.length - 1] - 1;
      const isPreviousSet = playerPoint < 0;

      return {
        [player]: {
          ...state[player],
          points: isPreviousSet
            ? state[player].points.slice(0, -1)
            : state[player].points.map((point, i, arr) => (i === arr.length - 1 ? point - 1 : point)),
        },
        [opponent]: {
          ...state[opponent],
          points: isPreviousSet
            ? state[opponent].points.slice(0, -1)
            : state[opponent].points,
        },
      };
    });
  };

  handleResetScore = () => {
    this.setState(state => ({
      home: {
        ...state.home,
        points: [0],
      },
      away: {
        ...state.away,
        points: [0],
      },
    }));
  };

  getSetCount = (player) => {
    const opponent = this.getOpponent(player);

    return this.state[player].points.reduce((acc, point, i) => {
      if (point > 10 && point - this.state[opponent].points[i] > 1) {
        return acc + 1;
      }
      return acc;
    }, 0);
  };

  getOpponent = player => (player === 'home' ? 'away' : 'home');

  getWinner = () => {
    if (this.getSetCount('home') > 3) {
      return 'home';
    }
    if (this.getSetCount('away') > 3) {
      return 'away';
    }
    return null;
  };

  renderPlayer = (player) => {
    const winner = this.getWinner();
    const opponent = this.getOpponent(player);
    return (
      <Fragment key={this.state[player].name}>
        <Scoreboard.Team>{this.state[player].team}</Scoreboard.Team>
        <Scoreboard.Name>{this.state[player].name}</Scoreboard.Name>
        <Scoreboard.Set fontWeight="bold">{this.getSetCount(player)}</Scoreboard.Set>
        {winner === null && (
          <Scoreboard.Point>
            {this.state[player].points[this.state[player].points.length - 1]}
          </Scoreboard.Point>
        )}
        {winner
          && this.state[player].points.map((point, i) => (
            <Scoreboard.Point
              opacity={
                this.state[player].points[i] > 10
                && this.state[player].points[i] - this.state[opponent].points[i] > 1
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

  renderControls = () => {
    const isEnd = this.getWinner() !== null;
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
          value={this.state.home.name}
          name="name"
          onChange={({ target }) => this.setState(state => ({
            home: { ...state.home, ...parseInput(target) },
          }))
          }
        />
        <Input
          gridArea="homeTeam"
          type="text"
          name="team"
          value={this.state.home.team}
          onChange={({ target }) => this.setState(state => ({
            home: { ...state.home, ...parseInput(target) },
          }))
          }
        />
        <Button gridArea="homeUp" onClick={() => this.handleAddPoint('home')} disabled={isEnd}>
          ↑
        </Button>
        <Button
          gridArea="homeDown"
          onClick={() => this.handleRemovePoint('home')}
          disabled={this.state.home.points.every(point => point === 0)}
        >
          ↓
        </Button>
        <Input
          gridArea="awayName"
          type="text"
          value={this.state.away.name}
          name="name"
          onChange={({ target }) => this.setState(state => ({
            away: { ...state.away, ...parseInput(target) },
          }))
          }
        />
        <Input
          gridArea="awayTeam"
          type="text"
          value={this.state.away.team}
          name="team"
          onChange={({ target }) => this.setState(state => ({
            away: { ...state.away, ...parseInput(target) },
          }))
          }
        />
        <Button gridArea="awayUp" onClick={() => this.handleAddPoint('away')} disabled={isEnd}>
          ↑
        </Button>
        <Button
          gridArea="awayDown"
          onClick={() => this.handleRemovePoint('away')}
          disabled={this.state.away.points.every(point => point === 0)}
        >
          ↓
        </Button>
        <Button gridArea="reset" onClick={this.handleResetScore}>
          Reset score
        </Button>
      </Form>
    );
  };

  render() {
    return (
      <RootContainer>
        <SEOContainer meta={this.props.data.page.meta} />
        <Main
          gridTemplate={{
            xs: "'hero' 'scoreboard' 'controls'",
          }}
          gridGap="10vh 4rem"
        >
          <HeroContainer title={this.props.data.page.body.hero.title} />

          <Section gridArea="scoreboard">
            <Scoreboard>
              {this.renderPlayer('home')}
              {this.renderPlayer('away')}
            </Scoreboard>
          </Section>

          <Section gridArea="controls">{this.renderControls()}</Section>
        </Main>
      </RootContainer>
    );
  }
}
