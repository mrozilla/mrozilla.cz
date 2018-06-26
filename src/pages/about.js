// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import {
  Main, Section, Text, List, Subheading,
} from '../components';
import { HeroContainer, SEOContainer } from '../containers';
import { parseLinks } from '../utils';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function AboutPage({
  data: {
    pagesJson: {
      meta,
      body: { hero, about },
    },
  },
}) {
  return (
    <Main
      gridTemplate={{
        xs: "'hero' 'about'",
        md: "'hero hero' 'about .' / 2fr 1fr",
      }}
      gridGap="10vh 4rem"
    >
      <SEOContainer seo={meta} />
      <HeroContainer {...{ hero }} />
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
  );
}

export const query = graphql`
  query AboutPage {
    pagesJson(meta: { permalink: { eq: "/about" } }) {
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
