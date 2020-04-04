// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

module.exports = ({ actions: { createTypes, createFieldExtension }, createContentDigest }) => {
  createFieldExtension({
    name: 'mdx',
    extend: () => ({
      type: 'String',
      resolve(source, args, context, info) {
        const value = source[info.fieldName]; // grab field
        if (typeof value !== 'string') return value; // short-circuit if no value

        const mdxType = info.schema.getType('Mdx'); // isolate MDX
        const { resolve } = mdxType.getFields().body; // grab just the body contents of what MDX generates
        return resolve({
          rawBody: value,
          internal: {
            contentDigest: createContentDigest(value), // used for caching
          },
        });
      },
    }),
  });
  createTypes(`
    type Mdx implements Node {
      frontmatter: MdxFrontmatter
    }
    type MdxFrontmatter {
      blocks: [BlockValues]
      links: [LinkValues]
    }
    type BlockValues {
      mdx: String @mdx
    }
    type LinkValues {
      mdx: String @mdx
    }
  `);
};
