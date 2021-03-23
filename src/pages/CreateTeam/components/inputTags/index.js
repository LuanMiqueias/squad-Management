import React from "react";
import style from "./style.module.css";
import closeIcon from "../../../../assets/icons/close.svg";
import { CreateTeamContext } from "../../context";

const InputTags = () => {
  const [inputValue, setInputValue] = React.useState("");
  const { dataForm, deleteTag, addTag } = React.useContext(CreateTeamContext);

  function handleTag(e) {
    if (e.keyCode === 191 || e.keyCode === 13) {
      e.preventDefault();
      setInputValue("");
      addTag(inputValue);
    }
  }
  return (
    <div className={style.inputTags}>
      <label>tags</label>
      <label htmlFor="tags" className={style.borderInput}>
        {dataForm.tags?.map((item, index) => (
          <span
            className={style.tag}
            key={index + item}
            onClick={() => {
              deleteTag(item);
            }}
          >
            {item}
            <img src={closeIcon} alt="" aria-label="delete" height="16px" />
          </span>
        ))}
        <input
          className={style.inputTags_input}
          type="text"
          name="tags"
          id="tags"
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => handleTag(e)}
          value={inputValue}
        />
      </label>
    </div>
  );
};

export default InputTags;
