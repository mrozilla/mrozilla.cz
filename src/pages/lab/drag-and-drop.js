// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { PureComponent } from 'react';
import { graphql } from 'gatsby';

import { RootContainer, SEOContainer, HeroContainer } from '~containers';
import { Main, Section, Ul, Li } from '~components';

// ─────────────────────────────────────────────────────────────────────────────
// query
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  {
    page: labJson(meta: { permalink: { eq: "/lab/drag-and-drop/" } }) {
      meta {
        title
        description
        permalink
        ogImage {
          ...OgImageFragment
        }
      }
      body {
        hero {
          title
        }
      }
    }
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default class DragAndDropPage extends PureComponent {
  state = {
    items: [
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
    ],
  };

  onDragStart = (e, i) => {
    const element = e.target;

    window.requestAnimationFrame(() => {
      element.style.opacity = '0';
    });

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', element);
    this.draggedIdx = i;
  };

  handleDragEnter = (idx) => {
    this.setState(
      state => ({
        items: state.items.map((item, i) => {
          if (i === this.draggedIdx) {
            return state.items[idx];
          }
          if (i === idx) {
            return state.items[this.draggedIdx];
          }
          return item;
        }),
      }),
      () => {
        this.draggedIdx = idx;
      },
    );
  };

  handleDragEnd = (e) => {
    e.target.style.opacity = '1';
    this.draggedIdx = null;
  };

  render() {
    return (
      <RootContainer>
        <SEOContainer meta={this.props.data.page.meta} />
        <Main
          gridTemplate={{
            xs: "'hero' 'dnd'",
            lg: "'hero hero' 'dnd .' / 1fr 1fr",
          }}
          gridGap="10vh 1rem"
        >
          <HeroContainer title={this.props.data.page.body.hero.title} />

          <Section gridArea="dnd">
            <Ul
              gridGap="1rem"
              padding="1rem"
              backgroundColor="hsla(var(--hsl-text), 0.1)"
              borderRadius="1rem"
            >
              {this.state.items.map((item, i) => (
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
                  onDragStart={e => this.onDragStart(e, i)}
                  onDragEnter={() => this.handleDragEnter(i)}
                  onDragEnd={this.handleDragEnd}
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
}
