import React from "react";

export function useForceUpdate() {
  const [_, forceUpdate] = React.useState(0);

  const trigger = () => forceUpdate(Date.now());

  return trigger;
}
