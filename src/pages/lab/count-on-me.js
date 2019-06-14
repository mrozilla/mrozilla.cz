// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { useState } from 'react';
import { graphql } from 'gatsby';

import { RootContainer, SEOContainer } from '~containers';
import { Main, Section, H1, Button } from '~components';

// ─────────────────────────────────────────────────────────────────────────────
// query
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  {
    page: mdx(frontmatter: { meta: { permalink: { eq: "/lab/count-on-me/" } } }) {
      frontmatter {
        ...MetaFragment
      }
    }
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function CountOnMePage({
  data: {
    page: {
      frontmatter: { meta },
    },
  },
}) {
  const [count, setCount] = useState(0);

  const handleCount = (event, value) => {
    event.stopPropagation();

    setCount(prevCount => prevCount + value);

    if ('vibrate' in navigator) {
      if (value > 0) {
        navigator.vibrate(100);
      }
      navigator.vibrate([100, 100]);
    }
  };

  const handleReset = (event) => {
    event.stopPropagation();

    setCount(0);

    if ('vibrate' in navigator) {
      navigator.vibrate(500);
    }
  };

  return (
    <RootContainer>
      <SEOContainer meta={meta} />
      <Main>
        <Section
          onClick={e => handleCount(e, 1)}
          style={{
            userSelect:       'none',
            msUserSelect:     'none',
            MozUserSelect:    'none',
            WebkitUserSelect: 'none',
          }}
        >
          <H1 fontSize="8rem" lineHeight="10rem">
            {count.toLocaleString()}
          </H1>
          <Button look="secondary" onClick={e => handleCount(e, 1)} grouped>
            Add
          </Button>
          <Button look="secondary" onClick={e => handleCount(e, -1)} grouped>
            Subtract
          </Button>
          <Button look="secondary" onClick={e => handleReset(e)} grouped>
            Reset
          </Button>
        </Section>
      </Main>
    </RootContainer>
  );
}
