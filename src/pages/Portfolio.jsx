import React from "react";
import "./Portfolio.css";
import { BottomRevealBlur } from "../Components/ui/bottom-reveal-blur";

const projects = [
  {
    id: 1,
    title: "Anchor Tr LLC Website",
    description:
      "A modern responsive website with contact automation and service showcase. based on Arabic color scheme",
    technologies: [
      { name: "React", icon: "devicon-react-original colored" },
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
    live: "https://anchortrdg.co",
    code: "#",
  },
  {
    id: 2,
    title: "Website for a Religious Community Gathering ",
    description:
      "We Developed Responsive website for Ashara Mubaraka 1447h for community people ",
    technologies: [
      { name: "React", icon: "devicon-react-original colored" },
      { name: "CSS Modules", icon: "devicon-css3-plain colored" },
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
    ],
    features: [
      "Logo Pack",
      "Brand Colors",
      "Typography System",
      "Business Card Design",
    ],
    image: "src/assets/previews/website2.png",
    live: "#",
    code: "#",
  },

  {
    id: 3,
    title: "Frontend Design For Recipix A Recipe Management Webapp",
    description:
      "Developed Responsive Frontend for Recipix A Recipe Management Webapp ",
    technologies: [
      { name: "React", icon: "devicon-react-original colored" },
      { name: "CSS Modules", icon: "devicon-css3-plain colored" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
    ],
    features: [
      "Logo Pack",
      "Brand Colors",
      "Typography System",
      "UI/UX Design",
      "Fast & Interactive",
    ],
    image: "src/assets/previews/Recipix.png",
    live: "#",
    code: "#",
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio-section">
      <div className="portfolio-container">
        
        {/* ANIMATED HEADER */}
        <div className="portfolio-header">
          <span className="section-badge">Selected Projects</span>
          <h2 className="portfolio-title">
            Our <span className="highlight-text">Digital Craft</span>
          </h2>
          <p className="portfolio-subtitle">
            Premium digital experiences we’ve built for our clients.
            Bridging imagination with code.
          </p>
          <div className="header-decoration-line"></div>
        </div>

        <div className="portfolio-list">
          {projects.map((project) => (
            <div className="portfolio-horizontal-card" key={project.id}>
              <div className="portfolio-image-area">
                <img
                  src={project.image}
                  alt={project.title}
                  className="portfolio-image"
                />
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