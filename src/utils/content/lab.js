// =============================================================================
// Import
// =============================================================================

// React
import React from 'react';

// Components
import { Link } from '../../components/Navigation/Link';

// =============================================================================
// Content
// =============================================================================

const lab = {
  top: {
    title:    'lab.',
    subtitle: `the random selection of
    silly, silly experiments`,
    text: (
      <span>
        Proof-of-concepts, little tools, silly fooling around. <br />
        Pushing the limits of the canvas (figuratively & literally). <br />
        Full-fledged projects <Link to="#below">below ⇣</Link>, snippets on{' '}
        <Link to="https://codepen.io/mrozilla">codepen</Link>.
      </span>
    ),
  },
  bottom: {
    title:    'wicked.',
    subtitle: `that was a lot of fun.
    curious to see more?`,
    text: (
      <span>
        There’s a{' '}
        <Link to="https://medium.com/mrozilla/" target="_blank">
          blog to read
        </Link>{' '}
        if you like reading. <br />
        Have a look at the <Link to="/work">commercial work →</Link> if you’re
        into that stuff. <br />
        Or send me a message if you’d like to build something together. <br />
        It’s <Link to="mailto:jan@mrozilla.cz">jan@mrozilla.cz</Link>
      </span>
    ),
  },
};

export default lab;
