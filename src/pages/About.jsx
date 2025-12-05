import React from "react";
import ProfileCard from "../Components/ProfileCard";
import "./About.css";

const About = ({ darkMode }) => {
  return (
    <section className={`about-section ${darkMode ? "dark" : ""}`}>
      
      {/* ANIMATED HEADER */}
      <div className="about-header">
        <span className="section-badge">Who We Are</span>
        <h2 className="about-title">
          About <span className="highlight-text">Webblers IT</span>
        </h2>
        <p className="about-subtitle">
          Webblers is a forward-thinking tech startup driven by a passion for
          innovation, design, and digital transformation. Our tagline clarifies —
          <strong> “Keep IT Simple.”</strong> We specialize in building scalable web
          solutions that empower businesses to grow and connect seamlessly in
          the digital age.
        </p>
        <div className="header-decoration-line"></div>
      </div>

      {/* TEAM GRID (All Cards in One Line) */}
      <div className="team-grid">
        
        {/* Card 1: Murtaza */}
        <ProfileCard
          name="Murtaza Dawoodjee"
          title="Co-Founder & CEO"
          handle="murtaza_0710"
          status="Online"
          contactText="Follow"
          avatarUrl="/founder1.jpg"
          miniAvatarUrl="/avatar1.png"
          linkedinUrl="https://linkedin.com/in/murtazaali"
          githubUrl="https://github.com/murtzdev07"
          twitterUrl="https://twitter.com/murtazaali"
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
          name="Hussain Wajdawala"
          title="Co-Founder & CTO"
          handle="hxssxin_wajda"
          status="Online"
          contactText="Follow"
          avatarUrl="/founder2.png"
          miniAvatarUrl="/images/founder2.jpg"
          linkedinUrl="https://www.linkedin.com/in/hussain-wajda-ba9a09265?utm_source=share_via&utm_content=profile&utm_medium=member_android"
          githubUrl="https://github.com/hussainwajda"
          // twitterUrl="https://twitter.com/hussaintech"
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
            window.open("https://www.instagram.com/hxssxin_wajda?igsh=MWwwYnVlbzRsdjRnMg==", "_blank")
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
          miniAvatarUrl="/images/founder2.jpg"
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
      
    </section>
  );
};

export default About;