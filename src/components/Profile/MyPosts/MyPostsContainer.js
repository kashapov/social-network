import { connect } from "react-redux";

import MyPosts from "./MyPosts";
import {
  addPostAC,
  updateNewPostTextAC
} from "../../../redux/profileReducer";

const mapStateToProps = state => {
  return {
    profilePage: state.profilePage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateNewPostText: text => {
      dispatch(updateNewPostTextAC(text));
    },
    addPost: () => {
      dispatch(addPostAC());
    }
  };
};

const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);

export default MyPostsContainer;
