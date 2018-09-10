// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { graphql } from 'gatsby';

import {
  Main, Section, P, Ul, Li, H2,
} from '../components';
import { RootContainer, HeroContainer, SEOContainer } from '../containers';

import { parseLinks } from '../utils';

// ─────────────────────────────────────────────────────────────────────────────
// query
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  {
    page: pagesJson(meta: { permalink: { eq: "/about" } }) {
      ...MetaFragment
      body {
        hero {
          title
        }
        about {
          title
          text
        }
      }
    }
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function AboutPage({
  data: {
    page: {
      meta,
      body: { hero, about },
    },
  },
}) {
  return (
    <RootContainer>
      <Main
        gridTemplate={{
          xs: "'hero' 'about'",
          md: "'hero hero' 'about .' / 2fr 1fr",
        }}
        gridGap="10vh 4rem"
      >
        <SEOContainer meta={meta} />
        <HeroContainer title={hero.title} />
        <Section gridArea="about">
          <Ul gridGap="2rem">
            {about.map(item => (
              <Li key={item.title}>
                <H2>{item.title}</H2>
                <P>{parseLinks(item.text, { type: 'secondary' })}</P>
              </Li>
            ))}
          </Ul>
        </Section>
      </Main>
    </RootContainer>
  );
}
