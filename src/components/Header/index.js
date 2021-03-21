import React from "react";
import styles from "./style.module.css";

const Header = () => {
  return (
    <header className={`${styles.header} container`}>
      <div className={`${styles.headerContent} content`}>
        <div className={styles.logo}>Squad Management Tool</div>
        <div className={styles.navContainer}>
          <nav>
            <a href="/#">
              John Smith <span className="span-img-fake">JS</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Header;
