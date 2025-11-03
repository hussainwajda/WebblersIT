import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import "./About.css";

const About = ({ darkMode }) => {
  return (
    <section className={`about-section ${darkMode ? "dark" : ""}`}>
      <div className="about-header">
        <h2>About Webblers IT </h2>
        <p>
          Webblers is a forward-thinking tech startup driven by a passion for
          innovation, design, and digital transformation. Our Tagline Clarifies "Keep IT Simple ".
          We specialize in building scalable web solutions that empower businesses to grow and
          connect seamlessly in the digital age.
        </p>
      </div>

      <div className="founders-container">
        {/* Founder 1 */}
        <div className="founder-card">
          <img
            src="/images/founder1.jpg"
            alt="Founder 1"
            className="founder-img"
          />
          <div className="founder-info">
            <h3>Murtaza Dawoodjee</h3>
            <p className="role">Co-Founder & CEO</p>
            <p className="bio">
              Vision-driven leader passionate about innovation and user-centric
              product development. Murtaza brings creative direction and
              strategic growth to Webblers.
            </p>

            <div className="social-links">
              <a
                href="https://linkedin.com/in/murtazaali"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/murtaza"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://instagram.com/murtaza"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Founder 2 */}
        <div className="founder-card reverse">
          <img
            src="/images/founder2.jpg"
            alt="Founder 2"
            className="founder-img"
          />
          <div className="founder-info">
            <h3>Hussain Wajdawala</h3>
            <p className="role">Co-Founder & CTO</p>
            <p className="bio">
              Tech enthusiast with deep expertise in full-stack development and
              system architecture. Ahmed leads the engineering and innovation
              behind every Webblers project.
            </p>

            <div className="social-links">
              <a
                href="https://linkedin.com/in/ahmedraza"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/ahmedraza"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://instagram.com/ahmedraza"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
