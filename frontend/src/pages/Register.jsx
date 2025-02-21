// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { supabase } from "../supabaseClient";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  // Estados para almacenar los valores de los campos del formulario
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({}); // Estado para almacenar errores de validación
  const [showPopup, setShowPopup] = useState(false); // Estado para mostrar el pop-up de éxito
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault(); // Previene la recarga de la página al enviar el formulario

    let validationErrors = {}; // Objeto para almacenar errores de validación

    // Validaciones de los campos del formulario
    if (!username.trim()) validationErrors.username = "El nombre de usuario es obligatorio.";
    if (!email.trim()) validationErrors.email = "El correo es obligatorio.";
    if (!/\S+@\S+\.\S+/.test(email)) validationErrors.email = "Formato de correo inválido.";
    if (password.length < 6) validationErrors.password = "La contraseña debe tener al menos 6 caracteres.";
    if (password !== confirmPassword) validationErrors.confirmPassword = "Las contraseñas no coinciden.";

    // Si hay errores, los mostramos y detenemos el registro
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Verificar si el nombre de usuario o correo ya están registrados en la tabla usuariosAPIGitHub
    const { data: existingUsers, error: fetchError } = await supabase
      .from("usuariosAPIGitHub")
      .select("username, email")
      .or(`username.eq.${username},email.eq.${email}`);

    if (fetchError) {
      console.error("Error al verificar usuario:", fetchError.message);
      return;
    }

    if (existingUsers.length > 0) {
      // Si el usuario o correo existen, mostramos mensajes en los campos correspondientes
      if (existingUsers.some((user) => user.email === email)) {
        validationErrors.email = "El correo ya está en uso.";
      }
      if (existingUsers.some((user) => user.username === username)) {
        validationErrors.username = "El nombre de usuario ya está en uso.";
      }

      setErrors({ ...validationErrors });
      return;
    }

    // Insertar el nuevo usuario en la tabla personalizada "usuariosAPIGitHub"
    const { error: insertError } = await supabase
      .from("usuariosAPIGitHub")
      .insert([
        {
          username,
          email,
          password, 
          created_at: new Date(),
        },
      ]);

    if (insertError) {
      console.error("Error al registrar usuario:", insertError.message);
      return;
    }

    // Mostrar el pop-up de confirmación
    setShowPopup(true);

    // Espera 2 segundos antes de ocultar el pop-up y redirigir al login
    setTimeout(() => {
      setShowPopup(false);
      navigate("/login");
    }, 2000);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "69vh" }}>
      <div className="card p-4 shadow-lg" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-4">Registro</h2>
        <form onSubmit={handleRegister}>
          {/* Campo de Nombre de Usuario */}
          <div className="mb-3">
            <label className="form-label">Nombre de usuario:</label>
            <input
              type="text"
              className={`form-control ${errors.username ? "is-invalid" : ""}`}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            {errors.username && <div className="invalid-feedback">{errors.username}</div>}
          </div>

          {/* Campo de Correo Electrónico */}
          <div className="mb-3">
            <label className="form-label">Correo electrónico:</label>
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>

          {/* Campo de Contraseña */}
          <div className="mb-3">
            <label className="form-label">Contraseña:</label>
            <input
              type="password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
          </div>

          {/* Campo de Confirmar Contraseña */}
          <div className="mb-3">
            <label className="form-label">Confirmar contraseña:</label>
            <input
              type="password"
              className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
          </div>

          <button type="submit" className="btn btn-dark w-100">Registrarse</button>
        </form>

        <p className="mt-3 text-center">
          ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
        </p>
      </div>

      {/* Pop-up de confirmación */}
      {showPopup && (
        <div style={styles.popupContainer}>
          <div style={styles.popup}>
            <p>Correo registrado de manera exitosa</p>
          </div>
        </div>
      )}
    </div>
  );
};

// Estilos en línea para el pop-up
const styles = {
  popupContainer: {
    position: "fixed",
    top: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#28a745",
    color: "white",
    padding: "10px 20px",
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    opacity: 1,
    transition: "opacity 0.5s ease-in-out",
  },
};

export default Register;
