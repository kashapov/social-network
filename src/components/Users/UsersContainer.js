import React from "react";
import { connect } from "react-redux";

import * as axios from "axios";

import Users from "./Users";
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setUsersCount,
  toggleIsFetching
} from "../../redux/usersReducer";
import Spinner from "../Spinner/Spinner";
import { getUsersApiUrl } from "../../config";

class UsersContainer extends React.PureComponent {
  getUsers = () => {
    const {
      setUsers,
      setUsersCount,
      currentPage,
      pageSize,
      toggleIsFetching
    } = this.props;
    toggleIsFetching(true);
    axios
      .get(`${getUsersApiUrl}?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true
      })
      .then(response => {
        toggleIsFetching(false);
        setUsers(response.data.items);
        setUsersCount(response.data.totalCount);
      });
  };

  onPageChanged = page => {
    const { setCurrentPage, pageSize, setUsers, toggleIsFetching } = this.props;

    setCurrentPage(page);
    toggleIsFetching(true);
    axios
      .get(`${getUsersApiUrl}?page=${page}&count=${pageSize}`, {
        withCredentials: true
      })
      .then(response => {
        toggleIsFetching(false);
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
      <>
        {this.props.isFetching ? <Spinner /> : null}
        <Users
          users={users}
          usersCount={usersCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChanged={this.onPageChanged}
          follow={follow}
          unfollow={unfollow}
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
    isFetching: state.usersPage.isFetching
  };
};

export default connect(
  mapStateToProps,
  {
    follow,
    unfollow,
    setUsers,
    setUsersCount,
    setCurrentPage,
    toggleIsFetching
  }
)(UsersContainer);
