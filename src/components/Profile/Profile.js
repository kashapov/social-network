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
        addPost={props.addPost}
        updateNewPostText={props.updateNewPostText}
      />
    </section>
  );
};

export default Profile;
