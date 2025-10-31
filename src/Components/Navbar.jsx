import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState, useEffect } from "react";

const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <nav className="navbar-container">
      {/* Logo Section */}
      <div className="navbar-logo">
        <img src="/W.svg" alt="Webblers Logo" />
      </div>

      {/* Navigation Menu */}
      <ul className="navbar-menu">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link className="nav-link" to={item.path}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Dark Mode Switch */}
      <div className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
        <div className={`toggle-circle ${darkMode ? "move-right" : ""}`}>
          {darkMode ? "🌙" : "☀️"}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
