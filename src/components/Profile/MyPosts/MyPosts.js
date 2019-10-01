import React from "react";

import Post from "./Post/Post";

import classes from "./MyPosts.module.css";

const MyPosts = props => {
  const { addPost, updateNewPostText } = props;
  const { newPostText, postsData } = props.profilePage;

  let posts = postsData.map(post => (
    <li key={post.id}>
      <Post id={post.id} message={post.message} likes={post.likes} />
    </li>
  ));

  let onAddPost = () => {
    addPost();
  };

  let onPostChange = e => {
    let text = e.target.value;
    updateNewPostText(text);
  };

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            value={newPostText}
            placeholder="Enter post"
          />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>
        <ul>{posts}</ul>
      </div>
    </div>
  );
};

export default MyPosts;
