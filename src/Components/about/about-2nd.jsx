import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const cards = [
  {
    id: 1,
    icon: "📦",
    label: "Innovate",
    title: "Built for Cutting-Edge AI Teams",
    description:
      "Whether you're developing LLMs, intelligent tools, or autonomous agents, Webblers gives you a launch-ready site that speaks the language of innovation. The layout is purpose-built to help you showcase your services, and vision clearly.",
    tags: ["AI Agency", "Future Ready"],
  },
  {
    id: 2,
    icon: "🚀",
    label: "Transform",
    title: "Scale Your Vision Effortlessly",
    description:
      "Our platform is designed to grow with your business. As you expand your AI capabilities and reach new markets, our infrastructure scales seamlessly to support your ambitions without compromise.",
    tags: ["Scalable", "Enterprise"],
  },
  {
    id: 3,
    icon: "✨",
    label: "Excel",
    title: "Premium Features at Your Fingertips",
    description:
      "Access cutting-edge tools and features built specifically for AI innovators. From analytics to automation, everything you need to stay ahead is integrated and ready to deploy immediately.",
    tags: ["Premium", "Advanced Tools"],
  },
]

export default function About2nd() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const carouselIntervalRef = useRef(null)

  useEffect(() => {
    const isMobile = window.innerWidth < 1024

    if (!isMobile) {
      if (carouselIntervalRef.current) {
        clearInterval(carouselIntervalRef.current)
      }
      return
    }

    carouselIntervalRef.current = setInterval(() => {
      setCurrentCardIndex((prev) => (prev + 1) % cards.length)
    }, 5000)

    return () => {
      if (carouselIntervalRef.current) {
        clearInterval(carouselIntervalRef.current)
      }
    }
  }, [])

  return (
    <section 
      className="py-20 px-4 md:px-8 lg:px-16" 
      style={{ 
        background: 'var(--bg-primary)', 
        color: 'var(--text-primary)', 
        minHeight: '100vh',
        overflow: 'visible'
      }}
    >
      <div className="w-full max-w-7xl mx-auto" style={{ overflow: 'visible' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start" style={{ overflow: 'visible' }}>
          {/* Left - Sticky Image (Desktop Only) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hidden lg:block"
            style={{ overflow: 'visible', position: 'relative' }}
          >
            <div 
              className="sticky w-full max-w-md" 
              style={{ 
                top: '80px',
                position: 'sticky',
                alignSelf: 'flex-start'
              }}
            >
              <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-lg" 
                   style={{
                     boxShadow: "0 0 30px rgba(76, 99, 255, 0.15), 0 0 60px rgba(76, 99, 255, 0.1)"
                   }}>
                <div className="relative h-[500px] w-full">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=800&fit=crop"
                    alt="Professional with headphones"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content scrolls with page (Header + Cards) */}
          <div className="flex flex-col">
            {/* Desktop: All content scrolls with page */}
            <div className="hidden lg:flex flex-col gap-8">
              {/* Header Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="inline-flex items-center gap-3 bg-primary/10 px-4 py-2 rounded-full border border-primary/20 mb-6 w-fit">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-xs md:text-sm text-primary font-medium">About Webblers</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary-hover leading-tight">
                  Shaping Tomorrow <br />
                  <span className="text-primary">With Bold Ideas</span>
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  Webblers is a next-gen AI agency template built for bold visionaries, researchers, and builders shaping
                  the future of intelligence.
                </p>
              </motion.div>

              {/* Stacked Cards with Smooth Fade-in */}
              {cards.map((card, index) => (
                <motion.div
                  key={card.id}
                  data-card={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-50px", amount: 0.3 }}
                  transition={{ 
                    duration: 0.6, 
                    ease: "easeOut",
                    delay: index * 0.1
                  }}
                  className="bg-card border border-border rounded-2xl p-6 md:p-8 flex-shrink-0 transition-all duration-300 hover:border-primary/40 relative overflow-hidden"
                  style={{
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08), 0 0 30px rgba(76, 99, 255, 0.15), 0 0 0 1px rgba(76, 99, 255, 0.1)",
                  }}
                >
                  {/* Subtle purple glow effect */}
                  <div 
                    className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: "linear-gradient(135deg, rgba(76, 99, 255, 0.05) 0%, rgba(76, 99, 255, 0.02) 100%)",
                      boxShadow: "inset 0 0 40px rgba(76, 99, 255, 0.1)",
                    }}
                  />
                  <div className="relative z-10">
                    <div className="flex flex-col gap-6">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="text-3xl">{card.icon}</div>
                        <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-full whitespace-nowrap border border-primary/20">
                          {card.label}
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary-hover">{card.title}</h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{card.description}</p>
                    </div>

                    <div className="flex gap-2 flex-wrap">
                      {card.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1.5 rounded-full border border-border text-muted-foreground whitespace-nowrap"
                          style={{ background: 'var(--bg-card)' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mobile/Medium: Carousel with Auto-rotation */}
            <div className="lg:hidden">
              {/* Image for Mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative h-[300px] rounded-2xl overflow-hidden mb-6 border border-border/50"
              >
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=800&fit=crop"
                  alt="Professional with headphones"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Carousel Cards */}
              <div className="relative h-auto">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentCardIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="bg-card border border-border rounded-2xl p-6"
                  >
                    {(() => {
                      const card = cards[currentCardIndex]
                      return (
                        <div className="flex flex-col gap-6">
                          <div>
                            <div className="flex items-center justify-between mb-6">
                              <div className="text-2xl">{card.icon}</div>
                              <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                                {card.label}
                              </span>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-foreground">{card.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
                          </div>

                          <div className="flex gap-2 flex-wrap">
                            {card.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-xs px-3 py-1.5 rounded-full border border-border text-muted-foreground"
                                style={{ background: 'var(--bg-card)' }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      )
                    })()}
                  </motion.div>
                </AnimatePresence>

                {/* Carousel Dots */}
                <div className="flex gap-2 justify-center mt-6">
                  {cards.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentCardIndex(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentCardIndex ? "bg-primary w-6" : "bg-border w-2"
                      }`}
                      whileHover={{ scale: 1.2 }}
                      aria-label={`Go to card ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
