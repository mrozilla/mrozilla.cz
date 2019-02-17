// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function Pre({ children, ...props }) {
  if (
    // children is MDXTag
    children
    // MDXTag props
    && children.props
    // if MDXTag is going to render a <code>
    && children.props.name === 'code'
  ) {
    const language = children.props.props.className.split('-')[1];
    return (
      <Highlight
        {...defaultProps}
        code={children.props.children.trim()}
        language={language}
        theme={undefined}
      >
        {({ className, tokens, getLineProps, getTokenProps }) => (
          <pre className={className}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    );
  }

  return <pre {...props}>{children}</pre>;
}
