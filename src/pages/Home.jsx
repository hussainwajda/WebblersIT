import "./Home.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    // Use IntersectionObserver with idle callback
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Smoothly reveal in idle time to prevent blocking scroll
            if ("requestIdleCallback" in window) {
              requestIdleCallback(() => entry.target.classList.add("active"), { timeout: 200 });
            } else {
              entry.target.classList.add("active");
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-container">
      {/* HERO SECTION */}
      <section className="hero-section">
        <h1 className="hero-title">Grow Your Business Online 🚀</h1>
        <p className="hero-subtitle">
          We help brands build a strong and professional online presence.
        </p>
        <button className="cta-button">Build My Website</button>
      </section>

      {/* WHY SECTION */}
      <div className="benefits-section reveal">
        <h2 className="section-title">Why Every Business Needs a Website?</h2>

        <div className="benefits-grid">
          <div className="benefit-card">
            <span className="benefit-icon">🌐</span>
            <h3>24/7 Presence</h3>
            <p>Your business is always reachable — even while you sleep.</p>
          </div>

          <div className="benefit-card">
            <span className="benefit-icon">📈</span>
            <h3>More Customers</h3>
            <p>Appear on Google and attract customers from everywhere.</p>
          </div>

          <div className="benefit-card">
            <span className="benefit-icon">✅</span>
            <h3>Build Trust</h3>
            <p>A professional website increases credibility and confidence.</p>
          </div>
        </div>
      </div>

      {/* SERVICES SECTION */}
      <section className="services-section reveal">
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
      </section>

      {/* CTA FOOTER */}
      <section className="cta-section reveal">
        <h2>Ready to Boost Your Business?</h2>
        <button className="cta-button">Get Free Consultation</button>
      </section>
    </div>
  );
};

export default Home;
