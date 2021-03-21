import React from "react";
import style from "./style.module.css";
import closeIcon from "../../../../assets/icons/close.svg";

const InputTags = () => {
  const [tags, setTags] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");

  function addTag(e) {
    console.log(e.target.value);
    if (e.keyCode === 191 || e.keyCode === 13) {
      setTags([...tags, inputValue]);
      setInputValue("");
      e.preventDefault();
    }
  }
  return (
    <div className={style.inputTags}>
      <label>tags</label>
      <label htmlFor="tags" className={style.borderInput}>
        {tags?.map((item, index) => (
          <span
            className={style.tag}
            key={index + item}
            onClick={() => {
              setTags(tags.filter((tag) => tag !== item));
            }}
          >
            {item}{" "}
            <img src={closeIcon} alt="" aria-label="delete" height="16px" />
          </span>
        ))}
        <input
          className={style.inputTags_input}
          type="text"
          name="tags"
          id="tags"
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => addTag(e)}
          value={inputValue}
        />
      </label>
    </div>
  );
};

export default InputTags;
