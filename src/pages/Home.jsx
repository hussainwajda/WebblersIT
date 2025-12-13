import "./Home.css";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom"; // ✅ Ensure Link is imported
import { motion, AnimatePresence } from "framer-motion";
import DotGrid from "@/components/Hero-Bg.jsx";
import { ThemeContext } from "@/ThemeContext.jsx";
import WhyChooseUs from "@/components/WhyChooseUs.jsx";
import ServicesSection from "@/components/services-section.jsx";
import { ProcessSection } from "@/components/Services/page/ProcessSection.jsx";
import { BottomRevealBlur } from "@/components/ui/bottom-reveal-blur.jsx";
import FAQSection from "@/components/about/faq.jsx";
import secureshareDashboard from "@/assets/previews/securesharethumb.png";
import theboringteethumb from "@/assets/previews/theboringteethumb.png";
import website3 from "@/assets/previews/website3.png";

const Home = () => {
  const { darkMode } = useContext(ThemeContext);

  // ... (background color handling and other logic remains the same) ...
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
    { image: secureshareDashboard, alt: "Website Preview 1" },
    { image: theboringteethumb, alt: "Website Preview 2" },
    { image: website3, alt: "Website Preview 3" },
  ];

  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % carouselItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [carouselItems.length]);


  return (
    <div className="relative">
      <div className="home-container">
        
        {/* ... (Hero Section, Services, WhyChooseUs, ProcessSection, Portfolio Preview remain the same) ... */}
      <section className="hero-section">
        <div className="hero-bg">
          <DotGrid
            dotSize={4}
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
              {/* ✅ CHANGED TO LINK */}
              <Link to="/contact">
                 <button className="cta-button">Build My Website</button>
              </Link>
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
      <ServicesSection />
      <WhyChooseUs />
      <ProcessSection />
        {/* 🎨 PORTFOLIO PREVIEW SECTION */}
        <motion.section
          className="portfolio-preview-section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="section-title">Our Recent Work</h2>
          
          <div className="portfolio-grid">
            {/* Project 1 */}
            <Link to="/portfolio" className="portfolio-link-wrapper">
              <motion.div 
                className="portfolio-card"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="portfolio-img-wrapper">
                  <img src={secureshareDashboard} alt="Project 1" />
                  <div className="portfolio-overlay">
                    <span>View Project</span>
                  </div>
                </div>
                <div className="portfolio-info">
                  <h3>Secure Share</h3>
                  <p>File Sharing Platform</p>
                </div>
              </motion.div>
            </Link>

            {/* Project 2 */}
            <Link to="/portfolio" className="portfolio-link-wrapper">
              <motion.div 
                className="portfolio-card"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="portfolio-img-wrapper">
                  <img src={theboringteethumb} alt="Project 2" />
                  <div className="portfolio-overlay">
                    <span>View Project</span>
                  </div>
                </div>
                <div className="portfolio-info">
                  <h3>The Boring Tee</h3>
                  <p>E-Commerce Store</p>
                </div>
              </motion.div>
            </Link>

            {/* Project 3 */}
            <Link to="/portfolio" className="portfolio-link-wrapper">
              <motion.div 
                className="portfolio-card"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="portfolio-img-wrapper">
                  <img src={website3} alt="Project 3" />
                  <div className="portfolio-overlay">
                    <span>View Project</span>
                  </div>
                </div>
                <div className="portfolio-info">
                  <h3>Anchor Trading</h3>
                  <p>Corporate Website</p>
                </div>
              </motion.div>
            </Link>
          </div>

          <div className="portfolio-cta-container">
            <Link to="/portfolio">
              <button className="cta-button">View All Projects →</button>
            </Link>
          </div>
        </motion.section>
        <FAQSection />

        {/* CTA FOOTER - UPDATED */}
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
            {/* ✅ CHANGED TO LINK */}
            <Link to="/contact">
              <button className="cta-button">Get Free Consultation</button>
            </Link>
          </div>
        </motion.section>
      </div>
      {/* Fixed bottom blur that reveals sections as you scroll, hidden near page end */}
      <BottomRevealBlur height="20vh" />
    </div>
  );
};

export default Home;