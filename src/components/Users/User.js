import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Users.module.css';
import userPhoto from '../../assets/images/user-avatar.jpg';

const User = props => {
  const { user, isFollowingProgress, followUser, unfollowUser } = props;

  return (
    <div className={classes.userBlock} key={user.id}>
      <div className={classes.userBlockLeft}>
        <div>
          <NavLink to={`/profile/${user.id}`}>
            <img
              className={classes.userPhoto}
              src={user.photos.small ? user.photos.small : userPhoto}
              alt={user.name}
            />
          </NavLink>
        </div>
        <div>
          {user.followed ? (
            <button
              disabled={isFollowingProgress.some(id => id === user.id)}
              onClick={() => {
                unfollowUser(user.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={isFollowingProgress.some(id => id === user.id)}
              onClick={() => {
                followUser(user.id);
              }}
            >
              follow
            </button>
          )}
        </div>
      </div>
      <div className={classes.userBlockRight}>
        <div>
          <div className={classes.userName}>{user.name}</div>
          <div className={classes.userStatus}>Status: {user.status}</div>
        </div>
        <div className={classes.userLocation}>
          <div>Country: ...</div>
          <div>City: ...</div>
        </div>
      </div>
    </div>
  );
};

export default User;
