export default function useScrollLock() {
  const enableScrollLock = () => document.documentElement.setAttribute('data-scroll-lock', true);
  const disableScrollLock = () => document.documentElement.setAttribute('data-scroll-lock', false);

  return { enableScrollLock, disableScrollLock };
}
