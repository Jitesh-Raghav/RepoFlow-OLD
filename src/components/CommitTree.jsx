import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CommitTree = ({ repo, onClose }) => {
  const [commits, setCommits] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        const response = await axios.get(`https://api.github.com/repos/${repo.owner.login}/${repo.name}/commits`);
        setCommits(response.data);
        setError('');
      } catch (err) {
        setError('Failed to fetch commits');
      }
    };

    fetchCommits();
  }, [repo]);

  return (
    <div className="commit-tree">
      <button onClick={onClose} className="close-button">Close</button>
      <h2>{repo.name} Commit History</h2>
      {error && <p className="text-red-500">{error}</p>}
      <ul className="commit-list">
        {commits.map(commit => (
          <li key={commit.sha} className="commit-item">
            <span className="commit-sha">{commit.sha.slice(0, 7)}</span>
            <span className="commit-message">{commit.commit.message}</span>
            <span className="commit-date">{new Date(commit.commit.author.date).toLocaleDateString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommitTree;
