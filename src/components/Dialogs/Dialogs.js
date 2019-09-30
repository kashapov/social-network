import React from "react";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator
} from "../../redux/dialogsReducer";

import classes from "./Dialogs.module.css";

const Dialogs = props => {
  const { newMessageText, messagesData, dialogsData } = props.state;

  let dialogs = dialogsData.map(el => (
    <li key={el.id}>
      <DialogItem id={el.id} name={el.name} />
    </li>
  ));
  let messages = messagesData.map(el => (
    <li key={el.id}>
      <Message id={el.id} message={el.message} />
    </li>
  ));

  let addMessage = () => {
    props.dispatch(addMessageActionCreator());
  };

  let onMessageChange = e => {
    let text = e.target.value;
    props.dispatch(updateNewMessageTextActionCreator(text));
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>
        <ul>{dialogs}</ul>
      </div>
      <div className={classes.messages}>
        <ul>{messages}</ul>
        <div>
          <textarea
            onChange={onMessageChange}
            value={newMessageText}
            placeholder="Enter message"
          />
        </div>
        <div>
          <button onClick={addMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
