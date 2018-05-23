// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { Link } from '../components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default (str) => {
  if (typeof str === 'string') {
    const re = /\[(.*?\]\(.*?)\)/;
    return str.split(re).map((item) => {
      const [text, href] = item.split('](');
      if (href) {
        return (
          <Link key={`${href}${text}`} to={href} type="primary">
            {text}
          </Link>
        );
      }
      return item;
    });
  }
  return str;
};
