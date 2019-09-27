import React from "react";

import Post from "./Post/Post";

import classes from "./MyPosts.module.css";

const MyPosts = props => {
  let posts = props.postsData.map(post => (
    <Post id={post.id} message={post.message} likes={post.likes} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            ref={newPostElement}
            onChange={onPostChange}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>{posts}</div>
    </div>
  );
};

export default MyPosts;
