// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { PureComponent } from 'react';
import { graphql } from 'gatsby';

import styled from 'styled-components';
import {
  Main, Section, H2, P, Button,
} from '../../components';
import { RootContainer, SEOContainer, HeroContainer } from '../../containers';

// ─────────────────────────────────────────────────────────────────────────────
// query
// ─────────────────────────────────────────────────────────────────────────────

// export const query = graphql`
//   {
//     page: labJson(meta: { permalink: { eq: "/lab/calendar" } }) {
//       meta {
//         title
//         description
//         ogImage {
//           ...OgImageFragment
//         }
//       }
//       body {
//         hero {
//           title
//         }
//       }
//     }
//   }
// `;

const Calendar = styled.div``;

Calendar.Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;
`;

Calendar.Day = styled.p`
  flex: 14.2857142857% 0;
  text-align: center;
`;

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default class CalendarPage extends PureComponent {
  state = {
    selectedMonth: new Date(),
    locale:        'en',
  };

  helpers = {
    getWeekdayNames: () => new Array(7)
      .fill()
      .map((_, i) => new Date(1970, 0, 5 + i).toLocaleString(this.state.locale, { weekday: 'short' })),
    getMonthName: (date = this.state.selectedMonth) => date.toLocaleString(this.state.locale, { month: 'long' }),
    getYearName:  (date = this.state.selectedMonth) => date.toLocaleString(this.state.locale, { year: 'numeric' }),
  };

  handleChangeMonth = (offset) => {
    this.setState(prevState => ({
      selectedMonth: new Date(
        prevState.selectedMonth.getFullYear(),
        prevState.selectedMonth.getMonth() + offset,
      ),
    }));
  };

  renderCalendarHeader = () => {
    const currentMonth = `${this.helpers.getMonthName()}, ${this.helpers.getYearName()}`;
    return (
      <Calendar.Header>
        <Button onClick={() => this.handleChangeMonth(-1)}>‹</Button>
        <P>{currentMonth}</P>
        <Button onClick={() => this.handleChangeMonth(1)}>›</Button>
      </Calendar.Header>
    );
  };

  renderCalendarWeekdays = () => (
    <Calendar.Header>
      {this.helpers.getWeekdayNames().map(weekday => (
        <Calendar.Day key={weekday}>{weekday}</Calendar.Day>
      ))}
    </Calendar.Header>
  );

  render() {
    return (
      <RootContainer>
        <Main gridTemplate="'hero' 'calendar'" gridGap="10vh 4rem">
          {/* <SEOContainer meta={this.props.data.page.meta} /> */}
          {/* <HeroContainer title={this.props.data.page.body.hero.title} /> */}
          <Section gridArea="calendar">
            {this.renderCalendarHeader()}
            {this.renderCalendarWeekdays()}
          </Section>
        </Main>
      </RootContainer>
    );
  }
}
