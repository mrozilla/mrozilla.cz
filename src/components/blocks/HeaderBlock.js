// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';

import { Header, Heading, Link, Nav } from '../../components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function HeaderBlock({ header }) {
  return (
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
  );
}
