// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function mediaQuerise(rules) {
  const media = {
    xs: '0px',
    sm: '600px',
    md: '900px',
    lg: '1200px',
  };

  return Object.entries(rules).reduce((acc, [property, queries]) => {
    if (typeof queries !== 'object') {
      acc[property] = queries;
      return acc;
    }

    Object.entries(queries).forEach(([breakpoint, value]) => {
      const mediaQuery = `@media screen and (min-width: ${media[breakpoint]})`;
      acc[mediaQuery] = {
        ...acc[mediaQuery],
        [property]: value,
      };
    });
    return acc;
  }, {});
}
