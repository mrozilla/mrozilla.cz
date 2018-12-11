// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

export default {
  getItem: (key, fallback = null) => {
    if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
      return fallback;
    }

    return JSON.parse(localStorage.getItem(key)) || fallback;
  },
  setItem: (key, data = {}) => {
    if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
      return null;
    }

    return localStorage.setItem(key, JSON.stringify(data));
  },
};
