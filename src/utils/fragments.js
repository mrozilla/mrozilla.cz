// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import { graphql } from 'gatsby';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

// separate due to being used in other fragments
// export const OgImageFragment = graphql`
//   fragment OgImageFragment on File {
//     childImageSharp {
//       resize(width: 1200, height: 630) {
//         src
//       }
//     }
//   }
// `;

export const fragments = graphql`
  fragment MetaFragment on frontmatter_2 {
    meta {
      permalink
      title
      description
      # ogImage {
      #   ...OgImageFragment
      # }
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
      permalink
      date(formatString: "MMMM D, YYYY")
    }
  }
`;
