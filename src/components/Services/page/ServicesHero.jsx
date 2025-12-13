"use client"

import { Link } from "react-router-dom" // ✅ Import Link
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import "./services-page.css"
import newimg from "@/assets/coding-workshop-animate.svg"

export function ServicesHero() {
  return (
    <section className="services-hero-section relative overflow-hidden px-6 py-16 lg:px-16 lg:py-24 top-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="services-hero-title mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
            >
              Power Your <span className="services-hero-accent">Success</span> with Our{" "}
              <span className="services-hero-accent">Services</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="services-hero-description mb-8 max-w-md"
            >
              From design to development, SEO to social media, our expertise drives your business forward, ensuring
              growth and success.
            </motion.p>

            {/* CTA Button */}
            {/* ✅ WRAPPED IN LINK AND REMOVED ONCLICK */}
            <Link to="/portfolio">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="services-hero-button flex w-fit items-center gap-2 rounded-full px-6 py-3 font-medium transition-colors"
              >
                Explore Works
                <ArrowRight className="h-4 w-4" />
              </motion.button>
            </Link>
          </motion.div>

          {/* Right Content - Images & Stats */}
          <div className="relative">
            <img src={newimg} className="w-full h-auto object-cover" alt="Services Hero" />
          </div>
        </div>
      </div>
    </section>
  )
}