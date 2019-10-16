import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Header.module.css";

const Header = props => {
  return (
    <header className={classes.header}>
      <div className={classes.loginBlock}>
        {props.isAuth ? (
          <>
            {props.login} <button onClick={props.logout}>Logout</button>
          </>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
