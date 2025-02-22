  import { useState, useEffect } from "react";
  import SearchBar from "../components/SearchBar";
  import UserCard from "../components/UserCard";
  import RepoList from "../components/RepoList";
  import { supabase } from "../supabaseClient"; // Importamos Supabase

  const HomePage = () => {
    const [userData, setUserData] = useState(null);
    const [repos, setRepos] = useState([]);
    const [error, setError] = useState(null);
    const [searchHistory, setSearchHistory] = useState([]);

    useEffect(() => {
      fetchSearchHistory(); // Cargar historial al montar la página
    }, []);

    // Función para obtener los datos del usuario de GitHub
    const fetchGitHubUser = async (username) => {
      try {
        setError(null); // Limpiar errores previos
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
          saveSearchToSupabase(data.user); // Guardar búsqueda en Supabase
        }
      } catch {
        setError("Error al obtener los datos");
      }
    };

    // Guardar búsqueda en Supabase
    const saveSearchToSupabase = async (profile) => {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (!storedUser) return;

      const { id: user_id } = storedUser;

      // Insertar nueva búsqueda en Supabase
      const { error } = await supabase.from("historialBusquedas").insert([
        {
          user_id,
          username: profile.login,
          avatar_url: profile.avatar_url,
        },
      ]);

      if (error) {
        console.error("Error guardando en Supabase:", error);
      } else {
        fetchSearchHistory(); // Recargar el historial
      }

      // Eliminar búsquedas antiguas si hay más de 10
      await removeOldSearches(user_id);
    };

    // Obtener las últimas 10 búsquedas desde Supabase
    const fetchSearchHistory = async () => {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (!storedUser) return;

      const { id: user_id } = storedUser;

      const { data, error } = await supabase
        .from("historialBusquedas")
        .select("*")
        .eq("user_id", user_id)
        .order("timestamp", { ascending: false })
        .limit(10);

      if (error) {
        console.error("Error obteniendo historial:", error);
      } else {
        setSearchHistory(data);
      }
    };

    // Eliminar registros antiguos si hay más de 10
    const removeOldSearches = async (user_id) => {
      const { data, error } = await supabase
        .from("historialBusquedas")
        .select("id")
        .eq("user_id", user_id)
        .order("timestamp", { ascending: false });

      if (error) return console.error("Error obteniendo historial:", error);

      if (data.length > 10) {
        const idsToDelete = data.slice(10).map((row) => row.id);
        await supabase.from("historialBusquedas").delete().in("id", idsToDelete);
      }
    };

    return (
    <div className={`container mt-5 ${searchHistory.length === 0 ? "d-flex justify-content-center" : "d-flex"}`} style={{ minHeight: "64vh" }}>
      <div className={`${searchHistory.length === 0 ? "w-100 text-center" : "w-75"}`}>
        <h2 className="text-center">Buscador de usuarios en GitHub</h2>
        <h5 className="text-center">Este es un proyecto para probar la integración de una API</h5>
        <SearchBar onSearch={fetchGitHubUser} />
        {error && <p className="text-danger">{error}</p>}
        {userData && <UserCard user={userData} />}
        {repos.length > 0 && <RepoList repos={repos} />}
      </div>

      {searchHistory.length > 0 && (
        <aside className="w-25 p-3 bg-light border">
          <h5>Últimos Perfiles Buscados</h5>
          <ul className="list-unstyled">
            {searchHistory.map((profile) => (
              <li key={profile.id} className="d-flex align-items-center mb-2">
                <img
                  src={profile.avatar_url}
                  alt={profile.username}
                  width="40"
                  height="40"
                  className="rounded-circle me-2"
                />
                <span>{profile.username}</span>
              </li>
            ))}
          </ul>
        </aside>
      )}
    </div>
  );
  };

  export default HomePage;
