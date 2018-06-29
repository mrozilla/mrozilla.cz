// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { arrayOf, shape, string } from 'prop-types';

import {
  Header, Heading, Link, Nav,
} from '../components';
import InactiveTabContainer from './InactiveTabContainer';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function HeaderContainer({ header }) {
  return (
    <Header>
      <Heading fontSize="3rem" margin={{ xs: '0', md: '0 0 4rem 0' }}>
        <Link to="/">mrozilla</Link>
      </Heading>
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
      <InactiveTabContainer />
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
