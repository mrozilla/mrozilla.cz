// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';

import { graphql } from 'gatsby';

import { RootContainer, SEOContainer } from '~containers';
import { Main, Section, H1, Form, Input, Link, Button, P } from '~components';
import { renderBlocks } from '~utils';

// ─────────────────────────────────────────────────────────────────────────────
// query
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  {
    page: mdx(frontmatter: { meta: { permalink: { eq: "/lab/daily-ui/" } } }) {
      frontmatter {
        ...MetaFragment
        blocks {
          title
          type
        }
      }
    }
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// helpers
// ─────────────────────────────────────────────────────────────────────────────

function Signup() {
  return (
    <Section gridArea="signup" display="grid" gridTemplate="'form'">
      <Form
        boxShadow="0 0 0 1px hsla(var(--hsl-text),0.1)"
        padding="4rem 4rem 3rem"
        borderRadius="1rem"
        hover={{
          boxShadow: '0 0 0 2px hsla(var(--hsl-text),0.1)',
        }}
      >
        <H1 fontSize="2.5rem" fontWeight="500" margin="0 0 2rem">
          Create an account
        </H1>
        <Input type="text" label="Your name" placeholder="Name..." />
        <Input
          type="email"
          label="Your email"
          placeholder="Email..."
          error="Your email should be in the format of name@example.com"
          required
        />
        <Input
          type="password"
          label="Create a password"
          placeholder="Create a password..."
          error="Your password has to contain at least 8 letters or numbers"
          pattern=".{8,99}"
          required
        />
        <Button type="submit" primary fontWeight="600">
          Sign up
        </Button>
        <Button type="submit" position="relative">
          <svg width="18" height="18" style={{ position: 'absolute', left: '1rem' }}>
            <path
              d="M17.64,9.20454545 C17.64,8.56636364 17.5827273,7.95272727 17.4763636,7.36363636 L9,7.36363636 L9,10.845 L13.8436364,10.845 C13.635,11.97 13.0009091,12.9231818 12.0477273,13.5613636 L12.0477273,15.8195455 L14.9563636,15.8195455 C16.6581818,14.2527273 17.64,11.9454545 17.64,9.20454545 L17.64,9.20454545 Z"
              fill="#4285F4"
            />
            <path
              d="M9,18 C11.43,18 13.4672727,17.1940909 14.9563636,15.8195455 L12.0477273,13.5613636 C11.2418182,14.1013636 10.2109091,14.4204545 9,14.4204545 C6.65590909,14.4204545 4.67181818,12.8372727 3.96409091,10.71 L0.957272727,10.71 L0.957272727,13.0418182 C2.43818182,15.9831818 5.48181818,18 9,18 L9,18 Z"
              fill="#34A853"
            />
            <path
              d="M3.96409091,10.71 C3.78409091,10.17 3.68181818,9.59318182 3.68181818,9 C3.68181818,8.40681818 3.78409091,7.83 3.96409091,7.29 L3.96409091,4.95818182 L0.957272727,4.95818182 C0.347727273,6.17318182 0,7.54772727 0,9 C0,10.4522727 0.347727273,11.8268182 0.957272727,13.0418182 L3.96409091,10.71 L3.96409091,10.71 Z"
              fill="#FBBC05"
            />
            <path
              d="M9,3.57954545 C10.3213636,3.57954545 11.5077273,4.03363636 12.4404545,4.92545455 L15.0218182,2.34409091 C13.4631818,0.891818182 11.4259091,0 9,0 C5.48181818,0 2.43818182,2.01681818 0.957272727,4.95818182 L3.96409091,7.29 C4.67181818,5.16272727 6.65590909,3.57954545 9,3.57954545 L9,3.57954545 Z"
              fill="#EA4335"
            />
          </svg>{' '}
          Sign up with Google
        </Button>
        <P fontSize="1.5rem" lineHeight="2rem">
          By creating an account, you agree to our <Link to="#">Terms of Service</Link>
        </P>
      </Form>
      <P fontSize="1.5rem" margin="0 4rem">
        Already have an account? <Link to="#">Log in</Link>
      </P>
    </Section>
  );
}

function Login() {
  return (
    <Section gridArea="login" display="grid" gridTemplate="'form'">
      <Form
        boxShadow="0 0 0 1px hsla(var(--hsl-text),0.1)"
        padding="4rem 4rem 3rem"
        borderRadius="1rem"
        hover={{
          boxShadow: '0 0 0 2px hsla(var(--hsl-text),0.1)',
        }}
      >
        <H1 fontSize="2.5rem" fontWeight="500" margin="0 0 2rem">
          Log in to your account
        </H1>
        <Input
          type="email"
          label="Your email"
          placeholder="Email..."
          error="Your email should be in the format of name@example.com"
          required
        />
        <Input
          type="password"
          label="Your password"
          placeholder="Password..."
          error="Your password has to contain at least 8 letters or numbers"
          pattern=".{8,99}"
          required
        />
        <Button type="submit" primary fontWeight="600">
          Log in
        </Button>
        <Button type="submit" position="relative">
          <svg width="18" height="18" style={{ position: 'absolute', left: '1rem' }}>
            <path
              d="M17.64,9.20454545 C17.64,8.56636364 17.5827273,7.95272727 17.4763636,7.36363636 L9,7.36363636 L9,10.845 L13.8436364,10.845 C13.635,11.97 13.0009091,12.9231818 12.0477273,13.5613636 L12.0477273,15.8195455 L14.9563636,15.8195455 C16.6581818,14.2527273 17.64,11.9454545 17.64,9.20454545 L17.64,9.20454545 Z"
              fill="#4285F4"
            />
            <path
              d="M9,18 C11.43,18 13.4672727,17.1940909 14.9563636,15.8195455 L12.0477273,13.5613636 C11.2418182,14.1013636 10.2109091,14.4204545 9,14.4204545 C6.65590909,14.4204545 4.67181818,12.8372727 3.96409091,10.71 L0.957272727,10.71 L0.957272727,13.0418182 C2.43818182,15.9831818 5.48181818,18 9,18 L9,18 Z"
              fill="#34A853"
            />
            <path
              d="M3.96409091,10.71 C3.78409091,10.17 3.68181818,9.59318182 3.68181818,9 C3.68181818,8.40681818 3.78409091,7.83 3.96409091,7.29 L3.96409091,4.95818182 L0.957272727,4.95818182 C0.347727273,6.17318182 0,7.54772727 0,9 C0,10.4522727 0.347727273,11.8268182 0.957272727,13.0418182 L3.96409091,10.71 L3.96409091,10.71 Z"
              fill="#FBBC05"
            />
            <path
              d="M9,3.57954545 C10.3213636,3.57954545 11.5077273,4.03363636 12.4404545,4.92545455 L15.0218182,2.34409091 C13.4631818,0.891818182 11.4259091,0 9,0 C5.48181818,0 2.43818182,2.01681818 0.957272727,4.95818182 L3.96409091,7.29 C4.67181818,5.16272727 6.65590909,3.57954545 9,3.57954545 L9,3.57954545 Z"
              fill="#EA4335"
            />
          </svg>{' '}
          Log in with Google
        </Button>
        <Link to="#" fontSize="1.5rem" lineHeight="2rem">
          Forgot password?
        </Link>
      </Form>
      <P fontSize="1.5rem" margin="0 4rem">
        Don't have an account? <Link to="#">Sign up</Link>
      </P>
    </Section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function CarouselPage({
  data: {
    page: {
      frontmatter: { meta, blocks },
    },
  },
}) {
  return (
    <RootContainer>
      <SEOContainer meta={meta} />
      <Main gridTemplate="'hero' 'signup'" gridGap="10vh 1rem">
        {renderBlocks(blocks)}
        <Section
          gridArea="signup"
          display="grid"
          gridTemplate="'title title' 'signup login' / 1fr 1fr"
          gridGap="0 8rem"
          alignItems="start"
        >
          <H1 gridArea="title" margin="0 0 2rem">
            001 Signup
          </H1>
          <Signup />
          <Login />
        </Section>
      </Main>
    </RootContainer>
  );
}
