import React from "react";
import style from "./style.module.css";
import { CreateTeamContext } from "../../context";
import Column from "../../../../components/Column";
import SearchPlayer from "../SearchPlayer";
import PlayersPanel from "../PlayersPanel";
import InputTags from "../inputTags";
import { useParams } from "react-router";

const Form = () => {
  const {
    dataForm,
    saveTeam,
    handleChange,
    UpdateParams,
    error,
  } = React.useContext(CreateTeamContext);
  const params = useParams();
  React.useEffect(() => {
    UpdateParams(params);
    // eslint-disable-next-line
  }, []);
  return (
    <form className={style.form} onSubmit={(e) => saveTeam(e)}>
      <h2 className={style.subTitle}>Team Information</h2>
      <div className={style.box_columns}>
        <Column>
          <div className={style.inputBlock}>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Insert team name"
              required
              autoFocus
              value={dataForm?.name}
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="name">Team name</label>
          </div>
          <div className={style.inputBlock}>
            <textarea
              rows="8"
              id="description"
              name="description"
              value={dataForm?.description}
              onChange={(e) => handleChange(e)}
            ></textarea>
            <label htmlFor="description">Descripton</label>
          </div>
        </Column>
        <Column>
          <div className={style.inputBlock}>
            <input
              type="text"
              id="website"
              name="website"
              placeholder="http://myteam.com"
              value={dataForm?.website}
              required
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="website">Team website</label>
          </div>
          <div
            className={`${style.inputBlock} ${style.inputBlock_radio_container}`}
          >
            <div className={style.inputBlock_radio_content}>
              <div className={style.inputBlock_radio}>
                <input
                  type="radio"
                  name="type"
                  id="real"
                  checked={dataForm?.type === "real" ? true : false}
                  value="real"
                  onChange={(e) => handleChange(e)}
                />
                <label htmlFor="real">Real</label>
              </div>
              <div className={style.inputBlock_radio}>
                <input
                  type="radio"
                  name="type"
                  checked={dataForm?.type === "fantasy" ? true : false}
                  value="fantasy"
                  id="fantasy"
                  onChange={(e) => handleChange(e)}
                />
                <label htmlFor="fantasy">Fantasy</label>
              </div>
            </div>
            Team type
          </div>
          <InputTags classNameInput={style.inputBlock} />
        </Column>
      </div>
      <h2 className={style.subTitle}>Configure Squad</h2>
      <div className={style.box_columns}>
        <Column>
          <div className={`${style.inputBlock} ${style.inputBlock_select}`}>
            <label htmlFor="formation">Formation</label>

            <select
              name="formation"
              onInput={(e) => {
                return handleChange(e);
              }}
              value={dataForm.formation}
            >
              <option value={"3,4,3"}>3-4-3</option>
              <option value={"4,1,4,1"}>4-1-4-1</option>
              <option value={"4,1,3,2"}>4-1-3-2</option>
              <option value={"4,2,4"}>4-2-4</option>
              <option value={"4,3,3"}>4-3-3</option>
              <option value={"4,4,2"}>4-4-2</option>
              <option value={"3,5,2"}>3-5-2</option>
              <option value={"4,2,3,1"}> 4-2-3-1</option>
              <option value={"3,6,1"}>3-6-1</option>
              <option value={"4,5,1"}>4-5-1</option>
              <option value={"5,4,1"}>5-4-1</option>
              <option value={"5,3,2"}>5-3-2</option>
            </select>
          </div>
          <PlayersPanel formation={dataForm?.formation} />
          <span className={style.textErrorForm}>{error}</span>

          <button type="submit" className={style.button_submit}>
            Save
          </button>
        </Column>
        <Column>
          <div className={style.inputBlock}>
            <SearchPlayer />
            <label htmlFor="search">Search Players</label>
          </div>
        </Column>
      </div>
    </form>
  );
};

export default Form;
