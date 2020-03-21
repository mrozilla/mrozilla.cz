// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
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

  const { header, footer } = useStaticQuery(graphql`
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
  `);

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
        <HeaderContainer header={header.frontmatter.links} />
        {children}
        <FooterContainer footer={footer.frontmatter.links} />
        <CookieContainer />
      </View>
    </MDXProvider>
  );
}

RootContainer.propTypes = {
  children: node.isRequired,
};
