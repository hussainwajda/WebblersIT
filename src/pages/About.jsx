import React from "react";
import ProfileCard from "@/components/ProfileCard.jsx";
import "./About.css";
import { Link } from "react-router-dom"; // ✅ Ensure Link is imported
import AboutHero from "@/components/about/about-hero.jsx";
import AboutMain from "@/components/about/about-main.jsx";
import About2nd from "@/components/about/about-2nd.jsx";
import FAQSection from "@/components/about/faq.jsx";
import { BottomRevealBlur } from "@/components/ui/bottom-reveal-blur.jsx";
import { motion } from "framer-motion";

const About = ({ darkMode }) => {
  return (
    <div className="relative min-h-screen" style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)', overflow: 'visible' }}>
      <AboutHero />
      <About2nd />
      <AboutMain />

      {/* TEAM GRID (All Cards in One Line) */}
      {true && (
      <div className="team-grid">
        
        {/* Card 1: Murtaza */}
        <ProfileCard
          name="Murtaza D."
          title="Co-Founder & CEO"
          handle="murtaza_0710"
          status="Online"
          contactText="Follow"
          avatarUrl="/founder1.jpg"
          miniAvatarUrl="/image.png"
          linkedinUrl="https://www.linkedin.com/in/murtaza-dawoodjee/"
          githubUrl="https://github.com/murtzdev07"
          // twitterUrl="https://twitter.com/murtazaali"
          showUserInfo={true}
          enableTilt={true}
          innerGradient={
            darkMode
              ? "linear-gradient(145deg, #0a192f 0%, #0f4c75 60%, #3282b8 100%)"
              : "linear-gradient(145deg, #8ec5fc 0%, #e0c3fc 100%)"
          }
          behindGlowColor={
            darkMode ? "rgba(50,130,184,0.4)" : "rgba(142,197,252,0.5)"
          }
          onContactClick={() =>
            window.open("https://instagram.com/murtaza_0710", "_blank")
          }
        />

        {/* Card 2: Hussain */}
        <ProfileCard
          name="Hussain W."
          title="Co-Founder & CTO"
          handle="hussainw"
          status="Online"
          contactText="Follow"
          avatarUrl="/avatar2.png"
          miniAvatarUrl="/image.png"
          linkedinUrl="https://www.linkedin.com/in/"
          githubUrl="https://github.com/"
          // twitterUrl="https://twitter.com/hussaintech"
          showUserInfo={true}
          enableTilt={true}
          innerGradient={
            darkMode
              ? "linear-gradient(145deg, #001f3f 0%, #005b96 50%, #00a8e8 100%)"
              : "linear-gradient(145deg, #7ed6df 0%, #82ccdd 100%)"
          }
          behindGlowColor={
            darkMode ? "rgba(50,130,184,0.4)" : "rgba(142,197,252,0.5)"
          }
          onContactClick={() =>
            window.open("https://www.instagram.com/webblersdotcom", "_blank")
          }
        />
        
        <ProfileCard
          name="Aditya Patil"
          title="COO"
          handle="adityyaapatil"
          status="Online"
          contactText="Follow"
          avatarUrl="/aditya.png"
          miniAvatarUrl="/aditya_avatar.jpg"
          githubUrl="https://github.com/"
          // twitterUrl="https://twitter.com/hussaintech"
          showUserInfo={true}
          enableTilt={true}
          innerGradient={
            darkMode
              ? "linear-gradient(145deg, #001f3f 0%, #005b96 50%, #00a8e8 100%)"
              : "linear-gradient(145deg, #7ed6df 0%, #82ccdd 100%)"
          }
          behindGlowColor={
            darkMode ? "rgba(50,130,184,0.4)" : "rgba(142,197,252,0.5)"
          }
          onContactClick={() =>
            window.open("https://www.instagram.com/adityyaapatil", "_blank")
          }
        />

        {/* Card 3: Sakina (Now in same line) */}
        <ProfileCard
          name="Sakina Kalabhai"
          title="Company Advisor"
          handle="sakina_kalabhai04"
          status="Online"
          contactText="Follow"
          avatarUrl="/CA.jpg"
          miniAvatarUrl="/CAavatar.png"
          linkedinUrl="https://www.linkedin.com/in/sakina-kalabhai-8979b4330"
          showUserInfo={true}
          enableTilt={true}
          innerGradient={
            darkMode
              ? "linear-gradient(145deg, #001f3f 0%, #005b96 50%, #00a8e8 100%)"
              : "linear-gradient(145deg, #7ed6df 0%, #82ccdd 100%)"
          }
          behindGlowColor={
            darkMode ? "rgba(0,168,232,0.4)" : "rgba(126,214,223,0.5)"
          }
          onContactClick={() =>
            window.open("https://instagram.com/sakina_kalabhai04", "_blank")
          }
        />

      </div>
      )}
      <FAQSection />
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
            <Link to="/contact">
              <button className="cta-button">Get Free Consultation</button>
            </Link>
          </div>
        </motion.section>
      {/* Fixed bottom blur that reveals sections as you scroll, hidden near page end */}
      <BottomRevealBlur height="20vh" />
    </div>
  );
};

export default About;
