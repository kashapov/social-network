import React from "react";
import { reduxForm, Field } from "redux-form";

import classes from "./Login.module.css";

const LoginForm = props => {
  return (
    <form className={classes.loginForm} onSubmit={props.handleSubmit}>
      <Field name="login" component="input" type="text" placeholder="login" />
      <Field
        name="password"
        component="input"
        type="password"
        placeholder="password"
      />
      <div>
        <Field name="rememberMe" component="input" type="checkbox" /> Remember
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
    console.log(formData);
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
