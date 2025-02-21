import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  const [user, setUser] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Obtener el usuario desde localStorage al cargar el Footer
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleSignUpClick = (e) => {
    if (user) {
      e.preventDefault(); // Evitar que navegue a Sign Up
      setShowPopup(true); // Mostrar el popup
    }
  };

  return (
    <footer className="py-3 my-4">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item">
          <Link to="/homepage" className={`nav-link px-2 text-body-secondary ${styles.navLink}`}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className={`nav-link px-2 text-body-secondary ${styles.navLink}`}>
            Landing
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className={`nav-link px-2 text-body-secondary ${styles.navLink}`} onClick={handleSignUpClick}>
            Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className={`nav-link px-2 text-body-secondary ${styles.navLink}`}>
            Detalles
          </Link>
        </li>
      </ul>
      <p className="text-center text-body-secondary">2025 Esteban Fernández</p>

      {/* Popup si ya está logeado */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <p>Ya estás logeado.</p>
            <button className="btn btn-danger" onClick={() => setShowPopup(false)}>Cerrar</button>
          </div>
        </div>
      )}

      {/* Estilos en línea para el popup */}
      <style>
        {`
          .popup-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .popup {
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
            text-align: center;
          }
          .popup button {
            margin-top: 10px;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
