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
      css={`
        grid-area: controls;
        display: grid;
        grid-template: 'layout src . .';
        position: sticky;
        top: 0px;
        background-color: var(--color-bg);
        padding: 2rem;
        margin: -2rem;
      `}
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
    <Section
      css={`
        grid-area: grid;
      `}
    >
      <Ul
        css={`
          grid-gap: 4rem 2rem;

          @media screen and (min-width: 900px) {
            grid-template-columns: 1fr 1fr;
          }
        `}
      >
        {['4rem 0 0 0', '0 8rem 0 0', '0 0 0 8rem', '6rem'].map(padding => (
          <Li
            key={padding}
            css={`
              padding: ${state.layout === 'exciting' ? padding : ''};
              transition: padding 250ms;
            `}
          >
            <Img src={state.src} alt="a random photo" zoom />
            <H1
              as="h2"
              css={`
                font-size: 2.25rem;
                line-height: 4rem;
              `}
            >
              What a great photo
            </H1>
            <P
              css={`
                line-height: 2rem;
              `}
            >
              €4.99
            </P>
          </Li>
        ))}
      </Ul>
    </Section>
  );

  return (
    <RootContainer>
      <SEOContainer meta={meta} />
      <Main
        css={`
          grid-template: 'hero' 'controls' 'grid';
          grid-gap: 10vh 1rem;
        `}
      >
        {renderBlocks(blocks)}
        {renderGrid()}
        {renderControls()}
      </Main>
    </RootContainer>
  );
}
