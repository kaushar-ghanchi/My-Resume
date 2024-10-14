import React, { useState } from "react";
import styles from "./nav-bar.module.scss";
import { Link } from "react-router-dom";

export const DropDownMenu = () => {
  return (
    <div className={styles.dropdownMenu}>
      <ul className={styles.list}>
        <li className={styles.listItem}>tic toe</li>
      </ul>
    </div>
  );
};

function Navbar() {
  const [showDropDown, setShowDropDown] = useState(false);
  const handleMouseEnter = () => {
    setShowDropDown(true);
  };
  const handleMouseExit = () => {
    setShowDropDown(false);
  };
  console.log(showDropDown);
  return (
    <div className={styles.navContainer}>
      <Link to="/home" className={styles.navLink}>
        Home
      </Link>
      <Link to="/summary" className={styles.navLink}>
        Summary
      </Link>
      <Link to="/skills" className={styles.navLink}>
        Skills
      </Link>
      <Link to="/projects" className={styles.navLink}>
        Projects
      </Link>
      <Link
        to="/examples"
        className={styles.navLink}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseExit}
      >
        Examples
        {showDropDown && <DropDownMenu />}
      </Link>
    </div>
  );
}

export default Navbar;
