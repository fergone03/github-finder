// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "69vh" }}>
      <div className="bg-dark text-white text-center py-5">
        <div className="container">
          <h1>Bienvenido a GitHub Finder</h1>
          <p className="lead">Explora perfiles de GitHub y descubre repositorios fácilmente.</p>
          <Link to="/homepage" className="btn btn-primary mt-3">Comenzar</Link>
        </div>
      </div>

      <main className="container my-5 flex-grow-1">
        <div className="row text-center">
          <div className="col-md-4">
            <h3>Búsqueda Rápida</h3>
            <p>Encuentra usuarios de GitHub con solo escribir su nombre.</p>
          </div>
          <div className="col-md-4">
            <h3>Repositorios</h3>
            <p>Explora los repositorios de cada usuario con sus lenguajes principales.</p>
          </div>
          <div className="col-md-4">
            <h3>Interfaz Intuitiva</h3>
            <p>Diseño limpio y responsivo para una mejor experiencia.</p>
          </div>
        </div>
      </main>

    </div>
  );
};

export default Landing;
