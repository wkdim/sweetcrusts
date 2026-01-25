import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all fields.");
      return;
    }
    // Simulate form submission
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="contact-modern"
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
        background: "#f9f9f9",
      }}
    >
      <div
        className="contact-container"
        style={{
          width: "100%",
          maxWidth: "500px",
          margin: "2em auto",
          background: "#fff",
          borderRadius: "16px",
          boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
          padding: "2em",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#e67e22",
            fontWeight: 700,
            fontSize: "2em",
          }}
        >
          Contact Us
        </h2>
        <p
          style={{
            textAlign: "center",
            fontSize: "1.1em",
            color: "#555",
          }}
        >
          We value your feedback and inquiries. Please reach out to us using the
          form below or via our contact details.
        </p>
        <div
          className="contact-details"
          style={{
            textAlign: "center",
            marginBottom: "1.5em",
          }}
        >
          <span>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:info@sweetcrusts.com"
              style={{ color: "#e67e22" }}
            >
              info@sweetcrusts.com
            </a>
          </span>
          <span style={{ marginLeft: "1em" }}>
            <strong>Phone:</strong>{" "}
            <a
              href="tel:+123456789"
              style={{ color: "#e67e22" }}
            >
              +123 456 789
            </a>
          </span>
        </div>
        {submitted ? (
          <div
            className="contact-success"
            style={{
              textAlign: "center",
              color: "#388e3c",
              fontSize: "1.1em",
              margin: "1em 0",
            }}
          >
            Thank you for your message! We'll get back to you soon.
          </div>
        ) : (
          <form
            className="contact-form"
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1em",
            }}
          >
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              style={{
                padding: "0.8em",
                borderRadius: "8px",
                border: "1px solid #e0e0e0",
                fontSize: "1em",
                background: "#f5f5f5",
              }}
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              style={{
                padding: "0.8em",
                borderRadius: "8px",
                border: "1px solid #e0e0e0",
                fontSize: "1em",
                background: "#f5f5f5",
              }}
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              placeholder="Your Message"
              required
              style={{
                padding: "0.8em",
                borderRadius: "8px",
                border: "1px solid #e0e0e0",
                fontSize: "1em",
                background: "#f5f5f5",
                resize: "none",
              }}
            ></textarea>
            {error && (
              <div
                className="contact-error"
                style={{
                  color: "#d32f2f",
                  fontSize: "0.95em",
                  marginBottom: "0.5em",
                }}
              >
                {error}
              </div>
            )}
            <button
              type="submit"
              className="contact-btn"
              style={{
                background: "#e67e22",
                color: "#fff",
                fontWeight: 700,
                fontSize: "1.1em",
                border: "none",
                borderRadius: "8px",
                padding: "0.8em",
                cursor: "pointer",
                transition: "background 0.2s",
              }}
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Contact;
