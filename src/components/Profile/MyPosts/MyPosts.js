import React from "react";
import { reduxForm, Field } from "redux-form";

import Post from "./Post/Post";

import classes from "./MyPosts.module.css";

const MyPosts = props => {
  const { addPost } = props;
  const { postsData } = props.profilePage;

  let posts = postsData.map(post => (
    <li key={post.id}>
      <Post id={post.id} message={post.message} likes={post.likes} />
    </li>
  ));

  let onAddPost = formData => {
    addPost(formData.newPostText);
  };

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <PostReduxForm onSubmit={onAddPost} />
      <div className={classes.posts}>
        <ul>{posts}</ul>
      </div>
    </div>
  );
};

const AddPostForm = props => {
  return (
    <form className={classes.postForm} onSubmit={props.handleSubmit}>
      <Field component="textarea" name="newPostText" placeholder="Enter post" />
      <button>Add post</button>
    </form>
  );
};

const PostReduxForm = reduxForm({
  form: "profileAddPostForm"
})(AddPostForm);

export default MyPosts;
