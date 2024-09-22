import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import Timeline from './components/Timeline';

const App = () => {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState('');

  const fetchRepos = async (username) => {
    const repos = [];
    let page = 1;
    const perPage = 100;  // Maximum number of repos per page
    let fetchMore = true;
  
    try {
      while (fetchMore) {
        const response = await axios.get(`https://api.github.com/users/${username}/repos`, {
          params: {
            per_page: perPage,
            page: page,
          },
        });
        repos.push(...response.data);
        if (response.data.length < perPage) {
          fetchMore = false;
        } else {
          page++;
        }
      }
       // Sort the repos by creation date (latest to oldest)
    repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      setRepos(repos);
      setError('');
    } catch (err) {
      setError('GitHub user not found or no public repositories available');
      setRepos([]);
    }
  };
  

  return (
    <div className="App">
      <h1 className="text-center text-3xl font-bold my-6">GitHub Timeline</h1>
      <SearchBar onSearch={fetchRepos} />

      {error && <p className="text-center text-red-500">{error}</p>}

      <Timeline repos={repos} />
    </div>
  );
};

export default App;
