import { connect } from "react-redux";

import MyPosts from "./MyPosts";
import { addPostAC } from "../../../redux/profileReducer";

const mapStateToProps = state => {
  return {
    profilePage: state.profilePage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addPost: newPostText => {
      dispatch(addPostAC(newPostText));
    }
  };
};

const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);

export default MyPostsContainer;
