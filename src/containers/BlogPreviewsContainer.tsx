import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import { Heading, Link, Text } from "~components";

import * as styles from "./BlogPreviewsContainer.module.scss";

export interface BlogPreviewsContainerProps {
  limit?: number;
}

export const BlogPreviewsContainer: React.FC<BlogPreviewsContainerProps> = ({ limit }) => {
  const { posts } = useStaticQuery<Queries.BlogPostsPreviewQuery>(graphql`
    query BlogPostsPreview {
      posts: allMdx(
        sort: { frontmatter: { date: DESC } }
        filter: { frontmatter: { category: { eq: "blog" } } }
      ) {
        nodes {
          frontmatter {
            title
            date(formatString: "MMMM D, YYYY")
            meta {
              permalink
            }
          }
          fields {
            timeToRead {
              text
            }
          }
        }
      }
    }
  `);

  return (
    <section>
      <Heading tag="h2">Latest blog articles</Heading>
      <ul className={styles.list}>
        {posts.nodes.slice(0, limit).map(({ frontmatter, fields }) => (
          <li key={frontmatter?.meta?.permalink}>
            <Link to={frontmatter?.meta?.permalink as string} look="tertiary">
              {frontmatter?.title}
            </Link>
            {(frontmatter?.date || fields?.timeToRead) && (
              <Text look="byline">{`${frontmatter?.date} • ${fields?.timeToRead?.text}`}</Text>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};
