import React from "react";

import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = props => {
  return (
    <section>
      <ProfileInfo />
      <MyPostsContainer
      // store={props.store}
      />
    </section>
  );
};

export default Profile;
