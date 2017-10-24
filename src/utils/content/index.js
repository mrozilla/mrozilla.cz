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

// misc
import menu from './menu';

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
  menu,
};

// =============================================================================
// Export
// =============================================================================

export { home, work, lab, about, legal, works, social, menu };
export default content;
