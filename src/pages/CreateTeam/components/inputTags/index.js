***REMOVED***
***REMOVED***
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
***REMOVED***
***REMOVED***
***REMOVED***
    <div className={style.inputTags}>
      <label>tags</label>
      <label htmlFor="tags" className={style.borderInput}>
        {tags?.map((item, index) => (
          <span
            className={style.tag}
            key={index + item}
            onClick={() => {
              setTags(tags.filter((tag) => tag !== item));
      ***REMOVED***}
          >
            {item}{" "}
            <img src={closeIcon} alt="" aria-label="delete" height="16px" />
          </span>
        ))}
  ***REMOVED***
          className={style.inputTags_input}
  ***REMOVED***
          name="tags"
          id="tags"
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => addTag(e)}
          value={inputValue}
  ***REMOVED***
      </label>
    </div>
***REMOVED***
***REMOVED***

export default InputTags;
