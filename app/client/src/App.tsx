import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.tsx";
import SearchBar from "./components/SearchBar/SearchBar.tsx";
import Results from "./components/Results/Results.tsx";
import Home from "./pages/Home/Home.tsx";

const App: React.FC = () => {
  const [words, setWords] = useState<string[]>([]);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    localStorage.getItem("theme") === "dark"
  );

  const fetchSimilarWords = async (query: string) => {
    const mockResults = {
      hello: ["hi", "greetings", "hey"],
      world: ["earth", "globe", "planet"],
      react: ["framework", "library", "UI"],
    };
    setWords(mockResults[query.toLowerCase()] || []);
  };

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  return (
    <div className={isDarkMode ? "dark-theme" : "light-theme"}>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <div className="content">
        {/* <h1>Welcome to Word Wizard! 🪄</h1>
        <SearchBar onSearch={fetchSimilarWords} />
        <Results words={words} /> */}
        <Home />
      </div>
    </div>
  );
};

export default App;
