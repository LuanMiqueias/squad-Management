***REMOVED***
import Box from "../../components/Box";
import Column from "../../components/Column";
import Container from "../../components/Container";
import PlayersPanel from "./components/PlayersPanel";
***REMOVED***
import validator from "validator";
import SearchPlayer from "./components/SearchPlayer";
import { CreateTeamProvider } from "./context";
import InputTags from "./components/inputTags";

const CreateTeam = () => {
  const [dataForm, setDataForm] = React.useState({
    teamName: "",
    teamDescription: "",
    teamWebsite: "",
    teamType: "real",
    teamFormation: "3, 2, 2, 3",
***REMOVED***);
  const [formation, setFormation] = React.useState(
    dataForm.teamFormation.split(",").map(Number) //change array string to number before saving
***REMOVED***
  React.useMemo(() => {
    //top of page in loads
    window.scrollTo(0, 0);
***REMOVED***, []);
  function checkOnline(url) {
    return validator.isURL(url);
***REMOVED***
  function ToggleInvalidIput(input, type) {
    if (type === "invalid") {
      input.classList.add(style.createTeam_invalid);
***REMOVED*** else {
      input.classList.remove(style.createTeam_invalid);
***REMOVED***
***REMOVED***
  const changeValues = React.useCallback(
    //Validates each letter entered
    (e) => {
      const { name, value } = e.target;
      if (name === "teamFormation") {
        //if the name is the same, 'teamFormation' turn into number and save in state
        setFormation(value.split(",").map(Number));
***REMOVED***
      if (name === "teamWebsite") {
        //valid website url
        if (!checkOnline(value)) {
          ToggleInvalidIput(e.currentTarget, "invalid");
  ***REMOVED*** else {
          ToggleInvalidIput(e.currentTarget, "valid");
  ***REMOVED***
***REMOVED***
      if (value.trim() === "" && e.target.required) {
        //valid if input is filled
        ToggleInvalidIput(e.currentTarget, "invalid");
***REMOVED*** else if (name !== "teamWebsite") {
        ToggleInvalidIput(e.currentTarget, "valid");
***REMOVED***
      setDataForm({ ...dataForm, [name]: value });
***REMOVED***,
    [dataForm]
***REMOVED***
***REMOVED***
    <div>
      <Container classNameContainer={style.createTeam_container}>
        <Column>
          <Box
            title="Create your team"
            classNameBox={style.createTeam_box_conteiner}
          >
            <form className={style.createTeam_form}>
              <h2 className={style.subTitle}>Team Information</h2>
              <div className={style.createTeam_box_columns}>
                <Column>
                  <div className={style.createTeam_inputBlock}>
              ***REMOVED***
              ***REMOVED***
                      id="teamName"
                      name="teamName"
                      placeholder="Insert team name"
              ***REMOVED***
                      autoFocus
                      value={dataForm.teamName}
                      onChange={(e) => changeValues(e)}
        ***REMOVED***
                    <label htmlFor="teamName">Team name</label>
          ***REMOVED***
                  <div className={style.createTeam_inputBlock}>
                    <textarea
                      rows="8"
                      id="description"
                      name="teamDescription"
                      value={dataForm.teamDescription}
                      onChange={(e) => changeValues(e)}
                    ></textarea>
                    <label htmlFor="description">Descripton</label>
          ***REMOVED***
                </Column>
                <Column>
                  <div className={style.createTeam_inputBlock}>
              ***REMOVED***
              ***REMOVED***
                      id="teamWebsite"
                      name="teamWebsite"
                      placeholder="http://myteam.com"
                      value={dataForm.teamWebsite}
              ***REMOVED***
                      onChange={(e) => changeValues(e)}
        ***REMOVED***
                    <label htmlFor="teamWebsite">Team website</label>
          ***REMOVED***
                  <div
                    className={`${style.createTeam_inputBlock} ${style.createTeam_inputBlock_radio_container}`}
                  >
                    <div className={style.createTeam_inputBlock_radio_content}>
                      <div className={style.createTeam_inputBlock_radio}>
                  ***REMOVED***
                          type="radio"
                          name="teamType"
                          id="typeReal"
                          checked={dataForm.teamType === "real" ? true : false}
                          value="real"
                          onChange={(e) => changeValues(e)}
            ***REMOVED***
                        <label htmlFor="typeReal">Real</label>
              ***REMOVED***
                      <div className={style.createTeam_inputBlock_radio}>
                  ***REMOVED***
                          type="radio"
                          name="teamType"
                          checked={
                            dataForm.teamType === "fantasy" ? true : false
                    ***REMOVED***
                          value=""
                          id="typeFantasy"
                          onChange={(e) => changeValues(e)}
            ***REMOVED***
                        <label htmlFor="typeFantasy">Fantasy</label>
              ***REMOVED***
            ***REMOVED***
                    Team type
          ***REMOVED***
                  <InputTags classNameInput={style.createTeam_inputBlock} />
                </Column>
      ***REMOVED***
              <h2 className={style.subTitle}>Configure Squad</h2>
              <div className={style.createTeam_box_columns}>
                <CreateTeamProvider>
                  <Column>
                    <div
                      className={`${style.createTeam_inputBlock} ${style.createTeam_inputBlock_select}`}
                    >
                      <label htmlFor="teamFormation">Formation</label>

                      <select
                        name="teamFormation"
                        onInput={(e) => changeValues(e)}
                        value={dataForm.teamFormation}
                      >
                        <option value={"3, 2, 2, 3"}>3 - 2 - 2 - 3</option>
                        <option value={"3, 2, 3, 1"}>3 - 2 - 3 - 1</option>
                        <option value={"3, 4, 3"}>3 - 4 - 3</option>
                        <option value={"3, 5, 2"}>3 - 5 - 2</option>
                        <option value={"4, 2, 3, 1"}>4 - 2 - 3 - 1</option>
                        <option value={"4, 3, 1, 1"}>4 - 3 - 1 - 1</option>
                        <option value={"4, 3, 2"}>4 - 3 - 2</option>
                        <option value={"4, 4, 2"}>4 - 4 - 2</option>
                        <option value={"4, 4, 2"}>4 - 5 - 1</option>
                        <option value={"4, 5, 1"}>5 - 4 -1</option>
                      </select>
            ***REMOVED***
        ***REMOVED***sPanel formation={formation} />
                    <button className={style.createTeam_button_submit}>
                      Save
                    </button>
                  </Column>
                  <Column>
                    <div className={style.createTeam_inputBlock}>
                      <SearchPlayer />
                      <label htmlFor="search">Search Players</label>
            ***REMOVED***
                  </Column>
                </CreateTeamProvider>
      ***REMOVED***
            </form>
          </Box>
        </Column>
      </Container>
    </div>
***REMOVED***
***REMOVED***

export default CreateTeam;
