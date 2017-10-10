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
  works: [...works],
};

// =============================================================================
// Export
// =============================================================================

export default content;
