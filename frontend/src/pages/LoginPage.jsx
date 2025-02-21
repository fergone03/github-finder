import { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [userOrEmail, setUserOrEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container d-flex justify-content-center align-items-center"  style={{ minHeight: "68vh" }}>
      <div className="card p-4 shadow-lg" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-4">Iniciar sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Usuario o Correo:</label>
            <input 
              type="text" 
              className="form-control" 
              value={userOrEmail} 
              onChange={(e) => setUserOrEmail(e.target.value)} 
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
