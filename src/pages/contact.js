// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import {
  Main, Section, Text, Link,
} from '../components';
import { HeroContainer, SEOContainer, ContactContainer } from '../containers';

// ─────────────────────────────────────────────────────────────────────────────
// data
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  query ContactPage {
    page: pagesJson(meta: { permalink: { eq: "/contact" } }) {
      seo: meta {
        title
        description
      }
      body {
        hero {
          title
        }
      }
    }
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function ContactPage({
  data: {
    page: {
      seo,
      body: { hero },
    },
  },
  location,
}) {
  return (
    <Main
      gridTemplate={{
        xs: "'hero' 'form'",
        lg: "'hero hero' 'form .' / 2fr 1fr",
      }}
      gridGap="10vh 4rem"
    >
      <SEOContainer seo={seo} />
      <HeroContainer hero={hero} />
      {!location.hash.includes('#success') ? (
        <ContactContainer />
      ) : (
        <Section gridArea="form">
          <Text>Success</Text>
          <Link to="/contact">Back</Link>
        </Section>
      )}
    </Main>
  );
}
