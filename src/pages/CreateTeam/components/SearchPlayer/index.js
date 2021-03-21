import React from "react";
import api from "../../../../services/api";
import Player from "../Player";
import style from "./style.module.css";

const SearchPlayer = () => {
  const [search, setSearch] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [dataSearchs, setDataSearchs] = React.useState([]);
  const [error, setError] = React.useState(null);

  async function fecthAPI(a) {
    setLoading(true);
    try {
      const responce = await api.get(`/players?search=${a}&league=15`, {
        headers: {
          "x-rapidapi-host": "v3.football.api-sports.io",
          "x-rapidapi-key": "05e24bda918f240d7bcd30e797634d7e",
        },
      });
      console.log(responce);
      setLoading(false);
      if (responce.status !== 200) {
        setError(responce.statusText);
      }
      if (responce.data.errors.requests) {
        setError(
          "Sorry for the inconvenience, this site uses a free API plan and you or someone else has exceeded the limit of one day 😭. Come back later."
        );
      }
      return setDataSearchs(responce.data);
    } catch (err) {
      setError(err);
    }
  }
  function onChange(e) {
    setSearch(e.target.value);
    let timer;
    e.target.onkeyup = () => {
      clearTimeout(timer);
      timer = setTimeout(() => fecthAPI(e.target.value), 500);
    };
    e.target.onkeydown = () => {
      clearTimeout(timer);
    };
  }
  return (
    <>
      {loading ? (
        <div className="loading"></div>
      ) : (
        <div className={style.containerPlayers}>
          {error}
          {dataSearchs.response?.map(({ player }) => (
            <Player
              name={player.name}
              age={player.age}
              nationality={player.nationality}
              key={player.id}
              id={player.id}
            />
          ))}
        </div>
      )}
      <input
        type="text"
        id="searchPlayers"
        placeholder="Lionel Messi"
        value={search}
        onInput={(e) => onChange(e)}
        required
      />
    </>
  );
};

export default SearchPlayer;
