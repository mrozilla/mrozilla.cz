// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import RehypeReact from 'rehype-react';
import { Link } from '../components/navigation';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default new RehypeReact({
  createElement: React.createElement,
  components:    {
    a: Link,
    // blockquote: BlockQuoteContainer, // TODO add tweetable quotes
  },
}).Compiler;
