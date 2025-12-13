"use client"

import { motion } from "framer-motion"
import { Zap, Users, BarChart3, Lightbulb, TrendingUp, Shield } from "lucide-react"
import "./services-page.css"
import img1 from "@/assets/servpage2.png"
import img2 from "@/assets/servpage1.png"
export function KeyFeatures() {
  const features = [
    {
        id: 1,
        title: "Tailored IT Solutions",
        description: "We design and deliver fully customized, scalable systems engineered to match your exact business requirements and long-term objectives.",
        icon: Zap,
        hasImage: true,
        image: img2,
      },
      {
        id: 2,
        title: "Enterprise-Grade Reliability",
        description: "From infrastructure to support, our teams ensure maximum uptime, robust security, and dependable performance across all deployments.",
        icon: Shield,
        hasImage: false,
      },
      {
        id: 3,
        title: "Specialized Expert Teams",
        description: "Our cross-functional engineers, developers, automation experts, and cloud architects bring deep domain expertise to every project.",
        icon: Users,
        hasImage: false,
      },
      {
        id: 4,
        title: "Future-Ready Scalability",
        description: "We architect solutions that grow with your business—handling increased users, data volume, and workload without compromising speed or stability.",
        icon: BarChart3,
        hasImage: false,
      },
      {
        id: 5,
        title: "Innovation at the Core",
        description: "We leverage emerging technologies—AI, automation, and cloud computing—to build modern, forward-thinking systems that give you a competitive edge.",
        icon: Lightbulb,
        hasImage: false,
      },
      {
        id: 6,
        title: "Data-Driven Intelligence",
        description: "Every strategy and solution is powered by analytics, ensuring informed decision-making, improved efficiency, and measurable performance outcomes.",
        icon: TrendingUp,
        hasImage: true,
        image: img1,
      },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <section className="competitive-edge-section py-20 px-4 md:px-6 lg:px-8">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div className="inline-block mb-4" variants={itemVariants}>
            <span className="competitive-edge-badge inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium">
              <div className="competitive-edge-badge-dot w-2 h-2 rounded-full"></div>
              Key Features
            </span>
          </motion.div>

          <motion.h2 className="competitive-edge-title text-4xl md:text-5xl font-bold mb-4" variants={itemVariants}>
            Our Competitive Edge
          </motion.h2>

          <motion.p className="competitive-edge-description text-lg max-w-2xl mx-auto" variants={itemVariants}>
            Our services are designed to stand out in a crowded market, offering unique features and qualities that set
            us apart.
          </motion.p>
        </div>

        {/* Features Grid */}
        <motion.div className="grid grid-cols-2 lg:grid-cols-4 gap-6" variants={containerVariants}>
          {features.map((feature, index) => {
            const Icon = feature.icon

            let gridSpanClass = "col-span-1"
            if (index === 0 || index === 5) {
              gridSpanClass = "col-span-2"
            }

            return (
              <motion.div
                key={feature.id}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`group relative ${gridSpanClass}`}
              >
                {/* Card Background */}
                <div className="competitive-edge-card-hover-bg absolute inset-0 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"></div>

                <div
                  className={`competitive-edge-card relative p-6 rounded-lg border backdrop-blur-sm overflow-hidden h-full flex ${feature.hasImage ? "flex-row items-center gap-4" : "flex-col"}`}
                >
                  {/* Content container */}
                  <div className={feature.hasImage ? "flex-1" : "w-full"}>
                    {/* Icon */}
                    <motion.div
                      className="competitive-edge-icon-bg inline-flex items-center justify-center w-10 h-10 rounded-lg mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Icon className="competitive-edge-icon w-6 h-6" strokeWidth={2} />
                    </motion.div>

                    {/* Content */}
                    <h3 className="competitive-edge-card-title text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="competitive-edge-card-description text-sm leading-relaxed">{feature.description}</p>
                  </div>

                  {/* Embedded Image for specific cards - positioned on the right */}
                  {feature.hasImage && (
                    <motion.div
                      className="flex-shrink-0 rounded-lg overflow-hidden"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <img
                        src={feature.image}
                        alt={`${feature.title} dashboard`}
                        className="w-40 h-auto"
                      />
                    </motion.div>
                  )}
                </div>

                {/* Bottom Border Accent on Hover */}
                <motion.div
                  className="competitive-edge-accent-line absolute bottom-0 left-0 right-0 h-1"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ originX: 0 }}
                ></motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </section>
  )
}
