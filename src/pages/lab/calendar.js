// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { useState } from 'react';
import { graphql } from 'gatsby';
import styled, { css } from 'styled-components';

import { RootContainer, SEOContainer, HeroContainer } from '~containers';
import { Main, Section, P, Button } from '~components';
import { useLocale } from '~utils';

// ─────────────────────────────────────────────────────────────────────────────
// query
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  {
    page: mdx(frontmatter: { meta: { permalink: { eq: "/lab/calendar/" } } }) {
      frontmatter {
        ...MetaFragment
        blocks {
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

export default function CalendarPage({
  data: {
    page: { frontmatter: {meta, blocks} },
  },
}) {
  const [selected, setDate] = useState(new Date());
  const [locale] = useLocale();

  const helpers = {
    getDaysArray: () => Array.from(
      {
        length: new Date(selected.getFullYear(), selected.getMonth() + 1, 0).getDate(),
      },
      (_, i) => i + 1,
    ),
    getFirstDayOfMonth: () => new Date(selected.getFullYear(), selected.getMonth()).getDay(),
    getWeekdayNames:    () => new Array(7)
      .fill()
      .map((_, i) => new Date(1970, 0, 5 + i).toLocaleString(locale, { weekday: 'short' })),
  };

  const handleChangeDate = ({ yearOffset = 0, monthOffset = 0, dateOffset = 0 }) => {
    setDate(
      date => new Date(
        date.getFullYear() + yearOffset,
        date.getMonth() + monthOffset,
        date.getDate() + dateOffset,
      ),
    );
  };

  const renderCalendarControls = () => (
    <Calendar.Controls>
      <Button secondary onClick={() => handleChangeDate({ yearOffset: -1 })}>
        «
      </Button>
      <Button secondary onClick={() => handleChangeDate({ monthOffset: -1 })}>
        ‹
      </Button>
      <P textAlign="center">
        {selected.toLocaleString(locale, { month: 'long', year: 'numeric' })}
      </P>
      <Button secondary onClick={() => handleChangeDate({ monthOffset: 1 })}>
        ›
      </Button>
      <Button secondary onClick={() => handleChangeDate({ yearOffset: 1 })}>
        »
      </Button>
    </Calendar.Controls>
  );

  const renderCalendarWeekdays = () => (
    <Calendar.Weekdays>
      {helpers.getWeekdayNames().map(weekday => (
        <P key={weekday}>{weekday}</P>
      ))}
    </Calendar.Weekdays>
  );

  const renderCalendarDays = () => (
    <Calendar.Days>
      {helpers.getDaysArray().map((day, i) => (
        <Calendar.Day
          key={day}
          style={{ gridColumnStart: i === 0 && helpers.getFirstDayOfMonth() }}
          isCurrent={selected.getDate() === day}
          onClick={() => handleChangeDate({ dateOffset: day - selected.getDate() })}
        >
          {day}
        </Calendar.Day>
      ))}
    </Calendar.Days>
  );

  return (
    <RootContainer>
      <SEOContainer meta={meta} />
      <Main
        gridTemplate={{
          xs: "'hero' 'calendar'",
          lg: "'hero hero' 'calendar .' / 1fr 1fr",
        }}
        gridGap="10vh 4rem"
      >
        <HeroContainer title={blocks[0].title} />
        <Section gridArea="calendar">
          {renderCalendarControls()}
          {renderCalendarWeekdays()}
          {renderCalendarDays()}
        </Section>
      </Main>
    </RootContainer>
  );
}
