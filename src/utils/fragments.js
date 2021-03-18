// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import { graphql } from 'gatsby';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export const fragments = graphql`
  fragment MetaFragment on MdxFrontmatter {
    meta {
      permalink
      title
      description
      ogImage {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 1200, height: 630)
        }
      }
    }
  }

  fragment WorkPreviewFragment on Mdx {
    frontmatter {
      title
      meta {
        permalink
        tags
      }
    }
  }

  fragment LabPreviewFragment on Mdx {
    frontmatter {
      title
      tagline
      date
      meta {
        permalink
      }
    }
  }

  fragment BlogPreviewFragment on Mdx {
    timeToRead
    frontmatter {
      title
      date(formatString: "MMMM D, YYYY")
      meta {
        permalink
      }
    }
  }
`;
