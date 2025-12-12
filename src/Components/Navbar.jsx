"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { ShineBorder } from "./ui/shine-border.jsx";
import { AnimatedThemeTogglerAdapted } from "./ui/animated-theme-toggler-adapted.jsx";

const Navbar = () => { 
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];
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

  // Close menu when route changes
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
          
          {/* Theme Toggle - Animated */}
          <AnimatedThemeTogglerAdapted />

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