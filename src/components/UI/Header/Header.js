import React from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className={classes.header}>
      <div className="container d-flex justify-content-between align-items-center">
        <Link to="/" className={classes['go--back']}>
          <i className="fa-solid fa-chevron-left"></i>
        </Link>
        <h3 className="p-0 m-0">EXPORT</h3>
        <div></div>
      </div>
    </div>
  );
};

export default Header;
