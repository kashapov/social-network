import React from 'react';

import ProfileStatusHooks from './ProfileStatusHooks';

import classes from './ProfileInfo.module.css';

const ProfileInfo = props => {
  const { profile, status, updateStatus } = props;

  if (!profile) return 'Loading';

  const userProfile = (
    <div className={classes.userProfile}>
      <div className={classes.userProfileLeft}>
        <div>
          <img
            className={classes.userPhoto}
            src={profile.photos.large}
            alt={profile.fullName}
          />
        </div>
      </div>
      <div className={classes.userProfileRight}>
        <div>
          <div className={classes.userName}>{profile.fullName}</div>
          <ProfileStatusHooks status={status} updateStatus={updateStatus} />
          <div className={classes.userStatus}>About me: {profile.aboutMe}</div>
        </div>
        <div className={classes.userLocation}>
          <div>
            Contacts:
            <ul>
              <li>{profile.contacts.facebook}</li>
              <li>{profile.contacts.github}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  return <>{userProfile}</>;
};

export default ProfileInfo;
