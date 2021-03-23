import React from "react";
import api from "../../../../services/api";
import { CreateTeamContext } from "../../context";
import Player from "../Player";
import style from "./style.module.css";

const SearchPlayer = () => {
  const { handleSearch, filterSearch, cleanDataSearch } = React.useContext(
    CreateTeamContext
  );
  const [search, setSearch] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [message, setMessage] = React.useState("");

  const fakeData = [
    {
      player: {
        name: "Luan Madson Gedeão de Paiva",
        age: 31,
        nationality: "Brazil",
        id: 9899,
        position: "player_10",
      },
    },
    {
      player: {
        name: "Luan",
        age: 28,
        nationality: "Brazil",
        id: 9913,
        position: "player_9",
      },
    },
    {
      player: {
        name: "Luan",
        age: 28,
        nationality: "Brazil",
        id: 10502,
        position: "player_8",
      },
    },
    {
      player: {
        name: "Luan",
        age: 28,
        nationality: "Brazil",
        id: 976245,
        position: "player_8",
      },
    },
    {
      player: {
        name: "Luan",
        age: 28,
        nationality: "Brazil",
        id: 38953,
        position: "player_8",
      },
    },
    {
      player: {
        name: "Luan",
        age: 28,
        nationality: "Brazil",
        id: 951345,
        position: "player_8",
      },
    },
    {
      player: {
        name: "Luan",
        age: 28,
        nationality: "Brazil",
        id: 97346,
        position: "player_8",
      },
    },
    {
      player: {
        name: "Luan",
        age: 28,
        nationality: "Brazil",
        id: 7986,
        position: "player_8",
      },
    },
    {
      player: {
        name: "Luan",
        age: 28,
        nationality: "Brazil",
        id: 7563,
        position: "player_8",
      },
    },
    {
      player: {
        name: "Luan",
        age: 28,
        nationality: "Brazil",
        id: 2366,
        position: "player_8",
      },
    },
    {
      player: {
        name: "Luan",
        age: 28,
        nationality: "Brazil",
        id: 6574,
        position: "player_8",
      },
    },
  ];
  async function fecthAPI(e) {
    if (e.target.value.trim() !== "") {
      setLoading(true);
      setError("");
      try {
        const responce = await api.get(
          `/players?search=${e.target.value}&league=15`,
          {
            headers: {
              "x-rapidapi-host": "v3.football.api-sports.io",
              "x-rapidapi-key": "05e24bda918f240d7bcd30e797634d7e",
            },
          }
        );
        console.log(responce);
        if (responce.status !== 200) {
          setError(responce.statusText);
        }
        if (responce.data.errors.requests) {
          setError(
            "Sorry for the inconvenience, this site uses a free API plan and you or someone else has exceeded the day limit 😭. Use this false data below to test:"
          );
          handleSearch(fakeData);
        }
        if (responce.data.response.length > 0) {
          handleSearch(responce.data.response);
        } else if (!responce.data.errors) {
          setMessage("no search results found");
        }
      } catch (err) {
        setError(err.message);
        return;
      } finally {
        setLoading(false);
      }
    }
  }

  function handleChange(e) {
    cleanDataSearch();
    setSearch(e.target.value);
    setMessage("");
    setError("");
    e.target.classList.remove("input_invalid");
    cleanDataSearch();
    if (e.target.value.length >= 4) {
      setLoading(true);
      let timer;
      e.target.onkeyup = () => {
        clearTimeout(timer);
        timer = setTimeout(() => fecthAPI(e), 500);
      };
      e.target.onkeydown = () => {
        clearTimeout(timer);
      };
    } else if (e.target.value !== "") {
      e.target.classList.add("input_invalid");
    }
  }
  return (
    <>
      {loading ? (
        <div className="loading"></div>
      ) : (
        <div className={style.containerPlayers}>
          {error && <span className={style.spanError}>{error}</span>}
          {filterSearch?.map(({ player }) => (
            <Player
              name={player.name}
              age={player.age}
              nationality={player.nationality}
              key={player.id}
              id={player.id}
            />
          ))}
          {message && <p>{message}</p>}
          {search && (
            <>{!filterSearch.length && <p>No search results found</p>}</>
          )}
        </div>
      )}
      <input
        type="text"
        id="searchPlayers"
        placeholder="Lionel Messi"
        value={search}
        onChange={(e) => handleChange(e)}
      />
    </>
  );
};

export default SearchPlayer;
