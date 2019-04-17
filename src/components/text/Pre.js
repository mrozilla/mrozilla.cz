// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function Pre({ children, ...props }) {
  if (children && children.props && children.props.mdxType === 'code') {
    return (
      <Highlight
        {...defaultProps}
        code={children.props.children.trim()}
        language={children.props.className.split('-')[1]}
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
