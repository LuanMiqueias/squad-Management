***REMOVED***
import styles from "./style.module.css";
import PlayerProfile from "../PlayerProfile/index";
const PlayersPainel = ({ data }) => {
  function orderBy(a, b) {
    console.log(a, b);
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
      {sortPercent(data)?.map((item, index) => {
      ***REMOVED***
          <PlayerProfile
            percent={item.percent}
            isMost={index === 0 ? true : false}
            title={`${index === 0 ? "Most" : "Less"} picked player`}
            name={item.name}
          ></PlayerProfile>
***REMOVED***
***REMOVED***)}
      <span className={styles.divider}></span>
    </div>
***REMOVED***
***REMOVED***

export default PlayersPainel;
