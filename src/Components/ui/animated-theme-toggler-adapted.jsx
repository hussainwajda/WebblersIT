import { useCallback, useRef, useContext } from "react"
import { Moon, Sun } from "lucide-react"
import { flushSync } from "react-dom"
import { ThemeContext } from "../../ThemeContext"
import { cn } from "../../lib/utils"

export const AnimatedThemeTogglerAdapted = ({
  className,
  duration = 600,
  ...props
}) => {
  const { darkMode, toggleTheme: contextToggleTheme } = useContext(ThemeContext)
  const buttonRef = useRef(null)

  const toggleTheme = useCallback(async () => {
    if (!buttonRef.current) return

    // Capture button position BEFORE starting transition (critical for smooth animation)
    const rect = buttonRef.current.getBoundingClientRect()
    const x = rect.left + rect.width / 2
    const y = rect.top + rect.height / 2
    const maxRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    )

    // Check if View Transitions API is supported
    if (!document.startViewTransition) {
      // Fallback to regular toggle if View Transitions not supported
      contextToggleTheme()
      return
    }

    // Remove theme-fade class if present to avoid conflicts with View Transitions
    document.body.classList.remove("theme-fade")
    
    // Add data attribute to indicate View Transitions are active (for CSS)
    document.documentElement.setAttribute("data-view-transition", "active")

    // Start the view transition
    const transition = document.startViewTransition(() => {
      flushSync(() => {
        // Use context toggle - it will add theme-fade, but we'll remove it immediately
        contextToggleTheme()
        // Immediately remove theme-fade in the same frame to prevent conflicts
        document.body.classList.remove("theme-fade")
      })
    })
    
    // Clean up data attribute after transition completes
    transition.finished.finally(() => {
      document.documentElement.removeAttribute("data-view-transition")
      // Ensure theme-fade is removed
      document.body.classList.remove("theme-fade")
    })

    // Wait for the transition to be ready
    await transition.ready

    // Animate the view transition with smooth easing starting from button
    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration,
        easing: "cubic-bezier(0.4, 0, 0.2, 1)",
        pseudoElement: "::view-transition-new(root)",
      }
    )
  }, [darkMode, contextToggleTheme, duration])

  return (
    <div
      ref={buttonRef}
      onClick={toggleTheme}
      className={cn("theme-toggle", className)}
      {...props}
    >
      <div className={`theme-toggle-inner ${darkMode ? "dark" : "light"}`}>
        {/* Sun Icon */}
        <svg
          className="toggle-icon sun-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
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
        <svg
          className="toggle-icon moon-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>

        <div className="toggle-knob"></div>
      </div>
    </div>
  )
}

