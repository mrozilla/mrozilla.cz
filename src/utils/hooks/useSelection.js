// ─────────────────────────────────────────────────────────────────────────────
//  import
// ─────────────────────────────────────────────────────────────────────────────

import { useState } from 'react';
import useEventListener from './useEventListener';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function useSelection() {
  const [selectedText, setSelectedText] = useState('');
  const [selectedTextPosition, setSelectedTextPosition] = useState({});

  useEventListener('mouseup', () => {
    const selection = document.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      if (range) {
        setSelectedTextPosition(range.getBoundingClientRect());
        setSelectedText(document.getSelection().toString());
      }
    }
  });

  return [selectedText, selectedTextPosition];
}
