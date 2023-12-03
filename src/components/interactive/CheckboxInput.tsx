import React from "react";
import cx from "classnames";

import * as styles from "./CheckboxInput.module.scss";

export interface CheckboxOptionProps extends React.ComponentPropsWithoutRef<"input"> {
  label: string;
}

export const CheckboxOption: React.FC<CheckboxOptionProps> = ({ label, className, ...rest }) => {
  return (
    <label className={styles.label}>
      <input {...rest} type="checkbox" className={cx(className, styles.checkbox)} />
      <span>{label}</span>
    </label>
  );
};

export interface CheckboxGroupProps
  extends Omit<React.ComponentPropsWithoutRef<"fieldset">, "onChange"> {
  value?: { [key: string]: boolean };
  label?: string;
  children: React.ReactElement<CheckboxOptionProps>[];
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  value,
  name,
  label,
  children,
  className,
  onChange = () => {},
  ...rest
}) => {
  return (
    <fieldset {...rest} className={cx(className, styles.fieldset)}>
      {label && <legend className={styles.legend}>{label}</legend>}
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          checked: value ? value[child.props.value as string] : undefined,
          name,
          onChange,
        });
      })}
    </fieldset>
  );
};
