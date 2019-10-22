import React from 'react';
import { NavLink } from 'react-router-dom';

import Paginator from '../Paginator/Paginator';

import classes from './Users.module.css';
import userPhoto from '../../assets/images/user-avatar.jpg';

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

  const usersList = users.map(u => (
    <div className={classes.userBlock} key={u.id}>
      <div className={classes.userBlockLeft}>
        <div>
          <NavLink to={`/profile/${u.id}`}>
            <img
              className={classes.userPhoto}
              src={u.photos.small ? u.photos.small : userPhoto}
              alt={u.name}
            />
          </NavLink>
        </div>
        <div>
          {u.followed ? (
            <button
              disabled={isFollowingProgress.some(id => id === u.id)}
              onClick={() => {
                unfollowUser(u.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={isFollowingProgress.some(id => id === u.id)}
              onClick={() => {
                followUser(u.id);
              }}
            >
              follow
            </button>
          )}
        </div>
      </div>
      <div className={classes.userBlockRight}>
        <div>
          <div className={classes.userName}>{u.name}</div>
          <div className={classes.userStatus}>Status: {u.status}</div>
        </div>
        <div className={classes.userLocation}>
          <div>Country: ...</div>
          <div>City: ...</div>
        </div>
      </div>
    </div>
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
