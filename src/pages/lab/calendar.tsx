import React from "react";

import { RootContainer, SEOContainer } from "~containers";
import { Main, Hero, Button, Text, Calendar } from "~components";
import { useLocale } from "~utils";

export default function CalendarPage() {
  const [selected, setDate] = React.useState(new Date());
  const [locale] = useLocale();

  const helpers = {
    getDaysArray: () =>
      Array.from(
        { length: new Date(selected.getFullYear(), selected.getMonth() + 1, 0).getDate() },
        (_, i) => i + 1
      ),
    getFirstDayOfMonth: () => new Date(selected.getFullYear(), selected.getMonth()).getDay(),
    getWeekdayNames: () =>
      new Array(7)
        .fill(null)
        .map((_, i) => new Date(1970, 0, 5 + i).toLocaleString(locale, { weekday: "short" })),
  };

  const handleChangeDate = ({ yearOffset = 0, monthOffset = 0, dateOffset = 0 }) => {
    setDate(
      (date) =>
        new Date(
          date.getFullYear() + yearOffset,
          date.getMonth() + monthOffset,
          date.getDate() + dateOffset
        )
    );
  };

  const renderCalendarControls = () => (
    <Calendar.Controls>
      <Button look="tertiary" onClick={() => handleChangeDate({ yearOffset: -1 })}>
        «
      </Button>
      <Button look="tertiary" onClick={() => handleChangeDate({ monthOffset: -1 })}>
        ‹
      </Button>
      <Text style={{ textAlign: "center" }}>
        {selected.toLocaleString(locale, { month: "long", year: "numeric" })}
      </Text>
      <Button look="tertiary" onClick={() => handleChangeDate({ monthOffset: 1 })}>
        ›
      </Button>
      <Button look="tertiary" onClick={() => handleChangeDate({ yearOffset: 1 })}>
        »
      </Button>
    </Calendar.Controls>
  );

  const renderCalendarWeekdays = () => (
    <Calendar.Weekdays>
      {helpers.getWeekdayNames().map((weekday) => (
        <Text key={weekday}>{weekday}</Text>
      ))}
    </Calendar.Weekdays>
  );

  const renderCalendarDays = () => (
    <Calendar.Days>
      {helpers.getDaysArray().map((day, i) => (
        <Calendar.Day
          key={day}
          style={{ gridColumnStart: i === 0 ? helpers.getFirstDayOfMonth() || 7 : undefined }}
          data-current={selected.getDate() === day ? true : undefined}
          onClick={() => handleChangeDate({ dateOffset: day - selected.getDate() })}
        >
          {day}
        </Calendar.Day>
      ))}
    </Calendar.Days>
  );

  return (
    <RootContainer>
      <Main>
        <Hero
          title="A minimalist implementation of a monthly calendar in React—more of a proof-of-concept, to be honest"
          codeLink="https://github.com/mrozilla/mrozilla.cz/blob/master/src/pages/lab/calendar.tsx"
        />
        <section style={{ maxWidth: "300px" }}>
          {renderCalendarControls()}
          {renderCalendarWeekdays()}
          {renderCalendarDays()}
        </section>
      </Main>
    </RootContainer>
  );
}

export const Head = () => {
  return (
    <SEOContainer
      title="Calendar"
      description="A minimalist implementation of a monthly calendar in React—more of a proof-of-concept, to be honest"
      permalink="/lab/calendar"
      ogImage="/assets/og.png"
    />
  );
};
