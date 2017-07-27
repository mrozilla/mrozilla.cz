// =============================================================================
// Import
// =============================================================================

// React
import React from 'react';

// Components
import { Link } from '../../components/Navigation/Link';

// Media
import himoment from './work-himoment.jpg';
import movinEurope from './work-movin_europe.jpg';
import esn from './work-esn.jpg';
import napadRoku from './work-napad_roku.jpg';
import pioneers from './work-pioneers.jpg';
import leadspicker from './work-leadspicker.jpg';
import meatarians from './work-meatarians.jpg';
import image1 from './work-Artboard 1.jpg';
import image2 from './work-Artboard 2.jpg';
import image3 from './work-Artboard 3.jpg';
import image4 from './work-Artboard 4.jpg';
import image5 from './work-Artboard 5.jpg';
import image6 from './work-Artboard 6.jpg';
import image7 from './work-Artboard 7.jpg';

// =============================================================================
// Content
// =============================================================================

const content = {
  // =============================================================================
  // Pages
  // =============================================================================

  pages: {
    home: {
      top: {
        title:    'mrozilla.',
        subtitle: `the online home of
        a one-man digital studio.`,
        text: (
          <span>
            Always busy building new digital experiences, <br />
            mixing together design, development, and copywriting. <br />
            Have a look at some <Link to="#below">case studies ⇣</Link> or all
            the <Link to="/work">work ⟶</Link>
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
            I also do a lot of <Link to="/lab">experiments ⟶</Link> if you’re
            into that stuff. <br />
            Or send me a message if you’d like to build something together.{' '}
            <br />
            It’s <Link to="mailto:jan@mrozilla.cz">jan@mrozilla.cz</Link>
          </span>
        ),
      },
    },
    work: {
      top: {
        title:    'work.',
        subtitle: `the collection of
        case studies and past work.`,
        text: (
          <span>
            If you’re looking for something specific, you can <br />
            filter for <Link to="/work/design">design</Link>,{' '}
            <Link to="/work/dev">development</Link>,{' '}
            <Link to="/work/copy">copywriting</Link>, or{' '}
            <Link to="/work">all work</Link>. <br />
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
            I also do a lot of <Link to="/lab">experiments ⟶</Link> if you’re
            into that stuff. <br />
            Or send me a message if you’d like to build something together.{' '}
            <br />
            It’s <Link to="mailto:jan@mrozilla.cz">jan@mrozilla.cz</Link>
          </span>
        ),
      },
    },
    lab: {
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
            Have a look at the <Link to="/work">commercial work ⟶</Link> if
            you’re into that stuff. <br />
            Or send me a message if you’d like to build something together.{' '}
            <br />
            It’s <Link to="mailto:jan@mrozilla.cz">jan@mrozilla.cz</Link>
          </span>
        ),
      },
    },
    about: {
      top: {
        title:    'about',
        subtitle: 'the details, historical data, and some other information.',
        text:     (
          <span>
            My name is Jan. I'm originally from <s>Czechia</s> the Czech
            Republic, lived in Finland and the United Kingdom, and currently
            residing in Vienna, Austria. I've got <Link to="">a CV</Link> or you
            can read more <Link to="#below">below ⇣</Link>.
          </span>
        ),
      },
      text: [
        <span>
          I build digital products. Everything from concepts to UX, UI, design
          and development. I've done some <Link to="/work">work ⟶</Link> in the
          past, and will probably do some <Link to="/lab">more ⟶</Link>.
        </span>,
        <span>
          I've managed <Link to="https://esn.org">big creative teams</Link> (up
          to 100 people),{' '}
          <Link to="https://movineurope.esn.org">small product teams</Link>, and
          also have been at the very bottom of an organisation as a junior
          developer. I'm a{' '}
          <Link to="https://himoment.com">startup co-founder</Link>. I do a lot
          of volunteering and some open-source work. I'm a{' '}
          <Link to="https://medium.com/TODO">
            keynote speaker and a workshop faciliator
          </Link>.
        </span>,
        <span>
          I design in Adobe Photoshop, Adobe Illustrator, Adobe XD, Adobe
          InDesign, Adobe Lightroom, Adobe Premiere, and Adobe After Effects.
        </span>,
        <span>
          I code in Javascript:{' '}
          <Link to="https://github.com/facebook/react">React</Link>,{' '}
          <Link to="https://github.com/reactjs/redux">Redux</Link>,{' '}
          <Link to="https://github.com/paypal/glamorous">Glamorous</Link>{' '}
          (css-in-js ftw), <Link to="https://github.com/nodejs/node">
            Node
          </Link>{' '}
          & <Link to="https://github.com/nodejs/node">Express</Link>. I usually
          edit that code in{' '}
          <Link to="https://github.com/facebook/nuclide">Nuclide</Link>, run it
          through{' '}
          <Link to="https://github.com/prettier/prettier">Prettier</Link> and{' '}
          <Link to="http://www.syntevo.com/smartgit/">SmartGit</Link>, and post
          it on <Link to="https://github.com/mrozilla/">Github</Link>.
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
          <Link to="mailto:jan@mrozilla.cz">send me an email</Link>. That's
          probably the best chance to get a response.
        </span>,
      ],
    },
    legal: {
      top: {
        title:    'legal',
        subtitle: 'the legal stuff because we have to in this world.',
        text:     (
          <span>
            Copyright (c) {new Date().getFullYear()} Jan Hrubý. The content of
            this website is all rights reserved of their respective owners. The
            code of this website is licensed under the{' '}
            <Link to="https://github.com/mrozilla/mrozilla.cz/blob/master/LICENSE">
              MIT License
            </Link>.
          </span>
        ),
      },
      text: [
        <span>
          Credits: All images on the website are copyrights of their respective
          owners. The website uses {' '}
          <Link to="https://github.com/mrozilla/mrozilla.cz/blob/master/package.json">
            open-source software
          </Link>.
        </span>,
        <span>
          Liability for content: I make every effort to keep the information on
          my website current, but accept no liability whatsoever for the content
          provided. I am not obligated to monitor third party information
          provided or stored on my website. However, I shall promptly remove any
          content upon becoming aware that it violates the law. My liability in
          such an instance shall commence at the time I become aware of the
          respective violation.
        </span>,
        <span>
          Liability for links: This site contains links to third-party websites.
          I have no influence whatsoever on the information on these websites
          and accept no guaranty for its correctness. The content of such
          third-party sites is the responsibility of the respective
          owners/providers. At the time third-party websites were linked to
          mine, I found no grounds whatsoever of any likely contravention of the
          law. I shall promptly delete a link upon becoming aware that it
          violates the law.
        </span>,
        <span>
          Data protection: Please be aware that there are inherent security
          risks in transmitting data, such as emails, via the Internet, because
          it is impossible to safeguard completely against unauthorized access
          by third parties. Nevertheless, I shall safeguard your data, subject
          to this limitation. In particular, personal information will be
          transmitted via the Internet only if it does not infringe upon
          third-party rights, unless the respective party has given its prior
          consent in view of such security risks. Accordingly, as the website
          provider, I shall not be held liable for any damages incurred as a
          consequence of such security risks or for any related acts of omission
          on our part.I oppose the use of any available contact information by a
          third party for sending unsolicited advertisements. As the website
          provider, I reserve the express right to take legal action against
          unsolicited mailing or emailing of spam and other similar advertising
          materials.
        </span>,
        <span>
          This website uses Google Analytics, a web analytics service provided
          by Google, Inc. ("Google"). Google Analytics uses "cookies", which are
          text files placed on your computer, to help the website analyze how
          users use the site. The information generated by the cookie about your
          use of the website (including your IP address) will be transmitted to
          and stored by Google on servers in the United States . Google will use
          this information for the purpose of evaluating your use of the
          website, compiling reports on website activity for website operators
          and providing other services relating to website activity and internet
          usage. Google may also transfer this information to third parties
          where required to do so by law, or where such third parties process
          the information on Google's behalf. Google will not associate your IP
          address with any other data held by Google. You may refuse the use of
          cookies by selecting the appropriate settings on your browser, however
          please note that if you do this you may not be able to use the full
          functionality of this website. By using this website, you consent to
          the processing of data about you by Google in the manner and for the
          purposes set out above.
        </span>,
      ],
    },
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
      image:   himoment,
    },
    {
      type:    ['case', 'design', 'dev', 'copy'],
      link:    'https://medium.com/mrozilla',
      title:   "Mov'in Europe",
      tagline: 'mobility is a lifestyle',
      tags:    ['branding', 'design', 'website', 'copywriting'],
      image:   movinEurope,
    },
    {
      type:    ['case', 'design', 'dev', 'copy'],
      link:    'https://medium.com/mrozilla',
      title:   'Erasmus Student Network',
      tagline: 'unity in diversity, diversity in unity',
      tags:    ['design', 'website', 'copywriting'],
      image:   esn,
    },
    {
      type:    ['case', 'design', 'dev'],
      link:    'https://medium.com/mrozilla',
      title:   'Vodafone Idea of the Year',
      tagline: 'helping ideas grow',
      tags:    ['design', 'website'],
      image:   napadRoku,
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

    // =============================================================================
    // Lab
    // =============================================================================

    {
      type:    ['lab'],
      link:    '/lab/colours',
      title:   'css colours',
      tagline: 'a complete collection of css-named colours',
      tags:    ['concept', 'website'],
      image:   image1,
    },
    {
      type:    ['lab'],
      link:    'https://twitter.com/SUPERKONSULTANT',
      title:   'SUPERCONSULTANT',
      tagline: 'text-generating Twitter bot',
      tags:    ['concept', 'website'],
      image:   image2,
    },
    {
      type:    ['lab'],
      link:    '/lab/passworld',
      title:   'passworld',
      tagline: 'your password must contain at least...',
      tags:    ['concept', 'website'],
      image:   image3,
    },
    {
      type:    ['lab'],
      link:    'https://m.me/meowslator',
      title:   'meowslator',
      tagline: 'any-language-to-meowish Messenger bot',
      tags:    ['concept', 'website'],
      image:   image4,
    },
    {
      type:    ['lab'],
      link:    '/lab/count-on-me',
      title:   'count on me',
      tagline: 'a tool you can count on',
      tags:    ['concept', 'website'],
      image:   image5,
    },
    {
      type:    ['lab'],
      link:    '/lab/in-any-case',
      title:   'in any case',
      tagline: 'Title Case, url-case, camelCase, all the cases',
      tags:    ['concept', 'website'],
      image:   image6,
    },
    {
      type:    ['lab'],
      link:    'https://rawgit.com/mrozilla/esn-quiz/master/index.html',
      title:   'ESNquiz',
      tagline: 'a simple quiz implementation',
      tags:    ['concept', 'website'],
      image:   image7,
    },
  ],
};

// =============================================================================
// Export
// =============================================================================

export default content;
