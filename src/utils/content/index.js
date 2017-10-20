// =============================================================================
// Import
// =============================================================================

// Copy
import home from './pages/home';
import work from './pages/work';
import lab from './pages/lab';
import about from './pages/about';
import legal from './pages/legal';

// Works
import works from './works';

// =============================================================================
// Content
// =============================================================================

const content = {
  pages: {
    home:  { ...home },
    work:  { ...work },
    lab:   { ...lab },
    about: { ...about },
    legal: { ...legal },
  },
  works:  [...works],
  social: [
    {
      name: 'twitter',
      link: '//twitter.com/mrozilla',
    },
    {
      name: 'medium',
      link: '//medium.com/mrozilla',
    },
    {
      name: 'github',
      link: '//github.com/mrozilla',
    },
    {
      name: 'codepen',
      link: '//codepen.com/mrozilla',
    },
    {
      name: 'linkedin',
      link: '//linkedin.com/in/mrozilla',
    },
    { name: 'mail', link: 'mailto:jan@mrozilla.cz' },
  ],
};

// =============================================================================
// Export
// =============================================================================

export default content;
