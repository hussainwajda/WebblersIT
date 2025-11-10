import "./Home.css";
import { useEffect, useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DotGrid from "../Components/Hero-Bg";
import { ThemeContext } from "../ThemeContext.jsx";

const Home = () => {
  const { darkMode } = useContext(ThemeContext);

  // 🌈 Background color handling
  const [bgColor, setBgColor] = useState(() => {
    try {
      const theme = localStorage.getItem("theme");
      if (theme) return theme === "dark" ? [0, 0, 0.2] : [0, 0.5, 1];
    } catch (e) {}
    return darkMode ? [0, 0, 0.2] : [0, 0.5, 1];
  });

  useEffect(() => {
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

  // 🎨 Convert RGB array to HEX
  const rgbArrayToHex = (arr) => {
    if (!Array.isArray(arr) || arr.length < 3) return "#0077ff";
    const to255 = (v) => Math.max(0, Math.min(255, Math.round(v * 255)));
    const [r, g, b] = arr;
    return (
      "#" + [r, g, b].map((v) => to255(v).toString(16).padStart(2, "0")).join("")
    );
  };

  const bgHex = rgbArrayToHex(bgColor);

  // 🖼️ Website Preview Carousel
  const carouselItems = [
    { image: "src/assets/previews/website1.png", alt: "Website Preview 1" },
    { image: "src/assets/previews/website2.png", alt: "Website Preview 2" },
    { image: "src/assets/previews/website3.png", alt: "Website Preview 3" },
  ];

  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % carouselItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [carouselItems.length]);

  return (
    <div className="home-container">
      {/* 🌌 HERO SECTION */}
      <section className="hero-section">
        <div className="hero-bg">
          <DotGrid
            dotSize={5}
            gap={35}
            baseColor={darkMode ? "#ffffff" : "#0066cc"}
            activeColor={darkMode ? "#0066cc" : "#ffffff"}
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        </div>

        {/* 🌈 Frosted Glass Card */}
        <div className={`hero-glass ${darkMode ? "dark" : "light"}`}>
          <div className="hero-content">
            {/* Left Text */}
            <div className="hero-text">
              <h1 className="hero-title">Grow Your Business Online 🚀</h1>
              <p className="hero-subtitle">
                We help brands build a strong and professional online presence.
              </p>
          <a href="/Contact" > <button  className="cta-button">Build My Website</button></a>
            </div>

            {/* Right Carousel */}
<div className="hero-carousel">
  {carouselItems.map((item, i) => {
    // Calculate how far each card is from the active one
    const offset = (i - carouselIndex + carouselItems.length) % carouselItems.length;

    return (
      <div
        key={i}
        className={`carousel-card ${offset === 0 ? "active" : ""}`}
        style={{
          transform: `
            translateY(${offset * -40}px)
            translateZ(${offset * -80}px)
            scale(${1 - offset * 0.04})
          `,
          opacity: offset > 2 ? 0 : 1,
          zIndex: 10 - offset,
        }}
      >
        <div className="carousel-header">
          <span className="carousel-dot"></span>
          <span className="carousel-title">{item.title}</span>
        </div>
        <img src={item.image} alt={item.alt} />
      </div>
    );
  })}
</div>

          </div>
        </div>
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
        <a href="/Contact"> <button className="cta-button">Get Free Consultation</button> </a>
      </motion.section>
    </div>
  );
};

export default Home;
