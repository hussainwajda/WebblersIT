"use client"

import { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import BubbleMenu from "../Components/BubbleMenu.jsx"
import "./navbar.css"
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
  const [showBubbleMenu, setShowBubbleMenu] = useState(false)
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 900)

  // 👇 Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true)
      else setScrolled(false)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 900)
      // Close bubble menu on resize to desktop
      if (window.innerWidth >= 900) {
        setShowBubbleMenu(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const bubbleMenuItems = navItems.map((item, idx) => ({
    label: item.name.toLowerCase(),
    href: item.path,
    ariaLabel: item.name,
    rotation: idx % 2 === 0 ? -8 : 8,
    hoverStyles: {
      bgColor: ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"][idx],
      textColor: "#ffffff",
    },
  }))

  const handleBubbleMenuToggle = (isOpen) => {
    setShowBubbleMenu(isOpen)
  }

  return (
    <>
      <nav className={`navbar-container ${scrolled ? "scrolled" : ""}`}>
        {/* ✅ Logo Section */}
        <div className="navbar-logo">
          <img
            src={scrolled ? "/Webblers.svg" : "/W.svg"}
            alt="Webblers Logo"
            className={`logo-img ${scrolled ? "large-logo" : ""}`}
          />
        </div>

        {/* ✅ Navigation Menu - Desktop Only */}
        <ul className="navbar-menu">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link className="nav-link" to={item.path}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* ✅ Right Side Controls */}
        <div className="navbar-controls">
          {isMobileView && (
            <button
              onClick={() => setShowBubbleMenu(!showBubbleMenu)}
              className="bubble-menu-toggle"
              aria-label="Toggle navigation menu"
              aria-expanded={showBubbleMenu}
            >
              <span className={`hamburger-line ${showBubbleMenu ? "open" : ""}`}></span>
              <span className={`hamburger-line ${showBubbleMenu ? "open" : ""}`}></span>
            </button>
          )}

          {/* ✅ Dark Mode Switch */}
          <div className="theme-toggle" onClick={toggleTheme}>
            <div className={`toggle-circle ${darkMode ? "move-right" : ""}`}>{darkMode ? "🌙" : "☀️"}</div>
          </div>
        </div>
      </nav>

      {/* ✅ Bubble Menu - Only render on mobile/tablet and when toggled */}
      {isMobileView && showBubbleMenu && (
        <BubbleMenu
          logo={scrolled ? "/Webblers.svg" : "/W.svg"}
          items={bubbleMenuItems}
          onMenuClick={handleBubbleMenuToggle}
          menuAriaLabel="Toggle navigation menu"
          menuBg="#0066cc"
          menuContentColor="#ffffff"
          useFixedPosition={true}
          animationEase="back.out(1.5)"
          animationDuration={0.5}
          staggerDelay={0.12}
          showHeader={false}
          isOpen={showBubbleMenu}
        />
      )}
    </>
  )
}

export default Navbar
