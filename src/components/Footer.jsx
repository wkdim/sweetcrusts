function Footer() {
  return (
    <footer className="footer-modern">
      <div className="footer-container">
        <div className="footer-info">
          <p>
            &copy; {new Date().getFullYear()} Sweet Crusts Bakery. All Rights Reserved.
          </p>
          <p>123 Crust Lane, Pastry City, PC 12345</p>
          <p>
            Email:{" "}
            <a href="mailto:info@sweetcrusts.com">info@sweetcrusts.com</a> | Phone:{" "}
            <a href="tel:+1234567890">+1 234 567 890</a>
          </p>
        </div>
        <div className="footer-social">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <span role="img" aria-label="Facebook">
              📘
            </span>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <span role="img" aria-label="Instagram">
              📸
            </span>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <span role="img" aria-label="Twitter">
              🐦
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
