import React from "react";

import MyPosts from "./MyPosts";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator
} from "../../../redux/profileReducer";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = props => {
  // const state = props.store.getState();

  // let addPost = () => {
  //   props.store.dispatch(addPostActionCreator());
  // };

  // let updateNewPostText = text => {
  //   props.store.dispatch(updateNewPostTextActionCreator(text));
  // };

  return (
    <StoreContext.Consumer>
      {store => {
        const state = store.getState();

        let addPost = () => {
          store.dispatch(addPostActionCreator());
        };

        let updateNewPostText = text => {
          store.dispatch(updateNewPostTextActionCreator(text));
        };

        return (
          <MyPosts
            updateNewPostText={updateNewPostText}
            addPost={addPost}
            postsData={state.profilePage.postsData}
            newPostText={state.profilePage.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
