import React from "react";

import {
  RootContainer,
  SEOContainer,
  LocationContainer,
  AvailabilityContainer,
  WorksContainer,
  BlogPreviewsContainer,
} from "~containers";
import { Main, Hero } from "~components";

export default function HomePage() {
  return (
    <RootContainer>
      <Main style={{ gridTemplateColumns: "1fr 1fr" }}>
        <Hero title="Mrozilla is a one-man digital studio designing & building modern websites using React, CSS, and TypeScript" />
        <LocationContainer />
        <AvailabilityContainer />
        <WorksContainer />
        <BlogPreviewsContainer />
      </Main>
    </RootContainer>
  );
}

export const Head = () => {
  return (
    <SEOContainer
      title="One-man digital studio"
      description="Mrozilla is a one-man digital studio designing & building modern websites using React, CSS, and TypeScript"
      permalink="/"
      ogImage="/assets/og.png"
    />
  );
};
