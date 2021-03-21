import React from "react";
import style from "./style.module.css";
import iconPlus from "../../../../assets/icons/add.svg";
import { CreateTeamContext } from "../../context";

const PlayerItem = ({ id }) => {
  const { player, changePosition } = React.useContext(CreateTeamContext);
  const [idPlayer, setIdPlayer] = React.useState();

  function ondropPlayer(e) {
    e.preventDefault();
    const data = e.dataTransfer.getData("id-player");

    changePosition(data, id);
    setIdPlayer(data);
  }
  React.useEffect(() => {
    if (player[idPlayer] && player[idPlayer].position !== id) {
      setIdPlayer(null);
    }
  }, [player, id, idPlayer]);
  return (
    <div
      className={`${style.player}`}
      onDragOver={(e) => {
        e.preventDefault();
      }}
      onDrop={(e) => ondropPlayer(e)}
      id={id}
      aria-label={player[idPlayer]?.name || "Add player"}
    >
      {player[idPlayer] ? (
        <p className={`${style.playerName}`}>{player[idPlayer].name}</p>
      ) : (
        <img src={iconPlus} alt="" aria-label="Add player" draggable="false" />
      )}
    </div>
  );
};

export default PlayerItem;
