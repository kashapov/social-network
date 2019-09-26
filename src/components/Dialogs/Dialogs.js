import React from "react";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import classes from "./Dialogs.module.css";

const Dialogs = props => {
  let dialogs = props.state.dialogsData.map(el => (
    <DialogItem id={el.id} name={el.name} />
  ));
  let messages = props.state.messagesData.map(el => (
    <Message id={el.id} message={el.message} />
  ));

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>{dialogs}</div>
      <div className={classes.messages}>{messages}</div>
    </div>
  );
};

export default Dialogs;
