// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Obtener el usuario del localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user"); // Eliminar usuario del localStorage
    setUser(null); // Actualizar estado
    window.location.reload(); // Recargar la página para reflejar cambios
  };

  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <div className="container-fluid d-flex flex-column flex-md-row justify-content-between align-items-center">
        
        {/* Sección del logo y descripción */}
        <div className="col-12 col-md-4 text-center text-md-start mb-2 mb-md-0">
          <div className="d-flex flex-column">
            <a className="navbar-brand">GitHub Finder</a>
            <a className="navbar-brand">Proyecto de integración de API</a>
          </div>
        </div>

        {/* Enlace al buscador */}
        <div className="col-12 col-md-4 text-center mb-2 mb-md-0">
          <Link to="/homepage" className={`text-light text-decoration-none fs-5 ${styles.navLink}`}>
            Buscador
          </Link>
        </div>

        {/* Sección de usuario / login */}
        <div className="col-12 col-md-4 text-center text-md-end">
          {user ? (
            <div>
              <span className="text-light d-block">Usuario: {user.username}</span>
              <button className="btn btn-danger mt-2" onClick={handleLogout}>Cerrar sesión</button>
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
