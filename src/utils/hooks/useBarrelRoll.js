// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useEffect } from 'react';
import useEventListener from './useEventListener';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function useBarrelRoll() {
  const [count, setCount] = useState(0);

  useEventListener('keydown', (evt) => {
    if (evt.key === 'r') {
      setCount(c => (c < 5 ? c + 1 : 1));
    }
  });

  useEffect(() => {
    if (count === 5) {
      document.body.style.transition = '1000ms';
      document.body.style.transform = 'rotate(360deg)';
    } else {
      document.body.style.transform = null;
      document.body.style.transition = null;
    }
  }, [count]);
}
