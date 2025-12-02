"use client";

import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import FloatingMenu from "./FloatingMenu.jsx";
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
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 900);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect resize
  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth < 900);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav className={`navbar-container ${scrolled ? "scrolled" : ""}`}>
        <ShineBorder shineColor={["#00459a"]} />

        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/">
            <img
              src={scrolled ? "/Webblers.svg" : "/W.svg"}
              alt="Webblers Logo"
              className={`logo-img ${scrolled ? "large-logo" : ""}`}
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        {!isMobileView && (
          <ul className="navbar-menu">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link className="nav-link" to={item.path}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        )}

        {/* Right Controls */}
        <div className="navbar-controls">
          {/* === Glass Morphic Theme Toggle === */}
          <div className="theme-toggle" onClick={toggleTheme}>
            <div className={`theme-toggle-inner ${darkMode ? "dark" : "light"}`}>
              
              {/* Sun Icon */}
              <svg className="toggle-icon sun-icon" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <circle cx="12" cy="12" r="4"></circle>
                <line x1="12" y1="2" x2="12" y2="6"></line>
                <line x1="12" y1="18" x2="12" y2="22"></line>
                <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
                <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
                <line x1="2" y1="12" x2="6" y2="12"></line>
                <line x1="18" y1="12" x2="22" y2="12"></line>
                <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
                <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
              </svg>

              {/* Moon Icon */}
              <svg className="toggle-icon moon-icon" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M21 12.79A9 9 0 0111.21 3 7 7 0 0021 12.79z"></path>
              </svg>

              {/* Knob + Grid */}
              <div className="toggle-knob"></div>
              <div className="toggle-grid"></div>
            </div>
          </div>

          {/* Mobile Floating Menu */}
          {isMobileView && <FloatingMenu />}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
    