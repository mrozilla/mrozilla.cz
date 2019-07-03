// ─────────────────────────────────────────────────────────────────────────────
//  import
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useEffect } from 'react';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function useSelection() {
  const [selectedText, setSelectedText] = useState('');
  const [selectedTextPosition, setSelectedTextPosition] = useState({});

  const handleMouseUp = () => {
    const selection = document.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      if (range) {
        setSelectedTextPosition(range.getBoundingClientRect());
        setSelectedText(document.getSelection().toString());
      }
    }
  };

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp);
    return () => document.removeEventListener('mouseup', handleMouseUp);
  }, []);

  return [selectedText, selectedTextPosition];
}
