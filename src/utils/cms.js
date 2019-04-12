// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import CMS, { init } from 'netlify-cms-app';
import FileSystemBackend from 'netlify-cms-backend-fs';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

if (process.env.NODE_ENV === 'development') {
  window.CMS_ENV = 'development_overrides'; // use development_overrrides from config.yml
  CMS.registerBackend('file-system', FileSystemBackend);
}

init();
