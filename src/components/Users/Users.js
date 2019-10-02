import React from "react";

import * as axios from "axios";

import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user-avatar.jpg";

const Users = props => {
  const getUsers = () => {
    if (props.users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => {
          props.setUsers(response.data.items);
        });
    }
  };

  return (
    <div>
      <button onClick={getUsers}>Get Users</button>
      {props.users.map(u => (
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
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
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
      ))}
    </div>
  );
};

export default Users;
