import React, { useContext } from "react";
import "./Footer.css";
import { ThemeContext } from "../ThemeContext";
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <footer className={`footer ${darkMode ? "dark" : ""}`}>
      <div className="footer-content">
        <div className="footer-left">
          {/* ✅ Use public path directly */}
          <img src="/Webblers.svg" alt="Webblers Logo" className="footer-logo" />
          <p> " Keep IT Simple " .</p>
        </div>

        <div className="footer-center">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-right">
          <h4>Connect With Us</h4>
          <div className="social-icons">
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaGithub /></a>
            <a href="mailto:info@webblers.com"><FaEnvelope /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Webblers IT Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
