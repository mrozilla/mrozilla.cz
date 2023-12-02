import React from "react";

export function useOnScreen<T extends HTMLElement>(options: IntersectionObserverInit) {
  const ref = React.useRef<T>(null!);
  const [isIntersecting, setIntersecting] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return [ref, isIntersecting] as const;
}
