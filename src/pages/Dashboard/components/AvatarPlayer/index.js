***REMOVED***
import styles from "./style.module.css";

const AvatarPlayer = ({ name, isMost }) => {
  function FormatNumber(string) {
    let FirstLetterName = "";
    Array.from(
      string.trim().replace(/(?:^|\s)\S/g, (a) => {
      ***REMOVED***FirstLetterName = FirstLetterName + a.trim());
***REMOVED***)
  ***REMOVED***
    return FirstLetterName;
***REMOVED***
***REMOVED***
    <div
      className={`${styles.avatar} ${
        isMost ? styles.borderMost : styles.borderLess
***REMOVED***`}
    >
      <span>{FormatNumber(name)}</span>
    </div>
***REMOVED***
***REMOVED***

export default AvatarPlayer;
