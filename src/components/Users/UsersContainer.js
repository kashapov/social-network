import React from "react";
import { connect } from "react-redux";

import * as axios from "axios";

import Users from "./Users";
import {
  followAC,
  unfollowAC,
  setUsersAC,
  setCurrentPageAC,
  setUsersCountAC
} from "../../redux/usersReducer";

class UsersContainer extends React.PureComponent {
  baseUrl = `https://social-network.samuraijs.com/api/1.0/users`;

  getUsers = () => {
    const { setUsers, setUsersCount, currentPage, pageSize } = this.props;

    axios
      .get(`${this.baseUrl}?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        setUsers(response.data.items);
        setUsersCount(response.data.totalCount);
      });
  };

  onPageChanged = page => {
    const { setCurrentPage, pageSize, setUsers } = this.props;

    setCurrentPage(page);

    axios
      .get(`${this.baseUrl}?page=${page}&count=${pageSize}`)
      .then(response => {
        setUsers(response.data.items);
      });
  };

  componentDidMount() {
    this.getUsers();
  }

  render() {
    const {
      users,
      follow,
      unfollow,
      pageSize,
      usersCount,
      currentPage
    } = this.props;

    return (
      <Users
        users={users}
        usersCount={usersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChanged={this.onPageChanged}
        follow={follow}
        unfollow={unfollow}
      />
    );
  }
}

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersContainer);
