// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

const path = require('path');

// ─────────────────────────────────────────────────────────────────────────────
// aliases
// ─────────────────────────────────────────────────────────────────────────────

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '~components': path.resolve(__dirname, 'src/components'),
        '~containers': path.resolve(__dirname, 'src/containers'),
        '~utils':      path.resolve(__dirname, 'src/utils'),
      },
    },
  });
};

// ─────────────────────────────────────────────────────────────────────────────
// automatic pages
// ─────────────────────────────────────────────────────────────────────────────

exports.createPages = ({ actions: { createPage }, graphql }) => {
  const BlogPostContainer = path.resolve('src/containers/BlogPostContainer.js');

  return graphql(`
    {
      posts: allMdx(limit: 1000, sort: { order: DESC, fields: [frontmatter___date] }) {
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
