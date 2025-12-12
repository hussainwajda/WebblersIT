import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cards = [
  {
    id: 1,
    icon: "📦",
    label: "Innovate",
    title: "Crafting Unique Digital Identities",
    description:
      "We move beyond templates to build bespoke web solutions. Whether you're a startup or an established enterprise, Webblers creates a digital footprint that truly speaks your brand's language of innovation.",
    tags: ["Custom Dev", "React Expert"],
  },
  {
    id: 2,
    icon: "🚀",
    label: "Transform",
    title: "Future-Proof Scalability",
    description:
      "Your business is dynamic, and your website should be too. We engineer robust platforms designed to scale effortlessly, ensuring your digital infrastructure supports your growth every step of the way without compromise.",
    tags: ["Scalable", "Growth Ready"],
  },
  {
    id: 3,
    icon: "✨",
    label: "Excel",
    title: "Excellence in Every Pixel",
    description:
      "We combine aesthetic brilliance with technical mastery. From seamless animations to optimized performance, we ensure every aspect of your project excels in user experience and meets the highest industry standards.",
    tags: ["Premium UI/UX", "High Performance"],
  },
];

export default function About2nd() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const carouselIntervalRef = useRef(null);

  // Auto-rotate carousel on mobile only
  useEffect(() => {
    const isMobile = window.innerWidth < 1024;

    if (!isMobile) {
      if (carouselIntervalRef.current) clearInterval(carouselIntervalRef.current);
      return;
    }

    carouselIntervalRef.current = setInterval(() => {
      setCurrentCardIndex((prev) => (prev + 1) % cards.length);
    }, 5000);

    return () => {
      if (carouselIntervalRef.current) clearInterval(carouselIntervalRef.current);
    };
  }, []);

  return (
    <section
      className="py-10 px-6 md:px-12 lg:px-20 relative overflow-hidden"
      style={{
        background: "var(--bg-primary)",
        color: "var(--text-primary)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* 1. HEADER SECTION (Centered & Top) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 font-semibold text-sm mb-6 mx-auto">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            About Webblers
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Shaping Tomorrow <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              With Bold Ideas
            </span>
          </h2>
          
          <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
            Webblers is a next-gen digital innovation partner built for bold visionaries, startups, and enterprises shaping the future of the web.
          </p>
        </motion.div>

        {/* 2. MAIN CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* LEFT: Sticky Image (Centered Alignment) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hidden lg:block relative h-full"
          >
            {/* Sticky Container */}
            <div className="sticky top-32">
              <div
                className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group"
                style={{
                  boxShadow: "0 30px 60px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.1)",
                }}
              >
                {/* 4:5 Aspect Ratio for Professional Portrait Look */}
                <div className="aspect-[4/5] w-full relative overflow-hidden">
                  <motion.img
                    src="/handshake.png"
                    alt="Professional Partnership"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Cards Stack */}
          <div className="flex flex-col gap-6 w-full">
            
            {/* DESKTOP: Vertical Stack of Cards */}
            <div className="hidden lg:flex flex-col gap-6">
              {cards.map((card, index) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative p-8 rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10 flex gap-6 items-start">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-3xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                      {card.icon}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                          {card.title}
                        </h3>
                        <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-500 border border-gray-200 dark:border-gray-700">
                          {card.label}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-5 text-sm">
                        {card.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {card.tags.map(tag => (
                          <span key={tag} className="text-xs font-medium px-3 py-1.5 rounded-full bg-gray-50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-300 border border-gray-100 dark:border-gray-700/50">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* MOBILE/TABLET: Carousel Layout (unchanged) */}
            <div className="lg:hidden">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] mb-8 shadow-lg">
                <img
                  src="/handshake.png"
                  alt="Visionary"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="relative min-h-[320px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentCardIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="p-6 rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-xl"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl">{cards[currentCardIndex].icon}</span>
                      <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wide">
                        {cards[currentCardIndex].label}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                      {cards[currentCardIndex].title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                      {cards[currentCardIndex].description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {cards[currentCardIndex].tags.map(tag => (
                        <span key={tag} className="text-xs px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="flex justify-center gap-2 mt-6">
                  {cards.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentCardIndex(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === currentCardIndex ? "w-8 bg-blue-600" : "w-2 bg-gray-300 dark:bg-gray-700"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}