// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';

import {
  Footer,
  Section,
  Subheading,
  List,
  Link,
  Text,
} from '../../components';
import { parseLinks } from '../../utils';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function FooterBlock({ footer }) {
  return (
    <Footer
      gridTemplateColumns="repeat(3, 1fr)"
      gridTemplateAreas="'contact legal colophon'"
    >
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
            <List.Item>
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
            <List.Item>
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
