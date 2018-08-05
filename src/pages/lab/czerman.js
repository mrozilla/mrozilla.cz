// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { PureComponent } from 'react';
import styled from 'styled-components';

import {
  Main, Section, Heading, Label, Text,
} from '../../components';
import { SEOContainer, HeroContainer } from '../../containers';

// ─────────────────────────────────────────────────────────────────────────────
// helpers
// ─────────────────────────────────────────────────────────────────────────────

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 0 0 0 -1rem;
  padding: 0 0 0 1rem;
  &:nth-of-type(even) {
    background-color: var(--color-grey-light);
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// query
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  query CzermanPage {
    labJson(meta: { permalink: { eq: "/lab/czerman" } }) {
      meta {
        title
        description
      }
      body {
        title
      }
      dictionary {
        id
        czech {
          grammar
          ipa
        }
        german {
          grammar
        }
      }
    }
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default class CzermanPage extends PureComponent {
  state = {
    openTermId: '',
  };

  handleOpenDetails = (openTermId) => {
    console.log(openTermId);

    this.setState({
      openTermId,
    });
  };

  render() {
    return (
      <Main gridTemplate="'hero' 'dictionary'" gridGap="10vh 4rem">
        <SEOContainer seo={this.props.data.labJson.meta} />
        <HeroContainer
          hero={{
            title: this.props.data.labJson.body.title,
          }}
        />
        <Section>
          {this.props.data.labJson.dictionary.map(term => (
            <Row key={term.id} onClick={() => this.handleOpenDetails(this.state.openTermId !== term.id ? term.id : '')}>
              <span style={{ fontWeight: 700 }}>{term.czech.grammar}</span>
              <span>{term.czech.ipa}</span>
              {this.state.openTermId === term.id ? (
                <span style={{ fontWeight: 700, cursor: 'pointer' }}>{term.german.grammar}</span>
              ) : (
                <span style={{ opacity: 0.25, cursor: 'pointer' }}>Reveal</span>
              )}
            </Row>
          ))}
        </Section>
      </Main>
    );
  }
}
