import React from "react";
import styles from "./style.module.css";

const AvatarPlayer = ({ name, isMost }) => {
  function FormatNumber(string) {
    let FirstLetterName = "";
    Array.from(
      string.trim().replace(/(?:^|\s)\S/g, (a) => {
        return (FirstLetterName = FirstLetterName + a.trim());
      })
    );
    return FirstLetterName;
  }
  return (
    <div
      className={`${styles.avatar} ${
        isMost ? styles.borderMost : styles.borderLess
      }`}
    >
      <span>{FormatNumber(name)}</span>
    </div>
  );
};

export default AvatarPlayer;
