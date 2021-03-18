***REMOVED***
import styles from "./style.module.css";

import iconList from "../../../../assets/icons/arrowList.svg";
import iconDelete from "../../../../assets/icons/delete.svg";
import iconShare from "../../../../assets/icons/share.svg";
import iconEdit from "../../../../assets/icons/edit.svg";

const TableTeams = ({ data }) => {
  const [dataSorted, setDataSorted] = React.useState(data);
  const [isDescSort, setIsDescSort] = React.useState(false);

  const orderBy = React.useCallback(
    (type, array) => {
      const arraySorted = array.sort((a, b) => {
        if (!isDescSort) {
          setIsDescSort(!isDescSort);
          if (a[type].toLowerCase() < b[type].toLowerCase()) {
            return -1;
    ***REMOVED***
  ***REMOVED*** else {
          setIsDescSort(!isDescSort);
          if (a[type].toLowerCase() > b[type].toLowerCase()) {
            return -1;
    ***REMOVED***
  ***REMOVED***
        return 0;
***REMOVED***
      setDataSorted([...arraySorted]);
***REMOVED***,
    [isDescSort]
***REMOVED***
  React.useMemo(() => {
    orderBy("name", data);
***REMOVED***, [data]);

***REMOVED***
    <div className={styles.table}>
      <div className={styles.content}>
        <span
          className={`${styles.TableHeader} ${styles.headerName}`}
          onClick={() => {
            orderBy("name", data);
    ***REMOVED***}
        >
          Name
          <img src={iconList} alt="" className="icon" />
        </span>
        <span
          className={`${styles.TableHeader} ${styles.headerDescripition}`}
          onClick={() => {
            orderBy("description", data);
    ***REMOVED***}
        >
          Descripition
          <img src={iconList} alt="" className="icon" />
        </span>
      </div>
      {dataSorted.map(({ name, description, id }) => {
      ***REMOVED***
          <div className={styles.content} key={`${name}`}>
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
