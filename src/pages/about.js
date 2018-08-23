// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { graphql } from 'gatsby';

import {
  Main, Section, Text, List, Subheading,
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
        <SEOContainer seo={meta} />
        <HeroContainer title={hero.title} />
        <Section gridArea="about">
          <List gridGap="2rem">
            {about.map(item => (
              <List.Item key={item.title}>
                <Subheading>{item.title}</Subheading>
                <Text>{parseLinks(item.text)}</Text>
              </List.Item>
            ))}
          </List>
        </Section>
      </Main>
    </RootContainer>
  );
}
