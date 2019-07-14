// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { graphql } from 'gatsby';

import { RootContainer, SEOContainer } from '~containers';
import { Main, Section, Ul, Li } from '~components';
import { renderBlocks, useOnScreen } from '~utils';

// ─────────────────────────────────────────────────────────────────────────────
// query
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  {
    page: mdx(frontmatter: { meta: { permalink: { eq: "/lab/scroll-animations/" } } }) {
      frontmatter {
        ...MetaFragment
        blocks {
          title
          type
        }
      }
    }
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// helpers
// ─────────────────────────────────────────────────────────────────────────────

function Block({ item }) {
  const [ref, isIntersecting] = useOnScreen({ threshold: 0.5 });

  return (
    <Li
      key={item}
      ref={ref}
      css={`
        background-color: hsla(var(--hsl-text), 0.1);
        border-radius: 0.5rem;
        text-align: center;
        padding: 8rem 4rem;

        opacity: ${isIntersecting ? '1' : '0'};
        transform: scale(${isIntersecting ? '1' : '0.9'});
        transition: opacity 500ms, transform 500ms;
        transition-delay: calc(100ms * ${item});
      `}
    >
      {item}
    </Li>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function ScrollAnimationsPage({
  data: {
    page: {
      frontmatter: { meta, blocks },
    },
  },
}) {
  return (
    <RootContainer>
      <SEOContainer meta={meta} />
      <Main
        css={`
          grid-template: 'hero' 'list';
          grid-gap: 10vh 1rem;
        `}
      >
        {renderBlocks(blocks)}
        <Section
          css={`
            grid-area: list;
          `}
        >
          <Ul css={`
            grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
            grid-gap: 2rem;
          `}
          >
            {Array.from({ length: 20 }, (_, i) => i).map((item, i) => (
              <Block key={item} item={item} />
            ))}
          </Ul>
        </Section>
      </Main>
    </RootContainer>
  );
}
