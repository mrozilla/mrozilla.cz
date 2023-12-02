import { useEventListener } from "./useEventListener";

export function useInactiveTab() {
  useEventListener("visibilitychange", (event) => {
    if (event.target.visibilityState === "hidden") document.title = `😴 ${document.title}`;
    if (event.target.visibilityState === "visible") document.title = document.title.substring(2);
  });
}
