// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { arrayOf, shape, string } from 'prop-types';

import {
  Header, H1, Link, Nav,
} from '../components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function HeaderContainer({ header }) {
  return (
    <Header>
      <H1 fontSize="3rem" margin={{ xs: '0', md: '0 0 4rem 0' }}>
        <Link to="/" type="primary">
          mrozilla
        </Link>
      </H1>
      <Nav>
        <Nav.List>
          {header.map(item => (
            <Nav.List.Item key={item.url}>
              <Link to={item.url} type="primary">
                {item.text}
              </Link>
            </Nav.List.Item>
          ))}
        </Nav.List>
      </Nav>
    </Header>
  );
}

HeaderContainer.propTypes = {
  header: arrayOf(
    shape({
      url:  string.isRequired,
      text: string.isRequired,
    }),
  ).isRequired,
};
