import React from "react";
import { noop } from "lodash";
import cx from "classnames";

import { Tooltip } from "../text/Tooltip";

import * as styles from "./TextInput.module.scss";

export interface TextAreaInputProps extends React.ComponentPropsWithoutRef<"textarea"> {
  name: string;
  label: string;

  description?: string;
  error?: string;
}

export const TextAreaInput: React.FC<TextAreaInputProps> = ({
  name,
  label,
  description,
  error,
  className,
  onChange = noop,
  ...rest
}) => {
  const autoResize = (element: HTMLTextAreaElement) => {
    const { borderTopWidth, borderBottomWidth } = window.getComputedStyle(element);
    const extraHeight = parseInt(borderTopWidth, 10) + parseInt(borderBottomWidth, 10);

    element.style.height = "inherit"; // reset scrollHeight when deleting text
    element.style.height = `${element.scrollHeight + extraHeight}px`; // resize element to accommodate potential scroll
  };

  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    autoResize(event.target);
    onChange(event);
  };

  return (
    <fieldset className={styles.fieldset}>
      <textarea
        {...rest}
        id={name}
        name={name}
        className={cx(styles.input, className)}
        onChange={handleChange}
      />
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      {description && <Tooltip className={styles.tooltip}>{description}</Tooltip>}
      {error && <Tooltip className={styles.error}>{error}</Tooltip>}
    </fieldset>
  );
};
