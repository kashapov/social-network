import React from "react";

import Post from "./Post/Post";

import classes from "./MyPosts.module.css";

const MyPosts = () => {
  return (
    <div>
      my posts
      <div>new post</div>
      <Post message="Hi, how are you?" />
      <Post message="first post" />
    </div>
  );
}

export default MyPosts;
