// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import './index.css';

import { Wrapper, HeaderBlock, FooterBlock } from '../components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function Layout({
  data: { menusJson: { header, footer } },
  children,
}) {
  return (
    <Wrapper>
      <HeaderBlock header={header} />
      {children()}
      <FooterBlock footer={footer} />
    </Wrapper>
  );
}

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
