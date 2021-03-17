***REMOVED***
import styles from "./style.module.css";
import iconPlus from "../../assets/icons/add.svg";

const Box = ({ title, isAddItems, children, isBackground }) => {
***REMOVED***
    <div className={`${styles.box} ${isBackground && styles.backgroundBox}`}>
      <div className={title && styles.title}>
        <h1>{title}</h1>
        {isAddItems && (
          <button className={styles.addIcon}>
            <img src={iconPlus} alt="" />
          </button>
  ***REMOVED***
      </div>
      <div className={styles.boxContent}>{children}</div>
    </div>
***REMOVED***
***REMOVED***

export default Box;
