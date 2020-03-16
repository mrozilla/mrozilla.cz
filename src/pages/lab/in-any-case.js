// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { useState } from 'react';
import { graphql } from 'gatsby';

import { RootContainer, SEOContainer } from '~containers';
import { Main, Section, Input } from '~components';
import { renderBlocks, pagePropTypes } from '~utils';

// ─────────────────────────────────────────────────────────────────────────────
// query
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  {
    page: mdx(frontmatter: { meta: { permalink: { eq: "/lab/in-any-case/" } } }) {
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
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function InAnyCasePage({
  data: {
    page: {
      frontmatter: { meta, blocks },
    },
  },
}) {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState({
    'lower case': '',
    'UPPER CASE': '',
    'Title Case': '',
    'Sentence case': '',
    'dot.case': '',
    'url-case': '',
    'path/case': '',
    'snake-case': '',
    CONSTANT_CASE: '',
    'Header-Case': '',
    PascalCase: '',
    camelCase: '',
  });

  const handleInput = ({ target: { value } }) => {
    const changeCase = {
      toLowerCase: (s) => s.toLowerCase(),
      toUpperCase: (s) => s.toUpperCase(),
      toTitleCase: (s) =>
        s
          .split(' ')
          .map((w) => w.charAt(0).toUpperCase() + w.substr(1).toLowerCase())
          .join(' '),
      toSentenceCase: (s) =>
        s
          .split('. ')
          .map((w) => w.charAt(0).toUpperCase() + w.substr(1).toLowerCase())
          .join('. '),
      toDotCase: (s) =>
        s
          .split(' ')
          .map((w) => changeCase.toLowerCase(w))
          .join('.'),
      toURLCase: (s) =>
        s
          .split(' ')
          .map((w) => changeCase.toLowerCase(w))
          .join('-'),
      toPathCase: (s) =>
        s
          .split(' ')
          .map((w) => changeCase.toLowerCase(w))
          .join('/'),
      toSnakeCase: (s) =>
        s
          .split(' ')
          .map((t) => changeCase.toLowerCase(t))
          .join('_'),
      toConstantCase: (s) =>
        s
          .split(' ')
          .map((w) => changeCase.toUpperCase(w))
          .join('_'),
      toHeaderCase: (s) =>
        s
          .split(' ')
          .map((t) => changeCase.toSentenceCase(t))
          .join('-'),
      toPascalCase: (s) =>
        s
          .split(' ')
          .map((w) => changeCase.toSentenceCase(w))
          .join(''),
      toCamelCase: (s) =>
        changeCase
          .toPascalCase(s)
          .charAt(0)
          .toLowerCase() + changeCase.toPascalCase(s).slice(1),
    };

    setInput(value);
    setOutput({
      'lower case': changeCase.toLowerCase(value),
      'UPPER CASE': changeCase.toUpperCase(value),
      'Title Case': changeCase.toTitleCase(value),
      'Sentence case': changeCase.toSentenceCase(value),
      'dot.case': changeCase.toDotCase(value),
      'url-case': changeCase.toURLCase(value),
      'path/case': changeCase.toPathCase(value),
      'snake-case': changeCase.toSnakeCase(value),
      CONSTANT_CASE: changeCase.toConstantCase(value),
      'Header-Case': changeCase.toHeaderCase(value),
      PascalCase: changeCase.toPascalCase(value),
      camelCase: changeCase.toCamelCase(value),
    });
  };

  return (
    <RootContainer>
      <SEOContainer meta={meta} />
      <Main
        css={`
          grid-template: 'hero' 'input';
          grid-gap: 5vh 4rem;
        `}
      >
        {renderBlocks(blocks)}
        <Section
          css={`
            grid-area: input;
          `}
        >
          <Input
            name="input"
            type="text"
            value={input}
            label="Original text"
            placeholder="Start typing or paste text..."
            css={`
              margin: 0 0 4rem 0;
            `}
            onChange={handleInput}
          />
          {Object.entries(output).map(([key, value]) => (
            <Input
              key={key}
              placeholder={key}
              name={key}
              label={key}
              type="text"
              value={value}
              css={`
                margin: 0 0 1rem 0;
              `}
              readOnly
            />
          ))}
        </Section>
      </Main>
    </RootContainer>
  );
}

InAnyCasePage.propTypes = pagePropTypes;
