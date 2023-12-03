import React from "react";

import { RadioGroup, RadioOption } from "~components";
import { useLocalStorage, getBrowserTheme } from "~utils";

export const ColourThemeContainer: React.FC = () => {
  const [theme, setTheme] = useLocalStorage("theme", getBrowserTheme());

  React.useEffect(() => {
    if (theme === "crazy") {
      const seed = Math.floor(Math.random() * 360);

      document.documentElement.style.setProperty("--hsl-crazy-bg", `${seed}, 100%, 50%`);
      document.documentElement.style.setProperty("--hsl-crazy-text", `${seed - 180}, 100%, 50%`);
    }
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setTheme(event.target.value);
  };

  return (
    <RadioGroup onChange={handleChange} value={theme}>
      <RadioOption value="light" label="Light" />
      <RadioOption value="dark" label="Dark" />
      <RadioOption value="crazy" label="Random" />
    </RadioGroup>
  );
};
