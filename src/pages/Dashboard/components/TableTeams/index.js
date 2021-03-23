import React from "react";
import styles from "./style.module.css";

import iconList from "../../../../assets/icons/arrowList.svg";
import iconDelete from "../../../../assets/icons/delete.svg";
import iconShare from "../../../../assets/icons/share.svg";
import iconEdit from "../../../../assets/icons/edit.svg";
import { Link } from "react-router-dom";

const TableTeams = () => {
  const [dataSorted, setDataSorted] = React.useState([]);
  const [isDescSort, setIsDescSort] = React.useState(true);

  React.useEffect(() => {
    if (localStorage.teams) {
      const dataLocal = JSON.parse(localStorage.teams);
      setDataSorted([...dataLocal.teams]);
    }
    //eslint-disable-next-line
  }, []);
  const orderBy = React.useCallback(
    (type) => {
      const arraySorted = dataSorted.sort((a, b) => {
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
      if (dataSorted) {
        setDataSorted([...arraySorted]);
      }
    },
    [isDescSort, dataSorted]
  );
  function deleteTeam(id) {
    const dataLocal = JSON.parse(localStorage.teams);
    const filterDataLocal = dataLocal.teams.filter((data) => data.id !== id);
    setDataSorted(filterDataLocal);
    localStorage.teams = JSON.stringify({
      teams: [...filterDataLocal],
    });
  }
  return (
    <div className={styles.table}>
      <div className={styles.content}>
        <span
          className={`${styles.TableHeader} ${styles.headerName}`}
          onClick={() => {
            orderBy("name");
          }}
          aria-label="name"
        >
          Name
          <img src={iconList} alt="" className="icon" />
        </span>
        <span
          className={`${styles.TableHeader} ${styles.headerDescripition}`}
          onClick={() => {
            orderBy("description", dataSorted);
          }}
          aria-label="description"
        >
          Description
          <img src={iconList} alt="" className="icon" />
        </span>
      </div>
      {dataSorted.map(({ name, description, id }) => {
        return (
          <div className={styles.content} key={`${name}`} aria-label={name}>
            <span className={styles.TableItems}>{name}</span>
            <span className={`${styles.TableItems} ${styles.containerIcons}`}>
              <span>{description}</span>
              <div className={styles.contentIcons}>
                <button
                  className={styles.iconBtn}
                  onClick={() => deleteTeam(id)}
                  aria-label="Delete"
                >
                  <img src={iconDelete} alt="" className="icon" />
                  <div className={styles.tableTooltip}>Delete</div>
                </button>
                <button className={styles.iconBtn} aria-label="Share">
                  <img src={iconShare} alt="" className="icon" />
                  <div className={styles.tableTooltip}>Share</div>
                </button>
                <Link
                  to={`/edit/${id}`}
                  className={styles.iconBtn}
                  aria-label="Edit"
                >
                  <img src={iconEdit} alt="" className="icon" />
                  <div className={styles.tableTooltip}>Edit</div>
                </Link>
              </div>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default TableTeams;
