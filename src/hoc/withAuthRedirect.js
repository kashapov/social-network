import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const mapStateToPropsForRedirect = state => {
  return {
    isAuth: state.auth.isAuth
  };
};

export const witAuthRedirect = Component => {
  const RedirectComponent = props => {
    if (!props.isAuth) return <Redirect to="/login" />;
    return <Component {...props} />;
  };

  const ConnectedRedirectComponent = connect(mapStateToPropsForRedirect)(
    RedirectComponent
  );

  return ConnectedRedirectComponent;
};

export default witAuthRedirect;
