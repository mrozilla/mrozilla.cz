// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { node } from 'prop-types';

import { MDXProvider } from '@mdx-js/react';

import HeaderContainer from './HeaderContainer';
import FooterContainer from './FooterContainer';
import CookieContainer from './CookieContainer';
import { View, Link, Pre } from '~components';
import { useBarrelRoll, useInactiveTab } from '~utils';
import '~utils/style/index.css';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function RootContainer({ children }) {
  useBarrelRoll();
  useInactiveTab();

  return (
    <MDXProvider components={{ a: (props) => <Link look="secondary" {...props} />, pre: Pre }}>
      <View
        css={`
          display: grid;
          grid-template:
            'header main aside'
            'header footer aside'
            / var(--width-header) var(--width-main) var(--width-aside);
          grid-gap: 10vh 10vw;

          padding: 10vh 0;

          @media screen and (min-width: 600px) {
            padding: 20vh 0;
          }
        `}
      >
        <HeaderContainer />
        {children}
        <FooterContainer />
        <CookieContainer />
      </View>
    </MDXProvider>
  );
}

RootContainer.propTypes = {
  children: node.isRequired,
};
