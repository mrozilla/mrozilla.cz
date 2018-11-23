// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';

import { Link } from '~components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default (str, { type } = {}) => {
  if (typeof str === 'string') {
    const re = /\[(.*?\]\(.*?)\)/;
    return str.split(re).map((item) => {
      const [text, href] = item.split('](');
      if (href) {
        return (
          <Link key={`${href}${text}`} to={href} type={type}>
            {text}
          </Link>
        );
      }
      return item;
    });
  }
  return str;
};
