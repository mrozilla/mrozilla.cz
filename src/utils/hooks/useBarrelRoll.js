// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useEffect } from 'react';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function useBarrelRoll() {
  const [count, setCount] = useState(0);

  const handleBarrelRoll = (evt) => {
    if (evt.key === 'r') {
      setCount(c => (c < 5 ? c + 1 : 1));
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleBarrelRoll);
    return () => document.removeEventListener('keydown', handleBarrelRoll);
  }, []);

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
