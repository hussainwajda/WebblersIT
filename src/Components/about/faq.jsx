"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqItems = [
  {
    question: "What do I need to get started?",
    answer:
      "Getting started is simple. You just need to sign up for an account, choose your plan, and begin creating your project immediately with our intuitive interface.",
  },
  {
    question: "What kind of customization is available?",
    answer:
      "We offer extensive customization options including custom colors, fonts, layouts, and integrations to match your brand identity and specific requirements.",
  },
  {
    question: "How easy is it to edit for beginners?",
    answer:
      "Our platform is designed with beginners in mind. We provide drag-and-drop interfaces, templates, and comprehensive documentation to make editing accessible to everyone.",
  },
  {
    question: "Let me know more about moneyback guarantee?",
    answer:
      "We offer a 30-day money-back guarantee on all plans. If you're not satisfied with our service, simply contact our support team for a full refund, no questions asked.",
  },
  {
    question: "Do I need to know how to code?",
    answer:
      "No coding knowledge required! Our platform is built for everyone. However, advanced users can access custom code editors if needed.",
  },
  {
    question: "What will I get after purchasing the template?",
    answer:
      "You'll get access to the complete template, all future updates, documentation, video tutorials, and lifetime email support.",
  },
]

function FAQItem({ item, isOpen, onToggle, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border border-border rounded-lg overflow-hidden bg-card/50 hover:bg-primary/10 transition-all duration-300 hover:border-primary/30"
      style={{
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
      }}
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-primary/10 transition-colors"
      >
        <span className="font-semibold text-primary-hover text-lg">{item.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 ml-4"
        >
          <ChevronDown className="w-6 h-6 text-primary" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-card border-t border-border"
          >
            <div className="px-6 py-5 text-muted-foreground leading-relaxed">{item.answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQSection() {
  const [openIndices, setOpenIndices] = useState(new Set())

  const toggleFAQ = (index) => {
    const newOpen = new Set(openIndices)
    if (newOpen.has(index)) {
      newOpen.delete(index)
    } else {
      newOpen.add(index)
    }
    setOpenIndices(newOpen)
  }

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16" style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-20 h-fit"
          >
            <div className="inline-flex items-center gap-3 bg-primary/10 px-4 py-2 rounded-full border border-primary/20 w-fit mb-6">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm text-primary font-medium">FAQ</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary-hover">
              Frequently <br /> <span className="text-primary">Asked Questions</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Have questions? Our FAQ section has you covered with quick answers to the most common inquiries.
            </p>
          </motion.div>

          {/* Right Section - FAQ Items */}
          <div className="lg:col-span-2 space-y-4">
            {faqItems.map((item, index) => (
              <FAQItem
                key={index}
                item={item}
                isOpen={openIndices.has(index)}
                onToggle={() => toggleFAQ(index)}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
