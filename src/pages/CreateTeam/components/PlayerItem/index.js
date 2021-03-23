import React from "react";
import style from "./style.module.css";
import iconPlus from "../../../../assets/icons/add.svg";
import { CreateTeamContext } from "../../context";

const PlayerItem = ({ id }) => {
  const {
    dataForm,
    deletePlayer,
    changePlayer,
    formatNumber,
  } = React.useContext(CreateTeamContext);
  const [idPlayer, setIdPlayer] = React.useState(0);
  const [player, setPlayer] = React.useState(null);

  React.useEffect(() => {
    dataForm.players?.forEach((item) => {
      if (item.position === id) {
        setIdPlayer(item.position);
      } else {
        setPlayer(null);
        return setIdPlayer(null);
      }
    });
    setPlayer(dataForm.players?.find((item) => item.position === id));
    //eslint-disable-next-line
  }, [idPlayer, dataForm]);
  function ondropPlayer(e) {
    e.preventDefault();
    const data = JSON.parse(e.dataTransfer.getData("id-player"));
    if (data) {
      e.target.classList.add(style.playerDrop);
      changePlayer({ ...data, position: id });
      // setIdPlayer(data.id);
    } else {
      console.log("err.message");
    }
  }
  return (
    <div
      className={`${style.player} ${player && style.playerSelected}`}
      onDragOver={(e) => {
        e.preventDefault();
        e.target.classList.remove(style.playerDrop);
      }}
      onDrop={(e) => ondropPlayer(e)}
      id={id}
    >
      {player ? (
        <>
          <p className={`${style.playerName}`}>{formatNumber(player.name)}</p>
          <div className={style.tooltip} draggable="false">
            <p>
              <span>Name:</span>
              {player.name}
            </p>
            <p>
              <span>Nationality:</span>
              {player.nationality}
            </p>
            <p>
              <span>Age:</span>
              {player.age}
            </p>
            <button
              onClick={(e) => {
                e.preventDefault();
                return deletePlayer(player.id);
              }}
            >
              Excluir
            </button>
          </div>
        </>
      ) : (
        <img src={iconPlus} alt="" draggable="false" />
      )}
    </div>
  );
};

export default PlayerItem;
