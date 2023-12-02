import React from "react";

import { RootContainer, SEOContainer } from "~containers";
import { Main, Hero, Button, Collapsible, Heading, Text } from "~components";

const CollapsibleExample: React.FC<React.ComponentPropsWithoutRef<"div">> = ({ children }) => {
  const [isOpen, setOpen] = React.useState(true);

  return (
    <div
      style={{
        marginBottom: "1rem",
        background: "hsla(var(--hsl-text), 0.05)",
        padding: "1rem",
        borderRadius: "0.5rem",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
        <Heading>Heading</Heading>
        <Button size="s" onClick={() => setOpen((prev) => !prev)}>
          {isOpen ? "Hide" : "Show"}
        </Button>
      </div>
      <Collapsible isOpen={isOpen}>
        <Text look="secondary">{children}</Text>
      </Collapsible>
    </div>
  );
};

export default function CollapsiblePage() {
  return (
    <RootContainer>
      <Main>
        <Hero
          title="A minimalist implementation of a proper (not the ever-classic hack of 9999px) max-height animation utilising CSS variables"
          codeLink="https://github.com/mrozilla/mrozilla.cz/blob/master/src/components/interactive/Collapsible.tsx"
        />
        <section>
          <CollapsibleExample>
            {Array.from({ length: 5 }, () => "Lorem ipsum dolor sit amet. ")}
          </CollapsibleExample>
          <CollapsibleExample>
            {Array.from({ length: 10 }, () => "Lorem ipsum dolor sit amet. ")}
          </CollapsibleExample>
          <CollapsibleExample>
            {Array.from({ length: 15 }, () => "Lorem ipsum dolor sit amet. ")}
          </CollapsibleExample>
        </section>
      </Main>
    </RootContainer>
  );
}

export const Head = () => {
  return (
    <SEOContainer
      title="Collapsible"
      description="A minimalist implementation of a proper (not the ever-classic hack of 9999px) max-height animation utilising CSS variables"
      permalink="/lab/collapsible"
      ogImage="/assets/og.png"
    />
  );
};
