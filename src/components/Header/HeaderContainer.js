import React from "react";
import * as axios from "axios";
import { connect } from "react-redux";

import { authMeApiUrl } from "../../config";
import Header from "./Header";
import { setAuthUserData } from "../../redux/authReducer";

class HeaderContainer extends React.PureComponent {
  componentDidMount() {
    axios.get(authMeApiUrl, { withCredentials: true }).then(response => {
      if (response.data.resultCode === 0) {
        const { id, email, login } = response.data.data;
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
