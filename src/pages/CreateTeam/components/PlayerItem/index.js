***REMOVED***
***REMOVED***
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
***REMOVED***
  React.useEffect(() => {
    if (player[idPlayer] && player[idPlayer].position !== id) {
      setIdPlayer(null);
***REMOVED***
***REMOVED***, [player, id, idPlayer]);
***REMOVED***
    <div
      className={`${style.player}`}
      onDragOver={(e) => {
        e.preventDefault();
***REMOVED***}
      onDrop={(e) => ondropPlayer(e)}
      id={id}
      aria-label={player[idPlayer]?.name || "Add player"}
    >
      {player[idPlayer] ? (
        <p className={`${style.playerName}`}>{player[idPlayer].name}</p>
***REMOVED***
        <img src={iconPlus} alt="" aria-label="Add player" draggable="false" />
***REMOVED***
    </div>
***REMOVED***
***REMOVED***

export default PlayerItem;
