// =============================================================================
// Import
// =============================================================================

// React
import React from 'react';

// Components
import { Link } from '../../components/Navigation/Links';

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
      I&apos;ve managed{' '}
      <Link to="https://esn.org" target="_blank">
        big creative teams
      </Link>{' '}
      (up to 100 people),{' '}
      <Link to="https://movineurope.esn.org" target="_blank">
        small product teams
      </Link>, and also have been at the very bottom of an organisation as a
      junior developer. I&apos;m a{' '}
      <Link to="https://himoment.com" target="_blank">
        startup co-founder
      </Link>. I do a lot of volunteering and some{' '}
      <Link to="https://github.com/mrozilla" target="_blank">
        open-source work
      </Link>. I&apos;m a{' '}
      <Link
        to="https://medium.com/mrozilla/speaking-keynotes-and-workshops-throughout-the-years-cc609424028"
        target="_blank"
      >
        keynote speaker and a workshop faciliator
      </Link>.
    </span>,
    <span>
      I design in Adobe Photoshop, Adobe Illustrator, Adobe XD, Adobe InDesign,
      Adobe Lightroom, Adobe Premiere, and Adobe After Effects.
    </span>,
    <span>
      I code in Javascript:{' '}
      <Link to="https://github.com/facebook/react" target="_blank">
        React
      </Link>,{' '}
      <Link to="https://github.com/reactjs/redux" target="_blank">
        Redux
      </Link>,{' '}
      <Link
        to="https://github.com/styled-components/styled-components"
        target="_blank"
      >
        styled-components
      </Link>{' '}
      (css-in-js ftw),{' '}
      <Link to="https://github.com/nodejs/node" target="_blank">
        Node
      </Link>{' '}
      &{' '}
      <Link to="https://github.com/expressjs/express" target="_blank">
        Express
      </Link>. I usually edit that code in{' '}
      <Link to="https://github.com/facebook/nuclide" target="_blank">
        Nuclide
      </Link>, run it through{' '}
      <Link to="https://github.com/prettier/prettier" target="_blank">
        Prettier
      </Link>{' '}
      and{' '}
      <Link to="http://www.syntevo.com/smartgit/" target="_blank">
        SmartGit
      </Link>, and post it on{' '}
      <Link to="https://github.com/mrozilla/" target="_blank">
        Github
      </Link>.
    </span>,
    <span>
      I happen to have{' '}
      <Link
        to="https://www.ntu.ac.uk/study-and-courses/courses/find-your-course/business/pg/2017-18/european-business-and-finance"
        target="_blank"
      >
        M.Sc.
      </Link>{' '}
      and{' '}
      <Link
        to="https://www.fbm.vutbr.cz/en/applicants/european-business-and-finance"
        target="_blank"
      >
        Ing.
      </Link>{' '}
      degrees in European Business and Finance for some reason.
    </span>,
    <span>
      You can reach to me on{' '}
      <Link to="https://twitter.com/mrozilla" target="_blank">
        Twitter
      </Link>,{' '}
      <Link to="https://medium.com/mrozilla" target="_blank">
        Medium
      </Link>,{' '}
      <Link to="https://github.com/mrozilla" target="_blank">
        Github
      </Link>,{' '}
      <Link to="https://linkedin.com/in/mrozilla" target="_blank">
        Linkedin
      </Link>, or just <Link to="mailto:jan@mrozilla.cz">
        send me an email
      </Link>. That&apos;s probably the best chance to get a response.
    </span>,
  ],
};

export default about;
