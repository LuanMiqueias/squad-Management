import React from "react";
import { CreateTeamContext } from "../../context";
import PlayerItem from "../PlayerItem";
import style from "./style.module.css";

function splitArray(array, formationArray) {
  if (array && formationArray) {
    const formation = formationArray?.split(",").map(Number);

    const arrayFormatted = formation.map((item, index) => {
      let newArray = [];
      let prev = 0; //Serve para pular os valores anterios já cortados

      if (index === 1) {
        prev = formation[index - 1];
        //pega valor anterior de formation
      }
      if (index > 1) {
        prev = formation[index] + formation[index] + 1;
        //pega valor atual mais o proximo valor
      }
      newArray = array?.slice(prev, item + prev);
      //corta a array de acordo com os valores de item/formation
      return newArray;
    });
    return arrayFormatted;
  }
}

const PlayersPanel = ({ formation }) => {
  const { cleanPlayer, changePlayer } = React.useContext(CreateTeamContext);

  // React.useMemo(() => {
  //   cleanPlayer();
  //   // eslint-disable-next-line
  // }, [changePlayer]);

  let playersIdArray = [];
  for (let i = 1; i < 11; i++) {
    playersIdArray.push("player_" + i);
  }
  const players = splitArray(playersIdArray, formation);

  return (
    <div className={style.playerPanel_container}>
      <div className={style.playerPanel_content}>
        <div className={style.linePlayers}>
          <PlayerItem id="player_0" />;
        </div>
        {players?.map((items, index) => {
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
