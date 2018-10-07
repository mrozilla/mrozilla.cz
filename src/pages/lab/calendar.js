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

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default class CalendarPage extends PureComponent {
  state = {
    selectedMonth: new Date(),
    locale:        'en',
  };

  helpers = {
    getMonthName: (date = this.state.selectedMonth) => date.toLocaleString(this.state.locale, { month: 'long' }),
  };

  handleChangeMonth = (offset) => {
    this.setState(prevState => ({
      selectedMonth: new Date(
        prevState.selectedMonth.getFullYear(),
        prevState.selectedMonth.getMonth() + offset,
      ),
    }));
  };

  renderCalendarHeader = () => (
    <Calendar.Header>
      <Button onClick={() => this.handleChangeMonth(-1)}>
        ‹
      </Button>
      <P>
        {this.helpers.getMonthName()}, {this.state.selectedMonth.getFullYear()}
      </P>
      <Button onClick={() => this.handleChangeMonth(1)}>›</Button>
    </Calendar.Header>
  );

  render() {
    return (
      <RootContainer>
        <Main gridTemplate="'hero' 'calendar'" gridGap="10vh 4rem">
          {/* <SEOContainer meta={this.props.data.page.meta} /> */}
          {/* <HeroContainer title={this.props.data.page.body.hero.title} /> */}
          <Section gridArea="calendar">{this.renderCalendarHeader()}</Section>
        </Main>
      </RootContainer>
    );
  }
}
