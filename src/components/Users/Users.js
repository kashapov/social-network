import React from "react";

import classes from "./Users.module.css";

const Users = props => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl:
          "http://www.clker.com/cliparts/7/8/2/2/135162274923698324Mini%20Avatar.svg.med.png",
        fullName: "Andrey Kashapov",
        status: "In Musk We Trust",
        location: {
          country: "Ukraine",
          city: "Lviv"
        },
        followed: true
      },
      {
        id: 2,
        photoUrl:
          "http://www.clker.com/cliparts/7/8/2/2/135162274923698324Mini%20Avatar.svg.med.png",
        fullName: "Elena Zamnius",
        status: "status",
        location: {
          country: "Ukraine",
          city: "Harkov"
        },
        followed: false
      },
      {
        id: 3,
        photoUrl:
          "http://www.clker.com/cliparts/7/8/2/2/135162274923698324Mini%20Avatar.svg.med.png",
        fullName: "Nataly Matveeva",
        status: "status",
        location: {
          country: "Belarus",
          city: "Minsk"
        },
        followed: false
      }
    ]);
  }

  return (
    <div>
      {props.users.map(u => (
        <div className={classes.userBlock} key={u.id}>
          <div className={classes.userBlockLeft}>
            <div>
              <img className={classes.userPhoto} src={u.photoUrl} alt="user" />
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
              <div>{u.fullName}</div>
              <div className={classes.userStatus}>Status: {u.status}</div>
            </div>
            <div className={classes.userLocation}>
              <div>Contry: {u.location.country}</div>
              <div>City: {u.location.city}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
