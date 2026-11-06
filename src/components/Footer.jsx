import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Wheat,
  MapPin,
  Clock,
  Phone,
  Mail,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

function FacebookIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  );
}

function TwitterIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
    </svg>
  );
}

function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="footer-modern">
      <div className="footer-container">
        {/* Top 4-Column Grid */}
        <div className="footer-columns-grid">
          {/* Col 1: Brand & Heritage */}
          <div className="footer-col brand-col">
            <Link to="/" className="footer-brand-logo">
              <span className="brand-crest">
                <Wheat className="w-6 h-6 text-amber-500" />
              </span>
              <div className="brand-info">
                <span className="footer-brand-title">Sweet Crusts</span>
                <span className="footer-brand-sub">Osu, Accra · Est. 2012</span>
              </div>
            </Link>
            <p className="footer-brand-desc">
              Baking tea bread, meat pies, and celebration cakes for Accra every morning since 2012, with real butter, Ghana cocoa and fresh local ingredients.
            </p>
            <div className="footer-quality-badge">
              <ShieldCheck className="w-4 h-4 text-amber-500" />
              <span>FDA Ghana Registered · Pay with MoMo</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="footer-col links-col">
            <h4 className="footer-col-title">The Bakery</h4>
            <ul className="footer-nav-list">
              <li>
                <Link to="/menu">Menu & Order</Link>
              </li>
              <li>
                <Link to="/custom-cake">Custom Cakes</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/about">Our Story</Link>
              </li>
              <li>
                <Link to="/contact">Location & Hours</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Counter & Bake Hours */}
          <div className="footer-col hours-col">
            <h4 className="footer-col-title">Visit Us</h4>
            <div className="footer-contact-item">
              <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
              <span>Oxford Street, Osu, Accra (GA-000-0000)</span>
            </div>
            <div className="footer-contact-item">
              <Clock className="w-4 h-4 text-amber-500 shrink-0" />
              <div>
                <div>Mon - Sat: 6:30 AM to 8:00 PM</div>
                <div>Sun: 12:00 PM to 6:00 PM</div>
                <div className="closed-note">Open on public holidays</div>
              </div>
            </div>
            <div className="footer-contact-item">
              <Phone className="w-4 h-4 text-amber-500 shrink-0" />
              <a href="tel:+233200000000">+233 20 000 0000</a>
            </div>
            <div className="footer-contact-item">
              <Mail className="w-4 h-4 text-amber-500 shrink-0" />
              <a href="mailto:hello@sweetcrusts.com.gh">hello@sweetcrusts.com.gh</a>
            </div>
          </div>

          {/* Col 4: Hearth Dispatch Newsletter */}
          <div className="footer-col newsletter-col">
            <h4 className="footer-col-title">Join Our List</h4>
            <p className="newsletter-desc">
              Get new menu items, Christmas and Valentine’s specials, and 10% off your first order.
            </p>

            {subscribed ? (
              <div className="newsletter-success">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Thank you. You are on the list!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="newsletter-form">
                <div className="newsletter-input-wrap">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit" aria-label="Subscribe">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}

            <div className="footer-social-row">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="social-icon-btn"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="social-icon-btn"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Twitter"
                className="social-icon-btn"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:hello@sweetcrusts.com.gh"
                aria-label="Send us an email"
                className="social-icon-btn"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} Sweet Crusts Bakery Ltd · Oxford Street, Osu, Accra
          </p>
          <div className="footer-bottom-links">
            <Link to="/credits">Photo credits</Link>
            <span>Allergen Notice: Our kitchen handles wheat, dairy, eggs, and groundnuts.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
