// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { arrayOf, shape, string } from 'prop-types';

import { Header, H1, Link, Nav } from '~components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function HeaderContainer({ header }) {
  return (
    <Header>
      <H1
        css={`
          font-size: 3rem;
          margin: 0;

          @media screen and (min-width: 900px) {
            margin: 0 0 4rem;
          }
        `}
      >
        <Link to="/" look="tertiary">
          Mrozilla
        </Link>
      </H1>
      <Nav>
        <Nav.List>
          {header.map(item => (
            <Nav.List.Item key={item.url}>
              <Link to={item.url} look="tertiary">
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
