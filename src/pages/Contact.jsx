import React, { useState } from "react";
import "./Contact.css";
import { FaEnvelope, FaWhatsapp, FaPhoneAlt, FaInstagram, FaPaperPlane } from "react-icons/fa";

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:contact@webblers.com?subject=Message from ${formData.name}&body=${formData.message}%0A%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hello, I’d like to get in touch!");
    window.open(`https://wa.me/919329848282?text=${message}`, "_blank");
  };

  return (
    <section className={`contact-section ${darkMode ? "dark" : ""}`}>
      
      {/* ANIMATED HEADER */}
      <div className="contact-header">
        <span className="section-badge">Get in Touch</span>
        <h2 className="contact-title">
          Let's <span className="highlight-text">Collaborate</span>
        </h2>
        <p className="contact-subtitle">
          Have a project in mind? We’d love to hear from you. 
          Choose your preferred way to reach us below.
        </p>
        <div className="header-decoration-line"></div>
      </div>

      <div className="contact-container">
        
        {/* ✉️ Email Form Card */}
        <div className="contact-card email-card">
          <div className="icon-wrapper">
            <FaEnvelope className="contact-icon" />
          </div>
          <h3>Send us a Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <textarea
                name="message"
                placeholder="Tell us about your project..."
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="contact-btn primary-btn">
              <span>Send Message</span> <FaPaperPlane />
            </button>
          </form>
        </div>

        {/* 💬 WhatsApp Card */}
        <div className="contact-card whatsapp-card" onClick={handleWhatsApp}>
          <div className="icon-wrapper">
            <FaWhatsapp className="contact-icon" />
          </div>
          <h3>Chat on WhatsApp</h3>
          <p>Instantly reach us for quick queries and updates.</p>
          <button className="contact-btn">Start Chat</button>
        </div>

        {/* 📞 Call Card */}
        <div className="contact-card call-card">
          <div className="icon-wrapper">
            <FaPhoneAlt className="contact-icon" />
          </div>
          <h3>Call Us</h3>
          <p>Prefer speaking directly? We’re available for calls.</p>
          <a href="tel:+919329848282" className="full-width-link">
            <button className="contact-btn">Call Now</button>
          </a>
        </div>

        {/* 📸 Instagram QR Card */}
        <div className="contact-card instagram-card">
          <div className="icon-wrapper">
            <FaInstagram className="contact-icon" />
          </div>
          <h3>Follow Us</h3>
          <p>Scan to connect with us on Instagram.</p>
          <div className="qr-container">
            <img
              src="/instagramQR.png"
              alt="Instagram QR Code"
              className="qr-image"
            />
          </div>
          <a
            href="https://www.instagram.com/webblersdotcom"
            target="_blank"
            rel="noopener noreferrer"
            className="full-width-link"
          >
            <button className="contact-btn">Follow Page</button>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;