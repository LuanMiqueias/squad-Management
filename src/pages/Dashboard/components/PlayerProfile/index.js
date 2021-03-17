***REMOVED***
import styles from "./style.module.css";
import AvatarPlayer from "../AvatarPlayer/index";

const PlayerProfile = ({ title, percent, name, isMost }) => {
***REMOVED***
    <div className={styles.profile}>
      <h2>{title}</h2>
      <div className={styles.player}>
        <AvatarPlayer name={name} isMost={isMost} />
        <h3>{percent}%</h3>
      </div>
    </div>
***REMOVED***
***REMOVED***

export default PlayerProfile;
