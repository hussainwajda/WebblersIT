import React, { useEffect, useState } from "react"
import { ProgressiveBlur } from "./progressive-blur"

// Fixed bottom blur overlay that reveals sections as they scroll up
// and disappears near the very end of the page.
export function BottomRevealBlur({ height = "20vh" }) {
  const [hideBlur, setHideBlur] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === "undefined" || typeof document === "undefined") return

      const scrollY = window.scrollY || window.pageYOffset || 0
      const viewportHeight = window.innerHeight || 0
      const docHeight = document.documentElement.scrollHeight || 0

      const distanceToBottom = docHeight - (scrollY + viewportHeight)

      // When we're within ~30% of the viewport height from the bottom,
      // hide the blur so the last section/footer is fully visible.
      const threshold = viewportHeight * 0.3
      setHideBlur(distanceToBottom <= threshold)
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [])

  if (hideBlur) return null

  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-0 z-40"
      style={{ height }}
    >
      <ProgressiveBlur height="100%" position="bottom" />
    </div>
  )
}


