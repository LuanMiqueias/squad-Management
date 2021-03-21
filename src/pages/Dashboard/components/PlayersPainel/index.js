***REMOVED***
import styles from "./style.module.css";
import AvatarPlayer from "../AvatarPlayer";
const PlayersPainel = ({ data }) => {
  function orderBy(a, b) {
    if (a.percent > b.percent) {
      return -1;
***REMOVED***
    if (a.percent < b.percent) {
      return 1;
***REMOVED***
    return 0;
***REMOVED***
  function sortPercent(array) {
    return array.sort(orderBy);
***REMOVED***
***REMOVED***
    <div className={styles.painel}>
      {sortPercent(data)?.map(({ name, percent }, index) => {
      ***REMOVED***
          <div className={styles.profile} key={name}>
            <h2>{`${index === 0 ? "Most" : "Less"} picked player`}</h2>
            <div className={styles.player}>
              <AvatarPlayer name={name} isMost={index === 0 ? true : false} />
              <h3>{percent}%</h3>
    ***REMOVED***
  ***REMOVED***
***REMOVED***
***REMOVED***)}
      <span className={styles.divider}></span>
    </div>
***REMOVED***
***REMOVED***

export default PlayersPainel;
