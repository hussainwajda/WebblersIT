"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Globe,
  Users,
  Server,
  Zap,
  Mail,
  Code,
  Database,
  ArrowRightCircle,
  Cloud,
  ShoppingCart,
  Check,
  Search,
  Phone,
  Sparkle,
} from "lucide-react"
import "./services-section.css"
import AIAutomationsReel from "./Services/ai-workflow-visual"
import { AnimatedBeamMultipleOutputDemo } from "./Services/animatedBeam"
import { OrbitingCirclesDemo } from "./Services/orbits"
import { TerminalDemo } from "./Services/animatedTerminal"
import { GlobeDemo } from "./Services/globe"

const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Build modern, responsive websites and applications that engage users and drive business results with cutting-edge technologies",
    visual: "web",
    span: 1,
  },
  {
    id: 2,
    title: "AI Automations & Workflows",
    description: "Streamline your business operations with intelligent automation that reduces manual tasks and increases productivity across teams",
    visual: "ai",
    span: 2,
  },
  {
    id: 3,
    title: "E-commerce Setup",
    description: "Create powerful online stores with seamless shopping experiences, secure payment processing, and inventory management systems",
    visual: "ecom",
    span: 1,
  },
  {
    id: 4,
    title: "SEO Setup",
    description: "Optimize your digital presence with comprehensive SEO strategies that boost rankings, increase organic traffic, and improve visibility",
    visual: "seo",
    span: 1,
  },
  {
    id: 5,
    title: "Digital Marketing",
    description: "Drive growth through targeted marketing campaigns that reach your audience, build brand awareness, and convert leads into customers",
    visual: "marketing",
    span: 1,
  },
  {
    id: 6,
    title: "Website Automation",
    description: "Auto-deploy, test, and schedule front-end tasks. See a developer window with live-scrolling code for quick automation previews",
    visual: "code",
    span: 2,
  },
  {
    id: 7,
    title: "API Integration",
    description: "Seamless API connections between apps, databases and workflows so data moves securely and reliably across your stack",
    visual: "api",
    span: 1,
  },
]

function ServiceCard({ service }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <div className="service-card">
        <div
          className={`service-card-visual ${
            service.span === 2 ? "tall" : "medium"
          }`}
        >
          {/* Grid background pattern */}
          <div
            className={`service-card-grid ${
              isHovered ? "hovered" : "normal"
            }`}
          />

          <div className="service-visual-container">
            <VisualSwitch id={service.visual} hovered={isHovered} />
          </div>

          {/* Vignette */}
          <div className="service-card-vignette" />
        </div>

        <div className="service-card-content">
          <div>
            <h3 className="service-card-title">{service.title}</h3>
            <p className="service-card-description">{service.description}</p>
          </div>

          {/* Footer with button */}
          <div>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="service-card-button"
              onClick={() => window.location.href = "/services"}
            >
              Learn More
            </motion.button>
          </div>
        </div>

        {/* Animated bottom border */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="service-card-border"
        />
      </div>
    </motion.div>
  )
}

/* Visual component switcher */
function VisualSwitch({ id, hovered }) {
  switch (id) {
    case "web":
      return <GlobeDemo />
    case "ai":
      return <AIAutomationsReel hovered={hovered} />
    case "ecom":
      return <EcomVisual hovered={hovered} />
    case "seo":
      return <SEOVisual hovered={hovered} />
    case "marketing":
      return <OrbitingCirclesDemo />
    case "code":
      return <TerminalDemo />
    case "api":
    return <AnimatedBeamMultipleOutputDemo className="h-[200px] w-[300px]" />
    default:
      return null
  }
}



