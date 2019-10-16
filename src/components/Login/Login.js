import React from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { Redirect } from "react-router-dom";

import { Input } from "../FormControls/FormControls";
import { required } from "../../utils/validators";
import { login } from "../../redux/authReducer";

import classes from "./Login.module.css";

const LoginForm = props => {
  return (
    <form className={classes.loginForm} onSubmit={props.handleSubmit}>
      <Field
        name="email"
        component={Input}
        type="text"
        placeholder="email"
        validate={[required]}
      />
      <Field
        name="password"
        component={Input}
        type="password"
        placeholder="password"
        validate={[required]}
      />
      <div>
        <Field name="rememberMe" component={Input} type="checkbox" /> Remember
        me
      </div>
      <button>Login</button>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login"
})(LoginForm);

const Login = props => {
  const onSubmit = formData => {
    // console.log(formData);
    const { email, password, rememberMe } = formData;
    props.login(email, password, rememberMe);
  };

  if (props.isAuth) return <Redirect to="/profile" />;

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
