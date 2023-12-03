import React from "react";
import { FaEye, FaEyeSlash, FaCalendar, FaCaretDown } from "react-icons/fa";
import cx from "classnames";

import { Button } from "./Button";
import { Tooltip } from "../text/Tooltip";

import * as styles from "./TextInput.module.scss";

export interface TextInputProps extends React.ComponentPropsWithoutRef<"input"> {
  name: string;
  label: string;

  description?: string;
  error?: string;
  options?: string[];
}

export const TextInput: React.FC<TextInputProps> = ({
  type: defaultType = "text",
  name,
  label,
  description,
  error,
  options,
  className,
  ...rest
}) => {
  const [type, setType] = React.useState(defaultType);

  const handlePasswordVisibility: React.MouseEventHandler = (event) => {
    event.preventDefault();
    setType((prev) => (prev === "password" ? "text" : "password"));
  };

  return (
    <fieldset className={styles.fieldset}>
      <input
        {...rest}
        type={type}
        id={name}
        name={name}
        list={`datalist-${name}`}
        className={cx(styles.input, className)}
      />
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      {defaultType === "password" && (
        <Button
          look="tertiary"
          size="s"
          aria-label={"Change password visibility"}
          className={styles.button}
          onMouseDown={(event) => event.preventDefault()}
          onClick={handlePasswordVisibility}
        >
          {type === "password" ? <FaEyeSlash aria-hidden /> : <FaEye aria-hidden />}
        </Button>
      )}
      {["date", "datetime-local", "month", "time"].includes(type) && (
        <FaCalendar aria-hidden className={styles.icon} />
      )}
      {defaultType === "search" && (
        <>
          <FaCaretDown aria-hidden className={styles.icon} />
          <datalist id={`datalist-${name}`}>
            {options?.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </datalist>
        </>
      )}
      {description && <Tooltip className={styles.tooltip}>{description}</Tooltip>}
      {error && <Tooltip className={styles.error}>{error}</Tooltip>}
    </fieldset>
  );
};
