import React from "react";
import style from "./style.module.css";
const Footer = () => {
  return (
    <footer className={style.footer}>
      {new Date().getFullYear()} - All rigths reserved
    </footer>
  );
};

export default Footer;
