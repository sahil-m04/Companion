// src/Book-Comp/searchBox.jsx
import React, { useState } from 'react';
import './SearchBox.scss';

const SearchBar = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Only show results if there is a search term
  const shouldShowResults = searchTerm.trim() !== '';
  
  // Filter data based on title and genre if results should be shown
  const filteredData = shouldShowResults
    ? data.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.genre.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const handleClick = (url) => {
    window.open(url, '_blank', 'noopener noreferrer');
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search books..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      {shouldShowResults && (
        <ul className="results">
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <li
                key={index}
                className="result-item"
                onClick={() => handleClick(item.url)}
              >
                {item.title}
              </li>
            ))
          ) : (
            <li className="no-results">No results found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
