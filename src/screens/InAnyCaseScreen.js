// =============================================================================
// Import
// =============================================================================

// React
import React, { Component } from 'react';

// Styles
import { Section, Container, Row, Column } from '../components/Layout';
import { Form, TextInput } from '../components/Forms';
import { Button } from '../components/Buttons';

// =============================================================================
// Component
// =============================================================================

export default class InAnyCaseScreen extends Component {
  state = {
    output:   '',
    original: '',
  };

  handleInput = (name, value) => {
    this.setState({
      [name]:   value,
      original: value,
    });
  };

  handleChangeCase = (type) => {
    const changeCase = {
      toLowerCase: s => s.toLowerCase(),
      toUpperCase: s => s.toUpperCase(),
      toTitleCase: s =>
        s
          .split(' ')
          .map(w => w.charAt(0).toUpperCase() + w.substr(1).toLowerCase())
          .join(' '),
      toSentenceCase: s =>
        s
          .split('. ')
          .map(w => w.charAt(0).toUpperCase() + w.substr(1).toLowerCase())
          .join('. '),
      toDotCase: s =>
        s
          .split(' ')
          .map(w => changeCase.toLowerCase(w))
          .join('.'),
      toURLCase: s =>
        s
          .split(' ')
          .map(w => changeCase.toLowerCase(w))
          .join('-'),
      toPathCase: s =>
        s
          .split(' ')
          .map(w => changeCase.toLowerCase(w))
          .join('/'),
      toSnakeCase: s =>
        s
          .split(' ')
          .map(t => changeCase.toLowerCase(t))
          .join('_'),
      toConstantCase: s =>
        s
          .split(' ')
          .map(w => changeCase.toUpperCase(w))
          .join('_'),
      toHeaderCase: s =>
        s
          .split(' ')
          .map(t => changeCase.toSentenceCase(t))
          .join('-'),
      toPascalCase: s =>
        s
          .split(' ')
          .map(w => changeCase.toSentenceCase(w))
          .join(''),
      toCamelCase: s =>
        changeCase
          .toPascalCase(s)
          .charAt(0)
          .toLowerCase() + changeCase.toPascalCase(s).slice(1),
      reset: () => this.state.original,
    };
    this.setState({
      output: changeCase[type](this.state.output.trim()),
    });
  };

  render() {
    const { output } = this.state;
    const { handleInput, handleChangeCase } = this;
    return (
      <main>
        <Section>
          <Container>
            <TextInput
              type="text"
              name="output"
              value={output}
              description="Insert text and change case using the buttons below"
              placeholder="Start typing or paste text..."
              onChange={handleInput}
              marginBottom="2rem"
            />
            <Form>
              <Row marginBottom="1rem">
                <Column lg="6">
                  <Button
                    type="primary"
                    onClick={() => handleChangeCase('toLowerCase')}
                    isFull
                  >
                    lower case
                  </Button>
                  <Button
                    type="primary"
                    onClick={() => handleChangeCase('toSentenceCase')}
                    isFull
                  >
                    Sentence case
                  </Button>
                  <Button
                    type="primary"
                    onClick={() => handleChangeCase('toTitleCase')}
                    isFull
                  >
                    Title Case
                  </Button>
                  <Button
                    type="primary"
                    onClick={() => handleChangeCase('toUpperCase')}
                    isFull
                  >
                    UPPER CASE
                  </Button>
                  <Button
                    type="primary"
                    onClick={() => handleChangeCase('toCamelCase')}
                    isFull
                  >
                    camelCase
                  </Button>
                  <Button
                    type="primary"
                    onClick={() => handleChangeCase('toPascalCase')}
                    isFull
                  >
                    PascalCase
                  </Button>
                </Column>
                <Column lg="6">
                  <Button
                    type="primary"
                    onClick={() => handleChangeCase('toConstantCase')}
                    isFull
                  >
                    CONSTANT_CASE
                  </Button>
                  <Button
                    type="primary"
                    onClick={() => handleChangeCase('toHeaderCase')}
                    isFull
                  >
                    Header-Case
                  </Button>
                  <Button
                    type="primary"
                    onClick={() => handleChangeCase('toURLCase')}
                    isFull
                  >
                    URL-case
                  </Button>
                  <Button
                    type="primary"
                    onClick={() => handleChangeCase('toPathCase')}
                    isFull
                  >
                    path/case
                  </Button>
                  <Button
                    type="primary"
                    onClick={() => handleChangeCase('toSnakeCase')}
                    isFull
                  >
                    snake_case
                  </Button>
                  <Button
                    type="primary"
                    onClick={() => handleChangeCase('toDotCase')}
                    isFull
                  >
                    dot.case
                  </Button>
                </Column>
              </Row>
              <Button
                type="primary"
                onClick={() => handleChangeCase('reset')}
                isFull
              >
                Reset original
              </Button>
            </Form>
          </Container>
        </Section>
      </main>
    );
  }
}
