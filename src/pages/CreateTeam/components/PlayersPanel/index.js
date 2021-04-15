import React from "react";
import { CreateTeamContext } from "../../context";
import PlayerItem from "../PlayerItem";
import style from "./style.module.css";
import { useParams } from "react-router";

function splitArray(array, formationArray) {
  let prev = 0; //Serve para pular os valores anterios já cortados
  let newArray = [];
  if (array && formationArray) {
    const formation = formationArray?.split(",").map(Number);
    const arrayFormatted = formation.map((item, index) => {
      if (index === 1) {
        prev = formation[index - 1];
        //pega valor anterior de formation
      }
      if (index > 1) {
        prev = prev + formation[index - 1];
      }
      newArray = array?.slice(prev, item + prev);
      //corta a array de acordo com os valores de item/formation
      return newArray;
    });
    return arrayFormatted;
  }
}

const PlayersPanel = ({ formation }) => {
  const { cleanPlayer } = React.useContext(CreateTeamContext);
  const params = useParams();

  console.log(params.id);
  React.useEffect(() => {
    if (!params.id) {
      cleanPlayer();
    }
    // eslint-disable-next-line
  }, [formation]);

  let playersIdArray = [];
  for (let i = 1; i < 11; i++) {
    playersIdArray.push("player_" + i);
  }
  const players = splitArray(playersIdArray, formation);
  console.log(players);
  return (
    <div className={style.playerPanel_container}>
      <div className={style.playerPanel_content}>
        <div className={style.linePlayers}>
          <PlayerItem id="player_0" />
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
