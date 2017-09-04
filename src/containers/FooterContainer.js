// =============================================================================
// Import
// =============================================================================

// React
import React from 'react';

// Components
import { Footer, Link } from '../components/Navigation';
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
            <Link to="//twitter.com/mrozilla" target="_blank" isBare>
              <Icon name="twitter" />
            </Link>
            <Link to="//medium.com/mrozilla" target="_blank" isBare>
              <Icon name="medium" marginLeft="0.25rem" />
            </Link>
            <Link to="//github.com/mrozilla" target="_blank" isBare>
              <Icon name="github" marginLeft="0.25rem" />
            </Link>
            <Link to="//codepen.com/mrozilla" target="_blank" isBare>
              <Icon name="codepen" marginLeft="0.25rem" />
            </Link>
            <Link to="//linkedin.com/in/mrozilla" target="_blank" isBare>
              <Icon name="linkedin" marginLeft="0.25rem" />
            </Link>
            <Link to="mailto:jan@mrozilla.cz" isBare>
              <Icon name="mail" marginLeft="0.25rem" />
            </Link>
          </Wiggle>
          <Wiggle>
            Made with{' '}
            <span role="img" aria-label="beer">
              🍺
            </span>. Here&apos;s some <Link to="/legal">legal stuff</Link>.
          </Wiggle>
          <Hidden from="xs" to="lg">
            <Wiggle>
              <Link to="/" isBare>
                <Logo />
              </Link>
            </Wiggle>
          </Hidden>
        </Footer>
      </Container>
    </footer>
  );
}
