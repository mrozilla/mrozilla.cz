export const persist = {
  getItem: <T>(key: string, fallback: T): T => {
    if (typeof window === "undefined" || typeof localStorage === "undefined") return fallback;
    return JSON.parse(localStorage.getItem(key) as string) || fallback;
  },
  setItem: (key: string, data = {}) => {
    if (typeof window === "undefined" || typeof localStorage === "undefined") return null;
    return localStorage.setItem(key, JSON.stringify(data));
  },
};
