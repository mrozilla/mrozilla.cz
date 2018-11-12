// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { PureComponent } from 'react';
import { graphql } from 'gatsby';

import { RootContainer, SEOContainer } from '~containers';
import { Main, Section, H1, Button } from '~components';

// ─────────────────────────────────────────────────────────────────────────────
// query
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  {
    page: labJson(meta: { permalink: { eq: "/lab/count-on-me" } }) {
      meta {
        title
        description
        permalink
        ogImage {
          ...OgImageFragment
        }
      }
    }
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default class CountOnMePage extends PureComponent {
  state = {
    count: 0,
  };

  handleCount = (event, value) => {
    event.stopPropagation();
    this.setState(prevState => ({
      count: prevState.count + value,
    }));

    if ('vibrate' in navigator) {
      if (value > 0) {
        navigator.vibrate(100);
      }
      navigator.vibrate([100, 100, 100]);
    }
  };

  handleReset = (event) => {
    event.stopPropagation();
    this.setState(
      {
        count: 0,
      },
      () => {
        if ('vibrate' in navigator) {
          navigator.vibrate(500);
        }
      },
    );
  };

  render() {
    return (
      <RootContainer>
        <SEOContainer meta={this.props.data.page.meta} />
        <Main>
          <Section
            onClick={e => this.handleCount(e, 1)}
            style={{
              textAlign:        'center',
              userSelect:       'none',
              msUserSelect:     'none',
              MozUserSelect:    'none',
              WebkitUserSelect: 'none',
            }}
          >
            <H1 fontSize="8rem" lineHeight="10rem" textAlign="center">
              {this.state.count.toLocaleString()}
            </H1>
            <Button onClick={e => this.handleCount(e, 1)} grouped>
              Add
            </Button>
            <Button onClick={e => this.handleCount(e, -1)} grouped>
              Subtract
            </Button>
            <Button onClick={e => this.handleReset(e)} grouped>
              Reset
            </Button>
          </Section>
        </Main>
      </RootContainer>
    );
  }
}
