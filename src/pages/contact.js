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
  return (
    <RootContainer>
      <Main
        gridTemplate={{
          xs: "'hero' 'form'",
          lg: "'hero .' 'form .' / 1fr 1fr",
        }}
        gridGap="10vh 4rem"
      >
        <SEOContainer meta={meta} />
        <HeroContainer title={hero.title} />
        {location.hash === '#success' ? (
          <Section gridArea="form">
            <P margin="0 0 2rem 0">{form.success}</P>
            <Link to="/">
              <Button>{form.back}</Button>
            </Link>
          </Section>
        ) : (
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
            {form.inputs.map(input => (
              <Input {...input} key={input.name} />
            ))}
            <Button type="submit" margin="2rem 0 0 0" style={{ gridArea: 'submit' }}>
              Send
            </Button>
          </Form>
        )}
      </Main>
    </RootContainer>
  );
}
