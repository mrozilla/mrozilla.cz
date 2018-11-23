// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { Component } from 'react';
import { graphql } from 'gatsby';

import { RootContainer, SEOContainer, HeroContainer } from '~containers';
import { Main, Section, H1, H2, Input, Button, Toast } from '~components';
import { copyToClipboard, parseInput } from '~utils';

// ─────────────────────────────────────────────────────────────────────────────
// query
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  {
    page: labJson(meta: { permalink: { eq: "/lab/passworld" } }) {
      meta {
        title
        description
        permalink
        ogImage {
          ...OgImageFragment
        }
      }
      body {
        hero {
          title
        }
      }
    }
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default class PassworldPage extends Component {
  state = {
    password: '',
    length:   10,
    chars:    {
      lowerChars:   true,
      upperChars:   true,
      numbers:      false,
      specialChars: false,
    },
    clipboard: '',
    isCopied:  false,
  };

  static getDerivedStateFromProps(_, prevState) {
    const generateRandomCharacter = () => {
      const types = {
        lowerChars:   'abcdefghijklmnopqrstuvwxyz',
        upperChars:   'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        specialChars: '@#$%-_',
        numbers:      '0123456789',
      };
      const pool = Object.keys(types)
        .map(key => (prevState.chars[key] ? types[key] : null))
        .join('');
      const seed = window.crypto.getRandomValues(new Uint8Array(1));
      return pool.charAt(seed[0] % pool.length);
    };

    if (prevState.clipboard !== '') {
      return {
        clipboard: '',
        isCopied:  true,
      };
    }

    return {
      password: Array(...new Array(prevState.length))
        .map(() => generateRandomCharacter())
        .join(''),
      isCopied: false,
    };
  }

  handleChangeCheckbox = ({ target }) => this.setState(state => ({
    chars: { ...state.chars, [target.value]: target.checked },
  }));

  handleCopyToClipboard = () => {
    this.setState(state => ({
      clipboard: copyToClipboard(state.password),
    }));
  };

  inputs = [
    {
      type:        'number',
      name:        'length',
      label:       'Password length',
      description:
        "Don't go for any password that is shorter than 10 characters. Sh*t's not safe that way.",
      margin:   '0 0 1rem 0',
      onChange: ({ target }) => this.setState({ ...parseInput(target) }),
    },
    {
      type:    'checkbox',
      name:    'characters',
      label:   'Characters',
      options: [
        {
          value: 'lowerChars',
          label: 'Include lowercase letters',
        },
        {
          value: 'upperChars',
          label: 'Include uppercase letters',
        },
        {
          value: 'specialChars',
          label: 'Include special characters',
        },
        {
          value: 'numbers',
          label: 'Include numbers',
        },
      ],
      margin:   '0 0 2rem 0',
      onChange: this.handleChangeCheckbox,
    },
  ];

  buttons = [
    {
      title:   'Generate',
      onClick: () => this.forceUpdate(),
      grouped: true,
    },
    {
      title:   'Copy to clipboard',
      onClick: this.handleCopyToClipboard,
      grouped: true,
    },
  ];

  render() {
    return (
      <RootContainer>
        <SEOContainer meta={this.props.data.page.meta} />
        <Main
          gridTemplate={{
            xs: "'hero' 'output' 'input'",
            md: "'hero hero' 'output input' / 1fr 1fr",
          }}
          gridGap="10vh 1rem"
        >
          <HeroContainer title={this.props.data.page.body.hero.title} />
          <Section gridArea="output">
            <H2 as="h1">Generated password</H2>
            <H1 as="p" hyphens="auto">
              {this.state.password}
            </H1>
          </Section>
          <Section gridArea="input">
            {this.inputs.map(input => (
              <Input
                key={input.name}
                {...input}
                value={input.name === 'length' ? this.state.length : undefined}
                options={
                  input.options
                  && input.options.map(option => ({
                    ...option,
                    checked: this.state.chars[option.value],
                  }))
                }
              />
            ))}
            {this.buttons.map(button => (
              <Button
                key={button.title}
                {...button}
                disabled={Object.values(this.state.chars).every(item => item === false)}
              >
                {button.title}
              </Button>
            ))}
          </Section>
          {this.state.isCopied && (
            <Toast key={window.performance.now()}>
              {this.state.password} was copied to the clipboard
            </Toast>
          )}
        </Main>
      </RootContainer>
    );
  }
}
