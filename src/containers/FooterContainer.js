// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { shape, string, arrayOf } from 'prop-types';

import {
  Footer, Section, Subheading, List, Link, Text,
} from '../components';
import { parseLinks } from '../utils';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function FooterContainer({ footer }) {
  return (
    <Footer>
      <Section gridArea="contact">
        <Subheading
          fontSize="1.25rem"
          fontWeight="300"
          margin="0"
          textTransform="uppercase"
          letterSpacing="0.2em"
        >
          {footer.contact.title}
        </Subheading>
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
        <Subheading
          fontSize="1.25rem"
          fontWeight="300"
          margin="0"
          textTransform="uppercase"
          letterSpacing="0.2em"
        >
          {footer.legal.title}
        </Subheading>
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
        <Subheading
          fontSize="1.25rem"
          fontWeight="300"
          margin="0"
          textTransform="uppercase"
          letterSpacing="0.2em"
        >
          {footer.colophon.title}
        </Subheading>
        <Text>{parseLinks(footer.colophon.text)}</Text>
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
