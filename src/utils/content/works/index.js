// =============================================================================
// Import
// =============================================================================

// Media
import himoment from '../images/work-himoment.jpg';
import movinEurope from '../images/work-movin_europe.jpg';
import esn from '../images/work-esn.jpg';
import napadRoku from '../images/work-napad_roku.jpg';
import pioneers from '../images/work-pioneers.jpg';
import leadspicker from '../images/work-leadspicker.jpg';
import meatarians from '../images/work-meatarians.jpg';

import mrozillaBot from '../images/work-mrozilla_messenger_bot.png';
import colours from '../images/work-colours.jpg';
import writest from '../images/work-writest.jpg';
import superconsultant from '../images/work-superconsultant.jpg';
import passworld from '../images/work-passworld.jpg';
import meowslator from '../images/work-meowslator.jpg';
import countOnMe from '../images/work-count_on_me.jpg';
import inAnyCase from '../images/work-in_any_case.jpg';
import esnQuiz from '../images/work-esn_quiz.jpg';

// =============================================================================
// Content
// =============================================================================

/* eslint-disable max-len */
const works = [
  // ===========================================================================
  // Case studies
  // ===========================================================================

  {
    type:    ['case', 'design', 'dev', 'copy'],
    link:    'https://medium.com/mrozilla/designing-for-happiness-1db11a1f3952',
    title:   'hiMoment',
    tagline: 'your digital happiness guru',
    tags:    ['branding', 'design', 'website', 'app', 'copywriting'],
    image:   himoment,
  },
  {
    type: ['case', 'design', 'dev', 'copy'],
    link:
      'https://medium.com/mrozilla/branding-an-inter-national-mobility-campaign-38a2260e0ad7',
    title:   "Mov'in Europe",
    tagline: 'mobility is a lifestyle',
    tags:    ['branding', 'design', 'website', 'copywriting'],
    image:   movinEurope,
  },
  {
    type: ['case', 'design', 'dev', 'copy'],
    link:
      'https://medium.com/mrozilla/new-visual-style-for-30-000-people-ff5e61d76211',
    title:   'Erasmus Student Network',
    tagline: 'unity in diversity',
    tags:    ['design', 'website', 'copywriting'],
    image:   esn,
  },
  {
    type: ['case', 'design', 'dev'],
    link:
      'https://medium.com/mrozilla/refreshing-a-startup-competition-21f09348a888',
    title:   'Vodafone Idea of the Year',
    tagline: 'helping ideas grow',
    tags:    ['design', 'website'],
    image:   napadRoku,
  },

  // ===========================================================================
  // Other work
  // ===========================================================================

  {
    type:    ['dev'],
    link:    'http://pioneers.io/piobay/login',
    title:   'Pioneers.io',
    tagline: 'internal system for organising startups',
    tags:    ['design', 'website'],
    image:   pioneers,
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
    image:   leadspicker,
  },
  {
    type:    ['design', 'dev', 'copy'],
    link:    'http://meatarians.org',
    title:   'Meatarians',
    tagline: 'loving meat is not a crime',
    tags:    ['concept', 'branding', 'design', 'website', 'copywriting'],
    image:   meatarians,
  },

  // ===========================================================================
  // Lab
  // ===========================================================================

  {
    type:    ['lab'],
    link:    'https://m.me/881855475329484',
    title:   'mrozilla messenger bot',
    tagline: 'this website in a chatbot',
    tags:    ['concept', 'chatbot', 'messenger'],
    image:   mrozillaBot,
  },
  {
    type:    ['lab'],
    link:    '/lab/colours',
    title:   'css colours',
    tagline: 'a complete collection of css-named colours',
    tags:    ['concept', 'website'],
    image:   colours,
  },
  {
    type:    ['lab'],
    link:    '/lab/writest',
    title:   'writest',
    tagline: 'all the numbers about your letters',
    tags:    ['concept', 'website'],
    image:   writest,
  },
  {
    type:    ['lab'],
    link:    'https://twitter.com/SUPERKONSULTANT',
    title:   'SUPERCONSULTANT',
    tagline: 'text-generating Twitter bot',
    tags:    ['concept', 'website'],
    image:   superconsultant,
  },
  {
    type:    ['lab'],
    link:    '/lab/passworld',
    title:   'passworld',
    tagline: 'your password must contain at least...',
    tags:    ['concept', 'website'],
    image:   passworld,
  },
  {
    type:    ['lab'],
    link:    'https://m.me/meowslator',
    title:   'meowslator',
    tagline: 'any-language-to-meowish Messenger bot',
    tags:    ['concept', 'website'],
    image:   meowslator,
  },
  {
    type:    ['lab'],
    link:    '/lab/count-on-me',
    title:   'count on me',
    tagline: 'a tool you can count on',
    tags:    ['concept', 'website'],
    image:   countOnMe,
  },
  {
    type:    ['lab'],
    link:    '/lab/in-any-case',
    title:   'in any case',
    tagline: 'Title Case, url-case, camelCase, all the cases',
    tags:    ['concept', 'website'],
    image:   inAnyCase,
  },
  {
    type:    ['lab'],
    link:    'https://rawgit.com/mrozilla/esn-quiz/master/index.html',
    title:   'ESNquiz',
    tagline: 'a simple quiz implementation',
    tags:    ['concept', 'website'],
    image:   esnQuiz,
  },
];
/* eslint-enable max-len */

export default works;
