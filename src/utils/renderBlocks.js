// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import MDX from '@mdx-js/runtime';

import { HeroContainer, AvailabilityContainer } from '~containers';

import { Section, H2, P, Link } from '~components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function renderBlocks(blocks) {
  return blocks.map((block) => {
    if (block.type === 'hero') {
      return <HeroContainer key={block.title} title={block.title} />;
    }

    if (block.type === 'location') {
      return (
        <Section key={block.title} gridArea="location">
          <H2>{block.title}</H2>
          <P fontSize="3rem">{block.text}</P>
        </Section>
      );
    }

    if (block.type === 'availability') {
      return (
        <Section key={block.title} gridArea="availability">
          <H2>{block.title}</H2>
          <AvailabilityContainer availabilityDate={new Date(block.date)} />
        </Section>
      );
    }

    if (block.type === 'markdown') {
      return (
        <MDX
          components={{
            wrapper: Section,
            h2:      H2,
            a:       Link,
            p:       props => <P margin="0 0 2rem" {...props} />,
          }}
        >
          {block.markdown}
        </MDX>
      );
    }
    return null;
  });
}
