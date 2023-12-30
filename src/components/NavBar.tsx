// src/components/Navbar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar-container bg-gradient-to-r from-blue-500 to-purple-500 p-4 text-white relative">
      <div className="background-shape absolute top-0 left-0 right-0 bottom-0 bg-primary -z-1 rounded-b-full"></div>

      <div className="navbar-content container mx-auto flex items-center justify-between relative">
        <div className="logo-container flex items-center">
          <Link to="/" className="flex items-center">
            <img src="/path/to/genoshi-logo.png" alt="Genoshi Logo" className="h-8" />
            <span className="logo-text ml-2 text-lg font-semibold">Genoshi.io</span>
          </Link>
        </div>

        {/* Hamburger menu for smaller screens */}
        <div className="mobile-menu lg:hidden">
          <button
            onClick={toggleMenu}
            className="menu-button text-white focus:outline-none focus:border-none"
          >
            <svg
              className="menu-icon w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Navigation links */}
        <ul
          className={`nav-links lg:flex space-x-4 ${menuOpen ? 'block' : 'hidden'}`}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
