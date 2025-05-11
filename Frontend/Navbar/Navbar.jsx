import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';
import './Navbar.css';

const Navbar = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
      navigate('/');
      window.location.reload();
  };

  return (
    <nav className="navbar">
      <div className="navbar-title">PostGenie</div>
      <div className="navbar-links">
        <Link className={location.pathname === '/home' ? 'active' : ''} to="/home">Home</Link>
        <Link className={location.pathname === '/about' ? 'active' : ''} to="/about">About</Link>
        <button onClick={toggleTheme} className="theme-toggle">
          {darkMode ? '🌙' : '☀️'}
        </button>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
