import React from "react";
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
          }
        } else {
          setIsDescSort(!isDescSort);
          if (a[type].toLowerCase() > b[type].toLowerCase()) {
            return -1;
          }
        }
        return 0;
      });
      setDataSorted([...arraySorted]);
    },
    [isDescSort]
  );
  React.useMemo(() => {
    orderBy("name", data);
  }, [data]);

  return (
    <div className={styles.table}>
      <div className={styles.content}>
        <span
          className={`${styles.TableHeader} ${styles.headerName}`}
          onClick={() => {
            orderBy("name", data);
          }}
        >
          Name
          <img src={iconList} alt="" className="icon" />
        </span>
        <span
          className={`${styles.TableHeader} ${styles.headerDescripition}`}
          onClick={() => {
            orderBy("description", data);
          }}
        >
          Description
          <img src={iconList} alt="" className="icon" />
        </span>
      </div>
      {dataSorted.map(({ name, description }) => {
        return (
          <div className={styles.content} key={`${name}`}>
            <span className={styles.TableItems} aria-label="name">
              {name}
            </span>
            <span
              className={`${styles.TableItems} ${styles.containerIcons}`}
              aria-label="description"
            >
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
              </div>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default TableTeams;
