"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export function InteractiveBarChart() {
  const [isHovering, setIsHovering] = useState(false)

  const bars = [
    { height: 60, delay: 0 },
    { height: 75, delay: 0.1 },
    { height: 85, delay: 0.2 },
    { height: 95, delay: 0.3 },
  ]

  return (
    <motion.div
      className="flex items-end justify-center gap-3 h-32 w-full px-4 rounded-lg bg-gradient-to-br from-primary/10 to-transparent p-4"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {bars.map((bar, index) => (
        <motion.div
          key={index}
          className="bg-primary/60 rounded-t-sm"
          style={{
            width: "16px",
          }}
          animate={{
            height: isHovering ? bar.height : bar.height * 0.4,
          }}
          transition={{
            duration: 0.6,
            delay: isHovering ? bar.delay : 0,
            ease: "easeOut",
          }}
        />
      ))}
    </motion.div>
  )
}