/* E-commerce: Stacked cards with animated checklist */
function EcomVisual({ hovered }) {
  return (
    <div className="relative flex items-center justify-center" style={{ width: '14rem', height: '10rem' }}>
      {/* Background cards */}
      <motion.div
        animate={{
          rotate: hovered ? -2 : -6,
          x: hovered ? -6 : -12,
        }}
        transition={{ duration: 0.4 }}
        className="absolute rounded-lg"
        style={{
          top: 0,
          left: '1.5rem',
          width: '12rem',
          height: '7rem',
          background: 'rgba(0, 0, 0, 0.2)',
          border: '1px solid var(--border-primary)'
        }}
      />
      <motion.div
        animate={{
          rotate: hovered ? 1 : -2,
          x: hovered ? 0 : -6,
        }}
        transition={{ duration: 0.4 }}
        className="absolute rounded-lg"
        style={{
          top: '1rem',
          left: '0.5rem',
          width: '13rem',
          height: '8rem',
          background: 'rgba(0, 0, 0, 0.25)',
          border: '1px solid var(--border-primary)'
        }}
      />

      {/* Front card */}
      <motion.div
        animate={{
          rotate: hovered ? 0 : 0,
          x: hovered ? 4 : 2,
          scale: hovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.4 }}
        className="absolute rounded-lg z-10"
        style={{
          top: '2rem',
          left: 0,
          width: '14rem',
          height: '9rem',
          background: 'linear-gradient(to bottom, rgba(0, 102, 204, 0.06), var(--bg-card))',
          border: '1px solid var(--border-primary)',
          padding: '0.75rem'
        }}
      >
        <div className="flex items-center justify-between mb-3">
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>Shopfront</span>
          <ShoppingCart className="service-icon" style={{ width: '1.25rem', height: '1.25rem' }} />
        </div>
        <ul style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <li className="flex items-center gap-2">
            <Check className="service-icon flex-shrink-0" style={{ width: '0.75rem', height: '0.75rem' }} />
            <span>Product listing</span>
          </li>
          <li className="flex items-center gap-2">
            <Check className="service-icon flex-shrink-0" style={{ width: '0.75rem', height: '0.75rem' }} />
            <span>Payments & checkout</span>
          </li>
          <li className="flex items-center gap-2">
            <Check className="service-icon flex-shrink-0" style={{ width: '0.75rem', height: '0.75rem' }} />
            <span>Inventory sync</span>
          </li>
        </ul>
      </motion.div>
    </div>
  )
}

/* SEO Setup: Animated bar chart with search icon */
function SEOVisual({ hovered }) {
  return (
    <motion.div
      animate={{ scale: hovered ? 1.06 : 1 }}
      transition={{ duration: 0.4 }}
      className="relative flex flex-col items-center justify-center"
      style={{ width: '14rem', height: '11rem' }}
    >
      <Search className="service-icon absolute" style={{ left: '-2rem', top: '-1.5rem', width: '1.75rem', height: '1.75rem', opacity: 0.8 }} />

      <div className="flex items-end gap-3" style={{ height: '6rem' }}>
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.3 }}
          className="service-bar rounded-sm"
          style={{ width: '1.5rem', height: '2rem', background: 'rgba(0, 102, 204, 0.7)' }}
        />
        <motion.div
          animate={{ y: [0, -14, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.6 }}
          className="service-bar rounded-sm"
          style={{ width: '1.5rem', height: '4rem', background: 'rgba(0, 102, 204, 0.6)' }}
        />
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.9 }}
          className="service-bar rounded-sm"
          style={{ width: '1.5rem', height: '5rem', background: 'rgba(0, 102, 204, 0.5)' }}
        />
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.4 }}
          className="service-bar rounded-sm"
          style={{ width: '1.5rem', height: '3rem', background: 'rgba(0, 102, 204, 0.4)' }}
        />
      </div>

      <motion.div
        animate={{ scaleX: [0, 1, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3 }}
        className="rounded-full origin-left"
        style={{
          marginTop: '1rem',
          width: '8rem',
          height: '0.25rem',
          background: 'linear-gradient(to right, rgba(0, 102, 204, 0.5), rgba(0, 102, 204, 0.2))'
        }}
      />
    </motion.div>
  )
}


export default function ServicesSection() {
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
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="services-section">
      <div className="services-section-container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="services-header"
        >
          <div className="services-badge">
            <div className="services-badge-dot"></div>
            <span className="services-badge-text">SERVICES</span>
            <div className="services-badge-dot"></div>
          </div>
          <h2 className="services-title">
            Smarter Services, <span className="italic">Built with Precision</span>
          </h2>
          <p className="services-subtitle">
            Everything you need to automate operations, boost productivity
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="services-grid px-4 md:px-6 lg:px-20"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}