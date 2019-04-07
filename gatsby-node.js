// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

const path = require('path');
// const mdx = require('@mdx-js/mdx');
// const babel = require('@babel/core');

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

exports.onCreateNode = ({ node, getNode, actions: { createNodeField } }) => {
  if (node.internal.type === 'Mdx') {
    const parent = getNode(node.parent);

    if (parent.internal.type === 'File') {
      createNodeField({
        node,
        name:  'sourceName',
        value: parent.sourceInstanceName,
      });
    }
  }
};

// exports.onCreateNode = ({ node }) => {
//   if (node.frontmatter && node.frontmatter.links) {
//     node.frontmatter.links.map(async (link) => {
//       if (link.type === 'markdown') {
//         // link.text = await mdx(link.text);
//         const mdxed = await mdx(link.text);
//         console.log(mdxed);
//         console.log(
//           babel.transform(mdxed, {
//             configFile: false,
//           }),
//         );
//         return link;
//       }
//       return link;
//     });
//   }
// };

exports.createPages = ({ actions: { createPage }, graphql }) => {
  const BlogPostContainer = path.resolve('src/containers/BlogPostContainer.js');

  return graphql(`
    {
      posts: allMdx(
        filter: { fields: { sourceName: { eq: "blog" } } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
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
