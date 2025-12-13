import React, { useState } from "react";
import { FaHome, FaUserAlt, FaLaptopCode, FaEnvelope, FaBriefcase, FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./FloatingMenu.css";

const FloatingMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="navbar-floating-menu">
      {/* 🔘 Menu Toggle Button */}
      <button className="nav-float-btn" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* 🧊 Glass Menu */}
      <div className={`nav-float-panel ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={toggleMenu}>
          <FaHome /> Home
        </Link>
        <Link to="/services" onClick={toggleMenu}>
          <FaLaptopCode /> Services
        </Link>
        <Link to="/portfolio" onClick={toggleMenu}>
          <FaBriefcase /> Portfolio
        </Link>
        <Link to="/about" onClick={toggleMenu}>
          <FaUserAlt /> About
        </Link>
        <Link to="/contact" onClick={toggleMenu}>
          <FaEnvelope /> Contact
        </Link>
      </div>
    </div>
  );
};

export default FloatingMenu;
