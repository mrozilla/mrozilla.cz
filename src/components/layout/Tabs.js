// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { useState, useEffect } from 'react';
import { arrayOf, oneOfType, shape, string, node } from 'prop-types';

import { Ul, Li } from '~components/text/List';
import { View } from '~components/primitives/View';

// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

export default function Tabs({ content }) {
  const [activeTabIdx, setActiveTabIdx] = useState(0);

  const handleKeyDown = (event) => {
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
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <Ul
        role="tablist"
        gridAutoFlow="column"
        gridAutoColumns="max-content"
        boxShadow="inset 0 -2px hsla(var(--hsl-text),0.1)"
      >
        {content.map(({ title }, i) => (
          <Li
            key={i} // eslint-disable-line react/no-array-index-key
            role="tab"
            tabIndex="0"
            aria-selected={activeTabIdx === i}
            outline="none"
            cursor="pointer"
            padding="1rem"
            boxShadow={i === activeTabIdx && 'inset 0 -2px var(--color-brand-primary)'}
            hover={{
              color:     'var(--color-brand-primary)',
              boxShadow: 'inset 0 -2px var(--color-brand-primary)',
            }}
            focus={{
              color: 'var(--color-brand-primary)',
            }}
            onFocus={() => setActiveTabIdx(i)}
            onClick={() => setActiveTabIdx(i)}
          >
            {title}
          </Li>
        ))}
      </Ul>
      <View role="tabpanel" padding="1rem 0" aria-expanded>
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
