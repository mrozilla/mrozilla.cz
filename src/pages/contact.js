// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { graphql } from 'gatsby';

import {
  Main, Section, P, Link, Button, Form, Input,
} from '../components';
import { RootContainer, HeroContainer, SEOContainer } from '../containers';

// ─────────────────────────────────────────────────────────────────────────────
// query
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  {
    page: pagesJson(meta: { permalink: { eq: "/contact" } }) {
      ...MetaFragment
      body {
        hero {
          title
        }
        form {
          inputs {
            name
            label
            value
            options
            type
            rows
            required
          }
          success
          back
        }
      }
    }
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function ContactPage({
  data: {
    page: {
      meta,
      body: { hero, form },
    },
  },
  location,
}) {
  const renderSuccess = () => (
    <Section gridArea="form">
      <P margin="0 0 2rem 0">{form.success}</P>
      <Link to="/">
        <Button>{form.back}</Button>
      </Link>
    </Section>
  );

  const renderForm = () => (
    <Form
      name="contact"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      method="POST"
      action="/contact#success"
      gridTemplate={{
        xs: "'name' 'email' 'specs' 'budget' 'submit'",
        lg: "'name email' 'specs specs' 'budget budget' 'submit submit'",
      }}
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="bot-field" />
      {form.inputs.map(input => (
        <Input key={input.name} {...input} />
      ))}
    </Form>
  );

  return (
    <RootContainer>
      <Main
        gridTemplate={{
          xs: "'hero' 'form'",
          lg: "'hero .' 'form .' / 2fr 1fr",
        }}
        gridGap="10vh 4rem"
      >
        <SEOContainer meta={meta} />
        <HeroContainer title={hero.title} />
        {location.hash === '#success' ? renderSuccess() : renderForm()}
      </Main>
    </RootContainer>
  );
}
