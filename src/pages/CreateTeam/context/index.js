import React from "react";
import { useHistory } from "react-router";
import validator from "validator";

export const CreateTeamContext = React.createContext({});

export const CreateTeamProvider = ({ children }) => {
  const navigate = useHistory();
  const [params, setParams] = React.useState({});
  const [filterSearch, setFilterSearch] = React.useState([]);
  const [dataSearch, setDataSearch] = React.useState([]);
  const [error, setError] = React.useState("");

  const [dataForm, setDataForm] = React.useState({
    name: "",
    description: "",
    website: "",
    type: "real",
    formation: "3, 2, 2, 3",
    players: [],
    tags: [],
  });

  React.useEffect(() => {
    //Check id from params
    if (params.id) {
      const localData = JSON.parse(localStorage.teams);
      const data = localData.teams.filter((item) => item.id === params.id)[0];
      setDataForm({ ...data });
      console.log("params");
    }
    //eslint-disable-next-line
  }, [params]);
  React.useEffect(() => {
    //Filter search results
    filterSearchData(dataSearch);
    //eslint-disable-next-line
  }, [dataForm]);

  //---InputSearch
  function handleSearch(data) {
    setDataSearch(data);
    filterSearchData(data);
  }
  function filterSearchData(data) {
    if (dataSearch) {
      const PlayerSelected = [...dataForm.players];
      let filteredResult = PlayerSelected.map((player) => player.id);
      setFilterSearch([
        ...data?.filter(
          (response) => !filteredResult.includes(response.player.id)
        ),
      ]);
    }
  }
  //---End InputSearch

  //---Form
  function UpdateParams(params) {
    setParams(params);
  }
  function cleanDataSearch() {
    setFilterSearch([]);
    setDataSearch([]);
  }
  function checkOnline(url) {
    return validator.isURL(url);
  }
  function ToggleInvalidIput(input, type) {
    if (type === "invalid") {
      input.classList.add("input_invalid");
    } else {
      input.classList.remove("input_invalid");
    }
  }
  function handleChange(e) {
    //Validates each letter entered
    const { name, value } = e.target;
    if (name === "website") {
      //valid website url
      if (!checkOnline(value)) {
        ToggleInvalidIput(e.currentTarget, "invalid");
      } else {
        ToggleInvalidIput(e.currentTarget, "valid");
      }
    }
    if (value.trim() === "" && e.target.required) {
      //valid if input is filled
      ToggleInvalidIput(e.currentTarget, "invalid");
    } else if (name !== "website") {
      ToggleInvalidIput(e.currentTarget, "valid");
    }
    setDataForm({ ...dataForm, [name]: value });
  }
  function addDataForm(value, key) {
    setDataForm({ ...dataForm, [key]: value });
  }
  function addTag(value) {
    console.log(dataForm.tags.filter((tag) => tag === value));
    const filterTags = dataForm.tags.filter(
      //Checks if there is already a tag with this value
      (tag) => tag.trim().toLowerCase() === value.trim().toLowerCase()
    ).length;

    if (filterTags <= 0 && value.trim()) {
      setDataForm({
        ...dataForm,
        tags: [...dataForm.tags, value.trim().toLowerCase()],
      });
    }
  }
  function deleteTag(value) {
    setDataForm({
      ...dataForm,
      tags: dataForm.tags.filter((tag) => tag !== value),
    });
  }
  function validForm(data) {
    const { name, description, website, type, formation, players } = data;
    if (
      players.length === 11 &&
      description &&
      name &&
      validator.isURL(website) &&
      formation &&
      type
    ) {
      return true;
    } else {
      setError("* All fields must be filled except description and tags");
      if (players.length < 11 || !players.length === 11) {
        setError("* You must select all players");
      }
      if (!validator.isURL(website)) {
        setError("* Invalid website");
      }
      return false;
    }
  }
  //---End Form

  //---Player
  function changePlayer(playerData) {
    const filterPlayer = dataForm.players.filter(
      (player) => player.id === playerData.id
    ).length;
    if (filterPlayer <= 0) {
      //se player ainda não foi selecionado
      setDataForm({
        ...dataForm,
        players: [...dataForm.players, { ...playerData }],
      });
    } else {
      setDataForm({
        ...dataForm,
        players: [
          ...dataForm.players.map((player) => {
            let playerNewPosition = { ...player };
            if (player.id === playerData.id) {
              playerNewPosition = { ...player, position: playerData.position };
            }
            return playerNewPosition;
          }),
        ],
      });
    }
  }
  function deletePlayer(id) {
    setDataForm({
      ...dataForm,
      players: [...dataForm.players.filter((player) => player.id !== id)],
    });
  }
  function cleanPlayer() {
    setDataForm((ant) => {
      return { ...ant, players: [] };
    });
  }
  function formatNumber(string) {
    let FirstLetterName = "";
    if (typeof string === "string" && string !== "") {
      if (string.trim().split(" ").length <= 1) {
        FirstLetterName =
          string.split("")[0] + string.split("")[string.split("").length - 1];
        return FirstLetterName;
      } else {
        Array.from(
          string.trim().replace(/(?:^|\s)\S/g, (a) => {
            return (FirstLetterName = FirstLetterName + a.trim());
          })
        );
        return (
          FirstLetterName.split("")[0] +
          FirstLetterName.split("")[FirstLetterName.split("").length - 1]
        );
      }
    }
  }
  //---End Player

  //---Save or delete form state
  function saveTeam(e) {
    e.preventDefault();
    if (validForm(dataForm)) {
      const idTeam =
        "" +
        new Date().getMilliseconds() +
        new Date().getSeconds() +
        new Date().getMinutes() +
        new Date().getHours() +
        new Date().getDay() +
        new Date().getMonth() +
        new Date().getFullYear() +
        "team";
      if (localStorage.teams) {
        const dataLocal = JSON.parse(localStorage.teams);
        if (dataForm.id) {
          const filterDataLocal = dataLocal.teams.filter(
            (data) => data.id !== dataForm.id
          );
          localStorage.teams = JSON.stringify({
            teams: [...filterDataLocal, dataForm],
          });
        } else {
          localStorage.teams = JSON.stringify({
            teams: [...dataLocal.teams, { ...dataForm, id: idTeam }],
          });
        }
      } else {
        localStorage.teams = JSON.stringify({
          teams: [{ ...dataForm, id: idTeam }],
        });
      }
      navigate.push("/");
    } else {
      console.log("erro");
    }
  }
  function deleteTeam(id) {
    const dataLocal = JSON.parse(localStorage.teams);
    const filterDataLocal = dataLocal.teams.filter((data) => data.id !== id);
    localStorage.teams = JSON.stringify({
      teams: [...filterDataLocal],
    });
  }
  //---End Save or delete form state
  return (
    <CreateTeamContext.Provider
      value={{
        dataForm,
        filterSearch,
        error,
        addDataForm,
        saveTeam,
        handleChange,
        changePlayer,
        deletePlayer,
        cleanPlayer,
        formatNumber,
        UpdateParams,
        addTag,
        deleteTag,
        handleSearch,
        cleanDataSearch,
        deleteTeam,
      }}
    >
      {children}
    </CreateTeamContext.Provider>
  );
};
