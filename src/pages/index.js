// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import Helmet from 'react-helmet';
import { Main, Section, Heading } from '../components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function HomePage({
  data: { pagesJson: { meta, body: { hero } } },
}) {
  const availability = new Date();
  availability.setMonth(availability.getMonth() + 1);
  return (
    <Main>
      <Helmet
        title={`mrozilla: ${meta.title}`}
        meta={[
          { name: 'description', content: meta.description },
          { name: 'keywords', content: meta.keywords },
        ]}
      />
      <Section>
        <Heading
          fontSize="5rem"
          fontWeight="400"
          lineHeight="6rem"
          margin="-1rem 0 10vh 0"
        >
          {hero.title}
        </Heading>
      </Section>
    </Main>
  );
}

export const query = graphql`
  query HomePage {
    pagesJson(meta: { permalink: { eq: "/" } }) {
      meta {
        title
        description
        keywords
      }
      body {
        hero {
          title
        }
      }
    }
  }
`;
