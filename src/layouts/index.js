// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import './index.css';

import { Wrapper, Header, Heading, Link, Nav } from '../components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function Layout({ data: { menusJson: { header } }, children }) {
  return (
    <Wrapper>
      <Header>
        <Heading>
          <Link to="/">mrozilla</Link>
        </Heading>
        <Nav>
          <Nav.List>
            {header.map(item => (
              <Nav.List.Item>
                <Link to={item.url}>{item.text}</Link>
              </Nav.List.Item>
            ))}
          </Nav.List>
        </Nav>
      </Header>
      {children()}
    </Wrapper>
  );
}

export const query = graphql`
  query Menus {
    menusJson {
      header {
        url
        text
      }
    }
  }
`;
