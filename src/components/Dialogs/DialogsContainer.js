import React from "react";

import Dialogs from "./Dialogs";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator
} from "../../redux/dialogsReducer";
import StoreContext from "../../StoreContext";

const DialogsContainer = props => {
  // const state = props.store.getState();

  // let addMessage = () => {
  //   props.store.dispatch(addMessageActionCreator());
  // };

  // let updateMessage = text => {
  //   props.store.dispatch(updateNewMessageTextActionCreator(text));
  // };

  return (
    <StoreContext.Consumer>
      {store => {
        const state = store.getState();

        let addMessage = () => {
          store.dispatch(addMessageActionCreator());
        };

        let updateMessage = text => {
          store.dispatch(updateNewMessageTextActionCreator(text));
        };

        return (
          <Dialogs
            addMessage={addMessage}
            updateMessage={updateMessage}
            newMessageText={state.dialogsPage.newMessageText}
            dialogsData={state.dialogsPage.dialogsData}
            messagesData={state.dialogsPage.messagesData}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
