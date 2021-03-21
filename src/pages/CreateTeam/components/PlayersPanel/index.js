import React from "react";
import PlayerItem from "../PlayerItem";
import style from "./style.module.css";

function splitArray(array, formationArray) {
  const arrayFormatted = formationArray.map((item, index) => {
    let newArray = [];
    let prev = 0;
    if (index > 0) {
      prev = formationArray[index - 1];
    }
    if (index === formationArray.length - 1) {
      prev = formationArray[index] + formationArray[index] + 1;
    }
    newArray = array.slice(prev, item + prev);
    return newArray;
  });
  return arrayFormatted;
}
const PlayersPanel = ({ formation }) => {
  let playersIdArray = [];
  for (let i = 0; i < 12; i++) {
    playersIdArray.push("player_" + i);
  }
  const players = splitArray(playersIdArray, formation);
  return (
    <div className={style.playerPanel_container}>
      <div className={style.playerPanel_content}>
        <div className={style.linePlayers}>
          <PlayerItem />;
        </div>
        {players.map((items, index) => {
          return (
            <div className={style.linePlayers} key={`linePlayers_${index}`}>
              {items.map((player) => {
                return <PlayerItem key={player} id={player} />;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlayersPanel;
