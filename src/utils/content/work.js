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

const work = {
  top: {
    title:    'work.',
    subtitle: `the collection of
    case studies and past work.`,
    text: (
      <span>
        If you’re looking for something specific, you can <br />
        filter for <Link to="/work/design#below">design</Link>,{' '}
        <Link to="/work/dev#below">development</Link>,{' '}
        <Link to="/work/copy#below">copywriting</Link>, or{' '}
        <Link to="/work#below">all work</Link>. <br />
        Some projects have a full case study, some don’t.
      </span>
    ),
  },
  bottom: {
    title:    'nice.',
    subtitle: `this was all the work.
    wanna see some more?`,
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

export default work;
