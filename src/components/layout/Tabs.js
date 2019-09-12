// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { useState } from 'react';
import { arrayOf, oneOfType, shape, string, node } from 'prop-types';

import { Ul, Li } from '~components/text/List';
import { View } from '~components/primitives/View';
import { useEventListener } from '~utils';

// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

export default function Tabs({ content }) {
  const [activeTabIdx, setActiveTabIdx] = useState(0);

  useEventListener('keydown', (event) => {
    if (
      !event.target
      || !('getAttribute' in event.target)
      || event.target.getAttribute('role') !== 'tab'
    ) {
      return null;
    }

    if (event.code === 'ArrowRight') {
      event.preventDefault();
      const elementToFocus = event.target.nextSibling || event.target.parentNode.firstChild;
      return elementToFocus.focus();
    }

    if (event.code === 'ArrowLeft') {
      event.preventDefault();
      const elementToFocus = event.target.previousSibling || event.target.parentNode.lastChild;
      return elementToFocus.focus();
    }

    if (event.code === 'Home') {
      event.preventDefault();
      return event.target.parentNode.firstChild.focus();
    }

    if (event.code === 'End') {
      event.preventDefault();
      return event.target.parentNode.lastChild.focus();
    }

    return null;
  });

  return (
    <>
      <Ul
        role="tablist"
        css={`
          grid-auto-flow: column;
          grid-auto-columns: max-content;
          box-shadow: inset 0 -2px hsla(var(--hsl-text), .1);
        `}
      >
        {content.map(({ title }, i) => (
          <Li
            key={i} // eslint-disable-line react/no-array-index-key
            role="tab"
            tabIndex="0"
            aria-selected={activeTabIdx === i}
            css={`
              outline: none;

              cursor: pointer;
              padding: 1rem;
              box-shadow: ${i === activeTabIdx && 'inset 0 -2px var(--color-brand-primary)'};

              &:hover {
                color: var(--color-brand-primary);
                box-shadow: inset 0 -2px var(--color-brand-primary);
              }

              &:focus {
                color: var(--color-brand-primary);
              }
            `}
            onFocus={() => setActiveTabIdx(i)}
            onClick={() => setActiveTabIdx(i)}
          >
            {title}
          </Li>
        ))}
      </Ul>
      <View
        role="tabpanel"
        aria-expanded
        css={`
          padding: 1rem 0;
        `}
      >
        {content[activeTabIdx].body}
      </View>
    </>
  );
}

Tabs.propTypes = {
  content: arrayOf(
    shape({
      title: oneOfType([string, node]).isRequired,
      body:  oneOfType([string, node]).isRequired,
    }),
  ).isRequired,
};
