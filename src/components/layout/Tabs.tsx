import React from "react";

import * as styles from "./Tabs.module.scss";

export interface TabsProps extends React.ComponentPropsWithoutRef<"div"> {
  content: {
    title: React.ReactNode;
    body: React.ReactNode;
  }[];
  children?: React.ReactNode;
}

export const Tabs: React.FC<TabsProps> = ({ children, content, ...rest }) => {
  const [activeTabIndex, setActiveTabIndex] = React.useState(0);

  const handleKeyDown: React.KeyboardEventHandler<HTMLLIElement> = (event) => {
    const { currentTarget } = event;

    if (event.code === "ArrowRight") {
      event.preventDefault();
      const elementToFocus = currentTarget?.nextSibling || currentTarget.parentNode?.firstChild;
      return (elementToFocus as HTMLElement).focus();
    }

    if (event.code === "ArrowLeft") {
      event.preventDefault();
      const elementToFocus = currentTarget?.previousSibling || currentTarget.parentNode?.lastChild;
      return (elementToFocus as HTMLElement).focus();
    }

    if (event.code === "Home") {
      event.preventDefault();
      return (event.currentTarget.parentNode?.firstChild as HTMLElement).focus();
    }

    if (event.code === "End") {
      event.preventDefault();
      return (event.currentTarget.parentNode?.lastChild as HTMLElement).focus();
    }
  };

  return (
    <div {...rest} className={styles.tabs}>
      <ul role="tablist">
        {content.map(({ title }, i) => (
          <li
            key={i} // eslint-disable-line react/no-array-index-key
            role="tab"
            tabIndex={0}
            aria-selected={activeTabIndex === i}
            onFocus={() => setActiveTabIndex(i)}
            onClick={() => setActiveTabIndex(i)}
            onKeyDown={handleKeyDown}
          >
            {React.isValidElement(title) ? title : <p>{title}</p>}
          </li>
        ))}
      </ul>
      {content.map(({ body }, index) => (
        <div
          key={index} // eslint-disable-line react/no-array-index-key
          role="tabpanel"
          aria-expanded
          hidden={activeTabIndex !== index}
        >
          {body}
        </div>
      ))}
    </div>
  );
};
