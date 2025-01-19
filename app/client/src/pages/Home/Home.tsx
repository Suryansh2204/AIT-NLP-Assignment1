import React from "react";
import { useState } from "react";
const Home = () => {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    console.log("HIHI");
  };
  return (
    <div className="home">
      <h1>Welcome to Word Wizard! 🪄</h1>
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
    </div>
  );
};

export default Home;
