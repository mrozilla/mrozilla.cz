// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { shape, string, arrayOf } from 'prop-types';

import {
  Footer, Section, H2, List, Link, P,
} from '../components';
import { parseLinks } from '../utils';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function FooterContainer({ footer }) {
  return (
    <Footer>
      <Section gridArea="contact">
        <H2
          fontSize="1.25rem"
          fontWeight="300"
          margin="0"
          textTransform="uppercase"
          letterSpacing="0.2em"
        >
          {footer.contact.title}
        </H2>
        <List>
          {footer.contact.body.map(contact => (
            <List.Item key={contact.url}>
              <Link to={contact.url} type="primary">
                {contact.text}
              </Link>
            </List.Item>
          ))}
        </List>
      </Section>
      <Section gridArea="legal">
        <H2
          fontSize="1.25rem"
          fontWeight="300"
          margin="0"
          textTransform="uppercase"
          letterSpacing="0.2em"
        >
          {footer.legal.title}
        </H2>
        <List>
          {footer.legal.body.map(legal => (
            <List.Item key={legal.url}>
              <Link to={legal.url} type="primary">
                {legal.text}
              </Link>
            </List.Item>
          ))}
        </List>
      </Section>
      <Section gridArea="colophon">
        <H2
          fontSize="1.25rem"
          fontWeight="300"
          margin="0"
          textTransform="uppercase"
          letterSpacing="0.2em"
        >
          {footer.colophon.title}
        </H2>
        <P>{parseLinks(footer.colophon.text)}</P>
      </Section>
    </Footer>
  );
}

FooterContainer.propTypes = {
  footer: shape({
    contact: shape({
      title: string,
      body:  arrayOf(
        shape({
          url:  string.isRequired,
          text: string.isRequired,
        }),
      ),
    }),
    legal: shape({
      title: string,
      body:  arrayOf(
        shape({
          url:  string.isRequired,
          text: string.isRequired,
        }),
      ),
    }),
    colophon: shape({
      title: string.isRequired,
      text:  string.isRequired,
    }),
  }).isRequired,
};
