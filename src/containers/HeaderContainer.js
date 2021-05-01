// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { Header, Link, Nav } from '~components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function HeaderContainer() {
  const { header } = useStaticQuery(graphql`
    {
      header: mdx(
        fileAbsolutePath: { regex: "/cms/menus/" }
        frontmatter: { title: { eq: "Header" } }
      ) {
        frontmatter {
          links {
            text
            url
          }
        }
      }
    }
  `);

  return (
    <Header>
      <Link
        to="/"
        look="tertiary"
        css={`
          display: block;
          font-size: 3rem;
          margin: 0;

          @media screen and (min-width: 900px) {
            margin: 0 0 4rem;
          }
        `}
      >
        Mrozilla
      </Link>
      <Nav>
        <Nav.List>
          {header.frontmatter.links.map((item) => (
            <Nav.List.Item key={item.url}>
              <Link to={item.url} look="tertiary">
                {item.text}
              </Link>
            </Nav.List.Item>
          ))}
        </Nav.List>
      </Nav>
    </Header>
  );
}
