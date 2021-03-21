import React from "react";

const Container = ({ children, classNameContainer, classNameContent }) => {
  return (
    <div className={`container ${classNameContainer}`}>
      <div className={`content ${classNameContent}`}>{children}</div>
    </div>
  );
};

export default Container;
