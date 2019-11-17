// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

const { fmImagesToRelative } = require('gatsby-remark-relative-images');

// TODO: finalise for merge into gatsby-mdx/fork
const mdx = require('@mdx-js/mdx');
const babel = require('@babel/core');
const deepMap = require('deep-map');

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

module.exports = ({ node, getNode, actions: { createNodeField } }) => {
  fmImagesToRelative(node); // transform Netlify CMS' absolute paths to relative for gatsby-image

  if (node.internal.type === 'Mdx') {
    const parent = getNode(node.parent);

    // TODO: finalise for merge into gatsby-mdx/fork
    deepMap(
      node.frontmatter,
      (value, key) => {
        if (key === 'markdown' || key === 'mdx') {
          const mdxed = mdx.sync(value);
          const babeled = babel.transform(mdxed, {
            configFile: false,
            // plugins:    [instance.plugin, objRestSpread, htmlAttrToJSXAttr],
            presets:    [
              require('@babel/preset-react'),
              [
                require('@babel/preset-env'),
                {
                  useBuiltIns: 'entry',
                  corejs:      2,
                  modules:     'false',
                },
              ],
            ],
          });
          const replaced = babeled.code
            .replace(/export\s*default\s*function\s*MDXContent\s*/, 'return function MDXContent')
            .replace(/export\s*{\s*MDXContent\s+as\s+default\s*};?/, 'return MDXContent;')
            .replace(/\nexport /g, '\n');

          return replaced;
        }

        return value;
      },
      { inPlace: true },
    );

    if (parent.internal.type === 'File') {
      createNodeField({
        node,
        name:  'sourceName',
        value: parent.sourceInstanceName,
      });
    }
  }
};
