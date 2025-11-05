import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../ThemeContext.jsx";

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

  // 👇 Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar-container ${scrolled ? "scrolled" : ""}`}>
      {/* ✅ Logo Section */}
      <div className="navbar-logo">
        <img
          src={scrolled ? "/Webblers.svg" : "/W.svg"}
          alt="Webblers Logo"
          className={`logo-img ${scrolled ? "large-logo" : ""}`}
        />
      </div>

      {/* ✅ Navigation Menu */}
      <ul className="navbar-menu">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link className="nav-link" to={item.path}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* ✅ Dark Mode Switch */}
      <div className="theme-toggle" onClick={toggleTheme}>
        <div className={`toggle-circle ${darkMode ? "move-right" : ""}`}>
          {darkMode ? "🌙" : "☀️"}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
