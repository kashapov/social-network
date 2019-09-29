import React from "react";

import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

// import classes from "./Profile.module.css";

const Profile = props => {
  return (
    <section>
      <ProfileInfo />
      <MyPosts
        postsData={props.state.postsData}
        newPostText={props.state.newPostText}
        dispatch={props.dispatch}
      />
    </section>
  );
};

export default Profile;
