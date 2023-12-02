export function useLocale() {
  const locale =
    (typeof navigator !== "undefined" && navigator.languages && navigator.languages[0]) || "en";

  return [locale];
}
