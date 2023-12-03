import React from "react";

import { RootContainer, SEOContainer } from "~containers";
import { Main, Hero, Carousel, Image, Heading } from "~components";

export default function CarouselPage() {
  return (
    <RootContainer>
      <Main>
        <Hero
          title="Scrollable & clickable & snapping & looping carousel layout implemented through CSS scroll-snap and React hooks"
          codeLink="https://github.com/mrozilla/mrozilla.cz/blob/master/src/pages/lab/carousel.tsx"
        />
        <section>
          <Carousel loopInterval={5000}>
            {Array.from({ length: 15 }, (_, i) => i).map((order) => (
              <div key={order}>
                <Image src="https://source.unsplash.com/featured/400x600" alt="a random photo" />
                <Heading tag="h2">Photo #{order + 1}</Heading>
              </div>
            ))}
          </Carousel>
        </section>
      </Main>
    </RootContainer>
  );
}

export const Head = () => {
  return (
    <SEOContainer
      title="Carousel"
      description="Scrollable & clickable & snapping & looping carousel layout implemented through CSS scroll-snap and React hooks"
      permalink="/lab/carousel"
      ogImage="/assets/og.png"
    />
  );
};
