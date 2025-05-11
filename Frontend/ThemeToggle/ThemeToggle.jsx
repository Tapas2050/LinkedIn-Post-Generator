import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="theme-toggle">
      <button onClick={toggleTheme} className="toggle-btn">
        {darkMode ? '☀️' : '🌙'}
      </button>
    </div>
  );
};

export default ThemeToggle;