import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input.trim()) {
      onSearch(input);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a word..."
        className="search-input"
      />
      <button className="button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
