// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { graphql } from 'gatsby';

import { RootContainer, SEOContainer, HeroContainer } from '~containers';
import { Main, Section, Input, Image, H1, P, Ul, Li } from '~components';

// ─────────────────────────────────────────────────────────────────────────────
// helpers
// ─────────────────────────────────────────────────────────────────────────────

const Item = styled.div`
  transition: 250ms;

  :hover {
    transform: scale(1.05);
  }

  @media screen and (min-width: 600px) {
    margin: ${({ margin, layout }) => layout === 'exciting' && margin};
  }
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
        controls {
          type
          name
          label
          options {
            value
            label
          }
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
    layout: 'exciting',
    src:    'https://source.unsplash.com/random/400x600',
  };

  handleInputChange = ({ target: { name, value } }) => this.setState({ [name]: value });

  render() {
    const {
      data: {
        page: {
          meta,
          body: { hero, controls },
        },
      },
    } = this.props;

    const renderControls = () => (
      <Section
        gridArea="controls"
        display="grid"
        gridTemplate="'layout src . .'"
        position="sticky"
        top="0px"
        backgroundColor="var(--color-bg)"
        padding="2rem"
        margin="-2rem"
      >
        {controls.map(input => (
          <Input
            key={input.name}
            {...input}
            options={input.options.map(option => ({
              ...option,
              checked: this.state[input.name] === option.value,
            }))}
            onChange={this.handleInputChange}
          />
        ))}
      </Section>
    );

    const renderGrid = () => (
      <Section gridArea="outlier">
        <Ul
          display="grid"
          gridTemplateColumns={{
            xs: '1fr',
            md: '1fr 1fr',
          }}
          gridGap="10vh 2rem"
        >
          {[
            '6rem 8rem -6rem 0',
            '-4rem 0 4rem 0',
            '-4rem -8rem 4rem 16rem',
            '8rem 6rem 8rem 12rem',
          ].map(margin => (
            <Li
              key={margin}
              margin={{
                md: this.state.layout === 'exciting' ? margin : undefined,
              }}
              transition="margin 250ms"
            >
              <Image src={this.state.src} />
              <H1 as="h2" fontSize="2.25rem" lineHeight="4rem">
                What a great photo
              </H1>
              <P lineHeight="2rem">€4.99</P>
            </Li>
          ))}
        </Ul>
      </Section>
    );

    return (
      <RootContainer>
        <SEOContainer meta={meta} />
        <Main gridTemplate="'hero' 'controls' 'outlier'" gridGap="10vh 1rem">
          <HeroContainer title={hero.title} />
          {renderGrid()}
          {renderControls()}
        </Main>
      </RootContainer>
    );
  }
}
