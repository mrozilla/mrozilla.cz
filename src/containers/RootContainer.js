// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { node } from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import HeaderContainer from './HeaderContainer';
import FooterContainer from './FooterContainer';
import CookieContainer from './CookieContainer';
import { Wrapper } from '~components';
import { useBarrelRoll, useInactiveTab } from '~utils';
import '~utils/style/index.css';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function RootContainer({ children }) {
  useBarrelRoll();
  useInactiveTab();

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
        </Wrapper>
      )}
    />
  );
}

RootContainer.propTypes = {
  children: node.isRequired,
};
