// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { PureComponent } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import uniqueId from 'lodash/uniqueId';

import { RootContainer, SEOContainer, HeroContainer } from '~containers';
import { Main, Section, Button, H1 } from '~components';
import { View } from '~components/primitives/View';

// ─────────────────────────────────────────────────────────────────────────────
// query
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  {
    page: labJson(meta: { permalink: { eq: "/lab/invaders/" } }) {
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
// helpers
// ─────────────────────────────────────────────────────────────────────────────

function Invader({ pixels, ...rest }) {
  const mirroredPixels = [...pixels, ...pixels.slice(5, 10), ...pixels.slice(0, 5)];
  const renderPixels = pixel => <Invader.Pixel key={uniqueId()} pixel={pixel} />;

  return <Invader.Body {...rest}>{mirroredPixels.map(renderPixels)}</Invader.Body>;
}

Invader.Body = styled(View)`
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-auto-flow: column;
`;

Invader.Pixel = styled.div`
  padding-bottom: 100%;
  background-color: ${({ pixel }) => (pixel ? 'var(--color-text)' : 'var(--color-bg)')};
`;

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default class InvadersPage extends PureComponent {
  state = {
    amount: 200,
  };

  getInvader = () => Array.from({ length: 15 }, () => Math.random() > 0.5);

  render() {
    return (
      <RootContainer>
        <SEOContainer meta={this.props.data.page.meta} />
        <Main
          gridTemplate={{
            xs: "'hero' 'specimen' 'invaders'",
          }}
          gridGap="10vh 4rem"
        >
          <HeroContainer title={this.props.data.page.body.hero.title} />
          <Section gridArea="specimen">
            <H1 gridColumn="1 / -1" margin="0 0 1rem">
              Your personal one:
            </H1>
            <Invader pixels={this.getInvader()} maxWidth="8rem" margin="0 0 2rem" />
            <Button gridColumn="1 / -1" onClick={() => this.forceUpdate()}>
              Generate new
            </Button>
          </Section>
          <Section
            gridArea="invaders"
            display="grid"
            gridTemplateColumns={{
              xs: 'repeat(8, 1fr)',
              lg: 'repeat(24, 1fr)',
            }}
            gridGap="1rem"
          >
            <H1 gridColumn="1 / -1" margin="0 0 1rem">
              {this.state.amount} more examples ({((this.state.amount / 32768) * 100).toFixed(1)}%
              of all possibilities):
            </H1>
            {Array.from(
              {
                length: this.state.amount,
              },
              (_, i) => i + 1,
            ).map(item => (
              <Invader key={item} pixels={this.getInvader()} />
            ))}
          </Section>
        </Main>
      </RootContainer>
    );
  }
}
