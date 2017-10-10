// =============================================================================
// Import
// =============================================================================

// React
import React from 'react';

// Components
import { Link } from '../../../components/Navigation/Links';

// =============================================================================
// Content
// =============================================================================

const home = {
  top: {
    title:    'mrozilla.',
    subtitle: `the online home of
    a one-man digital studio.`,
    text: (
      <span>
        Always busy building new digital experiences, <br />
        mixing together design, development, and copywriting. <br />
        Have a look at some <Link to="#below">case studies ⇣</Link> or all the{' '}
        <Link to="/work">work →</Link>
      </span>
    ),
  },
  bottom: {
    title:    'cool.',
    subtitle: `these were the highlights.
    care for some more?`,
    text: (
      <span>
        There’s a{' '}
        <Link to="https://medium.com/mrozilla/" target="_blank">
          blog to read
        </Link>{' '}
        if you like reading. <br />
        I also do a lot of <Link to="/lab">experiments →</Link> if you’re into
        that stuff. <br />
        Or send me a message if you’d like to build something together. <br />
        It’s <Link to="mailto:jan@mrozilla.cz">jan@mrozilla.cz</Link>
      </span>
    ),
  },
};

export default home;
