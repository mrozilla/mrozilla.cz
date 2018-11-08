// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { Component } from 'react';
import { graphql } from 'gatsby';

import {
  Main, Section, H1, H2, Input, Button, Toast,
} from '../../components';
import { RootContainer, SEOContainer, HeroContainer } from '../../containers';
import { copyToClipboard, parseInput } from '../../utils';

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
    clipboard: false,
  };

  componentDidMount = () => {
    this.handleGeneratePassword();
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (
      this.state.length !== prevState.length
      || this.state.chars.lowerChars !== prevState.chars.lowerChars
      || this.state.chars.upperChars !== prevState.chars.upperChars
      || this.state.chars.numbers !== prevState.chars.numbers
      || this.state.chars.specialChars !== prevState.chars.specialChars
    ) {
      this.handleGeneratePassword();
    }
  };

  handleChangeCheckbox = ({ target }) => this.setState(prevState => ({
    chars: { ...prevState.chars, ...parseInput(target) },
  }));

  handleGenerateRandomCharacter = () => {
    const types = {
      lowerChars:   'abcdefghijklmnopqrstuvwxyz',
      upperChars:   'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      specialChars: '@#$%-_',
      numbers:      '0123456789',
    };
    const pool = Object.keys(types)
      .map(key => (this.state.chars[key] ? types[key] : null))
      .join('');
    const seed = window.crypto.getRandomValues(new Uint8Array(1));
    return pool.charAt(seed[0] % pool.length);
  };

  handleGeneratePassword = () => {
    this.setState(prevState => ({
      password: Array(...new Array(prevState.length))
        .map(() => this.handleGenerateRandomCharacter())
        .join(''),
    }));
  };

  handleCopyToClipboard = () => {
    this.setState(prevState => ({
      clipboard: copyToClipboard(prevState.password),
    }));
    this.forceUpdate();
  };

  inputs = [
    {
      type:        'number',
      name:        'length',
      label:       'Password length',
      description: "Don't go for any password that is shorter than 10 characters. Sh*t's not safe that way.",
      margin:      '0 0 2rem 0',
      onChange:    ({ target }) => this.setState({ ...parseInput(target) }),
    },
  ];

  checkboxes = [
    {
      type:     'checkbox',
      name:     'lowerChars',
      label:    'Include lowercase letters',
      onChange: this.handleChangeCheckbox,
    },
    {
      type:     'checkbox',
      name:     'upperChars',
      label:    'Include uppercase letters',
      onChange: this.handleChangeCheckbox,
    },
    {
      type:     'checkbox',
      name:     'specialChars',
      label:    'Include special characters',
      onChange: this.handleChangeCheckbox,
    },
    {
      type:     'checkbox',
      name:     'numbers',
      label:    'Include numbers',
      margin:   '0 0 2rem 0',
      onChange: this.handleChangeCheckbox,
    },
  ];

  buttons = [
    {
      title:   'Generate',
      onClick: this.handleGeneratePassword,
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
            <H1 as="p">{this.state.password}</H1>
          </Section>
          <Section gridArea="input">
            {this.inputs.map(input => <Input key={input.name} value={this.state[input.name]} {...input} />)}
            {this.checkboxes.map(input => <Input key={input.name} checked={this.state.chars[input.name]} {...input} />)}
            {this.buttons.map(button => <Button key={button.title} {...button} disabled={Object.values(this.state.chars).every(item => item === false)}>{button.title}</Button>)}
          </Section>
          {this.state.clipboard === this.state.password && (
            <Toast key={window.performance.now()}>
              {this.state.clipboard} was copied to the clipboard
            </Toast>
          )}
        </Main>
      </RootContainer>
    );
  }
}
