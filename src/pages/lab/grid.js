// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { useState } from 'react';

import { graphql } from 'gatsby';

import { RootContainer, SEOContainer } from '~containers';
import { Main, Section, Input, Img, H1, P, Ul, Li } from '~components';
import { renderBlocks } from '~utils';

// ─────────────────────────────────────────────────────────────────────────────
// query
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  {
    page: mdx(frontmatter: { meta: { permalink: { eq: "/lab/grid/" } } }) {
      frontmatter {
        ...MetaFragment
        blocks {
          title
          type
        }
      }
    }
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// helpers
// ─────────────────────────────────────────────────────────────────────────────

const controls = [
  {
    type:    'radio',
    name:    'layout',
    label:   'Current layout',
    options: [
      {
        value: 'exciting',
        label: 'Exciting',
      },
      {
        value: 'boring',
        label: 'Boring',
      },
    ],
  },
  {
    type:    'radio',
    name:    'src',
    label:   'Images',
    options: [
      {
        value: 'https://source.unsplash.com/random/400x600',
        label: 'Real photos',
      },
      {
        value: 'broken.jpg',
        label: 'Placeholders',
      },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function GridPage({
  data: {
    page: {
      frontmatter: { meta, blocks },
    },
  },
}) {
  const [state, setState] = useState({
    layout: 'exciting',
    src:    'https://source.unsplash.com/random/400x600',
  });

  const handleInputChange = ({ target: { name, value } }) => setState(prevState => ({
    ...prevState,
    [name]: value,
  }));

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
            checked: state[input.name] === option.value,
          }))}
          onChange={handleInputChange}
        />
      ))}
    </Section>
  );

  const renderGrid = () => (
    <Section gridArea="grid">
      <Ul
        display="grid"
        gridTemplateColumns={{
          xs: '1fr',
          md: '1fr 1fr',
        }}
        gridGap="4rem 2rem"
      >
        {['4rem 0 0 0', '0 8rem 0 0', '0 0 0 8rem', '6rem'].map(margin => (
          <Li
            key={margin}
            padding={{
              md: state.layout === 'exciting' ? margin : undefined,
            }}
            transition="padding 250ms"
          >
            <Img src={state.src} alt="a random photo" />
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
      <Main gridTemplate="'hero' 'controls' 'grid'" gridGap="10vh 1rem">
        {renderBlocks(blocks)}
        {renderGrid()}
        {renderControls()}
      </Main>
    </RootContainer>
  );
}
