// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <a className="navbar-brand" href="/">GitHub User Finder</a>
      <Link to="/login" className="btn btn-outline-light">Log In</Link>
    </nav>
  );
};

export default Header;
