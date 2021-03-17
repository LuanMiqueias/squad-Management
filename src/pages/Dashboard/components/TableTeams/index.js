***REMOVED***
import styles from "./style.module.css";

import iconList from "../../../../assets/icons/arrowList.svg";
import iconDelete from "../../../../assets/icons/delete.svg";
import iconShare from "../../../../assets/icons/share.svg";
import iconEdit from "../../../../assets/icons/edit.svg";

const TableTeams = ({ data }) => {
***REMOVED***
    <div className={styles.table}>
      <div className={styles.content}>
        <span className={`${styles.TableHeader} ${styles.headerName}`}>
          Name
          <img src={iconList} alt="" className="icon" />
        </span>
        <span className={`${styles.TableHeader} ${styles.headerDescripition}`}>
          Descripition
          <img src={iconList} alt="" className="icon" />
        </span>
      </div>
      {data.map(({ name, description }, index) => {
      ***REMOVED***
          <div className={styles.content} key={`${name}_${index}`}>
            <span className={styles.TableItems}>{name}</span>
            <span className={`${styles.TableItems} ${styles.containerIcons}`}>
              {description}
              <div className={styles.contentIcons}>
                <button className={styles.iconBtn}>
                  <img src={iconDelete} alt="" className="icon" />
                </button>
                <button className={styles.iconBtn}>
                  <img src={iconShare} alt="" className="icon" />
                </button>
                <button className={styles.iconBtn}>
                  {" "}
                  <img src={iconEdit} alt="" className="icon" />
                </button>
      ***REMOVED***
            </span>
  ***REMOVED***
***REMOVED***
***REMOVED***)}
    </div>
***REMOVED***
***REMOVED***

export default TableTeams;
