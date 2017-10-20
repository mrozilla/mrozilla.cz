// =============================================================================
// Import
// =============================================================================

// React
import React from 'react';

// Components
import { Footer, Link, BareLink } from '../components/Navigation';
import { Logo, Icon } from '../components/Icons';
import { Container } from '../components/Layout';
import { Wiggle } from '../components/Effects';
import Hidden from '../components/Hidden';

// =============================================================================
// Component
// =============================================================================

export default function FooterContainer() {
  return (
    <footer>
      <Container>
        <Footer>
          <Wiggle>
            <BareLink to="//twitter.com/mrozilla" target="_blank">
              <Icon name="twitter" />
            </BareLink>
            <BareLink to="//medium.com/mrozilla" target="_blank">
              <Icon name="medium" marginLeft="0.5rem" />
            </BareLink>
            <BareLink to="//github.com/mrozilla" target="_blank">
              <Icon name="github" marginLeft="0.5rem" />
            </BareLink>
            <BareLink to="//codepen.com/mrozilla" target="_blank">
              <Icon name="codepen" marginLeft="0.5rem" />
            </BareLink>
            <BareLink to="//linkedin.com/in/mrozilla" target="_blank">
              <Icon name="linkedin" marginLeft="0.5rem" />
            </BareLink>
            <BareLink to="mailto:jan@mrozilla.cz">
              <Icon name="mail" marginLeft="0.5rem" />
            </BareLink>
          </Wiggle>
          <Wiggle>
            Made with{' '}
            <span role="img" aria-label="beer">
              🍺
            </span>. Here&apos;s some <Link to="/legal">legal stuff</Link>.
          </Wiggle>
          <Hidden from="xs" to="lg">
            <Wiggle>
              <BareLink to="/">
                <Logo />
              </BareLink>
            </Wiggle>
          </Hidden>
        </Footer>
      </Container>
    </footer>
  );
}
