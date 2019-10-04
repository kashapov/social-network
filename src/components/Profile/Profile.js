import React from "react";

import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = props => {
  if (!props.profile) {
    return "Loading";
  }
  return (
    <section>
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer />
    </section>
  );
};

export default Profile;
