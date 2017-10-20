// =============================================================================
// import
// =============================================================================

// react
import React from 'react';

// components
import { Footer, Link, BareLink } from '../components/Navigation';
import { Logo, Icon } from '../components/Icons';
import { Container, Flex } from '../components/Layout';
import { Wiggle } from '../components/Effects';
import Hidden from '../components/Hidden';

// content
import content from '../utils/content';

// =============================================================================
// component
// =============================================================================

export default function FooterContainer() {
  return (
    <footer>
      <Container>
        <Footer>
          <Wiggle>
            <Flex>
              {content.social.map(({ name, link }) => (
                <BareLink key={name} to={link} target="_blank">
                  <Icon name={name} marginLeft="0.5rem" />
                </BareLink>
              ))}
            </Flex>
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
