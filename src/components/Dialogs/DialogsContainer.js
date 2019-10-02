import { connect } from "react-redux";

import Dialogs from "./Dialogs";
import {
  addMessageAC,
  updateNewMessageTextAC
} from "../../redux/dialogsReducer";

const mapStateToProps = state => {
  return {
    dialogsPage: state.dialogsPage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateMessage: text => {
      dispatch(updateNewMessageTextAC(text));
    },
    addMessage: () => {
      dispatch(addMessageAC());
    }
  };
};

const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);

export default DialogsContainer;
