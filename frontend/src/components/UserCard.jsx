// eslint-disable-next-line no-unused-vars
import React from 'react'

const UserCard = ({ user }) => {
    return (
      <div className="card p-3 text-center">
        <img src={user.avatar_url} alt="Profile Picture" className="rounded-circle mx-auto" width="100" />
        <h3 className="mt-2">{user.name || user.login}</h3>
        <p>{user.bio || "No hay biografía disponible"}</p>
        <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="btn btn-dark">
          Ver perfil en GitHub
        </a>
      </div>
    );
  };

  export default UserCard;
  