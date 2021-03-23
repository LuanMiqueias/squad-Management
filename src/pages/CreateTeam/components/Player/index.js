import React from "react";
import style from "./style.module.css";

const Player = ({ name, age, nationality, id }) => {
  function dragElement(e) {
    const data = JSON.stringify({ name, age, nationality, id });
    e.dataTransfer.setData("id-player", data);
  }
  return (
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
  );
};

export default Player;
