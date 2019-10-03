import { connect } from "react-redux";

import {
  followAC,
  unfollowAC,
  setUsersAC,
  setCurrentPageAC,
  setUsersCountAC
} from "../../redux/usersReducer";
import Users from "./Users";

const mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    usersCount: state.usersPage.usersCount,
    currentPage: state.usersPage.currentPage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    follow: userId => {
      dispatch(followAC(userId));
    },
    unfollow: userId => {
      dispatch(unfollowAC(userId));
    },
    setUsers: users => {
      dispatch(setUsersAC(users));
    },
    setUsersCount: usersCount => {
      dispatch(setUsersCountAC(usersCount));
    },
    setCurrentPage: page => {
      dispatch(setCurrentPageAC(page));
    }
  };
};

const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);

export default UsersContainer;
