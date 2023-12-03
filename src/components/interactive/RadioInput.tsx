import React from "react";
import cx from "classnames";

import * as styles from "./RadioInput.module.scss";

export interface RadioOptionProps extends React.ComponentPropsWithoutRef<"input"> {
  label: string;
}

export const RadioOption: React.FC<RadioOptionProps> = ({ label, className, ...rest }) => {
  return (
    <label className={styles.label}>
      <input {...rest} type="radio" className={cx(className, styles.radio)} />
      <span>{label}</span>
    </label>
  );
};

export interface RadioGroupProps
  extends Omit<React.ComponentPropsWithoutRef<"fieldset">, "onChange"> {
  value?: string;
  label?: string;
  children: React.ReactElement<RadioOptionProps>[];
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
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
          checked: value ? value === child.props.value : undefined,
          name,
          onChange,
        });
      })}
    </fieldset>
  );
};
