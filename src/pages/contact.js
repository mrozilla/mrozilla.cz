// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { graphql } from 'gatsby';

import { RootContainer, HeroContainer, SEOContainer } from '~containers';
import { Main, Section, P, Link, Button, Form, Input } from '~components';

// ─────────────────────────────────────────────────────────────────────────────
// query
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  {
    page: mdx(frontmatter: { meta: { permalink: { eq: "/contact/" } } }) {
      frontmatter {
        ...MetaFragment
        blocks {
          title
          inputs {
            name
            type
            label
            description
            error
            options {
              value
              label
            }
            rows
            required
          }
          success
          type
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
      frontmatter: { meta, blocks },
    },
  },
  location,
}) {
  const [hero, form] = blocks;
  const renderSuccess = () => (
    <Section gridArea="form">
      <P margin="0 0 2rem 0">{form.success}</P>
      <Link to="/">
        <Button>Back to home page</Button>
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
        lg: "'name email' 'specs specs' 'budget budget' 'submit submit' / 1fr 1fr",
      }}
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="bot-field" />
      {form.inputs.map(input => (
        <Input key={input.name} placeholder={input.label} isFloatingLabel {...input} />
      ))}
    </Form>
  );

  return (
    <RootContainer>
      <SEOContainer meta={meta} />
      <Main
        gridTemplate={{
          xs: "'hero' 'form'",
          lg: "'hero .' 'form .' / 2fr 1fr",
        }}
        gridGap="10vh 4rem"
      >
        <HeroContainer title={hero.title} />
        {location.hash === '#success' ? renderSuccess() : renderForm()}
      </Main>
    </RootContainer>
  );
}
