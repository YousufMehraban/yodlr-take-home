import React from "react";
import { Link } from "react-router-dom";
import "./MainPage.css";
import { Button } from "reactstrap";

const MainPage = () => {

  return (
    <div id="Home">
      <h1>Welcome to</h1>
      <h2>Yodlr Design Challenge</h2>
      <Link to="/users"><Button color="info"> Users Page</Button></Link>
      <Link to="/register"><Button color="info">Registration Page</Button></Link>
    </div>
  );
};

export default MainPage;
