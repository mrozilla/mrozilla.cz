// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { PureComponent } from 'react';
import { graphql } from 'gatsby';

import {
  Main, Section, Table, Link, Button,
} from '../../components';
import { LayoutContainer, SEOContainer, HeroContainer } from '../../containers';

// ─────────────────────────────────────────────────────────────────────────────
// query
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  {
    page: labJson(meta: { permalink: { eq: "/lab/czerman" } }) {
      meta {
        title
        description
      }
      dictionary {
        id
        czech {
          grammar
          ipa
        }
        german {
          grammar
          ipa
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
    isOpenAll:  false,
  };

  handleOpenTerm = (openTermId) => {
    this.setState({ isOpenAll: false, openTermId });
  };

  handleOpenAll = () => {
    this.setState(prevState => ({ isOpenAll: !prevState.isOpenAll }));
  };

  render() {
    return (
      <LayoutContainer>
        <Main gridTemplate="'hero' 'dictionary'" gridGap="10vh 4rem">
          <SEOContainer seo={this.props.data.page.meta} />
          <HeroContainer title={this.props.data.page.meta.description} />
          <Section>
            <Table margin="0 0 2rem 0" tableLayout="fixed">
              <Table.Head>
                <Table.R>
                  <Table.H>Czech</Table.H>
                  <Table.H>
                    Czech{' '}
                    <Link type="primary" to="https://en.wikipedia.org/wiki/Help:IPA/Czech">
                      IPA
                    </Link>
                  </Table.H>
                  <Table.H>German equivalent</Table.H>
                  <Table.H>
                    German{' '}
                    <Link type="primary" to="https://en.wikipedia.org/wiki/Help:IPA/German">
                      IPA
                    </Link>
                  </Table.H>
                </Table.R>
              </Table.Head>
              <Table.Body>
                {this.props.data.page.dictionary.map(term => (
                  <Table.R
                    key={term.id}
                    cursor="pointer"
                    onClick={() => this.handleOpenTerm(this.state.openTermId !== term.id ? term.id : '')}
                  >
                    <Table.D>{term.czech.grammar}</Table.D>
                    <Table.D>{term.czech.ipa}</Table.D>
                    {this.state.openTermId === term.id || this.state.isOpenAll ? (
                      <Table.D>{term.german.grammar}</Table.D>
                    ) : (
                      <Table.D colSpan="2" textAlign="center" opacity={0.5}>
                        Reveal
                      </Table.D>
                    )}
                    {this.state.openTermId === term.id || this.state.isOpenAll ? (
                      <Table.D>{term.german.ipa}</Table.D>
                    ) : null}
                  </Table.R>
                ))}
              </Table.Body>
            </Table>
            <Button onClick={this.handleOpenAll}>{this.state.isOpenAll ? 'Hide' : 'Reveal'} all</Button>
          </Section>
        </Main>
      </LayoutContainer>
    );
  }
}
