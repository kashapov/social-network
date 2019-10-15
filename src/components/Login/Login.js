import React from "react";
import { reduxForm, Field } from "redux-form";

import { Input } from "../FormControls/FormControls";
import { required } from "../../utils/validators";

import classes from "./Login.module.css";

const LoginForm = props => {
  return (
    <form className={classes.loginForm} onSubmit={props.handleSubmit}>
      <Field
        name="login"
        component={Input}
        type="text"
        placeholder="login"
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
