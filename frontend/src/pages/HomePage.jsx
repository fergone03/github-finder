import { useState } from "react";
import SearchBar from "../components/SearchBar";
import UserCard from "../components/UserCard";
import RepoList from "../components/RepoList";

const HomePage = () => {
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);

  const fetchGitHubUser = async (username) => {
    try {
      setError(null);
      const response = await fetch(`http://localhost:3000/backend/api.php?user=${username}`);
      const data = await response.json();
      console.log("Datos recibidos:", data);

      if (data.error) {
        setError("Usuario no encontrado");
        setUserData(null);
        setRepos([]);
      } else {
        setUserData(data.user);
        setRepos(data.repos);
      }
    } catch {
      setError("Error al obtener los datos");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Buscador de usuarios en GitHub</h2>
      <h5 className="text-center">Este es un proyecto para probar la integración de una API</h5>
      <SearchBar onSearch={fetchGitHubUser} />
      {error && <p className="text-danger">{error}</p>}
      {userData && <UserCard user={userData} />}
      {repos.length > 0 && <RepoList repos={repos} />}
    </div>
  );
};

export default HomePage;
