/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

exports.createPages = ({ actions: { createPage }, graphql }) => {
  const BlogPostContainer = path.resolve('src/containers/BlogPostContainer.js');

  return graphql(`
    {
      posts: allMarkdownRemark(limit: 1000, sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            frontmatter {
              permalink
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    return result.data.posts.edges.forEach(({ node }) => {
      createPage({
        path:      node.frontmatter.permalink,
        component: BlogPostContainer,
      });
    });
  });
};
