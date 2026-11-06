import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ShoppingBag, Menu as MenuIcon, X } from "lucide-react";
import { useCart } from "../context/CartContext";

const links = [
  { to: "/menu", label: "Menu & Order" },
  { to: "/custom-cake", label: "Custom Cakes" },
  { to: "/about", label: "Our Story" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { totalUnits, setIsCartOpen } = useCart();

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <nav className="navbar-modern" role="navigation" aria-label="Main Navigation">
      <div className="navbar-container">
        {/* Brand */}
        <NavLink className="navbar-brand" to="/">
          <span className="brand-logo-icon" role="img" aria-label="Bakery">
            🥐
          </span>
          <div className="brand-text-wrap">
            <span className="brand-title">Sweet Crusts</span>
            <span className="brand-sub">Bakery · Osu, Accra</span>
          </div>
        </NavLink>

        {/* Center Navigation Links */}
        <ul id="primary-navigation" className={`navbar-menu${open ? " open" : ""}`}>
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `nav-item-link ${isActive ? "active" : ""}`
                }
              >
                <span>{link.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right Actions: Cart & Mobile Toggle */}
        <div className="navbar-actions">
          <button
            type="button"
            className="navbar-cart-btn"
            onClick={() => setIsCartOpen(true)}
            aria-label={`Open shopping cart with ${totalUnits} items`}
          >
            <ShoppingBag className="w-4 h-4 text-stone-800" />
            {totalUnits > 0 && <span className="cart-badge">{totalUnits}</span>}
          </button>

          <button
            type="button"
            className="navbar-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="primary-navigation"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X className="w-5 h-5 text-stone-800" /> : <MenuIcon className="w-5 h-5 text-stone-800" />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
