import React from "react";

import { RootContainer, BlogPreviewsContainer, SEOContainer } from "~containers";
import { Main, Hero } from "~components";

export default function BlogPage() {
  return (
    <RootContainer>
      <Main>
        <Hero title="Random selection of letters, words, sentences, paragraphs, and blog posts" />
        <BlogPreviewsContainer />
      </Main>
    </RootContainer>
  );
}

export const Head = () => {
  return (
    <SEOContainer
      title="Blog"
      description="Random selection of letters, words, sentences, paragraphs, and blog posts"
      permalink="/blog"
      ogImage="/assets/og.png"
    />
  );
};
