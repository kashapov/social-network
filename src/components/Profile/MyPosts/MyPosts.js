import React from "react";

import Post from "./Post/Post";

import classes from "./MyPosts.module.css";

const MyPosts = props => {
  let posts = props.state.postsData.map(post => (
    <Post id={post.id} message={post.message} likes={post.likes} />
  ));

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>{posts}</div>
    </div>
  );
};

export default MyPosts;
