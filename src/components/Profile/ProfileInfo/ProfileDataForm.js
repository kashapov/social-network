import React from 'react';
import { reduxForm, Field } from 'redux-form';

import { Input, Textarea } from '../../FormControls/FormControls';
import { required } from '../../../utils/validators';

import formClasses from '../../FormControls/FormControls.module.css';

const ProfileDataForm = ({ profile, handleSubmit, error }) => {
  const formError = error && (
    <div className={formClasses.errorBlock}>{error}</div>
  );
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button>Save profile</button>
      </div>
      {formError}
      <Field
        name="fullName"
        component={Input}
        type="text"
        placeholder="Full name"
        validate={[required]}
      />
      <Field
        name="lookingForAJob"
        component={Input}
        type="checkbox"
        text="looking for a job"
      />
      <Field
        name="lookingForAJobDescription"
        component={Textarea}
        placeholder="My professional skills"
      />
      {Object.keys(profile.contacts).map(key => {
        return (
          <Field
            key={`contact_${key}`}
            name={`contacts.${key}`}
            component={Input}
            type="text"
            placeholder={key}
            text={profile.contacts[key]}
          />
        );
      })}
      <Field name="aboutMe" component={Textarea} placeholder="About me" />
    </form>
  );
};

const ProfileDataReduxForm = reduxForm({
  form: 'profile',
})(ProfileDataForm);

export default ProfileDataReduxForm;
