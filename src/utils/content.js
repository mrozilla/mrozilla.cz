// =============================================================================
// Import
// =============================================================================

// React
import React from 'react';

// Components
import { Link } from '../components/Navigation/Link';

// =============================================================================
// Content
// =============================================================================

const content = {

  // =============================================================================
  // Pages
  // =============================================================================

  pages: {
    home: {
      top:    {
        title:    'mrozilla.',
        subtitle: 'the online home of \n ' +
                  'a one-man digital studio.',
        text:     <span>
                    Always busy building new digital experiences, <br />
                    mixing together design, development, and copywriting. <br />
                    Have a look at some <Link to="#studies">case studies ⇣</Link> or all the <Link
                    to="/work">work ⟶</Link>
                  </span>,
      },
      bottom: {
        title:    'cool.',
        subtitle: 'these were the highlights. \n' +
                  'care for some more?',
        text:     <span>
                    There’s a <Link to="https://medium.com/mrozilla/">blog to read</Link> if you like reading. <br />
                    I also do a lot of <Link to="/lab">experiments ⟶</Link> if you’re into that stuff. <br />
                    Or send me a message if you’d like to build something together. <br />
                    It’s <Link to="mailto:jan@mrozilla.cz">jan@mrozilla.cz</Link>
                  </span>,
      }
    },
    work: {
      top:    {
        title:    'work.',
        subtitle: 'the collection of \n ' +
                  'case studies and past work.',
        text:     <span>
                    If you’re looking for something specific, you can <br />
                    filter for <Link to="/work/design">design</Link>, <Link to="/work/dev">development</Link>, <Link to="/work/copy">copywriting</Link>, or <Link to="/work">all work</Link>. <br />
                    Some projects have a full case study, some don’t.
                  </span>,
      },
      bottom: {
        title:    'nice.',
        subtitle: 'this was all the work. \n ' +
                  'wanna see some more?',
        text:     <span>
                    There’s a <Link to="https://medium.com/mrozilla/">blog to read</Link> if you like reading. <br />
                    I also do a lot of <Link to="/lab">experiments ⟶</Link> if you’re into that stuff. <br />
                    Or send me a message if you’d like to build something together. <br />
                    It’s <Link to="mailto:jan@mrozilla.cz">jan@mrozilla.cz</Link>
                  </span>,
      }
    },
    lab:  {
      top:    {
        title:    'lab.',
        subtitle: 'the random selection of \n' +
                  'silly experiments.',
        text:     <span>
                    Proof-of-concepts, little tools, silly fooling around. <br />
                    Trying to push the limits of the canvas (figuratively & literally). <br />
                    Full-fledged projects <Link to="#projects">below ⇣</Link>, snippets on <Link to="https://codepen.io/mrozilla">codepen</Link>.
                  </span>,
      },
      bottom: {
        title:    'wicked.',
        subtitle: 'that was a lot of fun. \n' +
                  'curious to see more?',
        text:     <span>
                    There’s a <Link to="https://medium.com/mrozilla/">blog to read</Link> if you like reading. <br />
                    Have a look at the <Link to="/lab">commercial work ⟶</Link> if you’re into that stuff. <br />
                    Or send me a message if you’d like to build something together. <br />
                    It’s <Link to="mailto:jan@mrozilla.cz">jan@mrozilla.cz</Link>
                  </span>,
      },
    }
  },

  // =============================================================================
  // Works
  // =============================================================================

  works: [

    // =============================================================================
    // Case studies
    // =============================================================================

    {
      type:    ['case', 'design', 'dev', 'copy'],
      link:    'https://medium.com/mrozilla',
      title:   'hiMoment',
      tagline: 'your digital happiness guru',
      tags:    ['branding', 'design', 'website', 'app', 'copywriting'],
      image:   '',
    },
    {
      type:    ['case', 'design', 'dev', 'copy'],
      link:    'https://medium.com/mrozilla',
      title:   'Mov\'in Europe',
      tagline: 'mobility is a lifestyle',
      tags:    ['branding', 'design', 'website', 'copywriting'],
      image:   '',
    },
    {
      type:    ['case', 'design', 'dev', 'copy'],
      link:    'https://medium.com/mrozilla',
      title:   'Erasmus Student Network',
      tagline: 'unity in diversity, diversity in unity',
      tags:    ['design', 'website', 'copywriting'],
      image:   '',
    },
    {
      type:    ['case', 'design', 'dev'],
      link:    'https://medium.com/mrozilla',
      title:   'Vodafone Idea of the Year',
      tagline: 'we\'re helping ideas grow',
      tags:    ['design', 'website'],
      image:   '',
    },

    // =============================================================================
    // Other work
    // =============================================================================

    {
      type:    ['dev'],
      link:    'http://pioneers.io/piobay/login',
      title:   'Pioneers.io',
      tagline: 'internal system for organising startups',
      tags:    ['design', 'website'],
      image:   '',
    },
    // {
    //   type:    ['dev'],
    //   link:    'http://dictionary.esn.org',
    //   title:   'ESNdictionary',
    //   tagline: 'search system for an organisation\'s slang',
    //   tags:    ['concept', 'website'],
    //   image:   '',
    // },
    // {
    //   type:    ['dev'],
    //   link:    'http://committees.esn.org',
    //   title:   'ESN Committee Services Portal',
    //   tagline: 'search system for services within an organisation',
    //   tags:    ['concept', 'website'],
    //   image:   '',
    // },
    // {
    //   type:    ['design'],
    //   link:    'http://socialerasmus.esn.org',
    //   title:   'SocialErasmus',
    //   tagline: 'leave your mark!',
    //   tags:    ['art direction', 'design'],
    //   image:   '',
    // },
    // {
    //   type:    ['design'],
    //   link:    'http://eduk8.esn.org',
    //   title:   'Eduk8',
    //   tagline: 'endless possibilities',
    //   tags:    ['art direction', 'design'],
    //   image:   '',
    // },
    // {
    //   type:    ['design'],
    //   link:    'http://esn.org/get-engaged',
    //   title:   'Get engaged!',
    //   tagline: 'Improving internal communication in NGOs',
    //   tags:    ['design'],
    //   image:   '',
    // },
    {
      type:    ['design'],
      link:    'http://leadspicker.com',
      title:   'Leadspicker',
      tagline: 'digital scouting department',
      tags:    ['design'],
      image:   '',
    },
    {
      type:    ['design', 'dev', 'copy'],
      link:    'http://meatarians.org',
      title:   'Meatarians',
      tagline: 'loving meat is not a crime',
      tags:    ['concept', 'branding', 'design', 'website', 'copywriting'],
      image:   '',
    },

    // =============================================================================
    // Lab
    // =============================================================================

    {
      type:  ['lab'],
      link:  '/lab/colours',
      title: 'css colours',
      tagline: 'why web colours are named the way they are',
      tags:  ['concept', 'website'],
      image: '',
    },
    {
      type:  ['lab'],
      link:  '/lab/writest',
      title: 'writest',
      tagline: 'get all the numbers about your letters',
      image: '',
      tags:  ['concept', 'website'],
    },
    {
      type:  ['lab'],
      link:  '/lab/passworld',
      title: 'passworld',
      tagline: 'your password must contain at least one ritual sacrifice',
      image: '',
      tags:  ['concept', 'website'],
    },
    {
      type:  ['lab'],
      link:  '/lab/count-on-me',
      title: 'count on me',
      tagline: 'a tool you can count on when you need to count stuff',
      image: '',
      tags:  ['concept', 'website'],
    },
    {
      type:  ['lab'],
      link:  '/lab/all-cases',
      title: 'in any case...',
      tagline: 'Title Case, url-case, camelCase, all the cases',
      image: '',
      tags:  ['concept', 'website'],
    },
    {
      type:  ['lab'],
      link:  'https://rawgit.com/mrozilla/esn-quiz/master/index.html',
      title: 'ESNquiz',
      tagline: 'A simple quiz implementation',
      image: '',
      tags:  ['concept', 'website'],
    },
  ],
};

// =============================================================================
// Export
// =============================================================================

export default content;
