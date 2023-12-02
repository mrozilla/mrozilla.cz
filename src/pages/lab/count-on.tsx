import React from "react";

import { RootContainer, SEOContainer } from "~containers";
import { Main, Hero, Text, Group, Button } from "~components";

export default function CountOnMePage() {
  const [count, setCount] = React.useState(0);

  const handleAdd: React.MouseEventHandler = (event) => {
    event.stopPropagation();
    setCount((prevCount) => prevCount + 1);

    if ("vibrate" in navigator) {
      if (count > 0) navigator.vibrate(100);
      navigator.vibrate([100, 100]);
    }
  };

  const handleSubtract: React.MouseEventHandler = (event) => {
    event.stopPropagation();
    setCount((prevCount) => prevCount - 1);

    if ("vibrate" in navigator) {
      if (count > 0) navigator.vibrate(100);
      navigator.vibrate([100, 100]);
    }
  };

  const handleReset: React.MouseEventHandler = (event) => {
    event.stopPropagation();
    setCount(0);

    if ("vibrate" in navigator) navigator.vibrate(500);
  };

  return (
    <RootContainer>
      <Main>
        <Hero
          title="Count the things that need to be counted, it's as simple as that"
          codeLink="https://github.com/mrozilla/mrozilla.cz/blob/master/src/pages/lab/count-on.tsx"
        />
        <section style={{ userSelect: "none" }} onClick={handleAdd}>
          <Text style={{ fontSize: "8rem", lineHeight: "10rem" }}>{count.toLocaleString()}</Text>
          <Group gap="2px">
            <Button look="secondary" onClick={handleAdd}>
              Add
            </Button>
            <Button look="secondary" onClick={handleSubtract}>
              Subtract
            </Button>
            <Button look="secondary" onClick={handleReset}>
              Reset
            </Button>
          </Group>
        </section>
      </Main>
    </RootContainer>
  );
}

export const Head = () => {
  return (
    <SEOContainer
      title="Count on me"
      description="Count the things that need to be counted, it's as simple as that"
      permalink="/lab/count-on"
      ogImage="/assets/og.png"
    />
  );
};
