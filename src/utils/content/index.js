// =============================================================================
// import
// =============================================================================

// copy
import home from './pages/home';
import work from './pages/work';
import lab from './pages/lab';
import about from './pages/about';
import legal from './pages/legal';

// works
import works from './works';

// social
import social from './social';

// =============================================================================
// content
// =============================================================================

const content = {
  pages: {
    home,
    work,
    lab,
    about,
    legal,
  },
  works,
  social,
};

// =============================================================================
// Export
// =============================================================================

export { pages, home, work, lab, about, legal, works, social };
export default content;
