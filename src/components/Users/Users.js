import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user-avatar.jpg";

const Users = props => {
  const {
    users,
    pageSize,
    usersCount,
    currentPage,
    onPageChanged,
    isFollowingProgress,
    followUser,
    unfollowUser
  } = props;

  const pagesCount = Math.ceil(usersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let pagesList = pages.map(page => {
    return (
      <li
        key={page}
        className={
          currentPage === page
            ? classes.paginationItemSelected
            : classes.paginationItem
        }
        onClick={e => onPageChanged(page)}
      >
        {page}
      </li>
    );
  });

  const paginationBlock = (
    <div className={classes.pagination}>
      <span className={classes.paginationTitle}>pages: </span>
      <ul className={classes.paginationList}>{pagesList}</ul>
    </div>
  );

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
      {paginationBlock}
      {usersList}
    </div>
  );
};

export default Users;
