import React from "react";

import MyPosts from "./MyPosts/MyPosts";

import classes from "./Profile.module.css";

const Profile = () => {
  return (
    <section>
      Profile component
      <div>image</div>
      <div>avatar + description</div>
      <MyPosts />
    </section>
  );
};

export default Profile;
