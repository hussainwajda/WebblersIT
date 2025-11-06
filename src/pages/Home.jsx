import "./Home.css";
import { useEffect, useState, useContext } from "react";
import { motion } from "framer-motion";
import DotGrid from "../Components/Hero-Bg";
import { ThemeContext } from "../ThemeContext.jsx";

const Home = () => {
  const { darkMode } = useContext(ThemeContext);

  const [bgColor, setBgColor] = useState(() => {
    try {
      const theme = localStorage.getItem("theme");
      if (theme) return theme === "dark" ? [0, 0, 0.2] : [0, 0.5, 1];
    } catch (e) {
      // ignore
    }
    return darkMode ? [0, 0, 0.2] : [0, 0.5, 1];
  });

  useEffect(() => {
    // keep bgColor in sync with context changes
    setBgColor(darkMode ? [0, 0, 0.2] : [0, 0.5, 1]);
  }, [darkMode]);

  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === "theme") {
        setBgColor(e.newValue === "dark" ? [0, 0, 0.2] : [1, 1, 1]);
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  // IntersectionObserver-based reveal removed in favor of Framer Motion
  // helper: convert normalized rgb array [r,g,b] (0-1) to hex string
  const rgbArrayToHex = (arr) => {
    if (!Array.isArray(arr) || arr.length < 3) return "#0077ff";
    const to255 = (v) => Math.max(0, Math.min(255, Math.round(v * 255)));
    const [r, g, b] = arr;
    const hex =
      "#" + [r, g, b].map((v) => to255(v).toString(16).padStart(2, "0")).join("");
    return hex;
  };

  const bgHex = rgbArrayToHex(bgColor);
  return (
    <div className="home-container">
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-bg">
          <DotGrid
            dotSize={8}
            gap={40}
            baseColor={bgHex}
            activeColor={darkMode ? "#ffffff" : "#0066cc"}
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        </div>
        <h1 className="hero-title">Grow Your Business Online 🚀</h1>
        <p className="hero-subtitle">
          We help brands build a strong and professional online presence.
        </p>
        <button className="cta-button">Build My Website</button>
      </section>

      {/* WHY SECTION */}
      <motion.section
        className="benefits-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="section-title">Why Every Business Needs a Website?</h2>

        <div className="benefits-grid">
          <motion.div
            className="benefit-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="benefit-icon">🌐</span>
            <h3>24/7 Presence</h3>
            <p>Your business is always reachable — even while you sleep.</p>
          </motion.div>

          <motion.div
            className="benefit-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="benefit-icon">📈</span>
            <h3>More Customers</h3>
            <p>Appear on Google and attract customers from everywhere.</p>
          </motion.div>

          <motion.div
            className="benefit-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="benefit-icon">✅</span>
            <h3>Build Trust</h3>
            <p>A professional website increases credibility and confidence.</p>
          </motion.div>
        </div>
      </motion.section>

      {/* SERVICES SECTION */}
      <motion.section
        className="services-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="section-title">What We Offer</h2>

        <div className="services">
          <div className="service-box">
            <div className="icon">💻</div>
            <h4>Modern Web Design</h4>
            <p>Clean, fast, responsive websites that convert customers.</p>
          </div>

          <div className="service-box">
            <div className="icon">🛒</div>
            <h4>E-Commerce Setup</h4>
            <p>Start selling online with secure checkout & smart catalog.</p>
          </div>

          <div className="service-box">
            <div className="icon">🚀</div>
            <h4>SEO Optimization</h4>
            <p>Improve visibility, rank higher & boost brand presence.</p>
          </div>
        </div>
      </motion.section>

      {/* CTA FOOTER */}
      <motion.section
        className="cta-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2>Ready to Boost Your Business?</h2>
        <button className="cta-button">Get Free Consultation</button>
      </motion.section>
    </div>
  );
};

export default Home;
