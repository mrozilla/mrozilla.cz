// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { useState } from 'react';
import { graphql } from 'gatsby';
import styled, { css } from 'styled-components';

import { RootContainer, SEOContainer } from '~containers';
import { Main, Section, P, Button } from '~components';
import { useLocale, renderBlocks } from '~utils';

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
          type
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
  align-items: center;
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

  ${({ isCurrent }) =>
    isCurrent &&
    css`
      color: hsl(var(--hsl-bg));
      background-image: radial-gradient(
        circle closest-side,
        var(--color-primary) 100%,
        transparent 100%
      );
    `};

  &:hover {
    color: var(--color-primary);
    background-image: radial-gradient(
      circle closest-side,
      hsla(var(--hsl-primary), 0.25) 100%,
      transparent 100%
    );
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function CalendarPage({
  data: {
    page: {
      frontmatter: { meta, blocks },
    },
  },
}) {
  const [selected, setDate] = useState(new Date());
  const [locale] = useLocale();

  const helpers = {
    getDaysArray: () =>
      Array.from(
        {
          length: new Date(selected.getFullYear(), selected.getMonth() + 1, 0).getDate(),
        },
        (_, i) => i + 1,
      ),
    getFirstDayOfMonth: () => new Date(selected.getFullYear(), selected.getMonth()).getDay(),
    getWeekdayNames: () =>
      new Array(7)
        .fill()
        .map((_, i) => new Date(1970, 0, 5 + i).toLocaleString(locale, { weekday: 'short' })),
  };

  const handleChangeDate = ({ yearOffset = 0, monthOffset = 0, dateOffset = 0 }) => {
    setDate(
      date =>
        new Date(
          date.getFullYear() + yearOffset,
          date.getMonth() + monthOffset,
          date.getDate() + dateOffset,
        ),
    );
  };

  const renderCalendarControls = () => (
    <Calendar.Controls>
      <Button onClick={() => handleChangeDate({ yearOffset: -1 })}>«</Button>
      <Button onClick={() => handleChangeDate({ monthOffset: -1 })}>‹</Button>
      <P
        css={`
          text-align: center;
        `}
      >
        {selected.toLocaleString(locale, { month: 'long', year: 'numeric' })}
      </P>
      <Button onClick={() => handleChangeDate({ monthOffset: 1 })}>›</Button>
      <Button onClick={() => handleChangeDate({ yearOffset: 1 })}>»</Button>
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
          css={`
            grid-column-start: ${i === 0 && helpers.getFirstDayOfMonth()};
          `}
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
        css={`
          grid-template: 'hero' 'calendar';
          grid-gap: 10vh 4rem;

          @media screen and (min-width: 1200px) {
            grid-template: 'hero hero' 'calendar .' / 1fr 1fr;
          }
        `}
      >
        {renderBlocks(blocks)}
        <Section
          css={`
            grid-area: calendar;
          `}
        >
          {renderCalendarControls()}
          {renderCalendarWeekdays()}
          {renderCalendarDays()}
        </Section>
      </Main>
    </RootContainer>
  );
}
