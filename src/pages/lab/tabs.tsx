import React from "react";

import { RootContainer, SEOContainer } from "~containers";
import { Main, Hero, Tabs, Text, Heading } from "~components";

export default function TabsPage() {
  return (
    <RootContainer>
      <Main>
        <Hero
          title="Flexible & accessible tabs layout implementation, avoiding unnecessary wrapper elements"
          codeLink="https://github.com/mrozilla/mrozilla.cz/blob/master/src/pages/lab/scroll-animations.tsx"
        />
        <Tabs
          content={[
            { title: "Text", body: "Just a text body" },
            {
              title: <Text>Components</Text>,
              body: (
                <section>
                  <Heading tag="h1">This is a title</Heading>
                  <Text>More text follows</Text>
                </section>
              ),
            },
            {
              title: "Nested tabs",
              body: (
                <Tabs
                  content={[
                    { title: "Nested", body: "Nested body" },
                    { title: "Another one", body: "Another body" },
                  ]}
                />
              ),
            },
          ]}
        />
      </Main>
    </RootContainer>
  );
}

export const Head = () => {
  return (
    <SEOContainer
      title="Tabs"
      description="Flexible & accessible tabs layout implementation, avoiding unnecessary wrapper elements"
      permalink="/lab/tabs"
      ogImage="/assets/og.png"
    />
  );
};
