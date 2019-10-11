import React from "react";
import { connect } from "react-redux";

import Users from "./Users";
import { getUsers, followUser, unfollowUser } from "../../redux/usersReducer";
import Spinner from "../Spinner/Spinner";

class UsersContainer extends React.PureComponent {
  onPageChanged = page => {
    const { pageSize, getUsers } = this.props;
    getUsers(page, pageSize);
  };

  componentDidMount() {
    const { currentPage, pageSize, getUsers } = this.props;
    getUsers(currentPage, pageSize);
  }

  render() {
    const {
      users,
      pageSize,
      usersCount,
      currentPage,
      isFollowingProgress,
      followUser,
      unfollowUser
    } = this.props;

    return (
      <>
        {this.props.isFetching ? <Spinner /> : null}

        <Users
          users={users}
          usersCount={usersCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChanged={this.onPageChanged}
          isFollowingProgress={isFollowingProgress}
          followUser={followUser}
          unfollowUser={unfollowUser}
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    usersCount: state.usersPage.usersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    isFollowingProgress: state.usersPage.isFollowingProgress
  };
};

export default connect(
  mapStateToProps,
  {
    getUsers,
    followUser,
    unfollowUser
  }
)(UsersContainer);
