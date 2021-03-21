import React from "react";
import styles from "./style.module.css";
import AvatarPlayer from "../AvatarPlayer";
const PlayersPainel = ({ data }) => {
  function orderBy(a, b) {
    if (a.percent > b.percent) {
      return -1;
    }
    if (a.percent < b.percent) {
      return 1;
    }
    return 0;
  }
  function sortPercent(array) {
    return array.sort(orderBy);
  }
  return (
    <div className={styles.painel}>
      {sortPercent(data)?.map(({ name, percent }, index) => {
        return (
          <div className={styles.profile} key={name}>
            <h2>{`${index === 0 ? "Most" : "Less"} picked player`}</h2>
            <div className={styles.player}>
              <AvatarPlayer name={name} isMost={index === 0 ? true : false} />
              <h3>{percent}%</h3>
            </div>
          </div>
        );
      })}
      <span className={styles.divider}></span>
    </div>
  );
};

export default PlayersPainel;
