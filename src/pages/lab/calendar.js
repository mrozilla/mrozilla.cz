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

const Calendar = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

Calendar.Segment = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 4rem;
`;

Calendar.Weekday = styled.p`
  flex: 14.2857142857% 0;
  text-align: center;
  opacity: 0.5;
`;

Calendar.Day = styled.p`
  flex: 14.2857142857% 0;
  text-align: center;
  margin-bottom: 0.5rem;

  ${({ dayOffset }) => dayOffset
    && css`
      margin-left: calc(14.2857142857% * ${dayOffset - 1});
    `};

  ${({ isToday }) => isToday
    && css`
      color: hsl(var(--hsl-info));
      background-image: radial-gradient(
        circle closest-side,
        hsla(var(--hsl-info), 0.25) 100%,
        transparent 100%
      );
    `};

  &:hover {
    background-image: radial-gradient(
      circle closest-side,
      hsla(var(--hsl-text), 0.1) 100%,
      transparent 100%
    );
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default class CalendarPage extends PureComponent {
  state = {
    today:         new Date(),
    selectedMonth: new Date(),
    locale:        'en',
  };

  helpers = {
    getNumberOfDays: () => new Date(
      this.state.selectedMonth.getFullYear(),
      this.state.selectedMonth.getMonth(),
      0,
    ).getDate(),
    getFirstDayOfMonth: () => new Date(
      this.state.selectedMonth.getFullYear(),
      this.state.selectedMonth.getMonth(),
    ).getDay(),
    getWeekdayNames: () => new Array(7)
      .fill()
      .map((_, i) => new Date(1970, 0, 5 + i).toLocaleString(this.state.locale, { weekday: 'short' })),
    getMonthName: (date = this.state.selectedMonth) => date.toLocaleString(this.state.locale, { month: 'long' }),
    getYearName:  (date = this.state.selectedMonth) => date.toLocaleString(this.state.locale, { year: 'numeric' }),
  };

  handleChangeSelection = ({ yearOffset = 0, monthOffset = 0 }) => {
    this.setState(prevState => ({
      selectedMonth: new Date(
        prevState.selectedMonth.getFullYear() + yearOffset,
        prevState.selectedMonth.getMonth() + monthOffset,
      ),
    }));
  };

  renderCalendarHeader = () => {
    const currentMonth = `${this.helpers.getMonthName()}, ${this.helpers.getYearName()}`;
    return (
      <Calendar.Segment>
        <Button onClick={() => this.handleChangeSelection({ yearOffset: -1 })}>«</Button>
        <Button onClick={() => this.handleChangeSelection({ monthOffset: -1 })}>‹</Button>
        <P margin="0 auto">{currentMonth}</P>
        <Button onClick={() => this.handleChangeSelection({ monthOffset: 1 })}>›</Button>
        <Button onClick={() => this.handleChangeSelection({ yearOffset: 1 })}>»</Button>
      </Calendar.Segment>
    );
  };

  renderCalendarWeekdays = () => (
    <Calendar.Segment>
      {this.helpers.getWeekdayNames().map(weekday => (
        <Calendar.Weekday key={weekday}>{weekday}</Calendar.Weekday>
      ))}
    </Calendar.Segment>
  );

  renderCalendarDays = () => {
    const daysArray = Array.from({ length: this.helpers.getNumberOfDays() }, (_, i) => i + 1);
    return (
      <Calendar>
        {daysArray.map((day, i) => {
          const helpers = {
            dayOffset: i === 0 && this.helpers.getFirstDayOfMonth(),
            isToday:
              this.state.today.getFullYear() === this.state.selectedMonth.getFullYear()
              && this.state.today.getMonth() === this.state.selectedMonth.getMonth()
              && this.state.today.getDate() === day,
          };
          return (
            <Calendar.Day key={day} {...helpers}>
              {day}
            </Calendar.Day>
          );
        })}
      </Calendar>
    );
  };

  render() {
    return (
      <RootContainer>
        <Main gridTemplate="'hero' 'calendar'" gridGap="10vh 4rem">
          <SEOContainer meta={this.props.data.page.meta} />
          <HeroContainer title={this.props.data.page.body.hero.title} />
          <Section gridArea="calendar">
            {this.renderCalendarHeader()}
            {this.renderCalendarWeekdays()}
            {this.renderCalendarDays()}
          </Section>
        </Main>
      </RootContainer>
    );
  }
}
