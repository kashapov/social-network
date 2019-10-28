import React, { useState } from 'react';

import ProfileStatusHooks from './ProfileStatusHooks';
import ProfileDataForm from './ProfileDataForm';

import userPhoto from '../../../assets/images/user-avatar.jpg';
import classes from './ProfileInfo.module.css';

const ProfileInfo = ({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
  saveProfile,
}) => {
  const [editMode, setEditMode] = useState(false);

  if (!profile) return 'Loading...';

  const onAvatarSelected = e => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = formData => {
    saveProfile(formData).then(() => {
      setEditMode(false);
    });
  };

  const userProfile = (
    <div className={classes.userProfile}>
      <div className={classes.userProfileLeft}>
        <div>
          <img
            className={classes.userPhoto}
            src={profile.photos.large || userPhoto}
            alt={profile.fullName}
          />
        </div>
        <div>
          {isOwner && <input type="file" onChange={onAvatarSelected} />}
        </div>
      </div>
      <div className={classes.userProfileRight}>
        <ProfileStatusHooks status={status} updateStatus={updateStatus} />
        {editMode ? (
          <ProfileDataForm
            initialValues={profile}
            profile={profile}
            onSubmit={onSubmit}
          />
        ) : (
          <ProfileData
            profile={profile}
            isOwner={isOwner}
            activateEditMode={() => {
              setEditMode(true);
            }}
          />
        )}
      </div>
    </div>
  );

  return <>{userProfile}</>;
};

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <li>
      <b>{contactTitle}:</b> {contactValue}
    </li>
  );
};

const ProfileData = ({ profile, isOwner, activateEditMode }) => {
  return (
    <>
      {isOwner && (
        <div>
          <button onClick={activateEditMode}>Edit profile</button>
        </div>
      )}
      <div className={classes.userName}>{profile.fullName}</div>
      <div>
        <div>
          <b>Looking for a job:</b> {profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        {profile.lookingForAJob && (
          <b>
            <b>Job description:</b> {profile.lookingForAJobDescription}
          </b>
        )}
        <div>
          <b>Contacts:</b>
          <ul>
            {Object.keys(profile.contacts).map(key => {
              return (
                <Contact
                  key={`contact_${key}`}
                  contactTitle={key}
                  contactValue={profile.contacts[key]}
                />
              );
            })}
          </ul>
        </div>
        <div className={classes.userStatus}>About me: {profile.aboutMe}</div>
      </div>
    </>
  );
};

export default ProfileInfo;
