import React from "react";

import { Header, Link, NavList } from "~components";

import * as styles from "./HeaderContainer.module.scss";

const items = [
  { text: "Work", url: "/#work" },
  { text: "Lab", url: "/lab/" },
  { text: "Blog", url: "/blog/" },
  { text: "About", url: "/about/" },
  { text: "Contact", url: "/contact/" },
  // { text: "Collaborators", url: "/collabs/" },
];

export const HeaderContainer: React.FC = () => {
  return (
    <Header>
      <Link to="/" look="tertiary" className={styles.home}>
        Mrozilla
      </Link>
      <nav>
        <NavList>
          {items.map((item) => (
            <li key={item.url}>
              <Link to={item.url} look="tertiary">
                {item.text}
              </Link>
            </li>
          ))}
        </NavList>
      </nav>
    </Header>
  );
};
