// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import { useRef, useEffect } from 'react';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function useEventListener(eventName, handler, element) {
  // Create a ref that stores handler
  const savedHandler = useRef();

  // Update ref.current value if handler changes.
  // This allows our effect below to always get latest handler ...
  // ... without us needing to pass it in effect deps array ...
  // ... and potentially cause effect to re-run every render.
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(
    () => {
      // avoid argument defaults due to build time ReferenceError
      const target = element || window;

      // Make sure element supports addEventListener
      if (!(target && target.addEventListener)) {
        return undefined;
      }

      // Create event listener that calls handler function stored in ref
      const eventListener = (event) => savedHandler.current(event);

      // Add event listener
      target.addEventListener(eventName, eventListener);

      // Remove event listener on cleanup
      return () => {
        target.removeEventListener(eventName, eventListener);
      };
    },
    [eventName, element], // Re-run if eventName or element changes
  );
}
