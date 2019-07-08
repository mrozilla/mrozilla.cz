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
    <Section
      css={`
        grid-area: form;
      `}
    >
      <P
        css={`
          margin: 0 0 2rem 0;
        `}
      >
        {form.success}
      </P>
      <Link to="/">
        <Button look="primary">Back to home page</Button>
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
      css={`
        grid-area: form;
        grid-template: 'name' 'email' 'specs' 'budget' 'submit';

        @media screen and (min-width: 1200px) {
          grid-template: 'name email' 'specs specs' 'budget budget' 'submit submit' / 1fr 1fr;
        }
      `}
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="bot-field" />
      {form.inputs.map(input => (
        <Input key={input.name} placeholder={input.label} {...input} />
      ))}
    </Form>
  );

  return (
    <RootContainer>
      <SEOContainer meta={meta} />
      <Main
        css={`
          grid-template: 'hero' 'form';
          grid-gap: 10vh 4rem;

          @media screen and (min-width: 1200px) {
            grid-template: 'hero .' 'form .' / 2fr 1fr;
          }
        `}
      >
        <HeroContainer title={hero.title} />
        {location.hash === '#success' ? renderSuccess() : renderForm()}
      </Main>
    </RootContainer>
  );
}
