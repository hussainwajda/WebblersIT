import { useMemo, useRef } from "react"
import { motion } from "motion/react"
import { Users } from "lucide-react"

import { Globe } from "@/components/ui/globe.jsx"
import { AnimatedBeam } from "@/components/ui/animated-beam.jsx"

const NODE_COUNT = 15

function generateNodes(count) {
  // Generate positions in from 10–90% so we don't hug the edges.
  return Array.from({ length: count }).map((_, index) => ({
    id: index,
    top: 10 + Math.random() * 80,
    left: 10 + Math.random() * 80,
    index,
  }))
}

export function GlobeDemo() {
  const containerRef = useRef(null)
  const globeRef = useRef(null)
  const nodeRefs = useRef([])

  const nodes = useMemo(() => generateNodes(NODE_COUNT), [])

  return (
    <div className="relative flex size-full max-w-xl items-center justify-center overflow-hidden rounded-2xl border border-border px-6 py-10 shadow-[0_18px_60px_rgba(15,23,42,0.45)]">
      {/* Grid + vignette borrowed from other service visuals for consistency */}
      <div className="service-card-grid normal pointer-events-none" />
      <div className="service-card-vignette" />

      <div
        ref={containerRef}
        className="relative aspect-[4/3] w-full max-w-md"
      >
        {/* Center globe */}
        <div
          ref={globeRef}
          className="absolute left-1/2 top-1/2 z-10 h-32 w-32 -translate-x-1/2 -translate-y-1/2 md:h-40 md:w-40"
        >
          <Globe className="relative" />
        </div>

        {/* User nodes appearing one by one, looping */}
        {nodes.map((node, idx) => {
          const baseDelay = idx * 0.4

          return (
            <motion.div
              key={node.id}
              ref={(el) => {
                nodeRefs.current[idx] = el
              }}
              className="service-node absolute flex h-8 w-8 items-center justify-center border-2"
              style={{
                top: `${node.top}%`,
                left: `${node.left}%`,
              }}
              initial={{ opacity: 0, scale: 0.35 }}
              animate={{
                opacity: [0, 1, 1, 0],
                scale: [0.35, 1, 1.1, 0.6],
              }}
              transition={{
                duration: 6,
                delay: baseDelay,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Users className="h-4 w-4" />
            </motion.div>
          )
        })}

        {/* Animated beams from nodes to globe, with accelerating cadence */}
        {nodes.map((node, idx) => {
          const nodeRef = nodeRefs.current[idx]
          const baseDelay = idx * 0.4
          const duration = Math.max(1.5, 4 - idx * 0.15) // slightly faster over time

          // While refs are being attached, skip rendering beam
          if (!nodeRef) return null

          return (
            <AnimatedBeam
              key={`beam-${node.id}`}
              containerRef={containerRef}
              fromRef={{ current: nodeRef }}
              toRef={globeRef}
              curvature={50}
              duration={duration}
              delay={baseDelay + 0.2}
              pathOpacity={0.25}
              pathWidth={1.6}
              gradientStartColor="#fb6415"
              gradientStopColor="#22d3ee"
            />
          )
        })}
      </div>
    </div>
  )
}