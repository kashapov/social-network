import React from "react";

import * as axios from "axios";

import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user-avatar.jpg";

class Users extends React.PureComponent {
  getUsers = () => {
    const { setUsers } = this.props;

    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then(response => {
        setUsers(response.data.items);
      });
  };

  componentDidMount() {
    this.getUsers();
  }

  render() {
    const { users, follow, unfollow } = this.props;

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

    return <div>{usersList}</div>;
  }
}

export default Users;
