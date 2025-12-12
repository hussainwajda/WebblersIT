"use client"

import { motion } from "framer-motion"

export default function AboutHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center px-4 py-5 text-center"
      style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div variants={itemVariants} className="mb-6">
        <div className="inline-flex items-center gap-3 bg-primary/10 px-4 py-2 rounded-full border border-primary/20 mb-8">
          <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
          <span className="text-sm text-foreground font-medium">Who We Are</span>
        </div>
      </motion.div>

      <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-4xl text-primary-hover">
        About <span className="text-primary">Webblers IT</span>
      </motion.h1>

      <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
        Webblers is a forward-thinking tech startup driven by a passion for
        innovation, design, and digital transformation. Our tagline clarifies —
        <strong className="text-foreground"> "Keep IT Simple."</strong> We specialize in building scalable web
        solutions that empower businesses to grow and connect seamlessly in
        the digital age.
      </motion.p>
    </motion.section>
  )
}
