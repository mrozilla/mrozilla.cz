export default function getBrowserTheme() {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-color-scheme: dark)')?.matches ? 'dark' : 'light';
  }

  return 'light';
}
