import React from "react";
import styles from "./home-page.module.scss";
import { Link, useNavigate } from "react-router-dom";
export const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.pageHeader}>Home</div>
    </div>
  );
};

export default Home;
