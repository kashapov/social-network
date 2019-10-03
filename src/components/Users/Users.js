import React from "react";

import * as axios from "axios";

import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user-avatar.jpg";

class Users extends React.PureComponent {
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
          onClick={e => this.onPageChanged(page)}
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
            <img
              className={classes.userPhoto}
              src={u.photos.small ? u.photos.small : userPhoto}
              alt={u.name}
            />
          </div>
          <div>
            {u.followed ? (
              <button
                onClick={() => {
                  unfollow(u.id);
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                onClick={() => {
                  follow(u.id);
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
  }
}

export default Users;
