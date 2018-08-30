// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { PureComponent } from 'react';
import { graphql } from 'gatsby';
import { shape } from 'prop-types';

import {
  Main, Section, Table, Link, Button, Modal, H2, P,
} from '../../components';
import { RootContainer, SEOContainer, HeroContainer } from '../../containers';

import { sample, metaTypes } from '../../utils';

// ─────────────────────────────────────────────────────────────────────────────
// query
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  {
    page: labJson(meta: { permalink: { eq: "/lab/czerman" } }) {
      meta {
        title
        description
        ogImage {
          ...OgImageFragment
        }
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
  static propTypes = {
    data: shape({
      page: shape({
        ...metaTypes,
      }).isRequired,
    }).isRequired,
  };

  state = {
    openTermId:    '',
    isOpenAll:     false,
    isModalOpen:   false,
    isCardFlipped: false,
  };

  handleOpenTerm = (openTermId) => {
    this.setState({ isOpenAll: false, openTermId });
  };

  handleOpenAll = () => {
    this.setState(prevState => ({ isOpenAll: !prevState.isOpenAll }));
  };

  handleNextTerm = () => {
    this.setState({
      isModalOpen:   true,
      isCardFlipped: false,
      openTermId:    sample(this.props.data.page.dictionary).id,
    });
  };

  handleModal = () => {
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen,
    }));
  };

  handleFlipCard = () => {
    this.setState(prevState => ({
      isCardFlipped: !prevState.isCardFlipped,
    }));
  };

  renderModal = () => {
    const modalTerm = this.props.data.page.dictionary.find(
      term => term.id === this.state.openTermId,
    );
    if (modalTerm) {
      return (
        <Modal
          key={modalTerm.id}
          isOpen={this.state.isModalOpen}
          innerPadding="4rem 4rem 2rem 4rem"
          innerMinWidth="15vw"
          onClickBackground={this.handleModal}
        >
          <H2>Czech</H2>
          <P>{modalTerm.czech.grammar}</P>
          <H2>
            Czech{' '}
            <Link type="primary" to="https://en.wikipedia.org/wiki/Help:IPA/Czech">
              IPA
            </Link>
          </H2>
          <P>{modalTerm.czech.ipa}</P>
          <H2>German equivalent</H2>
          <P>{this.state.isCardFlipped ? modalTerm.german.grammar : '...'}</P>
          <H2>German IPA</H2>
          <P>{this.state.isCardFlipped ? modalTerm.german.ipa : '...'}</P>
          <Button
            onClick={this.state.isCardFlipped ? this.handleNextTerm : this.handleFlipCard}
            margin="4rem 0 0 0"
            width="100%"
          >
            {this.state.isCardFlipped ? 'Next' : 'Reveal'}
          </Button>
        </Modal>
      );
    }
    return null;
  };

  renderTable = () => (
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
  );

  render() {
    return (
      <RootContainer>
        <Main gridTemplate="'hero' 'practice' 'dictionary'" gridGap="10vh 4rem">
          <SEOContainer meta={this.props.data.page.meta} />
          <HeroContainer title={this.props.data.page.meta.description} />
          <Section gridArea="practice">
            <Button onClick={this.handleNextTerm}>Start practice</Button>
            {this.renderModal()}
          </Section>
          <Section gridArea="dictionary">
            {this.renderTable()}
            <Button onClick={this.handleOpenAll}>
              {this.state.isOpenAll ? 'Hide' : 'Reveal'} all
            </Button>
          </Section>
        </Main>
      </RootContainer>
    );
  }
}
