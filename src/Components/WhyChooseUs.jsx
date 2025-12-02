"use client"

import { motion } from "framer-motion"
import { InteractiveClock } from "./interactive-clock"
import { InteractiveBarChart } from "./interactive-bar-chart"
import { InteractiveNetwork } from "./interactive-network"
import "./WhyChooseUs.css"

export default function WhyChooseUs() {
  return (
    <section className="why-choose-us-section">
      <div className="why-choose-us-container">
        {/* Header Content */}
        <div className="why-choose-us-header">
          <motion.h2
            className="why-choose-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why Choose <span className="italic">Us</span>?
          </motion.h2>
          <motion.p
            className="why-choose-sub"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Everything you need to automate, optimize, and scale
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="why-grid">
          {/* Card 1 - On-Time Delivery */}
          <motion.div
            className="why-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="why-card-content">
              <div className="why-card-icon">
                <InteractiveClock />
              </div>
              <h3 className="why-card-title">On-Time, Every Time</h3>
              <p className="why-card-description">
                We value your time. Our team ensures every project is completed promptly without compromising on quality — because deadlines deserve discipline.
              </p>
            </div>
          </motion.div>

          {/* Card 2 - Sales Impact */}
          <motion.div
            className="why-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="why-card-content">
              <div className="why-card-icon">
                <InteractiveBarChart />
              </div>
              <h3 className="why-card-title">Boost Your Sales & Impact</h3>
              <p className="why-card-description">
                Watch your numbers rise. Our strategies are designed to enhance visibility, drive conversions, and maximize your business growth.
              </p>
            </div>
          </motion.div>

          {/* Card 3 - Connections */}
          <motion.div
            className="why-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="why-card-content">
              <div className="why-card-icon">
                <InteractiveNetwork />
              </div>
              <h3 className="why-card-title">Connecting You to Opportunities</h3>
              <p className="why-card-description">
                We bridge the gap between you and your audience through smart, data-driven connections that turn engagement into lasting relationships.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
