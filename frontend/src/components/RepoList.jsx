// eslint-disable-next-line no-unused-vars
import React from 'react'

const RepoList = ({ repos }) => {
    return (
      <div className="mt-3">
        <h4>Repositorios:</h4>
        <ul className="list-group">
        {repos.length > 0 ? (  // Verifica si el array 'repos' tiene elementos.
              repos.map((repo) => (  // Itera sobre cada elemento del array 'repos'.
                <li key={repo.id} className="list-group-item">  
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  {repo.name}
                </a>
              </li>
            ))
          ) : (
            <li className="list-group-item">Este usuario no tiene repositorios.</li>
          )}
        </ul>
      </div>
    );
  };
  
  export default RepoList;
  