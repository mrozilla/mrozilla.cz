import React from "react";
import { useEventListener } from "./useEventListener";

export function useBarrelRoll() {
  const [count, setCount] = React.useState(0);

  useEventListener("keydown", (event) => {
    if (event.key === "r") setCount((count) => (count < 5 ? count + 1 : 1));
  });

  React.useEffect(() => {
    if (count === 5) {
      document.body.style.transition = "1000ms";
      document.body.style.transform = "rotate(360deg)";
    } else {
      document.body.style.transform = "";
      document.body.style.transition = "";
    }
  }, [count]);
}
