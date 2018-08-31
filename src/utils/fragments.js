// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import { graphql } from 'gatsby';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export const OgImageFragment = graphql`
  fragment OgImageFragment on File {
    childImageSharp {
      resize(width: 1200, height: 630) {
        src
      }
    }
  }
`;

export const MetaFragment = graphql`
  fragment MetaFragment on PagesJson {
    meta {
      title
      description
      ogImage {
        ...OgImageFragment
      }
    }
  }
`;

export const WorkFragment = graphql`
  fragment WorkFragment on WorkJson {
    meta {
      permalink
    }
    body {
      title
      tagline
    }
  }
`;

export const LabFragment = graphql`
  fragment LabFragment on LabJson {
    meta {
      type
      permalink
    }
    body {
      title
      tagline
    }
  }
`;

export const BlogPreviewFragment = graphql`
  fragment BlogPreviewFragment on MarkdownRemark {
    timeToRead
    frontmatter {
      permalink
      title
      date(formatString: "MMMM D, YYYY")
    }
  }
`;
