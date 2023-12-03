import React from "react";

import { RootContainer } from "~containers";
import { Main, Hero, Link } from "~components";

export default function NotFoundPage() {
  return (
    <RootContainer>
      <Main style={{ gridTemplate: '"hero" "hints"' }}>
        <Hero
          title={
            <>
              Whoops, this page doesn't exist. Check the links in the menus around, they might help.
              Or you can always head back to <Link to="/">the home page</Link>
            </>
          }
        />
      </Main>
    </RootContainer>
  );
}

export const Head = () => {
  return <title>Not found</title>;
};
