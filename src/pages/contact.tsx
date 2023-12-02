import React from "react";

import { RootContainer, SEOContainer } from "~containers";
import { Main, Hero, Link, Text } from "~components";

export default function ContactPage() {
  return (
    <RootContainer>
      <Main>
        <Hero title="You've got an idea in mind and I'd love to hear everything about it" />
        <Text>
          Let's keep it simple, no contact forms or Captchas or anything like that. The easiest way
          to reach me to send me an <Link to="mailto:jan@mrozilla.cz">email</Link>.
        </Text>
      </Main>
    </RootContainer>
  );
}

export const Head = () => {
  return (
    <SEOContainer
      title="Contact"
      description="You've got an idea in mind and I'd love to hear everything about it"
      permalink="/"
      ogImage="/assets/og.png"
    />
  );
};
