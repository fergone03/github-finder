// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const SearchBar = ({ onSearch }) => {     // La prop 'onSearch' se usa para manejar la búsqueda cuando el usuario envía hace el submit.

    
    const [username, setUsername] = useState("");

    const manejarEnvio = (e) => {    // Maneja el envío del formulario, evita el comportamiento por defecto y ejecuta onSearch si el campo no está vacío.

        e.preventDefault();
        if (username.trim() !== "") {
            onSearch(username);
        }
    };

    return (
        <form onSubmit={manejarEnvio} className="d-flex mb-3 justify-content-center">
            <input
                type="text"
                className="form-control w-25"
                placeholder="Buscar usuario de GitHub..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            /> 
            <button type="submit" className="btn btn-primary ms-2">Buscar</button>
        </form>
    );
};

export default SearchBar;
