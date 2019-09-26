import React from "react";

import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import classes from "./Profile.module.css";

const Profile = props => {
  return (
    <section>
      <ProfileInfo />
      <MyPosts state={props.state} />
    </section>
  );
};

export default Profile;
