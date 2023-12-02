import React from "react";

import { RootContainer, SEOContainer } from "~containers";
import { Main, Hero, Button, Lightbox } from "~components";

export default function LightboxPage() {
  const [isOpen, setOpen] = React.useState(false);

  const handleLightbox = () => setOpen((previous) => !previous);

  return (
    <RootContainer>
      <Main>
        <Hero
          title="A simple implementation of a lightbox layout"
          codeLink="https://github.com/mrozilla/mrozilla.cz/blob/master/src/pages/lab/lightbox.tsx"
        />
        <section>
          <Button look="primary" onClick={handleLightbox}>
            Open lightbox
          </Button>
        </section>
        <Lightbox
          isOpen={isOpen}
          images={[
            "https://images.unsplash.com/photo-1426901403100-9c1c6b77a54a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1426901013385-803d40bd5558?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1461711513774-c78b437a740b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1427847856029-612f5e500306?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1425321442387-141779fb1e57?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
          ]}
          onClose={handleLightbox}
        />
      </Main>
    </RootContainer>
  );
}

export const Head = () => {
  return (
    <SEOContainer
      title="Lightbox"
      description="A simple implementation of a lightbox layout"
      permalink="/lab/lightbox"
      ogImage="/assets/og.png"
    />
  );
};
