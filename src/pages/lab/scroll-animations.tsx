import React from "react";

import { RootContainer, SEOContainer } from "~containers";
import { Main, Hero, Appearable } from "~components";

export default function MasonryPage() {
  return (
    <RootContainer>
      <Main>
        <Hero
          title="A simple implementation of scroll-triggered staggered animations using Intersection Observer API"
          codeLink="https://github.com/mrozilla/mrozilla.cz/blob/master/src/pages/lab/scroll-animations.tsx"
        />
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, max(10rem, 100%/4)), 1fr))", // fluid columns, but max out at 3
            gap: "2rem",
          }}
        >
          {Array.from({ length: 50 }, (_, i) => i).map((item) => (
            <Appearable key={item}>{item}</Appearable>
          ))}
        </section>
      </Main>
    </RootContainer>
  );
}

export const Head = () => {
  return (
    <SEOContainer
      title="Scroll animations"
      description="A simple implementation of scroll-triggered staggered animations using Intersection Observer API"
      permalink="/lab/scroll-animations"
      ogImage="/assets/og.png"
    />
  );
};
