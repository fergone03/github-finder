// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [identifier, setIdentifier] = useState(""); // Puede ser correo o usuario
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  // Evitar que un usuario logueado pueda volver a la página de login
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      navigate("/homepage");
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    // Buscar el usuario en la tabla personalizada por email o username
    const { data: user, error } = await supabase
      .from("usuariosAPIGitHub")
      .select("*")
      .or(`email.eq.${identifier},username.eq.${identifier}`)
      .single();

    if (error || !user) {
      setErrorMessage("Usuario o contraseña incorrectos");
      return;
    }

    // Simulación de autenticación (ya que no usamos auth de Supabase)
    if (user.password !== password) {
      setErrorMessage("Usuario o contraseña incorrectos");
      return;
    }

    // Guardar el usuario en localStorage para persistencia de sesión
    localStorage.setItem("user", JSON.stringify(user));
    setSuccessMessage("Inicio de sesión exitoso");

    // Redirigir a la homepage después de 1.5 segundos
    setTimeout(() => {
      window.location.href = "/homepage"; // Esto forzará la recarga completa de la página
    }, 1500);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "69vh" }}>
      <div className="card p-4 shadow-lg" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-4">Iniciar sesión</h2>
        {errorMessage && <p className="text-danger text-center">{errorMessage}</p>}
        {successMessage && <p className="text-success text-center">{successMessage}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Correo o Usuario:</label>
            <input
              type="text"
              className="form-control"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Contraseña:</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-dark w-100">Iniciar sesión</button>
        </form>
        
        <p className="mt-3 text-center">
          ¿No tienes cuenta? <Link to="/register">Regístrate</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
