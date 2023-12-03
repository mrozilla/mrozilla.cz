import React from "react";

import { RootContainer, SEOContainer } from "~containers";
import { Heading, Hero, Main, WorksList } from "~components";

const tools = [
  {
    title: "Blackjack",
    description: "Implementation of blackjack game logic",
    permalink: "blackjack",
  },
  {
    title: "Count on me",
    description: "Counting tool you can count on",
    permalink: "count-on",
  },
  {
    title: "Czerman",
    description: "Similarities between Czech and German",
    permalink: "czerman",
  },
  {
    title: "Google search snippet preview",
    description: "Optimise your SERP titles & descriptions visually",
    permalink: "serp",
  },
  {
    title: "Hexapawn",
    description: "AI learning a minimalist chess game",
    permalink: "hexapawn",
  },
  {
    title: "In any case",
    description: "Title case, url-case, camelCase, all the cases",
    permalink: "any-case",
  },
  {
    title: "Invaders",
    description: "Pixel-based generative art",
    permalink: "invaders",
  },
  {
    title: "Maze",
    description: "Implementation of maze generation logic",
    permalink: "maze",
  },
  {
    title: "Passworld",
    description: "Your password must contain at least...",
    permalink: "passworld",
  },
  {
    title: "Snake",
    description: "Implementation of snake game logic",
    permalink: "snake",
  },
  {
    title: "Table tennis scoreboard",
    description: "Implementation of table tennis scoring system",
    permalink: "scoreboard",
  },
  {
    title: "Writest",
    description: "All the numbers about your words",
    permalink: "writest",
  },
];

const demos = [
  {
    title: "Calendar",
    description: "Minimalist calendar implementation",
    permalink: "calendar",
  },
  {
    title: "Carousel playground",
    description: "Minimalist carousel implementation",
    permalink: "carousel",
  },
  {
    title: "Collapsible",
    description: "Minimalist collapsible element",
    permalink: "collapsible",
  },
  {
    title: "Drag'n'drop",
    description: "Native implementation without dependencies",
    permalink: "drag-drop",
  },
  // {
  //   title: "Emoji",
  //   description: "Experiments distilling communication",
  //   permalink: "emoji",
  // },
  {
    title: "Grid playground",
    description: "Spicing up a boring grid layout",
    permalink: "grid",
  },
  {
    title: "Inputs playground",
    description: "Collection of different things inputs can do",
    permalink: "inputs",
  },
  {
    title: "Lightbox",
    description: "Minimalist lightbox layout",
    permalink: "lightbox",
  },
  {
    title: "Masonry playground",
    description: "Implementing masonry layout through grid",
    permalink: "masonry",
  },
  {
    title: "Scroll animations",
    description: "Scroll-triggered animations using IntersectionObserver",
    permalink: "scroll-animations",
  },
  {
    title: "Tabs playground",
    description: "Minimalist implementation of a tabs component",
    permalink: "tabs",
  },
];

export default function LabPage() {
  return (
    <RootContainer>
      <Main style={{ gridTemplateColumns: "1fr 1fr" }}>
        <Hero title="Random selection of silly experiments, proof-of-concepts, and little tools, pushing the limits of the canvas (both figuratively & literally)" />
        <section>
          <Heading tag="h2">Little tools</Heading>
          <WorksList works={tools} />
        </section>
        <section>
          <Heading tag="h2">Demos</Heading>
          <WorksList works={demos} />
        </section>
      </Main>
    </RootContainer>
  );
}

export const Head = () => {
  return (
    <SEOContainer
      title="Lab"
      description="Random selection of silly, silly experiments, proof-of-concepts, and little tools, pushing the limits of the canvas (both figuratively & literally)"
      permalink="/lab"
      ogImage="/assets/og.png"
    />
  );
};
