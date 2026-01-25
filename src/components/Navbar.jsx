import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar-modern" role="navigation" aria-label="Main Navigation">
      <div className="navbar-container">
        <NavLink className="navbar-brand" to="/">
          <span role="img" aria-label="Bakery" style={{ marginRight: "8px" }}>
            🥐
          </span>
          Sweet Crusts
        </NavLink>
        <ul className="navbar-menu">
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gallery"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
