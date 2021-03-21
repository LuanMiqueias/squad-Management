import React from "react";
import styles from "./style.module.css";

// import iconDelete from "../../assets/icons/delete.svg";
// import iconShare from "../../assets/icons/share.svg";
// import iconEdit from "../../assets/icons/edit.svg";

const TableTopAge = ({ data, title }) => {
  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.title}>{title}</h2>
      </div>
      <div className={styles.table}>
        {data.map(({ name, description }, index) => {
          return (
            <div className={styles.content} key={`${name}_${index}`}>
              <span className={styles.TableItems} aria-label="name">
                {name}
              </span>
              <span className={`${styles.TableItems}`} aria-label="description">
                {description}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TableTopAge;
