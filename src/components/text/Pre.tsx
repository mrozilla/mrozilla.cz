import React from "react";
import { Highlight, themes } from "prism-react-renderer";

export const Pre: React.FC<React.ComponentPropsWithoutRef<"pre">> = (props) => {
  // @ts-expect-error TS doesn't know props.children.props is ensured
  const className = props.children.props.className || "";
  const matches = className.match(/language-(?<lang>.*)/);

  return (
    <Highlight
      // @ts-expect-error TS doesn't know props.children.props is ensured
      code={props.children.props.children.trim()}
      language={matches?.groups?.lang || ""}
      theme={themes.oneDark}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              {/* <span>{i + 1}</span> */}
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
