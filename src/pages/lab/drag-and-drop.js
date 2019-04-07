// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { useState, useRef } from 'react';
import { graphql } from 'gatsby';

import { RootContainer, SEOContainer, HeroContainer } from '~containers';
import { Main, Section, Ul, Li } from '~components';

// ─────────────────────────────────────────────────────────────────────────────
// query
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  {
    page: mdx(frontmatter: { meta: { permalink: { eq: "/lab/drag-and-drop/" } } }) {
      frontmatter {
        ...MetaFragment
        blocks {
          title
        }
      }
    }
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function DragAndDropPage({
  data: {
    page: {
      frontmatter: { meta, blocks },
    },
  },
}) {
  const [items, setItems] = useState([
    '🍎 Apple',
    '🍞 Bread',
    '🍰 Cake',
    '🍩 Donut',
    '🥚 Egg',
    '🍟 Fries',
    '🍇 Grapes',
    '🍯 Honey',
    '🍦 Icecream',
    '🌶 Jalapeño',
    '🥝 Kiwi',
    '🍋 Lemon',
  ]);
  const draggedIdx = useRef(null);

  const handleDragStart = (event, idx) => {
    const element = event.target;

    window.requestAnimationFrame(() => {
      element.style.opacity = '0';
    });

    event.dataTransfer.effectAllowed = 'move'; // eslint-disable-line no-param-reassign
    event.dataTransfer.setData('text/html', element);
    draggedIdx.current = idx;
  };

  const handleDragEnter = (idx) => {
    setItems(
      items.map((item, i) => {
        if (i === draggedIdx.current) {
          return items[idx];
        }
        if (i === idx) {
          return items[draggedIdx.current];
        }
        return item;
      }),
    );
    draggedIdx.current = idx;
  };

  const handleDragEnd = (event) => {
    event.target.style.opacity = '1'; // eslint-disable-line no-param-reassign
    draggedIdx.current = null;
  };

  return (
    <RootContainer>
      <SEOContainer meta={meta} />
      <Main
        gridTemplate={{
          xs: "'hero' 'dnd'",
          lg: "'hero hero' 'dnd .' / 1fr 1fr",
        }}
        gridGap="10vh 1rem"
      >
        <HeroContainer title={blocks[0].title} />

        <Section gridArea="dnd">
          <Ul
            gridGap="1rem"
            padding="1rem"
            backgroundColor="hsla(var(--hsl-text), 0.1)"
            borderRadius="1rem"
          >
            {items.map((item, i) => (
              <Li
                key={item}
                backgroundColor="var(--color-bg)"
                padding="1rem"
                borderRadius="0.5rem"
                cursor="pointer"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                after={{
                  content: "'☰'",
                  opacity: 0.25,
                }}
                draggable
                onDragStart={e => handleDragStart(e, i)}
                onDragEnter={() => handleDragEnter(i)}
                onDragEnd={handleDragEnd}
              >
                {item}
              </Li>
            ))}
          </Ul>
        </Section>
      </Main>
    </RootContainer>
  );
}
