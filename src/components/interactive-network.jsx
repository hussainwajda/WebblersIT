"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export function InteractiveNetwork() {
  const [isHovering, setIsHovering] = useState(false)

  const nodes = [
    { x: 0, y: 0, size: 8 }, // Center
    { x: 60, y: 0, size: 6 }, // Right
    { x: -60, y: 0, size: 6 }, // Left
    { x: 30, y: 50, size: 6 }, // Bottom right
    { x: -30, y: 50, size: 6 }, // Bottom left
    { x: 0, y: -60, size: 6 }, // Top
  ]

  const containerVariants = {
    hover: {
      scale: 1.05,
    },
  }

  const nodeVariants = {
    initial: { opacity: 0.6 },
    hover: {
      opacity: 1,
      scale: 1.2,
    },
  }

  const lineVariants = {
    initial: { pathLength: 0, opacity: 0.3 },
    hover: { pathLength: 1, opacity: 0.8 },
  }

  return (
    <motion.div
      className="relative w-32 h-32 flex items-center justify-center"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      variants={containerVariants}
      animate={isHovering ? "hover" : "initial"}
      transition={{ duration: 0.4 }}
    >
      {/* SVG for connection lines */}
      <svg className="absolute w-full h-full" viewBox="0 0 128 128" style={{ overflow: "visible" }}>
        {/* Lines from center to outer nodes */}
        {nodes.slice(1).map((node, index) => (
          <motion.line
            key={`line-${index}`}
            x1="64"
            y1="64"
            x2={64 + node.x}
            y2={64 + node.y}
            stroke="url(#gradient)"
            strokeWidth="1.5"
            variants={lineVariants}
            animate={isHovering ? "hover" : "initial"}
            transition={{ duration: 0.6, delay: index * 0.05 }}
          />
        ))}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>

      {/* Nodes */}
      {nodes.map((node, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-primary"
          style={{
            width: node.size,
            height: node.size,
            left: `calc(50% + ${node.x}px)`,
            top: `calc(50% + ${node.y}px)`,
            marginLeft: `-${node.size / 2}px`,
            marginTop: `-${node.size / 2}px`,
          }}
          variants={nodeVariants}
          animate={isHovering ? "hover" : "initial"}
          transition={{
            duration: 0.4,
            delay: index * 0.05,
          }}
        />
      ))}

      {/* Decorative glow effect on center node when hovering */}
      <motion.div
        className="absolute w-4 h-4 rounded-full border border-primary/40"
        style={{
          left: "50%",
          top: "50%",
          marginLeft: "-8px",
          marginTop: "-8px",
        }}
        animate={isHovering ? { scale: 1.5, opacity: 0 } : { scale: 1, opacity: 0.6 }}
        transition={{ duration: 0.6 }}
      />
    </motion.div>
  )
}
