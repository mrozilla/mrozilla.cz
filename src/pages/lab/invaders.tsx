import React from "react";
import { uniqueId } from "lodash";

import { RootContainer, SEOContainer } from "~containers";
import { Main, Hero, Heading, Button } from "~components";
import { useForceUpdate } from "~utils";

interface InvaderProps extends React.ComponentPropsWithoutRef<"div"> {
  pixels: boolean[];
}

const Invader: React.FC<InvaderProps> = ({ pixels, style, ...rest }) => {
  const mirroredPixels = [...pixels, ...pixels.slice(5, 10), ...pixels.slice(0, 5)];
  const renderPixel = (pixel: boolean) => (
    <div
      key={uniqueId()}
      style={{ paddingBottom: "100%", backgroundColor: pixel ? "var(--color-text)" : undefined }}
    />
  );

  return (
    <div
      {...rest}
      style={{
        display: "grid",
        gridTemplateRows: "repeat(5, 1fr)",
        gridAutoFlow: "column",
        ...style,
      }}
    >
      {mirroredPixels.map(renderPixel)}
    </div>
  );
};

export default function InvadersPage() {
  const [amount] = React.useState(200);
  const forceUpdate = useForceUpdate();

  const getInvader = () => Array.from({ length: 15 }, () => Math.random() > 0.5);

  return (
    <RootContainer>
      <Main>
        <Hero
          title="There's never too many space invaders. When randomly generated with 5x5 horizontally-mirrored pixels there are 32,768 variants"
          codeLink="https://github.com/mrozilla/mrozilla.cz/blob/master/src/pages/lab/invaders.tsx"
        />
        <section>
          <Heading tag="h2" look="h1" style={{ marginBottom: "1rem" }}>
            Your personal one
          </Heading>
          <Invader pixels={getInvader()} style={{ maxWidth: "8rem", margin: "0 0 2rem" }} />
          <Button look="primary" onClick={forceUpdate}>
            Generate new
          </Button>
        </section>
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(3.5rem, 1fr))",
            gap: "1rem",
          }}
        >
          <Heading tag="h2" look="h1" style={{ gridColumn: "1 / -1", marginBottom: "1rem" }}>
            {amount} more examples ({((amount / 32768) * 100).toFixed(1)}% of all possibilities):
          </Heading>
          {Array.from({ length: amount }, (_, i) => i + 1).map((item) => (
            <Invader key={item} pixels={getInvader()} />
          ))}
        </section>
      </Main>
    </RootContainer>
  );
}

export const Head = () => {
  return (
    <SEOContainer
      title="Invaders"
      description="There's never too many space invaders. When randomly generated with 5x5 horizontally-mirrored pixels there are 32,768 variants"
      permalink="/lab/invaders"
      ogImage="/assets/og.png"
    />
  );
};
