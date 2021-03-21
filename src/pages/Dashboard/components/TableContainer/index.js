import React from "react";
import styles from "./style.module.css";
import TableTopAge from "../TableTopAge/index";

// import iconDelete from "../../assets/icons/delete.svg";
// import iconShare from "../../assets/icons/share.svg";
// import iconEdit from "../../assets/icons/edit.svg";

const TableContainer = ({ data }) => {
  return (
    <div className={styles.TableContainer}>
      <TableTopAge data={data} title="Highest avg age" />
      <TableTopAge data={data} title="Low est avg age" />
    </div>
  );
};

export default TableContainer;
