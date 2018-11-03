// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { shape, string, arrayOf } from 'prop-types';

import {
  Footer, Section, H2, Ul, Li, Link, P,
} from '../components';
import ColourThemeContainer from './ColourThemeContainer';
import { parseLinks } from '../utils';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function FooterContainer({ footer }) {
  return (
    <Footer
      gridGap="2rem 1rem"
      gridTemplate={{
        xs: `
          'contact'
          'legal'
          'theme'
          'colophon'
          / 1fr;
        `,
        lg: `
          'theme contact legal colophon'
          / 1fr 1fr 1fr 1fr
        `,
      }}
    >
      <Section gridArea="contact">
        <H2>{footer.contact.title}</H2>
        <Ul>
          {footer.contact.body.map(contact => (
            <Li key={contact.url}>
              <Link to={contact.url} type="primary">
                {contact.text}
              </Link>
            </Li>
          ))}
        </Ul>
      </Section>
      <Section gridArea="legal">
        <H2>{footer.legal.title}</H2>
        <Ul>
          {footer.legal.body.map(legal => (
            <Li key={legal.url}>
              <Link to={legal.url} type="primary">
                {legal.text}
              </Link>
            </Li>
          ))}
        </Ul>
      </Section>
      <Section>
        <H2>Colour theme</H2>
        <ColourThemeContainer />
      </Section>
      <Section gridArea="colophon">
        <H2>{footer.colophon.title}</H2>
        <P>{parseLinks(footer.colophon.text, { type: 'secondary' })}</P>
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
