// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { func } from 'prop-types';
import './index.css';

import { Wrapper } from '../components';
import {
  HeaderContainer,
  FooterContainer,
  CookieContainer,
  TextBackgroundContainer,
} from '../containers';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function Layout({
  data: {
    menusJson: { header, footer },
  },
  children,
}) {
  return (
    <Wrapper>
      <HeaderContainer header={header} />
      {children()}
      <FooterContainer footer={footer} />
      <CookieContainer />
      <TextBackgroundContainer symbol="⌇" />
    </Wrapper>
  );
}

Layout.propTypes = {
  children: func.isRequired,
};

export const query = graphql`
  query Menus {
    menusJson {
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
`;
