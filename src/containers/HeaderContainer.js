// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { Header, H1, Link, Nav } from '~components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function HeaderContainer() {
  const { header } = useStaticQuery(graphql`
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
    }
  `);

  return (
    <Header>
      <H1
        css={`
          font-size: 3rem;
          margin: 0;

          @media screen and (min-width: 900px) {
            margin: 0 0 4rem;
          }
        `}
      >
        <Link to="/" look="tertiary">
          Mrozilla
        </Link>
      </H1>
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
