import React from "react";

import ProfileStatus from "./ProfileStatus";

import classes from "./ProfileInfo.module.css";

const ProfileInfo = props => {
  if (!props.profile) return "Loading";

  const userProfile = (
    <div className={classes.userProfile}>
      <div className={classes.userProfileLeft}>
        <div>
          <img
            className={classes.userPhoto}
            src={props.profile.photos.large}
            alt={props.profile.fullName}
          />
        </div>
      </div>
      <div className={classes.userProfileRight}>
        <div>
          <div className={classes.userName}>{props.profile.fullName}</div>
          <ProfileStatus
            status={props.status}
            updateStatus={props.updateStatus}
          />
          <div className={classes.userStatus}>
            About me: {props.profile.aboutMe}
          </div>
        </div>
        <div className={classes.userLocation}>
          <div>
            Contacts:
            <ul>
              <li>{props.profile.contacts.facebook}</li>
              <li>{props.profile.contacts.github}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  return <>{userProfile}</>;
};

export default ProfileInfo;
