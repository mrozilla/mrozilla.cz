// =============================================================================
// Import
// =============================================================================

// React
import React from 'react';

// Components
import { Footer } from '../components/Navigation';
import { Logo, Icon } from '../components/Iconography';
import { Container } from '../components/Layout';
import { Link } from '../components/Navigation';
import { Wiggle, Reveal } from '../components/Effects';

// =============================================================================
// Component
// =============================================================================

export default function FooterContainer() {
  return (
    <Container>
      <Footer>
        <Wiggle>
          <Link to="//twitter.com/mrozilla" bare>
            <Icon name="twitter" isPadded />
          </Link>
          <Link to="//medium.com/mrozilla" bare>
            <Icon name="medium" isPadded />
          </Link>
          <Link to="//github.com/mrozilla" bare>
            <Icon name="github" isPadded />
          </Link>
          <Link to="//linkedin.com/in/mrozilla" bare>
            <Icon name="linkedin" isPadded />
          </Link>
          <Link to="mailto:jan@mrozilla.cz" bare>
            <Icon name="mail" isPadded />
          </Link>
        </Wiggle>
        <Wiggle>
          <Reveal>Made with <span role="img" aria-label="beer">🍺</span>. Here's some <Link to="/legal">legal stuff</Link>.</Reveal>
        </Wiggle>
        <Link to="/" bare>
          <Wiggle>
            <Logo />
          </Wiggle>
        </Link>
      </Footer>
    </Container>
  );
}