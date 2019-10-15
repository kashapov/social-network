import React from "react";
import { reduxForm, Field } from "redux-form";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import classes from "./Dialogs.module.css";

const Dialogs = props => {
  const { addMessage } = props;
  const { messagesData, dialogsData } = props.dialogsPage;

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

  const onAddMessage = formData => {
    addMessage(formData.newMessageText);
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>
        <ul>{dialogs}</ul>
      </div>
      <div className={classes.messages}>
        <ul>{messages}</ul>
        <MessageReduxForm onSubmit={onAddMessage} />
      </div>
    </div>
  );
};

const AddMessageForm = props => {
  return (
    <form className={classes.messageForm} onSubmit={props.handleSubmit}>
      <Field
        component="textarea"
        name="newMessageText"
        placeholder="Enter message"
      />
      <button>Send</button>
    </form>
  );
};

const MessageReduxForm = reduxForm({
  form: "dialogAddMessageForm"
})(AddMessageForm);

export default Dialogs;
