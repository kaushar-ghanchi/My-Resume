import React from "react";
import styles from "./training-list.module.scss";
import { Link } from "react-router-dom";
export const Installation = () => {
  return (
    <div>
      <Link to="/list">Go back</Link>
      Installation
    </div>
  );
};
export const Introduction = () => {
  return (
    <div>
      <Link to="/list">Go back</Link>
      Introduction
    </div>
  );
};

function Layout() {
  return (
    <>
      <div>
        <Link to="/">Go back</Link>
      </div>
      <h1>React Training List</h1>
      <ol>
        <li>
          <Link to="/introduction">Introduction</Link>
        </li>
        <li>
          <Link to="/installation">Installation</Link>
        </li>
        <li>Directory structure</li>
        <li>JSX component</li>
      </ol>
    </>
  );
}

export default Layout;
