"use client"

import { motion } from "framer-motion"
import { ArrowRight, Paintbrush, Palette, BarChart3, Workflow, Megaphone, ShoppingBag, Webhook, Globe } from "lucide-react"
import "./services-page.css"
import { FaRobot } from "react-icons/fa"

const expertiseCards = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom websites and apps built with modern frameworks for performance, scalability, and great user experience.",
  },
  {
    icon: Workflow,
    title: "AI Automations & Workflows",
    description: "Streamline your business operations with intelligent automation that reduces manual tasks and increases productivity across teams",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Boost your online presence. Reach your audience with our SEO and digital marketing services.",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce Setup",
    description: "Create powerful online stores with seamless shopping experiences, secure payment processing, and inventory management systems",
  },
  {
    icon: FaRobot,
    title: "Website Automation",
    description: "Auto-deploy, test, and schedule front-end tasks. See a developer window with live-scrolling code for quick automation previews  "
  },
  {
    icon: Webhook,
    title: "Api Integration",
    description: "Seamless API connections between apps, databases and workflows so data moves securely and reliably across your stack"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export function ExpertiseSection() {
  return (
    <section className="px-6 py-16 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="services-expertise-badge mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2">
            <div className="grid grid-cols-2 gap-0.5">
              <div className="services-expertise-badge-dot h-1.5 w-1.5 rounded-sm" />
              <div className="services-expertise-badge-dot h-1.5 w-1.5 rounded-sm" />
              <div className="services-expertise-badge-dot h-1.5 w-1.5 rounded-sm" />
              <div className="services-expertise-badge-dot h-1.5 w-1.5 rounded-sm" />
            </div>
            <span className="services-expertise-badge-text text-sm">Expertise</span>
          </div>

          <h2 className="services-expertise-title mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">Our Range of Expertise</h2>

          <p className="services-expertise-description mx-auto max-w-2xl">
            Dive into our diverse range of categories to find the perfect solutions for your business needs. Whether
            you're looking for web design, SEO, or branding, we've got you covered.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {expertiseCards.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="services-expertise-card group rounded-2xl border p-6 transition-colors"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="services-expertise-icon-bg rounded-lg p-2">
                  <card.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="services-expertise-card-title text-lg font-semibold">{card.title}</h3>
              </div>

              <p className="services-expertise-card-description mb-6">{card.description}</p>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="services-expertise-card-button flex w-full items-center justify-center cursor-pointer gap-2 rounded-full px-4 py-3 text-sm font-medium transition-colors"
                onClick={() => window.location.href = "/contact"}
              >
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
