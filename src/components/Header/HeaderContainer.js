import React from "react";
import { connect } from "react-redux";

import Header from "./Header";
import { setAuthUserData, authMe, logout } from "../../redux/authReducer";

class HeaderContainer extends React.PureComponent {
  componentDidMount() {
    this.props.authMe();
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
  { setAuthUserData, authMe, logout }
)(HeaderContainer);
