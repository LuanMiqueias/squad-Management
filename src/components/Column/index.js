import React from "react";
import styles from "./style.module.css";

const Column = ({ children }) => {
  return <div className={styles.column}>{children}</div>;
};

export default Column;
