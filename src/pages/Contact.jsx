import React, { useState } from "react";
import "./Contact.css";
import { FaEnvelope, FaWhatsapp, FaPhoneAlt, FaInstagram } from "react-icons/fa";

const Contact = () => {
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
    const mailtoLink = `mailto:yourmail@example.com?subject=Message from ${formData.name}&body=${formData.message}%0A%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hello, I’d like to get in touch!");
    window.open(`https://wa.me/919329848282?text=${message}`, "_blank");
  };

  return (
    <section className="contact-section">
      <div className="contact-header">
        <h2>Contact Us</h2>
        <p>We’d love to hear from you! Choose how you’d like to reach us below.</p>
      </div>

      <div className="contact-container">
        {/* ✉️ Email Form */}
        <div className="contact-card email-card">
          <FaEnvelope className="contact-icon" />
          <h3>Send us a Message</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button type="submit">Send Email</button>
          </form>
        </div>

        {/* 💬 WhatsApp Card */}
        <div className="contact-card whatsapp-card" onClick={handleWhatsApp}>
          <FaWhatsapp className="contact-icon" />
          <h3>Chat on WhatsApp</h3>
          <p>Instantly reach us on WhatsApp for quick responses.</p>
          <button>Start Chat</button>
        </div>

        {/* 📞 Call Card */}
        <div className="contact-card call-card">
          <FaPhoneAlt className="contact-icon" />
          <h3>Call Us</h3>
          <p>Prefer speaking directly? We’re available for calls.</p>
          <a href="tel:+919329848282">
            <button>Call Now</button>
          </a>
        </div>

        {/* 📸 Instagram QR Card */}
        <div className="contact-card instagram-card">
          <FaInstagram className="contact-icon" />
          <h3>Follow us on Instagram</h3>
          <p>Scan the QR below or click to follow our official account.</p>
          <img
            src="/instagramQR.png"
            alt="Instagram QR Code"
            className="qr-image"
          />
          <a
            href="https://www.instagram.com/webblersdotcom"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Follow on Instagram</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
