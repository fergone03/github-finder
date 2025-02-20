// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        
        {/* Logo alineado a la izquierda */}
        <div className="col-4 text-start">
          <a className="navbar-brand">GitHub Finder</a>
        </div>

        {/* "Buscador" centrado */}
        <div className="col-4 text-center">
          <Link to="/homepage" className="text-light text-decoration-none fs-5">Buscador</Link>
        </div>

        {/* Botón "Log In" alineado a la derecha */}
        <div className="col-4 text-end">
          <Link to="/login" className="btn btn-outline-light">Log In</Link>
        </div>

      </div>
    </nav>
  );
};

export default Header;
