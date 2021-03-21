import React from "react";
import styles from "./style.module.css";
import iconPlus from "../../assets/icons/add.svg";

const Box = ({
  title,
  isAddItems,
  children,
  isBackground,
  onClick,
  columns,
  classNameBox,
}) => {
  return (
    <div
      className={`${classNameBox} ${styles.box} ${
        isBackground && styles.backgroundBox
      } `}
    >
      <div className={title && styles.title}>
        <h1>{title}</h1>
        {isAddItems && (
          <button className={styles.addIcon} onClick={() => onClick()}>
            <img src={iconPlus} alt="" />
          </button>
        )}
      </div>
      <div
        className={styles.boxContent}
        style={{ gridTemplateColumns: columns ? columns : "1fr" }}
      >
        {children}
      </div>
    </div>
  );
};

export default Box;
