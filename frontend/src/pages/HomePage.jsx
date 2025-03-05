import { useState } from "react";
import SearchBar from "../components/SearchBar";
import UserCard from "../components/UserCard";
import RepoList from "../components/RepoList";


// Componente principal de la página de inicio
const HomePage = () => {
  // Estado para almacenar los datos del usuario
  const [userData, setUserData] = useState(null);
  // Estado para almacenar los repositorios del usuario
  const [repos, setRepos] = useState([]);
  // Estado para almacenar posibles errores
  const [error, setError] = useState(null);

  // Función para obtener los datos del usuario de GitHub
  const fetchGitHubUser = async (username) => {
    try {
      setError(null); // Limpiar errores previos
      const response = await fetch(`http://localhost:3000/backend/api.php?user=${username}`);
      const data = await response.json();
      console.log("Datos recibidos:", data);

      if (data.error) {
        // Si hay un error en los datos recibidos, actualizar el estado de error
        setError("Usuario no encontrado");
        setUserData(null);
        setRepos([]);
      } else {
        // Si los datos son correctos, actualizar los estados de usuario y repositorios
        setUserData(data.user);
        setRepos(data.repos);
      }
    } catch {
      // Manejar errores de la solicitud
      setError("Error al obtener los datos");
    }
  };

  return (
    <div className="container mt-5" style={{ minHeight: "64vh" }}>
      <h2 className="text-center">Buscador de usuarios en GitHub</h2>
      <h5 className="text-center">Este es un proyecto para probar la integración de una API</h5>
      {/* Componente de barra de búsqueda, se le pasa la función fetchGitHubUser como prop */}
      <SearchBar onSearch={fetchGitHubUser} />
      {/* Mostrar mensaje de error si existe */}
      {error && <p className="text-danger">{error}</p>}
      {/* Mostrar tarjeta de usuario si hay datos de usuario */}
      {userData && <UserCard user={userData} />}
      {/* Mostrar lista de repositorios si hay repositorios */}
      {repos.length > 0 && <RepoList repos={repos} />}
    </div>
  );
};

export default HomePage;
