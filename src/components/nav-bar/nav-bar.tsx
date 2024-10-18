import React, { useState } from "react";
import styles from "./nav-bar.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { navigation, type MenuItem } from "../../navigation/navigation";

const MenuLink = ({ route }: { route: MenuItem }) => {
  const navigate = useNavigate();
  const [showDropDown, setShowDropDown] = useState(false);
  const handleMouseEnter = () => {
    setShowDropDown(true);
  };
  const handleMouseExit = () => {
    setShowDropDown(false);
  };
  if (!route) {
    return null;
  }
  return (
    <div>
      <Link
        to={route.path}
        className={styles.navLink}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseExit}
      >
        {route.name}
        {route.children && showDropDown && (
          <div className={styles.dropdownMenu}>
            <ul className={styles.list}>
              {route.children.map((child, i) => (
                <li>
                  <Link to={child.path} className={styles.listItem}>
                    {child.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Link>
    </div>
  );
};

function Navbar() {
  return (
    <div className={styles.navContainer}>
      {navigation.map((route, index) => {
        if (route.isPrivate && route.isMenu) {
          return <MenuLink key={index} route={route} />;
        }
      })}
      
    </div>
  );
}

export default Navbar;
