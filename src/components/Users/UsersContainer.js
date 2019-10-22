import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import Users from './Users';
import { getUsers, followUser, unfollowUser } from '../../redux/usersReducer';
import Spinner from '../Spinner/Spinner';
import {
  getUsersSelector,
  getPageSizeSelector,
  getUsersCountSelector,
  getCurrentPageSelector,
  getIsFetchingSelector,
  getIsFollowingProgressSelector,
} from '../../redux/usersSelectors';

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
      unfollowUser,
      isFetching,
    } = this.props;

    return (
      <>
        {isFetching ? <Spinner /> : null}

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
    users: getUsersSelector(state),
    pageSize: getPageSizeSelector(state),
    usersCount: getUsersCountSelector(state),
    currentPage: getCurrentPageSelector(state),
    isFetching: getIsFetchingSelector(state),
    isFollowingProgress: getIsFollowingProgressSelector(state),
  };
};

export default compose(
  connect(
    mapStateToProps,
    {
      getUsers,
      followUser,
      unfollowUser,
    },
  ),
)(UsersContainer);
