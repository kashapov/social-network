import React from "react";

import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
  return (
    <section>
      <ProfileInfo />
      <MyPostsContainer />
    </section>
  );
};

export default Profile;
