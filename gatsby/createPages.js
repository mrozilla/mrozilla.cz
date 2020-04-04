// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

const path = require('path');

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

module.exports = ({ actions: { createPage }, graphql }) => {
  const BlogPostContainer = path.resolve('src/containers/BlogPostContainer.js');

  return graphql(`
    {
      posts: allMdx(filter: { fileAbsolutePath: { regex: "/cms/posts/" } }) {
        edges {
          node {
            frontmatter {
              meta {
                permalink
              }
            }
          }
        }
      }
      legal: allMdx(filter: { fileAbsolutePath: { regex: "/cms/legal/" } }) {
        edges {
          node {
            frontmatter {
              meta {
                permalink
              }
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.legal.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.meta.permalink,
        component: BlogPostContainer,
      });
    });

    return result.data.posts.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.meta.permalink,
        component: BlogPostContainer,
      });
    });
  });
};
