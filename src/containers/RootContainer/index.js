// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { node } from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import { Wrapper } from '../../components';
import {
  HeaderContainer,
  FooterContainer,
  CookieContainer,
  InactiveTabContainer,
  BarrelRollContainer,
} from '..';

import './index.css';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function RootContainer({ children }) {
  return (
    <StaticQuery
      query={graphql`
        {
          menus: menusJson {
            header {
              url
              text
            }
            footer {
              contact {
                title
                body {
                  url
                  text
                }
              }
              legal {
                title
                body {
                  url
                  text
                }
              }
              colophon {
                title
                text
              }
            }
          }
        }
      `}
      render={({ menus: { header, footer } }) => (
        <Wrapper>
          <HeaderContainer header={header} />
          {children}
          <FooterContainer footer={footer} />
          <CookieContainer />
          <InactiveTabContainer />
          <BarrelRollContainer />
        </Wrapper>
      )}
    />
  );
}

RootContainer.propTypes = {
  children: node.isRequired,
};
