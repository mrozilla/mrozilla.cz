// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { PureComponent } from 'react';
import { graphql } from 'gatsby';

import styled, { css } from 'styled-components';
import {
  Main, Section, P, Button,
} from '../../components';
import { RootContainer, SEOContainer, HeroContainer } from '../../containers';

// ─────────────────────────────────────────────────────────────────────────────
// query
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  {
    page: labJson(meta: { permalink: { eq: "/lab/calendar" } }) {
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

const Calendar = {};

Calendar.Controls = styled.div`
  display: grid;
  grid-template-columns: auto auto 1fr auto auto;
  margin: 0 0 2rem 0;
`;

Calendar.Weekdays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin: 0 0 2rem 0;
  text-align: center;
  opacity: 0.5;
`;

Calendar.Days = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

Calendar.Day = styled.p`
  text-align: center;
  cursor: pointer;

  ${({ isCurrent }) => isCurrent
    && css`
      color: hsl(var(--hsl-bg));
      background-image: radial-gradient(
        circle closest-side,
        var(--color-info) 100%,
        transparent 100%
      );
    `};

  &:hover {
    color: var(--color-info);
    background-image: radial-gradient(
      circle closest-side,
      hsla(var(--hsl-info), 0.25) 100%,
      transparent 100%
    );
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default class CalendarPage extends PureComponent {
  state = {
    selected: new Date(),
    locale:
      (typeof navigator !== 'undefined' && navigator.languages && navigator.languages[0]) || 'en',
  };

  helpers = {
    getDaysArray: () => Array.from(
      {
        length: new Date(
          this.state.selected.getFullYear(),
          this.state.selected.getMonth() + 1,
          0,
        ).getDate(),
      },
      (_, i) => i + 1,
    ),
    getFirstDayOfMonth: () => new Date(this.state.selected.getFullYear(), this.state.selected.getMonth()).getDay(),
    getWeekdayNames:    () => new Array(7)
      .fill()
      .map((_, i) => new Date(1970, 0, 5 + i).toLocaleString(this.state.locale, { weekday: 'short' })),
  };

  handleChangeDate = ({ yearOffset = 0, monthOffset = 0, dateOffset = 0 }) => {
    this.setState(prevState => ({
      selected: new Date(
        prevState.selected.getFullYear() + yearOffset,
        prevState.selected.getMonth() + monthOffset,
        prevState.selected.getDate() + dateOffset,
      ),
    }));
  };

  renderCalendarControls = () => (
    <Calendar.Controls>
      <Button type="basic" onClick={() => this.handleChangeDate({ yearOffset: -1 })}>
        «
      </Button>
      <Button type="basic" onClick={() => this.handleChangeDate({ monthOffset: -1 })}>
        ‹
      </Button>
      <P textAlign="center">
        {this.state.selected.toLocaleString(this.state.locale, { month: 'long', year: 'numeric' })}
      </P>
      <Button type="basic" onClick={() => this.handleChangeDate({ monthOffset: 1 })}>
        ›
      </Button>
      <Button type="basic" onClick={() => this.handleChangeDate({ yearOffset: 1 })}>
        »
      </Button>
    </Calendar.Controls>
  );

  renderCalendarWeekdays = () => (
    <Calendar.Weekdays>
      {this.helpers.getWeekdayNames().map(weekday => (
        <P key={weekday}>{weekday}</P>
      ))}
    </Calendar.Weekdays>
  );

  renderCalendarDays = () => (
    <Calendar.Days>
      {this.helpers.getDaysArray().map((day, i) => (
        <Calendar.Day
          key={day}
          style={{ gridColumnStart: i === 0 && this.helpers.getFirstDayOfMonth() }}
          isCurrent={this.state.selected.getDate() === day}
          onClick={() => this.handleChangeDate({ dateOffset: day - this.state.selected.getDate() })}
        >
          {day}
        </Calendar.Day>
      ))}
    </Calendar.Days>
  );

  render() {
    return (
      <RootContainer>
        <SEOContainer meta={this.props.data.page.meta} />
        <Main
          gridTemplate={{
            xs: "'hero' 'calendar'",
            lg: "'hero hero' 'calendar .' / 1fr 1fr",
          }}
          gridGap="10vh 4rem"
        >
          <HeroContainer title={this.props.data.page.body.hero.title} />
          <Section gridArea="calendar">
            {this.renderCalendarControls()}
            {this.renderCalendarWeekdays()}
            {this.renderCalendarDays()}
          </Section>
        </Main>
      </RootContainer>
    );
  }
}
