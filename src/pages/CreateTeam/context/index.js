import React from "react";

export const CreateTeamContext = React.createContext({});

export const CreateTeamProvider = ({ children }) => {
  const [player, setPlayer] = React.useState({});

  function changePlayer(playerData) {
    setPlayer({ ...player, [playerData.id]: playerData });
  }
  function changePosition(id, positionPlayer) {
    setPlayer({ ...player, [id]: { ...player[id], position: positionPlayer } });
  }
  return (
    <CreateTeamContext.Provider
      value={{ player, changePlayer, changePosition }}
    >
      {children}
    </CreateTeamContext.Provider>
  );
};
