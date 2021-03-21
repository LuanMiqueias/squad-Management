***REMOVED***
import PlayerItem from "../PlayerItem";
***REMOVED***

function splitArray(array, formationArray) {
  const arrayFormatted = formationArray.map((item, index) => {
    let newArray = [];
    let prev = 0;
    if (index > 0) {
      prev = formationArray[index - 1];
***REMOVED***
    if (index === formationArray.length - 1) {
      prev = formationArray[index] + formationArray[index] + 1;
***REMOVED***
    newArray = array.slice(prev, item + prev);
    return newArray;
***REMOVED***);
  return arrayFormatted;
}
const PlayersPanel = ({ formation }) => {
  let playersIdArray = [];
  for (let i = 0; i < 12; i++) {
    playersIdArray.push("player_" + i);
***REMOVED***
  const players = splitArray(playersIdArray, formation);
***REMOVED***
    <div className={style.playerPanel_container}>
      <div className={style.playerPanel_content}>
        <div className={style.linePlayers}>
          <PlayerItem />;
***REMOVED***
        {players.map((items, index) => {
        ***REMOVED***
            <div className={style.linePlayers} key={`linePlayers_${index}`}>
              {items.map((player) => {
                return <PlayerItem key={player} id={player} />;
        ***REMOVED***)}
    ***REMOVED***
  ***REMOVED***
  ***REMOVED***)}
      </div>
    </div>
***REMOVED***
***REMOVED***

export default PlayersPanel;
