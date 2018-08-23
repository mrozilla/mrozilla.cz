// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { PureComponent } from 'react';
import { graphql } from 'gatsby';

import {
  Main, Section, H1, Button,
} from '../../components';
import { RootContainer, SEOContainer } from '../../containers';

// ─────────────────────────────────────────────────────────────────────────────
// query
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  {
    page: labJson(meta: { permalink: { eq: "/lab/count-on-me" } }) {
      meta {
        title
        description
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
        <Main>
          <SEOContainer seo={this.props.data.page.meta} />
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
            <H1 fontSize="8rem" textAlign="center">
              {this.state.count.toLocaleString()}
            </H1>
            <Button onClick={e => this.handleCount(e, 1)}>Add</Button>
            <Button onClick={e => this.handleCount(e, -1)}>Subtract</Button>
            <Button onClick={e => this.handleReset(e)}>Reset</Button>
          </Section>
        </Main>
      </RootContainer>
    );
  }
}
