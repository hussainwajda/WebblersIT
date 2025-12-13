"use client"

import { Link } from "react-router-dom" // ✅ Import Link
import { motion } from "framer-motion"
import {
  ArrowRight,
  BarChart3,
  Monitor,
  Globe,
  Smartphone,
  Layout,
  Search,
  FileText,
  Mail,
  Users,
  TrendingUp,
  ShoppingCart,
  Database,
  Cloud,
  Terminal,
  Server,
  Workflow,
  Zap,
  Code2,
  Bot,
} from "lucide-react"
import "./services-page.css"
import { Link } from "react-router-dom";

const services = [
  {
    category: "Web Development",
    categoryIcon: Monitor,
    description:
      "Build high-performance, scalable websites and web applications that deliver superior user experiences and drive business results.",
    subServices: [
      { icon: Monitor, title: "Frontend Development" },
      { icon: Code2, title: "Backend Development" },
      { icon: Layout, title: "CMS Development" },
      { icon: Smartphone, title: "Responsive UI & Mobile" },
      { icon: Globe, title: "Web App Development" },
      { icon: Zap, title: "Performance Optimization" },
    ],
  },
  {
    category: "AI Automations & Workflows",
    categoryIcon: Bot,
    description:
      "Enhance productivity with intelligent automation that streamlines repetitive tasks and enables teams to focus on higher-value work.",
    subServices: [
      { icon: Bot, title: "AI Chatbots & Assistants" },
      { icon: Terminal, title: "Workflow Automation" },
      { icon: Cloud, title: "Cloud Process Automation" },
      { icon: Database, title: "Data Processing & ETL" },
      { icon: Server, title: "Back-office Automation" },
      { icon: BarChart3, title: "Automation Analytics" },
    ],
  },
  {
    category: "E-commerce Setup",
    categoryIcon: ShoppingCart,
    description:
      "Launch secure, conversion-focused online stores with seamless checkout, inventory sync, and optimized customer journeys.",
    subServices: [
      { icon: ShoppingCart, title: "Storefront Development" },
      { icon: Layout, title: "Product Catalog Setup" },
      { icon: Server, title: "Payment Gateway Integration" },
      { icon: Database, title: "Inventory Management Systems" },
      { icon: Mail, title: "Order Notifications & Emails" },
      { icon: Zap, title: "Checkout Optimization" },
    ],
  },
  {
    category: "SEO Setup",
    categoryIcon: Search,
    description:
      "Boost discoverability and drive organic growth through solid SEO foundations and measurable search visibility improvements.",
    subServices: [
      { icon: Search, title: "On-Page SEO" },
      { icon: FileText, title: "Content Optimization" },
      { icon: Monitor, title: "Technical SEO Audit" },
      { icon: Globe, title: "Keyword Strategy & Mapping" },
      { icon: BarChart3, title: "Ranking & Visibility Tracking" },
      { icon: Zap, title: "Core Web Vitals Improvement" },
    ],
  },
  {
    category: "Digital Marketing",
    categoryIcon: BarChart3,
    description:
      "Execute targeted digital campaigns that reach your audience, grow brand awareness, and maximize conversions across channels.",
    subServices: [
      { icon: Users, title: "Social Media Marketing" },
      { icon: Mail, title: "Email Campaigns" },
      { icon: FileText, title: "Content Strategy" },
      { icon: BarChart3, title: "Performance Marketing (Ads)" },
      { icon: TrendingUp, title: "Growth & Conversion Analytics" },
      { icon: Globe, title: "Brand Presence Management" },
    ],
  },
  {
    category: "Website Automation",
    categoryIcon: Terminal,
    description:
      "Automate deployment, testing, and operational tasks to improve reliability, reduce manual effort, and accelerate release cycles.",
    subServices: [
      { icon: Terminal, title: "CI/CD Pipelines" },
      { icon: Server, title: "Automated Deployments" },
      { icon: Zap, title: "Automated Testing" },
      { icon: Cloud, title: "Cloud Hosting Management" },
      { icon: Monitor, title: "Monitoring & Alerts" },
      { icon: Code2, title: "Version Control Workflows" },
    ],
  },
  {
    category: "API Integration",
    categoryIcon: Workflow,
    description:
      "Connect applications, tools, and databases with robust APIs so data moves securely and reliably across your technology stack.",
    subServices: [
      { icon: Workflow, title: "REST & GraphQL APIs" },
      { icon: Server, title: "Third-Party Integrations" },
      { icon: Database, title: "Data Sync & Middleware" },
      { icon: Cloud, title: "SaaS & Cloud Integrations" },
      { icon: Terminal, title: "Secure Authentication & Access" },
      { icon: Zap, title: "Webhooks & Event-Based Flows" },
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export function ServicesOverview() {
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
          <div className="services-overview-badge mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2">
            <div className="services-overview-badge-dot h-3 w-3 rounded" />
            <span className="services-overview-badge-text text-sm">Service Overview</span>
          </div>

          <h2 className="services-overview-title mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            Our Services Overview
          </h2>

          <p className="services-overview-description mx-auto max-w-3xl">
            Explore our end-to-end IT consulting services across web development, AI automation, e-commerce,
            SEO, digital marketing, website automation, and API integration—designed to modernize and scale
            your business.
          </p>
        </motion.div>

        {/* Services List */}
        <div className="space-y-6">
          {services.map((service, serviceIndex) => (
            <motion.div
              key={serviceIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
              className="services-overview-card overflow-hidden rounded-2xl border"
            >
              <div className="grid gap-6 p-6 lg:grid-cols-[280px_1fr] lg:gap-8 lg:p-8">
                {/* Left - Category Info */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex flex-col"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="services-overview-category-icon-bg rounded-lg p-2">
                      <service.categoryIcon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="services-overview-category-title text-lg font-semibold">
                      {service.category}
                    </h3>
                  </div>

                  <p className="services-overview-category-description mb-6 text-sm">
                    {service.description}
                  </p>
                  <Link to="/Contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="services-overview-category-button cursor-pointer mt-auto flex w-full items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-medium transition-colors"
                  >
                    Book a Call
                    <ArrowRight className="h-4 w-4" />
                  </motion.button>
                  </Link>
                </motion.div>

                {/* Right - Sub Services Grid */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid grid-cols-2 gap-4 sm:grid-cols-3"
                >
                  {service.subServices.map((subService, subIndex) => (
                    <motion.div
                      key={subIndex}
                      variants={itemVariants}
                      whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.2 },
                      }}
                      className="services-overview-subservice-card flex flex-col items-start gap-3 rounded-xl border p-4 transition-colors"
                    >
                      <div className="services-overview-subservice-icon-bg rounded-lg p-2">
                        <subService.icon className="services-overview-subservice-icon h-5 w-5" />
                      </div>
                      <span className="services-overview-subservice-title text-sm font-medium">
                        {subService.title}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}