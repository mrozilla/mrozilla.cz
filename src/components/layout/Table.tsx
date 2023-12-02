import React from "react";
import cx from "classnames";

import * as styles from "./Table.module.scss";

export interface TableProps extends React.ComponentPropsWithoutRef<"table"> {}
export interface TableStatics {
  Head: typeof Thead;
  Body: typeof Tbody;
  Foot: typeof Tfoot;
  Row: typeof Tr;
  HeadCell: typeof Th;
  Cell: typeof Td;
}

export const Table: React.FC<TableProps> & TableStatics = ({ className, children, ...rest }) => {
  return (
    <div className={styles.container}>
      <table className={cx(styles.table, className)} {...rest}>
        {children}
      </table>
    </div>
  );
};

export const Thead: React.FC<React.ComponentPropsWithoutRef<"thead">> = ({
  className,
  ...rest
}) => {
  return <thead className={cx(styles.thead, className)} {...rest} />;
};
export const Tbody: React.FC<React.ComponentPropsWithoutRef<"tbody">> = ({
  className,
  ...rest
}) => {
  return <tbody className={cx(styles.tbody, className)} {...rest} />;
};
export const Tfoot: React.FC<React.ComponentPropsWithoutRef<"tfoot">> = (props) => {
  return <tfoot {...props} />;
};

export const Tr: React.FC<React.ComponentPropsWithoutRef<"tr">> = ({ className, ...rest }) => {
  return <tr className={cx(styles.tr, className)} {...rest} />;
};
export const Th: React.FC<React.ComponentPropsWithoutRef<"th">> = (props) => {
  return <th {...props} />;
};
export const Td: React.FC<React.ComponentPropsWithoutRef<"td">> = ({ className, ...rest }) => {
  return <td className={cx(styles.td, className)} {...rest} />;
};

Table.Head = Thead;
Table.Body = Tbody;
Table.Foot = Tfoot;
Table.Row = Tr;
Table.HeadCell = Th;
Table.Cell = Td;
