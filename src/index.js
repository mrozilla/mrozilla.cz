// =============================================================================
// src/index.js
// =============================================================================

// React
import React                    from 'react';
import ReactDOM                 from 'react-dom';
import { BrowserRouter }        from 'react-router-dom'
// import ReactGA                  from 'react-ga'; // TODO add

// Views
import App from './screens/App';

// Service worker
import registerServiceWorker from './registerServiceWorker';

// =============================================================================
// Google Analytics
// =============================================================================

// ReactGA.initialize('UA-74251174-1'); // TODO add UA id
// browserHistory.listen(location => {
//     process.env.NODE_ENV === 'production' && ReactGA.pageview(location.pathname);
// });

// =============================================================================
// Render settings
// =============================================================================

// const router = (
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );
// const mountNode = document.getElementById('root');

// =============================================================================
// Go!!!
// =============================================================================

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
