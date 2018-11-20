// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { graphql } from 'gatsby';

import { RootContainer, SEOContainer, HeroContainer } from '~containers';
import { Main, Section, Button } from '~components';

// ─────────────────────────────────────────────────────────────────────────────
// helpers
// ─────────────────────────────────────────────────────────────────────────────

const Item = styled.div`
  transition: 250ms;

  :hover {
    transform: scale(1.05);
  }

  @media screen and (min-width: 600px) {
    margin: ${({ margin, isFunky }) => isFunky && margin};
  }
`;

Item.Image = styled.img`
  display: block;
`;

Item.Title = styled.h2`
  line-height: 3rem;
`;

Item.Subtitle = styled.p`
  line-height: 2rem;
  opacity: 0.5;
`;

// ─────────────────────────────────────────────────────────────────────────────
// query
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  {
    page: labJson(meta: { permalink: { eq: "/lab/grid" } }) {
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

export default class GridPage extends PureComponent {
  state = {
    isFunky: true,
  };

  render() {
    const {
      data: {
        page: {
          meta,
          body: { hero },
        },
      },
    } = this.props;

    return (
      <RootContainer>
        <SEOContainer meta={meta} />
        <Main gridTemplate="'hero' 'controls' 'outlier'" gridGap="10vh 1rem">
          <HeroContainer title={hero.title} />
          <Section>
            <Button onClick={() => this.setState(state => ({ isFunky: !state.isFunky }))}>
              Toggle
            </Button>
          </Section>
          <Section
            gridArea="outlier"
            display="grid"
            gridTemplateColumns={{
              xs: '1fr',
              md: '1fr 1fr',
            }}
            gridGap="10vh 2rem"
          >
            <Item {...this.state} margin="6rem 8rem -6rem 0">
              <Item.Image src="https://source.unsplash.com/random/400x600" />
              <Item.Title>What a great photo</Item.Title>
              <Item.Subtitle>€4.99</Item.Subtitle>
            </Item>
            <Item {...this.state} margin="-4rem 0 4rem 0">
              <Item.Image src="https://source.unsplash.com/random/400x600" />
              <Item.Title>What a great photo</Item.Title>
              <Item.Subtitle>€4.99</Item.Subtitle>
            </Item>
            <Item {...this.state} margin="-4rem -8rem 4rem 16rem">
              <Item.Image src="https://source.unsplash.com/random/400x600" />
              <Item.Title>What a great photo</Item.Title>
              <Item.Subtitle>€4.99</Item.Subtitle>
            </Item>
            <Item {...this.state} margin="-8rem 6rem 8rem 12rem">
              <Item.Image src="https://source.unsplash.com/random/400x600" />
              <Item.Title>What a great photo</Item.Title>
              <Item.Subtitle>€4.99</Item.Subtitle>
            </Item>
          </Section>
        </Main>
      </RootContainer>
    );
  }
}
