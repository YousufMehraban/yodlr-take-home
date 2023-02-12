import React from "react";
import "./Users.css";
import UserCard from "./UserCard";

const Users = ({usersData}) => {

  return (
    <div id="wrapper">
      {usersData
        ? usersData.map((user) => {
            return <UserCard user={user} key={user.id} />;
          })
        : "loading........."}
    </div>
  );
};
export default Users;