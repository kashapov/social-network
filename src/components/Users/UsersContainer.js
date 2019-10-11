import React from "react";
import { connect } from "react-redux";

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
import { usersAPI } from "../../api/api";

class UsersContainer extends React.PureComponent {
  onPageChanged = page => {
    const { setCurrentPage, pageSize, setUsers, toggleIsFetching } = this.props;

    setCurrentPage(page);
    toggleIsFetching(true);

    usersAPI.getUsers(page, pageSize).then(data => {
      toggleIsFetching(false);
      setUsers(data.items);
    });
  };

  componentDidMount() {
    const {
      setUsers,
      setUsersCount,
      currentPage,
      pageSize,
      toggleIsFetching
    } = this.props;

    toggleIsFetching(true);

    usersAPI.getUsers(currentPage, pageSize).then(data => {
      toggleIsFetching(false);
      setUsers(data.items);
      setUsersCount(data.totalCount);
    });
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
