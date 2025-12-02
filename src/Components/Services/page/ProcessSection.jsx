"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Target, Palette, Code, TrendingUp } from "lucide-react"
import "./services-page.css"

const steps = [
  {
    id: 1,
    title: "Discover & Analyze",
    description:
      "We audit your existing workflows, tools, and customer data to uncover inefficiencies and automation opportunities. Every system is mapped for clarity.",
    image: "process/1.svg",
    icon: Search,
  },
  {
    id: 2,
    title: "Strategy & Planning",
    description:
      "Our team develops a comprehensive roadmap tailored to your business goals. We prioritize quick wins while planning long-term transformations.",
    image: "process/2.svg",
    icon: Target,
  },
  {
    id: 3,
    title: "Design & Prototype",
    description:
      "We create interactive prototypes and design mockups to visualize solutions before implementation. Your feedback shapes every iteration.",
    image: "process/3.svg",
    icon: Palette,
  },
  {
    id: 4,
    title: "Implementation",
    description:
      "Our expert developers build and integrate solutions seamlessly into your existing infrastructure with minimal disruption to operations.",
    image: "process/4.svg",
    icon: Code,
  },
  {
    id: 5,
    title: "Optimization & Support",
    description:
      "We monitor performance, optimize systems, and provide ongoing support to ensure continuous improvement and maximum ROI on your investment.",
    image: "process/5.svg",
    icon: TrendingUp,
  },
]

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0)

  // Auto-advance steps every 5 seconds, looping back to step 1
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="process-section py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="process-badge mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2">
            <div className="grid grid-cols-2 gap-0.5">
              <div className="process-badge-dot h-1.5 w-1.5 rounded-sm" />
              <div className="process-badge-dot h-1.5 w-1.5 rounded-sm" />
              <div className="process-badge-dot h-1.5 w-1.5 rounded-sm" />
              <div className="process-badge-dot h-1.5 w-1.5 rounded-sm" />
            </div>
            <span className="process-badge-text text-sm">Process</span>
          </div>
          <h2 className="process-title text-4xl md:text-5xl font-bold mb-4">
            Our Simple & <span className="italic">Smart Process</span>
          </h2>
          <p className="process-description max-w-2xl mx-auto">
            Everything you need to collaborate, create, and scale, all in one place.
          </p>
        </motion.div>

        {/* Content Card */}
        <div className="process-content-card border rounded-xl overflow-hidden p-8 md:p-12">
          <motion.div
            className="flex gap-2 md:gap-3 mb-8 md:mb-12"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {steps.map((step) => {
              const Icon = step.icon
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id - 1)}
                  className={`flex-1 py-2 md:py-3 rounded-md font-semibold transition-all duration-300 border text-xs md:text-sm ${
                    activeStep === step.id - 1
                      ? "process-step-button-active"
                      : "process-step-button"
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <Icon className="w-4 h-4" />
                    <span>STEP {step.id}</span>
                  </div>
                </button>
              )
            })}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative h-80 md:h-96"
              >
                <div className=" rounded-lg overflow-hidden shadow-2xl h-full">
                  <img
                    src={steps[activeStep].image || "/placeholder.svg"}
                    alt={steps[activeStep].title}
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* Accent glow */}
                <div className="process-image-glow absolute -inset-4 rounded-lg blur-2xl -z-10" />
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className="process-step-badge flex items-center justify-center gap-2 w-16 h-16 rounded-lg border">
                      {(() => {
                        const StepIcon = steps[activeStep].icon
                        return <StepIcon className="process-step-badge-icon w-6 h-6" />
                      })()}
                    </div>
                  </div>
                  <div className="process-step-accent-line w-12 h-1 rounded-full" />
                </div>

                <h3 className="process-step-title text-3xl md:text-4xl font-bold mb-4">{steps[activeStep].title}</h3>
                <p className="process-step-description text-lg leading-relaxed">{steps[activeStep].description}</p>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
