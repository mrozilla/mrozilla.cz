import React from "react";

import { RootContainer, SEOContainer, CollaboratorsContainer } from "~containers";
import { Main, Hero } from "~components";

export default function CollabsPage() {
  return (
    <RootContainer>
      <Main>
        <Hero title="A list of people I collaborate with on cross-disciplinary projects, highly recommended!" />
        <CollaboratorsContainer />
      </Main>
    </RootContainer>
  );
}

export const Head = () => {
  return (
    <SEOContainer
      title="Collaborators"
      description="A list of people I collaborate with on cross-disciplinary projects, highly recommended!"
      permalink="/collabs"
      ogImage="/assets/og.png"
    />
  );
};
