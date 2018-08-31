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
      ...MetaFragment
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
      meta,
      body: { hero, form },
    },
  },
  location,
}) {
  return (
    <RootContainer>
      <Main gridTemplate="'hero' 'form'" gridGap="10vh 4rem">
        <SEOContainer meta={meta} />
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
