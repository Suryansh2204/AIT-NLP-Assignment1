import React from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle.tsx";

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme }) => {
  return (
    <nav className={`navbar ${isDarkMode ? "dark-navbar" : "light-navbar"}`}>
      <div className="site-title">🧐 Word Wizard</div>
      <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
    </nav>
  );
};

export default Navbar;
