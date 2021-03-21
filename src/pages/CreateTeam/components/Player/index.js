***REMOVED***
***REMOVED***
import { CreateTeamContext } from "../../context";

const Player = ({ name, age, nationality, id }) => {
  const { changePlayer } = React.useContext(CreateTeamContext);

  function dragElement(e) {
    e.dataTransfer.setData("id-player", e.target.id);
    changePlayer({ name, age, nationality, id });
***REMOVED***
***REMOVED***
    <div
      className={`${style.playerCard}`}
      draggable="true"
      onDragStart={(e) => dragElement(e)}
      id={id}
    >
      <div className={style.playerCard_line}>
        <p>
          <span>Name:</span>
          {name}
        </p>
        <p>
          <span>Age:</span>
          {age}
        </p>
      </div>
      <div className={style.playerCard_line}>
        <p>
          <span>Nationality:</span> {nationality}
        </p>
      </div>
    </div>
***REMOVED***
***REMOVED***

export default Player;
