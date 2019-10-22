import React from 'react';

import User from './User';
import Paginator from '../Paginator/Paginator';

const Users = props => {
  const {
    users,
    pageSize,
    usersCount,
    currentPage,
    onPageChanged,
    isFollowingProgress,
    followUser,
    unfollowUser,
  } = props;

  const usersList = users.map(user => (
    <User
      key={`user_${user.id}`}
      user={user}
      isFollowingProgress={isFollowingProgress}
      followUser={followUser}
      unfollowUser={unfollowUser}
    />
  ));

  return (
    <div>
      <Paginator
        pageSize={pageSize}
        usersCount={usersCount}
        currentPage={currentPage}
        onPageChanged={onPageChanged}
      />
      {usersList}
    </div>
  );
};

export default Users;
