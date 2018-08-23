// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { graphql } from 'gatsby';

import {
  Main, Section, P, Link, Button,
} from '../components';
import {
  RootContainer, HeroContainer, SEOContainer, ContactContainer,
} from '../containers';

// ─────────────────────────────────────────────────────────────────────────────
// query
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  {
    page: pagesJson(meta: { permalink: { eq: "/contact" } }) {
      seo: meta {
        title
        description
      }
      body {
        hero {
          title
        }
        form {
          success
          back
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
      body: { hero, form },
    },
  },
  location,
}) {
  return (
    <RootContainer>
      <Main
        gridTemplate={{
          xs: "'hero' 'form'",
          lg: "'hero hero' 'form .' / 2fr 1fr",
        }}
        gridGap="10vh 4rem"
      >
        <SEOContainer seo={seo} />
        <HeroContainer title={hero.title} />
        {location.hash === '#success' ? (
          <Section gridArea="form">
            <P margin="0 0 2rem 0">{form.success}</P>
            <Link to="/">
              <Button>{form.back}</Button>
            </Link>
          </Section>
        ) : (
          <ContactContainer />
        )}
      </Main>
    </RootContainer>
  );
}
