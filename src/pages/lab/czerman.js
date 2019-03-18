// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { useState } from 'react';
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

export default function CzermanPage(props) {
  const [state, setState] = useState({
    openTermId:    '',
    isOpenAll:     false,
    isModalOpen:   false,
    isCardFlipped: false,
  });

  const handleOpenTerm = (openTermId) => {
    setState({
      ...state,
      isOpenAll: false,
      openTermId,
    });
  };

  const handleOpenAll = () => {
    setState(prevState => ({ ...prevState, isOpenAll: !prevState.isOpenAll }));
  };

  const handleNextTerm = () => {
    setState((prevState) => {
      const currentIndex = props.data.page.dictionary.findIndex(
        term => term.id === prevState.openTermId,
      );
      return {
        ...prevState,
        isModalOpen:   true,
        isCardFlipped: false,
        openTermId:
          currentIndex === props.data.page.dictionary.length - 1
            ? props.data.page.dictionary[0].id
            : props.data.page.dictionary[currentIndex + 1].id,
      };
    });
  };

  const handleModal = () => {
    setState(prevState => ({
      ...prevState,
      isModalOpen: !prevState.isModalOpen,
    }));
  };

  const handleFlipCard = () => {
    setState(prevState => ({
      ...prevState,
      isCardFlipped: !prevState.isCardFlipped,
    }));
  };

  const renderModal = () => {
    const modalTerm = props.data.page.dictionary.find(term => term.id === state.openTermId)
      || props.data.page.dictionary[0];
    return (
      <Modal
        innerKey={modalTerm.id}
        isOpen={state.isModalOpen}
        innerPadding="4rem 4rem 2rem 4rem"
        innerMinWidth="15vw"
        onClickBackground={handleModal}
        onClickClose={handleModal}
        onClickEscape={handleModal}
      >
        <H2>Czech</H2>
        <P>{modalTerm.czech.grammar}</P>
        <H2>
          Czech <Link to="https://en.wikipedia.org/wiki/Help:IPA/Czech">IPA</Link>
        </H2>
        <P>{modalTerm.czech.ipa}</P>
        <H2>German equivalent</H2>
        <P>{state.isCardFlipped ? modalTerm.german.grammar : '...'}</P>
        <H2>
          German <Link to="https://en.wikipedia.org/wiki/Help:IPA/German">IPA</Link>
        </H2>
        <P>{state.isCardFlipped ? modalTerm.german.ipa : '...'}</P>
        <Button
          onClick={state.isCardFlipped ? handleNextTerm : handleFlipCard}
          margin="4rem 0 0 0"
          width="100%"
        >
          {state.isCardFlipped ? 'Next' : 'Reveal'}
        </Button>
      </Modal>
    );
  };

  const renderTable = () => (
    <Table margin="0 0 2rem 0" tableLayout="fixed">
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Czech</Table.Th>
          <Table.Th>
            Czech <Link to="https://en.wikipedia.org/wiki/Help:IPA/Czech">IPA</Link>
          </Table.Th>
          <Table.Th>German equivalent</Table.Th>
          <Table.Th>
            German <Link to="https://en.wikipedia.org/wiki/Help:IPA/German">IPA</Link>
          </Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {props.data.page.dictionary.map(term => (
          <Table.Tr
            key={term.id}
            cursor="pointer"
            onClick={() => handleOpenTerm(state.openTermId !== term.id ? term.id : '')}
          >
            <Table.Td>{term.czech.grammar}</Table.Td>
            <Table.Td>{term.czech.ipa}</Table.Td>
            {state.openTermId === term.id || state.isOpenAll ? (
              <Table.Td>{term.german.grammar}</Table.Td>
            ) : (
              <Table.Td colSpan="2" textAlign="center" opacity={0.5}>
                Reveal
              </Table.Td>
            )}
            {state.openTermId === term.id || state.isOpenAll ? (
              <Table.Td>{term.german.ipa}</Table.Td>
            ) : null}
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );

  return (
    <RootContainer>
      <SEOContainer meta={props.data.page.meta} />
      <Main gridTemplate="'hero' 'practice' 'dictionary'" gridGap="10vh 4rem">
        <HeroContainer title={props.data.page.meta.description} />
        <Section gridArea="practice">
          <Button onClick={handleNextTerm}>Start practice</Button>
          {renderModal()}
        </Section>
        <Section gridArea="dictionary">
          {renderTable()}
          <Button onClick={handleOpenAll}>
            {state.isOpenAll ? 'Hide' : 'Reveal'} all
          </Button>
        </Section>
      </Main>
    </RootContainer>
  );
}

CzermanPage.propTypes = {
  data: shape({
    page: shape({
      ...metaTypes,
    }).isRequired,
  }).isRequired,
};
