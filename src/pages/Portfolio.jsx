import React, { useRef } from "react";
import "./Portfolio.css";
import { Link } from "react-router-dom";
import { BottomRevealBlur } from "@/components/ui/bottom-reveal-blur.jsx";
import {
  motion as Motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
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
    title: "Venzio - Nightlife Event Platform",
    industryTag: "Nightlife & Events - India",
    description:
      "A full-stack nightlife discovery and ticketing platform for Pune where clubs and event organisers list events and users browse, search, and book tickets in one place. Currently in active development with live event data.",
    outcomeStat: "Live events from multiple Pune venues, currently in beta",
    liveUrl: "https://venzio.vercel.app",
    screenshotUrl: venzi,
  },
  {
    id: "hulkdecor",
    title: "Hulk Decor Website",
    industryTag: "Interior Design & Fit-Out - UAE",
    description:
      "Hulk Decor is a UAE interior design and fit-out firm with 18+ years of experience that needed a premium digital showcase. The website presents turnkey portfolios and services while giving commercial and residential clients a direct quote-request path.",
    outcomeStat: "100+ projects showcased across 7 Emirates",
    liveUrl: "https://www.hulkdecor.com",
    screenshotUrl: hulkDecorWebsite,
  },
  {
    id: "irasco",
    title: "IRASCO Website",
    industryTag: "HVAC & Climate Control - UAE",
    description:
      "A modern service showcase for IRASCO, a UAE-based HVAC company specialising in ducting, ventilation, and living atmosphere climate systems. It converts commercial and residential enquiries through a clean, trust-building web presence.",
    outcomeStat:
      "Full HVAC service range presented across residential & commercial segments",
    liveUrl: "https://irasco.vercel.app",
    screenshotUrl: irasco,
  },
  {
    id: "ascon",
    title: "Ascon Constructions Website",
    industryTag: "Construction - India",
    description:
      "A professional website for Ascon Constructions & Co., a trusted residential and commercial building contractor in Virar. It showcases their project portfolio and services with a clear brand promise of quality and on-time delivery.",
    outcomeStat: "Covers residential, commercial & industrial project verticals",
    liveUrl: "https://ascon-construction.vercel.app",
    screenshotUrl: ascon,
  },
  {
    id: "anchor-trading",
    title: "Anchor Tr LLC Website",
    industryTag: "Trading & Distribution - UAE",
    description:
      "Anchor Tr LLC supplies products across the UAE and needed a clearer digital storefront. The new website makes its services and product catalogue easier to discover and enquire about.",
    outcomeStat: "4 core services presented in one enquiry-focused experience",
    liveUrl: "https://www.anchortrdg.com/",
    screenshotUrl: anchorTrdgWebsite,
  },
  {
    id: "vp-khambe",
    title: "VP Khambe & Associates Website",
    industryTag: "Chartered Accountancy - India",
    description:
      "VP Khambe & Associates helps businesses navigate accounting and compliance in Pune. Its new website clarifies specialist services and creates a direct path for prospective clients to make contact.",
    outcomeStat: "4 key service journeys consolidated into one website",
    liveUrl: "https://cavinaykhambe.in",
    screenshotUrl: vpKhambeWebsite,
  },
];

const dashboardProjects = [
  {
    id: "secureshare",
    title: "SecureShare File Platform",
    industryTag: "Cybersecurity - SaaS",
    description:
      "SecureShare gives teams a protected place to store and exchange sensitive files. Its dashboard simplifies encrypted uploads, sharing, downloads, and file management in one responsive workspace.",
    outcomeStat: "256-bit encryption across the complete file-sharing flow",
    liveUrl: "https://webblers.com",
    screenshotUrl: secureshareDashboard,
  },
  {
    id: "ops-panel",
    title: "OPs Linux Server Management Panel",
    industryTag: "Cloud Operations - Dashboard",
    description:
      "The OPs Panel helps technical teams manage Linux servers without juggling separate tools. It brings monitoring, logs, applications, and SSH-powered administration into one operational dashboard.",
    outcomeStat: "4 critical server workflows unified in one control panel",
    liveUrl: "https://webblers.com",
    screenshotUrl: opsDashboard,
  },
];

const cardContentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const isEvenCard = index % 2 === 0;
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 92%", "end 18%"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 95,
    damping: 26,
    mass: 0.4,
  });
  const imageY = useTransform(smoothProgress, [0, 1], [34, -34]);
  const imageScale = useTransform(smoothProgress, [0, 0.45, 1], [1.08, 1, 1.05]);
  const glowOpacity = useTransform(smoothProgress, [0, 0.42, 1], [0, 0.9, 0.15]);
  const cardRotate = useTransform(
    smoothProgress,
    [0, 0.45, 1],
    [isEvenCard ? -1.4 : 1.4, 0, isEvenCard ? 0.7 : -0.7],
  );

  return (
    <Motion.article
      ref={cardRef}
      className="portfolio-horizontal-card"
      style={reduceMotion ? undefined : { rotateZ: cardRotate }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "120px 0px 120px 0px", amount: 0.04 }}
      variants={{
        hidden: {
          opacity: 0,
          y: 96,
          x: isEvenCard ? -120 : 120,
          scale: 0.92,
          filter: "blur(12px)",
        },
        visible: {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          filter: "blur(0px)",
          transition: {
            duration: 0.95,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -10,
              scale: 1.012,
              transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
            }
      }
    >
      <Motion.span
        className="portfolio-card-glow"
        style={reduceMotion ? undefined : { opacity: glowOpacity }}
        aria-hidden="true"
      />
      <a
        className="portfolio-image-area"
        href={project.liveUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={`View ${project.title} live site`}
      >
        <Motion.img
          src={project.screenshotUrl}
          alt={`${project.title} screenshot`}
          className="portfolio-image"
          style={reduceMotion ? undefined : { y: imageY, scale: imageScale }}
        />
        {project.id === "venzio" && (
          <span className="portfolio-progress-badge">In Progress</span>
        )}
        <span className="portfolio-image-overlay">View live site -&gt;</span>
      </a>

      <div className="portfolio-info-area">
        <Motion.span className="ph-industry-tag" variants={cardContentVariants}>
          {project.industryTag}
        </Motion.span>
        <Motion.h3 className="ph-title" variants={cardContentVariants}>
          {project.title}
        </Motion.h3>
        <Motion.p className="ph-description" variants={cardContentVariants}>
          {project.description}
        </Motion.p>
        <Motion.p
          className="ph-outcome-stat"
          variants={{
            hidden: { opacity: 0, x: -18 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
            },
          }}
        >
          {project.outcomeStat}
        </Motion.p>
        <Motion.a
          className="ph-project-link"
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          variants={cardContentVariants}
          whileTap={{ scale: 0.96 }}
        >
          View project -&gt;
        </Motion.a>
      </div>
    </Motion.article>
  );
};

const ProjectList = ({ items }) => (
  <div className="portfolio-list">
    {items.map((project, index) => (
      <ProjectCard key={project.id} project={project} index={index} />
    ))}
  </div>
);

const Portfolio = () => {
  const heroRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.25]);

  return (
    <section className="portfolio-section">
      <div className="portfolio-ambient portfolio-ambient-left" aria-hidden="true" />
      <div className="portfolio-ambient portfolio-ambient-right" aria-hidden="true" />
      <div className="portfolio-container">
        <Motion.div
          ref={heroRef}
          className="portfolio-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          style={reduceMotion ? undefined : { y: heroY, opacity: heroOpacity }}
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
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      >
        <Motion.div
          className="portfolio-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
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
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
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
