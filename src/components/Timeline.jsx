import React from 'react';
import RepoCard from './RepoCard';

const Timeline = ({ repos }) => {
  if (repos.length === 0) {
    return <p className="text-center text-gray-500">No repositories found.</p>;
  }

  return (
    <div className="timeline-container flex flex-col items-center">
      {repos.map((repo) => (
        <div key={repo.id} className="timeline-item">
          <RepoCard repo={repo} />
        </div>
      ))}
    </div>
  );
};

export default Timeline;
