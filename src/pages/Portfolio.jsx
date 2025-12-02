import React from "react";
import "./Portfolio.css";
import { BottomRevealBlur } from "../Components/ui/bottom-reveal-blur";

const projects = [
  {
    id: 1,
    title: "Anchor Tr LLC Website",
    description:
      "A modern responsive website with contact automation and service showcase.",
    technologies: [
      { name: "React", icon: "devicon-react-original colored" },
      //{ name: "Node.js", icon: "devicon-nodejs-plain colored" },
      { name: "CSS Modules", icon: "devicon-css3-plain colored" },
      { name: "EmailJS", icon: "fa-regular fa-envelope" },
    ],
    features: [
      "Contact Form Integration",
      "Responsive Design",
      "Product Gallery",
      "Search and Sort",
    ],
    image: "src/assets/previews/website3.png",
    live: "https://anchortrdg.com",
    code: "#",
  },
  {
    id: 2,
    title: "Branding & Logo Design",
    description:
      "High-quality branding package with clear visual identity and guidelines.",
    technologies: [
      { name: "Illustrator", icon: "devicon-illustrator-plain colored" },
      { name: "Photoshop", icon: "devicon-photoshop-plain colored" },
    ],
    features: [
      "Logo Pack",
      "Brand Colors",
      "Typography System",
      "Business Card Design",
    ],
    image: "https://via.placeholder.com/450x300",
    live: "#",
    code: "#",
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio-section">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <h2 className="portfolio-title">Our Portfolio</h2>
          <p className="portfolio-subtitle">
            Premium digital work we’ve crafted for our clients.
          </p>
        </div>

        <div className="portfolio-list">
          {projects.map((project) => (
            <div className="portfolio-horizontal-card" key={project.id}>
              <div className="portfolio-image-area">
                <img src={project.image} alt={project.title} className="portfolio-image" />
              </div>

              <div className="portfolio-info-area">
                <h3 className="ph-title">{project.title}</h3>
                <p className="ph-description">{project.description}</p>

                {/* TECHNOLOGIES */}
                <div className="ph-block">
                  <h4>Tech Stack</h4>
                  <ul className="ph-tags">
                    {project.technologies.map((tech, i) => (
                      <li key={i}>
                        <i className={tech.icon}></i> {tech.name}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* FEATURES */}
                <div className="ph-block">
                  <h4>Features</h4>
                  <ul className="ph-features">
                    {project.features.map((feature, i) => (
                      <li key={i}>
                        <i className="fa-solid fa-check"></i> {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Buttons */}
                <div className="ph-btn-group">
                  <a href={project.live} target="_blank" className="portfolio-btn live-btn">
                    <i className="fa-solid fa-arrow-up-right-from-square"></i> Live
                  </a>
                  <a href={project.code} target="_blank" className="portfolio-btn code-btn">
                    <i className="fa-brands fa-github"></i> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BottomRevealBlur height="20vh" />

    </section>
  );
};

export default Portfolio;
