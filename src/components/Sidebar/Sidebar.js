import React from "react";

import { NavLink } from "react-router-dom";

import classes from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <aside className={classes.sidebar}>
      <nav className={classes.nav}>
        <NavLink to="/profile" activeClassName={classes.active}>
          Profile
        </NavLink>
        <NavLink to="/dialogs" activeClassName={classes.active}>
          Messages
        </NavLink>
        <NavLink to="/news" activeClassName={classes.active}>
          News
        </NavLink>
        <NavLink to="/music" activeClassName={classes.active}>
          Music
        </NavLink>
        <NavLink to="/settings" activeClassName={classes.active}>
          Settings
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
