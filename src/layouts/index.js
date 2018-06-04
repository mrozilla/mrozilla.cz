// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import './index.css';

import {
  Wrapper,
  HeaderBlock,
  FooterBlock,
  TextBackgroundBlock,
} from '../components';

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
      <HeaderBlock header={header} />
      {children()}
      <FooterBlock footer={footer} />
      <TextBackgroundBlock symbol="⌇" />
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
