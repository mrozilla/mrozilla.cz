import React from "react";
import { FaCaretDown } from "react-icons/fa";
import cx from "classnames";

import * as styles from "./Select.module.scss";

export interface SelectOptionProps extends React.ComponentPropsWithoutRef<"option"> {
  label: string;
}

export const SelectOption: React.FC<SelectOptionProps> = ({ label, ...rest }) => {
  return <option {...rest}>{label}</option>;
};

export interface SelectProps extends React.ComponentPropsWithoutRef<"select"> {
  value?: string;
  label?: string;
  children: React.ReactElement<SelectOptionProps>[];
}

export const Select: React.FC<SelectProps> = ({
  name,
  placeholder,
  label,
  children,
  className,
  onChange = () => {},
  ...rest
}) => {
  return (
    <fieldset className={cx(className, styles.fieldset)}>
      <select {...rest} className={styles.select} id={name} name={name} onChange={onChange}>
        <option hidden value="">
          {placeholder}
        </option>
        <optgroup label={placeholder}>{children}</optgroup>
      </select>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <FaCaretDown className={styles.caret} />
    </fieldset>
  );
};
