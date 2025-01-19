import React from "react";
import { useState } from "react";
import "./Home.css";
import Loader from "../../components/Loader/Loader.tsx";

const Home = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<string[] | null>(null);

  const handleSearch = async () => {
    setError("");
    setResults(null);
    setLoading(true);
    if (input === "" || input === null) {
      setError("Please enter a query");
      setLoading(false);
      return;
    }
    const data = {
      query: input,
    };
    try {
      const response = await fetch(
        `http://localhost:5000/predict?query=${input}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        const res = await response.json();
        if (res.error) {
          setError(res.error);
        } else {
          setResults(res.predictions);
        }
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Something went wrong. Please try again later.");
    }
    setLoading(false);
  };
  return (
    <>
      {loading && (
        <div
          className="home-loader"
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
          }}
        >
          <Loader />
        </div>
      )}
      <div className="home">
        <h1 className="home-heading">Welcome to Word Wizard! 🪄</h1>
        <div className="home-search-container">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Input query here..."
            className="home-search-input"
          />
          <button className="button" onClick={handleSearch}>
            Search
          </button>
        </div>
        {error && <div className="home-search-error">* {error}</div>}
        {results && (
          <div className="home-results-container">
            <div className="home-search-results">
              <h2>Related Words</h2>
              <div className="home-search-results-list">
                {results.map((result, index) => (
                  <ul>
                    <li className="home-search-result" key={index}>
                      {result}
                    </li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
