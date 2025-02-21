import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Obtener el usuario del localStorage al cargar el Header
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.location.reload(); // Recargar para actualizar la UI
  };

  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <div className="container-fluid d-flex flex-column flex-md-row justify-content-between align-items-center">
        
        <div className="col-12 col-md-4 text-center text-md-start mb-2 mb-md-0">
          <div className="d-flex flex-column">
            <a className="navbar-brand">GitHub Finder</a>
            <a className="navbar-brand">Proyecto de integración de API</a>
          </div>
        </div>

        <div className="col-12 col-md-4 text-center mb-2 mb-md-0">
          <Link to="/homepage" className={`text-light text-decoration-none fs-5 ${styles.navLink}`}>
            Buscador
          </Link>
        </div>

        <div className="col-12 col-md-4 text-center text-md-end">
          {user ? (
            <div>
              <span className="text-light me-2">Usuario: {user.username}</span>
              <button className="btn btn-danger" onClick={handleLogout}>Cerrar sesión</button>
            </div>
          ) : (
            <Link to="/login" className="btn btn-outline-light">Log In</Link>
          )}
        </div>

      </div>
    </nav>
  );
};

export default Header;
