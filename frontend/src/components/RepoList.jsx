// eslint-disable-next-line no-unused-vars
import React from 'react';

const RepoList = ({ repos }) => {
  return (
    <div className="mt-3">
      <h4>Repositorios:</h4>
      <ul className="list-group">
        {repos.length > 0 ? (
          repos.map((repo) => (
            <li key={repo.id} className="list-group-item">
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                <strong>{repo.name}</strong>
              </a>
              {repo.description && <p className="mb-1">{repo.description}</p>}
              {repo.language && (
                <small className="text-muted">Lenguaje: {repo.language}</small>
              )}
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
