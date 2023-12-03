import React from "react";

import { ColourThemeContainer } from "./ColourThemeContainer";
import { Heading, Link } from "~components";

import * as styles from "./FooterContainer.module.scss";

const sections = [
  {
    title: "Contact",
    links: [
      { text: "Twitter", url: "https://twitter.com/mrozilla" },
      { text: "Github", url: "https://github.com/mrozilla" },
      { text: "Codepen", url: "https://codepen.com/mrozilla" },
      { text: "Email", url: "mailto:jan@mrozilla.cz" },
    ],
  },
  {
    title: "Legal",
    links: [
      { text: "Terms & conditions", url: "/legal/terms" },
      { text: "Privacy policy", url: "/legal/privacy" },
      { text: "Imprint", url: "/legal/imprint" },
    ],
  },
];

export const FooterContainer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <section>
        <Heading tag="h2">Colour theme</Heading>
        <ColourThemeContainer />
      </section>
      {sections.map((section) => (
        <section key={section.title}>
          <Heading tag="h2">{section.title}</Heading>
          <ul className={styles.list}>
            {section.links.map((link) => (
              <li key={link.url}>
                <Link to={link.url} look="tertiary">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
      <section>
        <Heading tag="h2">Colophon</Heading>
        <p>
          This site is built using <Link to="https://github.com/gatsbyjs/gatsby">Gatsby</Link>,{" "}
          <Link to="https://github.com/facebook/react">React</Link>,{" "}
          <Link to="https://github.com/microsoft/typescript">TypeScript</Link>,{" "}
          <Link to="https://github.com/css-modules/css-modules">CSS&nbsp;modules</Link>, and is
          hosted on <Link to="https://netlify.com/">Netlify</Link>
        </p>
      </section>
    </footer>
  );
};
