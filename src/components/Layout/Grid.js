// =============================================================================
// Import
// =============================================================================

import glamorous from 'glamorous';
import { media, grid } from '../../utils/styles';

// =============================================================================
// Container
// =============================================================================

export const Container = glamorous.div({
  position:     'relative',
  marginLeft:   'auto',
  marginRight:  'auto',
  paddingLeft:  `${grid.gutter}rem`,
  paddingRight: `${grid.gutter}rem`,
  [media.xs]:   {
    width: grid.width.xs,
  },
  [media.sm]: {
    width: grid.width.sm,
  },
  [media.md]: {
    width: grid.width.md,
  },
  [media.lg]: {
    width: grid.width.lg,
  },
  [media.xl]: {
    width: grid.width.xl,
  },
});

Container.displayName = 'Container';

// =============================================================================
// Row
// =============================================================================

export const Row = glamorous.div(
  {
    display:     'flex',
    flexWrap:    'wrap',
    marginLeft:  `${grid.gutter / -1}rem`,
    marginRight: `${grid.gutter / -1}rem`,
  },
  ({ isCentered, marginBottom }) => ({
    justifyContent: isCentered ? 'center' : 'initial',
    marginBottom,
  }),
);

Row.displayName = 'Container';
Row.defaultProps = {
  isCentered: false,
};

// =============================================================================
// Column
// =============================================================================

export const Column = glamorous.div(
  {
    position:  'relative',
    minHeight: '1px',
    flex:      '0 0 100%',
    maxWidth:  '100%',
  },
  ({ xs, sm, md, lg, xl }) => ({
    [media.xs]: {
      flex:     xs && `0 0 ${xs / grid.columns * 100}%`,
      maxWidth: xs && `${xs / grid.columns * 100}%`,
    },
    [media.sm]: {
      flex:     sm && `0 0 ${sm / grid.columns * 100}%`,
      maxWidth: sm && `${sm / grid.columns * 100}%`,
    },
    [media.md]: {
      flex:     md && `0 0 ${md / grid.columns * 100}%`,
      maxWidth: md && `${md / grid.columns * 100}%`,
    },
    [media.lg]: {
      flex:     lg && `0 0 ${lg / grid.columns * 100}%`,
      maxWidth: lg && `${lg / grid.columns * 100}%`,
    },
    [media.xl]: {
      flex:     xl && `0 0 ${xl / grid.columns * 100}%`,
      maxWidth: xl && `${xl / grid.columns * 100}%`,
    },
  }),
  ({ marginTop }) => ({
    marginTop,
  }),
  ({ isPadded }) => ({
    paddingLeft:  isPadded ? `${grid.gutter}rem` : '0',
    paddingRight: isPadded ? `${grid.gutter}rem` : '0',
  }),
  ({ isStacked }) =>
    isStacked && {
      [media.lg]: {
        '&:nth-of-type(2)': {
          marginTop: '10vh',
        },
        '&:nth-of-type(2n - 1):not(:first-of-type):not(:last-of-type)': {
          marginTop: '-10vh',
        },
      },
    },
);

Column.displayName = 'Column';
Column.defaultProps = {
  marginTop: '0',
  isStacked: false,
  isPadded:  true,
};
