// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { PureComponent } from 'react';
import { graphql } from 'gatsby';
import { shape } from 'prop-types';

import { RootContainer, SEOContainer, HeroContainer } from '~containers';
import { Main, Section, Table, Link, Button, Modal, H2, P } from '~components';
import { metaTypes } from '~utils';

// ─────────────────────────────────────────────────────────────────────────────
// query
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  {
    page: labJson(meta: { permalink: { eq: "/lab/czerman/" } }) {
      meta {
        title
        description
        permalink
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
    this.setState(state => ({ isOpenAll: !state.isOpenAll }));
  };

  handleNextTerm = () => {
    this.setState((state) => {
      const currentIndex = this.props.data.page.dictionary.findIndex(
        term => term.id === state.openTermId,
      );
      return {
        isModalOpen:   true,
        isCardFlipped: false,
        openTermId:
          currentIndex === this.props.data.page.dictionary.length - 1
            ? this.props.data.page.dictionary[0].id
            : this.props.data.page.dictionary[currentIndex + 1].id,
      };
    });
  };

  handleModal = () => {
    this.setState(state => ({
      isModalOpen: !state.isModalOpen,
    }));
  };

  handleFlipCard = () => {
    this.setState(state => ({
      isCardFlipped: !state.isCardFlipped,
    }));
  };

  renderModal = () => {
    const modalTerm = this.props.data.page.dictionary.find(term => term.id === this.state.openTermId)
      || this.props.data.page.dictionary[0];
    return (
      <Modal
        innerKey={modalTerm.id}
        isOpen={this.state.isModalOpen}
        innerPadding="4rem 4rem 2rem 4rem"
        innerMinWidth="15vw"
        onClickBackground={this.handleModal}
        onClickEscape={this.handleModal}
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
        <H2>
          German{' '}
          <Link type="primary" to="https://en.wikipedia.org/wiki/Help:IPA/German">
            IPA
          </Link>
        </H2>
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
  };

  renderTable = () => (
    <Table margin="0 0 2rem 0" tableLayout="fixed">
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Czech</Table.Th>
          <Table.Th>
            Czech{' '}
            <Link type="primary" to="https://en.wikipedia.org/wiki/Help:IPA/Czech">
              IPA
            </Link>
          </Table.Th>
          <Table.Th>German equivalent</Table.Th>
          <Table.Th>
            German{' '}
            <Link type="primary" to="https://en.wikipedia.org/wiki/Help:IPA/German">
              IPA
            </Link>
          </Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {this.props.data.page.dictionary.map(term => (
          <Table.Tr
            key={term.id}
            cursor="pointer"
            onClick={() => this.handleOpenTerm(this.state.openTermId !== term.id ? term.id : '')}
          >
            <Table.Td>{term.czech.grammar}</Table.Td>
            <Table.Td>{term.czech.ipa}</Table.Td>
            {this.state.openTermId === term.id || this.state.isOpenAll ? (
              <Table.Td>{term.german.grammar}</Table.Td>
            ) : (
              <Table.Td colSpan="2" textAlign="center" opacity={0.5}>
                Reveal
              </Table.Td>
            )}
            {this.state.openTermId === term.id || this.state.isOpenAll ? (
              <Table.Td>{term.german.ipa}</Table.Td>
            ) : null}
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );

  render() {
    return (
      <RootContainer>
        <SEOContainer meta={this.props.data.page.meta} />
        <Main gridTemplate="'hero' 'practice' 'dictionary'" gridGap="10vh 4rem">
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
