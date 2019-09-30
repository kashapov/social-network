import React from "react";

import MyPosts from "./MyPosts";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator
} from "../../../redux/profileReducer";

const MyPostsContainer = props => {
  const state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let updateNewPostText = text => {
    props.store.dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <MyPosts
      updateNewPostText={updateNewPostText}
      addPost={addPost}
      postsData={state.profilePage.postsData}
      newPostText={state.profilePage.newPostText}
    />
  );
};

export default MyPostsContainer;
