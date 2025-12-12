import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { ThemeContext } from "../ThemeContext";
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <footer className={`footer ${darkMode ? "dark" : ""}`}>
      <div className="footer-content">
        {/* 🔹 Left Section */}
        <div className="footer-left">
          <img src="/Footer_logo.svg" alt="Webblers Logo" className="footer-logo" />
         <p>Keep <span className="highlight-it">IT</span> Simple</p>

        </div>

        {/* 🔹 Center Section */}
        <div className="footer-center">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/About">About Us</a></li>
            <li><a href="/Services">Services</a></li>
            <li><a href="/Portfolio">Portfolio</a></li>
            <li><a href="/Contact">Contact</a></li>
          </ul>
        </div>

        {/* 🔹 Services Section */}
        <div className="footer-services">
          <h4>Services</h4>
          <ul>
            <li><Link to="/services">Web Development</Link></li>
            <li><Link to="/services">AI Automations & Workflows</Link></li>
            <li><Link to="/services">E-commerce Setup</Link></li>
            <li><Link to="/services">SEO Setup</Link></li>
            <li><Link to="/services">Digital Marketing</Link></li>
            <li><Link to="/services">Website Automation</Link></li>
            <li><Link to="/services">API Integration</Link></li>
          </ul>
        </div>

        {/* 🔹 Right Section */}
        <div className="footer-right">
          <h4>Connect With Us</h4>
          <div className="social-icons">
            <a href="#"><FaLinkedin /></a>
            <a href="https://www.instagram.com/webblersdotcom"><FaInstagram /></a>
            <a href="https://wa.me/+919329848282"><FaWhatsapp /></a>
            <a href="mailto:info@webblers.com"><FaEnvelope /></a>
            <a href="https://github.com/murtzdev07"><FaGithub /></a>
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
