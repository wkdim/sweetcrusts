import React, { useState } from "react";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  Calendar,
  Sparkles,
  HelpCircle,
} from "lucide-react";
import usePageMeta from "../hooks/usePageMeta";
import { submitContactForm } from "../lib/contact";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = "Please enter your full name.";
  if (!form.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_RE.test(form.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!form.topic) errors.topic = "Please select an inquiry topic.";
  if (!form.message.trim()) {
    errors.message = "Please write a brief message or request details.";
  } else if (form.message.trim().length < 10) {
    errors.message = "Please provide at least 10 characters so we can help.";
  }
  return errors;
}

function Contact() {
  usePageMeta(
    "Contact & Location",
    "Visit Sweet Crusts Bakery on Oxford Street, Osu, or contact us for custom cakes, event catering, and bulk bread orders in Accra."
  );

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "custom-cake",
    eventDate: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState("");
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    setSubmitError("");
    try {
      await submitContactForm(form);
      const generatedCode = `SC-${Math.floor(100000 + Math.random() * 900000)}`;
      setConfirmationCode(generatedCode);
      setSubmitted(true);
    } catch (err) {
      console.error("Contact form submission failed:", err);
      setSubmitError(
        "Unable to send your message right now. Please try again or call or WhatsApp us on +233 20 000 0000."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setForm({
      name: "",
      email: "",
      phone: "",
      topic: "custom-cake",
      eventDate: "",
      message: "",
    });
    setErrors({});
    setSubmitted(false);
    setConfirmationCode("");
  };

  return (
    <div className="contact-page-wrap">
      {/* Hero Header */}
      <section className="contact-hero-section">
        <div className="contact-hero-container">
          <div className="contact-kicker">
            <span className="kicker-text">GET IN TOUCH</span>
          </div>
          <h1 className="contact-headline">
            Visit Us in Osu or <br />
            <span className="hero-serif-accent">Send Us a Message</span>
          </h1>
          <p className="contact-subtext">
            Planning a birthday, wedding, engagement or outdooring cake? Need snacks for a church programme, funeral or office meeting? Or just passing by for fresh tea bread? Our doors are open.
          </p>
        </div>
      </section>

      {/* Main Two-Column Content */}
      <section className="contact-main-section">
        <div className="contact-main-container">
          <div className="contact-layout-grid">
            {/* Left Column: Bakery Counter Information & Hours */}
            <div className="contact-info-col">
              {/* Counter Location Card */}
              <div className="info-card">
                <div className="info-card-header">
                  <div className="info-icon-box">
                    <MapPin className="w-5 h-5 text-amber-800" />
                  </div>
                  <div>
                    <h3>Our Bakery</h3>
                    <p className="info-card-sub">Osu, Accra</p>
                  </div>
                </div>
                <div className="info-card-body">
                  <p className="address-line">Oxford Street, Osu, near Danquah Circle</p>
                  <p className="address-line">Accra, Ghana · GhanaPost GPS: GA-000-0000</p>
                  <p className="address-note">
                    Parking is available in front of the shop. Ask any trotro or taxi driver for Danquah Circle and look for our sign.
                  </p>
                </div>
              </div>

              {/* Hearth Hours & Bake Schedule Card */}
              <div className="info-card">
                <div className="info-card-header">
                  <div className="info-icon-box">
                    <Clock className="w-5 h-5 text-amber-800" />
                  </div>
                  <div>
                    <h3>Opening Hours</h3>
                    <p className="info-card-sub">Fresh batches out of the oven twice daily</p>
                  </div>
                </div>
                <div className="info-card-body">
                  <div className="hours-row">
                    <span className="hours-days">Monday to Saturday</span>
                    <span className="hours-time">6:30 AM to 8:00 PM</span>
                  </div>
                  <div className="hours-row">
                    <span className="hours-days">Sunday</span>
                    <span className="hours-time">12:00 PM to 6:00 PM</span>
                  </div>
                  <div className="hours-row">
                    <span className="hours-days">Public Holidays</span>
                    <span className="hours-time">8:00 AM to 4:00 PM</span>
                  </div>

                  <div className="bake-times-badge">
                    <strong>Fresh Bake Times:</strong> Tea bread and sugar bread at 5:30 AM; meat pies and a second bread batch at 2:00 PM.
                  </div>
                </div>
              </div>

              {/* Direct Communication Channels */}
              <div className="info-card">
                <div className="info-card-header">
                  <div className="info-icon-box">
                    <Phone className="w-5 h-5 text-amber-800" />
                  </div>
                  <div>
                    <h3>Direct Channels</h3>
                    <p className="info-card-sub">Call, WhatsApp or email us</p>
                  </div>
                </div>
                <div className="info-card-body direct-channels">
                  <div className="channel-item">
                    <Phone className="w-4 h-4 text-amber-800" />
                    <div>
                      <span className="channel-label">Phone & WhatsApp:</span>
                      <a href="tel:+233200000000" className="channel-link">
                        +233 20 000 0000
                      </a>
                    </div>
                  </div>
                  <div className="channel-item">
                    <Mail className="w-4 h-4 text-amber-800" />
                    <div>
                      <span className="channel-label">General Enquiries:</span>
                      <a href="mailto:hello@sweetcrusts.com.gh" className="channel-link">
                        hello@sweetcrusts.com.gh
                      </a>
                    </div>
                  </div>
                  <div className="channel-item">
                    <Sparkles className="w-4 h-4 text-amber-800" />
                    <div>
                      <span className="channel-label">Custom Cake Orders:</span>
                      <a href="mailto:cakes@sweetcrusts.com.gh" className="channel-link">
                        cakes@sweetcrusts.com.gh
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Consultation & Message Form */}
            <div className="contact-form-col">
              <div className="contact-form-card">
                {submitted ? (
                  <div className="contact-success-state" role="status">
                    <div className="success-icon-box">
                      <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                    </div>
                    <h2>Message Received. Medaase!</h2>
                    <p className="success-lead">
                      Thank you for contacting Sweet Crusts Bakery. Our team will get back to you by phone, WhatsApp or email within 24 hours.
                    </p>
                    <div className="confirmation-badge">
                      <span className="conf-label">Inquiry Reference Code:</span>
                      <strong className="conf-code">{confirmationCode}</strong>
                    </div>
                    <button
                      type="button"
                      className="reset-form-btn"
                      onClick={handleReset}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="form-header">
                      <h2>Send Us a Message</h2>
                      <p>
                        Fill out the details below and we will get back to you promptly with answers or a tailored consultation.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} noValidate className="contact-form-element">
                      {/* Name & Email Row */}
                      <div className="form-row-two">
                        <div className={`form-field ${errors.name ? "has-error" : ""}`}>
                          <label htmlFor="contact-name">Full Name *</label>
                          <input
                            id="contact-name"
                            name="name"
                            type="text"
                            placeholder="e.g. Ama Owusu"
                            value={form.name}
                            onChange={handleChange}
                            aria-invalid={Boolean(errors.name)}
                          />
                          {errors.name && <span className="field-error-msg">{errors.name}</span>}
                        </div>

                        <div className={`form-field ${errors.email ? "has-error" : ""}`}>
                          <label htmlFor="contact-email">Email Address *</label>
                          <input
                            id="contact-email"
                            name="email"
                            type="email"
                            placeholder="you@example.com"
                            value={form.email}
                            onChange={handleChange}
                            aria-invalid={Boolean(errors.email)}
                          />
                          {errors.email && <span className="field-error-msg">{errors.email}</span>}
                        </div>
                      </div>

                      {/* Phone & Topic Row */}
                      <div className="form-row-two">
                        <div className="form-field">
                          <label htmlFor="contact-phone">Phone Number (Optional)</label>
                          <input
                            id="contact-phone"
                            name="phone"
                            type="tel"
                            placeholder="e.g. 024 000 0000"
                            value={form.phone}
                            onChange={handleChange}
                          />
                        </div>

                        <div className={`form-field ${errors.topic ? "has-error" : ""}`}>
                          <label htmlFor="contact-topic">Inquiry Topic *</label>
                          <select
                            id="contact-topic"
                            name="topic"
                            value={form.topic}
                            onChange={handleChange}
                          >
                            <option value="custom-cake">Custom Celebration Cake</option>
                            <option value="catering">Event Catering (Weddings, Funerals, Church, Office)</option>
                            <option value="wholesale">Bulk Bread Supply (Shops & Schools)</option>
                            <option value="general">General Question or Feedback</option>
                          </select>
                          {errors.topic && <span className="field-error-msg">{errors.topic}</span>}
                        </div>
                      </div>

                      {/* Optional Event Date */}
                      {(form.topic === "custom-cake" || form.topic === "catering") && (
                        <div className="form-field">
                          <label htmlFor="contact-event-date">
                            Desired Event or Delivery Date (Optional)
                          </label>
                          <input
                            id="contact-event-date"
                            name="eventDate"
                            type="date"
                            value={form.eventDate}
                            onChange={handleChange}
                          />
                          <span className="field-helper-text">
                            Note: Please order celebration cakes at least 48 hours ahead, and wedding cakes at least 1 week ahead.
                          </span>
                        </div>
                      )}

                      {/* Message Field */}
                      <div className={`form-field ${errors.message ? "has-error" : ""}`}>
                        <label htmlFor="contact-message">Your Message or Request *</label>
                        <textarea
                          id="contact-message"
                          name="message"
                          rows="5"
                          placeholder="Tell us about the occasion, number of guests, flavours, colours, or any questions you have..."
                          value={form.message}
                          onChange={handleChange}
                          aria-invalid={Boolean(errors.message)}
                        />
                        {errors.message && (
                          <span className="field-error-msg">{errors.message}</span>
                        )}
                      </div>

                      {submitError && (
                        <div className="form-alert-error" role="alert">
                          {submitError}
                        </div>
                      )}

                      <button
                        type="submit"
                        className="contact-submit-btn"
                        disabled={submitting}
                      >
                        <Send className="w-4 h-4" />
                        <span>{submitting ? "Sending..." : "Send Message"}</span>
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
