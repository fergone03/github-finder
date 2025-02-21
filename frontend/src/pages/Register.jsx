// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { supabase } from "../supabaseClient";
import { Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    // Insertar el usuario en la tabla "usuariosAPIGitHub"
    const { error } = await supabase
      .from("usuariosAPIGitHub")
      .insert([
        {
          username,
          email,
          password, 
          created_at: new Date(),
        },
      ]);

    if (error) {
      console.error("Error al registrar usuario:", error.message);
      alert("Error al registrar usuario.");
      return;
    }

    alert("Registro exitoso");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "69vh" }}>
      <div className="card p-4 shadow-lg" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-4">Registro</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <label className="form-label">Nombre de usuario:</label>
            <input 
              type="text" 
              className="form-control" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required 
            />
          </div>
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
          <div className="mb-3">
            <label className="form-label">Confirmar contraseña:</label>
            <input 
              type="password" 
              className="form-control" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
              required 
            />
          </div>
          <button type="submit" className="btn btn-dark w-100">Registrarse</button>
        </form>
        <p className="mt-3 text-center">
          ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
