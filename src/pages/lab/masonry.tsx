import React from "react";

import { RootContainer, SEOContainer } from "~containers";
import { Main, Hero, TextInput, Masonry, Image, Text } from "~components";

export default function MasonryPage() {
  const [columnsNumber, setColumnsNumber] = React.useState(3);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) => {
    setColumnsNumber(Number.parseInt(value, 10));
  };

  return (
    <RootContainer>
      <Main>
        <Hero
          title="Masonry layout implemented through manipulating children into grid column components (visually correct but a11y & semantically incorrect)"
          codeLink="https://github.com/mrozilla/mrozilla.cz/blob/master/src/pages/lab/masonry.tsx"
        />
        <TextInput
          type="number"
          name="columns"
          label="Amount of columns"
          value={columnsNumber}
          onChange={handleChange}
        />
        <Masonry columnsNumber={columnsNumber}>
          {Array.from({ length: columnsNumber * 4 }, (_, i) => i).map((order) => (
            <React.Fragment key={order}>
              <Image
                ratio={Math.random() + 0.5}
                src="https://source.unsplash.com/featured/400x600"
                alt="a random photo"
              />
              <Text style={{ lineHeight: "3rem" }}>Item №{order + 1}</Text>
            </React.Fragment>
          ))}
        </Masonry>
      </Main>
    </RootContainer>
  );
}

export const Head = () => {
  return (
    <SEOContainer
      title="Masonry playground"
      description="Masonry layout implemented through manipulating children into grid column components (visually correct but a11y & semantically incorrect)"
      permalink="/lab/masonry"
      ogImage="/assets/og.png"
    />
  );
};
