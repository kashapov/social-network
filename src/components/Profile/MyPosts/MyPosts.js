import React from "react";

import Post from "./Post/Post";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator
} from "../../../redux/state";

import classes from "./MyPosts.module.css";

const MyPosts = props => {
  let posts = props.postsData.map(post => (
    <li key={post.id}>
      <Post id={post.id} message={post.message} likes={post.likes} />
    </li>
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
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
      <div className={classes.posts}>
        <ul>{posts}</ul>
      </div>
    </div>
  );
};

export default MyPosts;
