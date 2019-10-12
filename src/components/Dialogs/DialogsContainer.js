import { connect } from "react-redux";

import Dialogs from "./Dialogs";
import {
  addMessageAC,
  updateNewMessageTextAC
} from "../../redux/dialogsReducer";
import witAuthRedirect from "../../hoc/withAuthRedirect";
import { compose } from "redux";

const mapStateToProps = state => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth
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

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  witAuthRedirect
)(Dialogs);
