import React from "react";
import "./Portfolio.css";
import { Link } from "react-router-dom";
import { BottomRevealBlur } from "@/components/ui/bottom-reveal-blur.jsx";
import { motion as Motion } from "framer-motion";
import anchorTrdgWebsite from "@/assets/previews/website3.png";
import vpKhambeWebsite from "@/assets/previews/ca.png";
import hulkDecorWebsite from "@/assets/previews/hulkdecor.png";
import secureshareDashboard from "@/assets/previews/securesharethumb.png";
import opsDashboard from "@/assets/previews/ops.png";
import venzi from "@/assets/previews/venzio.png";
import irasco from "@/assets/previews/irasco.png";
import ascon from "@/assets/previews/ascon.png";

const projects = [
  {
    id: "venzio",
    title: "Venzio — Nightlife Event Platform",
    industryTag: "Nightlife & Events · India",
    description:
      "A full-stack nightlife discovery and ticketing platform for Pune where clubs and event organisers list events and users browse, search, and book tickets in one place. Currently in active development with live event data.",
    outcomeStat: "Live events from multiple Pune venues, currently in beta",
    liveUrl: "https://venzio.vercel.app",
    screenshotUrl: venzi,
    techStack: ["React", "Node.js"],
    features: [
      "Event discovery with city filter",
      "Ticket booking flow",
      "Organiser dashboard",
      "Search by events, venues, artists",
    ],
  },
  {
    id: "hulkdecor",
    title: "Hulk Decor Website",
    industryTag: "Interior Design & Fit-Out · UAE",
    description:
      "Hulk Decor is a UAE interior design and fit-out firm with 18+ years of experience that needed a premium digital showcase. The website presents turnkey portfolios and services while giving commercial and residential clients a direct quote-request path.",
    outcomeStat: "100+ projects showcased across 7 Emirates",
    liveUrl: "https://www.hulkdecor.com",
    screenshotUrl: hulkDecorWebsite,
    techStack: ["Next.js", "Tailwind CSS"],
    features: [
      "Project gallery",
      "Quote request form",
      "Multi-region SEO",
      "Responsive design",
    ],
  },
  {
    id: "irasco",
    title: "IRASCO Website",
    industryTag: "HVAC & Climate Control · UAE",
    description:
      "A modern service showcase for IRASCO, a UAE-based HVAC company specialising in ducting, ventilation, and living atmosphere climate systems. It converts commercial and residential enquiries through a clean, trust-building web presence.",
    outcomeStat:
      "Full HVAC service range presented across residential & commercial segments",
    liveUrl: "https://irasco.vercel.app",
    screenshotUrl: irasco,
    techStack: ["React", "Tailwind CSS"],
    features: ["Service showcase", "Contact integration", "Responsive design"],
  },
  {
    id: "ascon",
    title: "Ascon Constructions Website",
    industryTag: "Construction · India",
    description:
      "A professional website for Ascon Constructions & Co., a trusted residential and commercial building contractor in Virar. It showcases their project portfolio and services with a clear brand promise of quality and on-time delivery.",
    outcomeStat: "Covers residential, commercial & industrial project verticals",
    liveUrl: "https://ascon-construction.vercel.app",
    screenshotUrl: ascon,
    techStack: ["React", "CSS Modules"],
    features: [
      "Project portfolio",
      "Services page",
      "Contact form",
      "SEO optimised",
    ],
  },
  {
    id: "anchor-trading",
    title: "Anchor Tr LLC Website",
    industryTag: "Trading & Distribution · UAE",
    description:
      "Anchor Tr LLC supplies products across the UAE and needed a clearer digital storefront. The new website makes its services and product catalogue easier to discover and enquire about.",
    outcomeStat: "4 core services presented in one enquiry-focused experience",
    liveUrl: "https://www.anchortrdg.com/",
    screenshotUrl: anchorTrdgWebsite,
    techStack: ["React", "CSS Modules", "EmailJS"],
    features: [
      "Contact form integration",
      "Responsive design",
      "Product gallery",
      "Search and sort",
    ],
  },
  {
    id: "vp-khambe",
    title: "VP Khambe & Associates Website",
    industryTag: "Chartered Accountancy · India",
    description:
      "VP Khambe & Associates helps businesses navigate accounting and compliance in Pune. Its new website clarifies specialist services and creates a direct path for prospective clients to make contact.",
    outcomeStat: "4 key service journeys consolidated into one website",
    liveUrl: "https://cavinaykhambe.in",
    screenshotUrl: vpKhambeWebsite,
    techStack: ["React", "Tailwind CSS", "EmailJS"],
    features: [
      "Contact form integration",
      "Responsive design",
      "Blog",
      "Dedicated service pages",
    ],
  },
];

