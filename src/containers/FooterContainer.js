// =============================================================================
// Import
// =============================================================================

// React
import React from 'react';

// Components
import { Footer, Link } from '../components/Navigation';
import { Logo, Icon } from '../components/Iconography';
import { Container } from '../components/Layout';
import { Wiggle, Reveal } from '../components/Effects';

// =============================================================================
// Component
// =============================================================================

export default function FooterContainer() {
  return (
    <footer>
      <Container>
        <Footer>
          <Wiggle>
            <Link to="//twitter.com/mrozilla" target="_blank" isBare>
              <Icon name="twitter" isPadded />
            </Link>
            <Link to="//medium.com/mrozilla" target="_blank" isBare>
              <Icon name="medium" isPadded />
            </Link>
            <Link to="//github.com/mrozilla" target="_blank" isBare>
              <Icon name="github" isPadded />
            </Link>
            <Link to="//linkedin.com/in/mrozilla" target="_blank" isBare>
              <Icon name="linkedin" isPadded />
            </Link>
            <Link to="mailto:jan@mrozilla.cz" isBare>
              <Icon name="mail" isPadded />
            </Link>
          </Wiggle>
          <Wiggle>
            <Reveal>
              Made with{' '}
              <span role="img" aria-label="beer">
                🍺
              </span>. Here's some <Link to="/legal">legal stuff</Link>.
            </Reveal>
          </Wiggle>
          <Link to="/" isBare>
            <Wiggle>
              <Logo />
            </Wiggle>
          </Link>
        </Footer>
      </Container>
    </footer>
  );
}
