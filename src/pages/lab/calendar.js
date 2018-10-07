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
  margin-bottom: 4rem;
`;

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default class CalendarPage extends PureComponent {
  state = {
    today:  new Date(),
    locale: 'en',
  };

  helpers = {
    getMonthName: (date = this.state.today) => date.toLocaleString(this.state.locale, { month: 'long' }),
  };

  renderCalendarHeader = () => (
    <Calendar.Header>
      <P>{this.helpers.getMonthName()}</P>
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
