// =============================================================================
// Import
// =============================================================================

// React
import React, { Component } from 'react';

// Components
import { Section, Container, Row, Column } from '../components/Layout';
import { Button } from '../components/Buttons';
import { Form, TextInput, CheckboxInput } from '../components/Forms';

// =============================================================================
// Component
// =============================================================================

export default class PassworldScreen extends Component {
  state = {
    password: '',
    length:   10,
    include:  {
      lowerChars:   true,
      upperChars:   true,
      numbers:      false,
      specialChars: false,
    },
  };

  getRandomChar = () => {
    const types = {
      lowerChars:   'abcdefghijklmnopqrstuvwxyz',
      upperChars:   'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      specialChars: '@#$%-_',
      numbers:      '0123456789',
    };
    const pool = Object.keys(types)
      .map(key => (this.state.include[key] ? types[key] : null))
      .join('');
    const seed = window.crypto.getRandomValues(new Uint8Array(1));
    return pool.charAt(seed[0] % pool.length);
  };

  generatePassword = () => {
    this.setState({
      password: Array(...new Array(this.state.length))
        .map(() => this.getRandomChar())
        .join(''),
    });
  };

  handleInput = (name, value) => {
    this.setState({
      length:   name === 'length' ? value : this.state.length,
      password: name === 'password' ? value : this.state.password,
      include:  {
        ...this.state.include,
        [name]: name !== 'length' ? value : null,
      },
    });
  };

  render() {
    const { include, length, password } = this.state;
    const { handleInput, generatePassword } = this;
    return (
      <main>
        <Section>
          <Container>
            <Row justifyContent="center">
              <Column lg={6}>
                <TextInput
                  type="text"
                  name="password"
                  value={password}
                  placeholder="Your password will be here..."
                  marginBottom="2rem"
                  padding="2rem"
                  onChange={handleInput}
                />
                <Form>
                  <TextInput
                    type="number"
                    name="length"
                    value={length}
                    label="Password length"
                    description="Don't go for any password that is shorter than 10 characters. Sh*t's not safe that way." // eslint-disable-line
                    marginBottom="2rem"
                    onChange={handleInput}
                  />
                  <CheckboxInput
                    name="lowerChars"
                    value={include.lowerChars}
                    label="Include lowercase letters"
                    onChange={handleInput}
                  />
                  <CheckboxInput
                    name="upperChars"
                    value={include.upperChars}
                    label="Include uppercase letters"
                    onChange={handleInput}
                  />
                  <CheckboxInput
                    name="specialChars"
                    value={include.specialChars}
                    label="Include special characters"
                    onChange={handleInput}
                  />
                  <CheckboxInput
                    name="numbers"
                    value={include.numbers}
                    label="Include numbers"
                    onChange={handleInput}
                    marginBottom="2rem"
                  />
                  <Button type="primary" onClick={generatePassword} isFull>
                    Generate password
                  </Button>
                </Form>
              </Column>
            </Row>
          </Container>
        </Section>
      </main>
    );
  }
}
