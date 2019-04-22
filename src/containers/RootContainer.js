// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { node } from 'prop-types';

import { MDXProvider } from '@mdx-js/react';

import HeaderContainer from './HeaderContainer';
import FooterContainer from './FooterContainer';
import CookieContainer from './CookieContainer';
import { Wrapper, Link, Pre } from '~components';
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
          header: mdx(
            fields: { sourceName: { eq: "menus" } }
            frontmatter: { title: { eq: "Header" } }
          ) {
            frontmatter {
              links {
                text
                url
              }
            }
          }
          footer: mdx(
            fields: { sourceName: { eq: "menus" } }
            frontmatter: { title: { eq: "Footer" } }
          ) {
            frontmatter {
              links {
                mdx
                type
                url
                title
                links {
                  text
                  url
                }
              }
            }
          }
        }
      `}
      render={({ header, footer }) => (
        <MDXProvider components={{ a: Link, pre: Pre }}>
          <Wrapper
            gridTemplate={`
            'header main aside'
            'header footer aside'
            / var(--width-header) var(--width-main) var(--width-aside)
          `}
            gridGap="10vh 10vw"
            padding="20vh 0"
          >
            <HeaderContainer header={header.frontmatter.links} />
            {children}
            <FooterContainer footer={footer.frontmatter.links} />
            <CookieContainer />
          </Wrapper>
        </MDXProvider>
      )}
    />
  );
}

RootContainer.propTypes = {
  children: node.isRequired,
};
