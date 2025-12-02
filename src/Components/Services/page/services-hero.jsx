"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import image1 from "@/assets/servpage1.jpg"
import image2 from "@/assets/servpage2.jpg"
import "./services-page.css"
import newimg from "../../../assets/coding-workshop-animate.svg"

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
            {/* Happy Clients Badge */}
            {/* <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-6 flex items-center gap-2"
            >
              <div className="flex -space-x-2">
                <div className="h-8 w-8 overflow-hidden rounded-full border-2 border-[#0a0a0a]">
                  <img
                    src="/professional-woman-headshot.png"
                    alt="Client"
                    width={32}
                    height={32}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="h-8 w-8 overflow-hidden rounded-full border-2 border-[#0a0a0a]">
                  <img
                    src="/professional-man-headshot.png"
                    alt="Client"
                    width={32}
                    height={32}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="h-8 w-8 overflow-hidden rounded-full border-2 border-[#0a0a0a]">
                  <img
                    src="/professional-headshot.png"
                    alt="Client"
                    width={32}
                    height={32}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <span className="rounded-full bg-[#1a1a1a] px-3 py-1 text-sm text-white">160+ Happy Clients</span>
            </motion.div> */}

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
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="services-hero-button flex w-fit items-center gap-2 rounded-full px-6 py-3 font-medium transition-colors"
              onClick={() => window.location.href = "/portfolio"}
            >
              Explore Works
              <ArrowRight className="h-4 w-4" />
            </motion.button>
          </motion.div>

          {/* Right Content - Images & Stats */}
          {/* <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute left-0 top-0 h-48 w-48 overflow-hidden rounded-2xl lg:h-56 lg:w-56"
              >
                <img
                  src={image1}
                  alt="Team collaboration"
                  width={224}
                  height={224}
                  className="h-full w-full object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="services-hero-stats-card absolute right-0 top-0 rounded-2xl p-4 lg:right-4"
              >
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm">Projects</div>
                <div className="text-sm">Completed</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, rotate: -180 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="absolute left-32 top-32 z-10 lg:left-40 lg:top-40"
              >
                <div className="services-hero-badge-circle flex h-28 w-28 items-center justify-center rounded-full lg:h-32 lg:w-32">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="absolute inset-0"
                  >
                    <svg viewBox="0 0 100 100" className="h-full w-full">
                      <defs>
                        <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
                      </defs>
                      <text className="text-[10px] font-medium uppercase tracking-widest" fill="currentColor" style={{ color: 'var(--text-inverse)' }}>
                        <textPath href="#circlePath">Excel Designs • Code Excel • Get Excel •</textPath>
                      </text>
                    </svg>
                  </motion.div>
                  <div className="z-10 rounded-full bg-[var(--text-primary)] p-2">
                    <svg className="services-hero-badge-text h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="services-hero-stat-text absolute left-0 top-56 lg:top-64"
              >
                <div className="text-3xl font-bold">132+</div>
                <div className="services-hero-stat-muted text-sm">Satisfied</div>
                <div className="services-hero-stat-muted text-sm">Clients</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute right-0 top-44 h-40 w-40 overflow-hidden rounded-2xl lg:right-4 lg:top-52 lg:h-48 lg:w-48"
              >
                <img
                  src={image2}
                  alt="Professional working"
                  width={192}
                  height={192}
                  className="h-full w-full object-cover"
                />
              </motion.div>

              <div className="h-[340px] lg:h-[400px]" />
            </div>
          </motion.div> */}
          <div className="relative">
            <img src={newimg} className="w-full h-auto object-cover" alt="Services Hero" />
          </div>
        </div>
      </div>
    </section>
  )
}
