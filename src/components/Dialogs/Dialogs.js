import React from "react";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import classes from "./Dialogs.module.css";

const Dialogs = props => {
  const { addMessage, updateMessage } = props;
  const { newMessageText, messagesData, dialogsData } = props.dialogsPage;

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

  let onAddMessage = () => {
    addMessage();
  };

  let onMessageChange = e => {
    let text = e.target.value;
    updateMessage(text);
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
          <button onClick={onAddMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
