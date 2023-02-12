import React from "react";
import { Card, CardText, CardTitle } from "reactstrap";
import "./Users.css";

const UserCard = ({ user }) => {
  const firstName = user.firstName;
  const lastName = user.lastName;
  const email = user.email;
  const state = user.state;

  return (
    <Card key={user.id}>
      <CardTitle tag="h3">
        {firstName} {lastName}
      </CardTitle>
      <CardText tag="p">
        Email: <a href={`mailto:${email}`}>{email}</a>
      </CardText>
      <CardText tag="p">State: {state}</CardText>
    </Card>
  );
};
export default UserCard;
