// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import Helmet from 'react-helmet';
import {
  Main,
  Section,
  Text,
  HeroBlock,
  List,
  Subheading,
} from '../components';
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
      <Helmet
        title={`mrozilla: ${meta.title}`}
        meta={[
          { name: 'description', content: meta.description },
          { name: 'keywords', content: meta.keywords },
        ]}
      />
      <HeroBlock {...{ hero }} />
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
        keywords
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
