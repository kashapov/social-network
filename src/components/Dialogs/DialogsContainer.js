import { compose } from "redux";
import { connect } from "react-redux";

import Dialogs from "./Dialogs";
import { addMessageAC } from "../../redux/dialogsReducer";
import witAuthRedirect from "../../hoc/withAuthRedirect";

const mapStateToProps = state => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addMessage: newMessageText => {
      dispatch(addMessageAC(newMessageText));
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
