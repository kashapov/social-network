import React from "react";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import classes from "./Dialogs.module.css";

const Dialogs = props => {
  let dialogs = props.state.dialogsData.map(el => (
    <li key={el.id}>
      <DialogItem id={el.id} name={el.name} />
    </li>
  ));
  let messages = props.state.messagesData.map(el => (
    <li key={el.id}>
      <Message id={el.id} message={el.message} />
    </li>
  ));

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>
        <ul>{dialogs}</ul>
      </div>
      <div className={classes.messages}>
        <ul>{messages}</ul>
      </div>
    </div>
  );
};

export default Dialogs;
