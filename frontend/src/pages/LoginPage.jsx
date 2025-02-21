// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    // Buscar el usuario en la tabla personalizada
    const { data: user, error } = await supabase
      .from("usuariosAPIGitHub")
      .select("*")
      .eq("email", email)
      .single();

    if (error || !user) {
      setErrorMessage("Correo o contraseña incorrectos");
      return;
    }

    // Simulación de autenticación (ya que no usamos auth de Supabase)
    if (user.password !== password) {
      setErrorMessage("Correo o contraseña incorrectos");
      return;
    }

    setSuccessMessage("Inicio de sesión exitoso");
    setTimeout(() => {
      navigate("/homepage");
    }, 1500);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "69vh" }}>
      <div className="card p-4 shadow-lg" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-4">Iniciar Sesión</h2>
        {errorMessage && <p className="text-danger text-center">{errorMessage}</p>}
        {successMessage && <p className="text-success text-center">{successMessage}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Correo electrónico:</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          <button type="submit" className="btn btn-dark w-100">Iniciar Sesión</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
