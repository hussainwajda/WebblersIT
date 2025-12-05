"use client";

import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { ThemeContext } from "../ThemeContext.jsx";
import { ShineBorder } from "./ui/shine-border";

const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [isMobileMenuOpen]);

  // Close menu when route changes (optional helper)
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar-container ${scrolled ? "scrolled" : ""}`}>
        <ShineBorder shineColor={["#00459a"]} />

        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/" onClick={handleLinkClick}>
            <img
              src={scrolled ? "/Webblers.svg" : "/W.svg"}
              alt="Webblers Logo"
              className={`logo-img ${scrolled ? "large-logo" : ""}`}
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="navbar-menu">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link className="nav-link" to={item.path}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Controls */}
        <div className="navbar-controls">
          
          {/* Theme Toggle */}
          <div className="theme-toggle" onClick={toggleTheme}>
            <div className={`theme-toggle-inner ${darkMode ? "dark" : "light"}`}>
              {/* Sun Icon */}
              <svg className="toggle-icon sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>

              {/* Moon Icon */}
              <svg className="toggle-icon moon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>

              <div className="toggle-knob"></div>
            </div>
          </div>

          {/* Hamburger Button (Visible only on Mobile via CSS) */}
          <button 
            className={`hamburger-btn ${isMobileMenuOpen ? 'active' : ''}`} 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>

        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-content">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              className="mobile-nav-link"
              onClick={handleLinkClick}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;