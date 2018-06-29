export default function mediaQuerise(rule) {
  const [selector, queries] = Object.entries(rule)[0];
  if (typeof queries !== 'object') {
    return rule;
  }

  return {
    ...Object.entries(queries).reduce((acc, [breakpoint, value]) => {
      const media = {
        xs: '0px',
        sm: '600px',
        md: '900px',
        lg: '1200px',
      };
      const mediaQuery = `@media screen and (min-width: ${media[breakpoint]})`;
      return {
        ...acc,
        [mediaQuery]: {
          [selector]: value,
        },
      };
    }, {}),
  };
}
