import React from "react";
import styles from "./nav-bar.module.scss";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className={styles.container}>
      <header className={styles.appHeader}>
        <div className={styles.navContainer}>
          <div>
            <Link to="/home" className={styles.navLink}>
              Home
            </Link>
          </div>
          <div>
            <Link to="/summary" className={styles.navLink}>
              Summary
            </Link>
          </div>
          <div>
            <Link to="/skills" className={styles.navLink}>
              Skills
            </Link>
          </div>
          <div>
            <Link to="/projects" className={styles.navLink}>
              Projects
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
