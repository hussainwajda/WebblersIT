import React, { useContext } from "react";
// import "./Services.css";
import { ThemeContext } from "../ThemeContext";
import { motion } from "framer-motion";
// import { FaCode, FaMobileAlt, FaCloud, FaDatabase, FaPaintBrush, FaLock } from "react-icons/fa";
import { ServicesHero } from "@/components/Services/page/services-hero.jsx"
import { ExpertiseSection } from "@/components/Services/page/expertise-section.jsx"
import { ServicesOverview } from "@/components/Services/page/services-overview.jsx"
import { KeyFeatures } from "../Components/Services/page/CompetitiveEdge.jsx";
import { ProcessSection } from "../Components/Services/page/ProcessSection.jsx";
import { BottomRevealBlur } from "../Components/ui/bottom-reveal-blur";

const Services = () => {
  const { darkMode } = useContext(ThemeContext);

  // const services = [
  //   {
  //     icon: <FaCode />,
  //     title: "Web Development",
  //     desc: "Custom websites built with modern frameworks for performance, scalability, and great user experience.",
  //   },
  //   {
  //     icon: <FaMobileAlt />,
  //     title: "App Development",
  //     desc: "Cross-platform mobile applications that are fast, reliable, and tailored to your business goals.",
  //   },
  //   {
  //     icon: <FaCloud />,
  //     title: "Cloud Solutions",
  //     desc: "Leverage the power of the cloud with secure deployment, hosting, and maintenance support.",
  //   },
  //   {
  //     icon: <FaDatabase />,
  //     title: "Database Management",
  //     desc: "Structured, optimized, and secure database solutions for data-driven applications.",
  //   },
  //   {
  //     icon: <FaPaintBrush />,
  //     title: "UI/UX Design",
  //     desc: "Pixel-perfect design that focuses on usability, accessibility, and engaging user interaction.",
  //   },
  //   {
  //     icon: <FaLock />,
  //     title: "Cyber Security",
  //     desc: "Comprehensive protection for your apps and systems with advanced security and monitoring solutions.",
  //   },
  // ];

  return (
    // <section className={`services-section ${darkMode ? "dark" : ""}`}>
    <div className="relative min-h-screen" style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <div>
        <ServicesHero />
        <ExpertiseSection />
        <ServicesOverview />
        <KeyFeatures />
        <ProcessSection />
      </div>
      {/* Fixed bottom blur that reveals sections as you scroll, hidden near page end */}
      <BottomRevealBlur height="20vh" />
      {/* <div className="services-header">
        <h2>Our Services</h2>
        <p>
          We deliver end-to-end IT solutions that empower your digital transformation journey.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div> 
      </section>
      */}
     <motion.section
          className="cta-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* New Glass Container */}
          <div className="cta-content-glass">
            <h2>Ready to Boost Your Business?</h2>
            <a href="/Contact">
              <button className="cta-button">Get Free Consultation</button>
            </a>
          </div>
        </motion.section>
    </div>
  );
};

export default Services;
