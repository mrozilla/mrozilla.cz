// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default styled.article`
  min-width: 0;
  font-size: 2.5rem;
  line-height: 4rem;

  & h1 {
    font-size: 5rem;
    font-weight: 400;
    line-height: 6rem;
  }
  & h2 {
    font-size: 3.5rem;
    font-weight: 600;
    line-height: 6rem;
    margin: 6rem 0 0 0;
  }
  & h3 {
    font-size: 3rem;
    font-weight: 600;
  }
  & h4 {
    font-size: 2.75rem;
    font-weight: 600;
  }
  & p {
    margin-bottom: 3rem;
  }
  & ul {
    margin-bottom: 3rem;
    padding-left: 1em;
    list-style: disc;
    & p {
      margin: 0;
    }
  }
  & ol {
    margin-bottom: 3rem;
    & p {
      margin: 0;
    }
    & ol {
      list-style-type: lower-alpha;
      & ol {
        list-style-type: lower-roman;
      }
    }
  }
  & li {
    margin-bottom: 1rem;
  }
  & blockquote {
    font-family: Georgia;
    font-size: 3rem;
    font-style: italic;
    padding: 0 6rem;
  }
  & pre {
    font-size: 1.75rem;
    border-radius: 1rem;
    margin: 0 -3rem 3rem -3rem !important;
  }
`;
