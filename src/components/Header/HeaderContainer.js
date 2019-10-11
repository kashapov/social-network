import React from "react";
import { connect } from "react-redux";

import Header from "./Header";
import { authAPI } from "../../api/api";
import { setAuthUserData } from "../../redux/authReducer";

class HeaderContainer extends React.PureComponent {
  componentDidMount() {
    authAPI.authMe().then(data => {
      if (data.resultCode === 0) {
        const { id, email, login } = data.data;
        this.props.setAuthUserData(id, email, login);
      }
    });
  }
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
});

export default connect(
  mapStateToProps,
  { setAuthUserData }
)(HeaderContainer);
