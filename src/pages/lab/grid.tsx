import React from "react";

import { RootContainer, SEOContainer } from "~containers";
import { Main, Hero, Image, RadioGroup, RadioOption } from "~components";

export default function GridPage() {
  const [state, setState] = React.useState({
    layout: "exciting",
    src: "https://source.unsplash.com/featured/400x600",
  });

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({ target }) =>
    setState((prevState) => ({ ...prevState, [target.name]: target.value }));

  return (
    <RootContainer>
      <Main style={{ gridTemplate: '"hero" "controls" "grid"' }}>
        <Hero
          title="Your grid layout does not have to be boring, why don't you try thinking...you know...a little bit outside the box"
          codeLink="https://github.com/mrozilla/mrozilla.cz/blob/master/src/pages/lab/grid.tsx"
        />
        <section
          style={{ gridArea: "controls", display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}
        >
          <RadioGroup name="layout" value={state.layout} label="Layout" onChange={handleChange}>
            <RadioOption value="exciting" label="Exciting" />
            <RadioOption value="boring" label="Boring" />
          </RadioGroup>
          <RadioGroup name="src" value={state.src} label="Images" onChange={handleChange}>
            <RadioOption value="https://source.unsplash.com/featured/400x600" label="Real photos" />
            <RadioOption value="broken.jpg" label="Placeholders" />
          </RadioGroup>
        </section>
        <section style={{ gridArea: "grid" }}>
          <ul
            style={{
              listStyle: "none",
              display: "grid",
              gap: "4rem 2rem",
              gridTemplateColumns: "1fr 1fr",
            }}
          >
            {["4rem 0 0 0", "0 8rem 0 0", "0 0 0 8rem", "6rem"].map((padding) => (
              <li
                key={padding}
                style={{
                  padding: state.layout === "exciting" ? padding : "",
                  transition: "padding 250ms",
                }}
              >
                <Image src={state.src} alt="a random photo" zoom={1.5} />
                <p>What a great photo</p>
                <p style={{ lineHeight: "2rem" }}>€4.99</p>
              </li>
            ))}
          </ul>
        </section>
      </Main>
    </RootContainer>
  );
}

export const Head = () => {
  return (
    <SEOContainer
      title="Grid playground"
      description="Your grid layout does not have to be boring, why don't you try thinking...you know...a little bit outside the box"
      permalink="/lab/grid"
      ogImage="/assets/og.png"
    />
  );
};
