import React from "react";

import classes from "./Profile.module.css";

function Profile() {
  return (
    <section class={classes.profile}>
      <div>image</div>
      <div>avatar + description</div>
      <div>
        my posts
        <div>new post</div>
        <div>post 1</div>
        <div>post 2</div>
      </div>
    </section>
  );
}

export default Profile;
