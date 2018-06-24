// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default styled.article(
  {
    minWidth: 0,

    '& h1': {
      fontSize:   '5rem',
      fontWeight: '400',
      lineHeight: '6rem',
    },
    '& h2': {
      fontSize:   '3.5rem',
      lineHeight: '6rem',
      fontWeight: '600',
      marginTop:  '6rem',
    },
    '& p': {
      marginBottom: '3rem',
    },
    '& ul': {
      margin:      '-3rem 0 3rem 0',
      listStyle:   'disc',
      paddingLeft: '1em',
    },
    '& blockquote': {
      fontFamily: 'Georgia',
      fontSize:   '3rem',
      fontStyle:  'italic',
      padding:    '0 6rem',
    },
    '& pre': {
      fontSize:     '1.75rem',
      borderRadius: '1rem',
      margin:       '0 -3rem 3rem -3rem !important',
    },
  },
  ({ fontSize = '2.5rem', lineHeight = '4rem' }) => ({
    fontSize,
    lineHeight,
  }),
);
