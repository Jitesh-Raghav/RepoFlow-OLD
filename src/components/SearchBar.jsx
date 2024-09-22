import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [username, setUsername] = useState('');

  const handleSearch = () => {
    if (username.trim() === '') return;
    onSearch(username);
  };

  return (
    <div className="search-bar flex justify-center items-center my-4">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
        className="p-2 border border-gray-300 rounded-md shadow-md"
      />
      <button
        onClick={handleSearch}
        className="ml-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition"
      >
        Generate
      </button>
    </div>
  );
};

export default SearchBar;
