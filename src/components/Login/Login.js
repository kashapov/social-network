import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Redirect } from 'react-router-dom';

import { Input } from '../FormControls/FormControls';
import { required } from '../../utils/validators';
import { login } from '../../redux/authReducer';

import classes from './Login.module.css';
import formClasses from '../FormControls/FormControls.module.css';

const LoginForm = props => {
  const formError = props.error && (
    <div className={formClasses.errorBlock}>{props.error}</div>
  );

  const captcha = props.captchaUrl && (
    <>
      <div>
        <img src={props.captchaUrl} alt="captcha" />
      </div>
      <Field
        name="captcha"
        component={Input}
        type="text"
        placeholder="Enter text from image"
        validate={[required]}
      />
    </>
  );

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
        <Field
          name="rememberMe"
          component={Input}
          type="checkbox"
          text="Remember me"
        />
      </div>
      {formError}
      {captcha}
      <button>Login</button>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: 'login',
})(LoginForm);

const Login = props => {
  const onSubmit = formData => {
    const { email, password, rememberMe, captcha } = formData;
    props.login(email, password, rememberMe, captcha);
  };

  if (props.isAuth) return <Redirect to="/profile" />;

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm captchaUrl={props.captchaUrl} onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl,
});

export default connect(
  mapStateToProps,
  { login },
)(Login);
