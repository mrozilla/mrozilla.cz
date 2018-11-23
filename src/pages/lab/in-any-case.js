// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { PureComponent } from 'react';
import { graphql } from 'gatsby';

import { RootContainer, SEOContainer, HeroContainer } from '~containers';
import { Main, Section, Input } from '~components';
import { parseInput } from '~utils';

// ─────────────────────────────────────────────────────────────────────────────
// query
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  {
    page: labJson(meta: { permalink: { eq: "/lab/in-any-case" } }) {
      meta {
        title
        description
        permalink
        ogImage {
          ...OgImageFragment
        }
      }
      body {
        title
      }
    }
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default class InAnyCasePage extends PureComponent {
  state = {
    input:  '',
    output: {
      'lower case':    '',
      'UPPER CASE':    '',
      'Title Case':    '',
      'Sentence case': '',
      'dot.case':      '',
      'url-case':      '',
      'path/case':     '',
      'snake-case':    '',
      CONSTANT_CASE:   '',
      'Header-Case':   '',
      PascalCase:      '',
      camelCase:       '',
    },
  };

  handleInput = ({ target }) => {
    const changeCase = {
      toLowerCase: s => s.toLowerCase(),
      toUpperCase: s => s.toUpperCase(),
      toTitleCase: s => s
        .split(' ')
        .map(w => w.charAt(0).toUpperCase() + w.substr(1).toLowerCase())
        .join(' '),
      toSentenceCase: s => s
        .split('. ')
        .map(w => w.charAt(0).toUpperCase() + w.substr(1).toLowerCase())
        .join('. '),
      toDotCase: s => s
        .split(' ')
        .map(w => changeCase.toLowerCase(w))
        .join('.'),
      toURLCase: s => s
        .split(' ')
        .map(w => changeCase.toLowerCase(w))
        .join('-'),
      toPathCase: s => s
        .split(' ')
        .map(w => changeCase.toLowerCase(w))
        .join('/'),
      toSnakeCase: s => s
        .split(' ')
        .map(t => changeCase.toLowerCase(t))
        .join('_'),
      toConstantCase: s => s
        .split(' ')
        .map(w => changeCase.toUpperCase(w))
        .join('_'),
      toHeaderCase: s => s
        .split(' ')
        .map(t => changeCase.toSentenceCase(t))
        .join('-'),
      toPascalCase: s => s
        .split(' ')
        .map(w => changeCase.toSentenceCase(w))
        .join(''),
      toCamelCase: s => changeCase
        .toPascalCase(s)
        .charAt(0)
        .toLowerCase() + changeCase.toPascalCase(s).slice(1),
      reset: () => this.state.original,
    };

    this.setState(state => ({
      ...parseInput(target),
      output: {
        ...state.output,
        'lower case':    changeCase.toLowerCase(target.value),
        'UPPER CASE':    changeCase.toUpperCase(target.value),
        'Title Case':    changeCase.toTitleCase(target.value),
        'Sentence case': changeCase.toSentenceCase(target.value),
        'dot.case':      changeCase.toDotCase(target.value),
        'url-case':      changeCase.toURLCase(target.value),
        'path/case':     changeCase.toPathCase(target.value),
        'snake-case':    changeCase.toSnakeCase(target.value),
        CONSTANT_CASE:   changeCase.toConstantCase(target.value),
        'Header-Case':   changeCase.toHeaderCase(target.value),
        PascalCase:      changeCase.toPascalCase(target.value),
        camelCase:       changeCase.toCamelCase(target.value),
      },
    }));
  };

  render() {
    return (
      <RootContainer>
        <SEOContainer meta={this.props.data.page.meta} />
        <Main gridTemplate="'hero' 'input'" gridGap="5vh 4rem">
          <HeroContainer title={this.props.data.page.body.title} />
          <Section gridArea="input">
            <Input
              name="input"
              type="text"
              value={this.state.input}
              placeholder="Start typing or paste text..."
              margin="0 0 4rem 0"
              onChange={this.handleInput}
            />
            {Object.entries(this.state.output).map(([key, value]) => (
              <Input
                {...{ key }}
                placeholder={key}
                name={key}
                label={key}
                type="text"
                value={value}
                margin="0 0 1rem 0"
                labelStyle={{
                  isFloating:    true,
                  textTransform: 'unset',
                }}
                readOnly
              />
            ))}
          </Section>
        </Main>
      </RootContainer>
    );
  }
}
