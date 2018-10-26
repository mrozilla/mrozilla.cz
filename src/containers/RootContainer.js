// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { node } from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import { Wrapper } from '../components';
import HeaderContainer from './HeaderContainer';
import FooterContainer from './FooterContainer';
import CookieContainer from './CookieContainer';
import InactiveTabContainer from './InactiveTabContainer';
import BarrelRollContainer from './BarrelRollContainer';

import '../utils/style/index.css';

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
        <Wrapper
          gridTemplate={`
            'header main aside'
            'header footer aside'
            / var(--width-header) var(--width-main) var(--width-aside)
          `}
          gridGap="10vh 10vw"
          padding="20vh 0"
        >
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
