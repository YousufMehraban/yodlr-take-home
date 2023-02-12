import React from "react";
import { Nav, NavItem, Navbar, NavLink } from "reactstrap";
import "./Navbar.css";

const NavBar = () => {
  return (
    <Navbar>
      <NavLink href="/">
        <h1>Yodlr Design Challenge</h1>
      </NavLink>
      <Nav>
        <>
          <NavItem>
            <NavLink href="/users">Users</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/register">Registration</NavLink>
          </NavItem>
        </>
      </Nav>
    </Navbar>
  );
};
export default NavBar;
