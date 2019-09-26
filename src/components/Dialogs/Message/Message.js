import React from "react";

import classes from "../Dialogs.module.css";

const Message = props => {
  const { message } = props;

  return <div className={classes.message}>{message}</div>;
};

export default Message;
