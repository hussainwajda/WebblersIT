"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export function InteractiveClock() {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <motion.div
      className="interactive-clock-root"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Clock center dot */}
      <div className="clock-center" />

      {/* Hour hand */}
      <motion.div
        className="clock-hand hour-hand"
        animate={{ rotate: isHovering ? 180 : 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />

      {/* Minute hand */}
      <motion.div
        className="clock-hand minute-hand"
        animate={{ rotate: isHovering ? 360 : 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />

      {/* Second hand (thin) */}
      <motion.div
        className="clock-hand second-hand"
        animate={{ rotate: isHovering ? 720 : 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />

      {/* Decorative circle markers */}
      {[0, 90, 180, 270].map((angle) => (
        <div
          key={angle}
          className="clock-marker"
          style={{ transform: `rotate(${angle}deg) translateY(-56px)` }}
        />
      ))}
    </motion.div>
  )
}
