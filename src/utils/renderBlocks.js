// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';

import { HeroContainer, AvailabilityContainer } from '~containers';

import { Section, H2, P } from '~components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function renderBlocks(blocks, components = { wrapper: Section }) {
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
        <MDXRenderer key={block.mdx} components={components}>
          {block.mdx}
        </MDXRenderer>
      );
    }
    return null;
  });
}
