"use client"

import { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import "./navbar.css"
import FloatingMenu from "./FloatingMenu.jsx"
import { ThemeContext } from "../ThemeContext.jsx"

const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ]

  const { darkMode, toggleTheme } = useContext(ThemeContext)
  const [scrolled, setScrolled] = useState(false)
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 900)

  // ✅ Detect Scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // ✅ Detect Resize
  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth < 900)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <>
      <nav className={`navbar-container ${scrolled ? "scrolled" : ""}`}>
        {/* ✅ Logo Section */}
       <div className="navbar-logo">
  <Link to="/">
    <img
      src={scrolled ? "/Webblers.svg" : "/W.svg"}
      alt="Webblers Logo"
      className={`logo-img ${scrolled ? "large-logo" : ""}`}
    />
  </Link>
</div>
        {/* ✅ Desktop Menu */}
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

        {/* ✅ Right Controls */}
        <div className="navbar-controls">
          {/* 🌙 Dark Mode Switch */}
          <div
            className={`theme-toggle-illustrated ${darkMode ? "night" : "day"}`}
            onClick={toggleTheme}
          >
            <div className="sky-elements">
              <div className="sun"></div>
              <div className="moon"></div>
              <div className="cloud cloud-1"></div>
              <div className="cloud cloud-2"></div>
              <div className="stars"></div>
            </div>
          </div>
          {/* ✅ Floating Glass Menu (Mobile View Only) */}
      {isMobileView && <FloatingMenu />}
        </div>
      </nav>
      
    </>
  )
}

export default Navbar
