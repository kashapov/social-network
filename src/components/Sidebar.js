import React from "react";

import classes from "./Sidebar.module.css";

function Sidebar() {
  return (
    <aside className={classes.sidebar}>
      <nav className={classes.nav}>
        <a href="#">Profile</a>
        <a href="#">Messages</a>
        <a href="#">News</a>
        <a href="#">Music</a>
        <a href="#">Settings</a>
      </nav>
    </aside>
  );
}

export default Sidebar;
