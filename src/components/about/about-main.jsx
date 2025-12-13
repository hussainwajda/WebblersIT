
import { motion } from "framer-motion"
import { Link } from "react-router-dom"; // ✅ Ensure Link is imported
// import Image from "react-image"

export default function AboutMain() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16" style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={itemVariants} className="mb-6">
              <div className="inline-flex items-center gap-3 bg-primary/10 px-4 py-2 rounded-full border border-primary/20 w-fit">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm text-primary font-medium">About Webblers</span>
              </div>
            </motion.div>

            <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold mb-6 text-primary-hover">
              Elevate Brands with <span className="text-primary">Innovation Tech!</span>
            </motion.h2>

            <motion.div variants={itemVariants} className="space-y-6 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-2 text-primary-hover">Smart Digital Solutions</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We combine technology and creativity to build future-ready solutions that help businesses thrive in a
                  competitive landscape.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-primary-hover">Elevating Brands with Strategy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our expertise in branding, marketing, and design ensures your business stands out, leaving a lasting
                  impact on your audience.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
  {/* ✅ Wrapped in Link and removed onClick */}
  <Link to="/contact">
    <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
      Book an Appointment
    </button>
  </Link>
  
  {/* <div className="flex items-center gap-2">
    <span className="text-xl">⭐⭐⭐⭐⭐</span>
    <span className="text-sm text-muted-foreground">900+ People Rated</span>
  </div> */}
</motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-border/50 shadow-lg"
            style={{
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(76, 99, 255, 0.05)",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=700&fit=crop"
              alt="Professionals collaborating at desk"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
