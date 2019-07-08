// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';

import { HeroContainer, AvailabilityContainer } from '~containers';

import { Section } from '~components/layout/Section';
import { H2 } from '~components/text/HX';
import { P } from '~components/text/P';

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
        <Section
          key={block.title}
          css={`
            grid-area: location;
          `}
        >
          <H2>{block.title}</H2>
          <P
            css={`
              font-size: 3rem;
            `}
          >
            {block.text}
          </P>
        </Section>
      );
    }

    if (block.type === 'availability') {
      return (
        <Section
          key={block.title}
          css={`
            grid-area: availability;
          `}
        >
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
