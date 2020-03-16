// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';

import { RootContainer, HeroContainer } from '~containers';
import { Main } from '~components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function NotFoundPage() {
  return (
    <RootContainer>
      <Main
        css={`
          grid-template: 'hero' 'hints';
          grid-gap: 10vh 4rem;
        `}
      >
        <HeroContainer title="Whoops, this page doesn't exist. Check the links in the menus around, they might help. Or you can always head back to [the home page](/)" />
      </Main>
    </RootContainer>
  );
}
