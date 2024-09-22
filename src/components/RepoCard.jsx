import React from 'react';

const RepoCard = ({ repo }) => {
  return (
    <div className="repo-card p-4 mb-4 bg-white shadow-md rounded-md border-l-4 border-blue-500">
      <h3 className="text-lg font-bold text-blue-700">{repo.name}</h3>
      <p className="text-sm text-gray-600">{new Date(repo.created_at).toLocaleDateString()}</p>
      <p className="text-gray-800">{repo.description ? repo.description : 'No description available'}</p>
    </div>
  );
};

export default RepoCard;
