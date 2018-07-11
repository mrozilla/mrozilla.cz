// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { PureComponent } from 'react';
import { Form, Input, Button } from '../components';
import { parseInput } from '../utils';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default class ContactContainer extends PureComponent {
  state = {
    name:    '',
    email:   '',
    project: '',
  };

  renderInputs = () => [
    {
      label:    'Your email',
      name:     'email',
      type:     'email',
      value:    this.state.email,
      required: true,
    },
    {
      label:    'Your name',
      name:     'name',
      value:    this.state.name,
      required: true,
    },
    {
      label:    'Your project',
      name:     'project',
      type:     'textarea',
      rows:     '6',
      value:    this.state.project,
      required: true,
    },
  ].map(input => (
    <Input key={input.name} {...input} onChange={({ target }) => this.setState({ ...parseInput(target) })} />
  ));

  render() {
    return (
      <Form
        name="contact"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        method="POST"
        action="/contact#success"

        gridTemplate={{
          xs: "'email' 'name' 'project' 'submit'",
          lg: "'email name' 'project project' 'submit submit'",
        }}
        gridGap="0 1rem"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="bot-field" />
        {this.renderInputs()}
        <Button type="submit" margin="2rem 0 0 0" style={{ gridArea: 'submit' }}>
          Send
        </Button>
      </Form>
    );
  }
}
