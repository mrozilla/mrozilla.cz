// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { graphql } from 'gatsby';

import {
  Main, Section, P, List, H2,
} from '../components';
import { RootContainer, HeroContainer, SEOContainer } from '../containers';

import { parseLinks } from '../utils';

// ─────────────────────────────────────────────────────────────────────────────
// query
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  {
    page: pagesJson(meta: { permalink: { eq: "/about" } }) {
      meta {
        title
        description
        ogImage {
          ...OgImageFragment
        }
      }
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
          <List gridGap="2rem">
            {about.map(item => (
              <List.Item key={item.title}>
                <H2>{item.title}</H2>
                <P>{parseLinks(item.text, { type: 'secondary' })}</P>
              </List.Item>
            ))}
          </List>
        </Section>
      </Main>
    </RootContainer>
  );
}
