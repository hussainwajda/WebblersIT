"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqItems = [
  {
    question: "How do I start a project with Webblers?",
    answer:
      "It's simple! Reach out to us via our contact form or WhatsApp. We'll schedule a quick consultation to understand your requirements, provide a tailored proposal, and once approved, we kick off the development immediately.",
  },
  {
    question: "Do you offer custom designs or use templates?",
    answer:
      "We specialize in fully custom solutions. While we can work with templates if you're on a tight budget, our core strength lies in hand-coding unique websites (using React & Modern Tech) that align perfectly with your specific brand identity.",
  },
  {
    question: "Will I be able to update the website myself?",
    answer:
      "Absolutely. We believe in empowering our clients. We can integrate a user-friendly Content Management System (CMS) or admin dashboard, allowing you to easily update text and images without needing to write a single line of code.",
  },
  {
    question: "Do you provide support after the website is launched?",
    answer:
      "Yes, we don't just build and leave. We offer post-launch maintenance packages to ensure your website stays secure, updated, and bug-free. We are always just a message away for any technical assistance.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "The timeline depends on the project's complexity. A standard business website typically takes 2–4 weeks, while more complex web applications may take longer. We provide a clear timeline and milestone schedule before we begin.",
  },
  {
    question: "What exactly do I own after the project is complete?",
    answer:
      "You own everything. Upon project completion and final payment, we transfer full ownership of the source code, design assets, and intellectual property directly to you.",
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
