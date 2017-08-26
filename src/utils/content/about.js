// =============================================================================
// Import
// =============================================================================

// React
import React from 'react';

// Components
import { Link } from '../../components/Navigation/Link';

// Media
import cv from './documents/CV-Jan_Hruby.pdf';

// =============================================================================
// Content
// =============================================================================

const about = {
  top: {
    title:    'about',
    subtitle: 'the details, historical data, and some other information.',
    text:     (
      <span>
        My name is Jan. I&apos;m originally from <s>Czechia</s> the Czech
        Republic, lived in Finland and the United Kingdom, and currently
        residing in Vienna, Austria. I&apos;ve got{' '}
        <Link to={cv} target="_blank">
          a CV
        </Link>{' '}
        or you can read more <Link to="#below">below ⇣</Link>.
      </span>
    ),
  },
  text: [
    <span>
      I build digital products, mainly web & native applications. Everything
      from concepts & product exploration, through UX, UI, visual & brand
      design, all the way to software development. I&apos;ve done some{' '}
      <Link to="/work">work →</Link> in the past, and will probably do some{' '}
      <Link to="/lab">more →</Link>.
    </span>,
    <span>
      I&apos;ve managed <Link to="https://esn.org">big creative teams</Link> (up
      to 100 people),{' '}
      <Link to="https://movineurope.esn.org">small product teams</Link>, and
      also have been at the very bottom of an organisation as a junior
      developer. I&apos;m a{' '}
      <Link to="https://himoment.com">startup co-founder</Link>. I do a lot of
      volunteering and some{' '}
      <Link to="https://github.com/mrozilla">open-source work</Link>. I&apos;m a{' '}
      <Link to="https://medium.com/mrozilla/speaking-keynotes-and-workshops-throughout-the-years-cc609424028">
        keynote speaker and a workshop faciliator
      </Link>.
    </span>,
    <span>
      I design in Adobe Photoshop, Adobe Illustrator, Adobe XD, Adobe InDesign,
      Adobe Lightroom, Adobe Premiere, and Adobe After Effects.
    </span>,
    <span>
      I code in Javascript:{' '}
      <Link to="https://github.com/facebook/react">React</Link>,{' '}
      <Link to="https://github.com/reactjs/redux">Redux</Link>,{' '}
      <Link to="https://github.com/paypal/glamorous">Glamorous</Link> (css-in-js
      ftw), <Link to="https://github.com/nodejs/node">Node</Link> &{' '}
      <Link to="https://github.com/nodejs/node">Express</Link>. I usually edit
      that code in <Link to="https://github.com/facebook/nuclide">
        Nuclide
      </Link>, run it through{' '}
      <Link to="https://github.com/prettier/prettier">Prettier</Link> and{' '}
      <Link to="http://www.syntevo.com/smartgit/">SmartGit</Link>, and post it
      on <Link to="https://github.com/mrozilla/">Github</Link>.
    </span>,
    <span>
      I happen to have{' '}
      <Link to="https://www.ntu.ac.uk/study-and-courses/courses/find-your-course/business/pg/2017-18/european-business-and-finance">
        M.Sc.
      </Link>{' '}
      and{' '}
      <Link to="https://www.fbm.vutbr.cz/en/applicants/european-business-and-finance">
        Ing.
      </Link>{' '}
      degrees in European Business and Finance for some reason.
    </span>,
    <span>
      You can reach to me on{' '}
      <Link to="https://twitter.com/mrozilla">Twitter</Link>,{' '}
      <Link to="https://medium.com/mrozilla">Medium</Link>,{' '}
      <Link to="https://github.com/mrozilla">Github</Link>,{' '}
      <Link to="https://linkedin.com/in/mrozilla">Linkedin</Link>, or just{' '}
      <Link to="mailto:jan@mrozilla.cz">send me an email</Link>. That&apos;s
      probably the best chance to get a response.
    </span>,
  ],
};

export default about;
