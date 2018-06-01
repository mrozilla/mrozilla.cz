// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

// react
import React, { PureComponent } from 'react';

// style
import { Main, Section, Button, Input } from '../../components';
import { parseInput } from '../../utils';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default class InAnyCaseScreen extends PureComponent {
  state = {
    output:   '',
    original: '',
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
    return (
      <Main>
        <Section>
          <Input
            name="output"
            type="text"
            value={this.state.output}
            placeholder="Insert text and change case using the buttons below..."
            onChange={({ target }) =>
              this.setState({ ...parseInput(target), original: target.value })
            }
            padding="4rem"
          />
          <div style={{ margin: '0 0 1rem 0' }}>
            <Button onClick={() => this.handleChangeCase('toLowerCase')}>
              lower case
            </Button>
            <Button onClick={() => this.handleChangeCase('toSentenceCase')}>
              Sentence case
            </Button>
            <Button onClick={() => this.handleChangeCase('toTitleCase')}>
              Title Case
            </Button>
            <Button onClick={() => this.handleChangeCase('toUpperCase')}>
              UPPER CASE
            </Button>
          </div>
          <div style={{ margin: '0 0 1rem 0' }}>
            <Button onClick={() => this.handleChangeCase('toCamelCase')}>
              camelCase
            </Button>
            <Button onClick={() => this.handleChangeCase('toPascalCase')}>
              PascalCase
            </Button>
            <Button onClick={() => this.handleChangeCase('toConstantCase')}>
              CONSTANT_CASE
            </Button>
            <Button onClick={() => this.handleChangeCase('toHeaderCase')}>
              Header-Case
            </Button>
            <Button onClick={() => this.handleChangeCase('toURLCase')}>
              URL-case
            </Button>
            <Button onClick={() => this.handleChangeCase('toPathCase')}>
              path/case
            </Button>
            <Button onClick={() => this.handleChangeCase('toSnakeCase')}>
              snake_case
            </Button>
            <Button onClick={() => this.handleChangeCase('toDotCase')}>
              dot.case
            </Button>
          </div>
          <Button onClick={() => this.handleChangeCase('reset')}>
            Reset original
          </Button>
        </Section>
      </Main>
    );
  }
}
