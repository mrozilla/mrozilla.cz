import readingTime from "reading-time";

module.exports = ({ node, actions: { createNodeField } }) => {
  // add timeToRead to Mdx nodes
  if (node.internal.type === `Mdx`) {
    createNodeField({ node, name: `timeToRead`, value: readingTime(node.body) });
  }
};
