***REMOVED***
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
***REMOVED***
    <div
      className={`${classNameBox} ${styles.box} ${
        isBackground && styles.backgroundBox
***REMOVED*** `}
    >
      <div className={title && styles.title}>
        <h1>{title}</h1>
        {isAddItems && (
          <button className={styles.addIcon} onClick={() => onClick()}>
            <img src={iconPlus} alt="" />
          </button>
  ***REMOVED***
      </div>
      <div
        className={styles.boxContent}
        style={{ gridTemplateColumns: columns ? columns : "1fr" }}
      >
        {children}
      </div>
    </div>
***REMOVED***
***REMOVED***

export default Box;