const dashboardProjects = [
  {
    id: "secureshare",
    title: "SecureShare File Platform",
    industryTag: "Cybersecurity · SaaS",
    description:
      "SecureShare gives teams a protected place to store and exchange sensitive files. Its dashboard simplifies encrypted uploads, sharing, downloads, and file management in one responsive workspace.",
    outcomeStat: "256-bit encryption across the complete file-sharing flow",
    liveUrl: "https://webblers.com",
    screenshotUrl: secureshareDashboard,
    techStack: ["React", "Tailwind CSS", "Node.js", "AWS S3"],
    features: [
      "AES-256 encryption",
      "File upload and sharing",
      "File download",
      "File management",
    ],
  },
  {
    id: "ops-panel",
    title: "OPs Linux Server Management Panel",
    industryTag: "Cloud Operations · Dashboard",
    description:
      "The OPs Panel helps technical teams manage Linux servers without juggling separate tools. It brings monitoring, logs, applications, and SSH-powered administration into one operational dashboard.",
    outcomeStat: "4 critical server workflows unified in one control panel",
    liveUrl: "https://webblers.com",
    screenshotUrl: opsDashboard,
    techStack: ["React", "Tailwind CSS", "Python", "Django", "SSH"],
    features: [
      "Server management",
      "Server monitoring",
      "Server logs",
      "Application management",
    ],
  },
];

const listVariants = {
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const ProjectCard = ({ project, index }) => {
  const isOddCard = index % 2 === 0;

  return (
    <Motion.article
      className="portfolio-horizontal-card"
      variants={{
        hidden: {
          opacity: 0,
          y: 80,
          x: isOddCard ? -100 : 100,
          scale: 0.85,
        },
        visible: {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          transition: {
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1],
          },
        },
      }}
    >
      <a
        className="portfolio-image-area"
        href={project.liveUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={`View ${project.title} live site`}
      >
        <img
          src={project.screenshotUrl}
          alt={`${project.title} screenshot`}
          className="portfolio-image"
        />
        {project.id === "venzio" && (
          <span className="portfolio-progress-badge">In Progress</span>
        )}
        <span className="portfolio-image-overlay">View live site ↗</span>
      </a>

      <div className="portfolio-info-area">
        <span className="ph-industry-tag">{project.industryTag}</span>
        <h3 className="ph-title">{project.title}</h3>
        <p className="ph-description">{project.description}</p>
        <p className="ph-outcome-stat">{project.outcomeStat}</p>
        <a
          className="ph-project-link"
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
        >
          View project ↗
        </a>
      </div>
    </Motion.article>
  );
};

const ProjectList = ({ items }) => (
  <Motion.div
    className="portfolio-list"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={listVariants}
  >
    {items.map((project, index) => (
      <ProjectCard key={project.id} project={project} index={index} />
    ))}
  </Motion.div>
);

const Portfolio = () => {
  return (
    <section className="portfolio-section">
      <div className="portfolio-container">
        <Motion.div
          className="portfolio-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">Selected Projects</span>
          <h2 className="portfolio-title">
            Our <span className="highlight-text">Digital Craft</span>
          </h2>
          <p className="portfolio-subtitle">
            Premium digital experiences we&apos;ve built for our clients.
            Bridging imagination with code.
          </p>
          <div className="header-decoration-line"></div>
        </Motion.div>

        <ProjectList items={projects} />
      </div>

      <Motion.div
        className="portfolio-container dashboard-projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Motion.div
          className="portfolio-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="portfolio-title">
            Personalized <span className="highlight-text">Dashboards</span>
          </h2>
        </Motion.div>

        <ProjectList items={dashboardProjects} />
      </Motion.div>

      <Motion.section
        className="cta-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="cta-content-glass">
          <h2>Ready to Boost Your Business?</h2>
          <Link to="/contact">
            <button className="cta-button">Get Free Consultation</button>
          </Link>
        </div>
      </Motion.section>
      <BottomRevealBlur height="20vh" />
    </section>
  );
};

export default Portfolio;
