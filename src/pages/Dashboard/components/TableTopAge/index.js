***REMOVED***
import styles from "./style.module.css";

// import iconDelete from "../../assets/icons/delete.svg";
// import iconShare from "../../assets/icons/share.svg";
// import iconEdit from "../../assets/icons/edit.svg";

const TableTopAge = ({ data, title }) => {
***REMOVED***
    <div className={styles.container}>
      <div>
        <h2 className={styles.title}>{title}</h2>
      </div>
      <div className={styles.table}>
        {data.map(({ name, description }, index) => {
        ***REMOVED***
            <div className={styles.content} key={`${name}_${index}`}>
              <span className={styles.TableItems} aria-label="name">
                {name}
              </span>
              <span className={`${styles.TableItems}`} aria-label="description">
                {description}
              </span>
    ***REMOVED***
  ***REMOVED***
  ***REMOVED***)}
      </div>
    </div>
***REMOVED***
***REMOVED***

export default TableTopAge;
